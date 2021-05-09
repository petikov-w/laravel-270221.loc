
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
//  let body = {linksInfo};
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
