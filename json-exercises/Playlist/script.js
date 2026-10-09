const form = document.querySelector("#songForm");
const inputField = document.querySelector("#entry");
const errorMessage = document.querySelector("#error");
const listBtn = document.querySelector("#listBtn");
const removeLastBtn = document.querySelector("#removeLastBtn");
const clearBtn = document.querySelector("#clearBtn");
 
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const songTitle = inputField.value.trim();
  if (songTitle === "") {
    errorMessage.textContent = "Please enter a song title.";
    return
    } else {
    errorMessage.textContent = "";
  }
  if(!songTitle.includes(" - ")) {
    errorMessage.textContent = "Please enter a song title in the format 'Song Title - Artist Name'.";
    return;
  }

  
})
