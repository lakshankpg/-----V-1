const { cmd } = require("../command");

cmd({
  pattern: "restart",
  fromMe: true,
  desc: "Restart Eliza bot",
  category: "owner",
  filename: __filename,
}, async (robin, mek, m, { reply }) => {
  await reply("♻️ *Eliza bot restarting...*");
  process.exit(0);
});
