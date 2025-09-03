const fs = require("fs");
console.log("Starting!");

fs.readFile("D:\\JS\\Eloquent_JavaScript_small.pdf", "utf8", (err, data) => {
    if (err) throw err;
console.log(data);    
 });
console.log("Finished!");
