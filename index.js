let quote = document.querySelector(".quote")
let quoteGen = document.querySelector(".quote-gen")

getQuote = () => {
    fetch('https://www.breakingbadapi.com/api/quotes')
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        let quoted = Math.floor(Math.random() * data.length)
        quote.innerHTML = `${data[quoted].author +  " : " + data[quoted].quote}`
    })
}
    
quoteGen.addEventListener('click', getQuote)
