document.addEventListener('DOMContentLoaded', () => {
    // Fav icons
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle 'active' class to change the state of the button
            button.classList.toggle('active');
        });
    });

    // Cool tone slider
    const slidesCool = document.querySelectorAll('.cool-product');
    let currentSlideCool = 0;

    function showSlideCool() {
        slidesCool.forEach((slide) => {
            slide.style.display = 'none'; // Hide all products initially
        });

        // Display exactly 3 products in order, seamlessly looping
        for (let i = 0; i < 3; i++) {
            const indexToShow = (currentSlideCool + i) % slidesCool.length;
            slidesCool[indexToShow].style.display = 'flex'; // Show the product
        }
    }

    function changeSlideCool(direction) {
        // Move the index in a circular way
        currentSlideCool = (currentSlideCool + direction + slidesCool.length) % slidesCool.length;
        showSlideCool();
    }

    showSlideCool(); // Initialize by showing the first 3 products

    // Event listeners for cool tone arrow buttons
    document.querySelector('.cool-slider .prev').addEventListener('click', () => changeSlideCool(-1));
    document.querySelector('.cool-slider .next').addEventListener('click', () => changeSlideCool(1));

    // Warm tone slider
    const slidesWarm = document.querySelectorAll('.warm-product');
    let currentSlideWarm = 0;

    function showSlideWarm() {
        slidesWarm.forEach((slide) => {
            slide.style.display = 'none'; // Hide all products initially
        });

        // Display exactly 3 products in order, seamlessly looping
        for (let i = 0; i < 3; i++) {
            const indexToShow = (currentSlideWarm + i) % slidesWarm.length;
            slidesWarm[indexToShow].style.display = 'flex'; // Show the product
        }
    }

    function changeSlideWarm(direction) {
        // Move the index in a circular way
        currentSlideWarm = (currentSlideWarm + direction + slidesWarm.length) % slidesWarm.length;
        showSlideWarm();
    }

    showSlideWarm(); // Initialize by showing the first 3 products

    // Event listeners for warm tone arrow buttons
    document.querySelector('.warm-slider .prev').addEventListener('click', () => changeSlideWarm(-1));
    document.querySelector('.warm-slider .next').addEventListener('click', () => changeSlideWarm(1));

    // Neutral tone slider
    const slidesNeutral = document.querySelectorAll('.neutral-product');
    let currentSlideNeutral = 0;

    function showSlideNeutral() {
        slidesNeutral.forEach((slide) => {
            slide.style.display = 'none'; // Hide all products initially
        });

        // Display exactly 3 products in order, seamlessly looping
        for (let i = 0; i < 3; i++) {
            const indexToShow = (currentSlideNeutral + i) % slidesNeutral.length;
            slidesNeutral[indexToShow].style.display = 'flex'; // Show the product
        }
    }

    function changeSlideNeutral(direction) {
        // Move the index in a circular way
        currentSlideNeutral = (currentSlideNeutral + direction + slidesNeutral.length) % slidesNeutral.length;
        showSlideNeutral();
    }

    showSlideNeutral(); // Initialize by showing the first 3 products

    // Event listeners for neutral tone arrow buttons
    document.querySelector('.neutral-slider .prev').addEventListener('click', () => changeSlideNeutral(-1));
    document.querySelector('.neutral-slider .next').addEventListener('click', () => changeSlideNeutral(1));
});
