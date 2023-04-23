//file dedicated to generating a random message
////////////////////////////////
////////////////////////////////


// get array from other file
const quotes_js_file = require('./quotes.js');
let quotes_arr = quotes_js_file.exported_quotes_arr;

//counting the number of quotes automatically
const quotes_number = quotes_arr.length;

// generate a randome number between 0 and the quotes arr length
let random_num = Math.floor(Math.random() * quotes_number);

// get associated random quote from random number
let random_quote = quotes_arr[random_num]


//tests
console.log(quotes_arr);
console.log(quotes_number);
console.log(random_num);
console.log(random_quote);
