document.addEventListener("DOMContentLoaded", () => {
    const quoteBox = document.createElement("div");
    quoteBox.id = "quote-box";
    quoteBox.style.cssText = `
      background-color: #f5f5f5;
      padding: 1em;
      text-align: center;
      font-style: italic;
      font-size: 1.1em;
      border-bottom: 2px solid #d4af37;
    `;
    document.body.insertBefore(quoteBox, document.body.firstChild);
  
    const quotes = [
      "“Power is not given to you. You have to take it.” – Beyoncé",
      "“Don’t try to lessen yourself for the world; let the world catch up to you.”",
      "“Your self-worth is determined by you. You don’t have to depend on someone telling you who you are.”",
      "“I embrace mistakes. They make you who you are.”",
      "“The most alluring thing a woman can have is confidence.”"
    ];
  
    let index = 0;
    function showQuote() {
      quoteBox.textContent = quotes[index];
      index = (index + 1) % quotes.length;
    }
  
    showQuote();
    setInterval(showQuote, 7000); // Change quote every 7 seconds
  });
  