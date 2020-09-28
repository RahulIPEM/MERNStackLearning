const fs = require("fs");

fs.readFile("./assets/alex.jpeg", (err, img) => {
    if (err) {
        console.log(`An error has occurred: ${err.message}`);
        process.exit();
    } else {
        console.log(img);
    }
});