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

