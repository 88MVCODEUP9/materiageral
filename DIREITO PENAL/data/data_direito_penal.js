// data/data_direito_penal.js
// Conteúdo de Direito Penal — formatado com classes lex-*

/**
 * 📚 Banco de Dados de Direito Penal
 * 
 * Este arquivo contém todo o conteúdo educacional de Direito Penal,
 * estruturado em um formato otimizado para visualização e estudo.
 * 
 * 🎯 Objetivo: Facilitar o aprendizado com organização visual e mnemônicos
 * 🏗️ Estrutura: Cada tópico contém icones, cores e conteúdo HTML formatado
 * 🎨 Design: Utiliza classes CSS específicas para renderização bonita
 */

window.DA = {

  // ═══════════════════════════════════════════════════

  "Intervenção Mínima e Fragmentariedade": {
    icon: "⚖️",
    color: "#4a85f0",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">⚖️</div>
    <h1 class="notion-title">Intervenção Mínima e Fragmentariedade</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Princípios do Direito Penal</span>
      <span class="meta-tag tag-g">Ultima Ratio</span>
    </div>
  </div>
  <div class="lex-section">
    <span class="lex-label blue">1. Princípio da Intervenção Mínima (Ultima Ratio)</span>
    <div class="lex-item">O Direito Penal só deve ser usado como <strong>último recurso</strong>.</div>
    <div class="lex-item">Só existe crime quando a ofensa é grave, o bem jurídico é importante e nenhum outro ramo do direito resolve.</div>
  </div>
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    Divórcio → Direito Civil<br/>
    Mas se o homem agride a mulher → vira Direito Penal (lesão corporal)<br/>
    <strong>O Direito Penal entra apenas quando os outros ramos não resolvem.</strong>
  </div>
  <div class="lex-section">
    <span class="lex-label blue">2. Princípio da Fragmentariedade</span>
    <div class="lex-item">O Direito Penal protege apenas os bens jurídicos <strong>mais importantes</strong>.</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Vida</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Liberdade</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Patrimônio</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Dignidade sexual</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Segurança pública</div>
    </div>
  </div>
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    Nem toda mentira é crime.<br/>
    Mas <strong>falsa denúncia é crime</strong>, porque atinge a justiça.
  </div>
  <div class="lex-section">
    <span class="lex-label blue">3. Princípio da Subsidiariedade</span>
    <div class="lex-item">O Direito Penal só atua quando <strong>nenhum outro ramo</strong> do direito consegue resolver.</div>
  </div>
  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label">Exemplos</span>
      <div class="lex-item">Dívida → Direito Civil</div>
      <div class="lex-item">Ameaça → Direito Penal</div>
    </div>
    <div class="lex-section">
      <span class="lex-label"> </span>
      <div class="lex-item">Discussão → não é crime</div>
      <div class="lex-item">Agressão → crime</div>
    </div>
  </div>
</div>`
  },

  "Ofensividade, Alteridade e Insignificância": {
    icon: "🔍",
    color: "#f59e0b",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🔍</div>
    <h1 class="notion-title">Ofensividade, Alteridade e Insignificância</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-gold">Princípios do Direito Penal</span>
      <span class="meta-tag tag-b">Bagatela</span>
    </div>
  </div>
  <div class="lex-section">
    <span class="lex-label blue">4. Princípio da Ofensividade (ou Lesividade)</span>
    <div class="lex-item">Só existe crime se houver <strong>lesão ou perigo de lesão</strong> a um bem jurídico.</div>
    <div class="lex-item">Não existe crime sem ofensa.</div>
  </div>
  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label rose">Não é crime</span>
      <div class="lex-item">Pensar em matar alguém</div>
    </div>
    <div class="lex-section">
      <span class="lex-label green">É crime</span>
      <div class="lex-item">Tentar matar</div>
    </div>
  </div>
  <div class="lex-section">
    <span class="lex-label blue">5. Princípio da Alteridade</span>
    <div class="lex-item">O Direito Penal só pune quando a conduta <strong>atinge outra pessoa</strong>.</div>
    <div class="lex-item">Não se pune autolesão.</div>
  </div>
  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label rose">Não é crime</span>
      <div class="lex-item">Se machucar sozinho</div>
    </div>
    <div class="lex-section">
      <span class="lex-label green">É crime</span>
      <div class="lex-item">Machucar outra pessoa</div>
    </div>
  </div>
  <div class="lex-section">
    <span class="lex-label blue">6. Princípio da Insignificância (Bagatela)</span>
    <div class="lex-item">Fato muito pequeno → <strong>não é crime</strong>.</div>
    <div class="lex-item">É chamado de <strong>atipicidade material</strong>.</div>
  </div>
  <div class="lex-section">
    <span class="lex-label gold">Requisitos — Bizu: MIRA (STF)</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">M</span> Mínima ofensividade</div>
      <div class="lex-list-item"><span class="lex-num">I</span> Inexpressiva lesão</div>
      <div class="lex-list-item"><span class="lex-num">R</span> Reduzido grau de reprovabilidade</div>
      <div class="lex-list-item"><span class="lex-num">A</span> Ausência de periculosidade social</div>
    </div>
  </div>
  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label green">Pode ser insignificante</span>
      <div class="lex-item">Furtar uma bala</div>
    </div>
    <div class="lex-section">
      <span class="lex-label rose">Não é insignificante</span>
      <div class="lex-item">Furtar celular</div>
    </div>
  </div>
  <div class="callout callout-gold">
    <span class="callout-icon">⚠️</span>
    Requisitos do princípio da insignificância foram criados pelo <strong>STF</strong>.
  </div>
</div>`
  },

  "Pessoalidade, Individualização e Ne Bis In Idem": {
    icon: "👤",
    color: "#a78bfa",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">👤</div>
    <h1 class="notion-title">Pessoalidade, Individualização e Ne Bis In Idem</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Princípios do Direito Penal</span>
      <span class="meta-tag tag-gold">Art. 5º CF</span>
    </div>
  </div>
  <div class="lex-section">
    <span class="lex-label blue">7. Princípio da Pessoalidade da Pena (Intranscendência)</span>
    <div class="lex-item">A pena <strong>não passa para outra pessoa</strong>.</div>
    <div class="lex-item">Só quem comete o crime é punido.</div>
    <div class="lex-item">Previsto no <strong>art. 5º, XLV da CF</strong>.</div>
  </div>
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    Pai comete crime → <strong>filho não pode ser preso</strong>.
  </div>
  <div class="lex-section">
    <span class="lex-label blue">8. Princípio da Individualização da Pena</span>
    <div class="lex-item">Cada pessoa deve receber uma pena <strong>de acordo com o caso</strong>.</div>
    <div class="lex-item">Não pode ter pena automática.</div>
    <div class="lex-item">O juiz analisa:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Gravidade</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Culpa</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Antecedentes</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Circunstâncias</div>
    </div>
  </div>
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    Dois furtos → penas <strong>diferentes</strong>.
  </div>
  <div class="lex-section">
    <span class="lex-label blue">9. Princípio do Ne Bis In Idem</span>
    <div class="lex-item">Ninguém pode ser <strong>punido duas vezes pelo mesmo fato</strong>.</div>
    <div class="lex-item"><em>Ne bis in idem</em> = não duas vezes pelo mesmo.</div>
  </div>
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    Não pode ser condenado duas vezes pelo mesmo roubo.
  </div>
</div>`
  },

  "Legalidade, Reserva Legal e Anterioridade": {
    icon: "📜",
    color: "#10b981",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">📜</div>
    <h1 class="notion-title">Legalidade, Reserva Legal e Anterioridade</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-g">Art. 5º XXXIX CF</span>
      <span class="meta-tag tag-b">Art. 1º CP</span>
    </div>
  </div>
  <div class="lex-section">
    <span class="lex-label blue">10. Princípio da Legalidade</span>
    <div class="lex-item">Não existe crime sem lei anterior.</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Crime → só se a lei disser</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Pena → só se a lei disser</div>
    </div>
    <div class="lex-item">Previsto no <strong>art. 5º, XXXIX CF</strong> e <strong>art. 1º CP</strong>.</div>
  </div>
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    Se não existe lei → <strong>não é crime</strong>.
  </div>
  <div class="lex-section">
    <span class="lex-label blue">11. Princípio da Reserva Legal</span>
    <div class="lex-item">Só <strong>lei</strong> pode criar crime ou pena.</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Não pode ser decreto</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Não pode ser portaria</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Não pode ser costume</div>
    </div>
    <div class="lex-item">Tem que ser <strong>lei formal</strong>.</div>
  </div>
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    Só o <strong>Congresso</strong> pode criar crime.
  </div>
  <div class="lex-section">
    <span class="lex-label blue">12. Princípio da Anterioridade</span>
    <div class="lex-item">A lei deve <strong>existir antes do crime</strong>.</div>
  </div>
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    Lei criada hoje → <strong>não pune fato de ontem</strong>.
  </div>
  <div class="lex-section">
    <span class="lex-label blue">13. Princípio da Taxatividade</span>
    <div class="lex-item">A lei penal deve ser <strong>clara</strong>.</div>
    <div class="lex-item">Não pode ser vaga nem confusa.</div>
  </div>
  <div class="callout callout-rose">
    <span class="callout-icon">🚨</span>
    <strong>Errado:</strong> "Fazer coisa ruim é crime" ❌<br/>
    A lei tem que dizer exatamente qual crime.
  </div>
</div>`
  },

  "Aplicação da Lei Penal no Tempo": {
    icon: "⏱️",
    color: "#38bdf8",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">⏱️</div>
    <h1 class="notion-title">Aplicação da Lei Penal no Tempo</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Art. 4º CP</span>
      <span class="meta-tag tag-teal">Teoria da Atividade</span>
    </div>
  </div>
  <div class="lex-section">
    <span class="lex-label blue">14. Teoria da Atividade</span>
    <div class="lex-item">O tempo do crime é o <strong>momento da ação ou omissão</strong>.</div>
    <div class="lex-item">Prevista no <strong>Art. 4º CP</strong>.</div>
  </div>
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    Atirou hoje → crime hoje — mesmo que a vítima morra depois.
  </div>
  <div class="lex-section">
    <span class="lex-label blue">15. Sucessão de Lei Penal</span>
    <div class="lex-item">Quando a lei muda com o tempo, pode acontecer:</div>
  </div>
  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label green">✅ Lei mais benéfica</span>
      <div class="lex-item"><strong>Lex Mitior / Novatio legis in mellius</strong></div>
      <div class="lex-item">Aplica para fatos antigos.</div>
      <div class="lex-item">Ex: Pena era 5 anos → passou para 2 → aplica 2.</div>
    </div>
    <div class="lex-section">
      <span class="lex-label rose">❌ Lei mais grave</span>
      <div class="lex-item"><strong>Lex Gravior / Novatio legis in pejus</strong></div>
      <div class="lex-item">Não pode voltar para prejudicar.</div>
      <div class="lex-item">Ex: Crime era 2 anos → virou 5 → não aplica para fato antigo.</div>
    </div>
  </div>
  <div class="lex-section">
    <span class="lex-label green">✅ Abolitio Criminis</span>
    <div class="lex-item">A lei <strong>deixa de considerar crime</strong>.</div>
    <div class="lex-item">Ninguém pode ser punido.</div>
  </div>
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    Adultério deixou de ser crime → <strong>Abolitio Criminis</strong>.
  </div>
  <div class="lex-section">
    <span class="lex-label blue">16. Regra Geral — Tempus Regit Actum</span>
    <div class="lex-item">O tempo rege o ato.</div>
    <div class="lex-item">Vale a lei do <strong>momento do crime</strong>.</div>
    <div class="lex-item"><strong>Exceção:</strong> lei mais benéfica retroage.</div>
  </div>
</div>`
  },

  "Lei Penal no Tempo — Retroatividade": {
    icon: "⏰",
    color: "#8b5cf6",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">⏰</div>
    <h1 class="notion-title">Lei Penal no Tempo — Retroatividade</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-purple">Art. 2º CP</span>
      <span class="meta-tag tag-b">Tempus Regit Actum</span>
    </div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">1. Regra Geral — Tempus Regit Actum</span>
    <div class="lex-item">Expressão em latim que significa:</div>
    <div class="lex-quote">O tempo rege o ato</div>
    <div class="lex-item">A lei aplicada é a lei que estava valendo no momento do crime.</div>
  </div>
  
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    <strong>Exemplo prático:</strong><br/>
    • Crime em 2020 → pena 2 anos<br/>
    • Lei mudou em 2024 → pena 5 anos<br/>
    • Crime foi em 2020<br/><br/>
    ✅ Aplica lei de 2020 (2 anos)
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">2. Novatio Legis — Lei Nova</span>
    <div class="lex-item">Quando surge uma lei nova depois do crime cometido.</div>
  </div>
  
  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label rose">❌ Incriminadora</span>
      <div class="lex-item">Cria crime ou aumenta pena</div>
      <div class="lex-item"><strong>NÃO retroage</strong></div>
      <div class="lex-item">Só para fatos futuros</div>
    </div>
    <div class="lex-section">
      <span class="lex-label green">✅ In Mellius (Benéfica)</span>
      <div class="lex-item">Beneficia o réu</div>
      <div class="lex-item"><strong>RETROAGE</strong></div>
      <div class="lex-item">Vale para fatos passados</div>
    </div>
  </div>
  
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    <strong>Art. 2º, parágrafo único, CP:</strong><br/><br/>
    <div class="lex-quote">A lei posterior, que de qualquer modo favorecer o réu, aplica-se aos fatos anteriores.</div><br/>
    
    <strong>Exemplo:</strong><br/>
    Antes: pena 5-20 anos<br/>
    Nova lei: pena 2-8 anos<br/>
    ✅ Aplica pena menor
  </div>
  
  <div class="lex-section">
    <span class="lex-label green">3. Abolitio Criminis</span>
    <div class="lex-item">Lei nova deixa de considerar o fato como crime.</div>
  </div>
  
  <div class="callout callout-green">
    <span class="callout-icon">✅</span>
    <strong>Consequência:</strong><br/>
    <div class="lex-quote">Extinção da punibilidade</div><br/>
    
    • Cancela pena e condenação<br/>
    • Cessa execução da pena<br/>
    • Extingue efeitos penais<br/>
    • <strong>NÃO apaga efeitos civis</strong><br/><br/>
    
    <strong>Exemplo:</strong> Adultério deixou de ser crime
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">4. Extratividade da Lei Penal</span>
    <div class="lex-item">Aplicação da lei fora do seu tempo normal.</div>
  </div>
  
  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label green">✅ Retroatividade</span>
      <div class="lex-item">Lei nova volta para beneficiar réu</div>
      <div class="lex-item">Só se for mais benéfica</div>
    </div>
    <div class="lex-section">
      <span class="lex-label green">✅ Ultraatividade</span>
      <div class="lex-item">Lei antiga continua valendo</div>
      <div class="lex-item">Quando for mais benéfica</div>
    </div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">5. Súmula 711 STF — Crimes Continuados</span>
    <div class="lex-item">Aplica-se a lei vigente na cessação da continuidade/permanência.</div>
  </div>
  
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    <strong>Crime permanente:</strong> sequestro, cárcere privado<br/>
    <strong>Crime continuado:</strong> vários furtos seguidos<br/><br/>
    
    <strong>Exemplo:</strong><br/>
    • Lei antiga: 2 anos<br/>
    • Lei nova: 5 anos<br/>
    • Crime começou antes e continuou depois<br/><br/>
    ✅ Aplica lei nova (mesmo sendo mais grave)
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">6. Lei Temporária e Excepcional</span>
  </div>
  
  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label">⏰ Temporária</span>
      <div class="lex-item">Com prazo determinado</div>
      <div class="lex-item">Ex: lei eleitoral</div>
    </div>
    <div class="lex-section">
      <span class="lex-label">🚨 Excepcional</span>
      <div class="lex-item">Situações especiais</div>
      <div class="lex-item">Ex: pandemia, guerra</div>
    </div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label">Características:</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔</span> Autoaplicável</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Ultraativa</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Continua valendo mesmo após revogação</div>
    </div>
  </div>
  
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    <strong>Exemplo:</strong><br/>
    Lei da pandemia: 3 anos de pena<br/>
    Crime cometido na pandemia<br/>
    Lei acabou depois<br/><br/>
    ✅ Continua valendo a lei da pandemia
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">7. Súmula 501 STJ — Proibição de Lex Tertia</span>
    <div class="lex-item">É proibido misturar leis para beneficiar o réu.</div>
  </div>
  
  <div class="callout callout-rose">
    <span class="callout-icon">❌</span>
    <strong>Não pode fazer:</strong><br/>
    <div class="lex-quote">metade de uma lei + metade de outra</div><br/>
    
    <strong>Nome:</strong> Lex tertia (lei terceira)
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">8. Lei Mais Benéfica Durante o Processo</span>
    <div class="lex-item">Mesmo com processo em andamento:</div>
    <div class="lex-item">Se surgir lei melhor → aplica-se imediatamente</div>
  </div>
  
  <div class="callout callout-green">
    <span class="callout-icon">⚖️</span>
    <strong>Exemplo:</strong><br/>
    • Pessoa sendo julgada<br/>
    • Nova lei diminui pena<br/>
    ✅ Juiz aplica lei nova automaticamente
  </div>
  
</div>`
  },

  "Lei Penal no Espaço": {
    icon: "🌍",
    color: "#06b6d4",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🌍</div>
    <h1 class="notion-title">Lei Penal no Espaço</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-cyan">Art. 6º CP</span>
      <span class="meta-tag tag-b">Territorialidade</span>
    </div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">1. Lugar do Crime — Art. 6º CP</span>
    <div class="lex-item"><strong>Teoria da Ubiquidade</strong></div>
    <div class="lex-item">O crime ocorre onde:</div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔</span> Praticou a conduta</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Ocorreu o resultado</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Nos dois lugares</div>
    </div>
  </div>
  
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    <strong>Exemplo clássico:</strong><br/>
    • Pessoa atira na Argentina<br/>
    • Vítima morre no Brasil<br/><br/>
    ✅ Crime ocorreu nos dois países<br/>
    ✅ Brasil pode julgar
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">2. Territorialidade — Regra Geral</span>
    <div class="lex-item">Aplica-se a lei brasileira aos crimes cometidos no território brasileiro.</div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label">O que é território brasileiro?</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Solo brasileiro</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Mar territorial</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Espaço aéreo</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Navios brasileiros</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Aeronaves brasileiras</div>
    </div>
  </div>
  
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    <strong>Importante:</strong><br/>
    Navio e avião brasileiros valem lei brasileira<br/>
    <strong>MESMO ESTANDO FORA DO PAÍS</strong>
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">3. Territorialidade por Extensão</span>
    <div class="lex-item">Aplica-se a lei brasileira em:</div>
  </div>
  
  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label">🚢 Navios</span>
      <div class="lex-item">• Públicos: sempre</div>
      <div class="lex-item">• Privados: em alto-mar</div>
    </div>
    <div class="lex-section">
      <span class="lex-label">✈️ Aeronaves</span>
      <div class="lex-item">• Públicas: sempre</div>
      <div class="lex-item">• Privadas: em voo</div>
    </div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">4. Extraterritorialidade</span>
    <div class="lex-item">Lei brasileira aplicada a crimes cometidos fora do Brasil.</div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label">Tipos de Extraterritorialidade:</span>
  </div>
  
  <div class="lex-section">
    <span class="lex-label green">✅ Incondicionada</span>
    <div class="lex-item">Aplica-se SEMPRE, sem requisitos.</div>
    <div class="lex-item"><strong>Exemplos:</strong></div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Crime contra Presidente da República</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Crime contra patrimônio público</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Genocídio</div>
    </div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label green">✅ Condicionada</span>
    <div class="lex-item">Precisa de requisitos para aplicar.</div>
    <div class="lex-item"><strong>Exemplos:</strong></div>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">→</span> Crime cometido por brasileiro no exterior</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Crime cometido contra brasileiro no exterior</div>
      <div class="lex-list-item"><span class="lex-num">→</span> Requisitos: entrada no país + requisição</div>
    </div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label green">✅ Hipercondicionada</span>
    <div class="lex-item">Mais requisitos ainda.</div>
    <div class="lex-item"><strong>Muito cobrado em provas!</strong></div>
    <div class="lex-item"><strong>Exemplo:</strong> Tráfico internacional com tratado</div>
  </div>
  
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    <strong>Regra de ouro:</strong><br/><br/>
    
    <strong>Regra:</strong> Territorialidade (lei brasileira no Brasil)<br/>
    <strong>Exceção:</strong> Extraterritorialidade (lei brasileira fora do Brasil)
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">5. Conflito de Jurisdição</span>
    <div class="lex-item">Quando mais de um país pode julgar o mesmo crime.</div>
  </div>
  
  <div class="callout callout-gold">
    <span class="callout-icon">⚖️</span>
    <strong>Exemplo prático:</strong><br/>
    • Brasileiro mata argentino na Argentina<br/>
    • Argentina pode julgar (territorialidade)<br/>
    • Brasil pode julgar (extraterritorialidade condicionada)<br/><br/>
    
    <strong>Quem julga primeiro?</strong><br/>
    Geralmente o país onde ocorreu o crime
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">6. Imunidades Diplomáticas</span>
    <div class="lex-item">Diplomatas estrangeiros têm imunidade no Brasil.</div>
  </div>
  
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    <strong>Regra:</strong><br/>
    Diplomata estrangeiro não pode ser preso<br/>
    Nem julgado por crimes cometidos no Brasil<br/><br/>
    
    <strong>Exceção:</strong><br/>
    País de origem pode renunciar à imunidade
  </div>
  
</div>`
  },

  "Princípios da Lei Penal": {
    icon: "⚖️",
    color: "#10b981",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">⚖️</div>
    <h1 class="notion-title">Princípios da Lei Penal</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-green">Art. 1º CP</span>
      <span class="meta-tag tag-b">Legalidade</span>
    </div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">1. Princípio da Legalidade — Art. 1º CP</span>
    <div class="lex-item">O princípio mais importante do Direito Penal.</div>
  </div>
  
  <div class="callout callout-gold">
    <span class="callout-icon">📜</span>
    <strong>Art. 1º do Código Penal:</strong><br/><br/>
    
    <div class="lex-quote">Não há crime sem lei anterior que o defina<br/>
    Não há pena sem prévia cominação legal</div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label">O que significa?</span>
    <div class="lex-list">
      <div class="lex-list-item"><span class="lex-num">✔</span> Só é crime se a LEI disser</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> Só tem pena se a LEI disser</div>
      <div class="lex-list-item"><span class="lex-num">✔</span> A lei deve ser ANTERIOR ao fato</div>
    </div>
  </div>
  
  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label green">✅ Pode</span>
      <div class="lex-item">Lei cria crime</div>
      <div class="lex-item">Lei define pena</div>
    </div>
    <div class="lex-section">
      <span class="lex-label rose">❌ Não pode</span>
      <div class="lex-item">Costume criar crime</div>
      <div class="lex-item">Analogia criar crime</div>
    </div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">2. Princípios Derivados da Legalidade</span>
  </div>
  
  <div class="lex-section">
    <span class="lex-label">📋 Reserva Legal</span>
    <div class="lex-item">Só LEI FORMAL pode criar crime.</div>
    <div class="lex-item">Não vale: decreto, portaria, medida provisória.</div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label">⏰ Anterioridade</span>
    <div class="lex-item">A lei deve existir ANTES do crime.</div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label">📝 Taxatividade</span>
    <div class="lex-item">A lei penal deve ser CLARA e PRECISA.</div>
    <div class="lex-item">Não pode ser vaga ou genérica.</div>
  </div>
  
  <div class="callout callout-rose">
    <span class="callout-icon">❌</span>
    <strong>Errado:</strong><br/>
    "Fazer coisa ruim é crime"<br/><br/>
    
    <strong>Certo:</strong><br/>
    "Matar alguém é homicídio"
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">3. Momento do Crime — Art. 4º CP</span>
    <div class="lex-item">O Brasil adota a <strong>Teoria da Atividade</strong>.</div>
  </div>
  
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    <strong>Teoria da Atividade:</strong><br/>
    O crime acontece no momento da CONDUTA<br/>
    Mesmo que o resultado venha depois<br/><br/>
    
    <strong>Exemplo:</strong><br/>
    • Atirou hoje (conduta)<br/>
    • Vítima morreu amanhã (resultado)<br/><br/>
    ✅ Crime foi HOJE
  </div>
  
  <div class="lex-section">
    <span class="lex-label">Outras teorias (não adotadas no Brasil):</span>
  </div>
  
  <div class="lex-cols">
    <div class="lex-section">
      <span class="lex-label">🎯 Teoria do Resultado</span>
      <div class="lex-item">Crime no momento do resultado</div>
    </div>
    <div class="lex-section">
      <span class="lex-label">⚡ Teoria Mista</span>
      <div class="lex-item">Reúne atividade + resultado</div>
    </div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">4. Princípio da Irretroatividade</span>
    <div class="lex-item">Lei penal NÃO volta para atingir fatos passados.</div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label green">✅ EXCEÇÃO</span>
    <div class="lex-item">Lei mais BENÉFICA retroage (Art. 2º, parágrafo único).</div>
  </div>
  
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    <strong>Regra geral:</strong> Lei não retroage<br/>
    <strong>Exceção:</strong> Lei benéfica retroage<br/><br/>
    
    Isso se chama: <strong>Retroatividade da Lei Benéfica</strong>
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">5. Princípio da Humanidade</span>
    <div class="lex-item">As penas devem ser humanas.</div>
    <div class="lex-item">Proibidas: penas de morte, cruéis, degradantes.</div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">6. Princípio da Pessoalidade</span>
    <div class="lex-item">A pena não passa para outras pessoas.</div>
    <div class="lex-item">Só o culpado responde pelo crime.</div>
  </div>
  
  <div class="callout callout-gold">
    <span class="callout-icon">📌</span>
    <strong>Exemplo:</strong><br/>
    Pai comete crime → filho NÃO paga<br/>
    Dívida civil → pode passar para herdeiros<br/>
    Pena criminal → NÃO passa para herdeiros
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">7. Princípio da Individualização da Pena</span>
    <div class="lex-item">Cada caso merece uma pena específica.</div>
    <div class="lex-item">O juiz analisa as circunstâncias do crime.</div>
  </div>
  
  <div class="lex-section">
    <span class="lex-label blue">8. Princípio da Proporcionalidade</span>
    <div class="lex-item">A pena deve ser proporcional ao crime.</div>
    <div class="lex-item">Crime grave → pena grave</div>
    <div class="lex-item">Crime leve → pena leve</div>
  </div>
  
  <div class="callout callout-green">
    <span class="callout-icon">🎯</span>
    <strong>Resumo para prova:</strong><br/><br/>
    
    • <strong>Legalidade:</strong> só lei cria crime<br/>
    • <strong>Anterioridade:</strong> lei antes do fato<br/>
    • <strong>Atividade:</strong> crime na conduta<br/>
    • <strong>Benéfica:</strong> lei boa retroage
  </div>
  
</div>`
  }

};
