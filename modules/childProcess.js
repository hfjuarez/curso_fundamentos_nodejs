const { exec, spawn } = require("child_process");

// exec("ls -la", (err, stdout, stderr) => {
//   console.info({ err, stdout, stderr });
//   console.info(stdout);
// });
// exec("commandNotFound", (err, stdout, stderr) => {
//   console.info({ err, stdout, stderr });
//   console.info(stdout);
// });
// exec("node console.js", (err, stdout, stderr) => {
//   console.info({ err, stdout, stderr });
//   console.info(stdout);
// });

let childProcess = spawn("ls", ["-la"]);
console.log(childProcess.pid);
childProcess.stdout.on("data", (data) => console.info(data.toString()));
childProcess.on("exit", (eixtCode) => console.info("exitCode", eixtCode));
