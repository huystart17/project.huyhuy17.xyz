import {html} from './view/home';
import {logger} from "./middleware/logger";
import {debuggerTool} from "./middleware/debbuger";
// import {MyApp} from "./app";
const Koa = require('koa');

let app = new Koa();

//handle một số middleware
app.use(debuggerTool.handle_bug());
app.use(debuggerTool.debug_time());
app.use(logger.log_method(':method :url'));

app.use(async (ctx, next) => {
    ctx.body = html;
});
app.listen(3000);
console.log("APP start at ", 3000 )
