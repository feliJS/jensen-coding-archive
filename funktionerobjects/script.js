//1
function greet(name){
    console.log(`hello ${name} !`);
    
}

greet("Jakob")
greet("Vincent")
greet("Jessica")

//2
function add(a, b){
    return a + b
}

console.log(add(2, 1));

//3
function isEven(number){
    if(number % 2 == 0){
        return true
    }
    else{
       return false
    }
}


//4
function square(number) {
    return number**2
}
console.log(square(2));

//5
function describeAge(age){
    if(age <= 12){
        console.log("barn");
    }
    else if(age >= 12 && age <= 17){
        console.log("tonåring");
    }
    else if(age >= 18);{
        console.log("Vuxen");
    }
}

describeAge(15)

//6
function calculateTotal(price, quantity, discount){
    return price * quantity * discount
}

//7
function returnFastVarde(){
    return 1
}

//8
//yeah

//9
const namn = (myName) => { console.log(myName + " yeah")}

namn("wooo")

//OBJECT

//1
let student = {
    name: "Alex",
    age: 22,
    isEnrolled: true
}

//2
console.log(student.name);
console.log(student.age);
console.log(student.isEnrolled);

//3
student.age = 23
console.log(student.age);

//4
student.pet = "cat"
console.log(student.pet);

//5
let book = {
    title: "Förvandlingen",
    author: "Franz kafka",
    year: 1915
}

//6
console.log(book.pet); //blir undefined för det kunde ej hittas

//7
student.hobbies = ["football", "coding"]


//8 
let students = {
    student_1: {name: "Amy",
                age: 22,
                isEnrolled: true},
    student_2: {
            name: "Andy",
            age: 23,
            isEnrolled: true},
    student_3: {
            name: "Candy",
            age: 23,
            isEnrolled: false}
}

for (const student in students) {
    
    if(students[student].isEnrolled == true){
        console.log(students[student].name + " is enrolled");
    }

    else{
    console.log(students[student].name + " is not enrolled");
    }
    
}

//9 
student.introduce = function greet() {return "hello! im " + this.name}

console.log(student.introduce());

//kombinera grejs
//1
let product = {
    name: "byxor",
    price: 124,
    inStock: true
}

//2
function describeProduct(product){
    console.log(`You are buying ${product.name} with the price of ${product.price}, in stock: ${product.inStock}`);
    
}

//3
describeProduct(product)

//4

let product2 = {
    name: "tröja",
    price: 34,
    inStock: false
}

describeProduct(product2)

//5
function applyDiscount(product, percent){
    return product.price * percent
}

//6 
function isAvailable(product){
    return product.inStock
}
