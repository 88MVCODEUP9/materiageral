/* ── Criar callouts via JS ── */
function criarCallout(cor, icon, titulo, mensagem) {
    return `<div class="callout callout-${cor}"><div class="callout-icon"><i class="${icon}"></i></div><div><strong>${titulo}</strong><p>${mensagem}</p></div></div>`;
}
function calloutTexto(titulo, mensagem) { return criarCallout('blue', 'fas fa-info-circle', titulo, mensagem); }
function calloutExemplo(titulo, mensagem) { return criarCallout('gold', 'fas fa-lightbulb', titulo, mensagem); }
function calloutCorreto(titulo, mensagem) { return criarCallout('green', 'fas fa-check-circle', titulo, mensagem); }
function calloutErrado(titulo, mensagem) { return criarCallout('red', 'fas fa-times-circle', titulo, mensagem); }
function calloutFinal(titulo, mensagem) { return criarCallout('orange', 'fas fa-flag', titulo, mensagem); }
function calloutDica(titulo, mensagem) { return criarCallout('purple', 'fas fa-magic', titulo, mensagem); }

conteudo.secoes = [{
        id: "localizacao",
        titulo: "Localização Geográfica",
        icon: "fas fa-globe-americas",
        conteudo: () => `
            ${calloutTexto('Apresentação', 'Alagoas é um estado brasileiro localizado na região <strong>Nordeste</strong>, sendo o segundo menor estado do Brasil em extensão territorial, superado apenas por Sergipe. Sua capital é <strong>Maceió</strong>, conhecida como "Paraíso das Águas" e um dos principais destinos turísticos do Nordeste brasileiro.')}
            <div class="cards-grid">
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-ruler-combined"></i></div><h4>Área Territorial</h4><p>27.830,66 km²</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-users"></i></div><h4>População (2025)</h4><p>3.220.848 hab.</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-chart-area"></i></div><h4>Densidade Demográfica</h4><p>112,38 hab/km²</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-clock"></i></div><h4>Fuso Horário</h4><p>GMT-3 (Brasília)</p></div>
            </div>
            <h3>Posição Geográfica</h3>
            ${calloutTexto('Coordenadas', 'O estado está situado entre as latitudes <strong>08°48\' e 10°30\' S</strong> e longitudes <strong>35°10\' e 38°14\' O</strong>, ocupando uma faixa territorial que se estende do litoral atlântico até o semiárido interiorano. Faz fronteira com:')}
            <ul class="callout callout-gold">
                <li><strong>Norte e Noroeste:</strong> Pernambuco — divisa marcada pelo Rio São Francisco</li>
                <li><strong>Sul:</strong> Sergipe — fronteira meridional com o menor estado do Brasil</li>
                <li><strong>Sudoeste:</strong> Bahia — limite na região do alto sertão</li>
                <li><strong>Leste:</strong> Oceano Atlântico — 229 km de litoral com praias e lagoas</li>
            </ul>
            <h3>Mesorregiões</h3>
            ${calloutTexto('Transição regional', 'O território alagoano é dividido em três mesorregiões distintas que refletem a transição do litoral para o interior:')}
            <div class="cards-grid">
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-umbrella-beach"></i></div><h4>Litoral Norte</h4><p>Zona da Mata</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-leaf"></i></div><h4>Agreste</h4><p>Transição</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-sun"></i></div><h4>Sertão</h4><p>Semiárido</p></div>
            </div>
            ${calloutTexto('Curiosidade', 'O nome "Alagoas" deriva da abundância de lagoas costeiras que existem no território estadual — a Lagoa Mundaú e a Lagoa Manguaba são as mais conhecidas e formam um complexo lagunar de grande importância ecológica.')}
        `
    },
    {
        id: "conceitos",
        titulo: "Conceitos Básicos",
        icon: "fas fa-book",
        conteudo: () => `
            <h3>PIB — Produto Interno Bruto</h3>
            ${calloutTexto('Definição', 'O <strong>PIB</strong> é a soma de todas as riquezas produzidas dentro do território. É o principal indicador econômico de um país, estado ou município.')}

            <h3>Setores da Economia</h3>
            <div class="cards-grid">
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-seedling"></i></div><h4>Primário</h4><p>Terra — agricultura, pecuária, extrativismo</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-industry"></i></div><h4>Secundário</h4><p>Indústria — transformação e produção</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-store"></i></div><h4>Terciário</h4><p>Comércio e Serviços</p></div>
            </div>
            ${calloutExemplo('79% do PIB alagoano', 'Advém do 3º setor (terciário), evidenciando a forte participação de comércio e serviços na economia do estado.')}

            <h3>Informações sobre Alagoas</h3>
            ${calloutTexto('Divisão administrativa', 'Alagoas possui <strong>102 municípios</strong>, organizados em <strong>3 mesorregiões</strong>:')}
            <table class="data-table">
                <thead><tr><th>Mesorregião</th><th>Nº de Municípios</th></tr></thead>
                <tbody>
                    <tr><td><strong>Leste</strong></td><td>52</td></tr>
                    <tr><td><strong>Sertão</strong></td><td>26</td></tr>
                    <tr><td><strong>Agreste</strong></td><td>24</td></tr>
                </tbody>
            </table>
            ${calloutTexto('Obs.', 'A porção Sul de Alagoas faz parte do <strong>baixo São Francisco</strong>.')}

            <h3>Mesorregiões e Fatores Naturais</h3>
            ${calloutDica('Conexão importante', 'É importante relacionar as mesorregiões com <strong>fatores naturais</strong>. As mesorregiões possuem relação direta com as sub-regiões do Nordeste:')}
            <div class="cards-grid">
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-umbrella-beach"></i></div><h4>Zona da Mata</h4><p>Litoral — clima tropical quente e úmido</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-leaf"></i></div><h4>Agreste</h4><p>Faixa de transição</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-sun"></i></div><h4>Sertão</h4><p>Semiárido</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-wind"></i></div><h4>Meio-Norte</h4><p>Transição litoral–sertão</p></div>
            </div>

            <h3>Zona da Mata</h3>
            ${calloutTexto('Zona da Mata', 'A <strong>Zona da Mata</strong>, que possui uma importante história, tem muita relação com a <strong>Mata Atlântica</strong> (floresta tropical) e com a <strong>concentração de população</strong>. Nela predomina um clima <strong>tropical quente e úmido</strong>.')}
            ${calloutDica('Relação histórica', 'A Zona da Mata foi a primeira região colonizada do Nordeste, impulsionada pela cultura da cana-de-açúcar e pela presença da Mata Atlântica, que forneceu madeira e condições climáticas favoráveis.')}
        `
    },
    {
        id: "relevo",
        titulo: "Relevo",
        icon: "fas fa-mountain",
        conteudo: () => `
            ${calloutTexto('Predominância', 'O relevo de Alagoas é predominantemente <strong>baixo e plano</strong>. Cerca de <strong>86% do território</strong> se encontra abaixo de 300 metros de altitude, caracterizando uma paisagem suavemente ondulada que favorece a agricultura e a pecuária.')}
            ${calloutTexto('Ponto culminante', 'A <strong>Serra da Onça</strong>, localizada no município de Água Branca, com <strong>1.016 metros</strong> de altitude — parte da Chapada do Araripe.')}
            <h3>Unidades de Relevo</h3>
            <div class="cards-grid">
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-water"></i></div><h4>Planície Litorânea</h4><p>0–100 m</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-layer-group"></i></div><h4>Tabuleiros Costeiros</h4><p>100–300 m</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-mountain"></i></div><h4>Planalto da Borborema</h4><p>300–800 m</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-crown"></i></div><h4>Ponto Mais Alto</h4><p>1.016 m</p></div>
            </div>
            ${calloutDica('Resumo do relevo', 'A <strong>Planície Litorânea</strong> abriga praias, restingas e lagoas; os <strong>Tabuleiros Costeiros</strong> formam terraços sedimentares; e o <strong>Planalto da Borborema</strong> constitui o maciço cristalino que separa o litoral do sertão.')}
        `
    },
    {
        id: "clima",
        titulo: "Clima",
        icon: "fas fa-cloud-sun",
        conteudo: () => `
            ${calloutTexto('Diversidade climática', 'O clima de Alagoas é caracterizado por sua <strong>diversidade</strong>, variando entre o Tropical Úmido no litoral e o Semiárido no sertão, com uma faixa de transição no Agreste. Essa variação define paisagens, economias e modos de vida distintos.')}
            <h3>Tipos Climáticos</h3>
            <div class="cards-grid">
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-cloud-rain"></i></div><h4>Tropical Úmido</h4><p>Litoral — 22°C a 28°C</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-cloud-sun"></i></div><h4>Tropical Subúmido</h4><p>Agreste — 24°C a 30°C</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-sun"></i></div><h4>Semiárido</h4><p>Sertão — Até 33°C</p></div>
            </div>
            <h3>Pluviosidade</h3>
            <table class="data-table">
                <thead><tr><th>Região</th><th>Precipitação Anual</th><th>Período Chuvoso</th></tr></thead>
                <tbody>
                    <tr><td><strong>Litoral (Maceió)</strong></td><td>1.500–1.800 mm</td><td>Mar–Ago</td></tr>
                    <tr><td><strong>Agreste</strong></td><td>800–1.200 mm</td><td>Mar–Jul</td></tr>
                    <tr><td><strong>Sertão (Delmiro Gouveia)</strong></td><td>400–600 mm</td><td>Jan–Abr</td></tr>
                </tbody>
            </table>
            ${calloutFinal('Atenção', 'O semiárido alagoano enfrenta episódios recorrentes de seca, impactando a agricultura de subsistência e o abastecimento hídrico. Políticas de transposição e dessalinização são fundamentais para a região.')}
        `
    },
    {
        id: "vegetacao",
        titulo: "Vegetação",
        icon: "fas fa-tree",
        conteudo: () => `
            ${calloutTexto('Mosaico vegetacional', 'A cobertura vegetal de Alagoas reflete a transição climática do litoral para o interior: <strong>Mata Atlântica</strong> no leste, <strong>Caatinga</strong> no oeste e <strong>Agreste</strong> como zona de transição. Essa diversidade forma um mosaico de paisagens únicas.')}
            <h3>Biomas Presentes</h3>
            <div class="cards-grid">
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-tree"></i></div><h4>Mata Atlântica</h4><p>Litoral e Zona da Mata</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-leaf"></i></div><h4>Agreste</h4><p>Faixa de transição</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-sun"></i></div><h4>Caatinga</h4><p>Sertão semiárido</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-water"></i></div><h4>Manguezais</h4><p>Estuários litorâneos</p></div>
            </div>
            ${calloutTexto('Conservação', 'A vegetação original sofreu intensa degradação devido à expansão da cana-de-açúcar desde o período colonial. Restam apenas cerca de <strong>3% da Mata Atlântica</strong> original. Unidades de conservação como a APA da Costa dos Corais buscam proteger os remanescentes.')}
        `
    },
    {
        id: "hidrografia",
        titulo: "Hidrografia",
        icon: "fas fa-water",
        conteudo: () => `
            ${calloutTexto('Dualidade hídrica', 'A rede hidrográfica de Alagoas é formada por rios que deságuam no Oceano Atlântico (bacia leste) e no Rio São Francisco (bacia oeste). O estado também possui um importante complexo lagunar costeiro.')}
            <h3>Principais Rios</h3>
            <table class="data-table">
                <thead><tr><th>Rio</th><th>Extensão</th><th>Bacia</th><th>Características</th></tr></thead>
                <tbody>
                    <tr><td><strong>São Francisco</strong></td><td>2.914 km (total)</td><td>Oeste</td><td>Maior rio do estado; fronteira com PE/SE/BA</td></tr>
                    <tr><td><strong>Mundaú</strong></td><td>125 km</td><td>Leste</td><td>Deságua na Lagoa Mundaú; importante para pesca</td></tr>
                    <tr><td><strong>Paraíba do Meio</strong></td><td>148 km</td><td>Leste</td><td>Grande rio da porção norte; navegação local</td></tr>
                    <tr><td><strong>São Miguel</strong></td><td>96 km</td><td>Leste</td><td>Bacia do litoral norte</td></tr>
                    <tr><td><strong>Coruripe</strong></td><td>85 km</td><td>Leste</td><td>Rio do litoral sul</td></tr>
                </tbody>
            </table>
            <h3>Complexo Lagunar Mundaú–Manguaba</h3>
            ${calloutFinal('Complexo Lagunar', 'Formado pelas lagoas <strong>Mundaú</strong> e <strong>Manguaba</strong>, é o maior ecossistema lagunar de Alagoas, com área de aproximadamente <strong>80 km²</strong>. Abriga comunidades pesqueiras e possui grande biodiversidade, mas enfrenta problemas de assoreamento e poluição.')}
            ${calloutTexto('Transposição do São Francisco', 'O projeto de integração do Rio São Francisco com bacias do Nordeste beneficia o sertão alagoano, garantindo oferta hídrica para abastecimento humano e irrigação.')}
        `
    },
    {
        id: "economia",
        titulo: "Economia",
        icon: "fas fa-chart-line",
        conteudo: () => `
            ${calloutExemplo('PIB estadual', 'A economia de Alagoas é diversificada, com destaque para a <strong>indústria sucroalcooleira</strong>, o <strong>turismo</strong>, a <strong>extração de petróleo e gás</strong> e a <strong>aquicultura</strong>. O PIB estadual em 2023 foi estimado em R$ 64 bilhões.')}
            <h3>Setores Econômicos</h3>
            <div class="cards-grid">
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-industry"></i></div><h4>Indústria</h4><p>Sucroalcooleira e química</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-umbrella-beach"></i></div><h4>Turismo</h4><p>Destaque nacional</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-oil-can"></i></div><h4>Petróleo e Gás</h4><p>Bacia de Sergipe–AL</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-fish"></i></div><h4>Aquicultura</h4><p>Em forte expansão</p></div>
            </div>
            <h3>Participação por Setor (PIB)</h3>
            <table class="data-table">
                <thead><tr><th>Setor</th><th>Participação</th><th>Principais Atividades</th></tr></thead>
                <tbody>
                    <tr><td><strong>Serviços</strong></td><td>~65%</td><td>Comércio, turismo, saúde, educação</td></tr>
                    <tr><td><strong>Indústria</strong></td><td>~22%</td><td>Açúcar, álcool, petroquímica, fertilizantes</td></tr>
                    <tr><td><strong>Agropecuária</strong></td><td>~13%</td><td>Cana-de-açúcar, mandioca, pecuária, pesca</td></tr>
                </tbody>
            </table>
            ${calloutExemplo('Destaques', 'Alagoas é o 2º maior produtor de cana-de-açúcar do Nordeste. O Complexo Industrial de Marechal Deodoro (CIMD) é um dos maiores polos cloroquímicos do Brasil. O turismo em Maceió, Maragogi e São Miguel dos Milagres atrai visitantes do mundo inteiro.')}
        `
    },
    {
        id: "municipios",
        titulo: "Municípios",
        icon: "fas fa-city",
        conteudo: () => `
            ${calloutTexto('Organização municipal', 'Alagoas possui <strong>102 municípios</strong>, organizados em 13 microrregiões. A capital <strong>Maceió</strong> concentra quase 30% da população estadual, enquanto o interior enfrenta desafios de densidade demográfica e serviços públicos.')}
            <h3>Maiores Municípios</h3>
            <table class="data-table">
                <thead><tr><th>Posição</th><th>Município</th><th>População</th><th>Região</th></tr></thead>
                <tbody>
                    <tr><td>1º</td><td><strong>Maceió</strong></td><td>957.916</td><td>Litoral</td></tr>
                    <tr><td>2º</td><td><strong>Arapiraca</strong></td><td>234.696</td><td>Agreste</td></tr>
                    <tr><td>3º</td><td><strong>Rio Largo</strong></td><td>79.544</td><td>Litoral</td></tr>
                    <tr><td>4º</td><td><strong>Palmeira dos Índios</strong></td><td>72.841</td><td>Agreste</td></tr>
                    <tr><td>5º</td><td><strong>Penedo</strong></td><td>64.093</td><td>Litoral Sul</td></tr>
                </tbody>
            </table>
            <h3>Divisão Regional</h3>
            <div class="cards-grid">
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-umbrella-beach"></i></div><h4>Litoral</h4><p>32 municípios</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-leaf"></i></div><h4>Agreste</h4><p>28 municípios</p></div>
                <div class="info-card"><div class="info-card-icon"><i class="fas fa-sun"></i></div><h4>Sertão</h4><p>42 municípios</p></div>
            </div>
            ${calloutTexto('Capital', 'Maceió é a cidade mais populosa e o principal polo econômico, cultural e político do estado. Fundada em 1815, a cidade é banhada pelo Oceano Atlântico e pelas lagoas Mundaú e Manguaba.')}
        `
    }
];