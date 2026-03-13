// components/sidebar.js
// Sistema universal - Performance e funcionalidade

console.log('🚀 components_sidebar.js começando a carregar');

// Cache de elementos e estado
const SidebarState = {
  elements: {
    list: null,
    progressPct: null,
    progressFill: null,
    topProgress: null,
    searchInput: null
  },
  currentFilter: '',
  isInitialized: false
};

// Inicialização otimizada
function initSidebar() {
  if (SidebarState.isInitialized) return;
  
  // Cache dos elementos
  SidebarState.elements.list = document.getElementById('sidebar-list');
  SidebarState.elements.progressPct = document.getElementById('prog-pct');
  SidebarState.elements.progressFill = document.getElementById('sidebar-prog-fill');
  SidebarState.elements.topProgress = document.getElementById('top-prog');
  SidebarState.elements.searchInput = document.getElementById('search-input');
  
  // Event delegation otimizado
  if (SidebarState.elements.list) {
    SidebarState.elements.list.addEventListener('click', handleTopicClick, { passive: true });
  }
  
  // Configurar busca
  if (SidebarState.elements.searchInput) {
    SidebarState.elements.searchInput.addEventListener('input', handleSearch, { passive: true });
  }
  
  SidebarState.isInitialized = true;
}

// Handler de cliques otimizado
function handleTopicClick(e) {
  const topicItem = e.target.closest('.topic-item');
  if (topicItem) {
    const topic = topicItem.dataset.topic;
    if (topic && typeof selectTopic === 'function') {
      selectTopic(topic);
    }
  }
}

// Handler para busca
function handleSearch(e) {
  SidebarState.currentFilter = e.target.value.toLowerCase();
  renderSidebar(SidebarState.currentFilter);
}

// Renderização otimizada
function renderSidebar(filter = '') {
  initSidebar();
  
  const { list } = SidebarState.elements;
  if (!list) return;
  
  // Debug: verificar se dados existem
  console.log('🔍 Debug - window.DA:', window.DA ? 'existe' : 'não existe');
  
  if (!window.DA) {
    list.innerHTML = `
      <div class="sidebar-loading" role="status" aria-live="polite">
        <span class="loading-dot"></span>
        <span class="loading-dot"></span>
        <span class="loading-dot"></span>
      </div>
    `;
    return;
  }
  
  const topics = Object.keys(window.DA);
  console.log('🔍 Debug - Tópicos encontrados:', topics.length, topics);
  const filterLower = filter.toLowerCase();
  
  // Usar DocumentFragment para performance
  const fragment = document.createDocumentFragment();
  let hasResults = false;
  
  for (const topic of topics) {
    if (filter && !topic.toLowerCase().includes(filterLower)) continue;
    
    hasResults = true;
    fragment.appendChild(createTopicElement(topic));
  }
  
  // Limpar e adicionar conteúdo
  list.innerHTML = '';
  
  if (!hasResults && filter) {
    list.innerHTML = `
      <div class="sidebar-no-results" role="status" aria-live="polite">
        <span class="material-icons">search_off</span>
        <p>Nenhum tópico encontrado</p>
        <p>para "${filter}"</p>
      </div>
    `;
  } else {
    list.appendChild(fragment);
  }
  
  // Atualizar progresso
  updateSidebarProgress();
}

// Criar elemento de tópico otimizado
function createTopicElement(topic) {
  const isCompleted = AppState.studyProgress[topic];
  const topicData = window.DA[topic];
  
  const li = document.createElement('li');
  li.className = 'topic-item';
  li.dataset.topic = topic;
  li.setAttribute('role', 'button');
  li.setAttribute('tabindex', '0');
  li.setAttribute('aria-label', `Tópico: ${topic}${isCompleted ? ' - Concluído' : ''}`);
  
  // Template otimizado
  li.innerHTML = `
    <div class="topic-icon" style="color: ${topicData?.color || 'var(--c-blue)'}">
      ${topicData?.icon || '📚'}
    </div>
    <div class="topic-content">
      <div class="topic-title">${topic}</div>
      <div class="topic-progress">
        ${isCompleted ? 
          '<span class="topic-status completed">✅ Concluído</span>' : 
          '<span class="topic-status pending">⏳ Estudar</span>'
        }
      </div>
    </div>
  `;
  
  // Adicionar evento de teclado
  li.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (typeof selectTopic === 'function') {
        selectTopic(topic);
      }
    }
  });
  
  return li;
}

// Atualizar progresso otimizado
function updateSidebarProgress() {
  if (!window.DA) return;
  
  const topics = Object.keys(window.DA);
  const completed = topics.filter(t => AppState.studyProgress[t]);
  const percentage = topics.length > 0 ? Math.round((completed.length / topics.length) * 100) : 0;
  
  // Atualizar elementos de progresso
  const elements = [
    { el: SidebarState.elements.progressPct, text: `${percentage}%` },
    { el: SidebarState.elements.topProgress?.querySelector('.chip-text'), text: `${completed.length} / ${topics.length} tópicos` }
  ];
  
  elements.forEach(({ el, text }) => {
    if (el) el.textContent = text;
  });
  
  if (SidebarState.elements.progressFill) {
    SidebarState.elements.progressFill.style.width = `${percentage}%`;
  }
}

// Função de seleção de tópico
function selectTopic(topic) {
  if (!window.DA || !window.DA[topic]) return;
  
  // Atualizar estado
  AppState.currentTopic = topic;
  
  // Marcar como concluído após 30 segundos
  setTimeout(() => {
    if (AppState.currentTopic === topic) {
      if (typeof markComplete === 'function') {
        markComplete(topic, true);
      }
      if (typeof renderSidebar === 'function') {
        renderSidebar();
      }
    }
  }, 30000);
  
  // Renderizar view
  if (typeof renderCurrentView === 'function') {
    renderCurrentView();
  }
  
  // Atualizar seleção visual
  updateTopicSelection(topic);
}

// Atualizar seleção visual
function updateTopicSelection(selectedTopic) {
  const items = document.querySelectorAll('.topic-item');
  items.forEach(item => {
    const topic = item.dataset.topic;
    const isSelected = topic === selectedTopic;
    
    item.classList.toggle('selected', isSelected);
    item.setAttribute('aria-selected', isSelected);
  });
}

// Export universal
window.renderSidebar = renderSidebar;
window.updateSidebarProgress = updateSidebarProgress;
window.selectTopic = selectTopic;

// Inicializar quando DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSidebar);
} else {
  initSidebar();
}