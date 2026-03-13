// data/data_informatica.js
// Conteúdo de Informática — formatado com classes lex-*

window.DA = {


  // ═══════════════════════════════════════════════════
  "O que é Informática": {
    icon: "💻",
    color: "#4a85f0",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">💻</div>
    <h1 class="notion-title">O que é Informática</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Fundamentos</span>
      <span class="meta-tag tag-g">Conceitos Básicos</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Definição</span>
    <div class="lex-item">Informática é o estudo do <strong>tratamento da informação</strong> usando computadores.</div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">🖥️ Hardware</span>
      <div class="lex-item">Parte <strong>física</strong> do computador.</div>
      <div class="lex-item">Componentes que podemos tocar.</div>
      <div class="lex-item">Ex: CPU, teclado, monitor, HD.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">💾 Software</span>
      <div class="lex-item">Parte <strong>lógica</strong> — programas.</div>
      <div class="lex-item">Controla o hardware.</div>
      <div class="lex-item">Ex: Windows, Word, Chrome.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">👤 Usuário (Peopleware)</span>
      <div class="lex-item">Quem <strong>usa</strong> o computador.</div>
      <div class="lex-item">Terceiro elemento essencial do sistema.</div>
    </div>

  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Hardware = físico (toca) &nbsp;|&nbsp; Software = programa (não toca) &nbsp;|&nbsp; Peopleware = usuário
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Tipos de Computadores": {
    icon: "🖥️",
    color: "#38bdf8",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🖥️</div>
    <h1 class="notion-title">Tipos de Computadores</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Hardware</span>
      <span class="meta-tag tag-g">Classificação</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">🖥️ Desktop</span>
      <div class="lex-item">Computador de <strong>mesa</strong>.</div>
      <div class="lex-item">Uso <strong>fixo</strong>.</div>
      <div class="lex-item">Mais potente e expansível.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">💻 Notebook / Ultrabook</span>
      <div class="lex-item"><strong>Portátil</strong> — mobilidade.</div>
      <div class="lex-item">Tudo integrado em um só aparelho.</div>
      <div class="lex-item">Ultrabook = versão mais fina e leve.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">📱 Tablet</span>
      <div class="lex-item">Tela <strong>sensível ao toque</strong>.</div>
      <div class="lex-item">Uso leve e muito portátil.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">🖧 Servidor</span>
      <div class="lex-item">Muito potente.</div>
      <div class="lex-item">Fornece <strong>serviços</strong> para outros computadores.</div>
      <div class="lex-item">Funciona 24h/7dias.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">🧠 Mainframe</span>
      <div class="lex-item">Extremamente poderoso.</div>
      <div class="lex-item">Usado por <strong>bancos e grandes empresas</strong>.</div>
      <div class="lex-item">Processa enormes volumes de dados.</div>
    </div>

  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Funcionamento do Computador": {
    icon: "⚙️",
    color: "#a78bfa",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⚙️</div>
    <h1 class="notion-title">Funcionamento do Computador</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Entrada · Processamento · Saída</span>
      <span class="meta-tag tag-gold">Conceito Essencial</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Ciclo Básico de Processamento</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">1</span> <strong>Entrada (Input)</strong> — dados inseridos pelo usuário</div>
      <div class="lex-list-item"><span class="lex-num">2</span> <strong>Processamento</strong> — CPU processa os dados</div>
      <div class="lex-list-item"><span class="lex-num">3</span> <strong>Saída (Output)</strong> — resultado exibido ao usuário</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Exemplo:</strong> Teclado (entrada) → CPU (processamento) → Monitor (saída)
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Linguagem do Computador — Binário</span>
    <div class="lex-item">O computador só entende <strong>0 e 1</strong>.</div>
    <div class="lex-item">Chamada de: <strong>linguagem binária</strong> ou linguagem de máquina.</div>
    <div class="lex-item">Exemplo: A = 01000001 &nbsp;|&nbsp; B = 01000010</div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label green">bit</span>
      <div class="lex-item">Menor unidade de dados.</div>
      <div class="lex-item">Valor: <strong>0 ou 1</strong>.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label green">byte</span>
      <div class="lex-item">Conjunto de <strong>8 bits</strong>.</div>
      <div class="lex-item">Unidade básica de armazenamento.</div>
    </div>

  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Periféricos": {
    icon: "🖱️",
    color: "#22c55e",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🖱️</div>
    <h1 class="notion-title">Periféricos</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Entrada · Saída · Misto</span>
      <span class="meta-tag tag-g">Dispositivos Externos</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">🔵 Entrada</span>
      <div class="lex-item">Enviam dados <strong>para</strong> o computador.</div>
      <div class="lex-item">Teclado</div>
      <div class="lex-item">Mouse</div>
      <div class="lex-item">Scanner</div>
      <div class="lex-item">Webcam</div>
      <div class="lex-item">Microfone</div>
      <div class="lex-item">Leitor de código de barras</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">🟢 Saída</span>
      <div class="lex-item">Mostram dados <strong>para</strong> o usuário.</div>
      <div class="lex-item">Monitor</div>
      <div class="lex-item">Impressora</div>
      <div class="lex-item">Fone de ouvido</div>
      <div class="lex-item">Caixa de som</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">🟡 Entrada e Saída (Misto)</span>
      <div class="lex-item">Pendrive</div>
      <div class="lex-item">HD externo / SSD externo</div>
      <div class="lex-item">Impressora multifuncional</div>
      <div class="lex-item">Modem</div>
      <div class="lex-item">Tela touchscreen</div>
    </div>

  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha!</strong> Impressora simples = <strong>saída</strong> &nbsp;|&nbsp; Impressora multifuncional = <strong>entrada e saída</strong>
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "CPU — Processador": {
    icon: "🧠",
    color: "#f59e0b",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🧠</div>
    <h1 class="notion-title">CPU — Processador</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-gold">Cérebro do Computador</span>
      <span class="meta-tag tag-b">ULA · UC · Registradores</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">O que é a CPU?</span>
    <div class="lex-item">CPU = <strong>cérebro</strong> do computador.</div>
    <div class="lex-item">Realiza: cálculos, comparações, decisões e execução de programas.</div>
    <div class="lex-item">Sem CPU → o computador <strong>não funciona</strong>.</div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">ULA — Unidade Lógica e Aritmética</span>
      <div class="lex-item">Faz <strong>contas e comparações</strong>.</div>
      <div class="lex-item">Operações: soma, divisão, maior que, menor que.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">UC — Unidade de Controle</span>
      <div class="lex-item"><strong>Controla</strong> o funcionamento da CPU.</div>
      <div class="lex-item">Manda sinais e organiza o processamento.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">Registradores</span>
      <div class="lex-item">Memórias <strong>muito rápidas</strong> dentro da CPU.</div>
      <div class="lex-item">Guardam dados temporários durante o processamento.</div>
    </div>

  </div>

  <div class="lex-section">
    <span class="lex-label blue">Clock do Processador</span>
    <div class="lex-item">Medido em <strong>MHz ou GHz</strong>.</div>
    <div class="lex-item">3 GHz = 3 bilhões de ciclos por segundo.</div>
    <div class="lex-item">Quanto maior o clock → mais rápido o processador.</div>
    <div class="lex-item"><strong>Overclock</strong> = aumentar a velocidade manualmente além do padrão.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Cache do Processador</span>
    <div class="lex-item">Memória muito rápida <strong>dentro</strong> do processador.</div>
    <div class="lex-item">Acelera o processamento armazenando dados frequentes.</div>
    <div class="lex-item"><strong>L1</strong> (mais rápida) → <strong>L2</strong> → <strong>L3</strong></div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Ordem de velocidade:</strong> Registrador &gt; Cache &gt; RAM &gt; HD/SSD
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Placa-mãe e Chipset": {
    icon: "🔌",
    color: "#14b8a6",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔌</div>
    <h1 class="notion-title">Placa-mãe e Chipset</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-teal">Motherboard</span>
      <span class="meta-tag tag-b">Ponte Norte · Ponte Sul</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Placa-mãe (Motherboard)</span>
    <div class="lex-item">É a <strong>placa principal</strong> do computador.</div>
    <div class="lex-item">Liga todos os componentes: CPU, RAM, HD/SSD, placa de vídeo, USB, rede.</div>
    <div class="lex-item">Sem placa-mãe → <strong>nada funciona</strong>.</div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">Chipset — Ponte Norte</span>
      <div class="lex-item">Alta velocidade.</div>
      <div class="lex-item">Liga: <strong>CPU, RAM e placa de vídeo</strong>.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">Chipset — Ponte Sul</span>
      <div class="lex-item">Baixa velocidade.</div>
      <div class="lex-item">Liga: <strong>USB, HD, teclado, mouse, rede</strong>.</div>
    </div>

  </div>

  <div class="callout">
    <span class="callout-icon">📌</span>
    Em PCs modernos, <strong>ponte norte e sul</strong> são integradas em um chipset único.
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Slots e Conectores da Placa-mãe</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>RAM</strong> — slots de memória</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>PCIe</strong> — placa de vídeo e expansão</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>SATA</strong> — HD e SSD</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>M.2</strong> — SSD NVMe (muito rápido)</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>USB</strong> — periféricos externos</div>
    </div>
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "BIOS, UEFI e Firmware": {
    icon: "⚡",
    color: "#6366f1",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⚡</div>
    <h1 class="notion-title">BIOS, UEFI e Firmware</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Inicialização do Sistema</span>
      <span class="meta-tag tag-gold">POST · Boot</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">BIOS</span>
      <div class="lex-item">Programa <strong>gravado na placa-mãe</strong>.</div>
      <div class="lex-item">Liga e inicializa o computador.</div>
      <div class="lex-item"><strong>POST</strong> = teste inicial de hardware ao ligar.</div>
      <div class="lex-item">Verifica: CPU, memória, teclado.</div>
      <div class="lex-item">Interface simples, mais antiga.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">UEFI</span>
      <div class="lex-item"><strong>Substitui</strong> a BIOS nos computadores modernos.</div>
      <div class="lex-item">Interface gráfica.</div>
      <div class="lex-item">Mais rápida que a BIOS.</div>
      <div class="lex-item">Suporte a discos maiores.</div>
      <div class="lex-item">Maior segurança no boot.</div>
    </div>

  </div>

  <div class="lex-section">
    <span class="lex-label blue">Firmware</span>
    <div class="lex-item">Software <strong>gravado permanentemente</strong> no hardware.</div>
    <div class="lex-item">Não se perde ao desligar o equipamento.</div>
    <div class="lex-item">Exemplos: BIOS, UEFI, firmware de roteador, impressora.</div>
    <div class="lex-item"><strong>Firmware = software do hardware</strong>.</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> BIOS = antigo &nbsp;|&nbsp; UEFI = moderno (substitui a BIOS) &nbsp;|&nbsp; Firmware = software permanente
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Memórias — RAM e ROM": {
    icon: "💾",
    color: "#10b981",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">💾</div>
    <h1 class="notion-title">Memórias — RAM e ROM</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-g">Volátil · Não Volátil</span>
      <span class="meta-tag tag-b">Conceito Essencial</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">RAM — Memória Principal</span>
      <div class="lex-item">Guarda programas e dados <strong>em uso</strong>.</div>
      <div class="lex-item"><strong>Volátil</strong> — apaga ao desligar.</div>
      <div class="lex-item">Rápida e temporária.</div>
      <div class="lex-item">Ex: ao abrir o Word, ele vai para a RAM.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">ROM — Memória Permanente</span>
      <div class="lex-item"><strong>Não volátil</strong> — não apaga ao desligar.</div>
      <div class="lex-item">Guarda: BIOS e Firmware.</div>
      <div class="lex-item">Tipos: PROM, EPROM, EEPROM.</div>
    </div>

  </div>

  <div class="lex-section">
    <span class="lex-label gold">Memória Volátil × Não Volátil</span>
    <div class="lex-cols">
      <div class="lex-section">
        <span class="lex-label rose">Volátil — perde ao desligar</span>
        <div class="lex-item">RAM</div>
        <div class="lex-item">Cache</div>
        <div class="lex-item">Registrador</div>
      </div>
      <div class="lex-section">
        <span class="lex-label green">Não Volátil — mantém dados</span>
        <div class="lex-item">HD / SSD</div>
        <div class="lex-item">ROM</div>
        <div class="lex-item">Pendrive</div>
        <div class="lex-item">Cartão de memória</div>
      </div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Ordem de velocidade:</strong> Registrador &gt; Cache &gt; RAM &gt; HD/SSD
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "HD, SSD e Armazenamento": {
    icon: "🗄️",
    color: "#f472b6",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🗄️</div>
    <h1 class="notion-title">HD, SSD e Armazenamento</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Armazenamento Permanente</span>
      <span class="meta-tag tag-gold">HD · SSD · NVMe</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">HD — Hard Disk</span>
      <div class="lex-item">Armazenamento <strong>magnético</strong>.</div>
      <div class="lex-item">Mais barato.</div>
      <div class="lex-item">Mais lento.</div>
      <div class="lex-item">Faz barulho.</div>
      <div class="lex-item">Mais frágil (disco físico girando).</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">SSD — Solid State Drive</span>
      <div class="lex-item">Armazenamento <strong>eletrônico</strong>.</div>
      <div class="lex-item">Muito mais rápido que o HD.</div>
      <div class="lex-item">Silencioso.</div>
      <div class="lex-item">Mais caro.</div>
      <div class="lex-item">Mais resistente (sem partes móveis).</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">SSD NVMe</span>
      <div class="lex-item">Usa interface <strong>PCIe</strong> via slot M.2.</div>
      <div class="lex-item">O mais rápido de todos.</div>
      <div class="lex-item">Ideal para PCs de alto desempenho.</div>
    </div>

  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Ordem de velocidade:</strong> HD &lt; SSD SATA &lt; SSD NVMe
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Unidades de Medida</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>bit</strong> = 0 ou 1</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>byte</strong> = 8 bits</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>KB</strong> = 1.024 bytes</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>MB</strong> = 1.024 KB</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>GB</strong> = 1.024 MB</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>TB</strong> = 1.024 GB</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Sequência maior: PB → EB → ZB → YB</div>
    </div>
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Software — Tipos e Exemplos": {
    icon: "📦",
    color: "#4a85f0",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">📦</div>
    <h1 class="notion-title">Software — Tipos e Exemplos</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Sistema Operacional</span>
      <span class="meta-tag tag-g">Aplicativos</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">🔹 Sistema Operacional</span>
      <div class="lex-item">Controla o computador e o hardware.</div>
      <div class="lex-item">Intermediário entre usuário e hardware.</div>
      <div class="lex-item">Exemplos: <strong>Windows, Linux, Android, iOS</strong>.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">🔹 Aplicativos / Softwares de Usuário</span>
      <div class="lex-item">Programas que o usuário executa diretamente.</div>
      <div class="lex-item">Rodam sobre o sistema operacional.</div>
      <div class="lex-item">Exemplos: <strong>Word, Excel, Chrome, WhatsApp</strong>.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">🔹 Utilitários</span>
      <div class="lex-item">Auxiliam na manutenção do sistema.</div>
      <div class="lex-item">Exemplos: antivírus, desfragmentador, gerenciador de arquivos.</div>
    </div>

  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Hardware = físico &nbsp;|&nbsp; Software = programa que roda no hardware
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Barramento</span>
    <div class="lex-item">Caminho por onde os dados trafegam internamente.</div>
    <div class="lex-item">Tipos: <strong>dados, endereço, controle</strong>.</div>
    <div class="lex-item">Barramento mais largo = mais rápido (32 bits, 64 bits).</div>
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Internet e Navegadores": {
    icon: "🌐",
    color: "#14b8a6",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🌐</div>
    <h1 class="notion-title">Internet e Navegadores</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-teal">HTTP · HTTPS · URL · WWW</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Navegador (Browser)</span>
    <div class="lex-item">Programa usado para <strong>acessar a internet</strong>.</div>
    <div class="lex-item">Funções: abrir sites, fazer downloads, salvar favoritos.</div>
    <div class="lex-item">Exemplos: <strong>Chrome, Edge, Firefox</strong>.</div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">Conceitos Fundamentais</span>
      <div class="lex-item"><strong>WWW</strong> = World Wide Web.</div>
      <div class="lex-item"><strong>URL</strong> = endereço do site. Ex: https://google.com.br</div>
      <div class="lex-item"><strong>HTML</strong> = linguagem de criação de páginas web.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label rose">HTTP × HTTPS</span>
      <div class="lex-item"><strong>HTTP</strong> = sem criptografia — <strong>inseguro</strong>.</div>
      <div class="lex-item"><strong>HTTPS</strong> = com criptografia — <strong>seguro</strong>.</div>
      <div class="lex-item">Prova ama cobrar isso!</div>
    </div>

  </div>

  <div class="lex-section">
    <span class="lex-label blue">Surface Web, Deep Web e Dark Web</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Surface Web</strong> — sites normais, indexados pelo Google</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Deep Web</strong> — conteúdo não indexado (ex: email, banco online)</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Dark Web</strong> — acessada com o navegador <strong>Tor</strong></div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Atenção!</strong> A Dark Web em si <strong>não é crime</strong>, mas pode hospedar conteúdos ilegais.
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Segurança da Informação — CIDAN": {
    icon: "🔐",
    color: "#ef4444",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔐</div>
    <h1 class="notion-title">Segurança da Informação — CIDAN</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Princípios Fundamentais</span>
      <span class="meta-tag tag-gold">Muito cobrado em prova!</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Pilares — CIDAN</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">C</span> <strong>Confidencialidade</strong> — acesso apenas a quem tem permissão (sigilo)</div>
      <div class="lex-list-item"><span class="lex-num">I</span> <strong>Integridade</strong> — dado não pode ser alterado sem autorização</div>
      <div class="lex-list-item"><span class="lex-num">D</span> <strong>Disponibilidade</strong> — sistema deve estar acessível quando necessário</div>
      <div class="lex-list-item"><span class="lex-num">A</span> <strong>Autenticidade</strong> — garantia de que o usuário é quem diz ser</div>
      <div class="lex-list-item"><span class="lex-num">N</span> <strong>Não repúdio</strong> — autor não pode negar que realizou determinada ação</div>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label rose">Principais Ameaças</span>
      <div class="lex-item">Vírus e malwares</div>
      <div class="lex-item">Ataques de hackers</div>
      <div class="lex-item">Falha humana (engenharia social)</div>
      <div class="lex-item">Desastres físicos</div>
    </div>

    <div class="lex-section">
      <span class="lex-label green">Proteções Essenciais</span>
      <div class="lex-item">Antivírus</div>
      <div class="lex-item">Firewall</div>
      <div class="lex-item">Backup regular</div>
      <div class="lex-item">Atualização do sistema</div>
      <div class="lex-item">2FA (autenticação em dois fatores)</div>
    </div>

  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> C = sigilo &nbsp;|&nbsp; I = não alterar &nbsp;|&nbsp; D = acesso &nbsp;|&nbsp; A = identidade &nbsp;|&nbsp; N = não negar
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
// ═══════════════════════════════════════════════════
"Malwares — Tipos de Pragas Virtuais": {
  icon: "🦠",
  color: "#f59e0b",
  aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🦠</div>
    <h1 class="notion-title">Malwares — Tipos de Pragas Virtuais</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-gold">Muito cobrado em provas</span>
      <span class="meta-tag tag-b">Segurança da Informação</span>
    </div>
  </div>


  <div class="lex-section">
    <span class="lex-label blue">O que é Malware?</span>

    <div class="lex-item">
    <strong>Malware</strong> significa <strong>Malicious Software</strong> (Software Malicioso).
    </div>

    <div class="lex-item">
    É qualquer programa criado com a intenção de <strong>invadir, danificar ou explorar sistemas</strong>.
    </div>

    <div class="lex-item">
    Pode infectar <strong>computadores, celulares, servidores e redes inteiras</strong>.
    </div>

    <div class="lex-item">
    Objetivos comuns:
    </div>

    <div class="lex-item">• Roubar senhas</div>
    <div class="lex-item">• Espionar usuários</div>
    <div class="lex-item">• Destruir arquivos</div>
    <div class="lex-item">• Controlar computadores remotamente</div>

  </div>


  <div class="lex-section">
    <span class="lex-label purple">Principais Tipos de Malware</span>
  </div>


  <div class="lex-cols">


    <div class="lex-section">
      <span class="lex-label rose">Virus (Vírus)</span>

      <div class="lex-item">
      Malware que se <strong>anexa a arquivos legítimos</strong>.
      </div>

      <div class="lex-item">
      Precisa que o usuário execute o arquivo para infectar o sistema.
      </div>

      <div class="lex-item">
      Pode apagar arquivos ou corromper programas.
      </div>

      <div class="lex-item">
      <strong>Exemplo real:</strong> Virus "ILOVEYOU" (2000) infectou milhões de computadores via e-mail.
      </div>
    </div>



    <div class="lex-section">
      <span class="lex-label rose">Worm (Verme)</span>

      <div class="lex-item">
      Malware que se espalha <strong>automaticamente pela rede</strong>.
      </div>

      <div class="lex-item">
      Não precisa de ação do usuário.
      </div>

      <div class="lex-item">
      Pode derrubar redes inteiras.
      </div>

      <div class="lex-item">
      <strong>Exemplo real:</strong> Worm "WannaCry" infectou mais de 200 mil computadores em 2017.
      </div>
    </div>



    <div class="lex-section">
      <span class="lex-label rose">Trojan (Cavalo de Troia)</span>

      <div class="lex-item">
      Malware disfarçado de programa legítimo.
      </div>

      <div class="lex-item">
      O usuário instala achando que é um software seguro.
      </div>

      <div class="lex-item">
      Depois o invasor ganha acesso ao computador.
      </div>

      <div class="lex-item">
      Muito usado para roubo de dados bancários.
      </div>
    </div>



    <div class="lex-section">
      <span class="lex-label rose">Spyware (Software Espião)</span>

      <div class="lex-item">
      Coleta informações do usuário sem permissão.
      </div>

      <div class="lex-item">
      Pode registrar histórico de navegação e dados pessoais.
      </div>

      <div class="lex-item">
      Muitas vezes instalado junto com programas gratuitos.
      </div>
    </div>



    <div class="lex-section">
      <span class="lex-label rose">Adware (Software de Anúncios)</span>

      <div class="lex-item">
      Mostra propagandas indesejadas.
      </div>

      <div class="lex-item">
      Pode redirecionar o navegador para sites suspeitos.
      </div>

      <div class="lex-item">
      Alguns coletam dados para publicidade.
      </div>
    </div>



    <div class="lex-section">
      <span class="lex-label rose">Ransomware (Sequestro de Dados)</span>

      <div class="lex-item">
      Malware que <strong>criptografa arquivos</strong>.
      </div>

      <div class="lex-item">
      O criminoso exige pagamento para liberar os dados.
      </div>

      <div class="lex-item">
      Muito usado contra empresas e hospitais.
      </div>

      <div class="lex-item">
      <strong>Exemplo real:</strong> ataque WannaCry (2017).
      </div>
    </div>



    <div class="lex-section">
      <span class="lex-label rose">Rootkit</span>

      <div class="lex-item">
      Conjunto de ferramentas para esconder a presença do invasor.
      </div>

      <div class="lex-item">
      Permite acesso oculto ao sistema.
      </div>

      <div class="lex-item">
      Muito difícil de detectar.
      </div>
    </div>



    <div class="lex-section">
      <span class="lex-label rose">Keylogger</span>

      <div class="lex-item">
      Programa que registra <strong>tudo que o usuário digita</strong>.
      </div>

      <div class="lex-item">
      Usado para roubar senhas e dados bancários.
      </div>
    </div>



    <div class="lex-section">
      <span class="lex-label rose">Botnet</span>

      <div class="lex-item">
      Rede de computadores infectados controlados por hackers.
      </div>

      <div class="lex-item">
      Usada para ataques massivos na internet.
      </div>

      <div class="lex-item">
      <strong>Exemplo:</strong> Botnet Mirai atacou servidores da internet em 2016.
      </div>
    </div>



    <div class="lex-section">
      <span class="lex-label rose">Backdoor (Porta dos Fundos)</span>

      <div class="lex-item">
      Permite acesso secreto ao sistema.
      </div>

      <div class="lex-item">
      Pode ser instalado por outros malwares.
      </div>
    </div>



  </div>



  <div class="lex-section">
    <span class="lex-label gold">Linha do Tempo dos Grandes Ataques Cibernéticos</span>

    <div class="lex-item">
    <strong>1988 — Morris Worm</strong>  
    Primeiro grande worm da internet.
    Derrubou cerca de 10% da internet da época.
    </div>

    <div class="lex-item">
    <strong>2000 — ILOVEYOU</strong>  
    Vírus enviado por e-mail que infectou milhões de computadores.
    </div>

    <div class="lex-item">
    <strong>2010 — Stuxnet</strong>  
    Malware criado para atacar instalações nucleares iranianas.
    </div>

    <div class="lex-item">
    <strong>2017 — WannaCry</strong>  
    Ransomware que afetou hospitais, empresas e governos.
    </div>

    <div class="lex-item">
    <strong>2020 — SolarWinds</strong>  
    Ataque sofisticado que comprometeu sistemas governamentais.
    </div>

  </div>



  <div class="lex-section">
    <span class="lex-label blue">Comparação entre Malwares</span>

    <div class="lex-item">
    <strong>Vírus:</strong> precisa de ação humana para se espalhar.
    </div>

    <div class="lex-item">
    <strong>Worm:</strong> se espalha automaticamente pela rede.
    </div>

    <div class="lex-item">
    <strong>Trojan:</strong> disfarçado de programa legítimo.
    </div>

    <div class="lex-item">
    <strong>Ransomware:</strong> sequestra arquivos e pede pagamento.
    </div>

    <div class="lex-item">
    <strong>Spyware:</strong> espiona o usuário.
    </div>

  </div>



  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>

    <strong>Resumo rápido:</strong>

    Malware = qualquer software criado para causar danos ou explorar sistemas.

    Exemplos famosos:  
    WannaCry • Stuxnet • ILOVEYOU
  </div>

</div>
`
},
  // ═══════════════════════════════════════════════════
  "Antivírus — Gerações": {
    icon: "🛡️",
    color: "#22c55e",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🛡️</div>
    <h1 class="notion-title">Antivírus — Gerações</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-g">4 Gerações</span>
      <span class="meta-tag tag-b">Assinatura · Heurística · IA</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">O que é um antivírus?</span>
    <div class="lex-item">Software que <strong>protege</strong> contra vírus e malwares.</div>
    <div class="lex-item"><strong>Falso positivo</strong> = detecta como vírus algo que não é.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">1ª Geração — Assinatura (Scanning)</span>
    <div class="lex-item">Compara arquivos com banco de dados de vírus conhecidos.</div>
    <div class="lex-item">Método mais clássico e antigo.</div>
    <div class="lex-item"><strong>Limitação:</strong> não detecta vírus novos (Zero-day) sem atualização.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">2ª Geração — Heurística</span>
    <div class="lex-item">Busca <strong>características semelhantes</strong> a vírus, não uma cópia exata.</div>
    <div class="lex-item">Detecta variantes e vírus ligeiramente modificados.</div>
    <div class="lex-item">Analisa instruções suspeitas no código.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">3ª Geração — Comportamental (Análise Dinâmica)</span>
    <div class="lex-item">Monitora o que o programa <strong>faz durante a execução</strong>.</div>
    <div class="lex-item">Se tentar criptografar arquivos em massa → bloqueia (Ransomware).</div>
    <div class="lex-item"><strong>Sandboxing</strong> = executa o arquivo em ambiente virtual isolado para observar seu comportamento.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">4ª Geração — IA / Machine Learning / EDR</span>
    <div class="lex-item">Usa <strong>Machine Learning e Deep Learning</strong> para prever ameaças.</div>
    <div class="lex-item">Analisa milhares de variáveis em milissegundos.</div>
    <div class="lex-item"><strong>EDR</strong> = Endpoint Detection and Response — usa nuvem e telemetria.</div>
    <div class="lex-item">Identifica ameaças nunca vistas antes (<strong>Zero-day</strong>).</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> 1ª = assinatura &nbsp;|&nbsp; 2ª = heurística &nbsp;|&nbsp; 3ª = comportamento + sandbox &nbsp;|&nbsp; 4ª = IA + EDR
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Firewall": {
    icon: "🔥",
    color: "#fb923c",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔥</div>
    <h1 class="notion-title">Firewall</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-gold">Barreira de Proteção</span>
      <span class="meta-tag tag-b">Muito cobrado em prova!</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">O que é o Firewall?</span>
    <div class="lex-item">Barreira de <strong>proteção da rede</strong>.</div>
    <div class="lex-item">Controla o tráfego de <strong>entrada e saída</strong>.</div>
    <div class="lex-item">Bloqueia acessos não autorizados.</div>
    <div class="lex-item">Pode ser hardware ou software.</div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label green">O que o Firewall FAZ</span>
      <div class="lex-item">✅ Controla tráfego de rede</div>
      <div class="lex-item">✅ Bloqueia acessos indevidos</div>
      <div class="lex-item">✅ Filtra pacotes de dados</div>
      <div class="lex-item">✅ Protege contra ataques externos</div>
    </div>

    <div class="lex-section">
      <span class="lex-label rose">O que o Firewall NÃO FAZ</span>
      <div class="lex-item">❌ Não remove vírus</div>
      <div class="lex-item">❌ Não faz backup</div>
      <div class="lex-item">❌ Não criptografa dados</div>
      <div class="lex-item">❌ Não protege contra ataques internos</div>
    </div>

  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha de prova:</strong> O firewall <strong>NÃO</strong> remove vírus — isso é função do <strong>antivírus</strong>!
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
// ═══════════════════════════════════════════════════
"Backup — Cópia de Segurança": { 
icon: "📁",
color: "#38bdf8",
aprendizado: `

<div class="lex-block">

<div class="notion-header">
<div class="notion-icon">📁</div>
<h1 class="notion-title">Backup — Cópia de Segurança</h1>

<div class="notion-meta">
<span class="meta-tag tag-b">Completo · Incremental · Diferencial</span>
<span class="meta-tag tag-gold">Regra 3-2-1</span>
</div>

</div>


<div class="lex-section">
<span class="lex-label blue">O que é Backup?</span>

<div class="lex-item">
Backup é uma <strong>cópia de segurança dos dados</strong>.
</div>

<div class="lex-item">
Ele permite recuperar arquivos caso aconteça:
</div>

<div class="lex-item">• falha no computador</div>
<div class="lex-item">• vírus ou ransomware</div>
<div class="lex-item">• erro humano</div>
<div class="lex-item">• roubo ou perda de equipamentos</div>

<div class="lex-item">
Empresas e governos usam backup para garantir a <strong>continuidade das operações</strong>.
</div>

</div>



<div class="lex-section">

<span class="lex-label gold">Regra 3-2-1 (Padrão Mundial)</span>

<div class="lex-list">

<div class="lex-list-item">
<span class="lex-num">3</span>
Manter <strong>3 cópias</strong> dos dados
</div>

<div class="lex-list-item">
<span class="lex-num">2</span>
Guardar em <strong>2 tipos de mídia diferentes</strong>
</div>

<div class="lex-list-item">
<span class="lex-num">1</span>
Manter <strong>1 cópia fora do local</strong> (offsite ou nuvem)
</div>

</div>

</div>



<div class="lex-section">
<span class="lex-label purple">Tipos de Backup</span>
</div>


<div class="lex-cols">


<div class="lex-section">
<span class="lex-label blue">Backup Completo (Full Backup)</span>

<div class="lex-item">
Copia <strong>todos os arquivos</strong> do sistema.
</div>

<div class="lex-item">
É o backup mais seguro.
</div>

<div class="lex-item">
Porém ocupa mais espaço e demora mais.
</div>

<div class="lex-item">
<strong>Exemplo:</strong> backup semanal completo de um servidor.
</div>

</div>



<div class="lex-section">
<span class="lex-label blue">Backup Incremental</span>

<div class="lex-item">
Copia apenas arquivos <strong>modificados desde o último backup</strong>.
</div>

<div class="lex-item">
Pode ser incremental após outro incremental.
</div>

<div class="lex-item">
Muito rápido e economiza espaço.
</div>

<div class="lex-item">
Na restauração precisa de:
<br>• backup completo
<br>• todos os incrementais
</div>

</div>



<div class="lex-section">
<span class="lex-label blue">Backup Diferencial</span>

<div class="lex-item">
Copia arquivos alterados desde o <strong>último backup completo</strong>.
</div>

<div class="lex-item">
Mais rápido que o completo.
</div>

<div class="lex-item">
Restauração simples:
<br>• backup completo
<br>• último diferencial
</div>

</div>



<div class="lex-section">
<span class="lex-label blue">Backup Espelho (Mirror)</span>

<div class="lex-item">
Cria uma <strong>cópia idêntica</strong> do sistema.
</div>

<div class="lex-item">
Se um arquivo for apagado no original, ele também é apagado no backup.
</div>

<div class="lex-item">
Usado em servidores e armazenamento empresarial.
</div>

</div>



<div class="lex-section">
<span class="lex-label blue">Backup Contínuo (CDP)</span>

<div class="lex-item">
Continuous Data Protection.
</div>

<div class="lex-item">
Salva mudanças em tempo real.
</div>

<div class="lex-item">
Muito usado em bancos e sistemas críticos.
</div>

</div>



<div class="lex-section">
<span class="lex-label blue">Snapshot</span>

<div class="lex-item">
Cria uma <strong>imagem instantânea</strong> do sistema.
</div>

<div class="lex-item">
Muito usado em máquinas virtuais.
</div>

<div class="lex-item">
Permite voltar o sistema para um estado anterior.
</div>

</div>

</div>



<div class="lex-section">

<span class="lex-label purple">Onde Guardar Backups</span>

<div class="lex-item">HD externo</div>
<div class="lex-item">SSD externo</div>
<div class="lex-item">Servidor de backup</div>
<div class="lex-item">Fitas magnéticas (empresas)</div>
<div class="lex-item">Armazenamento em nuvem</div>

<div class="lex-item">
<strong>Exemplos de nuvem:</strong>
Google Drive, OneDrive, Dropbox.
</div>

</div>



<div class="lex-section">

<span class="lex-label red">Riscos que o Backup Protege</span>

<div class="lex-item">Ataques de ransomware</div>
<div class="lex-item">Falhas de hardware</div>
<div class="lex-item">Exclusão acidental</div>
<div class="lex-item">Desastres físicos</div>

</div>



<div class="lex-section">

<span class="lex-label rose">Erros Comuns em Backup</span>

<div class="lex-item">Não testar a restauração</div>

<div class="lex-item">
Guardar backup no mesmo computador
</div>

<div class="lex-item">
Não fazer backup regularmente
</div>

<div class="lex-item">
Não proteger o backup com senha
</div>

</div>



<div class="lex-section">

<span class="lex-label blue">Comparação Rápida</span>

<div class="lex-item">
<strong>Completo:</strong> copia tudo
</div>

<div class="lex-item">
<strong>Incremental:</strong> copia mudanças desde o último backup
</div>

<div class="lex-item">
<strong>Diferencial:</strong> copia mudanças desde o último completo
</div>

</div>



<div class="callout callout-gold">

<span class="callout-icon">💡</span>

<strong>Bizu de prova:</strong>

Incremental → desde o último backup (qualquer tipo)

Diferencial → desde o último <strong>backup completo</strong>

Regra 3-2-1 → padrão internacional de segurança

</div>


</div>

`,
},

  // ═══════════════════════════════════════════════════
// ═══════════════════════════════════════════════════
"Criptografia": {
icon: "🔑",
color: "#a78bfa",
aprendizado: `

<div class="lex-block">

<div class="notion-header">
<div class="notion-icon">🔑</div>
<h1 class="notion-title">Criptografia</h1>

<div class="notion-meta">
<span class="meta-tag tag-b">Simétrica · Assimétrica</span>
<span class="meta-tag tag-gold">AES · RSA · SHA</span>
</div>

</div>



<div class="lex-section">

<span class="lex-label blue">O que é Criptografia?</span>

<div class="lex-item">
Criptografia é a técnica de <strong>proteger informações</strong> transformando dados legíveis em dados codificados.
</div>

<div class="lex-item">
Somente quem possui a <strong>chave correta</strong> consegue ler a informação.
</div>

<div class="lex-item">
Sem a chave, o conteúdo parece um <strong>texto aleatório incompreensível</strong>.
</div>

<div class="lex-item">
É usada diariamente em:
</div>

<div class="lex-item">• bancos digitais</div>
<div class="lex-item">• WhatsApp</div>
<div class="lex-item">• compras online</div>
<div class="lex-item">• login em sites</div>

</div>



<div class="lex-section">

<span class="lex-label purple">História da Criptografia</span>

<div class="lex-item">
<strong>Antiguidade:</strong> os primeiros registros vêm do Egito e da Grécia.
</div>

<div class="lex-item">
<strong>Cifra de César (Roma):</strong> Júlio César usava substituição de letras para enviar mensagens militares secretas.
</div>

<div class="lex-item">
<strong>Segunda Guerra Mundial:</strong> Alemanha usava a máquina <strong>Enigma</strong> para criptografar mensagens militares.
</div>

<div class="lex-item">
Os Aliados conseguiram quebrar o código da Enigma, ajudando a encurtar a guerra.
</div>

<div class="lex-item">
<strong>Era moderna:</strong> criptografia passou a proteger a internet.
</div>

</div>



<div class="lex-section">

<span class="lex-label gold">Onde a Criptografia é Usada</span>

<div class="lex-item">
<strong>HTTPS:</strong> protege comunicação entre navegador e site.
</div>

<div class="lex-item">
<strong>WhatsApp:</strong> usa criptografia de ponta a ponta.
</div>

<div class="lex-item">
<strong>Cartões de crédito:</strong> protegem transações financeiras.
</div>

<div class="lex-item">
<strong>VPN:</strong> protege tráfego de internet.
</div>

<div class="lex-item">
<strong>Blockchain:</strong> protege criptomoedas.
</div>

</div>



<div class="lex-cols">

<div class="lex-section">

<span class="lex-label blue">Criptografia Simétrica</span>

<div class="lex-item">
Usa <strong>uma única chave</strong> para criptografar e descriptografar.
</div>

<div class="lex-item">
É muito rápida.
</div>

<div class="lex-item">
Problema: como enviar a chave com segurança?
</div>

<div class="lex-item">
Algoritmo mais usado do mundo:
<strong>AES</strong>.
</div>

<div class="lex-item">
AES protege:
</div>

<div class="lex-item">• Wi-Fi</div>
<div class="lex-item">• discos rígidos</div>
<div class="lex-item">• servidores</div>

</div>



<div class="lex-section">

<span class="lex-label blue">Criptografia Assimétrica</span>

<div class="lex-item">
Usa <strong>duas chaves diferentes</strong>.
</div>

<div class="lex-item">
<strong>Chave pública:</strong> qualquer pessoa pode ter.
</div>

<div class="lex-item">
<strong>Chave privada:</strong> mantida em segredo.
</div>

<div class="lex-item">
Muito usada na internet para autenticação.
</div>

<div class="lex-item">
Algoritmos famosos:
</div>

<div class="lex-item">• RSA</div>

</div>

</div>



<div class="lex-section">

<span class="lex-label purple">Algoritmos Mais Usados no Mundo</span>

<div class="lex-item">
<strong>AES</strong> → criptografia simétrica padrão mundial.
</div>

<div class="lex-item">
<strong>RSA</strong> → usado para troca segura de chaves.
</div>

<div class="lex-item">
<strong>SHA</strong> → função hash usada para integridade de dados.
</div>

<div class="lex-item">
<strong>ECC</strong> → criptografia moderna eficiente.
</div>

</div>



<div class="lex-section">

<span class="lex-label red">Como Hackers Tentam Quebrar Criptografia</span>

<div class="lex-item">
<strong>Força bruta:</strong> tentar milhões ou bilhões de combinações.
</div>

<div class="lex-item">
<strong>Ataque de dicionário:</strong> testar senhas comuns.
</div>

<div class="lex-item">
<strong>Engenharia social:</strong> enganar o usuário para revelar a chave.
</div>

<div class="lex-item">
<strong>Malwares:</strong> roubar chaves diretamente do computador.
</div>

</div>



<div class="lex-section">

<span class="lex-label rose">Criptografias Que Já Foram Quebradas</span>

<div class="lex-item">
<strong>MD5</strong> → considerada insegura atualmente.
</div>

<div class="lex-item">
<strong>SHA-1</strong> → ataques de colisão já foram demonstrados.
</div>

<div class="lex-item">
<strong>WEP</strong> (Wi-Fi antigo) → facilmente quebrado.
</div>

</div>



<div class="lex-section">

<span class="lex-label purple">O Futuro: Criptografia Pós-Quântica</span>

<div class="lex-item">
Computadores quânticos podem quebrar alguns algoritmos atuais.
</div>

<div class="lex-item">
Pesquisadores estão criando novas criptografias resistentes.
</div>

<div class="lex-item">
Isso é chamado de <strong>criptografia pós-quântica</strong>.
</div>

</div>



<div class="callout callout-gold">

<span class="callout-icon">💡</span>

<strong>Bizu:</strong>

Simétrica → <strong>1 chave (AES)</strong>

Assimétrica → <strong>2 chaves (RSA)</strong>

</div>



<div class="callout callout-rose">

<span class="callout-icon">⚠️</span>

<strong>Importante para provas:</strong>

HTTPS usa criptografia híbrida:

RSA ou ECC para trocar chave  
AES para criptografar a comunicação

</div>

</div>

`
}
};