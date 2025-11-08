import React, { useState } from 'react';
import { Play, ArrowRight, TrendingUp, AlertCircle, CheckCircle, XCircle, BarChart3, Target, Users, Activity, Shield, Zap } from 'lucide-react';

const JornadaDMAIC = () => {
  const [gameState, setGameState] = useState('intro');
  const [currentPhase, setCurrentPhase] = useState('opening');
  const [currentScene, setCurrentScene] = useState(0);
  const [projectHealth, setProjectHealth] = useState(100);
  const [score, setScore] = useState(0);
  const [decisions, setDecisions] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(null);

  // Dados para os grÃ¡ficos
  const paretoData = [
    { category: 'Falta de PeÃ§as', frequency: 45, cumulative: 45 },
    { category: 'Retrabalho', frequency: 28, cumulative: 73 },
    { category: 'Atraso LogÃ­stica', frequency: 15, cumulative: 88 },
    { category: 'Falha Equipamento', frequency: 8, cumulative: 96 },
    { category: 'Outros', frequency: 4, cumulative: 100 }
  ];

  const processTimeData = [
    { step: 'Recebimento', time: 24, target: 12 },
    { step: 'SeparaÃ§Ã£o', time: 48, target: 24 },
    { step: 'Montagem', time: 72, target: 72 },
    { step: 'Teste', time: 36, target: 24 },
    { step: 'Embalagem', time: 12, target: 8 },
    { step: 'ExpediÃ§Ã£o', time: 16, target: 12 }
  ];

  const controlChartData = [
    { day: 1, value: 14.2, ucl: 18, lcl: 10, mean: 14 },
    { day: 2, value: 15.1, ucl: 18, lcl: 10, mean: 14 },
    { day: 3, value: 13.8, ucl: 18, lcl: 10, mean: 14 },
    { day: 4, value: 16.5, ucl: 18, lcl: 10, mean: 14 },
    { day: 5, value: 14.9, ucl: 18, lcl: 10, mean: 14 },
    { day: 6, value: 19.2, ucl: 18, lcl: 10, mean: 14 },
    { day: 7, value: 15.3, ucl: 18, lcl: 10, mean: 14 },
    { day: 8, value: 14.1, ucl: 18, lcl: 10, mean: 14 },
    { day: 9, value: 20.5, ucl: 18, lcl: 10, mean: 14 },
    { day: 10, value: 14.7, ucl: 18, lcl: 10, mean: 14 }
  ];

  // Cena de abertura - IntroduÃ§Ã£o do herÃ³i
  const openingScene = {
    type: 'opening',
    title: 'O HERÃ“I',
    image: 'https://raw.githubusercontent.com/epifaniaci-mkt/Jornada-DMAIC/main/assets/Dr.%20VL%2001%20-%201024x1365.png',
    useImageUrl: true, // Flag para indicar que é uma URL de imagem
    atmosphere: 'dark',
    narrator: 'Sigma Sensei',
    heroName: 'Dr. Victor Lou',
    tagline: 'Nem todo herÃ³i usa capa. Alguns usam MinitabÂ®',
    description: 'Master Black Belt. Guia tÃ©cnico do time. Quando processos falham e empresas agonizam, ele surge das sombras.',
    stats: [
      { label: 'Projetos Salvos', value: '127' },
      { label: 'ROI MÃ©dio', value: '850%' },
      { label: 'Taxa de Sucesso', value: '94%' }
    ]
  };

  // Cenas da fase DEFINE
  const defineScenes = [
    {
      type: 'narrative',
      title: 'DEFINE - A Chamada',
      image: 'ðŸ¦‡',
      atmosphere: 'dark',
      text: 'Sigma Sensei observa de longe. A sirene ecoa pela cidade Ã s 23h47. No topo do QG Sigma, Dr. Victor Lou observa os dados piscando em seu painel hologrÃ¡fico. Uma empresa estÃ¡ em crise: tempo de entrega aumentou 40% em seis meses.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Mais uma empresa Ã  beira do colapso. O caos nos processos se espalha como sombras na noite. Ã‰ hora de agir."',
      mood: 'O vento frio da noite carrega o peso da responsabilidade.'
    },
    {
      type: 'narrative',
      title: 'DEFINE - ReuniÃ£o nas Sombras',
      image: 'ðŸ‘¥',
      atmosphere: 'dark',
      text: 'Em uma sala escura, iluminada apenas pela luz azulada dos monitores, vocÃª reÃºne os melhores: Iris Lyria, Yellow Belts e especialistas. Todos sabem que quando Dr. Victor Lou chama, a missÃ£o Ã© crÃ­tica.',
      speaker: 'Iris Lyria',
      dialogue: '"Estamos com vocÃª, Dr. Lou. JÃ¡ vi empresas ruÃ­rem por menos. Vamos usar DMAIC para trazer ordem ao caos." A flor no crachÃ¡ brilha sutilmente Ã  luz dos monitores.',
      mood: 'A tensÃ£o Ã© palpÃ¡vel. Falhar nÃ£o Ã© uma opÃ§Ã£o.'
    },
    {
      type: 'question',
      title: 'DEFINE - Primeira DecisÃ£o',
      question: 'Como verdadeiro Dr. Victor Lou, qual ferramenta vocÃª usa primeiro para definir o escopo desta missÃ£o?',
      context: 'Na escuridÃ£o da incerteza, um lÃ­der verdadeiro precisa de um mapa. A fase DEFINE exige clareza absoluta antes de mergulhar nas sombras do problema.',
      options: [
        { 
          id: 'a', 
          text: 'Project Charter - O mapa da missÃ£o', 
          correct: true,
          explanation: 'Perfeito, Dr. Victor Lou! O Project Charter Ã© seu farol na escuridÃ£o. Ele documenta o problema, objetivo, escopo, stakeholders e recursos. Como um super-herÃ³i, vocÃª sabe que toda missÃ£o comeÃ§a com um plano claro. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Diagrama de Pareto - AnÃ¡lise dos vilÃµes', 
          correct: false,
          explanation: 'Precipitado, jovem padawan. O Pareto Ã© uma arma poderosa, mas pertence Ã  fase ANALYZE. Primeiro, vocÃª precisa definir claramente sua missÃ£o. Um herÃ³i que ataca sem plano estÃ¡ fadado ao fracasso. -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'GrÃ¡fico de Controle - VigilÃ¢ncia constante', 
          correct: false,
          explanation: 'Essa Ã© uma ferramenta da fase CONTROL, quando vocÃª jÃ¡ derrotou o vilÃ£o e precisa manter a ordem. VocÃª ainda estÃ¡ definindo qual batalha lutar. Foco, Dr. Lou! -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'FMEA - Mapeamento de ameaÃ§as', 
          correct: false,
          explanation: 'FMEA Ã© crucial para prevenir falhas, mas vocÃª ainda nÃ£o analisou o problema. Ã‰ como tentar desarmar uma bomba sem saber onde ela estÃ¡. Primeiro, defina o campo de batalha. -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'DEFINE - O Charter da MissÃ£o',
      image: 'ðŸ“œ',
      atmosphere: 'dark',
      text: 'Sob a luz tÃªnue de seu escritÃ³rio, vocÃª prepara o Charter. Objetivo: reduzir tempo de entrega de 15 para 9 dias em 6 meses. A alta gestÃ£o aprova. VocÃª estÃ¡ oficialmente na missÃ£o.',
      speaker: 'Dandara Nascimento (via holograma)',
      dialogue: '"Dr. Victor Lou, confiamos em vocÃª. Temos R$ 2.4M em risco e apenas R$ 180K de orÃ§amento. Traga resultados... ou tudo desmorona. Quando falo em visÃ£o, o mercado ajusta o foco."',
      mood: 'O peso da expectativa Ã© como uma capa de chumbo.'
    },
    {
      type: 'question',
      title: 'DEFINE - CÃ¡lculo EstratÃ©gico',
      question: 'Seus sensores analÃ­ticos captaram os dados. Receita em risco: R$ 2.4M. Custo da missÃ£o: R$ 180K. Qual o ROI potencial?',
      context: 'Um verdadeiro Dr. Victor Lou domina os nÃºmeros como domina as ferramentas. ROI = (Ganho - Custo) / Custo Ã— 100%',
      chart: {
        type: 'comparison',
        data: [
          { label: 'Receita em Risco', value: 2400, color: 'red' },
          { label: 'Custo do Projeto', value: 180, color: 'blue' }
        ]
      },
      options: [
        { 
          id: 'a', 
          text: 'ROI = 1233% - MissÃ£o extremamente viÃ¡vel', 
          correct: true,
          explanation: 'Excelente, Dr. Lou! (2400 - 180) / 180 Ã— 100% = 1233%. Este ROI monumental justifica todos os recursos. VocÃª acaba de garantir que os executivos apoiarÃ£o a missÃ£o atÃ© o fim. Sua habilidade analÃ­tica Ã© incomparÃ¡vel. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'ROI = 733% - MissÃ£o viÃ¡vel', 
          correct: false,
          explanation: 'Seus cÃ¡lculos falharam, Dr. Lou. VocÃª esqueceu de incluir o ganho total. Um erro matemÃ¡tico assim pode fazer vocÃª perder o suporte da alta gestÃ£o. Recalcule: (2400-180)/180Ã—100%. -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'ROI = 93% - MissÃ£o marginal', 
          correct: false,
          explanation: 'Negativo, Dr. Victor Lou. Esse nÃºmero estÃ¡ muito abaixo do real. Com esse ROI reportado, a missÃ£o pode ser cancelada por "baixo retorno". Um herÃ³i deve dominar os nÃºmeros. -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'ROI = 13% - MissÃ£o questionÃ¡vel', 
          correct: false,
          explanation: 'Erro crÃ­tico! Com esse ROI, os executivos cancelariam a missÃ£o imediatamente. Na verdade, o ROI Ã© mais de 1000%! Um Dr. Victor Lou jamais pode errar nos fundamentos. -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'DEFINE - A Voz das VÃ­timas',
      image: 'ðŸŽ­',
      atmosphere: 'dark',
      text: 'VocÃª infiltra-se discretamente em reuniÃµes com clientes. DisfarÃ§ado nas sombras, captura a essÃªncia de suas frustraÃ§Ãµes: atrasos, falta de comunicaÃ§Ã£o, incerteza. A Voz do Cliente ecoa em sua mente.',
      speaker: 'Cliente Premium (gravaÃ§Ã£o)',
      dialogue: '"NÃ£o sabemos quando receberemos nossos pedidos. Ã‰ como estar no escuro... esperando, sempre esperando. Estamos perdendo a confianÃ§a."',
      mood: 'Cada reclamaÃ§Ã£o Ã© uma alma perdida nas falhas do processo.'
    },
    {
      type: 'question',
      title: 'DEFINE - Identificando o Alvo',
      question: 'Baseado na inteligÃªncia coletada (VOC), qual CTQ Ã© seu alvo principal nesta missÃ£o?',
      context: 'CTQs sÃ£o as caracterÃ­sticas crÃ­ticas que, quando melhoradas, salvam empresas. Um herÃ³i escolhe seus alvos com sabedoria.',
      options: [
        { 
          id: 'a', 
          text: 'Tempo de entrega: 15 â†’ 9 dias', 
          correct: true,
          explanation: 'Alvo confirmado, Dr. Lou! Este CTQ estÃ¡ perfeitamente alinhado com a VOC dos clientes. Ã‰ mensurÃ¡vel, especÃ­fico e impactante. VocÃª identificou o coraÃ§Ã£o do problema. Como um franco-atirador, vocÃª nÃ£o erra o alvo. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'ReduÃ§Ã£o de custos em 15%', 
          correct: false,
          explanation: 'Alvo errado! Os clientes nÃ£o reclamaram de preÃ§os, reclamaram de atrasos. VocÃª estÃ¡ mirando no lugar errado. Um herÃ³i que ataca o alvo errado desperdiÃ§a muniÃ§Ã£o preciosa. Realinhe-se! -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'SatisfaÃ§Ã£o dos funcionÃ¡rios', 
          correct: false,
          explanation: 'Embora nobre, este nÃ£o Ã© o CTQ derivado da VOC dos clientes. VocÃª estÃ¡ confundindo stakeholders internos com externos. Foco na missÃ£o! -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Implementar novo ERP', 
          correct: false,
          explanation: 'Erro crÃ­tico! Isso Ã© uma soluÃ§Ã£o, nÃ£o um CTQ. VocÃª estÃ¡ pulando da DEFINE direto para a implementaÃ§Ã£o. Um verdadeiro Dr. Victor Lou JAMAIS pula etapas. A metodologia existe por uma razÃ£o. -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'transition',
      title: 'DEFINE - MissÃ£o Aceita',
      image: 'âœ…',
      atmosphere: 'dark',
      text: 'A base estÃ¡ estabelecida. O Charter aprovado, o ROI calculado, a VOC capturada, os CTQs definidos. VocÃª estÃ¡ pronto para a prÃ³xima fase. O relÃ³gio marca meia-noite. Ã‰ hora de MEDIR.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"A escuridÃ£o estÃ¡ mapeada. Agora preciso quantificÃ¡-la. MEASURE Ã© onde os nÃºmeros revelam a verdade escondida nas sombras."',
      mood: 'A primeira batalha foi vencida. A guerra apenas comeÃ§ou.'
    }
  ];

  // Cenas da fase MEASURE
  const measureScenes = [
    {
      type: 'narrative',
      title: 'MEASURE - Coletando EvidÃªncias',
      image: 'ðŸ”',
      atmosphere: 'dark',
      text: 'Sigma Sensei narra: "Como um detetive das operaÃ§Ãµes, vocÃª invade o chÃ£o de fÃ¡brica Ã s 3h da manhÃ£. CÃ¢meras, sensores, cronÃ´metros. Tudo estÃ¡ sendo medido. Cada segundo conta, cada movimento Ã© rastreado.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Na fase MEASURE, a verdade se esconde nos dados. NÃ£o confio em opiniÃµes. Confio em nÃºmeros, fatos, evidÃªncias irrefutÃ¡veis."',
      mood: 'O silÃªncio da fÃ¡brica vazia Ã© quebrado apenas pelo zumbido das mÃ¡quinas.'
    },
    {
      type: 'question',
      title: 'MEASURE - Sistema de MediÃ§Ã£o',
      question: 'Antes de coletar dados em massa, vocÃª precisa validar seu sistema de mediÃ§Ã£o. Qual estudo realizar?',
      context: 'Um Dr. Victor Lou sabe: dados ruins geram decisÃµes ruins. Garbage in, garbage out.',
      options: [
        { 
          id: 'a', 
          text: 'MSA (Measurement System Analysis) - R&R Study', 
          correct: true,
          explanation: 'Excelente! O MSA/Gage R&R Ã© essencial para garantir que seu sistema de mediÃ§Ã£o Ã© confiÃ¡vel e repetÃ­vel. VocÃª estÃ¡ validando suas ferramentas antes da batalha. Um verdadeiro mestre! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Coletar dados imediatamente sem validaÃ§Ã£o', 
          correct: false,
          explanation: 'Erro grave! Dados sem validaÃ§Ã£o do sistema de mediÃ§Ã£o sÃ£o como lutar no escuro. VocÃª pode estar baseando toda sua missÃ£o em informaÃ§Ãµes incorretas. Um Dr. Victor Lou SEMPRE valida primeiro. -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Teste de HipÃ³teses estatÃ­stico', 
          correct: false,
          explanation: 'Prematura essa aÃ§Ã£o. Testes de hipÃ³teses pertencem Ã  fase ANALYZE. VocÃª ainda estÃ¡ na MEASURE, coletando e validando dados. Contenha sua ansiedade, jovem padawan. -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Pedir para equipe de TI desenvolver dashboard', 
          correct: false,
          explanation: 'Um dashboard bonito nÃ£o adianta nada se os dados forem ruins. Primeiro valide, depois visualize. Forma sem funÃ§Ã£o Ã© ilusÃ£o. -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'MEASURE - Mapeando o Processo',
      image: 'ðŸ—ºï¸',
      atmosphere: 'dark',
      text: 'VocÃª cria um Value Stream Map detalhado. Cada etapa do processo Ã© exposta: recebimento, separaÃ§Ã£o, montagem, teste, embalagem, expediÃ§Ã£o. Os gargalos comeÃ§am a aparecer como sombras contra a luz.',
      speaker: 'Green Belt',
      dialogue: '"Dr. Lou, encontrei algo. A etapa de separaÃ§Ã£o estÃ¡ levando o dobro do tempo esperado. E veja aqui... hÃ¡ espera entre etapas. Muito desperdÃ­cio."',
      mood: 'As ineficiÃªncias se revelam como vilÃµes escondidos no processo.'
    },
    {
      type: 'question',
      title: 'MEASURE - AnÃ¡lise do Processo',
      question: 'VocÃª coletou dados de tempo por etapa (em horas). Observe o grÃ¡fico. Qual etapa Ã© o maior gargalo?',
      context: 'Identificar gargalos Ã© como encontrar o vilÃ£o principal entre os capangas.',
      chart: {
        type: 'process_time',
        data: processTimeData
      },
      options: [
        { 
          id: 'a', 
          text: 'SeparaÃ§Ã£o - 48h (Meta: 24h) - 100% acima', 
          correct: true,
          explanation: 'Alvo identificado! A SeparaÃ§Ã£o estÃ¡ o dobro do tempo esperado (100% acima da meta). Este Ã© seu vilÃ£o principal. Foco absoluto nesta etapa trarÃ¡ maior impacto. Seu radar de gargalos Ã© impecÃ¡vel. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Teste - 36h (Meta: 24h) - 50% acima', 
          correct: false,
          explanation: 'Embora Teste tambÃ©m esteja acima da meta, SeparaÃ§Ã£o Ã© o maior desvio (100% vs 50%). Atacar o gargalo errado diluirÃ¡ seus esforÃ§os. Priorize, Dr. Lou! -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Montagem - 72h (dentro da meta)', 
          correct: false,
          explanation: 'Negativo! Montagem estÃ¡ dentro da meta. VocÃª estÃ¡ desperdiÃ§ando recursos em uma Ã¡rea que nÃ£o precisa de intervenÃ§Ã£o urgente. Foco no verdadeiro vilÃ£o! -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Todas as etapas igualmente', 
          correct: false,
          explanation: 'Abordagem dispersiva! Um Dr. Victor Lou prioriza. Recursos limitados exigem foco no maior impacto. Atacar tudo Ã© atacar nada. -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'MEASURE - O Diagrama de Pareto',
      image: 'ðŸ“Š',
      atmosphere: 'dark',
      text: 'Seus dados revelam os vilÃµes. VocÃª cria um Diagrama de Pareto das causas de atraso. A regra 80/20 se manifesta: poucos problemas causam a maioria dos atrasos.',
      speaker: 'Yellow Belt',
      dialogue: '"Dr. Lou, os dados nÃ£o mentem. 45% dos atrasos sÃ£o por falta de peÃ§as. Os fornecedores sÃ£o nosso ponto fraco."',
      mood: 'A verdade emerge dos nÃºmeros como uma conspiraÃ§Ã£o revelada.'
    },
    {
      type: 'question',
      title: 'MEASURE - PrincÃ­pio de Pareto',
      question: 'Observe o Pareto. Quantos problemas vocÃª deve atacar primeiro para resolver ~80% dos atrasos?',
      context: 'Um herÃ³i sÃ¡bio sabe: nÃ£o pode lutar todas as batalhas ao mesmo tempo. PriorizaÃ§Ã£o Ã© poder.',
      chart: {
        type: 'pareto',
        data: paretoData
      },
      options: [
        { 
          id: 'a', 
          text: 'Os 2 primeiros: Falta de PeÃ§as (45%) + Retrabalho (28%) = 73%', 
          correct: true,
          explanation: 'Perfeito, Dr. Lou! Focando nos 2 principais problemas (40% das causas), vocÃª ataca 73% dos efeitos. Isso Ã© eficiÃªncia mÃ¡xima! O PrincÃ­pio de Pareto Ã© sua arma. Recursos otimizados, impacto maximizado. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Todos os 5 problemas simultaneamente', 
          correct: false,
          explanation: 'Recursos dispersos = impacto diluÃ­do. VocÃª tem budget e tempo limitados. Atacar "Outros" (4%) junto com gigantes Ã© desperdÃ­cio. Concentre fogo, Dr. Lou! -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Apenas Falta de PeÃ§as (45%)', 
          correct: false,
          explanation: 'Conservador demais. Com pequeno esforÃ§o adicional, vocÃª pode incluir Retrabalho e alcanÃ§ar 73%. NÃ£o deixe impacto na mesa. Seja ambicioso, mas estratÃ©gico. -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Os 4 Ãºltimos problemas (27% dos efeitos)', 
          correct: false,
          explanation: 'VocÃª estÃ¡ ignorando o elefante na sala! Atacar os 4 menores problemas e deixar os 2 maiores Ã© absurdo. Inverta sua lÃ³gica, Dr. Lou. -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'MEASURE - Baseline Estabelecido',
      image: 'ðŸ“ˆ',
      atmosphere: 'dark',
      text: 'ApÃ³s semanas de mediÃ§Ã£o rigorosa, vocÃª tem o baseline: tempo mÃ©dio atual = 15.2 dias, desvio padrÃ£o = 2.3 dias. Processo instÃ¡vel. VariaÃ§Ã£o excessiva. O inimigo estÃ¡ quantificado.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Agora sei exatamente onde estou. Baseline estabelecido. Ã‰ impossÃ­vel melhorar o que nÃ£o se mede. MEASURE completo. Hora de ANALISAR."',
      mood: 'Os nÃºmeros contam uma histÃ³ria de caos. Mas caos medido pode ser domado.'
    },
    {
      type: 'transition',
      title: 'MEASURE - Dados Coletados',
      image: 'âœ…',
      atmosphere: 'dark',
      text: 'MissÃ£o MEASURE concluÃ­da. Sistema de mediÃ§Ã£o validado, processo mapeado, gargalos identificados, baseline estabelecido. Os dados estÃ£o em suas mÃ£os. Agora Ã© hora de encontrar a raiz do mal.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"MediÃ§Ã£o sem anÃ¡lise Ã© informaÃ§Ã£o sem sabedoria. A fase ANALYZE Ã© onde eu encontro o coraÃ§Ã£o da escuridÃ£o."',
      mood: 'O quebra-cabeÃ§a estÃ¡ montado. Falta apenas resolver.'
    }
  ];

  // Cenas da fase IMPROVE
  const improveScenes = [
    {
      type: 'narrative',
      title: 'IMPROVE - A Hora da AÃ§Ã£o',
      image: 'âš¡',
      atmosphere: 'dark',
      text: 'Sigma Sensei anuncia: "AnÃ¡lise completa. Causas raÃ­zes expostas. Chegou a hora de agir. VocÃª convoca sua equipe para a sala de guerra. Mapas do processo cobrem as paredes. O plano de ataque estÃ¡ sendo desenhado.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Conhecimento sem aÃ§Ã£o Ã© covardia. IMPROVE Ã© onde teoria se torna vitÃ³ria. Vamos reformar este processo e restaurar a ordem."',
      mood: 'A tensÃ£o Ã© elÃ©trica. A batalha decisiva se aproxima.'
    },
    {
      type: 'question',
      title: 'IMPROVE - SoluÃ§Ãµes Criativas',
      question: 'VocÃª identificou que o sistema de inventÃ¡rio Ã© a causa raiz. Qual abordagem LEAN usar para melhorar?',
      context: 'Na fase IMPROVE, escolher a soluÃ§Ã£o certa Ã© como escolher a arma certa para a batalha. Um Dr. Victor Lou conhece seu arsenal.',
      options: [
        { 
          id: 'a', 
          text: 'Kanban + Sistema Pull - ReposiÃ§Ã£o visual e automÃ¡tica', 
          correct: true,
          explanation: 'Perfeito, Dr. Lou! Kanban resolve EXATAMENTE o problema de inventÃ¡rio desatualizado. Sistema pull garante reposiÃ§Ã£o no momento certo, cartÃµes visuais eliminam erros. VocÃª estÃ¡ atacando a raiz com precisÃ£o cirÃºrgica! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Contratar mais funcionÃ¡rios no estoque', 
          correct: false,
          explanation: 'Erro clÃ¡ssico! Mais pessoas nÃ£o resolvem um problema de SISTEMA. VocÃª estÃ¡ tratando sintomas, nÃ£o causas. Um herÃ³i nÃ£o joga dinheiro no problema, ele o resolve inteligentemente. -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Implementar puniÃ§Ãµes para erros de inventÃ¡rio', 
          correct: false,
          explanation: 'Negativo! Punir pessoas por falhas de sistema Ã© injusto e ineficaz. Lean Ã© sobre melhorar processos, nÃ£o culpar pessoas. VocÃª estÃ¡ atacando os aliados, nÃ£o o inimigo! -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Fazer inventÃ¡rio completo toda semana', 
          correct: false,
          explanation: 'SoluÃ§Ã£o cara e reativa. VocÃª estÃ¡ colocando band-aid em ferida aberta. Kanban previne o problema, inventÃ¡rio semanal apenas o detecta tarde demais. Pense preventivo, nÃ£o reativo! -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'IMPROVE - Piloto em Campo',
      image: 'ðŸ§ª',
      atmosphere: 'dark',
      text: 'VocÃª implementa um piloto em uma linha de produÃ§Ã£o. Sistema Kanban instalado. RFID tags nos bins. Alertas automÃ¡ticos de reposiÃ§Ã£o. Os primeiros dados chegam: tempo de separaÃ§Ã£o caiu 35% em uma semana.',
      speaker: 'Operador SÃªnior',
      dialogue: '"Dr. Lou, isso Ã© incrÃ­vel! NÃ£o preciso mais adivinhar se tem peÃ§a. O cartÃ£o vermelho me avisa automaticamente. Ã‰ como ter visÃ£o de raio-X do estoque!"',
      mood: 'Pequenas vitÃ³rias acendem a esperanÃ§a. A batalha pode ser vencida.'
    },
    {
      type: 'question',
      title: 'IMPROVE - ValidaÃ§Ã£o da SoluÃ§Ã£o',
      question: 'Antes de expandir o piloto para toda a fÃ¡brica, o que fazer?',
      context: 'Um piloto bem-sucedido nÃ£o garante sucesso em escala. ValidaÃ§Ã£o Ã© crucial.',
      options: [
        { 
          id: 'a', 
          text: 'DOE (Design of Experiments) + Teste de hipÃ³teses', 
          correct: true,
          explanation: 'Magistral! DOE permite testar mÃºltiplas variÃ¡veis sistematicamente. Teste de hipÃ³teses valida estatisticamente que a melhoria Ã© real, nÃ£o sorte. VocÃª estÃ¡ sendo cientÃ­fico como um verdadeiro Dr. Victor Lou! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Expandir imediatamente - piloto funcionou', 
          correct: false,
          explanation: 'Precipitado e perigoso! Uma semana de dados nÃ£o Ã© suficiente. Pode ser efeito Hawthorne (comportamento muda por estar sendo observado). Um erro aqui pode desperdiÃ§ar milhÃµes. PaciÃªncia, Dr. Lou! -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Pedir opiniÃ£o da alta gestÃ£o', 
          correct: false,
          explanation: 'GestÃ£o decide budget e estratÃ©gia, nÃ£o validade estatÃ­stica. VocÃª precisa de DADOS, nÃ£o opiniÃµes. Um Dr. Victor Lou nÃ£o terceiriza anÃ¡lise crÃ­tica. -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Voltar para a fase ANALYZE', 
          correct: false,
          explanation: 'Recuo sem razÃ£o! VocÃª jÃ¡ analisou, agora estÃ¡ na IMPROVE. Ir e voltar entre fases sem dados que justifiquem Ã© perda de tempo e confianÃ§a. Avance com mÃ©todo! -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'IMPROVE - A Batalha se Intensifica',
      image: 'âš”ï¸',
      atmosphere: 'dark',
      text: 'TrÃªs semanas de piloto. DOE completo. Resultados validados estatisticamente (p-value < 0.01). VocÃª tem evidÃªncias irrefutÃ¡veis. O CFO aprova o budget de R$ 180K para expansÃ£o. A guerra contra o caos entra na fase final.',
      speaker: 'Dandara Nascimento',
      dialogue: '"Dr. Victor Lou, seus dados sÃ£o inquestionÃ¡veis. VocÃª transformou cÃ©ticos em crentes. Aprovo os recursos. Agora, entregue os resultados prometidos."',
      mood: 'O peso da expectativa retorna. Falhar agora seria devastador.'
    },
    {
      type: 'question',
      title: 'IMPROVE - GestÃ£o de MudanÃ§a',
      question: 'Ao expandir Kanban para toda fÃ¡brica, vocÃª enfrenta resistÃªncia de operadores antigos. Como proceder?',
      context: 'ResistÃªncia Ã  mudanÃ§a Ã© o vilÃ£o invisÃ­vel de todo projeto IMPROVE. Pessoas sÃ£o mais difÃ­ceis que processos.',
      options: [
        { 
          id: 'a', 
          text: 'Treinamento + Envolvimento + Quick Wins visÃ­veis', 
          correct: true,
          explanation: 'Excelente gestÃ£o de mudanÃ§a! Treinamento capacita, envolvimento gera ownership, quick wins provam valor. VocÃª estÃ¡ conquistando coraÃ§Ãµes E mentes. Lean Ã© sobre pessoas primeiro! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'ForÃ§ar implementaÃ§Ã£o - eles vÃ£o se acostumar', 
          correct: false,
          explanation: 'Abordagem autoritÃ¡ria falha em 70% dos projetos de mudanÃ§a. ResistÃªncia passiva vai sabotar sua soluÃ§Ã£o. VocÃª criou inimigos internos. Um herÃ³i inspira, nÃ£o intimida! -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Substituir operadores resistentes', 
          correct: false,
          explanation: 'Extremo e destrutivo! VocÃª estÃ¡ demitindo experiÃªncia valiosa. Conhecimento do processo dessas pessoas Ã© insubstituÃ­vel. Lean valoriza pessoas. VocÃª traiu os princÃ­pios! -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Desistir da mudanÃ§a para evitar conflito', 
          correct: false,
          explanation: 'Covardia! ResistÃªncia Ã© normal, mas deve ser gerenciada, nÃ£o evitada. VocÃª estÃ¡ deixando o caos vencer por medo de conflito. Dr. Victor Lous nÃ£o recuam. -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'IMPROVE - VitÃ³rias Acumulam',
      image: 'ðŸ“ˆ',
      atmosphere: 'dark',
      text: 'Dois meses apÃ³s implementaÃ§Ã£o completa: Tempo mÃ©dio de entrega = 10.2 dias (meta: 9 dias). Quase lÃ¡! Processo de separaÃ§Ã£o: 26h (meta: 24h). Falta de peÃ§as: reduzida de 45% para 8%. A transformaÃ§Ã£o Ã© real.',
      speaker: 'Green Belt',
      dialogue: '"Dr. Lou, estamos a centÃ­metros da meta! Mais alguns ajustes e conseguimos. A fÃ¡brica estÃ¡ irreconhecÃ­vel. Ã‰ como ver luz onde havia apenas escuridÃ£o."',
      mood: 'A vitÃ³ria estÃ¡ prÃ³xima. Mas a guerra sÃ³ acaba na fase CONTROL.'
    },
    {
      type: 'transition',
      title: 'IMPROVE - TransformaÃ§Ã£o Realizada',
      image: 'âœ…',
      atmosphere: 'dark',
      text: 'Fase IMPROVE concluÃ­da. SoluÃ§Ãµes implementadas e validadas. Resultados tangÃ­veis alcanÃ§ados. Mas um Dr. Victor Lou sabe: melhorias sem sustentaÃ§Ã£o evaporam como nÃ©voa ao amanhecer. Ã‰ hora do CONTROL.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"IMPROVE provou que Ã© possÃ­vel. CONTROL garantirÃ¡ que seja permanente. A Ãºltima fase Ã© onde herÃ³is se tornam lendas."',
      mood: 'A batalha foi vencida. Agora vem a vigilÃ¢ncia eterna.'
    }
  ];

  // Cenas da fase CONTROL
  const controlScenes = [
    {
      type: 'narrative',
      title: 'CONTROL - O GuardiÃ£o Vigilante',
      image: 'ðŸ‘ï¸',
      atmosphere: 'dark',
      text: 'Sigma Sensei vigia: "TrÃªs meses apÃ³s implementaÃ§Ã£o. VocÃª retorna Ã  fÃ¡brica Ã s 2h da manhÃ£. Como um guardiÃ£o nas sombras, instala sistemas de monitoramento. Dashboards em tempo real. Alertas automÃ¡ticos. O processo nÃ£o pode regredir.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Na fase CONTROL, eu nÃ£o confio em promessas. Confio em sistemas, mÃ©tricas, auditorias. O que nÃ£o Ã© monitorado, nÃ£o Ã© controlado."',
      mood: 'VigilÃ¢ncia constante Ã© o preÃ§o da excelÃªncia sustentada.'
    },
    {
      type: 'question',
      title: 'CONTROL - Sistema de Controle',
      question: 'Qual ferramenta usar para monitorar CONTINUAMENTE se o processo permanece sob controle?',
      context: 'CONTROL nÃ£o Ã© evento Ãºnico, Ã© vigilÃ¢ncia perpÃ©tua. Escolha suas ferramentas sabiamente.',
      options: [
        { 
          id: 'a', 
          text: 'GrÃ¡ficos de Controle (SPC - Statistical Process Control)', 
          correct: true,
          explanation: 'Perfeito! GrÃ¡ficos de controle detectam desvios em tempo real, identificam causas especiais antes que se tornem crises. SPC Ã© o radar do Dr. Victor Lou. VocÃª nunca dorme, sempre vigia! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'ReuniÃ£o mensal para revisar resultados', 
          correct: false,
          explanation: 'Muito lento! Em um mÃªs, o processo pode degradar completamente. ReuniÃµes sÃ£o importantes, mas nÃ£o substituem monitoramento contÃ­nuo. VocÃª estÃ¡ deixando brechas para o caos retornar. -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Confiar que equipe manterÃ¡ o padrÃ£o', 
          correct: false,
          explanation: 'ConfianÃ§a sem verificaÃ§Ã£o Ã© ingenuidade! Pessoas tÃªm boas intenÃ§Ãµes, mas processos degradam naturalmente (entropia). Trust but verify. VocÃª baixou a guarda prematuramente. -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Voltar para IMPROVE se algo der errado', 
          correct: false,
          explanation: 'Reativo demais! CONTROL Ã© PREVENTIVO. Detectar problemas ANTES que virem crises. Ir e voltar entre fases Ã© sintoma de planejamento falho. Um Dr. Victor Lou previne, nÃ£o apaga incÃªndios. -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'CONTROL - Plano de Controle',
      image: 'ðŸ“‹',
      atmosphere: 'dark',
      text: 'VocÃª cria um Plano de Controle detalhado: O QUE medir (tempo entrega, acurÃ¡cia inventÃ¡rio), COMO medir (RFID, sistema), QUANDO medir (tempo real), QUEM Ã© responsÃ¡vel (supervisores), O QUE fazer se sair do controle (plano de aÃ§Ã£o).',
      speaker: 'Yellow Belt',
      dialogue: '"Dr. Lou, esse plano Ã© tÃ£o detalhado que atÃ© um novato consegue seguir. VocÃª estÃ¡ criando um sistema Ã  prova de falhas humanas. Genial."',
      mood: 'Cada detalhe importa. Controle Ã© sobre nÃ£o deixar nada ao acaso.'
    },
    {
      type: 'question',
      title: 'CONTROL - Resposta a Desvios',
      question: 'Semana 1 de monitoramento: Um ponto aparece ACIMA do UCL no grÃ¡fico de controle. Como proceder?',
      context: 'Pontos fora de controle exigem aÃ§Ã£o imediata. A natureza da resposta define o sucesso do CONTROL.',
      options: [
        { 
          id: 'a', 
          text: 'Investigar causa raiz IMEDIATAMENTE + AÃ§Ã£o corretiva', 
          correct: true,
          explanation: 'Resposta exemplar! Ponto fora de UCL indica causa especial. InvestigaÃ§Ã£o rÃ¡pida previne recorrÃªncia. VocÃª estÃ¡ sendo proativo como um verdadeiro guardiÃ£o. VigilÃ¢ncia sem aÃ§Ã£o Ã© inÃºtil! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Ignorar - Ã© sÃ³ um ponto isolado', 
          correct: false,
          explanation: 'Perigosamente negligente! Um ponto fora de controle Ã© um sinal de alerta, nÃ£o ruÃ­do. Ignorar Ã© como ver fumaÃ§a e nÃ£o procurar o fogo. VocÃª estÃ¡ convidando o caos de volta. -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Refazer todo o projeto DMAIC', 
          correct: false,
          explanation: 'ReaÃ§Ã£o exagerada! Um desvio nÃ£o significa falha total. CONTROL inclui ajustes e correÃ§Ãµes. Refazer tudo Ã© desperdÃ­cio de recursos. Proporcionalidade importa. -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Recalcular limites de controle para incluir o ponto', 
          correct: false,
          explanation: 'ManipulaÃ§Ã£o de dados! VocÃª estÃ¡ escondendo o problema, nÃ£o resolvendo. Recalcular limites para "esconder" desvios Ã© antiÃ©tico e perigoso. Um Dr. Victor Lou nunca distorce a verdade. -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'CONTROL - A AmeaÃ§a Final',
      image: 'âš ï¸',
      atmosphere: 'dark',
      text: 'MÃªs 4: Um novo gerente de operaÃ§Ãµes assume. Ele quer "otimizar custos" eliminando o sistema Kanban. "Ã‰ muito caro manter", diz ele. Este Ã© o teste final: proteger as melhorias contra a ignorÃ¢ncia.',
      speaker: 'OtÃ¡vio Vilar',
      dialogue: '"Dr. Victor Lou, com todo respeito, esse sistema Kanban parece desnecessÃ¡rio. Podemos voltar ao mÃ©todo antigo e cortar esses custos. Afinal, medo sucesso em andares, nÃ£o em detalhes de chÃ£o de fÃ¡brica."',
      mood: 'O verdadeiro inimigo nÃ£o Ã© o processo falho, mas a amnÃ©sia organizacional.'
    },
    {
      type: 'question',
      title: 'CONTROL - Defesa Final',
      question: 'Como defender o sistema Kanban contra o novo gerente que quer removÃª-lo?',
      context: 'Esta Ã© a batalha final. Dados vs OpiniÃ£o. EvidÃªncia vs IntuiÃ§Ã£o. Um Dr. Victor Lou nÃ£o recua.',
      options: [
        { 
          id: 'a', 
          text: 'Apresentar dados: ROI 1233%, Before/After, Custo da regressÃ£o', 
          correct: true,
          explanation: 'VITÃ“RIA Ã‰PICA! VocÃª apresenta evidÃªncias irrefutÃ¡veis: R$ 2.4M economizados vs R$ 180K investidos. GrÃ¡ficos before/after. Custo de regredir ao caos antigo. O gerente recua. Dados vencem opiniÃµes. O Dr. Victor Lou prevaleceu! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Aceitar a decisÃ£o - ele Ã© o gerente', 
          correct: false,
          explanation: 'DERROTA VERGONHOSA! VocÃª deixou meses de trabalho serem destruÃ­dos por ignorÃ¢ncia. Um Dr. Victor Lou LUTA por dados, nÃ£o se rende a hierarquia cega. VocÃª traiu a missÃ£o. -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'AmeaÃ§ar sair da empresa', 
          correct: false,
          explanation: 'Emocional e contraproducente. AmeaÃ§as criam ressentimento, nÃ£o convencimento. Um herÃ³i usa lÃ³gica e dados, nÃ£o drama. VocÃª perdeu credibilidade. -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Implementar Kanban escondido do gerente', 
          correct: false,
          explanation: 'Desonesto e insustentÃ¡vel! Sistemas "escondidos" colapsam quando descobertos. TransparÃªncia e educaÃ§Ã£o sÃ£o fundamentais. VocÃª estÃ¡ minando a confianÃ§a organizacional. -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'CONTROL - DocumentaÃ§Ã£o Eterna',
      image: 'ðŸ“š',
      atmosphere: 'dark',
      text: 'VocÃª cria documentaÃ§Ã£o completa: SOPs (Standard Operating Procedures), treinamentos gravados, planos de controle laminados nas paredes. O conhecimento nÃ£o pode morrer com sua partida. O legado deve ser imortal.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Um dia eu partirei para outras missÃµes. Mas o sistema que criei permanecerÃ¡. DocumentaÃ§Ã£o Ã© imortalidade. Processos bem documentados sobrevivem a seus criadores."',
      mood: 'O conhecimento documentado Ã© a verdadeira heranÃ§a de um mestre.'
    },
    {
      type: 'narrative',
      title: 'CONTROL - Resultados Finais',
      image: 'ðŸ†',
      atmosphere: 'dark',
      text: 'MÃªs 6 - Auditoria final: Tempo mÃ©dio de entrega = 8.7 dias (META: 9 dias - SUPERADA!). Processo estÃ¡vel (Cpk = 1.45). Cliente satisfaÃ§Ã£o: 87% â†’ 96%. Receita recuperada: R$ 2.1M. Custo projeto: R$ 180K. ROI realizado: 1067%.',
      speaker: 'Dandara Nascimento',
      dialogue: '"Dr. Victor Lou, vocÃª nÃ£o apenas salvou este projeto. VocÃª transformou esta empresa. De caos a excelÃªncia operacional. VocÃª Ã© uma lenda."',
      mood: 'NÃºmeros nÃ£o mentem. MissÃ£o cumprida com maestria.'
    },
    {
      type: 'epilogue',
      title: 'EPÃLOGO - O Legado do Dr. Victor Lou',
      image: 'ðŸŒƒ',
      atmosphere: 'dark',
      text: 'Sigma Sensei reflete: "Seis meses depois, vocÃª estÃ¡ no topo do QG Sigma novamente. A sirene toca. Outra empresa em crise. Mas vocÃª olha para trÃ¡s e vÃª a fÃ¡brica que salvou: luzes acesas, processos fluindo, pessoas sorrindo. O caos foi domado.',
      speaker: 'Dr. Victor Lou (monÃ³logo)',
      dialogue: '"Todo projeto Ã© uma jornada de DMAIC. Define o problema. Measure a realidade. Analyze a causa. Improve o processo. Control o resultado. Ã‰ simples, mas nÃ£o Ã© fÃ¡cil. E Ã© nisso que reside meu propÃ³sito: trazer ordem ao caos, luz Ã  escuridÃ£o, excelÃªncia ao medÃ­ocre. Enquanto houver processos falhos, eu estarei nas sombras. Porque eu sou o Dr. Victor Lou. E esta Ã© minha jornada."',
      mood: 'A cidade dorme. Mas o guardiÃ£o permanece vigilante. Para sempre.',
      finalStats: true
    }
  ];

  // Cenas da fase ANALYZE
  const analyzeScenes = [
    {
      type: 'narrative',
      title: 'ANALYZE - Entrando na Mente do Problema',
      image: 'ðŸ§ ',
      atmosphere: 'dark',
      text: 'Sigma Sensei sussurra: "Em seu laboratÃ³rio Ã s 4h da manhÃ£, vocÃª espalha os dados em telas hologrÃ¡ficas. GrÃ¡ficos flutuam no ar. Ã‰ hora de conectar os pontos, encontrar correlaÃ§Ãµes, desvendar causas raÃ­zes.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Todo problema tem uma origem. Na fase ANALYZE, eu nÃ£o aceito sintomas. Eu caÃ§o a doenÃ§a. A raiz deve ser extirpada."',
      mood: 'SilÃªncio. ConcentraÃ§Ã£o absoluta. A mente do Dr. Victor Lou Ã© uma mÃ¡quina analÃ­tica.'
    },
    {
      type: 'question',
      title: 'ANALYZE - Ferramenta de Causa Raiz',
      question: 'Para identificar TODAS as causas potenciais de atraso no processo, qual ferramenta usar primeiro?',
      context: 'A fase ANALYZE exige estrutura. Um Dr. Victor Lou nÃ£o atira no escuro.',
      options: [
        { 
          id: 'a', 
          text: 'Diagrama de Ishikawa (Espinha de Peixe)', 
          correct: true,
          explanation: 'Excelente escolha! O Ishikawa organiza causas em categorias (6Ms: MÃ©todo, MÃ¡quina, Material, MÃ£o-de-obra, MediÃ§Ã£o, Meio Ambiente). Ã‰ perfeito para brainstorming estruturado de causas potenciais. VocÃª estÃ¡ pensando como um verdadeiro Dr. Lou. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'FMEA imediatamente', 
          correct: false,
          explanation: 'FMEA Ã© poderoso, mas prematuro. Primeiro vocÃª precisa identificar as causas (Ishikawa/5 PorquÃªs), DEPOIS avalia riscos (FMEA). SequÃªncia importa. -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Implementar soluÃ§Ãµes Ã³bvias', 
          correct: false,
          explanation: 'ERRO CRÃTICO! "SoluÃ§Ãµes Ã³bvias" sÃ£o frequentemente sintomas, nÃ£o causas raÃ­zes. VocÃª estÃ¡ pulando ANALYZE direto para IMPROVE. Um Dr. Victor Lou JAMAIS faz isso. A metodologia existe por uma razÃ£o. -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Culpar os fornecedores', 
          correct: false,
          explanation: 'Culpar Ã© fÃ¡cil. Analisar Ã© difÃ­cil. Talvez o problema seja seu processo de compras, nÃ£o os fornecedores. AnÃ¡lise superficial mata projetos. Cave fundo! -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'ANALYZE - Os 5 PorquÃªs',
      image: 'â“',
      atmosphere: 'dark',
      text: 'VocÃª aplica os 5 PorquÃªs ao maior vilÃ£o: Falta de PeÃ§as. Por quÃª? Atraso fornecedor. Por quÃª? Pedidos em cima da hora. Por quÃª? Falta de previsÃ£o. Por quÃª? Sistema MRP desatualizado. Por quÃª? Dados de inventÃ¡rio incorretos.',
      speaker: 'Green Belt',
      dialogue: '"Dr. Lou, encontramos! A raiz nÃ£o era o fornecedor... era nosso prÃ³prio sistema de inventÃ¡rio! EstÃ¡vamos brigando com o inimigo errado."',
      mood: 'A revelaÃ§Ã£o Ã© como um raio na escuridÃ£o. A verdade dÃ³i, mas liberta.'
    },
    {
      type: 'question',
      title: 'ANALYZE - GrÃ¡fico de Controle',
      question: 'Observe o grÃ¡fico de controle dos Ãºltimos 10 dias. O que ele revela sobre o processo?',
      context: 'GrÃ¡ficos de controle mostram se o processo estÃ¡ sob controle estatÃ­stico. Pontos fora dos limites sÃ£o sinais de alerta.',
      chart: {
        type: 'control_chart',
        data: controlChartData
      },
      options: [
        { 
          id: 'a', 
          text: 'Processo FORA de controle - 2 pontos acima do UCL', 
          correct: true,
          explanation: 'DiagnÃ³stico correto, Dr. Lou! Os dias 6 e 9 apresentam valores acima do Upper Control Limit (19.2 e 20.5 dias). Isso indica causas especiais, nÃ£o apenas variaÃ§Ã£o aleatÃ³ria. Processo instÃ¡vel. InvestigaÃ§Ã£o necessÃ¡ria! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Processo sob controle - dentro dos limites', 
          correct: false,
          explanation: 'Negativo! VocÃª nÃ£o observou os dias 6 e 9? Pontos claramente acima do UCL (18 dias). Um processo com causas especiais NÃƒO estÃ¡ sob controle. AtenÃ§Ã£o aos detalhes, Dr. Lou! -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Processo perfeito - nÃ£o precisa melhoria', 
          correct: false,
          explanation: 'Perigosamente errado! O processo tem pontos fora de controle E alta variaÃ§Ã£o. EstÃ¡ longe de perfeito. ComplacÃªncia Ã© o primeiro passo para o fracasso. -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'GrÃ¡fico invÃ¡lido - refazer mediÃ§Ãµes', 
          correct: false,
          explanation: 'O grÃ¡fico Ã© vÃ¡lido e estÃ¡ mostrando exatamente o que precisa: causas especiais. Refazer mediÃ§Ãµes Ã© fugir da verdade. Encare os dados! -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'ANALYZE - CorrelaÃ§Ã£o Revelada',
      image: 'ðŸ”—',
      atmosphere: 'dark',
      text: 'AnÃ¡lise de regressÃ£o: correlaÃ§Ã£o forte (RÂ² = 0.87) entre "AcurÃ¡cia do InventÃ¡rio" e "Tempo de Entrega". Quando inventÃ¡rio estÃ¡ incorreto, atrasos disparam. A conexÃ£o Ã© cristalina.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Sempre soube que todo problema tem uma causa raiz. Os dados confirmam: nosso inventÃ¡rio Ã© o epicentro do caos. Corrija isso, e o resto se alinha."',
      mood: 'A neblina se dissipa. A causa raiz estÃ¡ exposta, vulnerÃ¡vel.'
    },
    {
      type: 'question',
      title: 'ANALYZE - Teste de HipÃ³teses',
      question: 'VocÃª quer validar estatisticamente se o tempo de entrega Ã© DIFERENTE entre dois turnos. Qual teste usar?',
      context: 'Testes estatÃ­sticos transformam suspeitas em certezas. Um Dr. Victor Lou prova, nÃ£o assume.',
      options: [
        { 
          id: 'a', 
          text: 'Teste t de Student (comparar 2 mÃ©dias)', 
          correct: true,
          explanation: 'Perfeito! O Teste t compara mÃ©dias de dois grupos independentes (Turno 1 vs Turno 2). Se p-value < 0.05, hÃ¡ diferenÃ§a significativa. VocÃª domina estatÃ­stica inferencial como domina a noite. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Teste Qui-quadrado (dados categÃ³ricos)', 
          correct: false,
          explanation: 'Qui-quadrado Ã© para dados categÃ³ricos (frequÃªncias), nÃ£o para comparar mÃ©dias de tempos. Escolha a ferramenta certa para o trabalho certo. -15% saÃºde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Apenas comparar visualmente', 
          correct: false,
          explanation: 'AnÃ¡lise visual nÃ£o substitui rigor estatÃ­stico. VocÃª pode ver uma diferenÃ§a que Ã© apenas variaÃ§Ã£o aleatÃ³ria. Um Dr. Victor Lou exige significÃ¢ncia estatÃ­stica. -15% saÃºde do projeto.'
        },
        { 
          id: 'd', 
          text: 'NÃ£o fazer teste - assumir que sÃ£o iguais', 
          correct: false,
          explanation: 'Assumir sem testar Ã© amadorismo. VocÃª pode estar ignorando uma causa raiz importante. HipÃ³teses devem ser testadas, nÃ£o assumidas. -15% saÃºde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'ANALYZE - O Quebra-CabeÃ§a Resolvido',
      image: 'ðŸ§©',
      atmosphere: 'dark',
      text: 'Todas as peÃ§as se encaixam. Causas raÃ­zes identificadas: (1) Sistema de inventÃ¡rio desatualizado, (2) Processo de separaÃ§Ã£o manual, (3) Falta de comunicaÃ§Ã£o com fornecedores. Tudo validado estatisticamente.',
      speaker: 'Dandara Nascimento (holograma)',
      dialogue: '"Dr. Victor Lou, sua anÃ¡lise Ã© irrefutÃ¡vel. Os dados nÃ£o mentem. VocÃªs tÃªm autorizaÃ§Ã£o para implementar as melhorias. NÃ£o nos decepcione."',
      mood: 'A batalha intelectual foi vencida. Agora vem a batalha da implementaÃ§Ã£o.'
    },
    {
      type: 'transition',
      title: 'ANALYZE - Causas RaÃ­zes Expostas',
      image: 'âœ…',
      atmosphere: 'dark',
      text: 'Fase ANALYZE concluÃ­da. O inimigo foi identificado, dissecado, compreendido. VocÃª sabe EXATAMENTE onde e como atacar. A fase IMPROVE aguarda... onde teoria se torna aÃ§Ã£o.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"AnÃ¡lise sem aÃ§Ã£o Ã© paralisia. IMPROVE Ã© onde eu transformo conhecimento em resultados. O verdadeiro poder de um Dr. Victor Lou."',
      mood: 'A vinganÃ§a estÃ¡ prÃ³xima. O processo serÃ¡ reformado.'
    }
  ];

  const allScenes = {
    opening: [openingScene],
    define: defineScenes,
    measure: measureScenes,
    analyze: analyzeScenes,
    improve: improveScenes,
    control: controlScenes
  };

  const phaseNames = {
    opening: 'ABERTURA',
    define: 'DEFINE',
    measure: 'MEASURE',
    analyze: 'ANALYZE',
    improve: 'IMPROVE',
    control: 'CONTROL'
  };

  const handleAnswer = (option, question) => {
    const isCorrect = option.correct;
    
    setCurrentFeedback({
      isCorrect,
      explanation: option.explanation,
      option: option.text
    });
    
    if (isCorrect) {
      setScore(score + 20);
      setProjectHealth(Math.min(100, projectHealth + 5));
    } else {
      setProjectHealth(Math.max(0, projectHealth - 15));
    }
    
    setDecisions([...decisions, {
      phase: currentPhase,
      question: question.question,
      answer: option.text,
      correct: isCorrect
    }]);
    
    setShowFeedback(true);
  };

  const nextScene = () => {
    setShowFeedback(false);
    setCurrentFeedback(null);
    
    if (projectHealth <= 0) {
      setGameState('gameOver');
      return;
    }
    
    const scenes = allScenes[currentPhase];
    
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    } else {
      // AvanÃ§ar para prÃ³xima fase
      if (currentPhase === 'opening') {
        setCurrentPhase('define');
        setCurrentScene(0);
      } else if (currentPhase === 'define') {
        setCurrentPhase('measure');
        setCurrentScene(0);
      } else if (currentPhase === 'measure') {
        setCurrentPhase('analyze');
        setCurrentScene(0);
      } else if (currentPhase === 'analyze') {
        setCurrentPhase('improve');
        setCurrentScene(0);
      } else if (currentPhase === 'improve') {
        setCurrentPhase('control');
        setCurrentScene(0);
      } else {
        setGameState('phaseComplete');
      }
    }
  };

  const startGame = () => {
    setGameState('playing');
    setCurrentScene(0);
    setCurrentPhase('opening');
  };

  const restartGame = () => {
    setGameState('intro');
    setCurrentScene(0);
    setCurrentPhase('opening');
    setProjectHealth(100);
    setScore(0);
    setDecisions([]);
    setShowFeedback(false);
    setCurrentFeedback(null);
  };

  // Componentes de grÃ¡ficos
  const ParetoChart = ({ data }) => (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
      <h4 className="text-sm font-semibold text-gray-300 mb-3">Diagrama de Pareto - Causas de Atraso</h4>
      <div className="flex items-end gap-2 h-48">
        {data.map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center relative">
            <div className="w-full flex flex-col items-center">
              <div 
                className="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t flex flex-col items-center justify-end pb-2"
                style={{ height: `${(item.frequency / 45) * 160}px` }}
              >
                <span className="text-white font-bold text-xs">{item.frequency}%</span>
              </div>
              <div className="w-full border-t-2 border-yellow-400 relative" style={{ height: '40px' }}>
                <div className="absolute top-0 right-0 text-yellow-400 text-xs font-bold">
                  {item.cumulative}%
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">{item.category}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500"></div>
          <span>FrequÃªncia</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 border-t-2 border-yellow-400"></div>
          <span>Acumulado</span>
        </div>
      </div>
    </div>
  );

  const ProcessTimeChart = ({ data }) => (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
      <h4 className="text-sm font-semibold text-gray-300 mb-3">Tempo por Etapa do Processo (horas)</h4>
      <div className="space-y-3">
        {data.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-xs text-gray-400">
              <span>{item.step}</span>
              <span>Atual: {item.time}h | Meta: {item.target}h</span>
            </div>
            <div className="relative h-6 bg-gray-800 rounded">
              <div 
                className={`h-full rounded ${item.time > item.target ? 'bg-red-500' : 'bg-green-500'}`}
                style={{ width: `${(item.time / 80) * 100}%` }}
              ></div>
              <div 
                className="absolute top-0 h-full w-1 bg-yellow-400"
                style={{ left: `${(item.target / 80) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500"></div>
          <span>Acima da meta</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-500"></div>
          <span>Na meta</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1 h-3 bg-yellow-400"></div>
          <span>Meta</span>
        </div>
      </div>
    </div>
  );

  const ControlChart = ({ data }) => (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
      <h4 className="text-sm font-semibold text-gray-300 mb-3">GrÃ¡fico de Controle - Tempo de Entrega (dias)</h4>
      <div className="relative h-48 flex items-end gap-2">
        {data.map((point, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center relative h-full justify-end">
            <div className="absolute top-0 w-full flex flex-col items-center">
              {idx === 0 && (
                <>
                  <div className="text-red-400 text-xs" style={{ position: 'absolute', top: `${100 - (point.ucl / 22) * 100}%` }}>UCL</div>
                  <div className="text-blue-400 text-xs" style={{ position: 'absolute', top: `${100 - (point.mean / 22) * 100}%` }}>MÃ©dia</div>
                  <div className="text-red-400 text-xs" style={{ position: 'absolute', top: `${100 - (point.lcl / 22) * 100}%` }}>LCL</div>
                </>
              )}
            </div>
            <div 
              className={`w-3 h-3 rounded-full ${point.value > point.ucl || point.value < point.lcl ? 'bg-red-500 ring-2 ring-red-300' : 'bg-blue-400'}`}
              style={{ position: 'absolute', top: `${100 - (point.value / 22) * 100}%` }}
            ></div>
            <p className="text-xs text-gray-500 mt-1">D{point.day}</p>
          </div>
        ))}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-full border-t-2 border-red-500 border-dashed" style={{ top: `${100 - (18 / 22) * 100}%` }}></div>
          <div className="absolute w-full border-t-2 border-blue-500" style={{ top: `${100 - (14 / 22) * 100}%` }}></div>
          <div className="absolute w-full border-t-2 border-red-500 border-dashed" style={{ top: `${100 - (10 / 22) * 100}%` }}></div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          <span>Normal</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span>Fora de controle</span>
        </div>
      </div>
    </div>
  );

  const ComparisonChart = ({ data }) => (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
      <h4 className="text-sm font-semibold text-gray-300 mb-3">AnÃ¡lise Financeira (R$ mil)</h4>
      <div className="flex gap-4 items-end h-48">
        {data.map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center">
            <div 
              className={`w-full ${item.color === 'red' ? 'bg-gradient-to-t from-red-600 to-red-400' : 'bg-gradient-to-t from-blue-600 to-blue-400'} rounded-t flex items-end justify-center pb-2`}
              style={{ height: `${(item.value / 2400) * 100}%` }}
            >
              <span className="text-white font-bold text-sm">{item.value}K</span>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // Componente de abertura do herÃ³i
  const OpeningScene = ({ scene }) => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white p-6">
          <h2 className="text-3xl font-bold text-center">{scene.title}</h2>
        </div>
        
        <div className="p-8">
          <div className="text-center mb-8">
            {scene.useImageUrl ? (
              <div className="mb-6 flex justify-center">
                <img 
                  src={scene.image} 
                  alt={scene.heroName}
                  className="w-80 h-auto rounded-lg shadow-2xl border-4 border-purple-500 shadow-purple-500/50 hover:shadow-purple-500/80 transition-shadow"
                  style={{ maxHeight: '450px', objectFit: 'contain' }}
                />
              </div>
            ) : (
              <div className="text-9xl mb-6">{scene.image}</div>
            )}
            <h1 className="text-4xl font-bold text-white mb-3">{scene.heroName}</h1>
            <p className="text-xl text-purple-400 italic mb-6">"{scene.tagline}"</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 mb-6 border border-purple-700">
            <p className="text-gray-300 text-lg leading-relaxed text-center">{scene.description}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {scene.stats.map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-950 to-purple-950 rounded-lg p-4 text-center border border-blue-700">
                <p className="text-xs text-gray-400 mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-purple-950 border-l-4 border-purple-500 p-4 rounded text-center">
            <p className="text-sm text-gray-300">
              Quando processos falham e o caos reina, apenas um homem pode restaurar a ordem atravÃ©s de dados, anÃ¡lise e metodologia DMAIC.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <button
          onClick={nextScene}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-12 rounded-lg flex items-center gap-2 transition-colors shadow-lg text-lg"
        >
          Iniciar MissÃ£o
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );

  // Componente de introduÃ§Ã£o
  const IntroScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">ðŸ¦‡</div>
          <h1 className="text-4xl font-bold text-white mb-2">JORNADA DMAIC</h1>
          <p className="text-lg text-gray-400">As MissÃµes do Dr. Victor Lou</p>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-3">A Lenda</h2>
          <p className="text-gray-300 mb-4">
            Nas sombras da indÃºstria, quando processos falham e empresas agonizam, surge um herÃ³i. 
            Dr. Victor Lou, Master Black Belt, guardiÃ£o da metodologia DMAIC, usa dados como armas e anÃ¡lise como escudo.
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <Shield className="text-blue-400" size={20} />
              <span>EstratÃ©gia DMAIC</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Activity className="text-green-400" size={20} />
              <span>AnÃ¡lise EstatÃ­stica</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="text-yellow-400" size={20} />
              <span>DecisÃµes RÃ¡pidas</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Target className="text-red-400" size={20} />
              <span>Foco em Resultados</span>
            </div>
          </div>
        </div>

        <div className="bg-red-950 border-l-4 border-red-600 p-4 mb-6">
          <div className="flex gap-2">
            <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
            <p className="text-sm text-gray-300">
              <strong className="text-red-400">AtenÃ§Ã£o:</strong> DecisÃµes erradas enfraquecem o projeto. Se a saÃºde chegar a zero, a missÃ£o falha e a empresa sucumbe ao caos.
            </p>
          </div>
        </div>

        <button
          onClick={startGame}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
        >
          <Play size={24} />
          Iniciar MissÃ£o
        </button>
      </div>
    </div>
  );

  // Componente de narrativa
  const NarrativeScene = ({ scene }) => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white p-6">
          <h2 className="text-2xl font-bold">{scene.title}</h2>
        </div>
        
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="text-8xl mb-4">{scene.image}</div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed">{scene.text}</p>
          </div>
          
          <div className="bg-blue-950 border-l-4 border-blue-500 p-4 rounded mb-4">
            <p className="text-sm font-semibold text-blue-300 mb-2">{scene.speaker}:</p>
            <p className="text-gray-300 italic">"{scene.dialogue}"</p>
          </div>

          {scene.mood && (
            <div className="text-center text-sm text-gray-500 italic">
              {scene.mood}
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <button
          onClick={nextScene}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors shadow-lg"
        >
          Continuar
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  // Componente de questÃ£o
  const QuestionScene = ({ scene }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 text-white p-6">
            <h2 className="text-2xl font-bold">{scene.title}</h2>
          </div>
          
          <div className="p-8">
            {scene.context && (
              <div className="bg-purple-950 border-l-4 border-purple-500 p-4 rounded mb-6">
                <p className="text-sm text-gray-300">{scene.context}</p>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4 whitespace-pre-line">{scene.question}</h3>
            </div>

            {scene.chart && (
              <div className="mb-6">
                {scene.chart.type === 'pareto' && <ParetoChart data={scene.chart.data} />}
                {scene.chart.type === 'process_time' && <ProcessTimeChart data={scene.chart.data} />}
                {scene.chart.type === 'control_chart' && <ControlChart data={scene.chart.data} />}
                {scene.chart.type === 'comparison' && <ComparisonChart data={scene.chart.data} />}
              </div>
            )}
            
            {!showFeedback ? (
              <div className="space-y-3">
                {scene.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSelectedOption(option);
                      handleAnswer(option, scene);
                    }}
                    className="w-full text-left p-4 rounded-lg border-2 border-gray-700 bg-gray-900 hover:border-blue-500 hover:bg-gray-850 transition-all"
                  >
                    <span className="font-semibold text-blue-400 mr-2">{option.id.toUpperCase()})</span>
                    <span className="text-gray-300">{option.text}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className={`rounded-lg p-6 border-2 ${currentFeedback.isCorrect ? 'bg-green-950 border-green-600' : 'bg-red-950 border-red-600'}`}>
                <div className="flex items-start gap-3 mb-4">
                  {currentFeedback.isCorrect ? (
                    <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
                  ) : (
                    <XCircle className="text-red-400 flex-shrink-0" size={24} />
                  )}
                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${currentFeedback.isCorrect ? 'text-green-300' : 'text-red-300'}`}>
                      {currentFeedback.isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta'}
                    </h4>
                    <p className="text-gray-300 mb-2">
                      <strong>Sua resposta:</strong> {currentFeedback.option}
                    </p>
                    <p className="text-gray-300">{currentFeedback.explanation}</p>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <button
                    onClick={nextScene}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors shadow-lg"
                  >
                    Continuar
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Componente de epÃ­logo
  const EpilogueScene = ({ scene }) => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white p-6">
          <h2 className="text-2xl font-bold">{scene.title}</h2>
        </div>
        
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="text-8xl mb-4">{scene.image}</div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">{scene.text}</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-950 to-indigo-950 border-l-4 border-purple-500 p-6 rounded mb-4">
            <p className="text-sm font-semibold text-purple-300 mb-3">{scene.speaker}:</p>
            <p className="text-gray-300 italic leading-relaxed">{scene.dialogue}</p>
          </div>

          {scene.mood && (
            <div className="text-center text-sm text-gray-500 italic mb-6">
              {scene.mood}
            </div>
          )}

          {scene.finalStats && (
            <div className="bg-gradient-to-br from-green-950 to-teal-950 rounded-lg p-6 border border-green-700">
              <h3 className="text-xl font-semibold text-green-300 mb-4 text-center">ðŸ† EstatÃ­sticas Finais da MissÃ£o ðŸ†</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded p-3 border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1">Tempo de Entrega</p>
                  <p className="text-2xl font-bold text-green-400">8.7 dias</p>
                  <p className="text-xs text-gray-500">Meta: 9 dias âœ“</p>
                </div>
                <div className="bg-gray-900 rounded p-3 border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1">ROI Realizado</p>
                  <p className="text-2xl font-bold text-blue-400">1067%</p>
                  <p className="text-xs text-gray-500">R$ 2.1M recuperado</p>
                </div>
                <div className="bg-gray-900 rounded p-3 border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1">SatisfaÃ§Ã£o Cliente</p>
                  <p className="text-2xl font-bold text-purple-400">96%</p>
                  <p className="text-xs text-gray-500">Era 87%</p>
                </div>
                <div className="bg-gray-900 rounded p-3 border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1">Estabilidade (Cpk)</p>
                  <p className="text-2xl font-bold text-yellow-400">1.45</p>
                  <p className="text-xs text-gray-500">Processo capaz âœ“</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <button
          onClick={nextScene}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors shadow-lg"
        >
          Ver Resultados Finais
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  // Componente de transiÃ§Ã£o
  const TransitionScene = ({ scene }) => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
        <div className="bg-gradient-to-r from-green-900 via-teal-900 to-green-900 text-white p-6">
          <h2 className="text-2xl font-bold">{scene.title}</h2>
        </div>
        
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="text-8xl mb-4">{scene.image}</div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">{scene.text}</p>
          </div>

          <div className="bg-blue-950 border-l-4 border-blue-500 p-4 rounded mb-4">
            <p className="text-sm font-semibold text-blue-300 mb-2">{scene.speaker}:</p>
            <p className="text-gray-300 italic">"{scene.dialogue}"</p>
          </div>

          {scene.mood && (
            <div className="text-center text-sm text-gray-500 italic mb-4">
              {scene.mood}
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <button
          onClick={nextScene}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors shadow-lg"
        >
          PrÃ³xima Fase
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  // Status do projeto
  const ProjectStatus = () => (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-6 border border-gray-700">
      <div className="flex justify-between items-center mb-3">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-400">SaÃºde do Projeto</h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-48 h-3 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all ${
                  projectHealth > 60 ? 'bg-green-500' : 
                  projectHealth > 30 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${projectHealth}%` }}
              />
            </div>
            <span className="text-sm font-bold text-white">{projectHealth}%</span>
          </div>
        </div>
        
        <div className="text-right">
          <h3 className="text-sm font-semibold text-gray-400">PontuaÃ§Ã£o</h3>
          <p className="text-2xl font-bold text-blue-400">{score}</p>
        </div>
      </div>
      
      <div className="text-xs text-gray-500">
        Fase: {phaseNames[currentPhase]} ({currentScene + 1}/{allScenes[currentPhase].length})
      </div>
    </div>
  );

  // Tela de conclusÃ£o
  const PhaseCompleteScreen = () => {
    const correctDecisions = decisions.filter(d => d.correct).length;
    const totalDecisions = decisions.length;
    const accuracy = Math.round((correctDecisions / totalDecisions) * 100);

    let performanceRank = 'Aprendiz';
    let rankColor = 'gray';
    let rankMessage = 'VocÃª completou a missÃ£o, mas hÃ¡ muito a aprender.';

    if (accuracy >= 90 && projectHealth >= 85) {
      performanceRank = 'Master Black Belt Elite';
      rankColor = 'purple';
      rankMessage = 'Desempenho excepcional! VocÃª alcanÃ§ou o nÃ­vel do Dr. Victor Lou.';
    } else if (accuracy >= 75 && projectHealth >= 70) {
      performanceRank = 'Master Black Belt';
      rankColor = 'blue';
      rankMessage = 'Excelente trabalho! VocÃª domina a metodologia DMAIC.';
    } else if (accuracy >= 60 && projectHealth >= 50) {
      performanceRank = 'Black Belt';
      rankColor = 'green';
      rankMessage = 'Bom desempenho. Continue aprimorando suas habilidades.';
    } else if (accuracy >= 40) {
      performanceRank = 'Green Belt';
      rankColor = 'yellow';
      rankMessage = 'VocÃª tem potencial, mas precisa de mais prÃ¡tica.';
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-4">
        <div className="max-w-3xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">ðŸ‘‘</div>
            <h1 className="text-4xl font-bold text-white mb-2">JORNADA DMAIC COMPLETA!</h1>
            <p className="text-lg text-gray-400">Dr. Victor Lou prevaleceu</p>
          </div>
          
          <div className="bg-purple-950 border-2 border-purple-600 rounded-lg p-6 mb-6 text-center">
            <p className="text-sm text-gray-400 mb-2">Rank AlcanÃ§ado</p>
            <p className="text-3xl font-bold text-purple-400 mb-2">{performanceRank}</p>
            <p className="text-sm text-gray-300">{rankMessage}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-950 rounded-lg p-4 text-center border border-blue-700">
              <p className="text-sm text-gray-400 mb-1">PontuaÃ§Ã£o</p>
              <p className="text-3xl font-bold text-blue-400">{score}</p>
            </div>
            <div className="bg-green-950 rounded-lg p-4 text-center border border-green-700">
              <p className="text-sm text-gray-400 mb-1">SaÃºde Final</p>
              <p className="text-3xl font-bold text-green-400">{projectHealth}%</p>
            </div>
            <div className="bg-purple-950 rounded-lg p-4 text-center border border-purple-700">
              <p className="text-sm text-gray-400 mb-1">PrecisÃ£o</p>
              <p className="text-3xl font-bold text-purple-400">{accuracy}%</p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-700">
            <h3 className="font-semibold text-white mb-4 text-center">ðŸŽ¯ Todas as Fases ConcluÃ­das</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-green-400 bg-gray-800 p-3 rounded border border-gray-700">
                <CheckCircle size={24} />
                <div>
                  <p className="font-semibold">DEFINE</p>
                  <p className="text-xs text-gray-400">MissÃ£o estabelecida, Charter aprovado</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-green-400 bg-gray-800 p-3 rounded border border-gray-700">
                <CheckCircle size={24} />
                <div>
                  <p className="font-semibold">MEASURE</p>
                  <p className="text-xs text-gray-400">Dados coletados, baseline estabelecido</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-green-400 bg-gray-800 p-3 rounded border border-gray-700">
                <CheckCircle size={24} />
                <div>
                  <p className="font-semibold">ANALYZE</p>
                  <p className="text-xs text-gray-400">Causas raÃ­zes identificadas e validadas</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-green-400 bg-gray-800 p-3 rounded border border-gray-700">
                <CheckCircle size={24} />
                <div>
                  <p className="font-semibold">IMPROVE</p>
                  <p className="text-xs text-gray-400">SoluÃ§Ãµes implementadas, resultados alcanÃ§ados</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-green-400 bg-gray-800 p-3 rounded border border-gray-700">
                <CheckCircle size={24} />
                <div>
                  <p className="font-semibold">CONTROL</p>
                  <p className="text-xs text-gray-400">SustentaÃ§Ã£o garantida, legado estabelecido</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-950 to-indigo-950 rounded-lg p-6 mb-6 border border-purple-700">
            <h3 className="font-semibold text-purple-300 mb-3 text-center">ðŸ“Š Impacto da MissÃ£o</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="text-center">
                <p className="text-gray-400">Tempo de Entrega</p>
                <p className="text-xl font-bold text-white">15 â†’ 8.7 dias</p>
                <p className="text-xs text-green-400">â†“ 42% de reduÃ§Ã£o</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">ROI Realizado</p>
                <p className="text-xl font-bold text-white">1067%</p>
                <p className="text-xs text-green-400">R$ 2.1M economizados</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">SatisfaÃ§Ã£o Cliente</p>
                <p className="text-xl font-bold text-white">87% â†’ 96%</p>
                <p className="text-xs text-green-400">+9 pontos</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">Processo EstÃ¡vel</p>
                <p className="text-xl font-bold text-white">Cpk 1.45</p>
                <p className="text-xs text-green-400">Capaz e estÃ¡vel</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-700">
            <h3 className="font-semibold text-white mb-3">Suas DecisÃµes:</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {decisions.map((decision, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  {decision.correct ? (
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={16} />
                  ) : (
                    <XCircle className="text-red-400 flex-shrink-0 mt-1" size={16} />
                  )}
                  <div>
                    <p className="text-gray-400 text-xs">{decision.phase.toUpperCase()}</p>
                    <p className="text-gray-300">{decision.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={restartGame}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-lg"
            >
              Nova MissÃ£o
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Tela de Game Over
  const GameOverScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-red-700">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">ðŸ’€</div>
          <h1 className="text-3xl font-bold text-white mb-2">MissÃ£o Falhou</h1>
          <p className="text-lg text-gray-400">O caos venceu desta vez</p>
        </div>
        
        <div className="bg-red-950 rounded-lg p-6 mb-6 border border-red-700">
          <p className="text-gray-300 mb-4">
            Suas decisÃµes levaram o projeto ao colapso. A empresa sucumbiu ao caos dos processos. 
            Recursos foram desperdiÃ§ados, prazos nÃ£o foram cumpridos, e a confianÃ§a foi perdida.
          </p>
          <p className="text-gray-300 font-semibold">
            AtÃ© o Dr. Victor Lou pode falhar. Mas um verdadeiro herÃ³i se levanta novamente.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 mb-6 border border-gray-700 text-center">
          <p className="text-sm text-gray-400 mb-1">PontuaÃ§Ã£o Final</p>
          <p className="text-3xl font-bold text-white">{score}</p>
        </div>

        <button
          onClick={restartGame}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-lg"
          >
          Tentar Novamente
        </button>
      </div>
    </div>
  );

  // RenderizaÃ§Ã£o principal
  if (gameState === 'intro') {
    return <IntroScreen />;
  }

  if (gameState === 'gameOver') {
    return <GameOverScreen />;
  }

  if (gameState === 'phaseComplete') {
    return <PhaseCompleteScreen />;
  }

  const currentSceneData = allScenes[currentPhase][currentScene];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-4 py-8">
      <div className="max-w-4xl mx-auto">
        {currentPhase !== 'opening' && <ProjectStatus />}
        
        {currentSceneData.type === 'opening' && <OpeningScene scene={currentSceneData} />}
        {currentSceneData.type === 'narrative' && <NarrativeScene scene={currentSceneData} />}
        {currentSceneData.type === 'question' && <QuestionScene scene={currentSceneData} />}
        {currentSceneData.type === 'transition' && <TransitionScene scene={currentSceneData} />}
        {currentSceneData.type === 'epilogue' && <EpilogueScene scene={currentSceneData} />}
      </div>
    </div>
  );
};

export default JornadaDMAIC;
