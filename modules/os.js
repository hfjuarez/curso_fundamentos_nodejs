const os = require("os");
// console.info(os.arch());
// console.info(os.platform());
// console.info(os.availableParallelism());
// console.info(os.cpus().length);
// console.info(os.cpus());
// console.info(os.constants);

const SIZE = 1024;

function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}

console.info(kb(os.freemem()), "KB");
console.info(mb(os.freemem()), "MB");
console.info(gb(os.freemem()), "GB");
console.info(gb(os.totalmem()), "GB");

console.info(os.homedir());
console.info(os.tmpdir());

console.info(os.hostname());
console.info(os.networkInterfaces());
