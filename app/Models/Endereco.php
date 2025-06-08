<?php 

class Endereco {
    public $cep;
    public $rua;
    public $numero;
    public $bairro;
    public $estado;
    public $complemento;

    public function __construct($cep, $rua, $numero, $bairro, $estado, $complemento = '') {
        $this->cep = $cep;
        $this->rua = $rua;
        $this->numero = $numero;
        $this->bairro = $bairro;
        $this->estado = $estado;
        $this->complemento = $complemento;
    }
}

?>