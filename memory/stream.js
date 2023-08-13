const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";
let readableStream = fs.createReadStream(__dirname + "/input.txt");
readableStream.setEncoding("utf-8");
readableStream.on("data", (chunk) => {
  data += chunk;
});
readableStream.on("end", () => console.info(data));
