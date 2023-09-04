// Step 2: Create the Quotes Page

document.addEventListener("DOMContentLoaded", function () {
  const quoteContainer = document.getElementById("quote-container");

  // Sample quote data
  const quoteData = {
    text: "I think that beauty can injure you to death. It can cause an injury that can never be cured. Or it can so traumatise you, your life changes direction. The beauty of the harmony of nature that is forever lost, or a daily rite that you perform, or diving into the sea for a swim. Those experiences are going to mark you.",
    author: "Toni Servillo",
  };

  // Create HTML elements for the quote
  const blockquote = document.createElement("blockquote");
  blockquote.textContent = quoteData.text;

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  authorDiv.innerHTML = `&mdash; <cite>${quoteData.author}</cite>`;

  blockquote.appendChild(authorDiv);
  quoteContainer.appendChild(blockquote);
});
