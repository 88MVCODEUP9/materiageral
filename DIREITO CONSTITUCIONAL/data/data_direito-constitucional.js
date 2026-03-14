// data/data_direitos-constitucionais.js
// Conteúdo de Direito Constitucional — formatado com classes lex-*

window.DA = {

  // ═══════════════════════════════════════════════════
  "Direitos Fundamentais - Visão Geral": {
    icon: "📚",
    color: "#2563eb",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">📚</div>
    <h1 class="notion-title">Direitos Fundamentais — Visão Geral</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 5º ao 17 CF</span>
      <span class="meta-tag tag-g">Estrutura Fundamental</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Conceito</span>
    <div class="lex-item">Conjunto de direitos essenciais destinados à proteção da dignidade da pessoa humana.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Titulares</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Pessoa humana</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Cidadão</strong> (no caso dos direitos políticos)</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Classificação</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">•</span> <strong>Direitos individuais e coletivos</strong> – Art. 5º</div>
      <div class="lex-list-item"><span class="lex-num">•</span> <strong>Direitos sociais</strong> – Art. 6º ao 11</div>
      <div class="lex-list-item"><span class="lex-num">•</span> <strong>Direitos de nacionalidade</strong> – Art. 12 e 13</div>
      <div class="lex-list-item"><span class="lex-num">•</span> <strong>Direitos políticos</strong> – Art. 14 ao 16</div>
      <div class="lex-list-item"><span class="lex-num">•</span> <strong>Partidos políticos</strong> – Art. 17</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Atenção:</strong> Organização do Estado (Art. 18 ao 36) NÃO está dentro dos Direitos Fundamentais.
  </div>

</div>`,
    flashcards: [
      { q: "O que são direitos fundamentais?", a: "Conjunto de direitos essenciais destinados à proteção da dignidade da pessoa humana." },
      { q: "Quais são os titulares dos direitos fundamentais?", a: "Pessoa humana e cidadão (para direitos políticos)." },
      { q: "Quais são as 5 classificações de direitos fundamentais?", a: "Individuais e coletivos (Art. 5º), sociais (Art. 6º-11), nacionalidade (Art. 12-13), políticos (Art. 14-16), partidos políticos (Art. 17)." }
    ],
    quiz: [
      { q: "A Organização do Estado está dentro dos Direitos Fundamentais?", opts: ["SIM", "NÃO", "Depende", "Apenas em parte"], gabarito: 1, exp: "Organização do Estado (Art. 18 ao 36) NÃO está dentro dos Direitos Fundamentais." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Defesa do Estado e Instituições Democráticas": {
    icon: "🛡️",
    color: "#dc2626",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🛡️</div>
    <h1 class="notion-title">Defesa do Estado e das Instituições Democráticas</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 136 a 144 CF</span>
      <span class="meta-tag tag-g">Segurança Nacional</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Instrumentos de Defesa</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Estado de Defesa</strong> (Art. 136)</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Estado de Sítio</strong> (Art. 137 a 139)</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Forças Armadas</strong> (Art. 142)</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Segurança Pública</strong> (Art. 144)</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Estado de Defesa</span>
    <div class="lex-item">Medida excepcional para preservar ou restabelecer a ordem pública.</div>
    <div class="lex-item">Duração máxima: 30 dias, podendo ser prorrogado uma vez.</div>
    <div class="lex-item">Decretado pelo Presidente da República.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Estado de Sítio</span>
    <div class="lex-item">Medida mais grave que o estado de defesa.</div>
    <div class="lex-item">Hipóteses: comoção grave de repercussão nacional ou falência das medidas anteriores.</div>
    <div class="lex-item">Duração máxima: 30 dias, podendo ser prorrogado.</div>
  </div>

</div>`,
    flashcards: [
      { q: "Quais são os instrumentos de defesa do Estado?", a: "Estado de Defesa, Estado de Sítio, Forças Armadas e Segurança Pública." },
      { q: "Qual a duração máxima do Estado de Defesa?", a: "30 dias, podendo ser prorrogado uma vez." },
      { q: "Quem decreta o Estado de Defesa?", a: "O Presidente da República." }
    ],
    quiz: [
      { q: "O Estado de Sítio é:", opts: ["Medida menos grave que o estado de defesa", "Medida mais grave que o estado de defesa", "Igual ao estado de defesa", "Não tem prazo definido"], gabarito: 1, exp: "Estado de Sítio é medida mais grave que o estado de defesa." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Direito de Nacionalidade": {
    icon: "🏳️",
    color: "#059669",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🏳️</div>
    <h1 class="notion-title">Direito de Nacionalidade</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 12 e 13 CF</span>
      <span class="meta-tag tag-g">Vínculo Jurídico-Político</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Conceito</span>
    <div class="lex-item">Nacionalidade é o vínculo jurídico-político que liga uma pessoa a um Estado, integrando-a ao povo desse país.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Nacionalidade x Cidadania</span>
    <div class="lex-item">São conceitos distintos:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Nacionalidade:</strong> vínculo com o Estado</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Cidadania:</strong> capacidade de exercer direitos políticos</div>
    </div>
    <div class="callout callout-rose" style="margin-top:8px;">
      <span class="callout-icon">⚠️</span>
      <strong>Importante:</strong> Nem todo nacional é cidadão (exemplo: menores de 16 anos).
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Espécies de Nacionalidade</span>
    <div class="lex-cols">
      <div class="lex-section">
        <span class="lex-label blue">A) Originária (Primária)</span>
        <div class="lex-list">
          <div class="lex-list-item"><span class="lex-num">→</span> Brasileiro nato</div>
          <div class="lex-list-item"><span class="lex-num">→</span> Decorre do nascimento</div>
          <div class="lex-list-item"><span class="lex-num">→</span> Ato involuntário</div>
          <div class="lex-list-item"><span class="lex-num">→</span> Não pode ser retirada</div>
        </div>
      </div>
      <div class="lex-section">
        <span class="lex-label blue">B) Secundária (Derivada)</span>
        <div class="lex-list">
          <div class="lex-list-item"><span class="lex-num">→</span> Brasileiro naturalizado</div>
          <div class="lex-list-item"><span class="lex-num">→</span> Decorre da naturalização</div>
          <div class="lex-list-item"><span class="lex-num">→</span> Ato voluntário</div>
        </div>
      </div>
    </div>
  </div>

</div>`,
    flashcards: [
      { q: "O que é nacionalidade?", a: "Vínculo jurídico-político que liga uma pessoa a um Estado, integrando-a ao povo desse país." },
      { q: "Qual a diferença entre nacionalidade e cidadania?", a: "Nacionalidade: vínculo com o Estado. Cidadania: capacidade de exercer direitos políticos." },
      { q: "Quais são as espécies de nacionalidade?", a: "Originária (brasileiro nato) e Secundária (brasileiro naturalizado)." }
    ],
    quiz: [
      { q: "Sobre nacionalidade e cidadania:", opts: ["São conceitos idênticos", "Todo nacional é cidadão", "Nem todo nacional é cidadão", "Cidadania é vínculo com o Estado"], gabarito: 2, exp: "Nem todo nacional é cidadão - exemplo: menores de 16 anos são nacionais mas não cidadãos." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Critérios para Brasileiro Nato": {
    icon: "🎯",
    color: "#7c3aed",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🎯</div>
    <h1 class="notion-title">Critérios para Brasileiro Nato</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 12, I CF</span>
      <span class="meta-tag tag-g">Ius Soli e Ius Sanguinis</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">A Constituição adota dois critérios principais:</span>
  </div>

  <div class="lex-section">
    <span class="lex-label green">1. IUS SOLI (Direito do Solo)</span>
    <div class="lex-item">Considera o local do nascimento.</div>
    <div class="lex-item"><strong>Regra geral:</strong> Quem nasce no Brasil é brasileiro nato.</div>
    <div class="lex-item"><strong>Exceção:</strong> Filho de pais estrangeiros que estejam a serviço oficial de seu país de origem NÃO é brasileiro nato.</div>

    <div class="callout callout-gold" style="margin-top:8px;">
      <span class="callout-icon">💡</span>
      <strong>Exemplos:</strong><br>
      • Filho de diplomata argentino no Brasil → <strong>NÃO</strong> é brasileiro nato<br>
      • Filho de estrangeiros sem serviço oficial → <strong>É</strong> brasileiro nato<br>
      • Se apenas um dos pais estiver em serviço oficial estrangeiro → <strong>NÃO</strong> é brasileiro nato
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">2. IUS SANGUINIS (Direito de Sangue)</span>
    <div class="lex-item">Considera a descendência.</div>
    <div class="lex-item">Aplica-se ao nascido no exterior, filho de pai ou mãe brasileira.</div>

    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">a)</span> <strong>Ius sanguinis + Serviço Oficial do Brasil</strong><br>
      Se o pai ou mãe brasileira estiver a serviço da República Federativa do Brasil → brasileiro nato.<br>
      <em>Exemplo: filho de diplomata brasileiro que nasce na França.</em>
      </div>

      <div class="lex-list-item"><span class="lex-num">b)</span> <strong>Ius sanguinis + Registro em Repartição Brasileira</strong><br>
      Nascido no exterior, registrado em embaixada ou consulado brasileiro → brasileiro nato.<br>
      <em>Exemplo: filho de brasileiro que nasce no Japão e é registrado no consulado.</em>
      </div>

      <div class="lex-list-item"><span class="lex-num">c)</span> <strong>Ius sanguinis + Residência no Brasil + Opção</strong><br>
      Se não houve serviço oficial nem registro:<br>
      • Reside no Brasil<br>
      • Após a maioridade opta pela nacionalidade brasileira<br>
      → Torna-se brasileiro nato após a opção.
      </div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Observação (entendimento do STF)</span>
    <div class="lex-item">Se reside no Brasil ainda menor, é considerado brasileiro nato provisoriamente.</div>
    <div class="lex-item">Se não optar após a maioridade, perde a condição.</div>
    <div class="lex-item">A opção produz efeito ex tunc (retroage à data do nascimento).</div>
  </div>

</div>`,
    flashcards: [
      { q: "Quais são os dois critérios para brasileiro nato?", a: "Ius Soli (local do nascimento) e Ius Sanguinis (descendência)." },
      { q: "Filho de diplomata estrangeiro nascido no Brasil é brasileiro nato?", a: "NÃO. Exceção ao Ius Soli — pais a serviço oficial do país de origem." },
      { q: "O que significa efeito ex tunc na opção de nacionalidade?", a: "Retroage à data do nascimento." }
    ],
    quiz: [
      { q: "Filho de diplomata brasileiro que nasce na França é:", opts: ["Brasileiro nato", "Brasileiro naturalizado", "Estrangeiro", "Depende de registro"], gabarito: 0, exp: "É brasileiro nato pelo critério Ius Sanguinis + Serviço Oficial do Brasil." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Serviço Oficial e Naturalização": {
    icon: "🏛️",
    color: "#0891b2",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🏛️</div>
    <h1 class="notion-title">Serviço Oficial e Naturalização</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 12 CF</span>
      <span class="meta-tag tag-g">Aquisição de Nacionalidade</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Serviço Oficial do Brasil</span>
    <div class="lex-item">Considera-se serviço prestado à:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> União</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Estados</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Distrito Federal</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Municípios</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Administração direta e indireta</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Naturalização</span>
    <div class="lex-item">Processo de aquisição da nacionalidade secundária.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">A) Naturalização Ordinária</span>
    <div class="lex-item">Aplicável aos originários de países de língua portuguesa:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Residência ininterrupta por 1 ano</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Idoneidade moral</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">B) Naturalização Extraordinária</span>
    <div class="lex-item">Aplicável a estrangeiro de qualquer nacionalidade:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Residência ininterrupta por mais de 15 anos</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Ausência de condenação penal</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Requerimento ao governo brasileiro</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Quase Nacionais</span>
    <div class="lex-item">Português com residência permanente no Brasil, havendo reciprocidade entre Brasil e Portugal.</div>
    <div class="lex-item">Possui praticamente os mesmos direitos dos brasileiros naturalizados.</div>
  </div>

</div>`,
    flashcards: [
      { q: "O que é considerado serviço oficial do Brasil?", a: "Serviço prestado à União, Estados, DF, Municípios e administração direta e indireta." },
      { q: "Quais os requisitos da naturalização ordinária?", a: "Originários de países de língua portuguesa, residência ininterrupta por 1 ano e idoneidade moral." },
      { q: "Quais os requisitos da naturalização extraordinária?", a: "Qualquer nacionalidade, residência ininterrupta por mais de 15 anos, ausência de condenação penal e requerimento." }
    ],
    quiz: [
      { q: "Naturalização ordinária exige residência de:", opts: ["6 meses", "1 ano", "5 anos", "15 anos"], gabarito: 1, exp: "Naturalização ordinária exige residência ininterrupta por 1 ano para países de língua portuguesa." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Igualdade entre Nato e Naturalizado": {
    icon: "⚖️",
    color: "#16a34a",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⚖️</div>
    <h1 class="notion-title">Igualdade entre Nato e Naturalizado</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 12, §1º CF</span>
      <span class="meta-tag tag-g">Direitos e Deveres</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Regra Geral</span>
    <div class="lex-item">Possuem os mesmos direitos e deveres.</div>
    <div class="lex-item">Exceções somente podem estar previstas na Constituição.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Cargos Privativos de Brasileiro Nato</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Presidente e Vice-Presidente da República</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Presidente da Câmara dos Deputados</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Presidente do Senado Federal</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Ministro do STF</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Carreira diplomática</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Oficial das Forças Armadas</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Ministro de Estado da Defesa</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">🧠</span>
    <strong>MNEMÔNICO:</strong> "PRESIDÊNCIA + DEFESA + DIPLOMACIA + JUSTIÇA"<br>
    Presidente, Senado, Câmara (Presidência)<br>
    Forças Armadas, Defesa (Defesa)<br>
    Diplomacia (Carreira diplomática)<br>
    STF (Justiça)
  </div>

</div>`,
    flashcards: [
      { q: "Nato e naturalizado têm os mesmos direitos?", a: "SIM, regra geral possuem os mesmos direitos e deveres, com exceções previstas na Constituição." },
      { q: "Cite 3 cargos privativos de brasileiro nato:", a: "Presidente da República, Ministro do STF, Oficial das Forças Armadas (qualquer 3)." }
    ],
    quiz: [
      { q: "É cargo privativo de brasileiro nato:", opts: ["Governador", "Senador", "Ministro do STF", "Prefeito"], gabarito: 2, exp: "Ministro do STF é cargo privativo de brasileiro nato." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Extradição": {
    icon: "🌍",
    color: "#dc2626",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🌍</div>
    <h1 class="notion-title">Extradição</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 5º, LI CF</span>
      <span class="meta-tag tag-g">Entrega de Estrangeiro</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Brasileiro Nato</span>
    <div class="lex-item">→ <strong>NUNCA</strong> será extraditado.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Brasileiro Naturalizado</span>
    <div class="lex-item">Pode ser extraditado nos seguintes casos:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Crime comum praticado <strong>antes</strong> da naturalização</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Comprovado envolvimento em tráfico ilícito de entorpecentes, <strong>antes ou depois</strong> da naturalização</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">🧠</span>
    <strong>MNEMÔNICO:</strong> "NATO NÃO, NATU TALVEZ"<br>
    <strong>NATO</strong> = <strong>NÃO</strong> pode ser extraditado<br>
    <strong>NATU</strong>ralizado = <strong>TALVEZ</strong> pode ser extraditado
  </div>

  <div class="lex-section">
    <span class="lex-label green">Importante</span>
    <div class="lex-item">Tráfico de drogas é a única exceção que permite extradição mesmo <strong>depois</strong> da naturalização.</div>
  </div>

</div>`,
    flashcards: [
      { q: "Brasileiro nato pode ser extraditado?", a: "NUNCA. Brasileiro nato nunca será extraditado." },
      { q: "Quando pode ser extraditado o brasileiro naturalizado?", a: "Crime comum antes da naturalização ou tráfico de drogas a qualquer tempo." },
      { q: "Qual o mnemônico para extradição?", a: "NATO NÃO, NATU TALVEZ." }
    ],
    quiz: [
      { q: "Naturalizado pode ser extraditado por tráfico de drogas:", opts: ["Apenas se for antes da naturalização", "A qualquer tempo", "Nunca", "Apenas se for crime comum"], gabarito: 1, exp: "Tráfico de drogas permite extradição a qualquer tempo, antes ou depois da naturalização." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Perda da Nacionalidade": {
    icon: "🔵",
    color: "#4a85f0",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔵</div>
    <h1 class="notion-title">Nacionalidade — Perda da Nacionalidade</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CF/88</span>
      <span class="meta-tag tag-g">Brasileiro Nato e Naturalizado</span>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">⚠️</span>
    Brasileiro nato e naturalizado <strong>NÃO estão em situação idêntica</strong> quanto à perda da nacionalidade.
  </div>

  <div class="lex-section">
    <span class="lex-label rose">1ª Hipótese — Perda por SANÇÃO</span>
    <div class="lex-item">Ocorre quando há <strong>cancelamento da naturalização por sentença judicial</strong>.</div>
    <div class="lex-item">Motivos:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Fraude no processo de naturalização</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Atividade nociva ao interesse nacional</div>
    </div>
    <div class="callout" style="margin-top:8px;">
      📌 <strong>SÓ atinge NATURALIZADO.</strong>
    </div>
    <div class="callout callout-gold" style="margin-top:8px;">
      🧠 <strong>MNEMÔNICO:</strong> "SAN = Sentença Ataca Naturalizado"<br>
      Se houve sentença judicial → lembra de SAN → atinge naturalizado.
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha:</strong> A banca diz que o brasileiro nato pode perder a nacionalidade por sentença judicial. <strong>ERRADO.</strong> Isso é para naturalizado.
  </div>

  <div class="lex-section">
    <span class="lex-label blue">2ª Hipótese — Perda VOLUNTÁRIA</span>
    <div class="lex-item">Ocorre quando o brasileiro <strong>renuncia formalmente</strong> à nacionalidade perante autoridade competente.</div>
    <div class="callout" style="margin-top:8px;">
      🚨 A perda <strong>não será admitida</strong> se gerar <strong>apatridia</strong> (ficar sem nenhuma nacionalidade).
    </div>
    <div class="callout callout-gold" style="margin-top:8px;">
      🧠 <strong>MNEMÔNICO:</strong> "VOL = Vontade, mas não Vira Órfão de pátria"
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Reaquisição da Nacionalidade</span>
    <div class="lex-item">A renúncia <strong>não impede</strong> futura reaquisição, desde que preenchidos os requisitos legais.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Extradição e Nacionalidade</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Brasileiro <strong>nato NÃO pode</strong> ser extraditado.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Naturalizado <strong>pode ser extraditado</strong> em dois casos:
        <div class="lex-list" style="margin-top:4px; margin-left:12px;">
          <div class="lex-list-item"><span class="lex-num">•</span> Crime comum <strong>antes</strong> da naturalização</div>
          <div class="lex-list-item"><span class="lex-num">•</span> Tráfico de drogas <strong>a qualquer tempo</strong></div>
        </div>
      </div>
    </div>
    <div class="callout callout-gold" style="margin-top:8px;">
      🧠 <strong>MNEMÔNICO:</strong> "NATO NÃO, NATU TALVEZ"
    </div>
  </div>

</div>`,
    flashcards: [
      { q: "Quais são as hipóteses de perda da nacionalidade?", a: "Perda por Sanção (sentença judicial — só para naturalizado) e Perda Voluntária (renúncia formal)." },
      { q: "Brasileiro nato pode perder a nacionalidade por sentença judicial?", a: "NÃO. A perda por sentença judicial (sanção) só atinge o naturalizado." },
      { q: "A renúncia da nacionalidade é admitida se gerar apatridia?", a: "NÃO. A perda voluntária não é admitida se gerar apatridia." },
      { q: "Brasileiro nato pode ser extraditado?", a: "NÃO. Apenas o naturalizado pode, em casos de crime comum antes da naturalização ou tráfico de drogas a qualquer tempo." },
      { q: "Qual o mnemônico para perda por sanção?", a: "SAN = Sentença Ataca Naturalizado." }
    ],
    quiz: [
      { q: "A perda da nacionalidade por sentença judicial por fraude na naturalização:", opts: ["Atinge o nato e o naturalizado", "Atinge apenas o brasileiro nato", "Atinge apenas o naturalizado", "Não é prevista na CF"], gabarito: 2, exp: "A perda por sanção (sentença judicial) só atinge o naturalizado — lembre: SAN = Sentença Ataca Naturalizado." },
      { q: "Sobre a perda voluntária da nacionalidade:", opts: ["É admitida mesmo gerando apatridia", "Não é admitida se gerar apatridia", "Só vale para nato", "Depende de sentença judicial"], gabarito: 1, exp: "A perda voluntária não será admitida se gerar apatridia — VOL = Vontade, mas não Vira Órfão de pátria." },
      { q: "Naturalizado pode ser extraditado em caso de:", opts: ["Qualquer crime após a naturalização", "Crime comum antes da naturalização e tráfico de drogas a qualquer tempo", "Apenas crimes políticos", "Não pode ser extraditado"], gabarito: 1, exp: "Naturalizado pode ser extraditado: crime comum antes da naturalização ou tráfico de drogas a qualquer tempo." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Titulares dos Direitos Fundamentais": {
    icon: "👥",
    color: "#10b981",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">👥</div>
    <h1 class="notion-title">Direitos Fundamentais — Titulares</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 5º CF</span>
      <span class="meta-tag tag-g">Fundamentos</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Direitos Garantidos — Art. 5º CF</span>
    <div class="lex-item">Todos são iguais perante a lei, garantindo-se:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Vida</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Igualdade</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Liberdade</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Segurança</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Propriedade</strong></div>
    </div>
    <div class="callout callout-gold" style="margin-top:8px;">
      🧠 <strong>MNEMÔNICO:</strong> "VILSP" — <em>Vê Ivo Ler Seu Processo</em><br>
      <strong>V</strong>ida, <strong>I</strong>gualdade, <strong>L</strong>iberdade, <strong>S</strong>egurança, <strong>P</strong>ropriedade.
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Quem são os Titulares?</span>
    <div class="lex-item">Toda pessoa que esteja em <strong>território brasileiro</strong>:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔</span> Brasileiros</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Estrangeiros residentes</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Estrangeiros de passagem</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha:</strong> A banca diz que estrangeiro não residente não tem direitos fundamentais. <strong>ERRADO.</strong>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Animais são Titulares?</span>
    <div class="lex-item"><strong>NÃO.</strong> Animais <strong>não</strong> são sujeitos de direitos fundamentais.</div>
    <div class="lex-item">A proteção ocorre <strong>indiretamente</strong>, por meio da proteção ao meio ambiente (Art. 225 CF).</div>
    <div class="callout callout-gold" style="margin-top:8px;">
      🧠 <strong>MNEMÔNICO:</strong> "Animal protege o Ambiente, não é Titular"
    </div>
  </div>

</div>`,
    flashcards: [
      { q: "Quais são os 5 direitos garantidos pelo Art. 5º da CF?", a: "Vida, Igualdade, Liberdade, Segurança e Propriedade — VILSP." },
      { q: "Estrangeiro de passagem pelo Brasil tem direitos fundamentais?", a: "SIM. São titulares todos que estejam em território brasileiro, incluindo estrangeiros de passagem." },
      { q: "Animais são titulares de direitos fundamentais?", a: "NÃO. São protegidos indiretamente pelo Art. 225 (meio ambiente)." }
    ],
    quiz: [
      { q: "São titulares dos direitos fundamentais:", opts: ["Apenas os brasileiros natos", "Apenas os brasileiros", "Todos em território brasileiro, incluindo estrangeiros de passagem", "Apenas os residentes no Brasil"], gabarito: 2, exp: "São titulares todos que estejam em território brasileiro, incluindo estrangeiros de passagem." },
      { q: "A proteção aos animais na CF se dá por meio de:", opts: ["Art. 5º, como titulares de direitos fundamentais", "Art. 225, indiretamente pela proteção ao meio ambiente", "Art. 1º, pela dignidade da pessoa humana", "Art. 3º, pelos objetivos fundamentais"], gabarito: 1, exp: "Animais não são titulares de direitos fundamentais — são protegidos indiretamente pelo Art. 225 CF." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Direito à Vida": {
    icon: "❤️",
    color: "#ef4444",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">❤️</div>
    <h1 class="notion-title">Direito à Vida</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 5º CF</span>
      <span class="meta-tag tag-g">Direito Fundamental</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Dois Sentidos do Direito à Vida</span>
  </div>

  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label rose">Sentido NEGATIVO</span>
      <div class="lex-item">Direito de <strong>não ser morto</strong> injustamente.</div>
    </div>
    <div class="lex-section">
      <span class="lex-label green">Sentido POSITIVO</span>
      <div class="lex-item">Direito de <strong>viver com dignidade</strong> (vida digna).</div>
    </div>
  </div>

  <div class="callout callout-gold">
    🧠 <strong>MNEMÔNICO:</strong> "Vida = NÃO morrer + Viver bem"
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">🚨</span>
    O direito à vida <strong>NÃO é absoluto</strong>.
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Exemplos de Exceções</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Aborto em caso de estupro</strong> → permitido.</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Legítima defesa</strong> → pode haver morte sem crime.</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha:</strong> A banca afirma que vida é direito absoluto. <strong>ERRADO.</strong>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Vida x Liberdade Religiosa</span>
    <div class="lex-item">Pessoa <strong>maior e capaz</strong> pode recusar tratamento médico, mesmo com risco de morte.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Vacinação Compulsória</span>
    <div class="lex-item">É <strong>constitucional</strong>, desde que por meios <strong>indiretos</strong> (restrições administrativas).</div>
    <div class="lex-item">Não pode ser aplicada com uso de força física.</div>
    <div class="callout callout-gold" style="margin-top:8px;">
      🧠 <strong>MNEMÔNICO:</strong> "Vacina SIM, Força NÃO"
    </div>
  </div>

</div>`,
    flashcards: [
      { q: "Quais são os dois sentidos do direito à vida?", a: "Sentido negativo: não ser morto injustamente. Sentido positivo: viver com dignidade." },
      { q: "O direito à vida é absoluto?", a: "NÃO. Exemplos de exceções: aborto em caso de estupro e legítima defesa." },
      { q: "A vacinação compulsória é constitucional?", a: "SIM, desde que por meios indiretos (restrições administrativas), sem uso de força física." },
      { q: "Maior e capaz pode recusar tratamento médico?", a: "SIM, mesmo com risco de morte, em razão da liberdade religiosa e autonomia." }
    ],
    quiz: [
      { q: "O direito à vida é:", opts: ["Absoluto, sem exceções", "Relativo, não é absoluto", "Absoluto, exceto em guerra", "Relativo apenas para estrangeiros"], gabarito: 1, exp: "O direito à vida não é absoluto — exemplos: aborto em estupro, legítima defesa." },
      { q: "Vacinação compulsória com uso de força física:", opts: ["É constitucional", "É inconstitucional", "É constitucional em epidemias", "É permitida por decisão judicial"], gabarito: 1, exp: "Vacina SIM, Força NÃO — a vacinação compulsória é constitucional só por meios indiretos." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Princípio da Igualdade": {
    icon: "⚖️",
    color: "#f59e0b",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⚖️</div>
    <h1 class="notion-title">Princípio da Igualdade</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 5º CF</span>
      <span class="meta-tag tag-gold">Formal e Material</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label blue">Igualdade FORMAL</span>
      <div class="lex-item">Todos iguais <strong>perante a lei</strong>.</div>
      <div class="lex-item">Exemplo: concurso público para ingresso no cargo.</div>
      <div class="callout callout-gold" style="margin-top:8px;">
        🧠 "Formal = Fórmula igual para todos"
      </div>
    </div>
    <div class="lex-section">
      <span class="lex-label green">Igualdade MATERIAL</span>
      <div class="lex-item">Tratar <strong>desiguais na medida de suas desigualdades</strong>.</div>
      <div class="lex-item">Exemplo: cotas.</div>
      <div class="callout callout-gold" style="margin-top:8px;">
        🧠 "Material = Medida Diferente"
      </div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Restrições em Concurso Público</span>
    <div class="lex-item"><strong>Regra:</strong> proibidas.</div>
    <div class="lex-item"><strong>Exceção:</strong> permitidas se houver:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">1.</span> <strong>Natureza do cargo</strong> justificar</div>
      <div class="lex-list-item"><span class="lex-num">2.</span> Previsão em <strong>lei</strong></div>
      <div class="lex-list-item"><span class="lex-num">3.</span> <strong>Proporcionalidade</strong></div>
    </div>
    <div class="callout callout-gold" style="margin-top:8px;">
      🧠 <strong>MNEMÔNICO:</strong> "NLP" — Natureza, Lei, Proporção
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">🚨</span>
    <strong>Inconstitucional</strong> limitar percentual de vagas para mulheres.
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha:</strong> Altura mínima sem justificativa legal → <strong>inconstitucional</strong>.
  </div>

</div>`,
    flashcards: [
      { q: "Qual a diferença entre igualdade formal e material?", a: "Formal: todos iguais perante a lei. Material: tratar desiguais na medida de suas desigualdades (ex: cotas)." },
      { q: "Restrições em concurso público são permitidas?", a: "Excepcionalmente sim, se houver: natureza do cargo justificando, previsão em lei e proporcionalidade (NLP)." },
      { q: "É constitucional limitar vagas para mulheres em concurso?", a: "NÃO. É inconstitucional." },
      { q: "Qual o mnemônico para restrições em concurso?", a: "NLP — Natureza, Lei, Proporção." }
    ],
    quiz: [
      { q: "Igualdade material significa:", opts: ["Todos iguais perante a lei sem distinção", "Tratar desiguais na medida de suas desigualdades", "Proibição total de distinções", "Igualdade apenas nos direitos civis"], gabarito: 1, exp: "Igualdade material = tratar desiguais na medida de suas desigualdades. Justifica as cotas." },
      { q: "Restrição de altura em concurso público:", opts: ["Sempre constitucional", "Sempre inconstitucional", "Constitucional se houver natureza do cargo, lei e proporcionalidade", "Constitucional se aprovada em plenário"], gabarito: 2, exp: "NLP: só é constitucional se houver Natureza do cargo justificando, previsão em Lei e Proporcionalidade." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Liberdade de Expressão": {
    icon: "🗣️",
    color: "#8b5cf6",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🗣️</div>
    <h1 class="notion-title">Liberdade de Expressão</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 5º CF</span>
      <span class="meta-tag tag-g">Direito Fundamental</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Garantias</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Livre <strong>manifestação do pensamento</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Vedado anonimato</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> Proibição de <strong>censura prévia</strong></div>
    </div>
    <div class="callout callout-gold" style="margin-top:8px;">
      🧠 <strong>MNEMÔNICO:</strong> "MAN" — <strong>M</strong>anifestação, <strong>A</strong>nonimato proibido, <strong>N</strong>ão censura
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">🚨</span>
    Liberdade de expressão <strong>NÃO é absoluta</strong>.
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Não protege:</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✗</span> Discurso de ódio</div>
      <div class="lex-list-item"><span class="lex-num">✗</span> Racismo</div>
      <div class="lex-list-item"><span class="lex-num">✗</span> Injúria racial</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Direito ao Esquecimento</span>
    <div class="lex-item">O STF decidiu que é <strong>incompatível com a Constituição</strong>.</div>
    <div class="lex-item">Pode haver <strong>indenização</strong>, mas não é possível apagar fatos históricos.</div>
    <div class="callout callout-rose" style="margin-top:8px;">
      <span class="callout-icon">⚠️</span>
      <strong>Pegadinha:</strong> A banca diz que direito ao esquecimento é direito fundamental autônomo. <strong>ERRADO.</strong>
    </div>
  </div>

</div>`,
    flashcards: [
      { q: "Quais são as garantias da liberdade de expressão?", a: "Livre manifestação do pensamento, vedado anonimato e proibição de censura prévia (MAN)." },
      { q: "A liberdade de expressão protege discurso de ódio?", a: "NÃO. Não protege discurso de ódio, racismo nem injúria racial." },
      { q: "O direito ao esquecimento é um direito fundamental autônomo?", a: "NÃO. O STF decidiu que é incompatível com a Constituição." },
      { q: "A liberdade de expressão é absoluta?", a: "NÃO. Não protege racismo, injúria racial e discurso de ódio." }
    ],
    quiz: [
      { q: "O anonimato na manifestação do pensamento é:", opts: ["Garantido pela CF", "Vedado pela CF", "Permitido em casos específicos", "Regulamentado por lei infraconstitucional"], gabarito: 1, exp: "A CF veda o anonimato — lembre: MAN = Manifestação, Anonimato proibido, Não censura." },
      { q: "O STF decidiu sobre o direito ao esquecimento que:", opts: ["É um direito fundamental autônomo", "É compatível com a Constituição", "É incompatível com a Constituição", "Só se aplica a crimes prescritos"], gabarito: 2, exp: "O STF decidiu que o direito ao esquecimento é incompatível com a Constituição Federal." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Liberdade Religiosa": {
    icon: "🕊️",
    color: "#10b981",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🕊️</div>
    <h1 class="notion-title">Liberdade Religiosa</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 5º CF</span>
      <span class="meta-tag tag-g">Estado Laico</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Brasil é Estado LAICO</span>
    <div class="lex-item">O Brasil:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Não possui religião oficial</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Não interfere</strong> no funcionamento das religiões</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Protege todas</strong> as religiões igualmente</div>
    </div>
    <div class="callout callout-gold" style="margin-top:8px;">
      🧠 <strong>MNEMÔNICO:</strong> "LAICO = Livre, Apartado, Igualitário, Cooperação"
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Garantias</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Liberdade de crença</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Liberdade de consciência</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Livre exercício de culto</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Proteção aos locais de culto</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Ensino Religioso nas Escolas Públicas</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Facultativo</strong> para o aluno</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Obrigatório</strong> para o Estado oferecer</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Pode ser <strong>confessional</strong> (decisão do STF)</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Sacrifício de Animais em Ritual Religioso</span>
    <div class="lex-item">É <strong>constitucional</strong>.</div>
    <div class="callout callout-rose" style="margin-top:8px;">
      <span class="callout-icon">⚠️</span>
      <strong>Pegadinha:</strong> A banca afirma que por proteção ambiental é proibido. <strong>ERRADO.</strong>
    </div>
  </div>

  <div class="callout">
    <span class="callout-icon">💡</span>
    <strong>Estado laico ≠ Estado ateu.</strong> O Estado laico não tem religião oficial, mas respeita e protege todas as religiões.
  </div>

</div>`,
    flashcards: [
      { q: "O Brasil tem religião oficial?", a: "NÃO. O Brasil é um Estado laico — sem religião oficial." },
      { q: "O ensino religioso nas escolas públicas é obrigatório para o aluno?", a: "NÃO. É facultativo para o aluno, mas o Estado é obrigado a oferecer." },
      { q: "O sacrifício de animais em ritual religioso é constitucional?", a: "SIM, é constitucional." },
      { q: "Estado laico é o mesmo que Estado ateu?", a: "NÃO. Estado laico = sem religião oficial. Estado ateu = nega a existência de religião." },
      { q: "Qual o mnemônico para o Estado laico?", a: "LAICO = Livre, Apartado, Igualitário, Cooperação." }
    ],
    quiz: [
      { q: "Sobre o ensino religioso nas escolas públicas:", opts: ["É obrigatório para alunos e para o Estado", "É facultativo para alunos e obrigatório para o Estado oferecer", "É proibido por violar a laicidade", "É apenas facultativo para o Estado oferecer"], gabarito: 1, exp: "O ensino religioso é facultativo para o aluno, mas o Estado é obrigado a oferecer." },
      { q: "Estado laico significa que:", opts: ["O Estado é ateu", "O Estado tem uma religião oficial", "O Estado não tem religião oficial e protege todas as religiões", "O Estado proíbe manifestações religiosas em espaços públicos"], gabarito: 2, exp: "Estado laico não tem religião oficial e protege todas as religiões — é diferente de Estado ateu." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Dicas Finais para Prova": {
    icon: "🔥",
    color: "#ef4444",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔥</div>
    <h1 class="notion-title">Dicas Finais para Prova — Direito Constitucional</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-rose">Revisão</span>
      <span class="meta-tag tag-gold">Pegadinhas</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">5 Regras de Ouro</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">1.</span> Direito fundamental <strong>quase nunca é absoluto</strong>.</div>
      <div class="lex-list-item"><span class="lex-num">2.</span> Brasileiro nato é <strong>superprotegido</strong> contra extradição.</div>
      <div class="lex-list-item"><span class="lex-num">3.</span> Igualdade material <strong>justifica cotas</strong>.</div>
      <div class="lex-list-item"><span class="lex-num">4.</span> Estado laico ≠ <strong>Estado ateu</strong>.</div>
      <div class="lex-list-item"><span class="lex-num">5.</span> Liberdade de expressão <strong>NÃO protege racismo</strong>.</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Pegadinhas que a Banca Adora Misturar</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Vida x Religião</strong> — maior e capaz pode recusar tratamento</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Igualdade formal x material</strong> — cotas são igualdade material</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Estrangeiro x brasileiro</strong> — estrangeiros de passagem têm direitos fundamentais</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Liberdade de expressão x discurso de ódio</strong> — discurso de ódio não é protegido</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Resumo dos Mnemônicos</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">🧠</span> <strong>VILSP</strong> — Vida, Igualdade, Liberdade, Segurança, Propriedade</div>
      <div class="lex-list-item"><span class="lex-num">🧠</span> <strong>SAN</strong> — Sentença Ataca Naturalizado</div>
      <div class="lex-list-item"><span class="lex-num">🧠</span> <strong>VOL</strong> — Vontade, mas não Vira Órfão de pátria</div>
      <div class="lex-list-item"><span class="lex-num">🧠</span> <strong>NATO NÃO, NATU TALVEZ</strong> — extradição</div>
      <div class="lex-list-item"><span class="lex-num">🧠</span> <strong>NLP</strong> — Natureza, Lei, Proporção (restrições em concurso)</div>
      <div class="lex-list-item"><span class="lex-num">🧠</span> <strong>MAN</strong> — Manifestação, Anonimato proibido, Não censura</div>
      <div class="lex-list-item"><span class="lex-num">🧠</span> <strong>LAICO</strong> — Livre, Apartado, Igualitário, Cooperação</div>
      <div class="lex-list-item"><span class="lex-num">🧠</span> <strong>Vacina SIM, Força NÃO</strong> — vacinação compulsória</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    Em prova de PM, a banca adora apresentar situações onde <strong>direitos fundamentais parecem absolutos</strong>. Lembre-se: quase nenhum é absoluto!
  </div>

</div>`,
    flashcards: [
      { q: "Direito fundamental é absoluto?", a: "Quase nunca. A maioria pode ser relativizado em casos específicos." },
      { q: "Qual o mnemônico para os 5 direitos do Art. 5º?", a: "VILSP — Vida, Igualdade, Liberdade, Segurança, Propriedade." },
      { q: "Cite 4 mnemônicos de direito constitucional:", a: "VILSP, SAN, VOL, NATO NÃO NATU TALVEZ, NLP, MAN, LAICO, Vacina SIM Força NÃO (qualquer 4)." }
    ],
    quiz: [
      { q: "Qual afirmação está CORRETA?", opts: ["Todos os direitos fundamentais são absolutos", "Estado laico é o mesmo que Estado ateu", "Estrangeiro de passagem não tem direitos fundamentais", "Liberdade de expressão não protege racismo"], gabarito: 3, exp: "Liberdade de expressão não protege racismo, discurso de ódio nem injúria racial." },
      { q: "Sobre as pegadinhas de prova, qual é CORRETO?", opts: ["Igualdade formal justifica cotas", "Igualdade material justifica cotas", "Cotas violam o princípio da igualdade", "Igualdade formal e material são sinônimos"], gabarito: 1, exp: "Igualdade material = tratar desiguais na medida de suas desigualdades → justifica cotas." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Sigilo das Comunicações": {
    icon: "🔐",
    color: "#3b82f6",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔐</div>
    <h1 class="notion-title">Sigilo das Comunicações — Art. 5º, XII</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CF/88</span>
      <span class="meta-tag tag-g">Direito Fundamental</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">A Constituição garante a inviolabilidade do sigilo:</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">📩</span> Correspondência</div>
      <div class="lex-list-item"><span class="lex-num">📞</span> Comunicações telefônicas</div>
      <div class="lex-list-item"><span class="lex-num">💻</span> Comunicações de dados</div>
      <div class="lex-list-item"><span class="lex-num">📡</span> Comunicações telemáticas</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Regra:</span>
    <div class="lex-item">➡️ O sigilo é protegido.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Exceção:</span>
    <div class="lex-item">➡️ Pode haver quebra por ordem judicial, somente:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Para investigação criminal</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Para instrução processual penal</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Nas hipóteses previstas em lei</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">⚠️</span>
    <strong>Importante:</strong><br>
    ❌ Não pode quebrar sigilo telefônico em processo administrativo<br>
    ❌ Não pode quebrar sigilo em processo civil<br>
    ✅ Só pode na esfera penal
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Diferença importante</span>
    <div class="lex-cols">
      <div class="lex-section">
        <span class="lex-label green">Sigilo telefônico</span>
        <div class="lex-item">→ protege dados da ligação</div>
        <div class="lex-item">lista de chamadas, duração, números, registros</div>
      </div>
      <div class="lex-section">
        <span class="lex-label green">Sigilo das comunicações telefônicas</span>
        <div class="lex-item">→ protege o conteúdo da conversa</div>
        <div class="lex-item">áudio da ligação, mensagens, conversas</div>
      </div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Gravação ambiental</span>
    <div class="lex-item">Não precisa de ordem judicial quando usada para defesa.</div>
  </div>

</div>`,
    flashcards: [
      { q: "O que protege o sigilo das comunicações?", a: "Correspondência, comunicações telefônicas, de dados e telemáticas." },
      { q: "Quando pode haver quebra de sigilo?", a: "Somente por ordem judicial para investigação criminal ou instrução processual penal." },
      { q: "Pode quebrar sigilo em processo civil?", a: "NÃO. Só pode na esfera penal." },
      { q: "Qual a diferença entre sigilo telefônico e das comunicações?", a: "Sigilo telefônico = dados da ligação (lista, duração). Comunicações = conteúdo da conversa." }
    ],
    quiz: [
      { q: "A quebra de sigilo telefônico é permitida em:", opts: ["Processo administrativo", "Processo civil", "Apenas na esfera penal", "Qualquer processo"], gabarito: 2, exp: "Só é permitida na esfera penal (investigação criminal ou instrução processual penal)." },
      { q: "Gravação ambiental precisa de ordem judicial quando:", opts: ["Sempre", "Quando usada para defesa", "Quando usada para provar crime", "Nunca precisa para defesa ou prova"], gabarito: 3, exp: "Não precisa de ordem judicial quando usada para defesa ou para provar crime (STF admite)." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Direito de Reunião": {
    icon: "👥",
    color: "#10b981",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">👥</div>
    <h1 class="notion-title">Direito de Reunião — Art. 5º, XVI</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CF/88</span>
      <span class="meta-tag tag-g">Direito Fundamental</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Requisitos para reunião:</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔</span> Pacífica</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Sem armas</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Local aberto ao público</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Não frustrar reunião anterior</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Aviso prévio à autoridade</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">⚠️</span>
    <strong>STF decidiu:</strong><br>
    O aviso prévio pode ser dispensado se a reunião for pública e conhecida (redes sociais, internet, divulgação pública).
  </div>

  <div class="lex-section">
    <span class="lex-label green">Exemplo:</span>
    <div class="lex-item">Marcha da maconha é permitida (STF).</div>
  </div>

</div>`,
    flashcards: [
      { q: "Quais os requisitos para o direito de reunião?", a: "Pacífica, sem armas, local aberto, não frustrar reunião anterior, aviso prévio." },
      { q: "O aviso prévio pode ser dispensado?", a: "SIM, se a reunião for pública e conhecida (redes sociais, internet)." },
      { q: "Marcha da maconha é permitida?", a: "SIM, segundo decisão do STF." }
    ],
    quiz: [
      { q: "O direito de reunião exige:", opts: ["Local fechado", "Aviso prévio sempre", "Pacífica e sem armas", "Autorização judicial"], gabarito: 2, exp: "Deve ser pacífica, sem armas, em local aberto, não frustrar reunião anterior e com aviso prévio." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Direito de Associação": {
    icon: "🤝",
    color: "#f59e0b",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🤝</div>
    <h1 class="notion-title">Direito de Associação — Art. 5º, XVII a XXI</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CF/88</span>
      <span class="meta-tag tag-g">Direito Fundamental</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Regras:</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔</span> Livre criação de associação</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Não precisa de autorização do Estado</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Estado não pode interferir</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Ninguém é obrigado a se associar</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Ninguém é obrigado a permanecer associado</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Proibições:</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">❌</span> Associação com fins ilícitos</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Associação paramilitar</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Militares:</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔</span> Podem ter associação</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Não pode ser sindicato</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Não pode prejudicar o serviço</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Suspensão e dissolução</span>
    <div class="lex-item">Suspensão → decisão judicial.</div>
    <div class="lex-item">Dissolução definitiva → decisão judicial com trânsito em julgado.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Representação judicial</span>
    <div class="lex-item">Associação só pode representar membros se houver autorização expressa.</div>
  </div>

</div>`,
    flashcards: [
      { q: "Quais as regras do direito de associação?", a: "Livre criação, sem autorização do Estado, ninguém obrigado a se associar ou permanecer." },
      { q: "Militares podem ter associação?", a: "Podem, mas não pode ser sindicato nem prejudicar o serviço." },
      { q: "Quando uma associação pode ser dissolvida?", a: "Por decisão judicial com trânsito em julgado." }
    ],
    quiz: [
      { q: "Sobre associações, é CORRETO:", opts: ["Precisam de autorização estatal", "Militares podem criar sindicatos", "Ninguém é obrigado a permanecer associado", "Estado pode interferir no funcionamento"], gabarito: 2, exp: "Ninguém é obrigado a permanecer associado — direito de desvinculação." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Regras sobre Prisão": {
    icon: "🚔",
    color: "#ef4444",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🚔</div>
    <h1 class="notion-title">Regras sobre Prisão</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CF/88</span>
      <span class="meta-tag tag-g">Direitos Fundamentais</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Regra:</span>
    <div class="lex-item">❌ Ninguém será preso sem flagrante ou ordem judicial.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Exceções:</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔</span> Flagrante delito</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Ordem judicial</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Prisão preventiva</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Prisão temporária</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Prisão definitiva (sentença)</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Uso de algemas — Súmula Vinculante 11 STF</span>
    <div class="lex-item"><strong>Regra:</strong> não usar algemas.</div>
    <div class="lex-item"><strong>Exceções:</strong></div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Risco de fuga</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Resistência</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Perigo ao policial</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Perigo a terceiros</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Obrigações:</span>
    <div class="lex-item">✔ Deve justificar o uso de algemas por escrito.</div>
    <div class="lex-item">Se não justificar:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Nulidade</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Responsabilidade civil</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Responsabilidade penal</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Responsabilidade disciplinar</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Comunicação da prisão</span>
    <div class="lex-item">Obrigatório comunicar imediatamente:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Juiz</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Ministério Público</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Família</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Pessoa indicada pelo preso</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Direitos do preso</span>
    <div class="lex-item">O policial deve informar:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Direito ao silêncio</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Direito a advogado</div>
    </div>
    <div class="callout callout-rose" style="margin-top:8px;">
      <span class="callout-icon">⚠️</span>
      Se não informar: pode anular a prisão.
    </div>
  </div>

</div>`,
    flashcards: [
      { q: "Quais são as exceções à regra de que ninguém será preso?", a: "Flagrante delito, ordem judicial, prisão preventiva, prisão temporária, prisão definitiva." },
      { q: "Quando pode usar algemas?", a: "Risco de fuga, resistência, perigo ao policial ou a terceiros." },
      { q: "O que deve ser comunicado na prisão?", a: "Juiz, MP, família e pessoa indicada, imediatamente." },
      { q: "Quais direitos o preso deve ser informado?", a: "Direito ao silêncio e direito a advogado." }
    ],
    quiz: [
      { q: "O uso de algemas é permitido:", opts: ["Sempre", "Nunca", "Apenas em risco de fuga ou resistência", "Apenas com autorização judicial"], gabarito: 2, exp: "Só em casos de risco de fuga, resistência, perigo ao policial ou terceiros (Súmula Vinculante 11)." },
      { q: "Se o policial não informar os direitos ao preso:", opts: ["Não tem consequência", "Pode anular a prisão", "Apenas responsabilidade administrativa", "Apenas responsabilidade civil"], gabarito: 1, exp: "A não comunicação dos direitos pode anular a prisão." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Prisão Civil": {
    icon: "⛓️",
    color: "#8b5cf6",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⛓️</div>
    <h1 class="notion-title">Prisão Civil</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CF/88</span>
      <span class="meta-tag tag-g">Direitos Fundamentais</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Regra:</span>
    <div class="lex-item">❌ Não existe prisão por dívida.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Exceção:</span>
    <div class="lex-item">✔ Devedor de pensão alimentícia.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Depositário infiel</span>
    <div class="lex-item">O STF decidiu que <strong>NÃO</strong> pode mais ser preso.</div>
  </div>

</div>`,
    flashcards: [
      { q: "Existe prisão por dívida?", a: "NÃO, regra geral não existe." },
      { q: "Qual a exceção à proibição de prisão por dívida?", a: "Devedor de pensão alimentícia." },
      { q: "Depositário infiel pode ser preso?", a: "NÃO, o STF decidiu que não pode mais." }
    ],
    quiz: [
      { q: "A prisão civil é permitida para:", opts: ["Qualquer dívida", "Depositário infiel", "Devedor de pensão alimentícia", "Cheque sem fundos"], gabarito: 2, exp: "A única exceção permitida é o devedor de pensão alimentícia." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Mandados de Criminalização": {
    icon: "🚫",
    color: "#dc2626",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🚫</div>
    <h1 class="notion-title">Mandados de Criminalização</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CF/88</span>
      <span class="meta-tag tag-g">Ordem Constitucional</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">A Constituição manda punir:</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔</span> <strong>Racismo</strong> — inafiançável e imprescritível</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Ação de grupos armados contra o Estado</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Tortura</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Tráfico</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Terrorismo</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Crimes hediondos</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">STF decidiu</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔</span> Injúria racial = racismo (imprescritível e inafiançável)</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Homofobia e transfobia = racismo (imprescritível e inafiançável)</div>
    </div>
  </div>

</div>`,
    flashcards: [
      { q: "O que é inafiançável e imprescritível?", a: "Racismo, injúria racial, homofobia e transfobia." },
      { q: "Quais crimes a Constituição manda punir?", a: "Racismo, ação de grupos armados, tortura, tráfico, terrorismo, crimes hediondos." },
      { q: "Injúria racial é considerada racismo?", a: "SIM, segundo o STF — imprescritível e inafiançável." }
    ],
    quiz: [
      { q: "É inafiançável e imprescritível:", opts: ["Roubo", "Racismo", "Furto", "Lesão corporal"], gabarito: 1, exp: "Racismo é inafiançável e imprescritível, assim como injúria racial, homofobia e transfobia." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Remédios Constitucionais": {
    icon: "⚖️",
    color: "#059669",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⚖️</div>
    <h1 class="notion-title">Remédios Constitucionais (Ações Constitucionais)</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CF/88</span>
      <span class="meta-tag tag-g">Proteção de Direitos</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">São ações para proteger direitos fundamentais.</span>
  </div>

  <div class="lex-section">
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background: #f3f4f6;">
          <th style="border: 1px solid #d1d5db; padding: 8px; text-align: left;">Sigla</th>
          <th style="border: 1px solid #d1d5db; padding: 8px; text-align: left;">Nome</th>
          <th style="border: 1px solid #d1d5db; padding: 8px; text-align: left;">Para que serve</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #d1d5db; padding: 8px;"><strong>HC</strong></td>
          <td style="border: 1px solid #d1d5db; padding: 8px;">Habeas Corpus</td>
          <td style="border: 1px solid #d1d5db; padding: 8px;">Liberdade de locomoção</td>
        </tr>
        <tr>
          <td style="border: 1px solid #d1d5db; padding: 8px;"><strong>MS</strong></td>
          <td style="border: 1px solid #d1d5db; padding: 8px;">Mandado de Segurança</td>
          <td style="border: 1px solid #d1d5db; padding: 8px;">Direito líquido e certo</td>
        </tr>
        <tr>
          <td style="border: 1px solid #d1d5db; padding: 8px;"><strong>MI</strong></td>
          <td style="border: 1px solid #d1d5db; padding: 8px;">Mandado de Injunção</td>
          <td style="border: 1px solid #d1d5db; padding: 8px;">Falta de lei regulamentadora</td>
        </tr>
        <tr>
          <td style="border: 1px solid #d1d5db; padding: 8px;"><strong>HD</strong></td>
          <td style="border: 1px solid #d1d5db; padding: 8px;">Habeas Data</td>
          <td style="border: 1px solid #d1d5db; padding: 8px;">Acesso a dados pessoais</td>
        </tr>
        <tr>
          <td style="border: 1px solid #d1d5db; padding: 8px;"><strong>AP</strong></td>
          <td style="border: 1px solid #d1d5db; padding: 8px;">Ação Popular</td>
          <td style="border: 1px solid #d1d5db; padding: 8px;">Proteger patrimônio público</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>`,
    flashcards: [
      { q: "O que protege o Habeas Corpus?", a: "Liberdade de locomoção." },
      { q: "Para que serve o Mandado de Segurança?", a: "Direito líquido e certo não amparado por HC." },
      { q: "Quando cabe o Mandado de Injunção?", a: "Quando falta norma regulamentadora para exercício de direitos." },
      { q: "O que protege a Ação Popular?", a: "Patrimônio público." }
    ],
    quiz: [
      { q: "O remédio constitucional para proteger liberdade de locomoção é:", opts: ["Mandado de Segurança", "Habeas Corpus", "Ação Popular", "Habeas Data"], gabarito: 1, exp: "Habeas Corpus protege a liberdade de locomoção." }
    ]
  },

  // ═══════════════════════════════════════════════════
  "Habeas Corpus": {
    icon: "🟢",
    color: "#16a34a",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🟢</div>
    <h1 class="notion-title">Habeas Corpus — Art. 5º, LXVIII</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">CF/88</span>
      <span class="meta-tag tag-g">Remédio Constitucional</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Protege:</span>
    <div class="lex-item">➡️ Liberdade de locomoção — direito de ir e vir.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Tipos:</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔</span> <strong>Preventivo</strong> — ameaça de prisão</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> <strong>Repressivo</strong> — prisão já ocorreu</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Quem pode pedir</span>
    <div class="lex-cols">
      <div class="lex-section">
        <span class="lex-label blue">Impetrante:</span>
        <div class="lex-list">
          <div class="lex-list-item"><span class="lex-num">→</span> Qualquer pessoa</div>
          <div class="lex-list-item"><span class="lex-num">→</span> Pessoa física ou jurídica</div>
          <div class="lex-list-item"><span class="lex-num">→</span> Não precisa de advogado</div>
        </div>
      </div>
      <div class="lex-section">
        <span class="lex-label blue">Paciente:</span>
        <div class="lex-item">Somente pessoa física.</div>
      </div>
    </div>
    <div class="lex-section">
      <span class="lex-label blue">Autoridade coatora:</span>
      <div class="lex-list">
        <div class="lex-list-item"><span class="lex-num">→</span> Agente público</div>
        <div class="lex-list-item"><span class="lex-num">→</span> Particular</div>
      </div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">HC e punição militar</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔</span> Cabe HC para contestar ilegalidade (excesso de prazo, abuso)</div>
      <div class="lex-list-item"><span class="lex-num">❌</span> Não cabe para discutir o mérito da punição</div>
    </div>
  </div>

</div>`,
    flashcards: [
      { q: "O que protege o Habeas Corpus?", a: "Liberdade de locomoção, direito de ir e vir." },
      { q: "Quem pode impetrar HC?", a: "Qualquer pessoa, física ou jurídica, sem precisar de advogado." },
      { q: "HC serve para pessoa jurídica como paciente?", a: "NÃO. O paciente só pode ser pessoa física." },
      { q: "HC cabe em punição militar?", a: "SIM para ilegalidade (excesso de prazo, abuso). NÃO para discutir o mérito." }
    ],
    quiz: [
      { q: "Sobre Habeas Corpus, é CORRETO:", opts: ["Paciente pode ser pessoa jurídica", "Impetrante precisa ser advogado", "Protege liberdade de locomoção", "Não cabe em nenhuma punição militar"], gabarito: 2, exp: "HC protege a liberdade de locomoção. Paciente só pessoa física; qualquer um pode impetrar." }
    ]
  }

};
