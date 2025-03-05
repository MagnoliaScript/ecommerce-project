function addResource(url, integrity = '', crossorigin = '') {
    let element;

    if (url.endsWith('.css')) {
        // Se for CSS, cria um <link>
        element = document.createElement('link');
        element.rel = 'stylesheet';
        element.href = url;
    } else if (url.endsWith('.js')) {
        // Se for JS, cria um <script>
        element = document.createElement('script');
        element.src = url;
        element.defer = true; // Evita bloqueio da renderização
    }

    // Adiciona atributos opcionais
    if (integrity) element.integrity = integrity;
    if (crossorigin) element.crossOrigin = crossorigin;

    if (element) document.head.appendChild(element);
}

// Adicionando os estilos ao head
addResource('css/estrutura.css');
addResource('css/estrutura_paginas.css');
addResource('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH', 'anonymous');
addResource('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
addResource('css/owl.carousel.min.css');
addResource('css/owl.theme.default.min.css');
addResource('css/loader.css');
addResource('https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css');

// Adicionando scripts corretamente
addResource('js/jquery-3.7.1.min.js');
addResource('https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js');


