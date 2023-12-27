const navbarToggle = document.querySelector(".navbar-toggle");
const links = document.querySelector(".navigation");

navbarToggle.addEventListener('click', function(){
    links.classList.toggle("show-nav");
})