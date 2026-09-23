let nums = [7, 2, 4, 5, 6, 3]


for (const numb of nums) {
    let number_thing = document.createElement("div")
    number_thing.innerHTML = `${numb}`
    number_thing.style.backgroundColor = "aqua"
    number_thing.id = "number_box"
    
    if(numb == nums[0]){
        number_thing.style.backgroundColor = "green"
    }
    if(numb == nums[nums.length - 1]){
         number_thing.style.backgroundColor = "red"
    }
    document.getElementById("test").append(number_thing)
}

function randomNumber(){
    let randomNumberReturn =  nums[Math.floor(Math.random() * (nums.length - 1))]
    return randomNumberReturn
}

function favoriteNumber(numberInput){
    console.log(`Your favorite number is ${numberInput}`);
    
}

console.log(randomNumber());
favoriteNumber(3)