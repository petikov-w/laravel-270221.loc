
let fileInput = document.querySelector('#file-input');
let dataLabel = document.querySelector('.if-button');
let info = document.querySelector('.info-button');
let listFile = document.querySelector('.file-h');
let zYes = document.querySelector('.z-yes');

fileInput.addEventListener('change', function (event) {
    let str ='';
    for (let v of fileInput.files) {
        console.log(v['name']);
        str += `<div class="e45">${v['name']}</div><br>`;
    }
    listFile.innerHTML = str;

    add_class(dataLabel, 'hidden');
    rem_class(info, 'hidden');
    // console.log(typeof(fileInput.files.length));
    if (fileInput.files.length>0) {
        info.innerHTML = `Выбрано:&nbsp <span class="i1">${fileInput.files.length}</span>&nbsp
                           Добавить в копилку? <button onclick="" class="z-yes">Да</button>
                            <button onclick="cansel_upload_files()" class="z-no">Нет</button>`;
    } else {
        info.innerHTML = `Ничего не было выбрано &nbsp
                         <button onclick="cansel_upload_files()" class="z-no">ОК</button>`;
    }
});



function cansel_upload_files() {
    rem_class(dataLabel, 'hidden');
    add_class(info, 'hidden');
    document.querySelector('.file-h').innerHTML=``;
}

zYes.addEventListener('click', function (event) {
    console.log('ПОКА!');
});



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
