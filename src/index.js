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
        var app = document.getElementById('content');

        var typewriter = new Typewriter(app, {
            loop: false
        });

        typewriter.typeString(quote)
            .pauseFor(2500)
            .start()
        typewriter.typeString("<br>")
            .start()
        typewriter.typeString("\t - Kayne West")
            .start()
            .pauseFor(2500)
        //.deleteAll()
    });