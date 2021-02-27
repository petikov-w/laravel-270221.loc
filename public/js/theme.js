let theme = document.querySelectorAll('.theme');
for (i = 0; i < theme.length; i++) {
    theme[i].addEventListener('click', handler_theme_onclick, false);
}

function handler_theme_onclick (event) {
    let id_theme = event.target.getAttribute('data-attr');
    document.location.href = 'links/'+id_theme;
}
