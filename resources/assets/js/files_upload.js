
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


