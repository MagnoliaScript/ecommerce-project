<?php

// Verifica se o autoload do Composer existe
if (file_exists(__DIR__ . '/../../vendor/autoload.php')) {
    require_once __DIR__ . '/../../vendor/autoload.php';
} else {
    // Se não encontrou vendor local, assume que está instalado globalmente no servidor
    // Tenta carregar diretamente as classes do Twig
    if (!class_exists('Twig\Environment')) {
        die("❌ ERRO: Twig não encontrado. Certifique-se que está instalado no servidor.");
    }
}

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class TwigConfig {
    private static $twig = null;
    
    public static function getTwig() {
        if (self::$twig === null) {
            // Configura o loader para buscar templates na pasta templates/
            $loader = new FilesystemLoader(__DIR__ . '/../../templates');
            
            // Configurações do Twig
            $options = [
                'cache' => __DIR__ . '/../../cache/twig', // Cache para melhor performance
                'debug' => true,  // Habilita debug para desenvolvimento
                'auto_reload' => true,  // Recarrega templates automaticamente
            ];
            
            // Cria a instância do Twig
            self::$twig = new Environment($loader, $options);
            
            // Se debug está ativo, adiciona extensão de debug
            if ($options['debug']) {
                self::$twig->addExtension(new \Twig\Extension\DebugExtension());
            }
            
            // Adiciona variáveis globais úteis
            self::$twig->addGlobal('base_url', self::getBaseUrl());
            self::$twig->addGlobal('assets_url', self::getBaseUrl());
            self::$twig->addGlobal('app_name', 'Magnolia E-commerce');
        }
        
        return self::$twig;
    }
    
    /**
     * Método principal para renderizar templates
     */
    public static function render($template, $data = []) {
        $twig = self::getTwig();
        return $twig->render($template, $data);
    }
    
    /**
     * Calcula a URL base da aplicação
     */
    private static function getBaseUrl() {
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https://' : 'http://';
        $host = $_SERVER['HTTP_HOST'];
        $script = $_SERVER['SCRIPT_NAME'];
        $path = dirname($script);
        
        return $protocol . $host . ($path === '/' ? '' : $path);
    }
    
    /**
     * Adiciona filtros customizados (opcional)
     */
    public static function addCustomFilters() {
        $twig = self::getTwig();
        
        // Exemplo: filtro para formatar preço
        $priceFilter = new \Twig\TwigFilter('price', function ($value) {
            return 'R$ ' . number_format($value, 2, ',', '.');
        });
        
        $twig->addFilter($priceFilter);
    }
}

?>
