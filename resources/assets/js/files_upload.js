
let fileInput = document.querySelector('#file-input');
let dataLabel = document.querySelector('.if-button');
let info = document.querySelector('.info-button');
let listFile = document.querySelector('.file-h');
// let Pink = [];

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


// function dsf(hh) {
//     for (let h of hh) {
//         extractLinkInfo(h);
//     }
//     console.log(Pink);
// }

function ok_upload_files(hh) {
    let linksForUpload=[];
    for (let h of hh) {
        // JSON.stringify(linksForUpload.push((extractLinkInfo(h))));
         linksForUpload.push((extractLinkInfo(h)));
    }
    //console.log(linksForUpload);
    // console.log(linksForUpload);
    let mLink = {linksForUpload};

    $.ajax({
        url: "http://laravel-270221.loc/api/upload",
        type: "POST",
        dataType: "json",
        data: {linksForUpload},
        success(data) {
            console.log(data); }
    });



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

// function  extractLinkInfo(fileLink) {
//     let reader = new FileReader();
//     reader.onload = function (event){
//         Pink.push({
//             name: delete_extension(fileLink.name),
//             url: ExtractUrl(reader.result)
//         });
//     };
//     reader.readAsText(fileLink);
// }

// function  extractLinkInfo(fileLink) {
//     let result = [];
//     let reader = new FileReader();
//     reader.onload = function (event){
//         result.push({
//             "name": delete_extension(fileLink.name),
//             "url": ExtractUrl(reader.result)
//         });
//     };
//     reader.readAsText(fileLink);
//     return result;
// }

function  extractLinkInfo(fileLink) {
    // let result = '';
    let result = [];

    let reader = new FileReader();
    reader.onload = function (event){
        // let jsonLink = [];
        let link = {name: delete_extension(fileLink.name),
            url: ExtractUrl(reader.result)};
        // result = JSON.stringify(link);
        // jsonLink = JSON.stringify(link);
        // let ass = JSON.stringify(link);
        // console.log(typeof ass);
        result.push(JSON.stringify(link));
        //  result = JSON.stringify(link);
    };
    reader.readAsText(fileLink);

    // console.log(result);
    // console.log(typeof result);
    return result;
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



// function ok_upload_files(event) {
//     console.log('ПРИВЕТ!');
//     //event.stopPropagation(); // остановка всех текущих JS событий
//     event.preventDefault();  // остановка дефолтного события для текущего элемента - клик для <a> тега
//     // ничего не делаем если files пустой
//     if( typeof files == 'undefined' ) {console.log('files пустой!');  return;}
//
// }


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
