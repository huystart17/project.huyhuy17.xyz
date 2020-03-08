import {myTelegramBot} from '../bot/telegram_bot'

export const debuggerTool = {
    handle_bug() {
        return async function (ctx, next) {
            try {
                await next();
                throw new Error("xxx");
                console.log("This is done of request")
            } catch (err) {
                let str =                     err.stack;
                ctx.body = str;
            }
        }
    },
    debug_time() {
        return async function (ctx, next) {
            const start = Date.now();
            await next();
            const ms = Date.now() - start;
            // myTelegramBot.send(`${ctx.url} : ${ms}ms`);
            ctx.set('X-Response-Time', `${ms}ms`);
        }
    }
};
