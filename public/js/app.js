
let fileInput = document.querySelector('#file-input');
let dataLabel = document.querySelector('.if-button');
let info = document.querySelector('.info-button');
let listFile = document.querySelector('.file-h');
let linksInfo = [];


// == Проверка подключения jquery ==
// $(document).ready(function(){
//     alert(jQuery.fn.jquery);
// });
//==================================

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


function ok_upload_files() {

//====================================
//==============  fetch  =============
//====================================

                    // Пример получения конкретной темы
                    // fetch('/api/getthemes/6')
                    //     .then(response => response.json())
                    //     .then(json => console.log(json))

                    // fetch('/api/upload',
                    //     {
                    //     method: 'POST',
                    //     body: {"title": "Привет"},
                    //     headers: {'Content-type': 'application/json; charset=UTF-8',},
                    // }).then((response) => response.json())
                    //  .then((json) => console.log(json));

//====================================
//============ fetch (end) ===========
//====================================
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//====================================
//========== XMLHttpRequest ==========
//====================================
                    //     let xhr = new XMLHttpRequest();
                    //     let requestUrl = '/api/getthemes/5';
                    //
                    //     xhr.open('get', requestUrl);
                    //     xhr.responseType = 'json';
                    //     xhr.onload = () => {
                    //         if (xhr.status >= 400) {
                    //             console.error(xhr.response);
                    //         } else {
                    //             console.log(xhr.response);
                    //         }
                    //     }
                    //     xhr.onerror = () => {
                    //         console.log(xhr.response);
                    //     }
                    //     xhr.send();
// let body = [{
//             name: 'Владимир',
//             age: 56
//         },
//         {
//             name: 'Ольга',
//             age: 53
//         }];
//
let body = {linksInfo};
//     console.log('-++-++-++-++-++-++-++-++-++-++-++-++-++-++-++-++-++-++');
//     console.log(body);

//let requestUrl = '/api/getthemes/6';
// sendRequest('get', requestUrl).then(data =>console.log(data))
//                               .catch(err => console.log(err));

sendRequest('post', '/api/upload', body).then(data =>console.log(data))
                                        .catch(err => console.log(err));
//====================================
//========== XMLHttpRequest (end) ====
//====================================
cansel_upload_files();
}
//
// function sendRequest(metod, url, body=null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(metod, url);
//         xhr.responseType = 'json';
//         xhr.setRequestHeader('Content-Type', 'application/json');
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response);
//             } else {
//                 resolve(xhr.response);
//                 console.log(xhr.response);
//             }
//         }
//         xhr.onerror = () => {
//             reject(xhr.response);
//         }
//         xhr.send(JSON.stringify(body));
//     })
// }
//
// function create_links_list(args) {
//     for (i=0; i<args.length; i++) {
//         let link_template = `<a href="${args[i]['url']}" class="link"><span
//                              class="name-link">${args[i]['title']}</span></a><br>`;
//          const myFragment = document.createRange().createContextualFragment(link_template);
//         // console.log(myFragment.querySelector('.name-link').textContent);
//         // console.log(myFragment.querySelector('.link').getAttribute('href'));
//         myFragment.querySelector('.name-link').addEventListener('contextmenu', handler_menulink_onclick);
//         document.querySelector('.view-list').appendChild(myFragment);
//     }
// }

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
    let end_pos = source.indexOf('.url');
    return source.slice(0,end_pos);
}

function ExtractUrl(source) {
    let start_pos = source.indexOf('URL');
    let end_pos = source.indexOf('/?');
    let result = '';
    if (start_pos>0 && end_pos>0) {
        result = source.slice(start_pos+4, end_pos+1)
    } else if (start_pos>0 && end_pos<0) {
        result = source.slice(start_pos+4)
    }
    return result;
}


let    menuItem = document.querySelectorAll('.main-menu-item');
let    current_menuItem='';
for (i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('click', handler_menuItem_onclick, false);
    }



function handler_menuItem_onclick(event) {
    //event.preventDefault();
    console.log('Привет --> ' + event.target.textContent);
    current_menuItem = event.target.textContent;
    //document.querySelector('.menu-context-card').classList.remove('hidden');
}

window.onload = function () {
    console.log(current_menuItem);
}

//     clear_link_list();
//     create_links_list(JSON.parse(this.responseText));

//let    asd = document.body.innerHTML;

//console.log(asd);
// for (let elem of document.body.children) {
//     if (elem.matches('a[href$="zip"]')) {
//         alert("Ссылка на архив: " + elem.href );
//     }
// }

// Ждем полной загрузки страницы
// window.onload = function () {
//     // Выбираем все карточки ссылок
//     let card = document.querySelectorAll('.card-theme');
//     let card_item = document.querySelectorAll('.mi-card');
//
//     for (i = 0; i < card.length; i++) {
//         card[i].addEventListener('click', handler_card_onclick, false);
//     }
// }

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
                console.log(xhr.response);
            }
        }
        xhr.onerror = () => {
            reject(xhr.response);
        }
        xhr.send(JSON.stringify(body));
    })
}
