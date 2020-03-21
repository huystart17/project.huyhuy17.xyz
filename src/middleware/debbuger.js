import {myTelegramBot} from '../bot/telegram_bot'

export const debuggerTool = {
    handle_bug() {
        return async function (ctx, next) {
            try {
                await next();
            } catch (err) {
                let str = err.stack;
                ctx.body = str;
            }
        }
    },
    debug_time() {
        return async function (ctx, next) {


            const start = Date.now();
            await next();
            const ms = Date.now() - start;
            if (![
                '/favicon.ico',
                // '/'
            ].includes(ctx.path)) {
                myTelegramBot.send_msg({
                    msg: `${ctx.url} : ${ms}ms `
                });
            }

            ctx.set('X-Response-Time', `${ms}ms`);
        }
    }
};
