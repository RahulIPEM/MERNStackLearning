const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.text", "utf-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "utf-8");

// readStream.on("data", data => {
//     writeStream.write(data);
// })
readStream.pipe(writeStream);