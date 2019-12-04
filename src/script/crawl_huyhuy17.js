const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');
const http = require('http');
function sleep(timeInMiniSecond) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timeInMiniSecond);
  });
}

const downloadHttps = (url, destination) => new Promise((resolve, reject) => {
  const file = fs.createWriteStream(destination);

  https.get(url, response => {
      response.pipe(file);

      file.on('finish', () => {
        file.close(resolve(true));
      });
    })

    .on('error', error => {
      fs.unlink(destination);

      reject(error.message);
    });
});
const downloadHttp = (url, destination) => new Promise((resolve, reject) => {
  const file = fs.createWriteStream(destination);

  http.get(url, response => {
      response.pipe(file);

      file.on('finish', () => {
        file.close(resolve(true));
      });
    })

    .on('error', error => {
      fs.unlink(destination);

      reject(error.message);
    });
});
const getFilename =  url=> {
  {
   return url.split('/').pop().split('?').shift()
  }
};
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = "http://www.nettruyen.com/truyen-tranh/van-co-than-vuong/chap-1/489344";
  await page.goto(url);
  let out = await page.evaluate(() => {

    let lsSrc = Array.from(document.querySelectorAll('.page-chapter img')).map(item => item.src);
    let title = document.querySelector('title').text;
    return {lsSrc, title}
  });

  let {title = "new-folder", lsSrc} = out;

  let dir = `./storage/${title.trim().replace(/ /g, '-')}`;

  console.log("lsSrc, " ,lsSrc);
  console.log("dir, " ,dir);
  // if (!  fs.existsSync(dir)) {
  //    fs.mkdirSync(dir);
  // }
  await sleep(2);

  console.log("running download");

  await Promise.all(lsSrc.map(async (src, index) => {
    if (src.match(/http:\/\//)) {
      let file =getFilename(src) ;
      file && await downloadHttp(src, `${dir}/${file}`)
    } else if (src.match(/https:\/\//)) {
      let file =getFilename(src) ;
      file && await downloadHttps(src, `${dir}/${getFilename(file)}`)
    }

  }));
  // await page.goto(url);
  // await page.screenshot({path: './storage/example1.png'});
  await browser.close();
})();

