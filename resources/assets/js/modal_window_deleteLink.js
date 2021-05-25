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
