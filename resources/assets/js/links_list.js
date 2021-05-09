// Ждем полной загрузки страницы
window.onload = function () {
    // Выбираем все карточки ссылок
    let card = document.querySelectorAll('.card-theme');
    let card_item = document.querySelectorAll('.mi-card');

    for (i = 0; i < card.length; i++) {
        card[i].addEventListener('click', handler_card_onclick, false);
    }
}

// Обработчик события клика по карточке ссылки
function handler_card_onclick () {
    // let view_main = document.querySelector('.view-main');
    // let view_list = document.querySelector('.view-list');
    // var data = JSON.stringify({'name_card' : this.innerHTML});
    // let xhttp = new XMLHttpRequest();
    // xhttp.open('POST', 'http://www-061220/listlinks.php', true);
    // xhttp.setRequestHeader('Content-type', 'application/json');
    // xhttp.send(data);
    // add_class(view_main, 'hidden');
    // rem_class(view_list, 'hidden');
    //
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState==4 && this.status==200) {
    //         clear_link_list();
    //         create_links_list(JSON.parse(this.responseText));
    //     }
    // }
}




function createLinksList(args) {
    for (i=0; i<args.length; i++) {
        let link_template = `<a href="${args[i]['url']}" class="link"><span
                             class="name-link">${args[i]['title']}</span></a><br>`;
        const myFragment = document.createRange().createContextualFragment(link_template);
        // console.log(myFragment.querySelector('.name-link').textContent);
        // console.log(myFragment.querySelector('.link').getAttribute('href'));
        myFragment.querySelector('.name-link').addEventListener('contextmenu', handler_menulink_onclick);
        document.querySelector('.view-list').appendChild(myFragment);
    }
}

function clearLinkList() {
    return document.querySelector('.view-list').innerHTML = '';
}
