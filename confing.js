const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "rd0AmbxQ#Q9qxdMFGeMCm4W_QTpT4lFRVpk0j8CDdbm8wzLBTUoo",
  MONGODB: process.env.MONGODB || "mongodb+srv://ashenikavindi00:b1ajNVz40nKVlwjf@cluster0.rvzcqfk.mongodb.net/",
  OWNER_NUM: process.env.OWNER_NUM || "94763441376",
};
