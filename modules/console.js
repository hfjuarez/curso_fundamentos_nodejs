console.group("basic functions");
console.log("log");
console.info("info");
console.error("error");
console.warn("warn");
console.groupEnd("basic functions");

const arr = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
];
console.table(arr);

console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.countReset("count");
console.count("count");
console.count("count");
