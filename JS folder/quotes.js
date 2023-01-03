const quotes = [
    {
        quote: "Resolve to edge in a little reading every day, if it is but a single sentence. If you gain fifteen minutes a day, it will make itself felt at the end of the year.",
        author: "Horace Mann",
    },
    {
        quote: "The reading of all good books is like a conversation with the finest men of past centuries.",
        author: "Rene Descartes",
    },
    {
        quote: "I don't think of the past. The only thing that matters is the everlasting present.",
        author: "William Somerset Maugham",
    },
    {
        quote: "Use what you have to run toward your best - that's how I now live my life.",
        author: "Oprah Winfrey",
    },
    {
        quote: "A good plan, violently executed now, is better than a perfect plan next week.",
        author: "George S. Patton",
    },
    {
        quote: "Well begun is half done.",
        author: "Aristotle",
    },
    {
        quote: "I had learnt to seek intensity more of life, a concentrated sense of life.",
        author: "Nina Berberova",
    },
    {
        quote: "Self-respect is the cornerstone of all virtue.",
        author: "John Herschel",
    },
    {
        quote: "A man's character is his fate.",
        author: "Heraclitus",
    },
    {
        quote: "Life is tough, but it's tougher when you're stupid.",
        author: "John Wayne",
    }
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector('.quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

