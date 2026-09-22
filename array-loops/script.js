//ARRAY CODE EXERCISE 1

let ex1Arrays = document.getElementById("arrays-1")
let iceCreams = ["Chocolate", "Vanilla", "Strawberry", "Pistacho", "Matcha"]
for (let i = 0; i < iceCreams.length; i++) {
    let iceCream = iceCreams[i];
    let currentDiv = document.createElement("div")
    currentDiv.innerHTML = iceCream
    if(iceCreams[0] == iceCream){
        currentDiv.classList.add("firstArrayEx1")
    }
    if(iceCream == iceCreams[iceCreams.length - 1]){
        currentDiv.classList.add("lastArrayEx1")
    }
    ex1Arrays.append(currentDiv)
}

//ARRAY CODE EXERCISE 2
nums = [1, 2, 3]
let ex2Arrays = document.getElementById("arrays-2")
ex2Arrays.innerHTML = `<h1>${nums[0]} +  ${nums[nums.length - 1]} = ${ nums[0] + nums[nums.length - 1]} </h1> `

//ARRAY CODE EXERCISE 3 (Change the last one in the array to something else)
let pets = ["cat", "dog", "fish"]
pets[2] = "Crocodile"

//ARRAY CODE EXERCISE 4 make an array and add two new things with push
let fish = ["Salmon", "Shark", "Catfish"]
fish.push("Blobfish", "Green Shark")


//FOR LOOP 1 Skriv ut talen 1-10
for(let x = 1; x < 11; x++){
    //put it out here
    
}

//FOR LOOP 2 Skriv ut talen 10 - 1
for(let x = 10; x > 0; x--){
    //put it out here
    
}

//while-loop exercise 1 (write the nums 1-10)
whileNumber = 1
while(whileNumber < 11){
    //put stuff out here
    whileNumber++
}

//For of exercise 1

wardrobe = ["hat", "pants"]

for (const clothes of wardrobe) {
    //put it out here
    
}