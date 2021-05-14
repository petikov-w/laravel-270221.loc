
let fileInput = document.querySelector('#file-input');
let dataLabel = document.querySelector('.if-button');
let info = document.querySelector('.info-button');
let listFile = document.querySelector('.file-h');
let linksInfo = [];
let btn_add_links = document.querySelector('.link-add');

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
        listView.innerHTML = "";
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
    clearLinkList();
    sendRequest('get', '/api/getlinks').then(data =>console.log(data))
                                       .catch(err => console.log(err));
        // sendRequest('get', '/api/getlinks').then(data =>createLinksList(data))
        //     .catch(err => console.log(err));

    }
}

function createLinksList(args) {
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
