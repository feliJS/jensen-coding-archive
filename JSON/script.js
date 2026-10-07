const form = document.querySelector("#movie-form")

const titleInput = document.querySelector("#title")
const directorInput = document.querySelector("#director")
const reviewInput = document.querySelector("#review")
const errorText = document.querySelector("#error")
const listBtn = document.querySelector("#list-button")

let movies = []

form.addEventListener("submit", function(event){
    event.preventDefault()
    if(titleInput.value == "" || directorInput.value == "" || reviewInput.value == ""){
        errorText.textContent = "Please enter the info in all boxes."
        return
    }
    if(titleInput.value.length < 2 || directorInput.value.length < 2 || reviewInput.value.length < 10){
        errorText.textContent = "The text must be atleast 2 characters long"
    }
    let movie = {}
    movies.push(movie)
    movie.title = titleInput.value 
    movie.director = directorInput.value
    movie.review = reviewInput.value
})

console.log(movies);

listBtn.addEventListener("click", function(){
        for (const movieObj of movies) {
        let boxCreate = document.createElement("div")
        boxCreate.innerHTML = `<h1>${movieObj.title}</h1> <h2> ${movieObj.director} </h2> <p> ${movieObj.review} </p>`
        document.querySelector("#all-movies").append(boxCreate)
    }
})

function boxCreate(){
    for (const movieObj of movies) {
        let boxCreate = document.createElement("div")
        boxCreate.innerHTML = `<h1>${movieObj.title}</h1> <h2> ${movieObj.director} </h2> <p> ${movieObj.review} </p>`
    }
}



