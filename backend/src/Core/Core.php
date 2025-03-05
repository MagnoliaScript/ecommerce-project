<?php 

namespace app\Core;

class Core{
    public static function dispatch(array $routes){
        $url = '/';

        isset($_GET['url']) && $url .= $_GET['url'];

        $prefixController = 'app\\Controllers\\';


        foreach($routes as $route){
            $pattern = '#^' . preg_replace('/{id}/', '([\w-]+)', $route['path']) . '$#';

            if(preg_match($pattern, $url, $matches)){
                array_shift($matches);
                print_r($matches);

                [$controller, $action] = explode('@', $route['action']);
                $controller = $prefixController . $controller;
                $extendedController = new $controller();
                $extendedController -> $action();
            }
        
        }


    }
}
?>