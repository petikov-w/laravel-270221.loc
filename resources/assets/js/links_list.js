let menuItem = document.querySelectorAll('.main-menu-item');
let listView = document.querySelector('.view-list');

for (i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('click', handler_menuItem_onclick, false);
    }

function handler_menuItem_onclick(event) {
     localStorage.setItem('active_menu_item', event.target.textContent);
}

window.onload = function () {
    if (localStorage.getItem('active_menu_item')=="Каталог") {
    if (listView!=null) { clearLinkList()};
    // sendRequest('get', '/api/getlinks').then(data =>console.log(data))
    //                                    .catch(err => console.log(err));
        sendRequest('get', '/api/getlinks').then(data =>createLinksList(data))
            .catch(err => console.log(err));

    }
}

function createLinksList(args) {
    console.log(args);
    for (let index in args) {
        let link_template = `<div class="link">
                                  <a href="${args[index].url}">
                                  <p>${args[index].title}
                                  </p></a>
                             </div>`;
        const fragLink = document.createRange().createContextualFragment(link_template);
        listView.append(fragLink);
    }

}


// function createLinksList(args) {
//     for (let index in args) {
//         let link_template = `<div class="link">
//                                   <a href="#">
//                                   <p>${args[index].title}
//                                   </p></a>
//                              </div>`;
//         const fragLink = document.createRange().createContextualFragment(link_template);
//         listView.append(fragLink);
//     }
//
// }


function createLinksList2(args) {
    for (i=0; i<args.length; i++) {
        let link_template = `<h3>${args[i]['title']}</h3><br>`;
        const myFragment = document.createRange().createContextualFragment(link_template);
        // console.log(myFragment.querySelector('.name-link').textContent);
        // console.log(myFragment.querySelector('.link').getAttribute('href'));
        // myFragment.querySelector('.name-link').addEventListener('contextmenu', handler_menulink_onclick);
        document.querySelector('.view-list').appendChild(myFragment);
    }
}

function clearLinkList() {
    return listView.innerHTML = '';
}
