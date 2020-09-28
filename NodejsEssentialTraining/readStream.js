// console.log("type something...");
// process.stdin.on("data", data => {
//     console.log(`I read ${data.length - 1} characters text.`);
// })
const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "utf-8");

let fileText = "";

readStream.on("data", data => {
    console.log(`I read ${data.length - 1} characters text.`);
    fileText += data;
})

readStream.once("data", data => {
    console.log(data);
})

readStream.on("end", () => {
    console.log("Finished reading file.");
    console.log(`In total, I read ${fileText.length - 1} character of text.`);
})

readStream.on("open", () => {
    console.log("read stream has been opened.");
})

readStream.on("close", () => {
    console.log("read stream has been closed.");
})