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
  }

};
