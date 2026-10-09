//Exericse A1
const raw = " SaRa.Lund@School.SE ";
const song = " Blinding Lights ";
const entry = "The Weeknd - Blinding Lights";

let newRaw = raw.trim().toLowerCase();

//Exercise A2

let newSong = song.trim().toUpperCase()

//Exercise A3
//Inget händer?

//Exericse A4

let firstCharacters = newSong.slice(0, 5)


//Exercise A5
let nineSongIndexCharacters = newSong.slice(9)

//Exercise A6
let divdedEntry = entry.split(" - ")

//Exercise A7
let mellanslagsText = "        "
let inteMellanslagsText = " x   "
if(mellanslagsText.includes(" ")){
    
    
}

//Exercise A8

//Det gjorde jag ovan


//Listor del B
const songs = ["Blinding Lights", "Levitating", "Starboy"];
const topSongs = ["Song A", "Song B", "Song C", "Song D"];

//B1
songs.push("Physical")

//B2
songs.pop() //returns the last element

//B3
console.log(songs.indexOf("Levitating"));

//B4
songs.splice(1, 1)

//B5
songs.includes("Starboy")

//B6
let songsText = songs.join(" | ")

//B7
let slicedTopSongs = topSongs.slice(1, 2)

//B8
topSongs.splice(1, 1)

//DEL C - LOCALSTORAGE & JSON
//C1

localStorage.setItem("theme", "dark");

let theme = localStorage.getItem("theme");


//C2
//Ingenting

//C3
localStorage.setItem("volume", 5);

let volume = localStorage.getItem("volume");

//C4 & C5
const playlist = [{ song: "Starboy", artist: "The Weeknd" }]
let newString = JSON.stringify(playlist)
localStorage.setItem("playlist", newString)

//C6
let playlistFromLocalStorage = localStorage.getItem("playlist")
let playlistParsed = JSON.parse(playlistFromLocalStorage)

//C7 - missing

//C8
localStorage.removeItem("theme")


