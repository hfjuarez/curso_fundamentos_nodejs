function asyncFunc(callback) {
  setTimeout(() => {
    console.log("async");
    callback();
  }, 1000);
}

console.log("start");
asyncFunc(() => console.log("end"));
