// Sticky navigation
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Counter (for example, if needed)
let counter = 0;
const counterElement = document.querySelector(".counter");

function updateCounter() {
    if (counter < 100) {
        counter++;
        counterElement.innerText = counter;
    }
}

setInterval(updateCounter, 100);
