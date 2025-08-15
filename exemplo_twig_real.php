<?php

/**
 * EXEMPLO USANDO TWIG REAL
 * 
 * Este exemplo usa a sintaxe completa do Twig com todas suas funcionalidades
 */

// Inclui a configuração do Twig
require_once __DIR__ . '/config/twig/TwigConfig.php';

// Dados para o template (isso viria do seu banco de dados normalmente)
$dados = [
    'titulo' => 'Loja Virtual Magnolia',
    'nome_usuario' => 'Ana Silva',
    'produtos' => [
        [
            'nome' => 'MacBook Pro M3 16"',
            'preco' => '16.999,00',
            'descricao' => 'Notebook Apple com chip M3 Pro, 36GB RAM e 1TB SSD. Ideal para profissionais de design e desenvolvimento.',
            'categoria' => 'Notebooks'
        ],
        [
            'nome' => 'iPhone 15 Pro Max',
            'preco' => '9.499,00',
            'descricao' => 'Smartphone Apple com câmera profissional de 48MP, Action Button e USB-C.',
            'categoria' => 'Smartphones'
        ],
        [
            'nome' => 'Sony WH-1000XM5',
            'preco' => '1.899,00',
            'descricao' => 'Fone de ouvido premium com cancelamento de ruído líder do mercado.',
            'categoria' => 'Áudio'
        ],
        [
            'nome' => 'iPad Pro 12.9" M2',
            'preco' => '7.299,00',
            'descricao' => 'Tablet profissional com chip M2, tela Liquid Retina XDR e suporte ao Apple Pencil.',
            'categoria' => 'Tablets'
        ]
    ]
];

// Adiciona filtros customizados (opcional)
TwigConfig::addCustomFilters();

try {
    // 🎯 AQUI É ONDE O TWIG REAL FUNCIONA!
    $html_renderizado = TwigConfig::render('pages/home.twig', $dados);
    
    // Exibe o resultado
    echo $html_renderizado;
    
} catch (Exception $e) {
    // Tratamento de erro profissional
    echo "<div style='background: #ffebee; color: #c62828; padding: 20px; border-radius: 5px; margin: 20px;'>";
    echo "<h3>❌ Erro ao renderizar template:</h3>";
    echo "<p><strong>Mensagem:</strong> " . htmlspecialchars($e->getMessage()) . "</p>";
    echo "<p><strong>Arquivo:</strong> " . $e->getFile() . "</p>";
    echo "<p><strong>Linha:</strong> " . $e->getLine() . "</p>";
    echo "</div>";
    
    // Em produção, você registraria este erro em um log
    error_log("Erro Twig: " . $e->getMessage());
}

?>
