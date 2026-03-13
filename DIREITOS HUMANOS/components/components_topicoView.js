// components/topicoView.js
// Sistema universal - Renderização com AppState

console.log('🚀 components_topicoView.js começando a carregar');

// Cache de elemento
let viewArea = null;

// Inicialização
function initViewArea() {
  if (!viewArea) {
    viewArea = document.getElementById('view-area');
  }
  return viewArea;
}

// ─── APRENDER ──────────────────────────────────────────────
function renderAprender() {
  console.log('🔍 renderAprender chamado');
  console.log('🔍 AppState.currentTopic:', AppState.currentTopic);
  console.log('🔍 window.DA:', window.DA ? 'existe' : 'não existe');
  
  const area = initViewArea();
  if (!area || !AppState.currentTopic || !window.DA) return;
  
  const topicData = window.DA[AppState.currentTopic];
  console.log('🔍 topicData:', topicData ? 'existe' : 'não existe');
  if (!topicData) return;
  
  console.log('🔍 topicData.aprendizado:', topicData.aprendizado ? 'existe' : 'não existe');
  
  // Limpar área
  area.innerHTML = '';
  
  // Renderizar direto — o conteúdo já possui seu próprio notion-header
  const contentSection = document.createElement('div');
  contentSection.className = 'notion-section slide-up';
  contentSection.innerHTML = topicData.aprendizado || '<p>Conteúdo não disponível.</p>';
  
  console.log('🔍 contentSection.innerHTML:', contentSection.innerHTML.substring(0, 100) + '...');
  
  area.appendChild(contentSection);
  
  // Scroll para topo
  area.scrollTop = 0;
  
  // Marcar como visualizado após 30 segundos
  setTimeout(() => {
    if (AppState.currentTopic && typeof markComplete === 'function') {
      markComplete(AppState.currentTopic, true);
    }
  }, 30000);
}

// ─── PROGRESSO ──────────────────────────────────────────────
function renderProgresso() {
  const area = initViewArea();
  if (!area || !window.DA) return;
  
  const topics = Object.keys(window.DA);
  const completed = topics.filter(t => AppState.studyProgress[t]);
  const percentage = topics.length > 0 ? Math.round((completed.length / topics.length) * 100) : 0;
  
  area.innerHTML = `
    <div class="progress-view fade-in">
      <div class="progress-header">
        <h2>Seu Progresso</h2>
        <div class="progress-stats">
          <div class="stat-item">
            <span class="stat-number">${completed.length}</span>
            <span class="stat-label">Concluídos</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">${percentage}%</span>
            <span class="stat-label">Concluído</span>
          </div>
        </div>
      </div>
      
      <div class="progress-bar-large">
        <div class="progress-fill" style="width: ${percentage}%"></div>
      </div>
      
      <div class="topics-grid">
        ${topics.map(topic => {
          const isCompleted = AppState.studyProgress[topic];
          const topicData = window.DA[topic];
          return `
            <div class="topic-card ${isCompleted ? 'completed' : ''}" onclick="selectTopic('${topic}')">
              <div class="topic-card-icon" style="color: ${topicData?.color || 'var(--c-blue)'}">
                ${topicData?.icon || '📚'}
              </div>
              <div class="topic-card-info">
                <h3>${topic}</h3>
                <div class="topic-card-status">
                  ${isCompleted ? '✅ Concluído' : '⏳ Pendente'}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// Export universal
window.renderAprender = renderAprender;
window.renderProgresso = renderProgresso;

// Inicialização automática
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initViewArea);
} else {
  initViewArea();
}