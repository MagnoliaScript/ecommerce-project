// ============================================
// ADMIN PANEL - JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Toggle Sidebar Mobile
    const btnToggleSidebar = document.getElementById('btnToggleSidebar');
    const btnCloseSidebar = document.getElementById('btnCloseSidebar');
    const sidebar = document.getElementById('sidebar');
    let sidebarOverlay = document.querySelector('.sidebar-overlay');
    
    // Criar overlay se não existir
    if (!sidebarOverlay) {
        sidebarOverlay = document.createElement('div');
        sidebarOverlay.className = 'sidebar-overlay';
        document.body.appendChild(sidebarOverlay);
    }
    
    // Abrir sidebar
    if (btnToggleSidebar) {
        btnToggleSidebar.addEventListener('click', function() {
            sidebar.classList.add('show');
            sidebarOverlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Fechar sidebar
    function closeSidebar() {
        sidebar.classList.remove('show');
        sidebarOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    if (btnCloseSidebar) {
        btnCloseSidebar.addEventListener('click', closeSidebar);
    }
    
    // Fechar ao clicar no overlay
    sidebarOverlay.addEventListener('click', closeSidebar);
    
    // Fechar ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('show')) {
            closeSidebar();
        }
    });
    
    // Ativar link ativo no menu
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath && currentPath.includes(linkPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Auto-close sidebar em mobile após clicar em um link
    if (window.innerWidth < 992) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                setTimeout(closeSidebar, 300);
            });
        });
    }
    
    // Ajustar sidebar ao redimensionar
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            closeSidebar();
        }
    });
    
    // Formatação de números (exemplo)
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(stat => {
        const text = stat.textContent;
        // Se contém R$, formatar como moeda
        if (text.includes('R$')) {
            // Já está formatado, não precisa fazer nada
        }
    });
});

