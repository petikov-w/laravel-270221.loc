let menuItem = document.querySelectorAll('.main-menu-item');

for (i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', handler_menuItem_onclick, false);}

function handler_menuItem_onclick(event) {
    localStorage.setItem('active_menu_item', event.target.textContent);
    console.log(localStorage.getItem('active_menu_item'));
}
