var menu = document.querySelector('.menu');
var burger = document.querySelector('.burger-button');
var query = window.matchMedia('screen and (max-width:768px)');
query.addListener(validation);



function validation(event) {
    if(event.matches) {
        burger.addEventListener('click', showHideMenu);
    } else {
        burger.removeEventListener('click',showHideMenu);
    }
}

function showHideMenu() {
    if(menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
}

validation(query);