
// ============================================================
// RENDERIZAÇÃO
// ============================================================

function gerarMenu() {
    if (!conteudo.menu && conteudo.secoes) {
        conteudo.menu = conteudo.secoes.map(s => ({
            id: s.id,
            icon: s.icon,
            label: s.titulo
        }));
    }
}

function renderTudo() {
    const heroContainer = document.getElementById('heroStats');
    if (heroContainer && conteudo.heroStats) {
        heroContainer.innerHTML = conteudo.heroStats.map(stat => `
            <div class="hero-stat">
                <span class="hero-stat-value">${stat.value}</span>
                <span class="hero-stat-label">${stat.label}</span>
            </div>
        `).join('');
    }

    const navMenu = document.getElementById('navMenu');
    if (navMenu && conteudo.menu) {
        navMenu.innerHTML = conteudo.menu.map(item => `
            <li class="nav-item">
                <a href="#${item.id}" class="nav-link" data-section="${item.id}">
                    <i class="${item.icon}"></i>
                    <span>${item.label}</span>
                </a>
            </li>
        `).join('');
    }

    const contentArea = document.getElementById('contentArea');
    if (contentArea && conteudo.secoes) {
        contentArea.innerHTML = conteudo.secoes.map(secao => `
            <section class="section" id="${secao.id}">
                <div class="section-header">
                    <div class="section-icon"><i class="${secao.icon}"></i></div>
                    <h2>${secao.titulo}</h2>
                </div>
                <div class="section-body">
                    ${secao.conteudo()}
                </div>
            </section>
        `).join('');
    }
}

// ============================================================
// INTERAÇÕES
// ============================================================
function initInteractions() {


    // --- SCROLL REVEAL (IntersectionObserver) ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section').forEach(section => {
        revealObserver.observe(section);
    });

    // --- SCROLL SPY (IntersectionObserver) ---
    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector(`.nav-link[data-section="${id}"]`);
            if (link) {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }, { threshold: 0.2, rootMargin: '-80px 0px -60% 0px' });

    document.querySelectorAll('.section').forEach(section => {
        spyObserver.observe(section);
    });

    // --- SCROLL TO TOP ---
    const btnTop = document.getElementById('scrollTop');
    if (btnTop) {
        window.addEventListener('scroll', () => {
            btnTop.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });
    }

    // --- MENU MOBILE ---
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    if (menuToggle && sidebar && overlay) {
        const toggleMenu = () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        };
        [menuToggle, overlay].forEach(el => el.addEventListener('click', toggleMenu));
        sidebar.addEventListener('click', (e) => {
            if (e.target.closest('.nav-link') && window.innerWidth <= 768) toggleMenu();
        });
    }

    // --- BUSCA ---
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('.nav-item').forEach(item => {
                item.style.display = item.textContent.toLowerCase().includes(term) ? '' : 'none';
            });
        });
    }
}

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    gerarMenu();
    renderTudo();
    initInteractions();
});
