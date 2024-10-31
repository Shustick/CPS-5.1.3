let burger = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobile-menu');

burger.onclick = function () {
    mobileMenu.classList.add('mobile-menu--opened')
}

let cross = document.querySelector('.cross');
cross.onclick = function () {
    mobileMenu.classList.remove('mobile-menu--opened')
}