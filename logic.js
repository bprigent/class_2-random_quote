//file dedicated to generating a random message


// get array from other file
const quotes_js_file = require('./quotes.js');
let quotes_arr = quotes_js_file.exported_quotes_arr;

//counting the number of quotes automatically
const quotes_number = quotes_arr.length;

console.log(quotes_arr);
console.log(quotes_number);
