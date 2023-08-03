const fs = require("fs");

function readFile(path, callback) {
  fs.readFile(path, (error, value) =>
    callback({ success: !error, value: !!value ? value : error })
  );
}

readFile(__dirname + "/file.txt", (res) => console.info({ res }));

function writeFile(path, content, callback) {
  fs.writeFile(path, content, (error, value) =>
    callback({ success: !error, value: !!value ? value : error })
  );
}

writeFile(__dirname + "/write.txt", "example", (res) => console.info({ res }));

function deleteFile(path, callback) {
  fs.unlink(path, (error, value) =>
    callback({ success: !error, value: !!value ? value : error })
  );
}

deleteFile(__dirname + "/write.txt", (res) => console.info({ res }));
