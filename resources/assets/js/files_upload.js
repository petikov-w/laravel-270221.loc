
let fileInput = document.querySelector('#file-input');
let dataLabel = document.querySelector('.if-button');
let info = document.querySelector('.info-button');
let listFile = document.querySelector('.file-h');


// == Проверка подключения jquery ==
// $(document).ready(function(){
//     alert(jQuery.fn.jquery);
// });
//==================================

fileInput.addEventListener('change', function (event) {
    let str ='';
    for (let v of fileInput.files) {
        str += `<div class="e45">${v['name']}</div><br>`;
    }
    //console.log(Pink);
    listFile.innerHTML = str;

    add_class(dataLabel, 'hidden');
    rem_class(info, 'hidden');
    // console.log(typeof(fileInput.files.length));
    if (fileInput.files.length>0) {
        info.innerHTML = `Выбрано:&nbsp <span class="i1">${fileInput.files.length}</span>&nbsp
                           Добавить в копилку? <button onclick="ok_upload_files(fileInput.files)" class="z-yes">Да</button>
                            <button onclick="cansel_upload_files()" class="z-no">Нет</button>`;
    } else {
        info.innerHTML = `Ничего не было выбрано &nbsp
                         <button onclick="cansel_upload_files()" class="z-no">ОК</button>`;
    }
});


function ok_upload_files(hh) {
        let linksForUpload=[];
        console.log(hh);
        for (let h of hh) {
              linksForUpload.push(extractLinkInfo(h));
        }
        console.log('<<=?=?=?=?=?=?=?=?=?=?=?=?=?=?=?=?=?=>>');
        console.log(linksForUpload);
        let mLink = linksForUpload;
    let link =[];
    let sts =[];


    // for (let key in arr) {
    //     alert( arr[key] ); // Яблоко, Апельсин, Груша
    // }



    for (let value of linksForUpload) {
         console.log(`значение = ${value["url"]}`);
        //console.log(h.name);
        // console.log(h.name[0]);
    }
    console.log('-++-++-++-++-++-++-++-++-++-++-++-++-++-++-++-++-++-++');
    console.log(sts);
       // console.log(j1);

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

 let body = sts;
    console.log('-++-++-++-++-++-++-++-++-++-++-++-++-++-++-++-++-++-++');
    console.log(body);


let requestUrl = '/api/getthemes/6';
// sendRequest('get', requestUrl).then(data =>console.log(data))
//                               .catch(err => console.log(err));
sendRequest('post', '/api/upload', body).then(data =>console.log(data))
                                        .catch(err => console.log(err));
//====================================
//========== XMLHttpRequest (end) ====
//====================================
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // console.log(mLink);
    //let requestIntoServer = new XMLHttpRequest();
    //requestIntoServer.open("POST","/api/upload", true)
    // устанавливаем заголовок — выбираем тип контента, который отправится на сервер,
    // в нашем случае мы явно пишем, что это JSON
    //requestIntoServer.setRequestHeader('Content-Type', 'application/json');
    //requestIntoServer.send(mLink);
    // requestIntoServer.onreadystatechange = function () {
    //     if (this.readyState==4 && this.status==200) {
    //         console.log(this.responseText);
    //     }
    // }


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

        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log(body);

        xhr.send(JSON.stringify(body));
    })
}



    function extractLinkInfo(fileLink) {
        let result = [];
        // let link ={
        //     name: "",
        //     url: "",
        // };

        let reader = new FileReader();
        reader.onload = function (event) {
            result.push({
                name: delete_extension(fileLink.name),
                url: ExtractUrl(reader.result)
            });
       };
       reader.readAsText(fileLink);

        let link ={};
        for (let h of result) {
            // link["name"] = h.name[0];
            // link["url"] = h.url;
            console.log(h.name[0]);
        }

        console.log(link);
        return result;
}

