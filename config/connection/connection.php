
<?php

// Definindo elementos para a conexão
    define('host', 'localhost');
    define('user', 'u205594501_admin');
    define("password", '36R2e7yHPyl3');
    define ("database", 'u205594501_ecommerce');

$conn = new MySQLi(host,user,password,database);
    
if($conn->error) {
    die("Falha ao conectar ao banco" . $conn->error);
}


