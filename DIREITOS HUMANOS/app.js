// app.js — MV Estudos

// ─── ESTADO GLOBAL OTIMIZADO ────────────────────────────────────────
const AppState = {
  currentTopic: null,
  studyProgress: {},
  viewMode: 'aprender',
  theme: 'dark',
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  
  // Métodos helpers
  isTopicCompleted(topic) {
    return Boolean(this.studyProgress[topic]);
  },
  
  getCurrentTopicData() {
    return this.currentTopic && window.DA?.[this.currentTopic];
  }
};

// ─── TEMA ─────────────────────────────────────────────────
const ThemeManager = {
  init() {
    this.apply(localStorage.getItem('theme') || 'dark');
  },
  apply(theme) {
    AppState.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  },
  toggle() {
    this.apply(AppState.theme === 'dark' ? 'light' : 'dark');
  }
};

// ─── PROGRESSO OTIMIZADO ────────────────────────────────────────────
const Progress = {
  key: 'mv_progress',

  load() {
    try {
      const stored = localStorage.getItem(this.key);
      if (stored) {
        AppState.studyProgress = JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Erro ao carregar progresso:', error);
      AppState.studyProgress = {};
    }
  },

  save() {
    try {
      localStorage.setItem(this.key, JSON.stringify(AppState.studyProgress));
    } catch (error) {
      console.warn('Erro ao salvar progresso:', error);
    }
  },

  mark(topic, completed = true) {
    if (completed) {
      AppState.studyProgress[topic] = true;
    } else {
      delete AppState.studyProgress[topic];
    }
    this.save();
    this.updateUI();
    if (typeof renderSidebar === 'function') {
      renderSidebar();
    }
  },

  toggle(topic) {
    this.mark(topic, !AppState.studyProgress[topic]);
  },

  getStats() {
    if (!window.DA) return { total: 0, completed: 0, percentage: 0 };
    
    const topics = Object.keys(window.DA);
    const completed = topics.filter(topic => AppState.studyProgress[topic]);
    const percentage = topics.length ? Math.round((completed.length / topics.length) * 100) : 0;
    
    return {
      total: topics.length,
      completed: completed.length,
      pending: topics.length - completed.length,
      percentage
    };
  },

  updateUI() {
    const stats = this.getStats();
    const elements = {
      percentage: document.getElementById('prog-pct'),
      fill: document.getElementById('sidebar-prog-fill'),
      chip: document.getElementById('top-prog')?.querySelector('.chip-text')
    };

    if (elements.percentage) {
      elements.percentage.textContent = `${stats.percentage}%`;
    }
    if (elements.fill) {
      elements.fill.style.width = `${stats.percentage}%`;
    }
    if (elements.chip) {
      elements.chip.textContent = `${stats.completed} / ${stats.total} tópicos`;
    }
  }
};

// ─── CONTROLE DE TÓPICOS OTIMIZADO ────────────────────────────────────
function selectTopic(topic) {
  if (!window.DA?.[topic]) {
    console.warn(`Tópico "${topic}" não encontrado`);
    return;
  }

  AppState.currentTopic = topic;
  updateTopicSelection(topic);
  renderCurrentView();
  closeMobileSidebarIfNeeded();
  updateFloatingButtons(); // Atualizar botões flutuantes
}

function updateTopicSelection(topic) {
  document.querySelectorAll('.topic-item').forEach(element => {
    const isActive = element.dataset.topic === topic;
    element.classList.toggle('selected', isActive);
    element.setAttribute('aria-selected', isActive);
  });
}

function closeMobileSidebarIfNeeded() {
  if (AppState.isMobile && typeof closeMobileSidebar === 'function') {
    closeMobileSidebar();
  }
}

// ─── CONTROLE DE PROGRESSO MANUAL OTIMIZADO ────────────────────────────
function toggleProgress() {
  if (!AppState.currentTopic) {
    console.warn('Nenhum tópico selecionado para marcar progresso');
    return;
  }
  
  Progress.toggle(AppState.currentTopic);
  renderCurrentView(); // Atualiza o botão
  updateFloatingButtons(); // Atualizar botões flutuantes
}

// ─── RENDERIZAÇÃO ─────────────────────────────────────────
function renderCurrentView() {
  const area = document.getElementById('view-area');
  if (!area) return;

  if (AppState.viewMode === 'progresso') {
    renderProgresso(area);
    return;
  }

  if (!AppState.currentTopic || !window.DA?.[AppState.currentTopic]) {
    area.innerHTML = `
      <div class="empty">
        <span class="material-icons e-icon">account_balance</span>
        <p class="empty-text">Selecione um tópico para começar</p>
        <p class="empty-hint">
          <span class="material-icons empty-hint-icon">arrow_back</span>
          Use a barra lateral para navegar
        </p>
      </div>`;
    return;
  }

  const data = window.DA[AppState.currentTopic];
  const isCompleted = AppState.studyProgress[AppState.currentTopic];
  
  area.innerHTML = '';
  const section = document.createElement('div');
  section.className = 'notion-section slide-up';
  
  // Adicionar botão de progresso
  const progressBtn = document.createElement('button');
  progressBtn.className = `progress-toggle-btn ${isCompleted ? 'completed' : ''}`;
  progressBtn.innerHTML = isCompleted ? '✅' : '⏳ Marcar como concluído';
  progressBtn.onclick = () => toggleProgress();
  
  section.innerHTML = data.aprendizado || '<p>Conteúdo não disponível.</p>';
  section.insertBefore(progressBtn, section.firstChild);
  
  area.appendChild(section);
  area.scrollTop = 0;
}

function renderProgresso(area) {
  if (!window.DA) return;
  
  const stats = Progress.getStats();

  area.innerHTML = `
    <div class="progress-view fade-in">
      <div class="progress-header">
        <h2>Seu Progresso</h2>
        <div class="progress-stats">
          <div class="stat-item">
            <span class="stat-number">${stats.completed}</span>
            <span class="stat-label">Concluídos</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">${stats.pending}</span>
            <span class="stat-label">Pendentes</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">${stats.percentage}%</span>
            <span class="stat-label">Progresso</span>
          </div>
        </div>
      </div>
      <div class="progress-bar-large">
        <div class="progress-fill" style="width:${stats.percentage}%"></div>
      </div>
      <div class="topics-grid">
        ${Object.entries(window.DA).map(([topic, data]) => {
          const isCompleted = AppState.studyProgress[topic];
          return `
            <div class="topic-card ${isCompleted ? 'completed' : ''}" onclick="selectTopic('${topic.replace(/'/g, "\\'")}')">
              <div class="topic-card-icon" style="color:${data?.color || 'var(--c-blue)'}">
                ${data?.icon || '📚'}
              </div>
              <div class="topic-card-info">
                <h3>${topic}</h3>
                <div class="topic-card-status">${isCompleted ? '✅' : '⏳ Pendente'}</div>
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>`;
}

// ─── SIDEBAR ──────────────────────────────────────────────
function renderSidebar(filter = '') {
  const list = document.getElementById('sidebar-list');
  if (!list || !window.DA) return;

  const filterLower = filter.toLowerCase();
  const fragment = document.createDocumentFragment();
  let found = false;

  for (const [topic, data] of Object.entries(window.DA)) {
    if (filter && !topic.toLowerCase().includes(filterLower)) continue;
    found = true;
    
    const isCompleted = AppState.studyProgress[topic];
    const listItem = createSidebarItem(topic, data, isCompleted);
    fragment.appendChild(listItem);
  }

  list.innerHTML = '';
  if (!found && filter) {
    list.innerHTML = `<div class="sidebar-no-results"><p>Nenhum resultado para "${filter}"</p></div>`;
  } else {
    list.appendChild(fragment);
  }

  Progress.updateUI();
  updateFloatingButtons(); // Atualizar botões flutuantes
}

function createSidebarItem(topic, data, isCompleted) {
  const listItem = document.createElement('li');
  listItem.className = `topic-item${AppState.currentTopic === topic ? ' selected' : ''}`;
  listItem.dataset.topic = topic;
  listItem.setAttribute('role', 'button');
  listItem.setAttribute('tabindex', '0');
  listItem.setAttribute('aria-selected', AppState.currentTopic === topic);
  
  listItem.innerHTML = `
    <div class="topic-content">
      <div class="topic-icon" style="color:${data?.color || 'var(--c-blue)' }">
        ${data?.icon || '📚'}
      </div>
      <div class="topic-info">
        <div class="topic-name">${topic}</div>
        <div class="topic-status">
          ${isCompleted
            ? '<span class="topic-completed">✅ Concluído</span>'
            : '<span class="topic-pending">⏳ Estudar</span>'}
        </div>
      </div>
    </div>`;
  
  listItem.addEventListener('click', () => selectTopic(topic));
  listItem.addEventListener('keydown', e => { 
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      selectTopic(topic); 
    } 
  });
  
  return listItem;
}

// ─── ATALHOS DE TECLADO ───────────────────────────────────
function initShortcuts() {
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    switch (e.key) {
      case 't': ThemeManager.toggle(); break;
      case 'f': e.preventDefault(); document.getElementById('search-input')?.focus(); break;
      case 'Escape': {
        const si = document.getElementById('search-input');
        if (si) { si.value = ''; renderSidebar(); }
        break;
      }
      case '1': switchTab('aprender'); break;
      case '2': switchTab('progresso'); break;
    }
  });
}

function switchTab(mode) {
  const tab = document.getElementById(`tab-${mode}`);
  if (tab) { 
    tab.checked = true; 
    AppState.viewMode = mode; 
    renderCurrentView();
    updateFloatingButtons(); // Atualizar botões flutuantes
  }
}

// ─── INICIALIZAÇÃO OTIMIZADA ────────────────────────────────────────
function initializeApp() {
  // Configurações iniciais
  if (AppState.isMobile) {
    document.documentElement.classList.add('is-mobile');
  }

  // Inicialização dos módulos
  ThemeManager.init();
  Progress.load();
  initShortcuts();
  initEventListeners();

  // Renderização inicial
  if (window.DA) {
    renderSidebar();
    Progress.updateUI();
    renderCurrentView();
    updateFloatingButtons(); // Inicializar botões flutuantes
  } else {
    console.error('❌ window.DA não encontrado — verifique data_direito_humano.js');
  }
}

function initEventListeners() {
  // Event listeners das tabs
  document.querySelectorAll('.tab-input').forEach(input => {
    input.addEventListener('change', e => {
      AppState.viewMode = e.target.id === 'tab-aprender' ? 'aprender' : 'progresso';
      renderCurrentView();
    });
  });

  // Event listener da busca
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => renderSidebar(e.target.value));
  }

  // Event listener do menu mobile
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileSidebar);
  }
  
  // Event listener do botão lateral mobile
  const mobileSidebarBtn = document.getElementById('mobile-sidebar-btn');
  if (mobileSidebarBtn) {
    mobileSidebarBtn.addEventListener('click', () => {
      openMobileSidebar();
    });
  }

  // Event listener para fechar sidebar com ESC
  document.addEventListener('keydown', e => { 
    if (e.key === 'Escape') closeMobileSidebar(); 
  });
  
  // Atualizar botões flutuantes quando mudar tópico
  updateFloatingButtons();
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar?.classList.contains('open') ? closeMobileSidebar() : openMobileSidebar();
}

// Inicialização quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeApp);

// Salvar progresso antes de sair
window.addEventListener('beforeunload', () => Progress.save());

// ─── MOBILE SIDEBAR OTIMIZADO ───────────────────────────────────────
function openMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const toggle = document.getElementById('mobile-menu-toggle');
  if (!sidebar) return;
  
  sidebar.classList.add('open');
  overlay?.classList.add('active');
  document.body.classList.add('sidebar-open');
  toggle?.setAttribute('aria-expanded', 'true');
  
  const icon = toggle?.querySelector('.material-icons');
  if (icon) icon.textContent = 'close';
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const toggle = document.getElementById('mobile-menu-toggle');
  if (!sidebar) return;
  
  sidebar.classList.remove('open');
  overlay?.classList.remove('active');
  document.body.classList.remove('sidebar-open');
  toggle?.setAttribute('aria-expanded', 'false');
  
  const icon = toggle?.querySelector('.material-icons');
  if (icon) icon.textContent = 'menu';
}

// ─── CONTROLE DE BOTÕES FLUTUANTES ────────────────────────────────────
function updateFloatingButtons() {
  const fabToggle = document.getElementById('fab-toggle');
  const fabProgress = document.getElementById('fab-progress');
  const topicCount = document.getElementById('topic-count');
  
  // Atualizar contador de tópicos
  if (topicCount && window.DA) {
    const totalTopics = Object.keys(window.DA).length;
    topicCount.textContent = totalTopics;
  }
  
  // Mostrar/ocultar botão de marcar progresso
  if (fabToggle) {
    const hasTopic = AppState.currentTopic && window.DA?.[AppState.currentTopic];
    fabToggle.style.display = hasTopic ? 'flex' : 'none';
    
    // Atualizar ícone e cor baseado no status
    const icon = fabToggle.querySelector('.material-icons');
    if (icon && hasTopic) {
      const isCompleted = AppState.studyProgress[AppState.currentTopic];
      icon.textContent = isCompleted ? 'check_circle' : 'radio_button_unchecked';
      
      // Definir cor usando variáveis CSS em vez de inline
      if (isCompleted) {
        fabToggle.style.background = 'var(--c-green)';
        fabToggle.style.color = 'white';
      } else {
        fabToggle.style.background = 'var(--c-bg-2)';
        fabToggle.style.color = 'var(--c-txt)';
      }
    }
  }
  
  // Ajustar posição baseada no modo
  if (fabProgress) {
    const isInProgressMode = AppState.viewMode === 'progresso';
    fabProgress.style.opacity = isInProgressMode ? '0.5' : '1';
    fabProgress.style.pointerEvents = isInProgressMode ? 'none' : 'auto';
  }
}

// ─── SCROLL OTIMIZADO ───────────────────────────────────────────────
function scrollToBottom() {
  const va = document.querySelector('.view-area');
  if (va) va.scrollTo({ top: va.scrollHeight, behavior: 'smooth' });
}

(function initScrollBtn() {
  const viewArea = document.querySelector('.view-area');
  const btn = document.getElementById('scroll-to-bottom');
  if (!viewArea || !btn) return;
  viewArea.addEventListener('scroll', () => {
    const scrollable = viewArea.scrollHeight > viewArea.clientHeight + 50;
    const nearBottom = viewArea.scrollTop + viewArea.clientHeight >= viewArea.scrollHeight - 100;
    btn.style.display = (scrollable && !nearBottom) ? 'flex' : 'none';
  }, { passive: true });
})();

// ─── EXPORTS OTIMIZADOS ──────────────────────────────────────────────
// API pública da aplicação
window.App = {
  // Estado
  state: AppState,
  
  // Navegação
  selectTopic,
  
  // Progresso
  toggleProgress,
  markComplete: (topic, completed) => Progress.mark(topic, completed),
  
  // Renderização
  renderSidebar,
  renderCurrentView,
  
  // Tema
  theme: ThemeManager,
  
  // Utilitários
  closeMobileSidebar,
  scrollToBottom,
  
  // Módulos internos (para debugging)
  Progress,
  ThemeManager
};

// Legacy exports para compatibilidade
window.AppState = AppState;
window.selectTopic = selectTopic;
window.renderSidebar = renderSidebar;
window.renderCurrentView = renderCurrentView;
window.markComplete = (t, d) => Progress.mark(t, d);
window.toggleProgress = toggleProgress;
window.ThemeManager = ThemeManager;
window.closeMobileSidebar = closeMobileSidebar;
window.scrollToBottom = scrollToBottom;
window.updateFloatingButtons = updateFloatingButtons;
