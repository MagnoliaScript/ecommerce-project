
<?php

/* Definindo elementos para a conexão
    define('host', 'localhost');
    define('user', 'u205594501_admin');
    define("password", '36R2e7yHPyl3');
    define ("database", 'u205594501_ecommerce');

$conn = new MySQLi(host,user,password,database);
    
if($conn->error) {
    die("Falha ao conectar ao banco" . $conn->error);
} */

class Database {
    private $host = 'localhost';
    private $database = 'u205594501_admin';
    private $user = 'u205594501_admin';
    private $password = '36R2e7yHPyl3';

    private $conn;

    public function connect() {
        try {
            $this->conn = new PDO("mysql:host=$this->host;database=$this->database, user=$this->user, password=$this->password");
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            return $this->conn;
        } catch (PDOException $error){

            return null;
        }
    }

}

?>


