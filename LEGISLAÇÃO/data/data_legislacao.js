// data/data_legislacao-especifica.js
// Conteúdo de Legislação Específica — formatado com classes lex-*

window.DATA_LEGISLACAO = {

  // ═══════════════════════════════════════════════════
  "CF - Proibição de Tortura": {
    icon: "⚖️",
    color: "#4a85f0",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⚖️</div>
    <h1 class="notion-title">Constituição Federal — Proibição de Tortura</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 5º CF</span>
      <span class="meta-tag tag-gold">Cláusula Pétrea</span>
      <span class="meta-tag tag-g">Direito Fundamental</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Art. 5º, III — Proibição Geral</span>
    <div class="lex-item">Ninguém será submetido a tortura nem a tratamento desumano ou degradante.</div>
    <div class="lex-item">Proibição vale para o Estado <strong>e</strong> para qualquer pessoa.</div>
    <div class="lex-item">É direito fundamental — cláusula pétrea (não pode ser abolido).</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Art. 5º, XLIII — Crimes Equiparados</span>
    <div class="lex-item">A lei considerará <strong>inafiançáveis e insuscetíveis de graça ou anistia</strong>:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">1.</span> Tortura</div>
      <div class="lex-list-item"><span class="lex-num">2.</span> Tráfico de drogas</div>
      <div class="lex-list-item"><span class="lex-num">3.</span> Terrorismo</div>
      <div class="lex-list-item"><span class="lex-num">4.</span> Crimes hediondos</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label">Responsabiliza</span>
    <div class="lex-item">Mandantes</div>
    <div class="lex-item">Executores</div>
    <div class="lex-item">Quem podia evitar e se <strong>omitiu</strong></div>
  </div>

  <div class="lex-alert">
    <span class="lex-alert-icon">⚠️</span>
    Atenção de prova — vedações e permissões
  </div>

  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label rose">Não cabe</span>
      <div class="lex-item">Graça</div>
      <div class="lex-item">Anistia</div>
      <div class="lex-item">Fiança</div>
    </div>
    <div class="lex-section">
      <span class="lex-label green">Cabe (pegadinha!)</span>
      <div class="lex-item"><strong>Liberdade provisória</strong> — sem fiança, mas cabe</div>
      <div class="lex-item">Prescrição — é <strong>prescritível</strong></div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Conceito de Tortura</span>
    <div class="lex-item">Constranger alguém com <strong>violência ou grave ameaça</strong>, causando sofrimento físico ou mental.</div>
    <div class="lex-item">Exige <strong>finalidade específica</strong> prevista em lei.</div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">🚨</span>
    <strong>Sem finalidade específica → NÃO é tortura.</strong><br/>
    Pode configurar lesão corporal.
  </div>

  <div class="lex-section">
    <span class="lex-label">Características</span>
    <div class="lex-item">Crime <strong>comum</strong> — qualquer pessoa pode cometer.</div>
    <div class="lex-item">Tortura-castigo é crime <strong>próprio</strong> — só quem tem autoridade.</div>
    <div class="lex-item">Não está na Lei de Crimes Hediondos, mas CF dá tratamento equivalente.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Imprescritíveis na CF (apenas estes dois!)</span>
    <div class="lex-item">Racismo</div>
    <div class="lex-item">Ação de grupos armados contra a ordem constitucional</div>
  </div>

</div>`
  },

  // ═══════════════════════════════════════════════════
  "Tipos de Tortura": {
    icon: "🔍",
    color: "#f59e0b",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔍</div>
    <h1 class="notion-title">Tipos de Tortura</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-gold">Lei 9.455/1997</span>
      <span class="meta-tag tag-b">Art. 1º</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">1. Tortura-Prova</span>
    <div class="lex-item">Finalidade: obter <strong>informação, confissão ou declaração</strong>.</div>
    <div class="lex-item">Ex: policial agride suspeito para obter confissão.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">2. Tortura para Ação ou Omissão</span>
    <div class="lex-item">Obrigar alguém a <strong>fazer</strong> algo ou <strong>deixar de fazer</strong> algo.</div>
    <div class="lex-item">Ex: espancar para obrigar a participar de crime.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">3. Tortura Discriminatória</span>
    <div class="lex-item">Motivada por: <strong>raça, religião ou etnia</strong>.</div>
    <div class="callout callout-rose" style="margin-top:6px;">
      <span class="callout-icon">⚠️</span>
      <strong>Pegadinha:</strong> NÃO inclui discriminação sexual.
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">4. Tortura-Castigo</span>
    <div class="lex-item">Submeter alguém sob <strong>guarda, poder ou autoridade</strong> a sofrimento como castigo ou prevenção.</div>
    <div class="lex-item">Ex: agente penitenciário agride preso.</div>
    <div class="callout callout-gold" style="margin-top:6px;">
      <span class="callout-icon">⚠️</span>
      <strong>Crime próprio</strong> — somente quem detém autoridade pode cometer.
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label blue">5. Tortura Física</span>
      <div class="lex-item">Pau-de-arara</div>
      <div class="lex-item">Choque elétrico</div>
      <div class="lex-item">Espancamento</div>
    </div>
    <div class="lex-section">
      <span class="lex-label blue">6. Tortura Psicológica</span>
      <div class="lex-item">Ameaça de morte</div>
      <div class="lex-item">Ameaça à família</div>
      <div class="lex-item">Humilhação sistemática</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">7. Tortura por Omissão</span>
    <div class="lex-item">Quem tinha <strong>dever de evitar ou apurar</strong> e não o fez.</div>
    <div class="lex-item">Ex: 5 policiais — 2 torturam, 3 assistem → <strong>TODOS respondem</strong>.</div>
    <div class="lex-item">Pena dos omissos: <strong>1 a 4 anos</strong>.</div>
  </div>

</div>`
  },

  // ═══════════════════════════════════════════════════
  "Penas da Lei de Tortura": {
    icon: "⚖️",
    color: "#a78bfa",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⚖️</div>
    <h1 class="notion-title">Penas da Lei de Tortura</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Lei 9.455/1997</span>
      <span class="meta-tag tag-gold">Art. 1º, §§ 3º e 4º</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Tabela de Penas</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Tortura simples — <strong>2 a 8 anos</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> Com lesão grave — <strong>4 a 10 anos</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> Com resultado morte — <strong>8 a 16 anos</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> Omissão — <strong>1 a 4 anos</strong></div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Majorantes — Aumenta de 1/6 a 1/3</span>
    <div class="lex-cols">
      <div>
        <div class="lex-item">Criança</div>
        <div class="lex-item">Adolescente</div>
        <div class="lex-item">Idoso (acima de 60 anos)</div>
        <div class="lex-item">Gestante</div>
      </div>
      <div>
        <div class="lex-item">Pessoa com deficiência</div>
        <div class="lex-item">Agente público</div>
        <div class="lex-item">Em situação de sequestro</div>
      </div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    Se o agente for <strong>agente público</strong>, a pena pode ser <strong>duplicada</strong>.
  </div>

  <div class="lex-section">
    <span class="lex-label">Qualificadora</span>
    <div class="lex-item">Aumenta o <strong>mínimo E o máximo</strong> da pena (diferente do majorante).</div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Regime de Cumprimento</span>
    <div class="lex-item">A lei previa regime fechado <strong>obrigatório</strong>.</div>
    <div class="lex-item">O STF declarou <strong>inconstitucional</strong>.</div>
    <div class="lex-item">O regime deve seguir as regras gerais do Código Penal.</div>
  </div>

</div>`
  },

  // ═══════════════════════════════════════════════════
  "SINARM e SIGMA": {
    icon: "🔫",
    color: "#10b981",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔫</div>
    <h1 class="notion-title">SINARM e SIGMA</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-g">Lei 10.826/2003</span>
      <span class="meta-tag tag-b">Estatuto do Desarmamento</span>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label blue">SINARM</span>
      <div class="lex-item">Sistema Nacional de Armas</div>
      <div class="lex-item">Administrado pela <strong>Polícia Federal</strong></div>
      <div class="lex-item">Controla armas de <strong>uso permitido</strong></div>
      <div class="lex-item">Cadastra armas e proprietários</div>
      <div class="lex-item">Registra autorizações</div>
      <div class="lex-item">Integra cadastros policiais</div>
    </div>

    <div class="lex-section">
      <span class="lex-label green">SIGMA</span>
      <div class="lex-item">Sistema de Gerenciamento Militar de Armas</div>
      <div class="lex-item">Administrado pelo <strong>Exército</strong></div>
      <div class="lex-item">Controla armas de <strong>uso restrito</strong></div>
      <div class="lex-item">Forças Armadas, PM, Bombeiros</div>
    </div>

  </div>

  <div class="callout">
    <span class="callout-icon">💡</span>
    <strong>Resumo:</strong> SINARM = uso permitido (PF) &nbsp;|&nbsp; SIGMA = uso restrito (Exército)
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Atenção</span>
    <div class="lex-item">Armas da PM e do Exército <strong>NÃO ficam no SINARM</strong>.</div>
    <div class="lex-item">Ficam no SIGMA.</div>
  </div>

</div>`
  },

  // ═══════════════════════════════════════════════════
  "Classificação de Armas": {
    icon: "🎯",
    color: "#38bdf8",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🎯</div>
    <h1 class="notion-title">Classificação das Armas de Fogo</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Lei 10.826/2003</span>
      <span class="meta-tag tag-teal">Estatuto do Desarmamento</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Classificação por Uso</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Uso Permitido</strong> — controlado pela Polícia Federal</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Uso Restrito</strong> — controlado pelo Exército</div>
      <div class="lex-list-item"><span class="lex-num">→</span> <strong>Uso Proibido</strong> — ninguém pode ter</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">🚨</span>
    Arma de <strong>uso proibido</strong> = <strong>Crime Hediondo</strong>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Destino das Armas Apreendidas</span>
    <div class="lex-item">Regra geral: vão para o <strong>Exército</strong>.</div>
    <div class="lex-item">Juiz pode determinar: destruição, uso pela polícia ou forças armadas.</div>
    <div class="lex-item">Armas do tráfico: passam para a União após perícia — prioridade para segurança pública.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Posse vs. Porte</span>
    <div class="lex-cols">
      <div class="lex-section">
        <span class="lex-label">Posse</span>
        <div class="lex-item">Ter arma em <strong>casa ou trabalho</strong></div>
        <div class="lex-item">Autoriza: <strong>Polícia Federal</strong></div>
      </div>
      <div class="lex-section">
        <span class="lex-label">Porte</span>
        <div class="lex-item">Andar <strong>armado na rua</strong></div>
        <div class="lex-item">Autoriza: <strong>Exército</strong></div>
      </div>
    </div>
  </div>

</div>`
  },

  // ═══════════════════════════════════════════════════
  "Crimes do Estatuto": {
    icon: "⚠️",
    color: "#ef4444",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">⚠️</div>
    <h1 class="notion-title">Crimes do Estatuto do Desarmamento</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Lei 10.826/2003</span>
      <span class="meta-tag tag-gold">Arts. 12–22</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Porte para Caçador Rural</span>
    <div class="lex-item">Morar na <strong>zona rural</strong></div>
    <div class="lex-item">Maior de <strong>25 anos</strong></div>
    <div class="lex-item">Comprovar necessidade</div>
    <div class="lex-item">Arma permitida: tiro simples, até calibre 16, alma lisa</div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Art. 13 — Comunicação de Perda</span>
    <div class="lex-item">Perdeu arma ou munição → registrar BO e comunicar em <strong>24 horas</strong>.</div>
    <div class="lex-item">Obrigação especial para <strong>empresas de segurança</strong>.</div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Art. 13 — Acesso de Menor</span>
    <div class="lex-item">Crime: não impedir acesso de <strong>menor de 18</strong> ou <strong>pessoa com deficiência mental</strong> à arma.</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Particular: pena de <strong>1 a 2 anos</strong></div>
      <div class="lex-list-item"><span class="lex-num">→</span> Agente público: <strong>15 dias a 3 meses</strong> ou multa</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Art. 15 — Disparo de Arma de Fogo</span>
    <div class="lex-item">Pena: <strong>2 a 4 anos</strong> + multa</div>
    <div class="lex-item">Disparar em via pública, local habitado ou em direção de pessoa.</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">⚠️</span>
    <strong>Precisa de dolo (vontade)!</strong><br/>
    Disparo culposo não configura este crime.
  </div>

</div>`
  },

  // ═══════════════════════════════════════════════════
  "Lei Maria da Penha - Conceito": {
    icon: "👩",
    color: "#ec4899",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">👩</div>
    <h1 class="notion-title">Lei Maria da Penha</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Lei 11.340/2006</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Aplica Quando</span>
    <div class="lex-item">Violência doméstica</div>
    <div class="lex-item">Familiar</div>
    <div class="lex-item">Relação íntima de afeto</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label green">Vítima</span>
      <div class="lex-item">Mulher cisgênero</div>
      <div class="lex-item">Mulher trans</div>
    </div>
    <div class="lex-section">
      <span class="lex-label">Agressor</span>
      <div class="lex-item">Homem <strong>ou</strong> mulher</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Tipos de Violência</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">1.</span> Física</div>
      <div class="lex-list-item"><span class="lex-num">2.</span> Psicológica</div>
      <div class="lex-list-item"><span class="lex-num">3.</span> Sexual</div>
      <div class="lex-list-item"><span class="lex-num">4.</span> Patrimonial</div>
      <div class="lex-list-item"><span class="lex-num">5.</span> Moral</div>
      <div class="lex-list-item"><span class="lex-num">6.</span> Institucional</div>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section">
      <span class="lex-label gold">Patrimonial</span>
      <div class="lex-item">Destruir bens</div>
      <div class="lex-item">Reter bens</div>
      <div class="lex-item">Subtrair bens</div>
    </div>

    <div class="lex-section">
      <span class="lex-label gold">Sexual</span>
      <div class="lex-item">Forçar relação sexual</div>
      <div class="lex-item">Impedir uso de contraceptivo</div>
    </div>

    <div class="lex-section">
      <span class="lex-label gold">Moral</span>
      <div class="lex-item">Calúnia</div>
      <div class="lex-item">Injúria</div>
      <div class="lex-item">Difamação</div>
    </div>

    <div class="lex-section">
      <span class="lex-label gold">Psicológica</span>
      <div class="lex-item">Humilhação</div>
      <div class="lex-item">Ameaça</div>
      <div class="lex-item">Diminuição da autoestima</div>
    </div>

  </div>

  <div class="lex-section">
    <span class="lex-label purple">Institucional</span>
    <div class="lex-item">Agente público que <strong>prejudica, retarda ou dificulta</strong> o atendimento à vítima.</div>
  </div>

</div>`
  },

  // ═══════════════════════════════════════════════════
  "Medidas Protetivas": {
    icon: "🛡️",
    color: "#8b5cf6",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🛡️</div>
    <h1 class="notion-title">Medidas Protetivas</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Lei 11.340/2006</span>
      <span class="meta-tag tag-gold">Arts. 22–24</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Podem Incluir</span>
    <div class="lex-item">Suspender porte de arma</div>
    <div class="lex-item">Proibir aproximação da vítima</div>
    <div class="lex-item">Proibir contato por qualquer meio</div>
    <div class="lex-item">Afastamento do lar</div>
    <div class="lex-item">Proibir frequentar determinados lugares</div>
    <div class="lex-item">Restrição de visitas a filhos</div>
    <div class="lex-item">Acompanhamento psicossocial obrigatório</div>
  </div>

  <div class="callout">
    <span class="callout-icon">⚖️</span>
    <strong>Somente o Juiz</strong> pode impor medidas protetivas.
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Afastamento do Lar — Quem pode determinar?</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">1.</span> <strong>Juiz</strong> — regra geral</div>
      <div class="lex-list-item"><span class="lex-num">2.</span> <strong>Delegado</strong> — se não houver juiz disponível</div>
      <div class="lex-list-item"><span class="lex-num">3.</span> <strong>Policial</strong> — se não houver delegado</div>
    </div>
    <div class="lex-item" style="margin-top:8px;">Deve comunicar o juiz em <strong>24h</strong>; juiz decide em <strong>24h</strong>.</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label rose">Descumprir Medida Protetiva</span>
      <div class="lex-item">Pena: <strong>2 a 5 anos</strong></div>
    </div>
    <div class="lex-section">
      <span class="lex-label">Duração da Medida</span>
      <div class="lex-item">Sem prazo fixo</div>
      <div class="lex-item">Dura enquanto houver risco</div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label gold">Retratação</span>
    <div class="lex-item">Só é possível <strong>até o recebimento da denúncia</strong>.</div>
    <div class="lex-item">Após esse momento, não pode mais retratar.</div>
  </div>

</div>`
  },

  // ═══════════════════════════════════════════════════
  "Regras Importantes LMP": {
    icon: "📌",
    color: "#14b8a6",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">📌</div>
    <h1 class="notion-title">Regras Importantes — Lei Maria da Penha</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-teal">Lei 11.340/2006</span>
      <span class="meta-tag tag-g">Súmula 542 STJ</span>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label green">Direitos da Vítima</span>
    <div class="lex-item">Aluguel social por até <strong>6 meses</strong></div>
    <div class="lex-item">Matrícula dos filhos em escola próxima ao novo endereço</div>
    <div class="lex-item">Proteção policial</div>
    <div class="lex-item">Atendimento psicológico e social</div>
  </div>

  <div class="lex-section">
    <span class="lex-label rose">Regras Processuais — O que NÃO se aplica</span>
    <div class="lex-item">NÃO aplica princípio da <strong>insignificância</strong></div>
    <div class="lex-item">NÃO aplica <strong>Lei 9.099/95</strong> (Juizados Especiais)</div>
    <div class="lex-item">NÃO cabe <strong>suspensão condicional do processo</strong></div>
    <div class="lex-item">NÃO cabe <strong>pena de cesta básica</strong></div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">⚠️</span>
    <strong>Lesão corporal</strong> = ação pública <strong>incondicionada</strong><br/>
    Não depende de representação da vítima. (Súmula 542 STJ)
  </div>

  <div class="lex-section">
    <span class="lex-label blue">Juizado de Violência Doméstica — O que pode tratar</span>
    <div class="lex-cols">
      <div class="lex-section">
        <span class="lex-label green">Pode</span>
        <div class="lex-item">Medidas protetivas</div>
        <div class="lex-item">Processo criminal</div>
        <div class="lex-item">Divórcio</div>
        <div class="lex-item">Alimentos</div>
      </div>
      <div class="lex-section">
        <span class="lex-label rose">Não pode</span>
        <div class="lex-item">Partilha de bens</div>
      </div>
    </div>
  </div>

  <div class="lex-section">
    <span class="lex-label">Natureza da Ação Penal</span>
    <div class="lex-item">Lesão corporal dolosa → <strong>pública incondicionada</strong></div>
    <div class="lex-item">Ameaça → <strong>pública condicionada</strong> à representação</div>
    <div class="lex-item">Crimes contra a honra → <strong>privada</strong></div>
  </div>

</div>`
  }

};

