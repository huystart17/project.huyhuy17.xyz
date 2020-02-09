import {html} from "./view/home";

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body= html()
});

app.listen(3000);
