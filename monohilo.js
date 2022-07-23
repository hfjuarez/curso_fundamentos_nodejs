console.log("some text");

let i = 0;
setInterval(() => {
  console.log(i);
  i++;
  if (i === 5) {
    throw "some error";
  }
}, 1000);

console.log("next text");
