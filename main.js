const quoteList = [];
const quoteAuthorList =[];

const quote = document.querySelector('#quote'); 
const quoteAuthor = document.querySelector('#author');

const newQuoteBtn = document.querySelector('#new-quote');

async function getQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return data;

}

async function displayQuote() {
    const quoteData = await getQuote();
    quote.textContent = quoteData.content;
    quoteAuthor.textContent = quoteData.author;
}

newQuoteBtn.addEventListener('click', ()=>{
    displayQuote();
})