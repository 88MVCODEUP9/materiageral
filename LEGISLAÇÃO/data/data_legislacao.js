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

  <div class="callout callout-purple">
    <span class="callout-icon">💡</span>
    <div>
      <strong>Explicação simples:</strong> A Constituição garante que ninguém pode ser torturado ou tratado de forma cruel, nem pelo governo nem por pessoas comuns. É um direito básico que não pode ser tirado de ninguém.<br/><br/>
      <strong>Exemplo prático:</strong> Um policial não pode bater em um suspeito para forçá-lo a confessar um crime. Se isso acontecer, o policial comete tortura, que é crime grave e imprescritível.
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Art. 5º, III — Proibição Geral</div>
    <div class="lex-expandable-item">Ninguém será submetido a tortura nem a tratamento desumano ou degradante.</div>
    <div class="lex-expandable-item">Proibição vale para o Estado <strong>e</strong> para qualquer pessoa.</div>
    <div class="lex-expandable-item">É direito fundamental — cláusula pétrea (não pode ser abolido).</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Art. 5º, XLIII — Crimes Equiparados</div>
    <div class="lex-expandable-item">A lei considerará <strong>inafiançáveis e insuscetíveis de graça ou anistia</strong>:</div>
    <div class="lex-list">
      <div class="lex-expandable-item">Tortura</div>
      <div class="lex-expandable-item">Tráfico de drogas</div>
      <div class="lex-expandable-item">Terrorismo</div>
      <div class="lex-expandable-item">Crimes hediondos</div>
    </div>
  </div>

  <div class="lex-section-container">
    <span class="lex-label">Responsabiliza</span>
    <div class="lex-expandable-item">Mandantes</div>
    <div class="lex-expandable-item">Executores</div>
    <div class="lex-expandable-item">Quem podia evitar e se <strong>omitiu</strong></div>
  </div>

  <div class="lex-alert">
    <span class="lex-alert-icon">⚠️</span>
    Atenção de prova — vedações e permissões
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Não cabe</div>
      <div class="lex-expandable-item">Graça</div>
      <div class="lex-expandable-item">Anistia</div>
      <div class="lex-expandable-item">Fiança</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Cabe (pegadinha!)</div>
      <div class="lex-expandable-item"><strong>Liberdade provisória</strong> — sem fiança, mas cabe</div>
      <div class="lex-expandable-item">Prescrição — é <strong>prescritível</strong></div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Conceito de Tortura</div>
    <div class="lex-expandable-item">Constranger alguém com <strong>violência ou grave ameaça</strong>, causando sofrimento físico ou mental.</div>
    <div class="lex-expandable-item">Exige <strong>finalidade específica</strong> prevista em lei.</div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">🚨</span>
    <strong>Sem finalidade específica → NÃO é tortura.</strong><br/>
    Pode configurar lesão corporal.
  </div>

  <div class="lex-section-container">
    <span class="lex-label">Características</span>
    <div class="lex-expandable-item">Crime <strong>comum</strong> — qualquer pessoa pode cometer.</div>
    <div class="lex-expandable-item">Tortura-castigo é crime <strong>próprio</strong> — só quem tem autoridade.</div>
    <div class="lex-expandable-item">Não está na Lei de Crimes Hediondos, mas CF dá tratamento equivalente.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Imprescritíveis na CF (apenas estes dois!)</div>
    <div class="lex-expandable-item">Racismo</div>
    <div class="lex-expandable-item">Ação de grupos armados contra a ordem constitucional</div>
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

  <div class="callout callout-purple">
    <span class="callout-icon">💡</span>
    <div>
      <strong>Explicação simples:</strong> A tortura pode acontecer de várias formas. A lei separa os tipos para definir melhor cada situação e as punições adequadas. Conhecer os tipos ajuda a identificar quando alguém está sendo torturado.<br/><br/>
      <strong>Exemplo prático:</strong> João foi preso e o policial bateu nele para que ele confessasse onde estava escondido o dinheiro do roubo. Isso é tortura-prova: usar violência para obter uma confissão.
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">1. Tortura-Prova</div>
    <div class="lex-expandable-item">Finalidade: obter <strong>informação, confissão ou declaração</strong>.</div>
    <div class="lex-expandable-item">Ex: policial agride suspeito para obter confissão.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">2. Tortura para Ação ou Omissão</div>
    <div class="lex-expandable-item">Obrigar alguém a <strong>fazer</strong> algo ou <strong>deixar de fazer</strong> algo.</div>
    <div class="lex-expandable-item">Ex: espancar para obrigar a participar de crime.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">3. Tortura Discriminatória</div>
    <div class="lex-expandable-item">Motivada por: <strong>raça, religião ou etnia</strong>.</div>
    <div class="callout callout-rose" style="margin-top:6px;">
      <span class="callout-icon">⚠️</span>
      <strong>Pegadinha:</strong> NÃO inclui discriminação sexual.
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">4. Tortura-Castigo</div>
    <div class="lex-expandable-item">Submeter alguém sob <strong>guarda, poder ou autoridade</strong> a sofrimento como castigo ou prevenção.</div>
    <div class="lex-expandable-item">Ex: agente penitenciário agride preso.</div>
    <div class="callout callout-gold" style="margin-top:6px;">
      <span class="callout-icon">⚠️</span>
      <strong>Crime próprio</strong> — somente quem detém autoridade pode cometer.
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">5. Tortura Física</div>
      <div class="lex-expandable-item">Pau-de-arara</div>
      <div class="lex-expandable-item">Choque elétrico</div>
      <div class="lex-expandable-item">Espancamento</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">6. Tortura Psicológica</div>
      <div class="lex-expandable-item">Ameaça de morte</div>
      <div class="lex-expandable-item">Ameaça à família</div>
      <div class="lex-expandable-item">Humilhação sistemática</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">7. Tortura por Omissão</div>
    <div class="lex-expandable-item">Quem tinha <strong>dever de evitar ou apurar</strong> e não o fez.</div>
    <div class="lex-expandable-item">Ex: 5 policiais — 2 torturam, 3 assistem → <strong>TODOS respondem</strong>.</div>
    <div class="lex-expandable-item">Pena dos omissos: <strong>1 a 4 anos</strong>.</div>
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

  <div class="callout callout-purple">
    <span class="callout-icon">💡</span>
    <div>
      <strong>Explicação simples:</strong> Quem comete tortura sofre punições diferentes conforme a gravidade do caso. A pena aumenta se a vítima for vulnerável (criança, idoso, gestante) ou se houver lesões graves.<br/><br/>
      <strong>Exemplo prático:</strong> Se um agente público torturar uma gestante, a pena dele pode ser aumentada em até 1/3 pelo fato de ela ser vulnerável, além de poder ser duplicada por ele ser agente público.
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Tabela de Penas</div>
    <div class="lex-list">
      <div class="lex-expandable-item">Tortura simples — <strong>2 a 8 anos</strong></div>
      <div class="lex-expandable-item">Com lesão grave — <strong>4 a 10 anos</strong></div>
      <div class="lex-expandable-item">Com resultado morte — <strong>8 a 16 anos</strong></div>
      <div class="lex-expandable-item">Omissão — <strong>1 a 4 anos</strong></div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Majorantes — Aumenta de 1/6 a 1/3</div>
    <div class="lex-cols">
      <div>
        <div class="lex-expandable-item">Criança</div>
        <div class="lex-expandable-item">Adolescente</div>
        <div class="lex-expandable-item">Idoso (acima de 60 anos)</div>
        <div class="lex-expandable-item">Gestante</div>
      </div>
      <div>
        <div class="lex-expandable-item">Pessoa com deficiência</div>
        <div class="lex-expandable-item">Agente público</div>
        <div class="lex-expandable-item">Em situação de sequestro</div>
      </div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    Se o agente for <strong>agente público</strong>, a pena pode ser <strong>duplicada</strong>.
  </div>

  <div class="lex-section-container">
    <span class="lex-label">Qualificadora</span>
    <div class="lex-expandable-item">Aumenta o <strong>mínimo E o máximo</strong> da pena (diferente do majorante).</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Regime de Cumprimento</div>
    <div class="lex-expandable-item">A lei previa regime fechado <strong>obrigatório</strong>.</div>
    <div class="lex-expandable-item">O STF declarou <strong>inconstitucional</strong>.</div>
    <div class="lex-expandable-item">O regime deve seguir as regras gerais do Código Penal.</div>
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

  <div class="callout callout-purple">
    <span class="callout-icon">💡</span>
    <div>
      <strong>Explicação simples:</strong> O Brasil tem dois sistemas para controlar armas de fogo. Um é para armas de uso comum (registradas na Polícia Federal), outro é para armas restritas (controladas pelo Exército). Cada sistema cuida de um tipo diferente de arma.<br/><br/>
      <strong>Exemplo prático:</strong> Se você comprar uma pistola comum para defesa pessoal, ela será cadastrada no SINARM (Polícia Federal). Mas se for uma arma de uso militar, ela vai para o SIGMA (Exército).
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section-container">
      <div class="lex-section-title">SINARM</div>
      <div class="lex-expandable-item">Sistema Nacional de Armas</div>
      <div class="lex-expandable-item">Administrado pela <strong>Polícia Federal</strong></div>
      <div class="lex-expandable-item">Controla armas de <strong>uso permitido</strong></div>
      <div class="lex-expandable-item">Cadastra armas e proprietários</div>
      <div class="lex-expandable-item">Registra autorizações</div>
      <div class="lex-expandable-item">Integra cadastros policiais</div>
    </div>

    <div class="lex-section-container">
      <div class="lex-section-title">SIGMA</div>
      <div class="lex-expandable-item">Sistema de Gerenciamento Militar de Armas</div>
      <div class="lex-expandable-item">Administrado pelo <strong>Exército</strong></div>
      <div class="lex-expandable-item">Controla armas de <strong>uso restrito</strong></div>
      <div class="lex-expandable-item">Forças Armadas, PM, Bombeiros</div>
    </div>

  </div>

  <div class="callout">
    <span class="callout-icon">💡</span>
    <strong>Resumo:</strong> SINARM = uso permitido (PF) &nbsp;|&nbsp; SIGMA = uso restrito (Exército)
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Atenção</div>
    <div class="lex-expandable-item">Armas da PM e do Exército <strong>NÃO ficam no SINARM</strong>.</div>
    <div class="lex-expandable-item">Ficam no SIGMA.</div>
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

  <div class="callout callout-purple">
    <span class="callout-icon">💡</span>
    <div>
      <strong>Explicação simples:</strong> As armas de fogo são divididas em três categorias conforme quem pode usá-las. Armas de uso permitido são acessíveis a civis (com registro). Armas de uso restrito só para policiais e militares. Armas de uso proibido são ilegais para todos.<br/><br/>
      <strong>Exemplo prático:</strong> Maria tem uma pistola registrada para defesa pessoal (uso permitido). O policial João tem uma arma de fogo automática (uso restrito). Uma metralhadora de uso exclusivo do Exército seria de uso proibido para civis.
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Classificação por Uso</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>Uso Permitido</strong> — controlado pela Polícia Federal</div>
      <div class="lex-expandable-item"><strong>Uso Restrito</strong> — controlado pelo Exército</div>
      <div class="lex-expandable-item"><strong>Uso Proibido</strong> — ninguém pode ter</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">🚨</span>
    Arma de <strong>uso proibido</strong> = <strong>Crime Hediondo</strong>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Destino das Armas Apreendidas</div>
    <div class="lex-expandable-item">Regra geral: vão para o <strong>Exército</strong>.</div>
    <div class="lex-expandable-item">Juiz pode determinar: destruição, uso pela polícia ou forças armadas.</div>
    <div class="lex-expandable-item">Armas do tráfico: passam para a União após perícia — prioridade para segurança pública.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Posse vs. Porte</div>
    <div class="lex-cols">
      <div class="lex-section-container">
        <span class="lex-label">Posse</span>
        <div class="lex-expandable-item">Ter arma em <strong>casa ou trabalho</strong></div>
        <div class="lex-expandable-item">Autoriza: <strong>Polícia Federal</strong></div>
      </div>
      <div class="lex-section-container">
        <span class="lex-label">Porte</span>
        <div class="lex-expandable-item">Andar <strong>armado na rua</strong></div>
        <div class="lex-expandable-item">Autoriza: <strong>Exército</strong></div>
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

  <div class="callout callout-purple">
    <span class="callout-icon">💡</span>
    <div>
      <strong>Explicação simples:</strong> O Estatuto do Desarmamento estabelece regras para quem pode ter arma e como deve proceder. Ele também define crimes relacionados a armas, como disparar em local público, deixar criança acessar arma ou não comunicar perda.<br/><br/>
      <strong>Exemplo prático:</strong> Carlos mora na roça e tem autorização para portar uma espingarda para proteção. Se ele der um tiro para o alto em uma festa na cidade, comete crime de disparo de arma de fogo, mesmo não querendo machucar ninguém.
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Porte para Caçador Rural</div>
    <div class="lex-expandable-item">Morar na <strong>zona rural</strong></div>
    <div class="lex-expandable-item">Maior de <strong>25 anos</strong></div>
    <div class="lex-expandable-item">Comprovar necessidade</div>
    <div class="lex-expandable-item">Arma permitida: tiro simples, até calibre 16, alma lisa</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Art. 13 — Comunicação de Perda</div>
    <div class="lex-expandable-item">Perdeu arma ou munição → registrar BO e comunicar em <strong>24 horas</strong>.</div>
    <div class="lex-expandable-item">Obrigação especial para <strong>empresas de segurança</strong>.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Art. 13 — Acesso de Menor</div>
    <div class="lex-expandable-item">Crime: não impedir acesso de <strong>menor de 18</strong> ou <strong>pessoa com deficiência mental</strong> à arma.</div>
    <div class="lex-list">
      <div class="lex-expandable-item">Particular: pena de <strong>1 a 2 anos</strong></div>
      <div class="lex-expandable-item">Agente público: <strong>15 dias a 3 meses</strong> ou multa</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Art. 15 — Disparo de Arma de Fogo</div>
    <div class="lex-expandable-item">Pena: <strong>2 a 4 anos</strong> + multa</div>
    <div class="lex-expandable-item">Disparar em via pública, local habitado ou em direção de pessoa.</div>
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

  <div class="callout callout-purple">
    <span class="callout-icon">💡</span>
    <div>
      <strong>Explicação simples:</strong> A Lei Maria da Penha protege mulheres contra qualquer tipo de violência dentro de casa ou em relacionamentos íntimos. A lei reconhece várias formas de violência (física, psicológica, sexual, patrimonial, moral e institucional) e cria mecanismos para proteger a vítima.<br/><br/>
      <strong>Exemplo prático:</strong> Ana mora com o namorado Pedro, que a humilha diariamente, controla o dinheiro dela e às vezes a empurra. Ana pode pedir ajuda através da Lei Maria da Penha, que protege mulheres em relacionamentos de afeto, mesmo sem casamento.
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Aplica Quando</div>
    <div class="lex-expandable-item">Violência doméstica</div>
    <div class="lex-expandable-item">Familiar</div>
    <div class="lex-expandable-item">Relação íntima de afeto</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Vítima</div>
      <div class="lex-expandable-item">Mulher cisgênero</div>
      <div class="lex-expandable-item">Mulher trans</div>
    </div>
    <div class="lex-section-container">
      <span class="lex-label">Agressor</span>
      <div class="lex-expandable-item">Homem <strong>ou</strong> mulher</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Tipos de Violência</div>
    <div class="lex-list">
      <div class="lex-expandable-item">Física</div>
      <div class="lex-expandable-item">Psicológica</div>
      <div class="lex-expandable-item">Sexual</div>
      <div class="lex-expandable-item">Patrimonial</div>
      <div class="lex-expandable-item">Moral</div>
      <div class="lex-expandable-item">Institucional</div>
    </div>
  </div>

  <div class="lex-cols">

    <div class="lex-section-container">
      <div class="lex-section-title">Patrimonial</div>
      <div class="lex-expandable-item">Destruir bens</div>
      <div class="lex-expandable-item">Reter bens</div>
      <div class="lex-expandable-item">Subtrair bens</div>
    </div>

    <div class="lex-section-container">
      <div class="lex-section-title">Sexual</div>
      <div class="lex-expandable-item">Forçar relação sexual</div>
      <div class="lex-expandable-item">Impedir uso de contraceptivo</div>
    </div>

    <div class="lex-section-container">
      <div class="lex-section-title">Moral</div>
      <div class="lex-expandable-item">Calúnia</div>
      <div class="lex-expandable-item">Injúria</div>
      <div class="lex-expandable-item">Difamação</div>
    </div>

    <div class="lex-section-container">
      <div class="lex-section-title">Psicológica</div>
      <div class="lex-expandable-item">Humilhação</div>
      <div class="lex-expandable-item">Ameaça</div>
      <div class="lex-expandable-item">Diminuição da autoestima</div>
    </div>

  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Institucional</div>
    <div class="lex-expandable-item">Agente público que <strong>prejudica, retarda ou dificulta</strong> o atendimento à vítima.</div>
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

  <div class="callout callout-purple">
    <span class="callout-icon">💡</span>
    <div>
      <strong>Explicação simples:</strong> As medidas protetivas são ordens que o juiz dá para proteger a mulher vítima de violência. Elas podem afastar o agressor, proibir contato, tirar armas dele e garantir segurança à vítima. Quem descumpre essas medidas comete crime.<br/><br/>
      <strong>Exemplo prático:</strong> A juíza determinou que João (agressor) não pode chegar a menos de 200 metros de Maria (vítima) e nem falar com ela pelo telefone. Se João mandar uma mensagem para Maria, ele estará descumprindo a medida protetiva e poderá ser preso por 2 a 5 anos.
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Podem Incluir</div>
    <div class="lex-expandable-item">Suspender porte de arma</div>
    <div class="lex-expandable-item">Proibir aproximação da vítima</div>
    <div class="lex-expandable-item">Proibir contato por qualquer meio</div>
    <div class="lex-expandable-item">Afastamento do lar</div>
    <div class="lex-expandable-item">Proibir frequentar determinados lugares</div>
    <div class="lex-expandable-item">Restrição de visitas a filhos</div>
    <div class="lex-expandable-item">Acompanhamento psicossocial obrigatório</div>
  </div>

  <div class="callout">
    <span class="callout-icon">⚖️</span>
    <strong>Somente o Juiz</strong> pode impor medidas protetivas.
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Afastamento do Lar — Quem pode determinar?</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>Juiz</strong> — regra geral</div>
      <div class="lex-expandable-item"><strong>Delegado</strong> — se não houver juiz disponível</div>
      <div class="lex-expandable-item"><strong>Policial</strong> — se não houver delegado</div>
    </div>
    <div class="lex-item" style="margin-top:8px;">Deve comunicar o juiz em <strong>24h</strong>; juiz decide em <strong>24h</strong>.</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Descumprir Medida Protetiva</div>
      <div class="lex-expandable-item">Pena: <strong>2 a 5 anos</strong></div>
    </div>
    <div class="lex-section-container">
      <span class="lex-label">Duração da Medida</span>
      <div class="lex-expandable-item">Sem prazo fixo</div>
      <div class="lex-expandable-item">Dura enquanto houver risco</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Retratação</div>
    <div class="lex-expandable-item">Só é possível <strong>até o recebimento da denúncia</strong>.</div>
    <div class="lex-expandable-item">Após esse momento, não pode mais retratar.</div>
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

  <div class="callout callout-purple">
    <span class="callout-icon">💡</span>
    <div>
      <strong>Explicação simples:</strong> A Lei Maria da Penha tem regras especiais que protegem a vítima e garantem justiça. Por exemplo, lesão contra mulher em casa é processada automaticamente (sem precisar da vítima representar), e existem direitos como aluguel social e mudança de escola dos filhos.<br/><br/>
      <strong>Exemplo prático:</strong> Beatriz sofreu agressão do marido. Mesmo que ela não queira processá-lo, o Ministério Público pode denunciá-lo porque é ação pública incondicionada. Beatriz também tem direito a aluguel social por até 6 meses se precisar sair de casa.
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Direitos da Vítima</div>
    <div class="lex-expandable-item">Aluguel social por até <strong>6 meses</strong></div>
    <div class="lex-expandable-item">Matrícula dos filhos em escola próxima ao novo endereço</div>
    <div class="lex-expandable-item">Proteção policial</div>
    <div class="lex-expandable-item">Atendimento psicológico e social</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Regras Processuais — O que NÃO se aplica</div>
    <div class="lex-expandable-item">NÃO aplica princípio da <strong>insignificância</strong></div>
    <div class="lex-expandable-item">NÃO aplica <strong>Lei 9.099/95</strong> (Juizados Especiais)</div>
    <div class="lex-expandable-item">NÃO cabe <strong>suspensão condicional do processo</strong></div>
    <div class="lex-expandable-item">NÃO cabe <strong>pena de cesta básica</strong></div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">⚠️</span>
    <strong>Lesão corporal</strong> = ação pública <strong>incondicionada</strong><br/>
    Não depende de representação da vítima. (Súmula 542 STJ)
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Juizado de Violência Doméstica — O que pode tratar</div>
    <div class="lex-cols">
      <div class="lex-section-container">
        <div class="lex-section-title">Pode</div>
        <div class="lex-expandable-item">Medidas protetivas</div>
        <div class="lex-expandable-item">Processo criminal</div>
        <div class="lex-expandable-item">Divórcio</div>
        <div class="lex-expandable-item">Alimentos</div>
      </div>
      <div class="lex-section-container">
        <div class="lex-section-title">Não pode</div>
        <div class="lex-expandable-item">Partilha de bens</div>
      </div>
    </div>
  </div>

  <div class="lex-section-container">
    <span class="lex-label">Natureza da Ação Penal</span>
    <div class="lex-expandable-item">Lesão corporal dolosa → <strong>pública incondicionada</strong></div>
    <div class="lex-expandable-item">Ameaça → <strong>pública condicionada</strong> à representação</div>
    <div class="lex-expandable-item">Crimes contra a honra → <strong>privada</strong></div>
  </div>

</div>`
  },

  // ═══════════════════════════════════════════════════
  "Lei de Drogas (11.343/2006)": {
    icon: "💊",
    color: "#22c55e",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">💊</div>
    <h1 class="notion-title">Lei de Drogas</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Lei 11.343/2006</span>
      <span class="meta-tag tag-gold">Lei Antidrogas</span>
    </div>
  </div>

  <div class="callout callout-purple">
    <span class="callout-icon">💡</span>
    <div>
      <strong>Explicação simples:</strong> Esta lei define o que é crime de drogas no Brasil. A diferença principal está na quantidade: quem tem pouca droga para uso próprio não comete crime (só infração administrativa), mas quem tem quantidade maior ou comprovar intenção de vender comete crime de tráfico.<br/><br/>
      <strong>Exemplo prático:</strong> Pedro foi flagrado com 20 gramas de maconha. Como é quantidade pequena para consumo pessoal, ele não vai preso, mas pode receber advertência, prestação de serviço ou medida educativa. Já se ele tivesse 1kg dividido em pacotes, seria considerado tráfico.
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Art. 28 — Usuário (NÃO é crime)</div>
    <div class="lex-expandable-item">Portar para uso pessoal <strong>não configura crime</strong>.</div>
    <div class="lex-expandable-item">Pena: advertência, prestação de serviços ou medida educativa.</div>
    <div class="lex-expandable-item">O juiz pode converter em tratamento médico.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Art. 33 — Tráfico de Drogas</div>
    <div class="lex-expandable-item">Importar, exportar, remeter, preparar, produzir, fabricar, comprar, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, ministrar, entregar, distribuir, consumir, fornecer, prescrever ou entregar, mesmo que gratuitamente.</div>
    <div class="lex-expandable-item">Pena: <strong>5 a 15 anos</strong> + multa.</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Art. 35 — Associação</div>
      <div class="lex-expandable-item">Associar-se para tráfico (2+ pessoas).</div>
      <div class="lex-expandable-item">Pena: <strong>3 a 10 anos</strong>.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Art. 40 — Colaboração</div>
      <div class="lex-expandable-item">Pode reduzir pena de 1/6 até 2/3.</div>
      <div class="lex-expandable-item">Ou conceder perdão judicial.</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">🚨</span>
    <strong>Presunções de tráfico (art. 42):</strong> Ter droga em local não residencial, dividir em porções, ter balança de precisão, possuir arma, etc.
  </div>

</div>`
  },

  // ═══════════════════════════════════════════════════
  "Crimes Hediondos (Lei 8.072/90)": {
    icon: "🔒",
    color: "#dc2626",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔒</div>
    <h1 class="notion-title">Crimes Hediondos</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Lei 8.072/1990</span>
      <span class="meta-tag tag-gold">Regime Diferenciado</span>
    </div>
  </div>

  <div class="callout callout-purple">
    <span class="callout-icon">💡</span>
    <div>
      <strong>Explicação simples:</strong> Crimes hediondos são os mais graves da legislação brasileira. Quem comete esses crimes tem regras mais duras: começa em regime fechado, tem dificuldade para progressão de regime e não pode sair de fins de semana (saidinha).<br/><br/>
      <strong>Exemplo prático:</strong> João foi condenado por tráfico de drogas (crime hediondo). Ele começa cumprindo pena em regime fechado e só pode progredir para regime menos rigoroso depois de cumprir 2/5 da pena (enquanto crimes comuns exigem apenas 1/6).
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Principais Crimes Hediondos</div>
    <div class="lex-list">
      <div class="lex-expandable-item">Tráfico de drogas (salvo art. 28 — usuário)</div>
      <div class="lex-expandable-item">Terrorismo</div>
      <div class="lex-expandable-item">Sabotagem</div>
      <div class="lex-expandable-item">Tortura (embora não esteja na Lei 8.072, tem tratamento equivalente)</div>
      <div class="lex-expandable-item">Arma de uso proibido</div>
      <div class="lex-expandable-item">Caixa 2 de campanha (Lei 9.504/97)</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Regime de Cumprimento</div>
    <div class="lex-expandable-item">Começa em regime <strong>fechado obrigatoriamente</strong>.</div>
    <div class="lex-expandable-item">Progressão: só após cumprir <strong>2/5 da pena</strong> (crime comum = 1/6).</div>
    <div class="lex-expandable-item"><strong>NÃO</strong> tem direito a saidinha (saída temporária).</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">⚠️</span>
    <strong>Regras duras:</strong> Não cabe anistia, graça, fiança, livramento condicional ou prescrição retroativa.
  </div>

</div>`
  },

  // ═══════════════════════════════════════════════════
  "Abuso de Autoridade (13.869/2019)": {
    icon: "👮",
    color: "#f59e0b",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">👮</div>
    <h1 class="notion-title">Abuso de Autoridade</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Lei 13.869/2019</span>
      <span class="meta-tag tag-gold">Agente Público</span>
    </div>
  </div>

  <div class="callout callout-purple">
    <span class="callout-icon">💡</span>
    <div>
      <strong>Explicação simples:</strong> Esta lei pune policiais, juízes, promotores e outros agentes públicos que usam mal o poder da função. O objetivo é impedir violência policial, prisões ilegais, invasão de domicílio sem mandado e outras arbitrariedades.<br/><br/>
      <strong>Exemplo prático:</strong> Um policial entra na casa de um suspeito sem mandado judicial e sem flagrante delito, revista todos os cômodos e quebra um armário. Isso configura abuso de autoridade, pois o policial violou o direito à inviolabilidade do domicílio.
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Condutas Típicas Importantes</div>
    <div class="lex-list">
      <div class="lex-expandable-item">Conduzir pessoa a delegacia sem motivo justo</div>
      <div class="lex-expandable-item">Não informar os direitos do preso</div>
      <div class="lex-expandable-item">Usar algemas sem necessidade ou de forma vexatória</div>
      <div class="lex-expandable-item">Fazer busca pessoal vexatória (ex: intimidação)</div>
      <div class="lex-expandable-item">Invadir domicílio sem mandado ou situação excepcional</div>
      <div class="lex-expandable-item">Interceptar comunicação sem autorização judicial</div>
      <div class="lex-expandable-item">Revelar dados sigilosos de investigação</div>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Pena — Casos Leves</div>
      <div class="lex-expandable-item">Detenção: <strong>1 a 4 anos</strong></div>
      <div class="lex-expandable-item">Multa</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Pena — Casos Graves</div>
      <div class="lex-expandable-item">Reclusão: <strong>2 a 5 anos</strong></div>
      <div class="lex-expandable-item">Multa</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Excludentes de ilicitude:</strong> Estado de necessidade, legítima defesa, estrito cumprimento do dever legal e exercício regular do direito.
  </div>

</div>`
  },

  // ═══════════════════════════════════════════════════
  "Posse e Porte Irregular de Arma": {
    icon: "🔫",
    color: "#ef4444",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🔫</div>
    <h1 class="notion-title">Posse e Porte Irregular de Arma</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Lei 10.826/2003</span>
      <span class="meta-tag tag-gold">Arts. 14, 16</span>
    </div>
  </div>

  <div class="callout callout-purple">
    <span class="callout-icon">💡</span>
    <div>
      <strong>Explicação simples:</strong> Ter arma sem registro (posse irregular) ou andar com ela na rua sem autorização (porte ilegal) são crimes distintos com penas diferentes. A posse é ter em casa; o porte é carregar consigo fora do domicílio.<br/><br/>
      <strong>Exemplo prático:</strong> Carlos comprou uma pistola com documentação falsa e a mantém em casa. Ele comete posse irregular (art. 14). Se Carlos sair na rua com essa arma no cinto, comete porte ilegal (art. 16), que tem pena maior porque representa perigo público maior.
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Art. 14 — Posse Irregular</div>
      <div class="lex-expandable-item">Ter arma de fogo <strong>de uso permitido</strong> sem autorização.</div>
      <div class="lex-expandable-item">Não possuir registro válido.</div>
      <div class="lex-expandable-item">Pena: <strong>1 a 3 anos</strong> + multa.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Art. 16 — Porte Ilegal</div>
      <div class="lex-expandable-item">Portar, de qualquer forma, arma de fogo <strong>de uso permitido</strong> sem autorização.</div>
      <div class="lex-expandable-item">Ter arma em via pública, local público ou de acesso público.</div>
      <div class="lex-expandable-item">Pena: <strong>2 a 4 anos</strong> + multa.</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">🚨</span>
    <strong>Arma de uso restrito ou proibido:</strong> Configura crime mais grave (Lei 8.072/90 — crime hediondo para uso proibido).
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Diferença Posse vs. Porte</div>
    <div class="lex-expandable-item"><strong>Posse:</strong> guardar em casa, estabelecimento, propriedade. Proteção do lar.</div>
    <div class="lex-expandable-item"><strong>Porte:</strong> carregar consigo, ter acesso imediato, estar em posse pessoal. Inclui arma no porta-malas do carro.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Agravantes</div>
    <div class="lex-expandable-item">Porte durante a noite (art. 16, § 1º).</div>
    <div class="lex-expandable-item">Posse de munição de uso restrito (art. 16, § 2º).</div>
  </div>

</div>`
  }
};