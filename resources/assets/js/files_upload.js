
let fileInput = document.querySelector('#file-input');
let dataLabel = document.querySelector('.if-button');
let info = document.querySelector('.info-button');
let listFile = document.querySelector('.file-h');
let linksInfo = [];
let btn_add_links = document.querySelector('.link-add');

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
        listView.innerHTML = "";
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


