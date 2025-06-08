<?php

class Cliente {
    public $nome;
    public $cpf;
    public $data_nasc;
    public $email;
    public $senha;
    public $telefone;
    public $enderecos = [];

    public function __construct($nome, $cpf, $data_nasc, $email, $senha, $telefone) {
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->data_nasc = $data_nasc;
        $this->email = $email;
        $this->senha = $senha;
        $this->telefone = $telefone;
    }

    public function adicionarEndereco($endereco) {
        $this->enderecos[] = $endereco;
    }
}

?>