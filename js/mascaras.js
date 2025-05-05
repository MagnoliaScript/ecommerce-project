$(document).ready(function () {

  setTimeout(function () {
    $('#cliente_cpf').mask('000.000.000-00');
    $('#cliente_telefone').mask('(00) 00000-0000');
    $('#endereco_cep').mask('00000-000');
  }, 100);

});
