// Função para adicionar um link CSS ao head
function addStylesheet(href, integrity = '', crossorigin = '') {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    if (integrity) link.integrity = integrity;
    if (crossorigin) link.crossOrigin = crossorigin;
    document.head.appendChild(link);
}

// Adicionando os estilos ao head
addStylesheet('css/estrutura.css');
addStylesheet('css/estrutura_paginas.css');
addStylesheet('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH', 'anonymous');
addStylesheet('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
addStylesheet('css/owl.carousel.min.css');
addStylesheet('css/owl.theme.default.min.css');
addStylesheet('css/loader.css');
addStylesheet('https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css');
addStylesheet('https://code.jquery.com/jquery-3.6.0.min.js');
addStylesheet('https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js');
