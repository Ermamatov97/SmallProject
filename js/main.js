// Burger menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar__links')[0]
const header = document.getElementsByClassName('header')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    header.classList.toggle('active')
})


// Carusel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        700: {
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// Sticky navbar
window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".header");
    navbar.classList.toggle("sticky", window.scrollY > 0);
}) 