//WORKSHOP 1 DOM grunder
//1
document.body.innerHTML = `
    <h1></h1>
    <ul>
        <li></li>
        <li></li>
    </ul>
    <div id="box">

`

//2
document.querySelector("h1").textContent = "Rubrik"

//3
const box = document.querySelector("#box")
box.classList.toggle("highlight") 

//4
let newLi = document.createElement("li")
newLi.innerHTML = "Text"
document.querySelector("ul").appendChild(newLi)

//5
const liElements = document.querySelectorAll("li");

for (let liBox = 0; liBox < liElements.length; liBox++) {
    if (liElements[liBox].innerHTML == "") {
        liElements[liBox].remove();
    }
}

//6
//document.queryselector("header") blir null eftersom det inte excisterar. man kan ej sätta textContent på något som är null (ingenting)

//7
box.style.backgroundColor = "aqua"
box.style.padding = "16px"

//8
const texts = ["Första", "Andra", "Tredje"]

for (let i = 0; i < texts.length; i++) {
    let li = document.createElement("li")
    li.textContent = texts[i]
    document.querySelector("ul").appendChild(li)
}


//WORKSHOP 2 - FÅ KNAPPAR ATT REAGERA
//1

function changeThing(newText){
    document.querySelector("li").textContent = `Favorite movie: ${newText}`
}

document.body.innerHTML += "<button>Ändra text</button>"

let mainButton = document.querySelector("button")

mainButton.addEventListener("click", function() {
    changeThing("Fantastic mr fox")
})

//2
document.querySelector(".highlight").backgroundColor = "yellow"
document.body.innerHTML += "<button>Highlight</button>"

let buttons = document.querySelectorAll("button")
let secondButton = buttons[1]

secondButton.addEventListener("click", function() {
    let li = document.querySelector("li")

    li.classList.toggle("highlight")

    if (li.classList.contains("highlight")) {
        li.style.backgroundColor = "yellow"
    } else {
        li.style.backgroundColor = ""
    }
})

//3
document.body.innerHTML += "<button>Create</button>"

let buttons2 = document.querySelectorAll("button")
let thirdButton = buttons2[2]

thirdButton.addEventListener("click", function(){
    let image = document.createElement("img")
    image.src = "../assets/jarona.gif"
    document.querySelector("#box").appendChild(image)
})

//4
let removeButton = document.createElement("button")
removeButton.textContent = "Remove"
document.body.appendChild(removeButton)

removeButton.addEventListener("click", function() {
    let li = document.querySelector("li")

    if (li) {
        li.remove()
    } else {
        document.querySelector("ul").textContent = "nothing to removeee"
    }
})


//5
function changeHeading() {
    document.querySelector("h1").textContent = "Du klickade!"
}

let headingButton = document.createElement("button")
headingButton.textContent = "Change heading"
document.body.appendChild(headingButton)

headingButton.addEventListener("click", changeHeading)


//6
let mouseOverBox = document.querySelector("#box")

mouseOverBox.addEventListener("mouseover", function() {
    mouseOverBox.style.backgroundColor = "yellow"
})


//7
let addElementButton = document.createElement("button")
addElementButton.textContent = "Add element"
document.body.appendChild(addElementButton)

addElementButton.addEventListener("click", function() {
    let newParagraph = document.createElement("p")
    newParagraph.textContent = "Hej"
    document.querySelector("#box").appendChild(newParagraph)
})

//divider
let divider = document.createElement("hr")
document.body.appendChild(divider)

//WORKSHOP 3 - Kombinera!
//1
const tasks = [
    "Redigera video",
    "Plugga fullstack",
    "Dricka kaffe",
    "Ta en promenad"
]

const list = document.createElement("ul")
list.id = "taskList"
document.body.appendChild(list)

for (const task of tasks) {
    const li = document.createElement("li")
    li.textContent = task
    li.style.backgroundColor = "aqua"
    li.style.cursor = "pointer"

    li.addEventListener("click", function() {
        li.classList.toggle("done")

        if (li.classList.contains("done")) {
            li.style.backgroundColor = "grey"
        } else {
            li.style.backgroundColor = "aqua"
        }
    })
    list.appendChild(li)
}