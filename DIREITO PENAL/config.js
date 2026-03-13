// config.js
// Configuração da matéria - altere apenas aqui para mudar todo o sistema

const CONFIG = {
  // ─── DADOS DA MATÉRIA ───────────────────────────────
  MATERIA: "Direito Penal",                    // Nome da matéria
  MATERIA_ID: "direito_penal",              // ID para arquivos
  MATERIA_ICON: "balance",                   // Ícone Material Icons
  MATERIA_COLOR: "#4a85f0",               // Cor principal
  
  // ─── ARQUIVOS ─────────────────────────────────────────────
  DATA_FILE: "data/data_direito_penal.js",     // Arquivo de dados
  DATA_VAR: "DATA_DIREITO_PENAL",             // Variável global
  
  // ─── TEXTOS ───────────────────────────────────────────────
  DESCRIPTION: "Plataforma de estudo de {{MATERIA}} com conteúdo otimizado, temas claros/escuros e atalhos de teclado",
  TITLE: "MV Estudos — {{MATERIA}}",
  SUBJECT_NAME: "{{MATERIA}}",
  SIDEBAR_TITLE: "{{MATERIA}}"
};

// Exportar para uso no HTML
window.CONFIG = CONFIG;
