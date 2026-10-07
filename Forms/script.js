const form = document.querySelector("form");
const formButton = document.querySelector("#form-button")

let libraryArray = []

form.addEventListener("submit", function(event){
    event.preventDefault()
    let author = document.querySelector("#author")
    let title = document.querySelector("#title")

    if(author.value == ""){
        console.log("skriv författarens namn!");
        return
    }
    if(title.value == ""){
        console.log("skriv titlen!");
        return
    }

    let inputObject = {
        title: title.value,
        author: author.value
    }

    libraryArray.push(inputObject)

})

const loopButton = document.querySelector("#loop-button")

loopButton.addEventListener("click", function(){
    for(let books of libraryArray){
        console.log(books)
    }
})