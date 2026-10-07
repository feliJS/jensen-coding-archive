const raw = "KaRL@Work.COM"



console.log(raw.toLowerCase().trim());

let newLine = "Karl Erik Lindgren".split(" ")

console.log(newLine[0] + " " + newLine[2]);

const colors = ["red", "green", "blue"]

colors.push("yellow")

colors.pop()

console.log(colors);

if(colors.includes("blue")){
    console.log("yes");
}

let newColorsString = colors.join(", ")

console.log(newColorsString);

let newArrayColors = newColorsString.split(", ")

console.log(newArrayColors);


