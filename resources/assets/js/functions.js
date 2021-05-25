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
    let end_pos = source.toLowerCase().indexOf('.url');
    console.log(source.toLowerCase());
    console.log('Result: <<------ name ---------');
    console.log(source.slice(0,end_pos));
    return source.slice(0,end_pos);
}

function ExtractUrl(source) {
   let start_pos = source.indexOf('URL');
    // console.log(source);
    // console.log(source.indexOf('IDList='));

    let result = '';
    if (start_pos>0 && source.indexOf('/?')>0) {
        result = source.slice(start_pos+4, source.indexOf('/?')+1);
    } else if (start_pos>0 && source.indexOf('IDList=')>0) {
        result = source.slice(start_pos+4, source.indexOf('IDList='));
    } else if (start_pos>0 && source.indexOf('/?')<0) {
        result = source.slice(start_pos + 4);
    }
    // console.log('Result: <<------ url ---------');
    // console.log(result);
    return result;
}

