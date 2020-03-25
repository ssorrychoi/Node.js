var fs = require("fs");
fs.writeFileSync("food.txt", "I like Potato");
console.log(fs.readFileSync("food.txt").toString());
