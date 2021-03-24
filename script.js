function el(e) {
    return document.querySelector(e);
}

function ela(e) {
    return document.querySelectorAll(e);
}

const navbarTogglers = ela("[data-toggle=navbar]");
const navbar = el("#navbar");

navbarTogglers.forEach(toggler =>{
    toggler.addEventListener("click", ()=>{
        navbar.classList.toggle("show-nav");
    });
})


const carouselTogglers = ela("input[name=carousel]");
const left = el("[data-toggle=left-carousel]");
const right = el("[data-toggle=right-carousel]");
let carouselCounter = 0;

left.addEventListener("click", ()=>{
    if (carouselCounter == 0) {
        carouselCounter = carouselTogglers.length - 1;
        carouselTogglers[carouselCounter].checked = true;
    } else {
        carouselCounter--;
        carouselTogglers[carouselCounter].checked = true;
    }
});

right.addEventListener("click", ()=>{
    if(carouselCounter == carouselTogglers.length-1) {
        carouselCounter = 0;
        carouselTogglers[carouselCounter].checked = true;
    } else {
        carouselCounter++;
        carouselTogglers[carouselCounter].checked = true;
    }
});