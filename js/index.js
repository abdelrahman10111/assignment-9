var QUOTES = [
  {
    teller: " Oscar Wilde",
    message: "“Be yourself; everyone else is already taken.”",
  },
  {
    teller: " Marilyn Monroe",
    message:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  },
  {
    teller: "Frank Zappa",
    message: "“So many books, so little time.”",
  },
  {
    teller: "Mae West",
    message: "“You only live once, but if you do it right, once is enough.”",
  },
];

function addQuotes() {
  debugger;
  var index = Math.floor(Math.random() * QUOTES.length);
  var quote = QUOTES[index];
  displayQuote(quote.teller, quote.message);
}

// function randomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function displayQuote(teller, message) {
  document.getElementById("message").innerHTML = message;
  document.getElementById("teller").innerHTML = "--" + teller;
}
