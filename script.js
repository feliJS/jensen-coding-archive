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

        // Remove active class
        filterButtons.forEach(otherButton => {

            otherButton.classList.remove("active");

        });


        // Add active class
        button.classList.add("active");


        const selectedFilter =
            button.dataset.filter;


        exerciseCards.forEach(card => {

            const category =
                card.dataset.category;


            if (
                selectedFilter === "all" ||
                category === selectedFilter
            ) {

                card.classList.remove("hidden");

            }

            else {

                card.classList.add("hidden");

            }

        });

    });

});



