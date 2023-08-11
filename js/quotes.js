const quotes=[
    {
        quote: "Don't dwell on the past.",
        author: "me"
    },
    {
        quote: "Believe in yourself.",
        author: "me"
    },
    {
        quote: "Follow your heart.",
        author: "me"
    },
    {
        quote: "Seize the day.",
        author: "me"
    },
    {
        quote: "You only live once.",
        author: "me"
    },
    {
        quote: "Past is just past.",
        author: "me"
    },
    {
        quote: "Love yourself.",
        author: "me"
    },
    {
        quote: "Where there is a will there is a way",
        author: "Angela Merkel"
    },
    {
        quote: "Don't beat yourself up.",
        author: "me"
    },
    {
        quote: "Life is a journey.",
        author: "me"
    }
];
const quote= document.querySelector("#quote span:first-child");
const author= document.querySelector("#quote span:last-child");
const todaysQuote= quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText= todaysQuote.quote;
author.innerText= todaysQuote.author;