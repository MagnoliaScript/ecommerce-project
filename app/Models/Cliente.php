<?php


class Cliente
{
    private int $id;
    private string $nome;
    private string $cpf;
    private string $dataNascimento;
    private string $email;
    private string $senha;
    private string $telefone;
    private int $enderecoId;
    private string $dataCadastro;

    public function __construct(
        string $nome,
        string $cpf,
        string $dataNascimento,
        string $email,
        string $senha,
        string $telefone,
        int $enderecoId,
        string $dataCadastro
    ) {
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->dataNascimento = $dataNascimento;
        $this->email = $email;
        $this->senha = $senha;
        $this->telefone = $telefone;
        $this->enderecoId = $enderecoId;
        $this->dataCadastro = $dataCadastro;
    }

    // Getters e Setters
    public function getId(): int { return $this->id; }
    public function setId(int $id): void { $this->id = $id; }

    public function getNome(): string { return $this->nome; }
    public function setNome(string $nome): void { $this->nome = $nome; }

    public function getCpf(): string { return $this->cpf; }
    public function setCpf(string $cpf): void { $this->cpf = $cpf; }

    public function getDataNascimento(): string { return $this->dataNascimento; }
    public function setDataNascimento(string $dataNascimento): void { $this->dataNascimento = $dataNascimento; }

    public function getEmail(): string { return $this->email; }
    public function setEmail(string $email): void { $this->email = $email; }

    public function getSenha(): string { return $this->senha; }
    public function setSenha(string $senha): void { $this->senha = $senha; }

    public function getTelefone(): string { return $this->telefone; }
    public function setTelefone(string $telefone): void { $this->telefone = $telefone; }

    public function getEnderecoId(): int { return $this->enderecoId; }
    public function setEnderecoId(int $enderecoId): void { $this->enderecoId = $enderecoId; }

    public function getDataCadastro(): string { return $this->dataCadastro; }
    public function setDataCadastro(string $dataCadastro): void { $this->dataCadastro = $dataCadastro; }

}

?>