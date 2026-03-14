// scriptLoader.js
// Sistema universal para carregar dados de qualquer matéria

const ScriptLoader = {

  async load(src) {

    // Limpar dados atuais
    window.DA = null;

    // Detectar matéria pelo nome do arquivo
    const subjectMatch = src.match(/data_(.+)\.js/);
    if (subjectMatch) {
      const subjectName = subjectMatch[1];
      const dataVarName = `DATA_${subjectName.toUpperCase().replace(/-/g, '_')}`;
      
      if (window[dataVarName]) {
        window.DA = window[dataVarName];
        console.log(`✅ ${dataVarName} carregado com sucesso`);
      } else {
        console.warn(`❌ ${dataVarName} não encontrado`);
      }
    }

    // Verificação de segurança
    if (!window.DA) {
      throw new Error('Dados não encontrados');
    }

  },

  remove() {
    // Nenhuma ação necessária
  }

};

// Inicialização automática universal
document.addEventListener('DOMContentLoaded', () => {
  // Procurar por qualquer variável DATA_* disponível
  const dataVars = Object.keys(window).filter(key => key.startsWith('DATA_'));
  
  if (dataVars.length > 0) {
    const dataVar = dataVars[0];
    window.DA = window[dataVar];
    console.log(`✅ ${dataVar} carregado automaticamente:`, Object.keys(window.DA).length, 'tópicos');
  } else {
    console.warn('❌ Nenhuma variável DATA_* encontrada');
  }
});