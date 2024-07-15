//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94710513877";
global.owner = process.env.OWNER_NUMBER || "94776928548";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUd3eGpvWHEra05Wb1ZPL0tNbGxac3Q4cW81RmdVb0JqdFRsNDYzUDkyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnB5eUlDOUJCL0IwRGFUdlNnYm1NRGdMNmxPdUM0SFNWOEdSV1dMV01Icz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSTZDalh0YTlDc2dOdU9nUFBjaVdsY09oTWozc0RDR0d1UjR6YXJYTDBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSVNOSFNZREJVNWVwUWJkaSt0VjFLdlE0THdvNWZkWjFZTWx5cG1odkZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1LR1dENEJFSW9JNVF0SjFhNm9RQVBZUXdUVFhUT3hjRXA3eUVzYjlqRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg5UVp4WmlVRCtXSCtVNHA3d3pLeXpvN3VKNnhraFF2L1FCbkNFRUo4WHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ozYmVSRnBiWTJ5QWJidncwU3pmZUd4amMyY3ZlWjk5NGpnYWZPN3drdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDBaajhGWnQ5Sm51NERoZzB0dmMrYlFFM01sQXphbEVTRGR6M3hITlFSTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndDSWJnV3BXMzNlcjdIOWpZVGhFdVFLamxGNnJuRWY0R1hxRFowRFoydi9IajkzNnZwQnJuNnlrMWJEYzRSaXZMMmx5NTNPTkx4Szg0aE5GaDNta0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoiTW9Wc1o5S256UFdueG52MnBIR0lNcGNSWEg5anBkeXdJRkltdTc3WVlmWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc3NjkyODU0OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFQzg4Qjk2NzdBQ0FEQUYxMEYzNEIyNEI2NDg2QjM4OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMDYxODgwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc3NjkyODU0OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NTk4RTIzNjUzQ0IyM0ZFMDNEM0NFQkE5MjcxRjNBOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMDYxODgwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnblVnNU9FSVRSYXZUNTcyRl9LeE9nIiwicGhvbmVJZCI6IjgzZjFlZGQwLTY2MDQtNDA3ZS1iMWQxLTBmYjlhM2UwMzVjMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQa29zblpHWnpIbnVMQ3MvV1ZCZldtOGFtek09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRytzSytLS3ZNWXdPNmhTZ3VlRVZhRkw1VDN3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1QTkdEVkZXIiwibWUiOnsiaWQiOiI5NDc3NjkyODU0ODo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InNhbmp1bGEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tLL3lwY0NFT21qMWJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijl4SEtSK3lnVnBwbkdKS2RnbEs4b0diQ2NENG9hQ3FpSFkwd2RaWjJTSEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InpTV2t6eUIvenRGQzFUYk1EcDdSNWlKV1NFQWFBQkFBaDM4VFlEQ0wvdG1BSnNES0MxbWRvT3drcUtTKzNuM3dRZXYwR1Qrcyt0THp4YVFvNU9BbERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSNGxjZnZRU0pzVTV0azJUaDM2UTJMQkl5T3dtQ0g1R2Q5SnNSemN3M0dqUGNqZDFBeUVlWnRlWDU4TDZ3R2R5U254MnVhS3NseHN1dFZDUDFnRkFCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc2OTI4NTQ4OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmNSeWtmc29GYWFaeGlTbllKU3ZLQm13bkErS0dncW9oMk5NSFdXZGtodyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTA2MTg3OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNdkoifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-SANJUWA-OFC-LK 🇱🇰",
  author: process.env.PACK_AUTHER || "SANJUWA OFC",
  packname: process.env.PACK_NAME || "STICKER",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "94776928548",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "72oXsuE5urrMXuGg8wy7yrb2",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "sk_f3c03ec365fae08cc6f6a49d98713d284e16b2efa6fd0268",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
