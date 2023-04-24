//file dedicated to generating a random message
////////////////////////////////
////////////////////////////////
const quotes_arr = [
    "This is a first quote",
    "This is another quote",
    "Lorem upsum quote number 3",
    "final quote, quote number 4",
    "another line is good to make it 5"
];

// function to generate randome quote
function generate_random_quote() {

    //counting the number of quotes automatically
    const quotes_number = quotes_arr.length;

    // generate a randome number between 0 and the quotes arr length
    let random_num = Math.floor(Math.random() * quotes_number);

    // get associated random quote from random number
    let random_quote = quotes_arr[random_num];

    document.getElementById('quote_container').textContent = random_quote;

    //return random_quote;
};

//test 
//console.log(generate_random_quote());
