// console.info(process);

process.on("beforeExit", () => {
  console.info("before exit");
  // Be careful is you set a setTimeout (and others), inside this event, is gonna be call forever
});

process.on("exit", () => {
  console.info("exit");
  // already disconnected from Event Loop
  // setImmediate is not gonna works
  setImmediate(() => {
    console.info("immediate exit");
  });
});

process.on("uncaughtException", (err, origin) => console.info({ err, origin }));

// console.info(a + 2);
