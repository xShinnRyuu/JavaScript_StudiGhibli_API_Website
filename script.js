/*  Old way of retreiving endpoint data
let request = new XMLHttpRequest();

request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function() {
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach((movie) => {
            console.log(movie.title);
        })
    } else {
        console.log("error: " + request.status)
    }
};

request.send();
*/
// etst

const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        data.forEach((movie) => {
            // Create a div with a card class
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            // Create a h1 and set the text contect to the film's title
            const h1 = document.createElement('h1')
            h1.textContent = movie.title
                // console.log(h1)

            // Create a p and set the text content to the film's description
            const p = document.createElement('p')
            movie.description = movie.description.substring(0, 300) // Limit description to 300 chars
            p.textContent = `${movie.description}...`

            // Each card will contain a h1 and a p
            card.appendChild(h1)
            card.appendChild(p)

            // Append the cards to the container element
            container.appendChild(card)
        })
    })