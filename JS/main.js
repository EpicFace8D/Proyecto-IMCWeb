var menu = document.querySelector('.menu');
var burger = document.querySelector('.burger-button');

burger.addEventListener('click', showHideMenu);



function showHideMenu() {
    if(menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
}