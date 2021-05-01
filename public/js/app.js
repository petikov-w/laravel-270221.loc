// let fileInput = document.querySelector('#input__file');
// let count_files = 0;
// fileInput.addEventListener('change', function (event) {
//     count_files = fileInput.files.length
//     console.log(count_files);
// });

// let fileInput = document.querySelector('#file-input');
// let fileI = document.querySelector('.i1');
// let dataLabel = document.querySelector('.if-button');
// let info = document.querySelector('.info-button');


// fileInput.addEventListener('change', function (event) {
    // console.log(fileInput.files);
    // for (let i = 0; i < fileInput.files.length; i++) {
    //     let file = fileInput.files[i];
    // }

    // add_class(dataLabel, 'hidden');
    // rem_class(info, 'hidden');
    // add_class(dataLabel, 'last');
    // rem_class(info, 'last');
    // add_class(info, 'first');
    // rem_class(dataLabel, 'first');
//     info.innerHTML= `Выбрано :&nbsp <span class="i1">${fileInput.files.length}</span>Добавить в копилку? <button onclick="add_links()" class="z-yes">Да</button>
//                             <button onclick="cansel_links()" class="z-no">Нет</button>`;
//
//     info.innerHTML = `Выбрано :&nbsp  <span class="e45">${fileInput.files.length}</span>
//                             ${numerals(fileInput.files.length)}.  &nbsp
//                             Добавить в копилку? <button onclick="add_links()" class="z-yes">Да</button>
//                             <button onclick="cansel_links()" class="z-no">Нет</button>`;
// });




// fileInput.addEventListener('change', function (event) {
//     console.log(fileInput.files);
//     for (let i = 0; i < fileInput.files.length; i++) {
//         let file = fileInput.files[i];
//     }
//
//     add_class(dataLabel, 'hidden');
//     rem_class(info, 'hidden');
//     add_class(dataLabel, 'last');
//     rem_class(info, 'last');
//     add_class(info, 'first');
//     rem_class(dataLabel, 'first');
//     info.innerHTML = `Выбрано :&nbsp  <span class="e45">${fileInput.files.length}</span>
//                             ${numerals(fileInput.files.length)}.  &nbsp
//                             Добавить в копилку? <button onclick="add_links()" class="z-yes">Да</button>
//                             <button onclick="cansel_links()" class="z-no">Нет</button>`;
// });



//-----------------------------

// <input type="file" id="file-input" accept=".url" className="inputfile" multiple/>
// <label htmlFor="file-input" className="input-button">
//     <span className="if-button">Добавить ссылки</span>
// </label>
// <span className="info-button hidden"></span>
//

//-----------------------------



//
//
//
// function rem_class(eldom, d_class) {
//     if (eldom.classList.contains(d_class)) {
//         eldom.classList.remove(d_class)
//     }
// }
//
// function add_class(eldom, d_class) {
//     if (!eldom.classList.contains(d_class)) {
//         eldom.classList.add(d_class)
//     }
// }

function add_links() {
    // rem_class(dataLabel, 'hidden');
    // add_class(info, 'hidden');
    // rem_class(dataLabel, 'last');
    // add_class(info, 'last');
    // rem_class(info, 'first');
    // add_class(dataLabel, 'first');
    // let path_to_handler = 'http://www-061220/addlinks.php';
    // let mLink = {Pink};
    // //console.log(mLink);
    // let jsonLink = JSON.stringify(mLink);
    // //console.log(jsonLink);
    // let result = document.querySelector('.result');
    // let requestIntoServer = new XMLHttpRequest();
    //
    // requestIntoServer.open('POST',path_to_handler, true)
    //
    // // устанавливаем заголовок — выбираем тип контента, который отправится на сервер,
    // // в нашем случае мы явно пишем, что это JSON
    // requestIntoServer.setRequestHeader('Content-Type', 'application/json');
    // requestIntoServer.send(jsonLink);



// Создаем экземпляр объекта запроса на сервер,
// когда придёт ответ на наше обращение к серверу, мы его обработаем здесь
// Создаем реакцию объекта на изменение состояния
//     requestIntoServer.onreadystatechange = function () {
//         if (this.readyState==4 && this.status==200) {
//             result.innerHTML = this.responseText;
//         }
//     }
}


//
// function sendFile(file) {
//     var uri = '/saveImage';
//     var xhr = new XMLHttpRequest();
//     var fd = new FormData();
//
//     xhr.open('POST', uri, true);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var imageName = xhr.responseText;
//             //do what you want with the image name returned
//             //e.g update the interface
//         }
//     };
//     fd.append('myFile', file);
//     xhr.send(fd);
// }


let fileInput = document.querySelector('#file-input');
let dataLabel = document.querySelector('.if-button');
let info = document.querySelector('.info-button');
let listFile = document.querySelector('.file-h');
let Pink = [];

fileInput.addEventListener('change', function (event) {
    let str ='';
    for (let v of fileInput.files) {
        // console.log(v['name']);
        //extractLinkInfo(v);
        str += `<div class="e45">${v['name']}</div><br>`;
    }
    //console.log(Pink);
    listFile.innerHTML = str;

    add_class(dataLabel, 'hidden');
    rem_class(info, 'hidden');
    // console.log(typeof(fileInput.files.length));
    if (fileInput.files.length>0) {
        info.innerHTML = `Выбрано:&nbsp <span class="i1">${fileInput.files.length}</span>&nbsp
                           Добавить в копилку? <button onclick="dsf(fileInput.files)" class="z-yes">Да</button>
                            <button onclick="cansel_upload_files()" class="z-no">Нет</button>`;
    } else {
        info.innerHTML = `Ничего не было выбрано &nbsp
                         <button onclick="cansel_upload_files()" class="z-no">ОК</button>`;
    }
});


function dsf(hh) {
    for (let h of hh) {
        // console.log(v['name']);
        extractLinkInfo(h);
    }
    console.log(Pink);
}

function  extractLinkInfo(fileLink) {
    let reader = new FileReader();
    reader.onload = function (event){
        Pink.push({
            name: delete_extension(fileLink.name),
            url: ExtractUrl(reader.result)
        });
    };
    reader.readAsText(fileLink);
}
// for (let i = 0; i < fileInput.files.length; i++) {
//     let file = fileInput.files[i];
//     let reader = new FileReader();
//     reader.onload = function (event){
//         // // Создаем новые элементы
//         // let link_a = document.createElement('a');
//         // link_a.href = ExtractUrl(reader.result);
//         // link_a.className = 'link';
//         // let div_a = document.createElement('div')
//         // div_a.className = 'name-link';
//         // div_a.innerHTML = delete_extension(file.name);
//         // // Добавляем созданные элементы на страницу
//         // let main = document.querySelector('main');
//         // link_a.appendChild(div_a);
//         // main.appendChild(link_a);
//         Pink.push({
//             name: delete_extension(file.name),
//             url: ExtractUrl(reader.result)
//         });
//         //console.log(Pink);
//     };
//     reader.readAsText(file);
// }


// function cansel_upload_files() {
//     rem_class(dataLabel, 'hidden');
//     add_class(info, 'hidden');
//     document.querySelector('.file-h').innerHTML=``;
// }

// zYes.addEventListener('click', function (event) {
//     console.log('ПОКА!');
// });



function ok_upload_files(event) {
    console.log('ПРИВЕТ!');
    //event.stopPropagation(); // остановка всех текущих JS событий
    event.preventDefault();  // остановка дефолтного события для текущего элемента - клик для <a> тега
    // ничего не делаем если files пустой
    if( typeof files == 'undefined' ) {console.log('files пустой!');  return;}

}


// обработка и отправка AJAX запроса при клике на кнопку upload_files
// $('.z-yes').on( 'click', function( event ){
//     alert('ПРИВЕТ!');

    // event.stopPropagation(); // остановка всех текущих JS событий
    // event.preventDefault();  // остановка дефолтного события для текущего элемента - клик для <a> тега
    //
    // // ничего не делаем если files пустой
    // if( typeof files == 'undefined' ) return;
    //
    // // создадим объект данных формы
    // var data = new FormData();
    //
    // // заполняем объект данных файлами в подходящем для отправки формате
    // $.each( files, function( key, value ){
    //     data.append( key, value );
    // });
    //
    // // добавим переменную для идентификации запроса
    // data.append( 'my_file_upload', 1 );
    //
    // // AJAX запрос
    // $.ajax({
    //     url         : './submit.php',
    //     type        : 'POST', // важно!
    //     data        : data,
    //     cache       : false,
    //     dataType    : 'json',
    //     // отключаем обработку передаваемых данных, пусть передаются как есть
    //     processData : false,
    //     // отключаем установку заголовка типа запроса. Так jQuery скажет серверу что это строковой запрос
    //     contentType : false,
    //     // функция успешного ответа сервера
    //     success     : function( respond, status, jqXHR ){
    //
    //         // ОК - файлы загружены
    //         if( typeof respond.error === 'undefined' ){
    //             // выведем пути загруженных файлов в блок '.ajax-reply'
    //             var files_path = respond.files;
    //             var html = '';
    //             $.each( files_path, function( key, val ){
    //                 html += val +'<br>';
    //             } )
    //
    //             $('.ajax-reply').html( html );
    //         }
    //         // ошибка
    //         else {
    //             console.log('ОШИБКА: ' + respond.data );
    //         }
    //     },
    //     // функция ошибки ответа сервера
    //     error: function( jqXHR, status, errorThrown ){
    //         console.log( 'ОШИБКА AJAX запроса: ' + status, jqXHR );
    //     }
    //
    // });

// });

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

function cansel_links() {
    rem_class(dataLabel, 'hidden');
    add_class(info, 'hidden');
    // rem_class(dataLabel, 'last');
    // add_class(info, 'last');
    // rem_class(info, 'first');
    // add_class(dataLabel, 'first');
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

function add_links() {
    rem_class(dataLabel, 'hidden');
    add_class(info, 'hidden');
    rem_class(dataLabel, 'last');
    add_class(info, 'last');
    rem_class(info, 'first');
    add_class(dataLabel, 'first');
    let path_to_handler = 'http://www-061220/addlinks.php';
    let mLink = {Pink};
    //console.log(mLink);
    let jsonLink = JSON.stringify(mLink);
    //console.log(jsonLink);
    let result = document.querySelector('.result');
    let requestIntoServer = new XMLHttpRequest();

    requestIntoServer.open('POST',path_to_handler, true)

    // устанавливаем заголовок — выбираем тип контента, который отправится на сервер,
    // в нашем случае мы явно пишем, что это JSON
    requestIntoServer.setRequestHeader('Content-Type', 'application/json');
    requestIntoServer.send(jsonLink);



// Создаем экземпляр объекта запроса на сервер,
// когда придёт ответ на наше обращение к серверу, мы его обработаем здесь
// Создаем реакцию объекта на изменение состояния
    requestIntoServer.onreadystatechange = function () {
        if (this.readyState==4 && this.status==200) {
            result.innerHTML = this.responseText;
        }
    }
}

