// ============================================
// PRODUCT FORM - JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Contador de caracteres para descrição resumida
    const descShort = document.getElementById('produto_desc_menor');
    const charCountShort = document.getElementById('charCountShort');
    
    if (descShort && charCountShort) {
        descShort.addEventListener('input', function() {
            const length = this.value.length;
            charCountShort.textContent = length + '/200';
            
            if (length > 200) {
                charCountShort.classList.remove('bg-secondary');
                charCountShort.classList.add('bg-danger');
            } else if (length > 180) {
                charCountShort.classList.remove('bg-secondary', 'bg-danger');
                charCountShort.classList.add('bg-warning');
            } else {
                charCountShort.classList.remove('bg-warning', 'bg-danger');
                charCountShort.classList.add('bg-secondary');
            }
        });
    }
    
    // Contador de caracteres para meta título
    const metaTitle = document.getElementById('produto_meta_titulo');
    const metaTitleCount = document.getElementById('metaTitleCount');
    
    if (metaTitle && metaTitleCount) {
        metaTitle.addEventListener('input', function() {
            const length = this.value.length;
            metaTitleCount.textContent = length + '/60';
            
            if (length > 60) {
                metaTitleCount.classList.remove('bg-secondary');
                metaTitleCount.classList.add('bg-danger');
            } else if (length > 50) {
                metaTitleCount.classList.remove('bg-secondary', 'bg-danger');
                metaTitleCount.classList.add('bg-warning');
            } else {
                metaTitleCount.classList.remove('bg-warning', 'bg-danger');
                metaTitleCount.classList.add('bg-secondary');
            }
        });
    }
    
    // Contador de caracteres para meta descrição
    const metaDesc = document.getElementById('produto_meta_descricao');
    const metaDescCount = document.getElementById('metaDescCount');
    
    if (metaDesc && metaDescCount) {
        metaDesc.addEventListener('input', function() {
            const length = this.value.length;
            metaDescCount.textContent = length + '/160';
            
            if (length > 160) {
                metaDescCount.classList.remove('bg-secondary');
                metaDescCount.classList.add('bg-danger');
            } else if (length > 150) {
                metaDescCount.classList.remove('bg-secondary', 'bg-danger');
                metaDescCount.classList.add('bg-warning');
            } else {
                metaDescCount.classList.remove('bg-warning', 'bg-danger');
                metaDescCount.classList.add('bg-secondary');
            }
        });
    }
    
    // Cálculo de desconto
    const precoDe = document.getElementById('produto_preco_de');
    const precoPor = document.getElementById('produto_preco_por');
    const descontoCalculado = document.getElementById('descontoCalculado');
    
    function calcularDesconto() {
        if (precoDe && precoPor && descontoCalculado) {
            const precoOriginal = parseFloat(precoDe.value) || 0;
            const precoAtual = parseFloat(precoPor.value) || 0;
            
            if (precoOriginal > 0 && precoAtual > 0 && precoOriginal > precoAtual) {
                const desconto = ((precoOriginal - precoAtual) / precoOriginal) * 100;
                descontoCalculado.textContent = desconto.toFixed(0) + '%';
            } else {
                descontoCalculado.textContent = '0%';
            }
        }
    }
    
    if (precoDe) precoDe.addEventListener('input', calcularDesconto);
    if (precoPor) precoPor.addEventListener('input', calcularDesconto);
    
    // Cálculo de volume
    const comprimento = document.getElementById('produto_comprimento');
    const largura = document.getElementById('produto_largura');
    const altura = document.getElementById('produto_altura');
    const volumeCalculado = document.getElementById('volumeCalculado');
    
    function calcularVolume() {
        if (comprimento && largura && altura && volumeCalculado) {
            const comp = parseFloat(comprimento.value) || 0;
            const larg = parseFloat(largura.value) || 0;
            const alt = parseFloat(altura.value) || 0;
            
            if (comp > 0 && larg > 0 && alt > 0) {
                const volume = comp * larg * alt;
                volumeCalculado.textContent = volume.toFixed(2) + ' cm³';
            } else {
                volumeCalculado.textContent = '0 cm³';
            }
        }
    }
    
    if (comprimento) comprimento.addEventListener('input', calcularVolume);
    if (largura) largura.addEventListener('input', calcularVolume);
    if (altura) altura.addEventListener('input', calcularVolume);
    
    // Preview de imagem principal
    const imagemPrincipal = document.getElementById('produto_imagem_principal');
    const previewPrincipal = document.getElementById('previewPrincipal');
    
    if (imagemPrincipal && previewPrincipal) {
        imagemPrincipal.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = previewPrincipal.querySelector('img');
                    if (img) {
                        img.src = e.target.result;
                        previewPrincipal.style.display = 'block';
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Preview de galeria
    const galeria = document.getElementById('produto_galeria');
    const galleryPreview = document.getElementById('galleryPreview');
    
    if (galeria && galleryPreview) {
        galeria.addEventListener('change', function(e) {
            galleryPreview.innerHTML = '';
            const files = Array.from(e.target.files);
            
            files.forEach((file, index) => {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.className = 'img-thumbnail';
                        img.style.cssText = 'width: 100px; height: 100px; object-fit: cover; margin: 0.25rem;';
                        galleryPreview.appendChild(img);
                    };
                    reader.readAsDataURL(file);
                }
            });
        });
    }
    
    // Gerenciamento de tags
    const tagsInput = document.getElementById('produto_tags');
    const tagsContainer = document.getElementById('tagsContainer');
    
    if (tagsInput && tagsContainer) {
        tagsInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                const value = this.value.trim();
                if (value) {
                    addTag(value);
                    this.value = '';
                }
            }
        });
        
        tagsInput.addEventListener('blur', function() {
            const value = this.value.trim();
            if (value) {
                addTag(value);
                this.value = '';
            }
        });
    }
    
    function addTag(tag) {
        if (!tag) return;
        
        // Remove "Nenhuma tag adicionada" se existir
        const emptyMsg = tagsContainer.querySelector('.badge.bg-secondary');
        if (emptyMsg && emptyMsg.textContent.includes('Nenhuma tag')) {
            emptyMsg.remove();
        }
        
        // Verifica se a tag já existe
        const existingTags = Array.from(tagsContainer.querySelectorAll('.badge'));
        const tagExists = existingTags.some(badge => badge.textContent.trim() === tag);
        
        if (!tagExists) {
            const badge = document.createElement('span');
            badge.className = 'badge bg-primary';
            badge.textContent = tag;
            badge.style.cursor = 'pointer';
            
            badge.addEventListener('click', function() {
                this.remove();
                if (tagsContainer.children.length === 0) {
                    const emptyMsg = document.createElement('span');
                    emptyMsg.className = 'badge bg-secondary';
                    emptyMsg.textContent = 'Nenhuma tag adicionada';
                    tagsContainer.appendChild(emptyMsg);
                }
            });
            
            tagsContainer.appendChild(badge);
        }
    }
    
    // Geração automática de slug a partir do título
    const titulo = document.getElementById('produto_titulo');
    const slug = document.getElementById('produto_slug');
    
    if (titulo && slug) {
        titulo.addEventListener('blur', function() {
            if (!slug.value) {
                const slugValue = this.value
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
                slug.value = slugValue;
            }
        });
    }
    
    // Progress bar do formulário
    const form = document.getElementById('formProduto');
    const progressBar = document.getElementById('progressBar');
    const progressBadge = document.getElementById('progressBadge');
    
    function updateProgress() {
        if (!form || !progressBar || !progressBadge) return;
        
        const requiredFields = form.querySelectorAll('[required]');
        const filledFields = Array.from(requiredFields).filter(field => {
            if (field.type === 'file') {
                return field.files.length > 0;
            }
            return field.value.trim() !== '';
        });
        
        const progress = (filledFields.length / requiredFields.length) * 100;
        progressBar.style.width = progress + '%';
        progressBadge.textContent = Math.round(progress) + '%';
        
        if (progress === 100) {
            progressBar.classList.remove('bg-primary');
            progressBar.classList.add('bg-success');
        } else {
            progressBar.classList.remove('bg-success');
            progressBar.classList.add('bg-primary');
        }
    }
    
    if (form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', updateProgress);
            input.addEventListener('change', updateProgress);
        });
        
        // Atualiza progresso inicial
        updateProgress();
    }
    
    // Salvar como rascunho
    const btnSalvarRascunho = document.getElementById('btnSalvarRascunho');
    if (btnSalvarRascunho) {
        btnSalvarRascunho.addEventListener('click', function(e) {
            e.preventDefault();
            const statusField = document.getElementById('produto_status');
            if (statusField) {
                statusField.value = '2'; // Rascunho
            }
            // Aqui você pode adicionar lógica para salvar como rascunho
            alert('Produto salvo como rascunho!');
        });
    }
    
    // Validação de formulário
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const tituloValue = document.getElementById('produto_titulo')?.value.trim();
            const skuValue = document.getElementById('produto_sku')?.value.trim();
            const precoValue = document.getElementById('produto_preco_por')?.value;
            
            if (!tituloValue || !skuValue || !precoValue) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return false;
            }
            
            // Aqui você pode adicionar lógica de envio do formulário
            console.log('Formulário válido, pronto para enviar!');
            // form.submit(); // Descomente quando implementar o backend
        });
    }
});

