// Função para adicionar um script ao final do body
function addScript(src, integrity = '', crossorigin = '') {
  let script = document.createElement('script');
  script.src = src;
  if (integrity) script.integrity = integrity;
  if (crossorigin) script.crossOrigin = crossorigin;
  document.body.appendChild(script);
}

// Adicionando os scripts ao final do body
addScript('js/jquery-3.7.1.min.js');
addScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js');
addScript('https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
  'sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r', 'anonymous');
addScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js',
  'sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy', 'anonymous');
addScript('js/script.js');
addScript('js/mascaras.js');
addScript('js/owl.carousel.min.js');