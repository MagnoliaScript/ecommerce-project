<<?php 
require_once __DIR__ ."/vendor/autoload.php";
require_once __DIR__ . "/src/routes/main.php";

use app\Core\Core;
use app\Http\Route;

Core::dispatch(Route::routes());

?>