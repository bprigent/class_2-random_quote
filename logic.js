//file dedicated to generating a random message
////////////////////////////////
////////////////////////////////
const quotes_arr = [
    "1 When you reach the end of your rope, tie a knot in it and hang on.",
    "2 The future belongs to those who believe in the beauty of their dreams.",
    "3 Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "4 The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "5 It is during our darkest moments that we must focus to see the light.",
    "6 Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "7 Life is a succession of lessons which must be lived to be understood."
];

//counting the number of quotes automatically
const quotes_number = quotes_arr.length;

// initializing past random number
let past_random_num;

// function to generate randome quote
function generate_random_quote() {

    // generate a randome number between 0 and the quotes arr length
    let random_num = Math.floor(Math.random() * quotes_number);

    // get associated random quote from random number
    let random_quote = quotes_arr[random_num];

    //send quote to UI
    document.getElementById('quote_container').textContent = random_quote;
    
    // register this quote number
    past_random_num = random_num;
    //console.log(past_random_num)

};

//test 
//console.log(generate_random_quote());
