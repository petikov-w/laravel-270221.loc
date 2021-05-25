// let menuItem = document.querySelectorAll('.main-menu-item');
// let listView = document.querySelector('.view-list');
//  let paginationList = document.querySelector('.pagination-list');
//  let paginationItem = document.querySelectorAll('.pagination-item');

// for (i = 0; i < paginationItem.length; i++) {
//     menuItem[i].addEventListener('click', handler_paginationItem_onclick, false);
//     console.log(i);
// }



// for (i = 0; i < menuItem.length; i++) {
//     menuItem[i].addEventListener('click', handler_menuItem_onclick, false);
// }
//
//
//
// function handler_menuItem_onclick(event) {
//     localStorage.setItem('active_menu_item', event.target.textContent);
//     console.log(localStorage.getItem('active_menu_item'));
// }
//
// if (west) {
//     localStorage.setItem('active_links', '/api/getlinks?page=1');
// }

// if ( localStorage.getItem('active_menu_item') == 'Полигон') {
//     alert('Страница Полигон загружена');
// }
// window.onload = function() {
//
//
//
// }

    if (localStorage.getItem('active_menu_item')=="Полигон") {
        // if (listLink!=null) {
        clearLinkList();
        console.log(localStorage.getItem('item-pagination'));
        if (localStorage.getItem('item-pagination') === '/api/links?page=1') {
            sendRequest('get', 'http://laravel-270221.loc/api/links?page=1').then(data => createLinksList(data))
                .catch(err => console.log(err))}
          else {
            sendRequest('get', localStorage.getItem('item-pagination')).then(data => createLinksList(data))
                .catch(err => console.log(err));
            //window.history.back();
        }         //window.location.reload();
        //    document.location.href = "http://laravel-270221.loc/poligon";
    } else {
        localStorage.setItem('item-pagination','/api/links?page=1');
    }

            //  }

// window.onload = function () {
//     if (localStorage.getItem('active_menu_item')=="Каталог") {
//         if (listView!=null) { clearLinkList()};
//         // sendRequest('get', '/api/getlinks').then(data =>console.log(data))
//         //                                    .catch(err => console.log(err));
//         sendRequest('get', '/api/getlinks').then(data =>createLinksList(data))
//             .catch(err => console.log(err));
//
//     }
// }


// window.onunload {
//
// }

window.addEventListener("unload", function() {
    alert('dgdgdgd');
});


function createLinksList(args) {
    console.log(args.data);
    console.log(args);
    for (let index in args.data) {
        let link_template = `<div class="link">
                                  <a href="${args.data[index].url}">
                                  <p>${args.data[index].title}
                                  </p></a>
                             </div>`;
        const fragLink = document.createRange().createContextualFragment(link_template);
        listLink2.append(fragLink);
    }

    for (i = 0; i < paginationItem.length; i++) {
        menuItem[i].addEventListener('click', handler_paginationItem_onclick, false);
        console.log(i);
    }

    function handler_paginationItem_onclick(event) {
        console.log(event.target.textContent);
        alert(event.target.textContent);
    }
    for (let index in args.links) {
        ddd = `${args.links[index].url}`;
        console.log(ddd);
        let pg_template = `<div class="pagination-item" onclick="handler_paginationItem_onclick(this)">
                                  <a href="${args.links[index].url}">
                                  <span class="pagination-label">${args.links[index].label}</span></a>
                             </div>`;

        const fragLink = document.createRange().createContextualFragment(pg_template);
        paginationList.append(fragLink);
    }
}

    function handler_paginationItem_onclick(element) {
        console.log(element.innerHTML);
        let ddd = element.innerHTML;
        let sss = ddd.slice(ddd.indexOf('//')+2,ddd.indexOf('>')-1);
        let mmm = sss.slice(sss.indexOf('/'));

        localStorage.setItem('item-pagination',mmm);
        // localStorage.setItem('item-pagination','http://laravel-270221.loc/api/links?page='+ssa);
        // sendRequest('get', localStorage.getItem('item-pagination')).then(data =>createLinksList(data))
        //     .catch(err => console.log(err));
        // window.history.forward();
        //document.location.href = "http://laravel-270221.loc/poligon";
        //window.location.reload();
    }


function clearLinkList() {
    listLink2.innerHTML = '';
    //paginationList.innerHTML='';
}


