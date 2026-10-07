const form = document.querySelector("#movie-form")

const titleInput = document.querySelector("#title")
const directorInput = document.querySelector("#director")
const reviewInput = document.querySelector("#review")
const errorText = document.querySelector("#error")
const listBtn = document.querySelector("#list-button")
const movieCountShow = document.querySelector("#count")
const removeLastBtn = document.querySelector("#remove-last-button")
const titlesBtn = document.querySelector("#title-button")

let movies = []
let counter = 0

form.addEventListener("submit", function(event){
    event.preventDefault()

    let titleTrimmed = titleInput.value.trim();
    let directorTrimmed = directorInput.value.trim();
    let reviewTrimmed =  reviewInput.value.trim();

    if(titleTrimmed == "" || directorTrimmed == "" || reviewTrimmed == ""){
        errorText.textContent = "Please enter the info in all boxes."

        return
    }
    if(titleTrimmed.length < 2 || directorTrimmed.length < 2 || reviewTrimmed.length < 10){
        errorText.textContent = "The text must be atleast 2 characters long"
        return
    }

    for (const movieObj of movies) {
        if(movieObj.title === titleTrimmed){
            console.log(movieObj);
            
            errorText.textContent = "this movie is already reviews"
            return
        }
    }

    errorText.textContent = ""


    let movie = {}
    movies.push(movie)
    counter += 1
    movieCountShow.textContent = `Current movies: ${counter}`
    movie.title = titleTrimmed
    movie.director = directorTrimmed
    movie.review = reviewTrimmed
    titleInput.value = ""
    directorInput.value = ""
    reviewInput.value = ""
    errorText.textContent = ""
})

console.log(movies);

listBtn.addEventListener("click", function(){
        for (const movieObj of movies) {
        let boxCreate = document.createElement("div")
        boxCreate.innerHTML = `

            <h1>${movieObj.title}</h1> 
            <h2> ${movieObj.director} </h2> 
            <p> ${movieObj.review} </p>
        
        `
        document.querySelector("#all-movies").append(boxCreate)
    }
})

// function boxCreate(){
//     for (const movieObj of movies) {
//         let boxCreate = document.createElement("div")
//         boxCreate.innerHTML = `<h1>${movieObj.title}</h1> <h2> ${movieObj.director} </h2> <p> ${movieObj.review} </p>`
//     }
// }



removeLastBtn.addEventListener("click", function(){
    movies.pop
    errorText.textContent = "removed last movie!"
})