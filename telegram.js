const TelegramApi = require("node-telegram-bot-api");

const token = "5686894468:AAEcgVLteP2Ia__yRtrxoUr-dyo-J848G34";

const bot = new TelegramApi(token, { polling: true });

const start = () => {
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    checker(text, chatId);
  });
  const checker = async (text, chatId) => {
    var tmp = text.toLocaleLowerCase().split("").reverse().join("");
    if (text === "/start") {
      await bot.sendMessage(
        chatId,
        "Введи слово для проверки его на полиндромность"
      );
    } else if (text === tmp) {
      await bot.sendMessage(chatId, "Слово является палиндромом");
    } else await bot.sendMessage(chatId, "Слово не является палиндромом");
  };
};
start();
