var QUOTES = [
  {
    teller: "Hamoksha",
    message: "h hjhjh jhj yjh yyyjy jy ",
  },
  {
    teller: "Abdo",
    message: "h hjhjh jhj yjh yyyjy jy",
  },
  {
    teller: "Hamo",
    message: "h hjhjh jhj yjh yyyjy jy",
  },
  {
    teller: "Hamada",
    message: "h hjhjh jhj yjh yyyjy jy",
  },
];

function addQuotes() {
    debugger
  var index = Math.floor(Math.random() * (QUOTES.length));
  var quote = QUOTES[index]
  displayQuote(quote.teller, quote.message);
}

// function randomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function displayQuote(teller, message) {
  document.getElementById("message").innerHTML = message;
  document.getElementById("teller").innerHTML = "--" + teller;
}
