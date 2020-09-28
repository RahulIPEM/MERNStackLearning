const fs = require('fs');

// const files = fs.readdirSync("./assets");

// console.log(files);

fs.readdir("./assets", (err, files) => {
    if (err) {
        throw err;
    } else {
        console.log("complete");
        console.log(files);
    }
})

console.log("file reading started.");