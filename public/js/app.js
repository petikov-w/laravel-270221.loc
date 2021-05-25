let fileInput = document.querySelector('#file-input');
let dataLabel = document.querySelector('.if-button');
let info = document.querySelector('.info-button');
let listFile = document.querySelector('.file-h');
let listLink = document.querySelector('.link-list');
let listLink2 = document.querySelector('.link-list2');
let link = document.querySelector('.link');
let btn_add_links = document.querySelector('.link-add');
let paginationList = document.querySelector('.pagination-list');
let paginationItem = document.querySelectorAll('.pagination-label');
let linksInfo = [];


// let fileInput = document.querySelector('#file-input');
// let dataLabel = document.querySelector('.if-button');
// let info = document.querySelector('.info-button');
// let listFile = document.querySelector('.file-h');
// let listLink = document.querySelector('.link-list');
// let listLink2 = document.querySelector('.link-list2');
// let link = document.querySelector('.link');
// let btn_add_links = document.querySelector('.link-add');
// let linksInfo = [];


// let btn_del_link = document.querySelectorAll('.link-delete');
// for (i = 0; i < btn_del_link.length; i++) {
//     btn_del_link[i].addEventListener('click', handler_btn_delete_link, false);
// }
// function handler_btn_delete_link (event) {
//     //alert(event.target.parentNode.dataset.url);
//     let modal_windowDeleteLink = document.querySelector('.form-link-delete');
//     let linkInfo = document.querySelector('.link-info p');
//     let linkInfoId = document.querySelector('.link-info span');
//
//     linkInfo.innerHTML = event.target.parentNode.dataset.title;
//     linkInfoId.innerHTML = event.target.parentNode.dataset.id;
//
//     add_class(modal_windowDeleteLink, 'show');
// }

// let menuItem = document.querySelectorAll('.main-menu-item');
//
// for (i = 0; i < menuItem.length; i++) {
//     menuItem[i].addEventListener('click', handler_menuItem_onclick, false);}
//
// function handler_menuItem_onclick(event) {
//     localStorage.setItem('active_menu_item', event.target.textContent);
//     console.log(localStorage.getItem('active_menu_item'));
// }



//
//
// if ( localStorage.getItem('active_menu_item') == 'Каталог') {
//     let btn_form_no = document.querySelector('.btn-no');
//     let btn_form_yes = document.querySelector('.btn-yes');
//     let btn_del_link = document.querySelectorAll('.link-delete');
//     for (i = 0; i < btn_del_link.length; i++) {
//         btn_del_link[i].addEventListener('click', handler_btn_delete_link, false);
//     }
//
//     btn_form_no.addEventListener('click', handler_btn_form_no, false);
//     btn_form_yes.addEventListener('click', handler_btn_form_yes, false);
// }
//
// function handler_btn_form_yes (event) {
//     let modal_windowDeleteLink = document.querySelector('.form-link-delete');
//     let linkInfoId = document.querySelector('.link-info span');
//     rem_class(modal_windowDeleteLink, 'show');
//     // console.log(linkInfoId.innerHTML);
//     sendRequest('delete', '/api/link/'+linkInfoId.innerHTML).then(data => console.log(data))
//         .catch(err => console.log(err));
//     rem_class(modal_windowDeleteLink, 'show');
//     document.location.href = "http://laravel-270221.loc/catalog?page=1";
//   // window.location.reload(true);
// }
//
// function handler_btn_form_no (event) {
//     let modal_windowDeleteLink = document.querySelector('.form-link-delete');
//     rem_class(modal_windowDeleteLink, 'show');
// }
//
// function handler_btn_delete_link (event) {
//     //alert(event.target.parentNode.dataset.url);
//     let modal_windowDeleteLink = document.querySelector('.form-link-delete');
//     let linkInfo = document.querySelector('.link-info p');
//     let linkInfoId = document.querySelector('.link-info span');
//
//     linkInfo.innerHTML = event.target.parentNode.dataset.title;
//     linkInfoId.innerHTML = event.target.parentNode.dataset.id;
//
//     add_class(modal_windowDeleteLink, 'show');
// }




if (btn_add_links) {
    fileInput.addEventListener('change', function (event) {
        let str ='';
        for (let hh of fileInput.files) {
            let reader = new FileReader();
            reader.onload = function (event) {
                linksInfo.push({
                    name: delete_extension(hh.name),
                    url: ExtractUrl(reader.result)
                });
            };
            reader.readAsText(hh);
            str += `<div class="e45">${hh['name']}</div><br>`;
        }
        listFile.innerHTML = str;
        listLink.innerHTML = "";
        add_class(dataLabel, 'hidden');
        rem_class(info, 'hidden');

        if (fileInput.files.length>0) {
            info.innerHTML = `Выбрано:&nbsp <span class="i1">${fileInput.files.length}</span>&nbsp
                           Добавить в копилку? <button onclick="ok_upload_files()" class="z-yes">Да</button>
                            <button onclick="cansel_upload_files()" class="z-no">Нет</button>`;
        } else {
            info.innerHTML = `Ничего не было выбрано &nbsp
                         <button onclick="cansel_upload_files()" class="z-no">ОК</button>`;
        }
    });


}


function ok_upload_files() {
let body = {linksInfo};

sendRequest('post', '/api/upload', body).then(data => console.log(data))
                                        .catch(err => console.log(err));
cansel_upload_files();
window.location.reload();
}



function rem_class(eldom, d_class) {
    if (eldom.classList.contains(d_class)) {
        eldom.classList.remove(d_class)
    }
}

function add_class(eldom, d_class) {
    if (!eldom.classList.contains(d_class)) {
        eldom.classList.add(d_class)
    }
}

function cansel_upload_files() {
    rem_class(dataLabel, 'hidden');
    //rem_class(listView,'hidden');
    add_class(info, 'hidden');
    document.querySelector('.file-h').innerHTML=``;
}

function numerals(number) {
    let s_num;
    let flag_11_19 = true;
    if (number > 10) {
        let jn0 = Number(number.toString().slice(-2));
        if(jn0>10 && jn0<20) {s_num='ссылок'
        } else {flag_11_19 = false;}
    } else if (number <= 10) {flag_11_19 = false;}

    if (!flag_11_19) {
        switch (number.toString().substr(-1,1)){
            case '1':
                s_num = 'ссылка';
                break;
            case '2':
            case '3':
            case '4':
                s_num = 'ссылки';
                break;
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                s_num = 'ссылок';
                break;
        }
    }
    return s_num;
}

function delete_extension(source) {
    let end_pos = source.toLowerCase().indexOf('.url');
    console.log(source.toLowerCase());
    console.log('Result: <<------ name ---------');
    console.log(source.slice(0,end_pos));
    return source.slice(0,end_pos);
}

function ExtractUrl(source) {
   let start_pos = source.indexOf('URL');
    // console.log(source);
    // console.log(source.indexOf('IDList='));

    let result = '';
    if (start_pos>0 && source.indexOf('/?')>0) {
        result = source.slice(start_pos+4, source.indexOf('/?')+1);
    } else if (start_pos>0 && source.indexOf('IDList=')>0) {
        result = source.slice(start_pos+4, source.indexOf('IDList='));
    } else if (start_pos>0 && source.indexOf('/?')<0) {
        result = source.slice(start_pos + 4);
    }
    // console.log('Result: <<------ url ---------');
    // console.log(result);
    return result;
}


let btn_del_link = document.querySelectorAll('.link-delete');
if ( localStorage.getItem('active_menu_item') == 'Каталог') {
    let btn_form_no = document.querySelector('.btn-no');
    let btn_form_yes = document.querySelector('.btn-yes');
    for (i = 0; i < btn_del_link.length; i++) {
        btn_del_link[i].addEventListener('click', handler_btn_delete_link, false);
    }
    btn_form_no.addEventListener('click', handler_btn_form_no, false);
    btn_form_yes.addEventListener('click', handler_btn_form_yes, false);
}

function handler_btn_form_yes (event) {
    let modal_windowDeleteLink = document.querySelector('.form-link-delete');
    let linkInfoId = document.querySelector('.link-info span');
    rem_class(modal_windowDeleteLink, 'show');
    // console.log(linkInfoId.innerHTML);
    sendRequest('delete', '/api/link/'+linkInfoId.innerHTML).then(data => console.log(data))
        .catch(err => console.log(err));
    rem_class(modal_windowDeleteLink, 'show');
    document.location.href = "http://laravel-270221.loc/catalog?page=1";
    // window.location.reload(true);
}

function handler_btn_form_no (event) {
    let modal_windowDeleteLink = document.querySelector('.form-link-delete');
    rem_class(modal_windowDeleteLink, 'show');
}

function handler_btn_delete_link (event) {
    //alert(event.target.parentNode.dataset.url);
    let modal_windowDeleteLink = document.querySelector('.form-link-delete');
    let linkInfo = document.querySelector('.link-info p');
    let linkInfoId = document.querySelector('.link-info span');

    linkInfo.innerHTML = event.target.parentNode.dataset.title;
    linkInfoId.innerHTML = event.target.parentNode.dataset.id;

    add_class(modal_windowDeleteLink, 'show');
}

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



let menuItem = document.querySelectorAll('.main-menu-item');

for (i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', handler_menuItem_onclick, false);}

function handler_menuItem_onclick(event) {
    localStorage.setItem('active_menu_item', event.target.textContent);
    console.log(localStorage.getItem('active_menu_item'));
}

function sendRequest(metod, url, body=null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(metod, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }
        xhr.onerror = () => {
            reject(xhr.response);
        }
        xhr.send(JSON.stringify(body));
    })
}
