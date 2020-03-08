//type = module
// Make Mithril happy
if (!global.window) {
    global.window = global.document = global.requestAnimationFrame = undefined;
}

var m = require('mithril');
var render = require('mithril-node-render');
let comp = {
    view(v) {
        return [
            m('h1', 'done'),
            m('h2', 'hello'),
            m('h3', 'nguyễn quang huy')
        ];
    }
};

export const html = render.sync(m(comp));
