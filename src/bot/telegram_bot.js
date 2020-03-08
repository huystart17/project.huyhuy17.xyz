// const TelegramBot = require('node-telegram-bot-api');
const rp = require('request-promise')
// replace the value below with the Telegram token you receive from @BotFather
const token = '1029067862:AAFeS2Zr-U8CgZEkdqRUdhcs9dvG-WA9rDE';

// Create a bot that uses 'polling' to fetch new updates
// export const myTelegramBot = new TelegramBot(token);

// Listen for any kind of message. There are different kinds of
// messages.
let myPublicChanel = '@huyhuy17';
export const myTelegramBot = {
    async send_msg({msg}) {
       await rp({url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${myPublicChanel}&text=${msg}`});
    }
}
