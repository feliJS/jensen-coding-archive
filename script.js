const menuButton =
    document.querySelector("#menuButton");

const navLinks =
    document.querySelector("#navLinks");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


const filterButtons =
    document.querySelectorAll(".filter-button");

const exerciseCards =
    document.querySelectorAll(".exercise-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        
        filterButtons.forEach(otherButton => {

            otherButton.classList.remove("active");

        });


        
        button.classList.add("active");


        const selectedFilter =
            button.dataset.filter;


        exerciseCards.forEach(card => {

            const categories =
                card.dataset.category.split(" ");


            if (
                selectedFilter === "all" ||
                categories.includes(selectedFilter)
            ) {

                card.classList.remove("hidden");

            }

            else {

                card.classList.add("hidden");

            }

        });

    });

});