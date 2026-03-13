// subjectManager.js
// Sistema universal de gerenciamento de matérias

const SubjectManager = {
  
  // Configuração automática baseada no HTML
  getSubjects() {
    const buttons = document.querySelectorAll('.subject-btn');
    const subjects = {};
    
    buttons.forEach(btn => {
      const subjectId = btn.getAttribute('data-subject');
      const subjectName = btn.querySelector('.subject-name')?.textContent || subjectId;
      
      if (subjectId) {
        subjects[subjectId] = {
          id: subjectId.replace(/\s+/g, '_').toLowerCase(),
          name: subjectName,
          dataFile: `data_${subjectId.replace(/\s+/g, '_').toLowerCase()}.js`,
          storageKey: `mv_estudos_${subjectId.replace(/\s+/g, '_').toLowerCase()}_progress`
        };
      }
    });
    
    return subjects;
  },
  
  getCurrentSubject() {
    const activeBtn = document.querySelector('.subject-btn.active');
    return activeBtn ? activeBtn.getAttribute('data-subject') : null;
  },
  
  async switchSubject(subjectId) {
    try {
      // Remover classe active de todos
      document.querySelectorAll('.subject-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      
      // Adicionar classe active ao selecionado
      const selectedBtn = document.querySelector(`[data-subject="${subjectId}"]`);
      if (selectedBtn) {
        selectedBtn.classList.add('active');
        selectedBtn.setAttribute('aria-pressed', 'true');
      }
      
      // Atualizar título da sidebar
      const subjects = this.getSubjects();
      const subject = subjects[subjectId];
      if (subject) {
        const titleElement = document.getElementById('sidebar-subject-title');
        if (titleElement) {
          titleElement.textContent = subject.name;
        }
      }
      
      // Salvar última matéria
      localStorage.setItem('lastSubject', subjectId);
      
      // Limpar tópico atual
      if (typeof AppState !== 'undefined') {
        AppState.currentTopic = null;
      }
      
      // Atualizar interface
      if (typeof renderSidebar === 'function') renderSidebar();
      if (typeof updateProgress === 'function') updateProgress();
      if (typeof renderCurrentView === 'function') renderCurrentView();
      
      // Limpar busca
      const searchInput = document.getElementById('search-input');
      if (searchInput) searchInput.value = '';
      
    } catch (error) {
      console.error('Erro ao trocar matéria:', error);
      
      const viewArea = document.getElementById('view-area');
      if (viewArea) {
        viewArea.innerHTML = `
          <div class="empty">
            <span class="material-icons e-icon" style="color:#ef4444;">error</span>
            <p class="empty-text">Erro ao carregar</p>
            <p class="empty-hint">${error.message}</p>
          </div>
        `;
      }
    }
  },
  
  init() {
    const subjects = this.getSubjects();
    const lastSubject = localStorage.getItem('lastSubject');
    const firstSubject = Object.keys(subjects)[0];
    const subjectId = lastSubject && subjects[lastSubject] ? lastSubject : firstSubject;
    
    if (subjectId) {
      this.switchSubject(subjectId);
    }
    
    return subjects;
  },
  
  saveProgress(progress) {
    const currentSubject = this.getCurrentSubject();
    if (currentSubject) {
      const subjects = this.getSubjects();
      const storageKey = subjects[currentSubject]?.storageKey;
      if (storageKey) {
        localStorage.setItem(storageKey, JSON.stringify(progress));
      }
    }
  },
  
  loadProgress(subjectId = null) {
    const id = subjectId || this.getCurrentSubject();
    if (id) {
      const subjects = this.getSubjects();
      const storageKey = subjects[id]?.storageKey;
      if (storageKey) {
        try {
          const saved = localStorage.getItem(storageKey);
          return saved ? JSON.parse(saved) : {};
        } catch (e) {
          console.warn('Erro ao carregar progresso:', e);
          return {};
        }
      }
    }
    return {};
  }
};