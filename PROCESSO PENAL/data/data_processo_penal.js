// data/data_processo-penal.js
// Conteúdo de Processo Penal — formatado com classes lex-*

window.DA = {

  // ═══════════════════════════════════════════════════
  "Inquérito Policial - Visão Geral": {
    icon: "⚖️",
    color: "#2563eb",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⚖️</div>
    <h1 class="notion-title">Inquérito Policial — Visão Geral</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CPP</span>
      <span class="meta-tag tag-g">Procedimento Investigatório</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Conceito</span>
    <div class="lex-item">O Inquérito Policial (IP) é um procedimento administrativo investigatório, conduzido pela polícia judiciária, que tem como finalidade:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Apurar a existência da infração penal</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Identificar a autoria do crime</div>
    </div>
    <div class="lex-item">Seu objetivo é reunir elementos de informação para que o Ministério Público decida se oferece denúncia ou não.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Polícia Judiciária</span>
    <div class="lex-item">Pertence ao <strong>Poder Executivo</strong>, não ao Judiciário.</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Polícia Civil (PC)</strong> → crimes estaduais</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Polícia Federal (PF)</strong> → crimes federais</div>
    </div>
    <div class="lex-item">📌 Base legal: art. 144 da Constituição Federal</div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Importante:</strong> O inquérito não é processo, apenas fase de investigação.
  </div>

</div>`,
    flashcards: [
      { q: "O que é o Inquérito Policial?", a: "Procedimento administrativo investigatório conduzido pela polícia judiciária para apurar infração penal e identificar autoria." },
      { q: "O IP é um processo judicial?", a: "NÃO. É procedimento administrativo, apenas fase de investigação." },
      { q: "A polícia judiciária pertence a qual Poder?", a: "Poder Executivo, não ao Judiciário." },
      { q: "Qual a diferença entre PC e PF?", a: "Polícia Civil: crimes estaduais. Polícia Federal: crimes federais." }
    ],
    quiz: [
      { q: "O Inquérito Policial é:", opts: ["Processo judicial", "Procedimento administrativo investigatório", "Ação penal", "Sentença condenatória"], gabarito: 1, exp: "O IP é um procedimento administrativo investigatório, não um processo judicial." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Características do Inquérito Policial": {
    icon: "📋",
    color: "#7c3aed",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">📋</div>
    <h1 class="notion-title">Características do Inquérito Policial</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CPP</span>
      <span class="meta-tag tag-g">Mnemônico: IDOSO</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Mnemônico: I D O S O</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">I</span> <strong>Inquisitivo</strong> — Não existe contraditório pleno nem ampla defesa (ainda não há acusação formal). ⚠️ Mas existem garantias fundamentais do investigado.</div>
      <div class="lex-list-item"><span class="lex-num">D</span> <strong>Dispensável</strong> — O MP pode oferecer denúncia sem IP, se possuir provas suficientes (ex: prova documental, CPI).</div>
      <div class="lex-list-item"><span class="lex-num">O</span> <strong>Oficial</strong> — Conduzido por órgão oficial do Estado (Delegado de Polícia).</div>
      <div class="lex-list-item"><span class="lex-num">S</span> <strong>Sigiloso</strong> — Pode ser sigiloso para terceiros. ➡️ Porém, o advogado tem acesso aos autos já documentados (Súmula Vinculante 14 do STF).</div>
      <div class="lex-list-item"><span class="lex-num">O</span> <strong>Oficioso</strong> — Em crimes de ação penal pública incondicionada, a autoridade deve agir de ofício.</div>
      <div class="lex-list-item"><span class="lex-num">O</span> <strong>Indisponível</strong> — O delegado não pode arquivar o inquérito. Só o juiz, a pedido do MP.</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Atenção:</strong> O IP é dispensável — o MP pode oferecer denúncia mesmo sem inquérito, se já tiver provas suficientes.
  </div>

</div>`,
    flashcards: [
      { q: "Qual o mnemônico das características do IP?", a: "IDOSO — Inquisitivo, Dispensável, Oficial, Sigiloso, Oficioso, Indisponível." },
      { q: "O IP possui contraditório e ampla defesa plenos?", a: "NÃO. É inquisitivo. Mas existem garantias fundamentais do investigado." },
      { q: "O delegado pode arquivar o inquérito?", a: "NÃO. O IP é indisponível. Somente o juiz pode arquivar, a pedido do MP." },
      { q: "O advogado tem acesso ao inquérito sigiloso?", a: "SIM, tem acesso aos autos já documentados (Súmula Vinculante 14 do STF)." },
      { q: "O que significa o IP ser dispensável?", a: "O MP pode oferecer denúncia sem IP, se tiver provas suficientes." }
    ],
    quiz: [
      { q: "Sobre as características do IP, é CORRETO:", opts: ["O delegado pode arquivar o inquérito", "O IP possui contraditório pleno", "O IP é dispensável para o MP oferecer denúncia", "O IP é conduzido pelo Judiciário"], gabarito: 2, exp: "O IP é dispensável — o MP pode oferecer denúncia sem inquérito se tiver provas suficientes." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Instauração do Inquérito Policial": {
    icon: "🚀",
    color: "#0891b2",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🚀</div>
    <h1 class="notion-title">Instauração do Inquérito Policial</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CPP</span>
      <span class="meta-tag tag-g">Formas de Início</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Formas de Instauração</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">1</span> <strong>De ofício</strong> (ex: flagrante)</div>
      <div class="lex-list-item"><span class="lex-num">2</span> <strong>Requisição</strong> do MP ou Juiz</div>
      <div class="lex-list-item"><span class="lex-num">3</span> <strong>Requerimento do ofendido</strong> (ação penal pública condicionada ou privada)</div>
      <div class="lex-list-item"><span class="lex-num">4</span> <strong>Auto de Prisão em Flagrante (APF)</strong></div>
      <div class="lex-list-item"><span class="lex-num">5</span> <strong>Portaria do Delegado</strong></div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Notitia Criminis (Notícia do Crime)</span>
    <div class="lex-item">É a informação de que ocorreu um crime. Tipos:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Direta:</strong> Autoridade presencia.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Indireta:</strong> Informação de terceiros.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Coercitiva:</strong> Prisão em flagrante.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Inqualificada:</strong> Denúncia anônima.</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Denúncia anônima:</strong> A polícia deve verificar a veracidade <strong>antes</strong> de instaurar o inquérito.
  </div>

</div>`,
    flashcards: [
      { q: "Quais as formas de instauração do IP?", a: "De ofício, requisição do MP/Juiz, requerimento do ofendido, APF, portaria do delegado." },
      { q: "O que é Notitia Criminis inqualificada?", a: "Denúncia anônima. A polícia deve verificar a veracidade antes de instaurar o IP." },
      { q: "O juiz pode requisitar a instauração de inquérito?", a: "SIM." },
      { q: "A autoridade policial é obrigada a instaurar inquérito sempre que receber notícia de crime?", a: "NÃO. Deve verificar a procedência da notícia primeiro." }
    ],
    quiz: [
      { q: "Denúncia anônima no processo penal é chamada de:", opts: ["Notitia criminis direta", "Notitia criminis coercitiva", "Notitia criminis inqualificada", "Notitia criminis indireta"], gabarito: 2, exp: "Denúncia anônima é chamada notitia criminis inqualificada, e exige verificação prévia pela polícia." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Diligências Policiais": {
    icon: "🔍",
    color: "#059669",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔍</div>
    <h1 class="notion-title">Diligências da Polícia</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 6º CPP</span>
      <span class="meta-tag tag-g">Obrigações do Delegado</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Ao tomar conhecimento do crime, a autoridade policial DEVERÁ:</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Ir ao local e preservá-lo</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Apreender objetos</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Ouvir vítima e testemunhas</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Realizar reconhecimento e acareações</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Determinar perícias</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Investigar a vida pregressa do indiciado</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Diligência Proibida</span>
    <div class="lex-item">A reprodução simulada dos fatos <strong>pode</strong> ser realizada, mas <strong>não pode ocorrer</strong> se for contrária à <strong>moralidade</strong> ou <strong>ordem pública</strong>.</div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Atenção:</strong> O delegado <strong>não pode</strong> conduzir coercitivamente o investigado para interrogatório (segundo o STF).
  </div>

</div>`,
    flashcards: [
      { q: "Quais as diligências obrigatórias da autoridade policial (Art. 6º CPP)?", a: "Ir ao local, preservar, apreender objetos, ouvir vítima/testemunhas, reconhecimento, acareações, perícias, investigar vida pregressa do indiciado." },
      { q: "A reprodução simulada dos fatos é proibida no CPP?", a: "NÃO é proibida. Só é vedada se violar moralidade ou ordem pública." },
      { q: "O delegado pode conduzir coercitivamente o investigado para interrogatório?", a: "NÃO, segundo o STF." }
    ],
    quiz: [
      { q: "Sobre as diligências policiais, é CORRETO:", opts: ["A reprodução simulada é sempre proibida", "O delegado deve primeiro apreender, depois fazer perícia no local", "A autoridade deve preservar o local do crime", "O delegado pode conduzir coercitivamente o investigado"], gabarito: 2, exp: "A autoridade policial deve ir ao local e preservá-lo (Art. 6º CPP)." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Indiciamento": {
    icon: "🖊️",
    color: "#dc2626",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🖊️</div>
    <h1 class="notion-title">Indiciamento</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Lei 12.830/2013</span>
      <span class="meta-tag tag-g">Ato do Delegado</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Conceito</span>
    <div class="lex-item">Ato <strong>privativo do delegado</strong> (Lei 12.830/2013). É um ato técnico-jurídico e fundamentado.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Requisitos</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Provas de materialidade</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Indícios de autoria</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Circunstâncias do crime</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">O que NÃO pode</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">❌</span> O juiz <strong>não pode</strong> determinar o indiciamento.</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> O MP <strong>não pode</strong> determinar o indiciamento.</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> O indiciamento <strong>não transforma</strong> o investigado em réu (a denúncia é que o faz).</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Não exige decisão judicial.</div>
    </div>
  </div>

</div>`,
    flashcards: [
      { q: "Quem pode realizar o indiciamento?", a: "Apenas o delegado. É ato privativo (Lei 12.830/2013)." },
      { q: "O indiciamento transforma o investigado em réu?", a: "NÃO. A denúncia é que transforma o investigado em réu." },
      { q: "O juiz pode determinar indiciamento?", a: "NÃO." },
      { q: "O MP pode determinar indiciamento?", a: "NÃO." }
    ],
    quiz: [
      { q: "O indiciamento é ato privativo de quem?", opts: ["Juiz", "Ministério Público", "Delegado de Polícia", "Secretário de Segurança"], gabarito: 2, exp: "O indiciamento é ato privativo do delegado, conforme Lei 12.830/2013." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Prazos do Inquérito Policial": {
    icon: "⏱️",
    color: "#d97706",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⏱️</div>
    <h1 class="notion-title">Prazos do Inquérito Policial</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CPP</span>
      <span class="meta-tag tag-g">Prazo Procedimental</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Prazos</span>
    <div class="lex-cols">
      <div class="lex-section">
        <span class="lex-label rose">Indiciado Preso</span>
        <div class="lex-item" style="font-size:1.4em; font-weight:bold; color:#dc2626;">10 dias</div>
        <div class="lex-item">Prorrogação restrita e justificada.</div>
      </div>
      <div class="lex-section">
        <span class="lex-label green">Indiciado Solto</span>
        <div class="lex-item" style="font-size:1.4em; font-weight:bold; color:#059669;">30 dias</div>
        <div class="lex-item">Prorrogável.</div>
      </div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Observações Importantes</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> O prazo começa com a instauração do IP.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> O descumprimento do prazo <strong>não gera nulidade</strong> do processo (o IP é peça informativa).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> A extrapolação do prazo <strong>pode gerar relaxamento da prisão</strong> (se ilegal por excesso de prazo).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Leis especiais podem prever prazos diferentes (ex: Lei de Drogas).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> O prazo é <strong>procedimental</strong>, não decadencial.</div>
    </div>
  </div>

</div>`,
    flashcards: [
      { q: "Qual o prazo do IP com indiciado preso?", a: "10 dias." },
      { q: "Qual o prazo do IP com indiciado solto?", a: "30 dias, prorrogável." },
      { q: "O descumprimento do prazo do IP gera nulidade do processo?", a: "NÃO. O IP é peça informativa." },
      { q: "O prazo do IP é decadencial?", a: "NÃO. É prazo procedimental." }
    ],
    quiz: [
      { q: "O prazo do inquérito com indiciado preso é:", opts: ["5 dias", "10 dias", "30 dias", "60 dias"], gabarito: 1, exp: "O prazo do IP com indiciado preso é de 10 dias." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Arquivamento do Inquérito": {
    icon: "🗂️",
    color: "#6b7280",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🗂️</div>
    <h1 class="notion-title">Arquivamento do Inquérito</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CPP</span>
      <span class="meta-tag tag-g">Súmula 524 STF</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Regra</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">❌</span> O <strong>delegado não pode</strong> arquivar o inquérito.</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> O <strong>juiz não pode</strong> arquivar de ofício.</div>
      <div class="lex-list-item"><span class="lex-num">✔️</span> O <strong>Ministério Público pede</strong> e o <strong>Juiz decide</strong>.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Hipóteses de Arquivamento</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Falta de provas</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Inexistência do crime</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Desarquivamento</span>
    <div class="lex-item">Pode ocorrer quando surgirem <strong>novas provas</strong>.</div>
    <div class="lex-item">📌 Base: <strong>Súmula 524 do STF</strong></div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">❌</span> O arquivamento <strong>não gera coisa julgada material</strong> definitiva.</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> O arquivamento <strong>não impede</strong> nova investigação com novas provas.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Vícios no Inquérito</span>
    <div class="lex-item">Erro no inquérito <strong>não anula</strong> o processo penal, pois o IP é dispensável. As irregularidades <strong>não contaminam</strong> a ação penal.</div>
  </div>

</div>`,
    flashcards: [
      { q: "O delegado pode arquivar o inquérito?", a: "NÃO. Somente o juiz pode arquivar, a pedido do MP." },
      { q: "Erro no inquérito anula o processo penal?", a: "NÃO. O IP é dispensável, irregularidades não contaminam a ação penal." },
      { q: "O arquivamento gera coisa julgada material?", a: "NÃO. Pode ser desarquivado com novas provas (Súmula 524 STF)." },
      { q: "Qual é a base legal para o desarquivamento do IP?", a: "Súmula 524 do STF — admite desarquivamento com novas provas." }
    ],
    quiz: [
      { q: "O arquivamento do inquérito policial:", opts: ["Pode ser feito de ofício pelo delegado", "Impede qualquer nova investigação", "Pode ser revertido com novas provas (Súmula 524 STF)", "Gera coisa julgada material definitiva"], gabarito: 2, exp: "O arquivamento pode ser revertido com novas provas, conforme Súmula 524 do STF." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Acesso do Advogado e Direitos do Investigado": {
    icon: "👨‍⚖️",
    color: "#2563eb",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">👨‍⚖️</div>
    <h1 class="notion-title">Acesso do Advogado e Direitos do Investigado</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">SV 14 STF</span>
      <span class="meta-tag tag-g">Garantias Constitucionais</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Acesso do Advogado — Súmula Vinculante 14</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔️</span> Acesso aos autos e às <strong>provas já documentadas</strong>.</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> <strong>Sem acesso</strong> a diligências em andamento.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Direitos do Investigado</span>
    <div class="lex-item">Hoje o investigado é visto como <strong>sujeito de direitos</strong>, não mais objeto de investigação.</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Direito ao silêncio</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Assistência de advogado</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Respeito à dignidade</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Inquérito Policial × TCO</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Inquérito Policial:</strong> Crimes mais graves (Polícia Civil / Federal).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>TCO (Termo Circunstanciado):</strong> Infrações de menor potencial ofensivo (ex: ameaça, lesão leve).</div>
    </div>
  </div>

</div>`,
    flashcards: [
      { q: "O advogado tem acesso ao inquérito sigiloso?", a: "SIM, aos autos e provas já documentadas (SV 14 STF). Não tem acesso a diligências em andamento." },
      { q: "O investigado é sujeito ou objeto no processo penal moderno?", a: "Sujeito de direitos, com direito ao silêncio, advogado e respeito à dignidade." },
      { q: "Qual a diferença entre IP e TCO?", a: "IP: crimes mais graves (PC/PF). TCO: infrações de menor potencial ofensivo (ameaça, lesão leve)." }
    ],
    quiz: [
      { q: "Sobre o acesso do advogado ao IP sigiloso:", opts: ["Não tem acesso algum", "Tem acesso a todas as diligências, inclusive as em andamento", "Tem acesso às provas já documentadas (SV 14)", "Depende de autorização do delegado"], gabarito: 2, exp: "A Súmula Vinculante 14 garante ao advogado acesso às provas já documentadas, mas não às diligências em andamento." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Garantias Constitucionais no Processo Penal": {
    icon: "🏛️",
    color: "#7c3aed",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🏛️</div>
    <h1 class="notion-title">Garantias Constitucionais no Processo Penal</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CF/88</span>
      <span class="meta-tag tag-g">Sistema Acusatório</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Sistema Acusatório Brasileiro</span>
    <div class="lex-item">O processo penal brasileiro é <strong>acusatório</strong>, baseado em:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Devido processo legal</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Contraditório e ampla defesa</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Juiz natural</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Presunção de inocência</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Direito ao silêncio</strong> (Nemo tenetur se detegere)</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Publicidade</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Inviolabilidade de domicílio</strong></div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Atenção:</strong> O juiz <strong>não pode</strong> investigar crimes no sistema acusatório. O silêncio do acusado <strong>não pode</strong> ser usado contra ele.
  </div>

</div>`,
    flashcards: [
      { q: "Qual o sistema processual penal adotado no Brasil?", a: "Sistema acusatório." },
      { q: "O que significa 'Nemo tenetur se detegere'?", a: "Direito ao silêncio — ninguém é obrigado a produzir prova contra si mesmo." },
      { q: "O silêncio do acusado pode ser usado contra ele?", a: "NÃO." },
      { q: "O juiz pode investigar crimes?", a: "NÃO (sistema acusatório)." }
    ],
    quiz: [
      { q: "O sistema processual penal brasileiro é:", opts: ["Inquisitório", "Acusatório", "Misto", "Inquisitório-acusatório"], gabarito: 1, exp: "O processo penal brasileiro adota o sistema acusatório, com separação entre quem acusa e quem julga." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "100 Pegadinhas — Inquérito Policial": {
    icon: "🎯",
    color: "#dc2626",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🎯</div>
    <h1 class="notion-title">100 Pegadinhas de Prova — Inquérito Policial e Processo Penal</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Concursos</span>
      <span class="meta-tag tag-g">Gabarito Comentado</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">1–10 · Características do Inquérito</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">1</span> O inquérito policial é indispensável para o oferecimento da denúncia. <strong style="color:#dc2626;">❌ Errado.</strong> O IP é dispensável.</div>
      <div class="lex-list-item"><span class="lex-num">2</span> O delegado pode arquivar o inquérito policial. <strong style="color:#dc2626;">❌ Errado.</strong> Somente o juiz pode arquivar, a pedido do MP.</div>
      <div class="lex-list-item"><span class="lex-num">3</span> O IP possui contraditório e ampla defesa plenos. <strong style="color:#dc2626;">❌ Errado.</strong> É inquisitivo.</div>
      <div class="lex-list-item"><span class="lex-num">4</span> O IP é sigiloso inclusive para o advogado. <strong style="color:#dc2626;">❌ Errado.</strong> Advogado tem acesso às provas documentadas (SV 14).</div>
      <div class="lex-list-item"><span class="lex-num">5</span> O IP é um processo judicial. <strong style="color:#dc2626;">❌ Errado.</strong> É procedimento administrativo.</div>
      <div class="lex-list-item"><span class="lex-num">6</span> O delegado pode desistir do inquérito. <strong style="color:#dc2626;">❌ Errado.</strong> O IP é indisponível.</div>
      <div class="lex-list-item"><span class="lex-num">7</span> O IP é conduzido pelo Poder Judiciário. <strong style="color:#dc2626;">❌ Errado.</strong> Polícia Judiciária pertence ao Executivo.</div>
      <div class="lex-list-item"><span class="lex-num">8</span> A investigação pode ocorrer sem inquérito policial. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">9</span> O IP é escrito; todos os atos devem ser reduzidos a termo. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">10</span> O IP possui caráter inquisitivo. <strong style="color:#059669;">✔️ Correto.</strong></div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">11–20 · Instauração do Inquérito</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">11</span> A polícia pode instaurar IP de ofício em crime de ação privada. <strong style="color:#dc2626;">❌ Errado.</strong> Precisa de requerimento do ofendido.</div>
      <div class="lex-list-item"><span class="lex-num">12</span> O juiz pode requisitar instauração de inquérito. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">13</span> O MP pode requisitar instauração de inquérito. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">14</span> Denúncia anônima obriga a instauração imediata de inquérito. <strong style="color:#dc2626;">❌ Errado.</strong> Deve haver verificação prévia.</div>
      <div class="lex-list-item"><span class="lex-num">15</span> O APF pode iniciar um inquérito. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">16</span> O IP pode ser instaurado por portaria do delegado. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">17</span> Em crime de ação pública condicionada o IP depende de representação. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">18</span> O IP pode ser iniciado mediante requisição do juiz. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">19</span> A autoridade policial é obrigada a instaurar IP sempre que receber notícia de crime. <strong style="color:#dc2626;">❌ Errado.</strong> Deve verificar a procedência.</div>
      <div class="lex-list-item"><span class="lex-num">20</span> A denúncia anônima é chamada notitia criminis inqualificada. <strong style="color:#059669;">✔️ Correto.</strong></div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">21–30 · Diligências</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">21</span> A autoridade policial deve preservar o local do crime. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">22</span> A autoridade policial pode apreender objetos relacionados ao crime. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">23</span> A autoridade policial deve ouvir o indiciado. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">24</span> A reprodução simulada dos fatos é proibida no CPP. <strong style="color:#dc2626;">❌ Errado.</strong> Só é proibida se violar moralidade ou ordem pública.</div>
      <div class="lex-list-item"><span class="lex-num">25</span> O delegado pode determinar perícia. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">26</span> O delegado pode conduzir coercitivamente o investigado para interrogatório. <strong style="color:#dc2626;">❌ Errado</strong> (segundo STF).</div>
      <div class="lex-list-item"><span class="lex-num">27</span> A autoridade policial pode realizar reconhecimento de pessoas. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">28</span> A polícia pode realizar acareação. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">29</span> O delegado deve investigar a vida pregressa do indiciado. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">30</span> A autoridade policial pode apreender objetos antes da perícia. <strong style="color:#dc2626;">❌ Errado.</strong> Primeiro a perícia no local.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">31–40 · Indiciamento</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">31</span> O indiciamento é ato privativo do delegado. <strong style="color:#059669;">✔️ Correto.</strong> (Lei 12.830/13)</div>
      <div class="lex-list-item"><span class="lex-num">32</span> O juiz pode determinar o indiciamento. <strong style="color:#dc2626;">❌ Errado.</strong></div>
      <div class="lex-list-item"><span class="lex-num">33</span> O MP pode determinar indiciamento. <strong style="color:#dc2626;">❌ Errado.</strong></div>
      <div class="lex-list-item"><span class="lex-num">34</span> O indiciamento deve ser fundamentado. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">35</span> O indiciamento depende de prova de materialidade e indícios de autoria. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">36</span> O indiciamento transforma o investigado em réu. <strong style="color:#dc2626;">❌ Errado.</strong> A denúncia é que transforma.</div>
      <div class="lex-list-item"><span class="lex-num">37</span> O indiciamento ocorre após investigação. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">38</span> O delegado pode deixar de indiciar se não houver provas. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">39</span> O indiciamento ocorre por despacho técnico-jurídico. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">40</span> O indiciamento exige decisão judicial. <strong style="color:#dc2626;">❌ Errado.</strong></div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">41–50 · Prazos</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">41</span> Inquérito com indiciado preso → prazo de 10 dias. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">42</span> Inquérito com indiciado solto → prazo de 30 dias. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">43</span> O prazo com indiciado solto pode ser prorrogado. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">44</span> O prazo com preso pode ser prorrogado livremente. <strong style="color:#dc2626;">❌ Errado.</strong> As prorrogações são restritas e devem ser justificadas.</div>
      <div class="lex-list-item"><span class="lex-num">45</span> O descumprimento do prazo gera nulidade do processo. <strong style="color:#dc2626;">❌ Errado.</strong> O IP é peça informativa.</div>
      <div class="lex-list-item"><span class="lex-num">46</span> O prazo do IP começa com a instauração. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">47</span> O prazo do IP é improrrogável quando o indiciado está solto. <strong style="color:#dc2626;">❌ Errado.</strong> Pode ser prorrogado.</div>
      <div class="lex-list-item"><span class="lex-num">48</span> O prazo do IP pode variar em leis especiais. <strong style="color:#059669;">✔️ Correto</strong> (ex: Lei de Drogas).</div>
      <div class="lex-list-item"><span class="lex-num">49</span> A extrapolação do prazo pode gerar relaxamento da prisão. <strong style="color:#059669;">✔️ Correto</strong> (se a prisão for ilegal por excesso de prazo).</div>
      <div class="lex-list-item"><span class="lex-num">50</span> O prazo do inquérito é decadencial. <strong style="color:#dc2626;">❌ Errado.</strong> É prazo procedimental.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">51–60 · Arquivamento</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">51</span> O arquivamento depende de pedido do MP. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">52</span> O juiz pode arquivar de ofício. <strong style="color:#dc2626;">❌ Errado.</strong></div>
      <div class="lex-list-item"><span class="lex-num">53</span> O arquivamento pode ocorrer por falta de provas. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">54</span> O arquivamento pode ocorrer por inexistência do crime. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">55</span> O arquivamento impede nova investigação. <strong style="color:#dc2626;">❌ Errado</strong> (com novas provas).</div>
      <div class="lex-list-item"><span class="lex-num">56</span> O arquivamento pode ser revisto com novas provas. <strong style="color:#059669;">✔️ Correto.</strong> (Súmula 524 STF)</div>
      <div class="lex-list-item"><span class="lex-num">57</span> O delegado pode arquivar o IP se entender que não houve crime. <strong style="color:#dc2626;">❌ Errado.</strong></div>
      <div class="lex-list-item"><span class="lex-num">58</span> O arquivamento pode ser requerido pelo MP. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">59</span> O arquivamento gera coisa julgada material. <strong style="color:#dc2626;">❌ Errado.</strong> Pode ser desarquivado com novas provas.</div>
      <div class="lex-list-item"><span class="lex-num">60</span> O arquivamento impede denúncia futura com novas provas. <strong style="color:#dc2626;">❌ Errado.</strong> Justamente o oposto.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">61–70 · Provas</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">61</span> Confissão é prova absoluta. <strong style="color:#dc2626;">❌ Errado.</strong></div>
      <div class="lex-list-item"><span class="lex-num">62</span> A prova ilícita é inadmissível. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">63</span> Prova ilícita pode contaminar outras provas. <strong style="color:#059669;">✔️ Correto</strong> (teoria dos frutos da árvore envenenada).</div>
      <div class="lex-list-item"><span class="lex-num">64</span> Testemunha pode mentir em processo penal. <strong style="color:#dc2626;">❌ Errado</strong> (crime de falso testemunho).</div>
      <div class="lex-list-item"><span class="lex-num">65</span> O exame de corpo de delito é obrigatório em crimes que deixam vestígios. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">66</span> A confissão dispensa outras provas. <strong style="color:#dc2626;">❌ Errado.</strong></div>
      <div class="lex-list-item"><span class="lex-num">67</span> O juiz forma sua convicção pela livre apreciação da prova. <strong style="color:#059669;">✔️ Correto</strong> (livre convencimento motivado).</div>
      <div class="lex-list-item"><span class="lex-num">68</span> Provas ilícitas podem ser usadas para absolver o réu. <strong style="color:#059669;">✔️ Correto</strong> (pro reo).</div>
      <div class="lex-list-item"><span class="lex-num">69</span> A prova pericial é obrigatória quando há vestígios. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">70</span> A ausência de perícia pode gerar nulidade. <strong style="color:#059669;">✔️ Correto</strong> (se era o meio adequado de prova).</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">71–80 · Prisões</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">71</span> Prisão em flagrante depende de ordem judicial. <strong style="color:#dc2626;">❌ Errado.</strong></div>
      <div class="lex-list-item"><span class="lex-num">72</span> Qualquer pessoa pode prender em flagrante. <strong style="color:#059669;">✔️ Correto</strong> (qualquer do povo, em algumas situações).</div>
      <div class="lex-list-item"><span class="lex-num">73</span> Prisão preventiva pode ocorrer na investigação. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">74</span> Prisão preventiva exige requisitos legais. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">75</span> Prisão temporária só ocorre na investigação. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">76</span> Prisão preventiva é automática em crimes graves. <strong style="color:#dc2626;">❌ Errado.</strong> Depende de decisão judicial fundamentada.</div>
      <div class="lex-list-item"><span class="lex-num">77</span> O juiz pode converter flagrante em preventiva. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">78</span> A prisão preventiva pode ser substituída por medidas cautelares. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">79</span> A prisão temporária é decretada pelo delegado. <strong style="color:#dc2626;">❌ Errado.</strong> Pelo juiz, a requerimento do MP ou representação da autoridade policial.</div>
      <div class="lex-list-item"><span class="lex-num">80</span> A prisão preventiva pode ser revogada. <strong style="color:#059669;">✔️ Correto.</strong></div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">81–90 · Ação Penal</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">81</span> A ação penal pública é proposta pelo MP. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">82</span> A ação penal privada é proposta pela vítima. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">83</span> O prazo para queixa-crime é 6 meses. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">84</span> A vítima pode desistir da ação penal pública. <strong style="color:#dc2626;">❌ Errado.</strong> É indisponível para o MP.</div>
      <div class="lex-list-item"><span class="lex-num">85</span> A renúncia extingue a punibilidade. <strong style="color:#059669;">✔️ Correto</strong> (na ação penal privada).</div>
      <div class="lex-list-item"><span class="lex-num">86</span> O perdão do ofendido pode extinguir a punibilidade. <strong style="color:#059669;">✔️ Correto</strong> (na ação penal privada, se aceito).</div>
      <div class="lex-list-item"><span class="lex-num">87</span> A decadência extingue o direito de ação. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">88</span> A representação pode ser retratada até a denúncia. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">89</span> O MP pode desistir da ação penal. <strong style="color:#dc2626;">❌ Errado</strong> (princípio da indisponibilidade).</div>
      <div class="lex-list-item"><span class="lex-num">90</span> O MP pode pedir absolvição. <strong style="color:#059669;">✔️ Correto</strong> (se, durante a instrução, convencer-se da inocência do réu).</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">91–100 · Pegadinhas Gerais</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">91</span> O inquérito produz prova judicial. <strong style="color:#dc2626;">❌ Errado.</strong> Produz elementos informativos.</div>
      <div class="lex-list-item"><span class="lex-num">92</span> O juiz pode investigar crimes. <strong style="color:#dc2626;">❌ Errado</strong> (sistema acusatório).</div>
      <div class="lex-list-item"><span class="lex-num">93</span> O juiz deve ser imparcial. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">94</span> O processo penal brasileiro é acusatório. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">95</span> A investigação criminal é exclusiva da polícia. <strong style="color:#dc2626;">❌ Errado.</strong> MP também pode investigar.</div>
      <div class="lex-list-item"><span class="lex-num">96</span> O investigado é sujeito de direitos. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">97</span> O investigado tem direito ao silêncio. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">98</span> O silêncio do acusado pode ser usado contra ele. <strong style="color:#dc2626;">❌ Errado.</strong></div>
      <div class="lex-list-item"><span class="lex-num">99</span> A polícia pertence ao Poder Executivo. <strong style="color:#059669;">✔️ Correto.</strong></div>
      <div class="lex-list-item"><span class="lex-num">100</span> O inquérito policial pode ser dispensado. <strong style="color:#059669;">✔️ Correto.</strong></div>
    </div>
  </div>

</div>`,
    flashcards: [
      { q: "O IP produz prova judicial?", a: "NÃO. Produz elementos informativos (indícios de autoria, materialidade)." },
      { q: "A investigação criminal é exclusiva da polícia?", a: "NÃO. O MP também pode investigar." },
      { q: "O silêncio do acusado pode ser usado contra ele?", a: "NÃO." },
      { q: "Confissão é prova absoluta?", a: "NÃO. Deve ser corroborada por outros elementos de prova." },
      { q: "Prisão em flagrante exige ordem judicial?", a: "NÃO." }
    ],
    quiz: [
      { q: "Sobre provas no processo penal, é CORRETO:", opts: ["Confissão é prova absoluta", "Prova ilícita pode ser usada para condenar", "Prova ilícita pode contaminar outras provas (frutos da árvore envenenada)", "O juiz não tem liberdade na apreciação das provas"], gabarito: 2, exp: "A teoria dos frutos da árvore envenenada prevê que a prova ilícita pode contaminar provas derivadas dela." },
      { q: "A prisão temporária é decretada por:", opts: ["Delegado de Polícia", "Ministério Público", "Juiz, a requerimento do MP ou representação da autoridade policial", "Secretário de Segurança"], gabarito: 2, exp: "A prisão temporária é decretada pelo juiz, a requerimento do MP ou representação da autoridade policial." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Diligências da Autoridade Policial (Art. 6º CPP)": {
    icon: "🔎",
    color: "#059669",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔎</div>
    <h1 class="notion-title">Diligências da Autoridade Policial</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 6º e 7º CPP</span>
      <span class="meta-tag tag-g">Obrigações do Delegado</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Art. 6º — Diligências Obrigatórias</span>
    <div class="lex-item">Logo que tiver conhecimento da prática da infração, a autoridade policial <strong>deverá</strong>:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">I</span> <strong>Dirigir-se ao local</strong> e providenciar para que não se alterem o estado e a conservação das coisas, até a chegada dos peritos.</div>
      <div class="lex-list-item"><span class="lex-num">II</span> <strong>Apreender</strong> os objetos que tiverem relação com o fato, após liberação dos peritos.</div>
      <div class="lex-list-item"><span class="lex-num">III</span> <strong>Colher</strong> todas as provas que servirem para o esclarecimento do fato e suas circunstâncias.</div>
      <div class="lex-list-item"><span class="lex-num">IV</span> <strong>Ouvir o ofendido</strong> (vítima).</div>
      <div class="lex-list-item"><span class="lex-num">V</span> <strong>Ouvir o indiciado</strong>, com observância, no que for aplicável, do disposto no Capítulo III do Título VII (garantias do interrogando).</div>
      <div class="lex-list-item"><span class="lex-num">VI</span> <strong>Proceder a reconhecimento</strong> de pessoas e coisas e a acareações.</div>
      <div class="lex-list-item"><span class="lex-num">VII</span> <strong>Determinar</strong>, se for caso, que se proceda a exame de corpo de delito e a quaisquer outras perícias.</div>
      <div class="lex-list-item"><span class="lex-num">VIII</span> <strong>Ordenar</strong> a identificação do indiciado pelo processo datiloscópico (digital), se possível, e fazer juntar aos autos sua folha de antecedentes, instruindo-os com estes.</div>
      <div class="lex-list-item"><span class="lex-num">IX</span> <strong>Averiguar</strong> a vida pregressa do indiciado, sob o ponto de vista individual, familiar e social, sua condição econômica, sua atitude e estado de ânimo antes e depois do crime.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Art. 7º — Reprodução Simulada dos Fatos</span>
    <div class="lex-item">Para verificar a possibilidade de ter sido a infração praticada de determinado modo, a autoridade policial <strong>poderá</strong> proceder à reprodução simulada dos fatos, desde que:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔️</span> Não contrarie a <strong>moralidade</strong> ou a <strong>ordem pública</strong>.</div>
    </div>
    <div class="lex-item">📌 A reprodução simulada <strong>NÃO é proibida</strong>. É vedada apenas se ofender a moralidade ou ordem pública.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Ordem Correta das Diligências no Local</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">1º</span> Preservar o local</div>
      <div class="lex-list-item"><span class="lex-num">2º</span> Perícia no local (peritos trabalham primeiro)</div>
      <div class="lex-list-item"><span class="lex-num">3º</span> Apreensão dos objetos (após liberação dos peritos)</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha de prova:</strong> A autoridade policial NÃO pode apreender os objetos ANTES da perícia no local. A apreensão ocorre <strong>após</strong> a liberação dos peritos.
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Limitações do Delegado — Jurisprudência STF</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">❌</span> Não pode <strong>conduzir coercitivamente</strong> o investigado para interrogatório (STF — não há obrigação de comparecer para ser ouvido).</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Não pode <strong>arquivar</strong> o inquérito (ato exclusivo do juiz, a pedido do MP).</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Não pode <strong>decretar prisão preventiva</strong> (ato exclusivo do juiz).</div>
      <div class="lex-list-item"><span class="lex-num">✔️</span> Pode <strong>representar</strong> ao juiz pela decretação da prisão temporária ou preventiva.</div>
      <div class="lex-list-item"><span class="lex-num">✔️</span> Pode <strong>indiciare</strong> o suspeito (ato privativo — Lei 12.830/2013).</div>
    </div>
  </div>

</div>`,
    flashcards: [
      { q: "Qual é a ordem correta das diligências no local do crime?", a: "1º Preservar o local → 2º Perícia (peritos trabalham) → 3º Apreensão dos objetos (após liberação dos peritos)." },
      { q: "A reprodução simulada dos fatos é proibida no CPP?", a: "NÃO. É permitida pelo Art. 7º CPP. Só é vedada se contrariar a moralidade ou a ordem pública." },
      { q: "O delegado pode conduzir coercitivamente o investigado para interrogatório?", a: "NÃO, segundo o STF. O investigado não é obrigado a comparecer para ser ouvido." },
      { q: "O que o delegado DEVE fazer ao tomar conhecimento do crime? (resumo Art. 6º)", a: "Ir ao local, preservar, coletar provas, ouvir vítima e indiciado, reconhecimento, acareações, perícias, identificação datiloscópica, averiguar vida pregressa do indiciado." },
      { q: "O delegado pode apreender objetos antes da perícia no local?", a: "NÃO. A apreensão ocorre APÓS a liberação dos peritos (Art. 6º, II, CPP)." },
      { q: "O delegado pode representar ao juiz pela prisão temporária?", a: "SIM. A representação é ato do delegado; a decretação é ato exclusivo do juiz." }
    ],
    quiz: [
      {
        q: "Conforme o Art. 6º do CPP, a apreensão dos objetos relacionados ao fato deve ocorrer:",
        opts: ["Antes da chegada dos peritos, para preservar a cadeia de custódia", "Simultaneamente à perícia, para agilizar o processo", "Após a liberação dos peritos criminais", "Somente mediante ordem judicial"],
        gabarito: 2,
        exp: "O Art. 6º, II, CPP estabelece que a apreensão ocorre após a liberação dos peritos — primeiro preserva-se o local para a perícia."
      },
      {
        q: "A reprodução simulada dos fatos (Art. 7º CPP) é:",
        opts: ["Sempre proibida no processo penal", "Permitida, salvo se contrariar a moralidade ou a ordem pública", "Privativa do Ministério Público", "Dependente de autorização judicial"],
        gabarito: 1,
        exp: "O Art. 7º CPP autoriza a reprodução simulada, vedando-a apenas quando contrarie a moralidade ou a ordem pública."
      },
      {
        q: "Sobre as diligências da autoridade policial, é INCORRETO afirmar:",
        opts: ["O delegado deve ouvir o ofendido", "O delegado pode determinar perícias", "O delegado pode apreender objetos após liberação dos peritos", "O delegado pode conduzir coercitivamente o investigado para interrogatório"],
        gabarito: 3,
        exp: "Segundo o STF, o delegado NÃO pode conduzir coercitivamente o investigado para interrogatório, pois o investigado tem direito ao silêncio e não está obrigado a comparecer."
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Características do IP — Análise Aprofundada": {
    icon: "📋",
    color: "#7c3aed",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">📋</div>
    <h1 class="notion-title">Características do Inquérito Policial — Análise Aprofundada</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CPP</span>
      <span class="meta-tag tag-g">Mnemônico: IDOSOEI</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Mnemônico Completo: I · D · O · S · O · E · I</span>

    <div class="lex-list">
      <div class="lex-list-item">
        <span class="lex-num">I</span>
        <strong>Inquisitivo</strong> — Não há contraditório pleno nem ampla defesa durante o IP (não existe acusação formal ainda). O investigado não é réu. <br>
        ⚠️ <em>Atenção:</em> Apesar de inquisitivo, o investigado tem garantias fundamentais: direito ao silêncio, assistência de advogado, não ser submetido a tortura etc.
      </div>
      <div class="lex-list-item">
        <span class="lex-num">D</span>
        <strong>Dispensável</strong> — O MP pode oferecer denúncia sem IP, se já tiver elementos suficientes (ex: CPI, laudo, prova documental). O IP é peça informativa, não condição de procedibilidade da ação penal.
      </div>
      <div class="lex-list-item">
        <span class="lex-num">O</span>
        <strong>Oficial</strong> — Conduzido por órgão oficial do Estado: o Delegado de Polícia (bacharel em Direito, por força da Lei 12.830/2013). Não pode ser conduzido por particular.
      </div>
      <div class="lex-list-item">
        <span class="lex-num">S</span>
        <strong>Sigiloso</strong> — O IP pode ser decretado sigiloso pela autoridade policial ou pelo juiz. <br>
        📌 <strong>Súmula Vinculante 14 STF:</strong> O sigilo não afasta o acesso do advogado constituído aos autos já documentados e às provas já colhidas. O sigilo não alcança diligências em andamento.
      </div>
      <div class="lex-list-item">
        <span class="lex-num">O</span>
        <strong>Oficioso (Obrigatoriedade)</strong> — Em crimes de ação penal pública incondicionada, a autoridade deve agir de ofício ao tomar conhecimento do crime. Não depende de requerimento. <br>
        ⚠️ Em crimes de ação penal pública condicionada ou privada, depende de representação ou requerimento.
      </div>
      <div class="lex-list-item">
        <span class="lex-num">E</span>
        <strong>Escrito</strong> — Todos os atos do IP devem ser reduzidos a escrito (reduzidos a termo). Art. 9º CPP.
      </div>
      <div class="lex-list-item">
        <span class="lex-num">I</span>
        <strong>Indisponível</strong> — A autoridade policial NÃO pode arquivar o IP. Mesmo que entenda que não houve crime, deve encaminhar os autos ao MP. Somente o juiz arquiva, a pedido do MP. Art. 17 CPP.
      </div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Natureza Jurídica do IP</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Procedimento administrativo</strong> (não é processo judicial).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Investigativo</strong> (não acusatório).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Pertence ao <strong>Poder Executivo</strong> (polícia judiciária).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Produz <strong>elementos informativos</strong>, não provas judiciais plenas.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Valor Probatório do IP no Processo</span>
    <div class="lex-item">O IP produz <strong>elementos informativos</strong>, não provas judiciais. Porém:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> O juiz pode fundamentar a condenação em elementos do IP <strong>desde que</strong> confirmados em juízo sob contraditório.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Provas irrepetíveis colhidas no IP (ex: exame de corpo de delito) têm valor probatório pleno.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> A confissão no IP, sozinha, não é suficiente para condenar.</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha clássica:</strong> "O IP é sigiloso, portanto o advogado não pode ter acesso." — <strong>ERRADO!</strong> A SV 14 do STF garante acesso do advogado aos autos documentados.
  </div>

</div>`,
    flashcards: [
      { q: "O que significa o IP ser 'inquisitivo'?", a: "Não há contraditório pleno nem ampla defesa no IP. Mas o investigado mantém suas garantias fundamentais (silêncio, advogado, dignidade)." },
      { q: "O que significa o IP ser 'dispensável'?", a: "O MP pode oferecer denúncia sem inquérito, se já tiver provas suficientes. O IP não é condição de procedibilidade da ação penal." },
      { q: "O que significa o IP ser 'oficioso'?", a: "Em crimes de ação penal pública incondicionada, a autoridade age de ofício, sem precisar de provocação." },
      { q: "O que a Súmula Vinculante 14 do STF garante ao advogado?", a: "Acesso aos autos do IP já documentados e às provas já colhidas, mesmo que o inquérito seja sigiloso. Não abrange diligências em andamento." },
      { q: "O IP é escrito? Base legal?", a: "SIM. Todos os atos devem ser reduzidos a termo. Art. 9º CPP." },
      { q: "O valor probatório do IP: o IP produz provas ou elementos informativos?", a: "Elementos informativos. Provas judiciais plenas só se formam sob contraditório. Exceto provas irrepetíveis (ex: exame de corpo de delito)." },
      { q: "Qual o mnemônico completo das características do IP?", a: "IDOSOEI — Inquisitivo, Dispensável, Oficial, Sigiloso, Oficioso, Escrito, Indisponível." }
    ],
    quiz: [
      {
        q: "Sobre o sigilo do Inquérito Policial, à luz da Súmula Vinculante 14 do STF:",
        opts: [
          "O advogado não tem acesso algum ao IP sigiloso",
          "O advogado tem acesso às diligências em andamento",
          "O advogado tem acesso às provas já documentadas, mas não às diligências em andamento",
          "O sigilo do IP é absoluto e vincula inclusive o Poder Judiciário"
        ],
        gabarito: 2,
        exp: "A SV 14 STF garante ao advogado acesso aos autos e provas já documentadas. Diligências em andamento estão fora do alcance, para não comprometer a investigação."
      },
      {
        q: "Conforme o Art. 17 CPP, o Inquérito Policial é indisponível porque:",
        opts: [
          "O juiz pode arquivá-lo de ofício",
          "A autoridade policial não pode arquivá-lo",
          "O MP pode arquivá-lo sem autorização judicial",
          "O delegado pode encerrar a investigação por portaria"
        ],
        gabarito: 1,
        exp: "O Art. 17 CPP veda ao delegado arquivar o IP. Mesmo entendendo que não houve crime, deve encaminhar ao MP. O arquivamento é ato do juiz, a pedido do MP."
      },
      {
        q: "O IP produz:",
        opts: [
          "Provas judiciais com valor pleno para condenação isolada",
          "Elementos informativos, não provas judiciais, salvo provas irrepetíveis",
          "Prova absoluta quando há confissão do indiciado",
          "Sentença condenatória direta, se houver flagrante"
        ],
        gabarito: 1,
        exp: "O IP produz elementos informativos. Provas plenas se formam sob contraditório em juízo. Exceção: provas irrepetíveis (ex: exame de corpo de delito) têm valor probatório próprio."
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  "ANPP — Acordo de Não Persecução Penal": {
    icon: "🤝",
    color: "#0891b2",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🤝</div>
    <h1 class="notion-title">ANPP — Acordo de Não Persecução Penal</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 28-A CPP</span>
      <span class="meta-tag tag-g">Lei 13.964/2019 — Pacote Anticrime</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Conceito</span>
    <div class="lex-item">O ANPP é um <strong>negócio jurídico pré-processual</strong> firmado entre o <strong>Ministério Público</strong> e o <strong>investigado</strong> (assistido por advogado), antes do oferecimento da denúncia, como alternativa ao processo penal.</div>
    <div class="lex-item">📌 Base legal: <strong>Art. 28-A do CPP</strong>, introduzido pela Lei 13.964/2019 (Pacote Anticrime).</div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Requisitos para o ANPP</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">1</span> Crime sem violência ou grave ameaça à pessoa.</div>
      <div class="lex-list-item"><span class="lex-num">2</span> Pena mínima <strong>inferior a 4 anos</strong>.</div>
      <div class="lex-list-item"><span class="lex-num">3</span> O investigado deve ter <strong>confessado formal e circunstanciadamente</strong> a prática do delito.</div>
      <div class="lex-list-item"><span class="lex-num">4</span> O acordo deve ser suficiente e necessário para reprovar e prevenir o crime.</div>
      <div class="lex-list-item"><span class="lex-num">5</span> O investigado deve estar <strong>assistido por advogado</strong>.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Cabimento — Quando NÃO cabe ANPP</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">❌</span> Crime cometido com <strong>violência ou grave ameaça</strong>.</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Pena mínima <strong>igual ou superior a 4 anos</strong>.</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Crimes praticados <strong>no âmbito de violência doméstica e familiar</strong> (Lei Maria da Penha).</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Reincidente ou que tenha elementos que indiquem conduta criminal habitual, reiterada ou profissional.</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Investigado que <strong>já tenha celebrado ANPP</strong>, transação penal ou suspensão condicional do processo nos 5 anos anteriores.</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Crimes militares.</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Contravenções penais (não expressamente, mas pela pena mínima a maioria cabe no JECRIM).</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Condições do ANPP (Art. 28-A, §1º CPP)</span>
    <div class="lex-item">O MP pode propor que o investigado, cumulativa ou alternativamente:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">I</span> <strong>Reparar o dano</strong> ou restituir a coisa à vítima, salvo impossibilidade justificada.</div>
      <div class="lex-list-item"><span class="lex-num">II</span> <strong>Renunciar voluntariamente a bens e direitos</strong> indicados pelo MP como instrumentos ou produto do crime.</div>
      <div class="lex-list-item"><span class="lex-num">III</span> <strong>Prestar serviços à comunidade</strong> ou entidades públicas por período correspondente à pena mínima, diminuída de 1/3 a 2/3.</div>
      <div class="lex-list-item"><span class="lex-num">IV</span> <strong>Pagar prestação pecuniária</strong> a entidade pública ou de interesse social.</div>
      <div class="lex-list-item"><span class="lex-num">V</span> <strong>Cumprir outra condição</strong> indicada pelo MP, desde que proporcional e compatível com a infração penal imputada.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Procedimento do ANPP</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">1º</span> MP propõe o acordo ao investigado assistido por advogado.</div>
      <div class="lex-list-item"><span class="lex-num">2º</span> Acordo é firmado por escrito.</div>
      <div class="lex-list-item"><span class="lex-num">3º</span> Juiz <strong>homologa</strong> o acordo (não pode alterar as condições).</div>
      <div class="lex-list-item"><span class="lex-num">4º</span> Juiz pode <strong>recusar</strong> a homologação se não estiverem preenchidos os requisitos legais.</div>
      <div class="lex-list-item"><span class="lex-num">5º</span> Cumpridas as condições → MP pede a <strong>extinção da punibilidade</strong>.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Descumprimento do ANPP</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> O MP pode <strong>revogar o acordo</strong> e oferecer denúncia.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> A confissão feita no ANPP <strong>não pode ser usada como prova</strong> contra o investigado em processo penal posterior, se o acordo for revogado.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Efeitos do ANPP Cumprido</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔️</span> <strong>Extinção da punibilidade</strong> (declarada pelo juiz).</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Não gera reincidência.</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Não consta na certidão de antecedentes criminais.</div>
      <div class="lex-list-item"><span class="lex-num">✔️</span> Pode ser considerado como <strong>antecedente criminal</strong> para não celebração de novo acordo pelo prazo de 5 anos.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">ANPP × Suspensão Condicional do Processo × Transação Penal</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Transação penal (Lei 9.099/95):</strong> Infrações de menor potencial ofensivo (pena máxima até 2 anos). JECRIM. Antes do oferecimento da denúncia.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Suspensão condicional do processo (SURSIS processual):</strong> Pena mínima até 1 ano. Após recebimento da denúncia.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>ANPP:</strong> Pena mínima inferior a 4 anos, sem violência ou grave ameaça. Antes da denúncia.</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Atenção:</strong> O ANPP não é direito subjetivo do investigado. O MP pode deixar de propô-lo se entender que não é suficiente ou necessário para reprovar e prevenir o crime, mediante fundamentação.
  </div>

</div>`,
    flashcards: [
      { q: "O que é o ANPP?", a: "Acordo de Não Persecução Penal — negócio jurídico pré-processual firmado entre MP e investigado (art. 28-A CPP, Pacote Anticrime 2019)." },
      { q: "Qual a pena mínima para caber ANPP?", a: "Inferior a 4 anos, desde que sem violência ou grave ameaça." },
      { q: "O ANPP cabe em crimes de violência doméstica?", a: "NÃO. É expressamente vedado (art. 28-A, §2º, II CPP)." },
      { q: "Quem homologa o ANPP?", a: "O juiz. Ele pode recusar a homologação se os requisitos não estiverem preenchidos, mas não pode alterar as condições." },
      { q: "O ANPP cumprido gera reincidência?", a: "NÃO. Gera extinção da punibilidade, sem reincidência e sem registro na certidão de antecedentes." },
      { q: "A confissão feita no ANPP pode ser usada contra o investigado se o acordo for revogado?", a: "NÃO. A confissão prestada no ANPP não pode ser utilizada como prova em processo penal posterior." },
      { q: "Qual a diferença entre ANPP e suspensão condicional do processo?", a: "ANPP: antes da denúncia, pena mínima < 4 anos. SURSIS processual: após o recebimento da denúncia, pena mínima até 1 ano." },
      { q: "O ANPP é direito subjetivo do investigado?", a: "NÃO. O MP pode deixar de propô-lo, com fundamentação." }
    ],
    quiz: [
      {
        q: "Para o ANPP ser cabível, entre outros requisitos, é necessário que:",
        opts: [
          "A pena mínima seja inferior a 2 anos",
          "A pena mínima seja inferior a 4 anos e o crime seja sem violência ou grave ameaça",
          "O crime seja de ação penal privada",
          "A pena mínima seja superior a 4 anos, para crimes graves"
        ],
        gabarito: 1,
        exp: "O Art. 28-A CPP exige pena mínima inferior a 4 anos e crime sem violência ou grave ameaça à pessoa."
      },
      {
        q: "O Acordo de Não Persecução Penal (ANPP), quando cumprido integralmente, produz:",
        opts: [
          "Condenação com pena suspensa",
          "Extinção da punibilidade",
          "Reincidência após 5 anos",
          "Arquivamento do processo sem extinção da punibilidade"
        ],
        gabarito: 1,
        exp: "O cumprimento integral do ANPP leva à extinção da punibilidade (art. 28-A, §13 CPP), sem gerar reincidência."
      },
      {
        q: "O ANPP NÃO é cabível em crimes praticados:",
        opts: [
          "Sem violência, com pena mínima de 3 anos",
          "No âmbito de violência doméstica e familiar",
          "Com pena mínima de 1 ano",
          "De ação penal pública incondicionada"
        ],
        gabarito: 1,
        exp: "O art. 28-A, §2º, II CPP veda expressamente o ANPP nos crimes cometidos no âmbito de violência doméstica e familiar ou contra a mulher."
      },
      {
        q: "Sobre a confissão prestada no ANPP, é correto afirmar:",
        opts: [
          "Pode ser usada como prova em processo penal posterior mesmo se o acordo for revogado",
          "Não pode ser utilizada como prova contra o investigado em processo penal posterior",
          "É prova absoluta de culpa no processo penal",
          "Equivale à confissão judicial para todos os efeitos"
        ],
        gabarito: 1,
        exp: "A confissão feita no âmbito do ANPP não pode ser usada como prova em processo penal caso o acordo seja rescindido, protegendo o direito do investigado."
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Ação Penal — Completo": {
    icon: "⚔️",
    color: "#dc2626",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⚔️</div>
    <h1 class="notion-title">Ação Penal</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CPP · CP · CF/88</span>
      <span class="meta-tag tag-g">Classificação Completa</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">1. Conceito</span>
    <div class="lex-item">Ação penal é o <strong>direito de pedir ao Estado-Juiz</strong> a aplicação do Direito Penal ao caso concreto. Divide-se em:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Ação Penal Pública</strong> — titularidade do Ministério Público.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Ação Penal Privada</strong> — titularidade do ofendido (ou seu representante legal).</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">2. Ação Penal Pública</span>

    <div class="lex-item"><strong>2.1 Incondicionada</strong></div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> O MP age de ofício, <strong>independente de representação da vítima</strong>.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> É a <strong>regra geral</strong> no processo penal.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Ex: homicídio, roubo, estupro (após lei 13.718/2018).</div>
    </div>

    <div class="lex-item"><strong>2.2 Condicionada à Representação</strong></div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Depende de <strong>representação da vítima</strong> (ou de seu representante legal).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Ex: ameaça (art. 147 CP), lesão corporal leve (Lei 9.099/95), alguns crimes contra a honra.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Prazo para representar: <strong>6 meses</strong> a contar do conhecimento da autoria.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Retratação da representação: possível <strong>até o oferecimento da denúncia</strong>.</div>
    </div>

    <div class="lex-item"><strong>2.3 Condicionada à Requisição do Ministro da Justiça</strong></div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Ex: crimes contra a honra do Presidente da República e chefes de governo estrangeiro.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">3. Ação Penal Privada</span>

    <div class="lex-item"><strong>3.1 Privada Exclusiva (Propriamente Dita)</strong></div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Proposta por <strong>queixa-crime</strong> pelo ofendido.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Prazo decadencial: <strong>6 meses</strong> a contar do conhecimento da autoria.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Ex: crimes contra a honra (calúnia, difamação, injúria — regra geral), violação de direito autoral.</div>
    </div>

    <div class="lex-item"><strong>3.2 Privada Subsidiária da Pública (Art. 5º, LIX, CF/88)</strong></div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Quando o MP fica <strong>inerte</strong> (não oferece denúncia, não pede arquivamento, não requisita diligências) no prazo legal.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> A vítima pode ajuizar <strong>queixa subsidiária</strong>.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> O MP não perde a titularidade — pode intervir, aditar, retomar como parte principal.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Prazo: 6 meses após o esgotamento do prazo do MP.</div>
    </div>

    <div class="lex-item"><strong>3.3 Personalíssima</strong></div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Somente o ofendido pode propor — <strong>não pode ser cedida</strong> nem mesmo aos herdeiros.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Ex: induzimento a erro essencial e ocultação de impedimento no casamento (art. 236 CP).</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">4. Princípios da Ação Penal Pública</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Obrigatoriedade (legalidade):</strong> O MP é obrigado a oferecer denúncia se presentes os indícios necessários (não pode discricionariamente deixar de agir).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Indisponibilidade:</strong> O MP não pode desistir da ação penal pública já proposta.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Oficialidade:</strong> A ação é promovida por órgão oficial do Estado (MP).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Oficiosidade:</strong> O MP age de ofício, sem depender de provocação (na incondicionada).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Divisibilidade:</strong> O MP pode oferecer denúncia contra apenas um dos autores, para investigar os demais.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Intranscendência:</strong> A ação só pode ser proposta contra o autor do crime, não contra terceiros.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">5. Princípios da Ação Penal Privada</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Oportunidade (conveniência):</strong> O ofendido decide se propõe ou não a ação penal.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Disponibilidade:</strong> O querelante pode desistir da ação (perdão, renúncia, perempção).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Indivisibilidade:</strong> A queixa contra um dos autores se estende a todos. A renúncia a um beneficia todos.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Intranscendência:</strong> Mesma regra — só contra o autor do crime.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">6. Causas Extintivas da Punibilidade na Ação Penal</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Decadência:</strong> Perda do prazo de 6 meses para representar (ação pública condicionada) ou propor queixa (ação privada). Extingue a punibilidade.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Renúncia:</strong> Ato unilateral do ofendido, antes do oferecimento da queixa. Extingue a punibilidade na ação privada.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Perdão do ofendido:</strong> Ato bilateral (requer aceitação). Na ação penal privada, extingue a punibilidade se aceito.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Perempção:</strong> Extinção da ação penal privada pela inércia do querelante (abandono da ação).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Retratação da representação:</strong> Na ação pública condicionada, possível até o oferecimento da denúncia.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">7. Requisitos da Denúncia e da Queixa-Crime</span>
    <div class="lex-item">Art. 41 CPP — A denúncia ou queixa deverá conter:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Exposição do fato criminoso</strong> com todas as suas circunstâncias.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Qualificação do acusado</strong> (ou dados que o identifiquem).</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Classificação do crime</strong>.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Rol de testemunhas</strong> (quando necessário).</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Atenção — pegadinhas clássicas:</strong><br>
    → O MP <strong>não pode desistir</strong> da ação penal pública (princípio da indisponibilidade). Mas pode pedir a <strong>absolvição</strong>.<br>
    → Retratação da representação: possível <strong>até a denúncia</strong>. Depois, não.<br>
    → Perdão do ofendido: requer <strong>aceitação</strong>. Renúncia é unilateral.<br>
    → Estupro passou a ser crime de ação penal pública <strong>incondicionada</strong> (Lei 13.718/2018).
  </div>

</div>`,
    flashcards: [
      { q: "Quais são os tipos de ação penal?", a: "Pública Incondicionada, Pública Condicionada (à representação ou requisição do MJ) e Privada (exclusiva, subsidiária da pública, personalíssima)." },
      { q: "O estupro é crime de ação penal pública condicionada ou incondicionada?", a: "Incondicionada, desde a Lei 13.718/2018." },
      { q: "Qual o prazo para representação na ação pública condicionada?", a: "6 meses a contar do conhecimento da autoria." },
      { q: "A retratação da representação pode ocorrer até quando?", a: "Até o oferecimento da denúncia pelo MP. Depois disso, não é possível." },
      { q: "O MP pode desistir da ação penal pública?", a: "NÃO. Princípio da indisponibilidade. Mas pode pedir absolvição se convencido da inocência do réu." },
      { q: "O que é ação penal privada subsidiária da pública?", a: "Quando o MP fica inerte no prazo legal, o ofendido pode propor queixa subsidiária. O MP não perde a titularidade e pode intervir." },
      { q: "Qual a diferença entre renúncia e perdão do ofendido?", a: "Renúncia: ato unilateral do ofendido, antes da queixa. Perdão: ato bilateral (requer aceitação do réu), pode ser após a queixa." },
      { q: "O que é perempção?", a: "Extinção da ação penal privada pela inércia do querelante (abandono da ação). Extingue a punibilidade." },
      { q: "O princípio da indivisibilidade se aplica à ação penal privada?", a: "SIM. A queixa contra um autor se estende a todos; a renúncia a um beneficia todos." },
      { q: "A ação penal privada personalíssima pode ser proposta pelos herdeiros?", a: "NÃO. É intransferível — somente o ofendido pode propô-la." }
    ],
    quiz: [
      {
        q: "Sobre a retratação da representação na ação penal pública condicionada:",
        opts: [
          "Pode ocorrer a qualquer tempo, inclusive após a condenação",
          "Pode ocorrer até o recebimento da denúncia pelo juiz",
          "Pode ocorrer até o oferecimento da denúncia pelo MP",
          "É irretratável, pois vincula o MP"
        ],
        gabarito: 2,
        exp: "A retratação da representação somente é possível até o oferecimento da denúncia pelo MP (art. 25 CPP). Após este momento, torna-se irretratável."
      },
      {
        q: "O princípio da indivisibilidade, na ação penal privada, significa que:",
        opts: [
          "O querelante pode escolher contra qual autor propõe a queixa",
          "A queixa contra um dos autores obriga a extensão a todos; a renúncia em relação a um beneficia todos",
          "O MP pode dividir a ação contra diferentes réus",
          "A ação não pode ser proposta contra mais de um réu"
        ],
        gabarito: 1,
        exp: "Na ação penal privada vigora a indivisibilidade: não pode o querelante escolher quem processar. A queixa beneficia todos os corréus, e a renúncia em relação a um se estende a todos."
      },
      {
        q: "O Ministério Público pode desistir da ação penal pública já proposta?",
        opts: [
          "Sim, se a vítima requerer",
          "Sim, se o réu concordar",
          "Não, pois vigora o princípio da indisponibilidade",
          "Sim, se houver acordo entre as partes"
        ],
        gabarito: 2,
        exp: "O princípio da indisponibilidade veda ao MP desistir da ação penal pública. O MP pode, contudo, pedir a absolvição do réu se convencido de sua inocência durante a instrução."
      },
      {
        q: "O crime de estupro, após a Lei 13.718/2018, é de ação penal:",
        opts: [
          "Privada exclusiva",
          "Pública condicionada à representação da vítima",
          "Pública incondicionada",
          "Privada subsidiária"
        ],
        gabarito: 2,
        exp: "A Lei 13.718/2018 alterou o art. 225 do CP, tornando os crimes contra a dignidade sexual, incluindo o estupro, de ação penal pública incondicionada."
      },
      {
        q: "A ação penal privada subsidiária da pública é cabível quando:",
        opts: [
          "A vítima discorda do MP em qualquer caso",
          "O MP deixa de agir no prazo legal (não denuncia, não pede arquivamento, não requisita diligências)",
          "O juiz recusa a denúncia do MP",
          "O IP é arquivado pelo delegado"
        ],
        gabarito: 1,
        exp: "A ação penal privada subsidiária (art. 5º, LIX, CF) é cabível quando o MP fica inerte — não denuncia, não pede arquivamento nem requisita diligências no prazo legal. O MP não perde a titularidade e pode retomar a ação."
      }
    ]
  }

};