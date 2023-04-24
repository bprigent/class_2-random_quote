//file dedicated to generating a random message
////////////////////////////////
////////////////////////////////
const quotes_arr = [
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "It is during our darkest moments that we must focus to see the light.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Life is a succession of lessons which must be lived to be understood."
];

//counting the number of quotes automatically
const quotes_number = quotes_arr.length;

// function to generate randome quote
function generate_random_quote() {

    // generate a randome number between 0 and the quotes arr length
    let random_num = Math.floor(Math.random() * quotes_number);

    // get associated random quote from random number
    let random_quote = quotes_arr[random_num];

    document.getElementById('quote_container').textContent = random_quote;

    //return random_quote;
};

//test 
//console.log(generate_random_quote());
