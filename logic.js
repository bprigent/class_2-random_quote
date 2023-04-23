//file dedicated to generating a random message
////////////////////////////////
////////////////////////////////


// function to generate randome quote
function generate_random_quote() {
    // get array from other file
    const quotes_js_file = require('./quotes.js');
    const quotes_arr_child = quotes_js_file.exported_quotes_arr;

    //counting the number of quotes automatically
    const quotes_number = quotes_arr_child.length;

    // generate a randome number between 0 and the quotes arr length
    let random_num = Math.floor(Math.random() * quotes_number);

    // get associated random quote from random number
    let random_quote = quotes_arr_child[random_num];
    
    console.log("hello");
    return random_quote;
};

//test 
console.log(generate_random_quote());
