async function fetchQuote() {
    /* Fetch a new random Kanye quote and return the text */
    const quote = await fetch('https://api.kanye.rest/')
        .then(response => response
            .json()).then(quote => quote.quote);
    console.log(quote);
    return quote;
}
fetchQuote()
    .then(quote => {
        var app = document.getElementById('body');

        var typewriter = new Typewriter(app, {
            loop: false,
            cursor: "",
        });

        typewriter.typeString(quote)
            .start()
        typewriter.typeString("<br> - Kanye West")
            .start()
            .pauseFor(2500)
            .deleteAll()
        typewriter.typeString("Check back soon for more Kanye 🤝")
    });
