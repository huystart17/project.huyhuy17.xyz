const puppeteer = require('puppeteer');

const rp = require('request-promise')
let config = {
  url: 'https://www.producthunt.com/',
};
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  const {url} = config;
  await page.goto(url);

  function wait (ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
  }


  // Get the height of the rendered page
  const bodyHandle = await page.$('body');
  const { height } = await bodyHandle.boundingBox();
  await bodyHandle.dispose();

  // Scroll one viewport at a time, pausing to let content load
  const viewportHeight = page.viewport().height;
  let viewportIncr = 0;
  let count = 20
  while (count >0) {
    await page.evaluate(_viewportHeight => {
      window.scrollBy(0, _viewportHeight);
    }, viewportHeight);
    await wait(2000);
    count = count -1;
    viewportIncr = viewportIncr + viewportHeight;
  }


  let {lsObj} = await page.evaluate(async () => {
    var lsObj = [];
    const sleep = timeInMiniSecond => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, timeInMiniSecond);
      });
    };

    await sleep(2000);
    Array.from(document.querySelectorAll('ul'))
      .filter(item => item.className.includes('postsList'))
      .map(dom => {
        return Array.from(dom.parentElement.querySelectorAll('ul>li')).map(listElem => {
          let title = listElem.querySelector('div >a h3');
          if (title) {
            var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
            var regex = new RegExp(expression);
            lsObj.push({
              title: title.textContent,
              name: title.textContent,
              description: title.parentElement.querySelector('p').textContent,
              imgs: [listElem.querySelector('img')]
                .filter(item => item)
                .map(item =>
                  item
                    .getAttribute('srcset')
                    .split(' ')
                    .filter(item => item.match(regex)),
                )
                .reduce((acc, cur) => {
                  acc.push(cur);
                  return acc;
                }, []),
            });
          }
        });
      });
    return {lsObj};
  });
  console.log('lsObj', JSON.stringify(lsObj));

  let inDB = await rp.get({
    url: 'http://localhost:3030/product-hunt-list-post',
    json: true,

    qs: {
      name: {$in: lsObj.map(item => item.name)},
      $limit: 100
    }
  });
  let inDBLsObj = inDB.data;

  try {
    rp({
      url: 'http://localhost:3030/jobcrawl/',
      json: true,
      body: {
        lsObj,
        type: 'product-hunt-list-post'
      },
      method: 'POST'
    }).then(console.log);
    lsObj.map(async obj => {
        let inDBObj = inDBLsObj.find(item => item.name === obj.name);
        if (inDBObj) {
          rp({
            url: 'http://localhost:3030/product-hunt-list-post/' + inDBObj._id,
            json: true,
            body: obj,
            method: 'PATCH',
          }).then(console.log)
        } else {
          rp({
            url: 'http://localhost:3030/product-hunt-list-post/',
            json: true,
            body: obj,
            method: 'POST'
          }).then(console.log)
        }

      }
    );
  }catch(err){
    console.log(err)
  }


  // await browser.close();
})();

