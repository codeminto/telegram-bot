const { Telegraf } = require("telegraf")

const bot = new Telegraf("7620685829:AAHJdhg8Bwc2-RQVhpZKXu4N1PzXDz7vGkc");

const web_link = "https://telegrambot-test-orpin.vercel.app/";

// bot.on('message', (ctx) =>
//   ctx.reply("Hello! welcome to bangle", {
//     reply_markup: {
//       inline_keyboard: [
//         [{ text: "Play Now", url: web_link }]
//       ],
//     },
//   })
// );

// bot.on('message', (ctx) => {
//   ctx.reply("Hello! welcome to bengal");
// });

bot.start((ctx) => {
  ctx.reply(
    "Hello! Welcome to Bengal 🎉\nYou are now in charge of a crypto exchange adventure!\nTap the screen, collect coins, and develop your income strategy.\nBring your friends to play and earn even more rewards together!",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Play Now", web_app: { url: web_link } }],
          [{ text: "Subscribe to the channel", url: "https://web.telegram.org/a/#7620685829" }],
          [{ text: "How to earn from the game", callback_data: "earn_info" }],
        ],
      },
    }
  );
});

bot.on("callback_query", (ctx) => {
  if (ctx.callbackQuery.data === "earn_info") {
    ctx.reply("Here's how you can earn from the game...");
  }
});

bot.launch();
