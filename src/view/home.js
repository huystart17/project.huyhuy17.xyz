// Make Mithril happy
if (!global.window) {
  global.window = global.document = global.requestAnimationFrame = undefined
}

var m = require('mithril')
var render = require('mithril-node-render')

render(m('span', 'huhu')).then(function (html) {
  // html === '<span>huhu</span>'
})

var html = render.sync(m('h1', 'huhu'))
// html === '<span>huhu</span>'
