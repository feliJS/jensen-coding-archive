const date = new Date();

let day = date.getDate();
let monthNum = date.getMonth() + 1;
let month = date.toLocaleString('en-US', { month: 'long' });
let year = date.getFullYear();

document.getElementById("month-text").innerHTML = month;
document.getElementById("year-text").innerHTML = year;

let daysInMonth = new Date(year, monthNum, 0).getDate();
let daysInPrevMonth = new Date(year, monthNum - 1, 0).getDate();
let firstDayWeekday = (new Date(year, monthNum - 1, 1).getDay() + 6) % 7;

let monthDaysContainer = document.getElementById("month-days");


for (let i = 0; i < firstDayWeekday; i++) {
    let dayNumber = daysInPrevMonth - firstDayWeekday + 1 + i;
    let emptyDay = document.createElement("aside");
    emptyDay.innerHTML = `<p>${dayNumber}</p>`;
    emptyDay.classList.add("other-month");
    monthDaysContainer.appendChild(emptyDay);
}


for (let i = 1; i <= daysInMonth; i++) {
    let dateDay = document.createElement("aside");
    dateDay.innerHTML = `<p>${i}</p>`;

    if (i === day) {
        dateDay.style.backgroundColor = '#7dd6e6';
    }

    monthDaysContainer.appendChild(dateDay);
}


let totalBoxesSoFar = firstDayWeekday + daysInMonth;
let remainingBoxes = (7 - (totalBoxesSoFar % 7)) % 7; 

for (let i = 1; i <= remainingBoxes; i++) {
    let nextDay = document.createElement("aside");
    nextDay.innerHTML = `<p>${i}</p>`;
    nextDay.classList.add("other-month");
    monthDaysContainer.appendChild(nextDay);
}