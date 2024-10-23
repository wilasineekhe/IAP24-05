let lastScrollTop = 0;
const menuBar = document.querySelector('.menu-bar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down - hide the menu bar
        menuBar.classList.add('hidden');
    } else {
        // Scroll up - show the menu bar
        menuBar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});


// Cool tone slider
const slidesCool = document.querySelectorAll('.cool-product');
let currentSlideCool = 0;

function showSlideCool() {
    slidesCool.forEach((slide) => {
        slide.style.display = 'none';  // Hide all products initially
    });

    // Display exactly 3 products in order, seamlessly looping
    for (let i = 0; i < 3; i++) {
        const indexToShow = (currentSlideCool + i) % slidesCool.length;
        slidesCool[indexToShow].style.display = 'flex';  // Show the product
    }
}

function changeSlideCool(direction) {
    // Move the index in a circular way
    currentSlideCool = (currentSlideCool + direction + slidesCool.length) % slidesCool.length;
    showSlideCool();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlideCool();  // Initialize by showing the first 3 products

    // Add click event listener to every product in the cool tone slider
    slidesCool.forEach((slide, i) => {
        slide.addEventListener('click', () => {
            // Move to the next slide on click
            changeSlideCool(1);
        });
    });
});

// Warm tone slider
const slidesWarm = document.querySelectorAll('.warm-product');
let currentSlideWarm = 0;

function showSlideWarm() {
    slidesWarm.forEach((slide) => {
        slide.style.display = 'none';  // Hide all products initially
    });

    // Display exactly 3 products in order, seamlessly looping
    for (let i = 0; i < 3; i++) {
        const indexToShow = (currentSlideWarm + i) % slidesWarm.length;
        slidesWarm[indexToShow].style.display = 'flex';  // Show the product
    }
}

function changeSlideWarm(direction) {
    // Move the index in a circular way
    currentSlideWarm = (currentSlideWarm + direction + slidesWarm.length) % slidesWarm.length;
    showSlideWarm();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlideWarm();  // Initialize by showing the first 3 products

    // Add click event listener to every product in the warm tone slider
    slidesWarm.forEach((slide, i) => {
        slide.addEventListener('click', () => {
            // Move to the next slide on click
            changeSlideWarm(1);
        });
    });
});

// Neutral tone slider
const slidesNeutral = document.querySelectorAll('.neutral-product');
let currentSlideNeutral = 0;

function showSlideNeutral() {
    slidesNeutral.forEach((slide) => {
        slide.style.display = 'none';  // Hide all products initially
    });

    // Display exactly 3 products in order, seamlessly looping
    for (let i = 0; i < 3; i++) {
        const indexToShow = (currentSlideNeutral + i) % slidesNeutral.length;
        slidesNeutral[indexToShow].style.display = 'flex';  // Show the product
    }
}

function changeSlideNeutral(direction) {
    // Move the index in a circular way
    currentSlideNeutral = (currentSlideNeutral + direction + slidesNeutral.length) % slidesNeutral.length;
    showSlideNeutral();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlideNeutral();  // Initialize by showing the first 3 products

    // Add click event listener to every product in the neutral tone slider
    slidesNeutral.forEach((slide, i) => {
        slide.addEventListener('click', () => {
            // Move to the next slide on click
            changeSlideNeutral(1);
        });
    });
});
