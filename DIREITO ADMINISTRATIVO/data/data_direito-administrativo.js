// data/data_direito-administrativo.js
// Conteúdo de Direito Administrativo — formatado com classes lex-*

/**
 * 📚 Banco de Dados de Direito Administrativo
 * 
 * Este arquivo contém todo o conteúdo educacional de Direito Administrativo,
 * estruturado em um formato otimizado para visualização e estudo.
 * 
 * 🎯 Objetivo: Facilitar o aprendizado com organização visual e mnemônicos
 * 🏗️ Estrutura: Cada tópico contém icones, cores e conteúdo HTML formatado
 * 🎨 Design: Utiliza classes CSS específicas para renderização bonita
 */

window.DA = {

  // ═══════════════════════════════════════════════════
  "Conceito de Administração Pública": {
    icon: "🏛️",
    color: "#4a85f0",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🏛️</div>
    <h1 class="notion-title">Conceito de Administração Pública</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Direito Administrativo</span>
      <span class="meta-tag tag-g">Fundamentos</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">Critério Formal — Orgânico / Subjetivo</span>
      <div class="lex-item">Considera <strong>QUEM</strong> exerce a atividade.</div>
      <div class="lex-item">Estrutura administrativa do Estado.</div>
      <div class="lex-item">Agentes públicos, órgãos e entidades.</div>
      <div class="lex-item">Bens públicos.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">Critério Material — Objetivo / Funcional</span>
      <div class="lex-item">Considera <strong>O QUE</strong> é feito.</div>
      <div class="lex-item">Função administrativa.</div>
      <div class="lex-item">Atividade administrativa.</div>
      <div class="lex-item">Prestação de serviços públicos.</div>
    </div>

  </div>

  <div class="callout">
    <span class="callout-icon">💡</span>
    <strong>Resumo:</strong> Formal = estrutura estatal (quem) &nbsp;|&nbsp; Material = atividade exercida (o que)
  </div>

</div>`,

  },

  // ═══════════════════════════════════════════════════
  "Regime Jurídico Administrativo": {
    icon: "⚖️",
    color: "#38bdf8",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⚖️</div>
    <h1 class="notion-title">Regime Jurídico Administrativo</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Pedras de Toque</span>
      <span class="meta-tag tag-gold">Supremacia · Indisponibilidade</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Composição do Regime</span>
    <div class="lex-item">Regras — leis e atos normativos.</div>
    <div class="lex-item">Princípios — valores fundamentais.</div>
    <div class="lex-item">A Administração <strong>não atua como particular</strong> — segue regras próprias.</div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">1. Supremacia do Interesse Público</span>
      <div class="lex-item">Interesse coletivo <strong>prevalece</strong> sobre o individual.</div>
      <div class="lex-item">É uma <strong>PRERROGATIVA</strong> da Administração.</div>
      <div class="lex-item">Representa <strong>poder / privilégio</strong>.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">2. Indisponibilidade do Interesse Público</span>
      <div class="lex-item">Administração = <strong>gestora</strong>, não proprietária.</div>
      <div class="lex-item"><strong>Não pode renunciar</strong> ao interesse público.</div>
      <div class="lex-item">É uma <strong>SUJEIÇÃO</strong> da Administração.</div>
    </div>

  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Supremacia = <strong>poder</strong> &nbsp;|&nbsp; Indisponibilidade = <strong>dever</strong>
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Princípios Expressos (LIMPE)": {
    icon: "📜",
    color: "#a78bfa",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">📜</div>
    <h1 class="notion-title">Princípios Expressos — LIMPE</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 37 CF/88</span>
      <span class="meta-tag tag-g">Todos os Poderes e Níveis</span>
    </div>
  </div>

  <div class="callout">
    <span class="callout-icon">📌</span>
    Mnemônico: <strong>L · I · M · P · E</strong> — aplicam-se a todos os Poderes e níveis da federação.
  </div>

  <div class="lex-section">
    <span class="lex-label blue">L — Legalidade</span>
    <div class="lex-item">Agente público <strong>só age quando a lei autoriza</strong>.</div>
    <div class="lex-item">Particular: pode tudo que <strong>não é proibido</strong>.</div>
    <div class="lex-item">Administração: <strong>só pode o que a lei permite</strong>.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">I — Impessoalidade</span>
    <div class="lex-item">Vedado <strong>favorecimento pessoal</strong>.</div>
    <div class="lex-item">Atuação voltada ao <strong>interesse público</strong>.</div>
    <div class="lex-item">Art. 37, §1º CF — vedação à promoção pessoal em publicidade oficial.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">M — Moralidade</span>
    <div class="lex-item">Honestidade, ética, boa-fé e probidade.</div>
    <div class="lex-item">Ato pode ser <strong>legal mas imoral = INVÁLIDO</strong>.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">P — Publicidade</span>
    <div class="lex-item"><strong>Regra:</strong> transparência total dos atos.</div>
    <div class="lex-item"><strong>Exceção:</strong> segurança nacional e intimidade.</div>
    <div class="lex-item">Ex: PAD e inquérito policial podem ser sigilosos.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">E — Eficiência <span style="font-size:11px;opacity:.7">(EC 19/1998)</span></span>
    <div class="lex-item">Produtividade, economia e celeridade.</div>
    <div class="lex-item">Qualidade dos serviços prestados.</div>
    <div class="lex-item">Base da administração <strong>gerencial</strong>.</div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    A <strong>Eficiência</strong> foi inserida pela <strong>EC 19/1998</strong> (Reforma Administrativa) — ponto recorrente em provas.
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Princípios Implícitos": {
    icon: "📚",
    color: "#6366f1",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">📚</div>
    <h1 class="notion-title">Princípios Implícitos</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Não estão no Art. 37</span>
      <span class="meta-tag tag-g">Mas são fundamentais</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Presunção de Legalidade / Veracidade</span>
    <div class="lex-item">Atos administrativos presumem-se <strong>legais e verdadeiros</strong>.</div>
    <div class="lex-item">Presunção <strong>relativa</strong> — juris tantum (admite prova em contrário).</div>
    <div class="lex-item">Ônus da prova: do <strong>particular</strong>.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Razoabilidade e Proporcionalidade</span>
    <div class="lex-item">Vedação de <strong>excessos</strong>.</div>
    <div class="lex-item">Previsto na <strong>Lei 9.784/1999</strong> (Processo Administrativo Federal).</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Motivação</span>
    <div class="lex-item"><strong>Regra:</strong> atos devem ser motivados.</div>
    <div class="lex-item"><strong>Exceção:</strong> nomeação e exoneração <em>ad nutum</em> (cargos em comissão).</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Continuidade do Serviço Público</span>
    <div class="lex-item">Serviços <strong>não podem ser interrompidos</strong>.</div>
    <div class="lex-item">Exceção: greve nos limites da lei.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Autotutela</span>
    <div class="lex-item">Administração <strong>controla seus próprios atos</strong>.</div>
    <div class="lex-item"><strong>Anula</strong> atos ilegais — vício de legalidade.</div>
    <div class="lex-item"><strong>Revoga</strong> atos inconvenientes — mérito administrativo.</div>
    <div class="lex-item">Base: <strong>Súmulas 346 e 473 do STF</strong>.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Especialidade</span>
    <div class="lex-item">Entidades da Adm. Indireta têm <strong>finalidade específica</strong>.</div>
    <div class="lex-item">Não podem atuar fora de seus objetivos institucionais.</div>
  </div>

</div>`,
  
  },

  // ═══════════════════════════════════════════════════
  "Organização Administrativa": {
    icon: "🗂️",
    color: "#f59e0b",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🗂️</div>
    <h1 class="notion-title">Organização Administrativa</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Adm. Direta e Indireta</span>
      <span class="meta-tag tag-gold">Art. 37, XIX CF</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">Administração Direta</span>
      <div class="lex-item">União, Estados, DF e Municípios.</div>
      <div class="lex-item">Autonomia: <strong>política, administrativa e financeira</strong>.</div>
      <div class="lex-item">Prestação <strong>centralizada</strong>.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">Administração Indireta</span>
      <div class="lex-item">Autarquias, Fundações, EP e SEM.</div>
      <div class="lex-item">Autonomia: <strong>administrativa e financeira</strong> apenas.</div>
      <div class="lex-item"><strong>NÃO</strong> têm autonomia política.</div>
      <div class="lex-item">Criação: Art. 37, XIX CF — lei específica.</div>
    </div>

  </div>

  <div class="lex-section">
    <span class="lex-label blue">Formas de Organização</span>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label green">Centralização</span>
      <div class="lex-item">Serviço prestado pela <strong>própria</strong> Adm. Direta.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label green">Descentralização</span>
      <div class="lex-item">Transferência para <strong>outra pessoa jurídica</strong>.</div>
      <div class="lex-item">Cria <strong>ENTIDADES</strong>.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label green">Desconcentração</span>
      <div class="lex-item">Distribuição <strong>interna</strong> de competências.</div>
      <div class="lex-item">Cria <strong>ÓRGÃOS</strong> — mesma pessoa jurídica.</div>
      <div class="lex-item">Há hierarquia e subordinação.</div>
    </div>

  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Descentralização → cria <strong>ENTIDADES</strong> &nbsp;|&nbsp; Desconcentração → cria <strong>ÓRGÃOS</strong>
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Descentralização": {
    icon: "🔄",
    color: "#14b8a6",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔄</div>
    <h1 class="notion-title">Descentralização</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-teal">Outorga · Delegação · Colaboração</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">Por Outorga</span>
      <div class="lex-item">Transfere <strong>titularidade + execução</strong>.</div>
      <div class="lex-item">Realizada por <strong>LEI</strong>.</div>
      <div class="lex-item">Atinge entidades da Adm. Indireta.</div>
      <div class="lex-item">Caráter <strong>definitivo</strong>.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">Por Delegação</span>
      <div class="lex-item">Transfere apenas a <strong>execução</strong>.</div>
      <div class="lex-item">Realizada por <strong>contrato ou ato administrativo</strong>.</div>
      <div class="lex-item">Caráter <strong>precário</strong>.</div>
      <div class="lex-item">Ex: concessão, permissão, autorização.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">Por Colaboração</span>
      <div class="lex-item">Estado transfere execução ao particular.</div>
      <div class="lex-item">Mantém a <strong>titularidade</strong>.</div>
      <div class="lex-item">Base: Art. 175 CF + <strong>Lei 8.987/1995</strong>.</div>
    </div>

  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Outorga = lei + definitivo &nbsp;|&nbsp; Delegação = contrato + precário
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Órgãos Públicos": {
    icon: "🏢",
    color: "#22c55e",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🏢</div>
    <h1 class="notion-title">Órgãos Públicos</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-g">Sem Personalidade Jurídica</span>
      <span class="meta-tag tag-b">Desconcentração</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Características</span>
    <div class="lex-item"><strong>NÃO</strong> possuem personalidade jurídica.</div>
    <div class="lex-item">Integram uma pessoa jurídica maior.</div>
    <div class="lex-item">Centros de competência — resultado da desconcentração.</div>
    <div class="lex-item">Não têm patrimônio próprio.</div>
    <div class="lex-item">Não celebram contratos (a PJ que celebra).</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Classificação — Posição Estatal</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Independentes</strong> — Presidência, Congresso, Tribunais Superiores</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Autônomos</strong> — Ministérios, Secretarias</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Superiores</strong> — Departamentos</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Subalternos</strong> — Seções</div>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label blue">Quanto à Estrutura</span>
      <div class="lex-item"><strong>Simples</strong> — sem subdivisões internas.</div>
      <div class="lex-item"><strong>Compostos</strong> — têm subdivisões.</div>
    </div>
    <div class="lex-section">
      <span class="lex-label blue">Quanto à Atuação</span>
      <div class="lex-item"><strong>Singulares</strong> — decisão de 1 agente.</div>
      <div class="lex-item"><strong>Colegiados</strong> — decisão coletiva.</div>
    </div>
  </div>

  <div class="callout">
    <span class="callout-icon">⚖️</span>
    <strong>Teoria do Órgão:</strong> Vontade do agente = vontade do órgão = vontade do Estado.
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Consórcios Públicos": {
    icon: "🤝",
    color: "#14b8a6",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🤝</div>
    <h1 class="notion-title">Consórcios Públicos</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-teal">Lei 11.107/2005</span>
      <span class="meta-tag tag-b">Cooperação Federativa</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Processo de Criação</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">1.</span> Protocolo de intenções</div>
      <div class="lex-list-item"><span class="lex-num">2.</span> Ratificação pelos entes — por lei</div>
      <div class="lex-list-item"><span class="lex-num">3.</span> Contrato de rateio</div>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label blue">Natureza Jurídica</span>
      <div class="lex-item"><strong>Direito público</strong> — associação pública.</div>
      <div class="lex-item">Ou <strong>direito privado</strong>.</div>
    </div>
    <div class="lex-section">
      <span class="lex-label blue">Finalidade</span>
      <div class="lex-item">Objetivos de interesse comum.</div>
      <div class="lex-item">Prestação de serviços públicos.</div>
      <div class="lex-item">Execução de obras.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Características</span>
    <div class="lex-item">Cooperação <strong>federativa</strong>.</div>
    <div class="lex-item">Gestão associada de serviços.</div>
    <div class="lex-item">Podem realizar <strong>contratações</strong> e receber recursos.</div>
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Terceiro Setor": {
    icon: "🌐",
    color: "#f472b6",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🌐</div>
    <h1 class="notion-title">Terceiro Setor</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">OS · OSCIP</span>
      <span class="meta-tag tag-g">Colaboração com o Estado</span>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">⚠️</span>
    O Terceiro Setor <strong>NÃO integra</strong> a Administração Pública. Atua em <strong>colaboração</strong> com o Estado.
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">OS — Organizações Sociais</span>
      <div class="lex-item">Base legal: <strong>Lei 9.637/1998</strong>.</div>
      <div class="lex-item">Instrumento: <strong>CONTRATO DE GESTÃO</strong>.</div>
      <div class="lex-item">Recebem recursos, bens e servidores.</div>
      <div class="lex-item">Áreas: saúde, ensino, pesquisa, cultura, meio ambiente.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">OSCIP — Org. Soc. Civil de Interesse Público</span>
      <div class="lex-item">Base legal: <strong>Lei 9.790/1999</strong>.</div>
      <div class="lex-item">Instrumento: <strong>TERMO DE PARCERIA</strong>.</div>
      <div class="lex-item">Áreas mais amplas que as OS.</div>
    </div>

  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> OS = <strong>CO</strong>ntrato de gestão &nbsp;|&nbsp; OSCIP = <strong>TE</strong>rmo de parceria
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Concessão de Serviço Público": {
    icon: "📋",
    color: "#4a85f0",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">📋</div>
    <h1 class="notion-title">Concessão de Serviço Público</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Lei 8.987/1995</span>
      <span class="meta-tag tag-gold">Lei 14.133/2021</span>
      <span class="meta-tag tag-teal">PPP — Lei 11.079/2004</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Características Gerais</span>
    <div class="lex-item">Delegação da prestação de serviços públicos pelo poder concedente.</div>
    <div class="lex-item">Licitação <strong>obrigatória</strong>.</div>
    <div class="lex-item">Prazo <strong>determinado</strong>.</div>
    <div class="lex-item">Executada por conta e risco da <strong>concessionária</strong>.</div>
    <div class="lex-item">Natureza: <strong>contrato administrativo</strong>.</div>
    <div class="lex-item">Princípio essencial: <strong>equilíbrio econômico-financeiro</strong>.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">PPP — Parcerias Público-Privadas <span style="font-size:11px;opacity:.7">Lei 11.079/2004</span></span>
    <div class="lex-cols">
      <div class="lex-section">
        <span class="lex-label">Concessão Patrocinada</span>
        <div class="lex-item">Tarifa paga pelo usuário <strong>+</strong> subsídio estatal.</div>
      </div>
      <div class="lex-section">
        <span class="lex-label">Concessão Administrativa</span>
        <div class="lex-item">Apenas <strong>subsídio estatal</strong> — sem tarifa do usuário.</div>
      </div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Formas de Extinção</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Advento do termo</strong> — vencimento do prazo</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Encampação</strong> — retomada por interesse público</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Caducidade</strong> — inadimplemento da concessionária</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Rescisão</strong> — iniciativa da concessionária</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Anulação</strong> — vício de legalidade</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Falência/extinção</strong> da concessionária</div>
    </div>
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Permissão e Autorização": {
    icon: "📄",
    color: "#38bdf8",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">📄</div>
    <h1 class="notion-title">Permissão e Autorização</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Lei 8.987/1995</span>
      <span class="meta-tag tag-teal">Precariedade</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">Permissão</span>
      <div class="lex-item">Delegação <strong>mediante licitação</strong>.</div>
      <div class="lex-item">Pessoa física ou jurídica.</div>
      <div class="lex-item">Natureza: <strong>contrato de adesão</strong>.</div>
      <div class="lex-item">Maior precariedade que a concessão.</div>
      <div class="lex-item">Pode ser <strong>revogada</strong>.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">Autorização</span>
      <div class="lex-item">Ato administrativo <strong>unilateral</strong>.</div>
      <div class="lex-item">Discricionário e <strong>precário</strong>.</div>
      <div class="lex-item">Revogável <strong>a qualquer tempo</strong>.</div>
      <div class="lex-item">Atividades de menor complexidade.</div>
      <div class="lex-item">Normalmente <strong>não exige licitação</strong>.</div>
    </div>

  </div>

  <div class="lex-section">
    <span class="lex-label gold">Comparativo — Estabilidade</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">+</span> <strong>Concessão</strong> — contrato bilateral, prazo, mais estável</div>
      <div class="lex-list-item"><span class="lex-num">~</span> <strong>Permissão</strong> — contrato de adesão, precário</div>
      <div class="lex-list-item"><span class="lex-num">-</span> <strong>Autorização</strong> — ato unilateral, mais precária</div>
    </div>
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Autarquias": {
    icon: "🏛️",
    color: "#10b981",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🏛️</div>
    <h1 class="notion-title">Autarquias</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-g">Art. 37, XIX CF</span>
      <span class="meta-tag tag-b">Direito Público</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Características</span>
    <div class="lex-item">Pessoa jurídica de <strong>DIREITO PÚBLICO</strong>.</div>
    <div class="lex-item">Criada <strong>diretamente por lei</strong> específica.</div>
    <div class="lex-item">Patrimônio próprio.</div>
    <div class="lex-item">Autonomia administrativa e financeira.</div>
    <div class="lex-item">Responsabilidade <strong>objetiva</strong> — Art. 37, §6º CF.</div>
    <div class="lex-item">Imunidade tributária recíproca.</div>
    <div class="lex-item">Prazo em dobro e reexame necessário.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Exemplos</span>
    <div class="lex-item">INSS, BACEN, ANATEL, IBAMA, INCRA.</div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">Agências Reguladoras</span>
      <div class="lex-item">Autarquias em <strong>regime especial</strong>.</div>
      <div class="lex-item">Maior autonomia.</div>
      <div class="lex-item">Mandato <strong>fixo</strong> dos dirigentes.</div>
      <div class="lex-item">Ex: ANATEL, ANEEL, ANP, ANVISA.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">Agências Executivas</span>
      <div class="lex-item">Autarquia ou fundação que celebra <strong>contrato de gestão</strong>.</div>
      <div class="lex-item">Maior autonomia gerencial.</div>
      <div class="lex-item">Devem cumprir <strong>metas de desempenho</strong>.</div>
    </div>

  </div>

  <div class="lex-section">
    <span class="lex-label blue">Conselhos Profissionais</span>
    <div class="lex-item">STF: natureza jurídica de <strong>autarquia</strong>.</div>
    <div class="lex-item">Ex: CRM, CREA.</div>
    <div class="lex-item">OAB — natureza <em>sui generis</em> (especial).</div>
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Fundações Públicas": {
    icon: "🏫",
    color: "#a78bfa",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🏫</div>
    <h1 class="notion-title">Fundações Públicas</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Direito Público · Direito Privado</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">Direito Público</span>
      <div class="lex-item">Criada <strong>diretamente por lei</strong>.</div>
      <div class="lex-item">Regime jurídico <strong>público</strong>.</div>
      <div class="lex-item">Também chamada: <strong>autarquia fundacional</strong>.</div>
      <div class="lex-item">Mesmas características das autarquias.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">Direito Privado</span>
      <div class="lex-item">Lei <strong>autoriza</strong> a criação.</div>
      <div class="lex-item">Necessita de <strong>registro</strong>.</div>
      <div class="lex-item">Regime <strong>predominantemente privado</strong>.</div>
      <div class="lex-item">Derrogado por normas públicas.</div>
    </div>

  </div>

  <div class="lex-section">
    <span class="lex-label green">Finalidade</span>
    <div class="lex-item">Atividades de interesse social: educação, cultura, pesquisa, saúde.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Exemplos</span>
    <div class="lex-item">FUNAI, IBGE, Fundação Oswaldo Cruz (Fiocruz).</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Dir. Público = criada por lei (como autarquia) &nbsp;|&nbsp; Dir. Privado = lei autoriza + registro
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Empresas Públicas e SEM": {
    icon: "🏢",
    color: "#f59e0b",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🏢</div>
    <h1 class="notion-title">Empresas Públicas e Sociedades de Economia Mista</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-gold">Lei 13.303/2016</span>
      <span class="meta-tag tag-b">Direito Privado</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">Empresa Pública — EP</span>
      <div class="lex-item">Pessoa jurídica de <strong>direito privado</strong>.</div>
      <div class="lex-item">Lei <strong>autoriza</strong> a criação.</div>
      <div class="lex-item">Capital <strong>100% público</strong>.</div>
      <div class="lex-item"><strong>Qualquer</strong> forma societária.</div>
      <div class="lex-item">Foro: <strong>Justiça Federal</strong> (se federal).</div>
      <div class="lex-item">Ex: Correios, Caixa Econômica Federal.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">Sociedade de Economia Mista — SEM</span>
      <div class="lex-item">Pessoa jurídica de <strong>direito privado</strong>.</div>
      <div class="lex-item">Lei <strong>autoriza</strong> a criação.</div>
      <div class="lex-item">Capital <strong>misto</strong> — público + privado.</div>
      <div class="lex-item">Forma <strong>obrigatória: S/A</strong>.</div>
      <div class="lex-item">Foro: <strong>Justiça Estadual</strong>.</div>
      <div class="lex-item">Ex: Petrobras, Banco do Brasil.</div>
    </div>

  </div>

  <div class="lex-section">
    <span class="lex-label gold">Diferenças Principais</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">EP</span> Capital 100% público + <strong>qualquer forma societária</strong></div>
      <div class="lex-list-item"><span class="lex-num">SEM</span> Capital misto + <strong>obrigatoriamente S/A</strong></div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Regime Jurídico</span>
    <div class="lex-item">Predominantemente <strong>privado</strong>, derrogado por normas públicas.</div>
    <div class="lex-item">Licitação obrigatória — <strong>Lei 14.133/2021</strong>.</div>
    <div class="lex-item">Concurso público obrigatório.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Responsabilidade Civil</span>
    <div class="lex-item">Prestadoras de serviço público: responsabilidade <strong>objetiva</strong>.</div>
    <div class="lex-item">Exploradoras de atividade econômica: responsabilidade <strong>subjetiva</strong>.</div>
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Poderes Administrativos": {
    icon: "⚡",
    color: "#fb923c",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⚡</div>
    <h1 class="notion-title">Poderes Administrativos</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-gold">Instrumentos de proteção do interesse público</span>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">⚠️</span>
    Os poderes administrativos <strong>não são privilégios pessoais</strong> — são instrumentos para proteger o interesse público.
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">Poder Vinculado</span>
      <div class="lex-item">Lei determina <strong>exatamente</strong> como agir.</div>
      <div class="lex-item"><strong>Sem margem</strong> de escolha.</div>
      <div class="lex-item">Ex: aposentadoria compulsória aos 75 anos.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label blue">Poder Discricionário</span>
      <div class="lex-item">Lei concede <strong>margem de escolha</strong>.</div>
      <div class="lex-item">Conveniência e <strong>oportunidade</strong>.</div>
      <div class="lex-item">Dentro dos limites da lei.</div>
      <div class="lex-item">Ex: autorização para porte de arma.</div>
    </div>

  </div>

  <div class="lex-section">
    <span class="lex-label blue">Poder Hierárquico</span>
    <div class="lex-item">Organização da administração.</div>
    <div class="lex-item">Distribuição de funções, fiscalização e revisão de atos.</div>
    <div class="lex-item">Permite <strong>delegação</strong> e <strong>avocação</strong>.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Poder Disciplinar</span>
    <div class="lex-item">Aplicação de <strong>sanções</strong> a servidores e particulares com vínculo.</div>
    <div class="lex-item">Ex: demissão, suspensão, advertência.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Poder Regulamentar</span>
    <div class="lex-item">Edição de <strong>decretos e regulamentos</strong>.</div>
    <div class="lex-item">Para fiel execução da lei — exercido pelo Chefe do Executivo.</div>
    <div class="lex-item"><strong>NÃO</strong> pode criar ou restringir direitos além da lei.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Poder de Polícia — DAC</span>
    <div class="lex-item">Limita direitos individuais em favor do <strong>interesse coletivo</strong>.</div>
    <div class="lex-cols">
      <div class="lex-section">
        <div class="lex-item"><strong>D</strong>iscricionariedade</div>
        <div class="lex-item"><strong>A</strong>utoexecutoriedade</div>
        <div class="lex-item"><strong>C</strong>oercibilidade</div>
      </div>
    </div>
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Abuso de Poder": {
    icon: "⚠️",
    color: "#ef4444",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⚠️</div>
    <h1 class="notion-title">Abuso de Poder</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Excesso · Desvio</span>
      <span class="meta-tag tag-gold">Ato Nulo</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label rose">Excesso de Poder</span>
      <div class="lex-item">Agente <strong>ultrapassa</strong> os limites de sua competência.</div>
      <div class="lex-item">Vai <strong>além</strong> do que a lei permite.</div>
      <div class="lex-item">Vício de <strong>COMPETÊNCIA</strong>.</div>
      <div class="lex-item">Ex: delegado que prende sem flagrante nem mandado.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label rose">Desvio de Poder — Desvio de Finalidade</span>
      <div class="lex-item">Ato praticado <strong>dentro da competência</strong>.</div>
      <div class="lex-item">Mas com <strong>finalidade diferente</strong> da prevista em lei.</div>
      <div class="lex-item">Vício de <strong>FINALIDADE</strong>.</div>
      <div class="lex-item">Ex: remoção de servidor para puni-lo.</div>
    </div>

  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Excesso = vai além (competência) &nbsp;|&nbsp; Desvio = fim errado (finalidade)
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Consequências</span>
    <div class="lex-item">Ato <strong>nulo</strong>.</div>
    <div class="lex-item">Responsabilidade do agente.</div>
    <div class="lex-item">Controle judicial.</div>
    <div class="lex-item">Improbidade administrativa.</div>
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Atos Administrativos": {
    icon: "📋",
    color: "#4a85f0",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">📋</div>
    <h1 class="notion-title">Atos Administrativos</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">COFIM</span>
      <span class="meta-tag tag-gold">Manifestação Unilateral de Vontade</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Elementos — COFIM</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">C</span> <strong>Competência</strong> — quem pode praticar o ato</div>
      <div class="lex-list-item"><span class="lex-num">O</span> <strong>Objeto</strong> — conteúdo do ato</div>
      <div class="lex-list-item"><span class="lex-num">F</span> <strong>Forma</strong> — modo de exteriorização</div>
      <div class="lex-list-item"><span class="lex-num">I</span> <strong>Motivo</strong> — razão de fato e de direito</div>
      <div class="lex-list-item"><span class="lex-num">M</span> <strong>Finalidade</strong> — sempre o interesse público</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Atributos</span>
    <div class="lex-item"><strong>Presunção de legitimidade</strong> — relativa, juris tantum.</div>
    <div class="lex-item"><strong>Imperatividade</strong> — obriga independente de concordância.</div>
    <div class="lex-item"><strong>Autoexecutoriedade</strong> — executa sem precisar do Judiciário.</div>
    <div class="lex-item"><strong>Tipicidade</strong> — deve estar previsto em lei.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Classificação — Quanto à Formação</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Simples</strong> — formado pela vontade de 1 órgão</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Composto</strong> — 2 órgãos, 1 vontade (+ ratificação)</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Complexo</strong> — 2 órgãos, 2 vontades autônomas</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Formas de Extinção</span>
    <div class="lex-cols">
      <div class="lex-section">
        <div class="lex-item"><strong>Anulação</strong> — vício de legalidade</div>
        <div class="lex-item"><strong>Revogação</strong> — conveniência / oportunidade</div>
        <div class="lex-item"><strong>Cassação</strong> — descumprimento pelo beneficiário</div>
      </div>
      <div class="lex-section">
        <div class="lex-item"><strong>Caducidade</strong> — lei superveniente incompatível</div>
        <div class="lex-item"><strong>Contraposição</strong> — ato posterior e contrário</div>
      </div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Anulação (ilegalidade) = Adm. ou Judiciário &nbsp;|&nbsp; Revogação (mérito) = <strong>só a Administração</strong>
  </div>

</div>`,

  },

  // ═══════════════════════════════════════════════════
  "Controle da Administração": {
    icon: "🔍",
    color: "#38bdf8",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔍</div>
    <h1 class="notion-title">Controle da Administração</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Interno · Legislativo · Judicial</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Controle Interno</span>
    <div class="lex-item">Exercido pela <strong>própria Administração</strong>.</div>
    <div class="lex-item"><strong>Autotutela</strong> — Súmulas 346 e 473 STF.</div>
    <div class="lex-item">Pode <strong>anular</strong> (ilegalidade) e <strong>revogar</strong> (mérito).</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Controle Legislativo — Externo</span>
    <div class="lex-cols">
      <div class="lex-section">
        <span class="lex-label">Controle Político</span>
        <div class="lex-item">Congresso Nacional.</div>
        <div class="lex-item">CPI — Comissão Parlamentar de Inquérito.</div>
      </div>
      <div class="lex-section">
        <span class="lex-label">Controle Financeiro</span>
        <div class="lex-item"><strong>TCU</strong> — Tribunal de Contas da União.</div>
        <div class="lex-item">Julga <strong>CONTAS</strong>, não pessoas.</div>
      </div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Controle Judicial — Externo</span>
    <div class="lex-item">Art. 5º, XXXV CF — <strong>inafastabilidade</strong> da jurisdição.</div>
    <div class="lex-item">Sistema de <strong>jurisdição una</strong>.</div>
    <div class="lex-item">Controla apenas a <strong>legalidade</strong> — <strong>não o mérito</strong>.</div>
    <div class="lex-item">Pode <strong>anular</strong> atos ilegais.</div>
    <div class="lex-item"><strong>NÃO pode revogar</strong>.</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Administração: anula + revoga &nbsp;|&nbsp; Judiciário: <strong>só anula</strong> (legalidade) &nbsp;|&nbsp; Legislativo: político + financeiro
  </div>

</div>`,
  },

  // ═══════════════════════════════════════════════════
  "Licitações (Lei 14.133/2021)": {
    icon: "📑",
    color: "#a78bfa",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">📑</div>
    <h1 class="notion-title">Licitações — Nova Lei 14.133/2021</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Lei 14.133/2021</span>
      <span class="meta-tag tag-gold">Substituiu a Lei 8.666/93</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Modalidades</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Pregão</strong> — mais usado, bens e serviços comuns</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Concorrência</strong> — obras e serviços de maior complexidade</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Concurso</strong> — trabalho técnico, científico ou artístico</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Leilão</strong> — alienação de bens</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Diálogo competitivo</strong> — <em>nova modalidade!</em></div>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label gold">Dispensa de Licitação</span>
      <div class="lex-item">Licitação é <strong>viável</strong>.</div>
      <div class="lex-item">Mas a lei <strong>permite dispensar</strong>.</div>
      <div class="lex-item">Ex: valor baixo, emergência, guerra.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label gold">Inexigibilidade</span>
      <div class="lex-item">Licitação é <strong>inviável</strong>.</div>
      <div class="lex-item">Impossibilidade de competição.</div>
      <div class="lex-item">Ex: fornecedor exclusivo, notória especialização.</div>
    </div>

  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Bizu:</strong> Dispensa = <strong>viável</strong> mas dispensada &nbsp;|&nbsp; Inexigibilidade = <strong>inviável</strong> (impossível competir)
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Princípios da Licitação</span>
    <div class="lex-cols">
      <div>
        <div class="lex-item">Isonomia</div>
        <div class="lex-item">Legalidade</div>
        <div class="lex-item">Impessoalidade</div>
        <div class="lex-item">Moralidade</div>
      </div>
      <div>
        <div class="lex-item">Publicidade</div>
        <div class="lex-item">Vinculação ao edital</div>
        <div class="lex-item">Julgamento objetivo</div>
      </div>
    </div>
  </div>

</div>`,

  },

  // ═══════════════════════════════════════════════════
  "Serviços Públicos": {
    icon: "🚇",
    color: "#14b8a6",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🚇</div>
    <h1 class="notion-title">Serviços Públicos</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-teal">Art. 175 CF</span>
      <span class="meta-tag tag-b">Interesse Coletivo</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Conceito</span>
    <div class="lex-item">Atividade de <strong>interesse coletivo</strong>.</div>
    <div class="lex-item">Prestada diretamente pelo Estado ou por <strong>delegação</strong>.</div>
    <div class="lex-item">Regime predominantemente <strong>público</strong>.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Princípios dos Serviços Públicos</span>
    <div class="lex-cols">
      <div>
        <div class="lex-item"><strong>Continuidade</strong> — não pode parar</div>
        <div class="lex-item"><strong>Generalidade</strong> — para todos</div>
        <div class="lex-item"><strong>Eficiência</strong> — qualidade</div>
      </div>
      <div>
        <div class="lex-item"><strong>Modicidade</strong> — tarifa justa</div>
        <div class="lex-item"><strong>Cortesia</strong> — bom atendimento</div>
        <div class="lex-item"><strong>Atualidade</strong> — modernização</div>
      </div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Classificação</span>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label gold">Quanto à Essencialidade</span>
      <div class="lex-item"><strong>Próprios</strong> (essenciais) — saúde, segurança.</div>
      <div class="lex-item"><strong>Impróprios</strong> (não essenciais) — transporte.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label gold">Quanto aos Destinatários</span>
      <div class="lex-item"><strong>Uti universi</strong> (gerais) — iluminação pública.</div>
      <div class="lex-item"><strong>Uti singuli</strong> (individuais) — água, luz.</div>
    </div>

    <div class="lex-section">
      <span class="lex-label gold">Quanto à Obrigatoriedade</span>
      <div class="lex-item"><strong>Compulsórios</strong> — coleta de lixo.</div>
      <div class="lex-item"><strong>Facultativos</strong> — telefone.</div>
    </div>

  </div>

  <div class="lex-section">
    <span class="lex-label green">Direitos do Usuário</span>
    <div class="lex-item">Serviço adequado.</div>
    <div class="lex-item">Informação.</div>
    <div class="lex-item">Reclamação.</div>
    <div class="lex-item">Indenização por danos.</div>
  </div>

</div>`

  }

};
