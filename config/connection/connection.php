
<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'u205594501_admin');
define('DB_PASSWORD', '36R2e7yHPyl3');
define('DB_NAME', 'u205594501_ecommerce');

class Conexao {
    public static function conectar() {
        try {
            $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8';
            $pdo = new PDO($dsn, DB_USER, DB_PASSWORD);
            
            // Configura o PDO para lançar exceções em caso de erro
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return $pdo;

        } catch (PDOException $e) {
            die('Erro na conexão: ' . $e->getMessage());
        }
    }
}



