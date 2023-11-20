let navigationelement =document.getElementById ('navigation-bar');
let burgerbar =document.getElementById ('burger-bar');

burgerbar.addEventListener('click', function() {
    navigationelement.classList.toggle('nav')
})