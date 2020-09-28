const path = require('path');

const dirUploads = path.join(__dirname, new Date().getFullYear().toString(), "uploads")

console.log(dirUploads);