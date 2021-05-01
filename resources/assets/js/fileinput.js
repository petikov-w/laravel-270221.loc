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
