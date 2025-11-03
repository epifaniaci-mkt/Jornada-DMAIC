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

  // Dados para os gráficos
  const paretoData = [
    { category: 'Falta de Peças', frequency: 45, cumulative: 45 },
    { category: 'Retrabalho', frequency: 28, cumulative: 73 },
    { category: 'Atraso Logística', frequency: 15, cumulative: 88 },
    { category: 'Falha Equipamento', frequency: 8, cumulative: 96 },
    { category: 'Outros', frequency: 4, cumulative: 100 }
  ];

  const processTimeData = [
    { step: 'Recebimento', time: 24, target: 12 },
    { step: 'Separação', time: 48, target: 24 },
    { step: 'Montagem', time: 72, target: 72 },
    { step: 'Teste', time: 36, target: 24 },
    { step: 'Embalagem', time: 12, target: 8 },
    { step: 'Expedição', time: 16, target: 12 }
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

  // Cena de abertura - Introdução do herói
  const openingScene = {
    type: 'opening',
    title: 'O HERÓI',
    image: '🦸‍♂️',
    atmosphere: 'dark',
    heroName: 'Dr. Victor Lou',
    tagline: 'Nem todo herói usa capa. Alguns usam Minitab®',
    description: 'Dr. Victor Lou. Guardião da metodologia DMAIC. Quando processos falham e empresas agonizam, ele surge das sombras.',
    stats: [
      { label: 'Projetos Salvos', value: '127' },
      { label: 'ROI Médio', value: '850%' },
      { label: 'Taxa de Sucesso', value: '94%' }
    ]
  };

  // Cenas da fase DEFINE
  const defineScenes = [
    {
      type: 'narrative',
      title: 'DEFINE - A Chamada',
      image: '🦇',
      atmosphere: 'dark',
      text: 'A sirene ecoa pela cidade às 23h47. No topo do QG Sigma, Dr. Victor Lou observa os dados piscando em seu painel holográfico. Uma empresa está em crise: tempo de entrega aumentou 40% em seis meses.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Mais uma empresa à beira do colapso. O caos nos processos se espalha como sombras na noite. É hora de agir."',
      mood: 'O vento frio da noite carrega o peso da responsabilidade.'
    },
    {
      type: 'narrative',
      title: 'DEFINE - Reunião nas Sombras',
      image: '👥',
      atmosphere: 'dark',
      text: 'Em uma sala escura, iluminada apenas pela luz azulada dos monitores, você reúne os melhores: Green Belts, Yellow Belts e especialistas. Todos sabem que quando Dr. Victor Lou chama, a missão é crítica.',
      speaker: 'Green Belt Veterano',
      dialogue: '"Estamos com você, Dr. Lou. Já vi empresas ruírem por menos. Vamos usar DMAIC para trazer ordem ao caos."',
      mood: 'A tensão é palpável. Falhar não é uma opção.'
    },
    {
      type: 'question',
      title: 'DEFINE - Primeira Decisão',
      question: 'Como verdadeiro Dr. Victor Lou, qual ferramenta você usa primeiro para definir o escopo desta missão?',
      context: 'Na escuridão da incerteza, um líder verdadeiro precisa de um mapa. A fase DEFINE exige clareza absoluta antes de mergulhar nas sombras do problema.',
      options: [
        { 
          id: 'a', 
          text: 'Project Charter - O mapa da missão', 
          correct: true,
          explanation: 'Perfeito, Dr. Victor Lou! O Project Charter é seu farol na escuridão. Ele documenta o problema, objetivo, escopo, stakeholders e recursos. Como um super-herói, você sabe que toda missão começa com um plano claro. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Diagrama de Pareto - Análise dos vilões', 
          correct: false,
          explanation: 'Precipitado, jovem padawan. O Pareto é uma arma poderosa, mas pertence à fase ANALYZE. Primeiro, você precisa definir claramente sua missão. Um herói que ataca sem plano está fadado ao fracasso. -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Gráfico de Controle - Vigilância constante', 
          correct: false,
          explanation: 'Essa é uma ferramenta da fase CONTROL, quando você já derrotou o vilão e precisa manter a ordem. Você ainda está definindo qual batalha lutar. Foco, Dr. Lou! -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'FMEA - Mapeamento de ameaças', 
          correct: false,
          explanation: 'FMEA é crucial para prevenir falhas, mas você ainda não analisou o problema. É como tentar desarmar uma bomba sem saber onde ela está. Primeiro, defina o campo de batalha. -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'DEFINE - O Charter da Missão',
      image: '📜',
      atmosphere: 'dark',
      text: 'Sob a luz tênue de seu escritório, você prepara o Charter. Objetivo: reduzir tempo de entrega de 15 para 9 dias em 6 meses. A alta gestão aprova. Você está oficialmente na missão.',
      speaker: 'CEO (via holograma)',
      dialogue: '"Dr. Victor Lou, confiamos em você. Temos R$ 2.4M em risco e apenas R$ 180K de orçamento. Traga resultados... ou tudo desmorona."',
      mood: 'O peso da expectativa é como uma capa de chumbo.'
    },
    {
      type: 'question',
      title: 'DEFINE - Cálculo Estratégico',
      question: 'Seus sensores analíticos captaram os dados. Receita em risco: R$ 2.4M. Custo da missão: R$ 180K. Qual o ROI potencial?',
      context: 'Um verdadeiro Dr. Victor Lou domina os números como domina as ferramentas. ROI = (Ganho - Custo) / Custo × 100%',
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
          text: 'ROI = 1233% - Missão extremamente viável', 
          correct: true,
          explanation: 'Excelente, Dr. Lou! (2400 - 180) / 180 × 100% = 1233%. Este ROI monumental justifica todos os recursos. Você acaba de garantir que os executivos apoiarão a missão até o fim. Sua habilidade analítica é incomparável. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'ROI = 733% - Missão viável', 
          correct: false,
          explanation: 'Seus cálculos falharam, Dr. Lou. Você esqueceu de incluir o ganho total. Um erro matemático assim pode fazer você perder o suporte da alta gestão. Recalcule: (2400-180)/180×100%. -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'ROI = 93% - Missão marginal', 
          correct: false,
          explanation: 'Negativo, Dr. Victor Lou. Esse número está muito abaixo do real. Com esse ROI reportado, a missão pode ser cancelada por "baixo retorno". Um herói deve dominar os números. -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'ROI = 13% - Missão questionável', 
          correct: false,
          explanation: 'Erro crítico! Com esse ROI, os executivos cancelariam a missão imediatamente. Na verdade, o ROI é mais de 1000%! Um Dr. Victor Lou jamais pode errar nos fundamentos. -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'DEFINE - A Voz das Vítimas',
      image: '🎭',
      atmosphere: 'dark',
      text: 'Você infiltra-se discretamente em reuniões com clientes. Disfarçado nas sombras, captura a essência de suas frustrações: atrasos, falta de comunicação, incerteza. A Voz do Cliente ecoa em sua mente.',
      speaker: 'Cliente Premium (gravação)',
      dialogue: '"Não sabemos quando receberemos nossos pedidos. É como estar no escuro... esperando, sempre esperando. Estamos perdendo a confiança."',
      mood: 'Cada reclamação é uma alma perdida nas falhas do processo.'
    },
    {
      type: 'question',
      title: 'DEFINE - Identificando o Alvo',
      question: 'Baseado na inteligência coletada (VOC), qual CTQ é seu alvo principal nesta missão?',
      context: 'CTQs são as características críticas que, quando melhoradas, salvam empresas. Um herói escolhe seus alvos com sabedoria.',
      options: [
        { 
          id: 'a', 
          text: 'Tempo de entrega: 15 → 9 dias', 
          correct: true,
          explanation: 'Alvo confirmado, Dr. Lou! Este CTQ está perfeitamente alinhado com a VOC dos clientes. É mensurável, específico e impactante. Você identificou o coração do problema. Como um franco-atirador, você não erra o alvo. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Redução de custos em 15%', 
          correct: false,
          explanation: 'Alvo errado! Os clientes não reclamaram de preços, reclamaram de atrasos. Você está mirando no lugar errado. Um herói que ataca o alvo errado desperdiça munição preciosa. Realinhe-se! -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Satisfação dos funcionários', 
          correct: false,
          explanation: 'Embora nobre, este não é o CTQ derivado da VOC dos clientes. Você está confundindo stakeholders internos com externos. Foco na missão! -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Implementar novo ERP', 
          correct: false,
          explanation: 'Erro crítico! Isso é uma solução, não um CTQ. Você está pulando da DEFINE direto para a implementação. Um verdadeiro Dr. Victor Lou JAMAIS pula etapas. A metodologia existe por uma razão. -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'transition',
      title: 'DEFINE - Missão Aceita',
      image: '✅',
      atmosphere: 'dark',
      text: 'A base está estabelecida. O Charter aprovado, o ROI calculado, a VOC capturada, os CTQs definidos. Você está pronto para a próxima fase. O relógio marca meia-noite. É hora de MEDIR.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"A escuridão está mapeada. Agora preciso quantificá-la. MEASURE é onde os números revelam a verdade escondida nas sombras."',
      mood: 'A primeira batalha foi vencida. A guerra apenas começou.'
    }
  ];

  // Cenas da fase MEASURE
  const measureScenes = [
    {
      type: 'narrative',
      title: 'MEASURE - Coletando Evidências',
      image: '🔍',
      atmosphere: 'dark',
      text: 'Como um detetive das operações, você invade o chão de fábrica às 3h da manhã. Câmeras, sensores, cronômetros. Tudo está sendo medido. Cada segundo conta, cada movimento é rastreado.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Na fase MEASURE, a verdade se esconde nos dados. Não confio em opiniões. Confio em números, fatos, evidências irrefutáveis."',
      mood: 'O silêncio da fábrica vazia é quebrado apenas pelo zumbido das máquinas.'
    },
    {
      type: 'question',
      title: 'MEASURE - Sistema de Medição',
      question: 'Antes de coletar dados em massa, você precisa validar seu sistema de medição. Qual estudo realizar?',
      context: 'Um Dr. Victor Lou sabe: dados ruins geram decisões ruins. Garbage in, garbage out.',
      options: [
        { 
          id: 'a', 
          text: 'MSA (Measurement System Analysis) - R&R Study', 
          correct: true,
          explanation: 'Excelente! O MSA/Gage R&R é essencial para garantir que seu sistema de medição é confiável e repetível. Você está validando suas ferramentas antes da batalha. Um verdadeiro mestre! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Coletar dados imediatamente sem validação', 
          correct: false,
          explanation: 'Erro grave! Dados sem validação do sistema de medição são como lutar no escuro. Você pode estar baseando toda sua missão em informações incorretas. Um Dr. Victor Lou SEMPRE valida primeiro. -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Teste de Hipóteses estatístico', 
          correct: false,
          explanation: 'Prematura essa ação. Testes de hipóteses pertencem à fase ANALYZE. Você ainda está na MEASURE, coletando e validando dados. Contenha sua ansiedade, jovem padawan. -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Pedir para equipe de TI desenvolver dashboard', 
          correct: false,
          explanation: 'Um dashboard bonito não adianta nada se os dados forem ruins. Primeiro valide, depois visualize. Forma sem função é ilusão. -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'MEASURE - Mapeando o Processo',
      image: '🗺️',
      atmosphere: 'dark',
      text: 'Você cria um Value Stream Map detalhado. Cada etapa do processo é exposta: recebimento, separação, montagem, teste, embalagem, expedição. Os gargalos começam a aparecer como sombras contra a luz.',
      speaker: 'Green Belt',
      dialogue: '"Dr. Lou, encontrei algo. A etapa de separação está levando o dobro do tempo esperado. E veja aqui... há espera entre etapas. Muito desperdício."',
      mood: 'As ineficiências se revelam como vilões escondidos no processo.'
    },
    {
      type: 'question',
      title: 'MEASURE - Análise do Processo',
      question: 'Você coletou dados de tempo por etapa (em horas). Observe o gráfico. Qual etapa é o maior gargalo?',
      context: 'Identificar gargalos é como encontrar o vilão principal entre os capangas.',
      chart: {
        type: 'process_time',
        data: processTimeData
      },
      options: [
        { 
          id: 'a', 
          text: 'Separação - 48h (Meta: 24h) - 100% acima', 
          correct: true,
          explanation: 'Alvo identificado! A Separação está o dobro do tempo esperado (100% acima da meta). Este é seu vilão principal. Foco absoluto nesta etapa trará maior impacto. Seu radar de gargalos é impecável. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Teste - 36h (Meta: 24h) - 50% acima', 
          correct: false,
          explanation: 'Embora Teste também esteja acima da meta, Separação é o maior desvio (100% vs 50%). Atacar o gargalo errado diluirá seus esforços. Priorize, Dr. Lou! -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Montagem - 72h (dentro da meta)', 
          correct: false,
          explanation: 'Negativo! Montagem está dentro da meta. Você está desperdiçando recursos em uma área que não precisa de intervenção urgente. Foco no verdadeiro vilão! -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Todas as etapas igualmente', 
          correct: false,
          explanation: 'Abordagem dispersiva! Um Dr. Victor Lou prioriza. Recursos limitados exigem foco no maior impacto. Atacar tudo é atacar nada. -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'MEASURE - O Diagrama de Pareto',
      image: '📊',
      atmosphere: 'dark',
      text: 'Seus dados revelam os vilões. Você cria um Diagrama de Pareto das causas de atraso. A regra 80/20 se manifesta: poucos problemas causam a maioria dos atrasos.',
      speaker: 'Yellow Belt',
      dialogue: '"Dr. Lou, os dados não mentem. 45% dos atrasos são por falta de peças. Os fornecedores são nosso ponto fraco."',
      mood: 'A verdade emerge dos números como uma conspiração revelada.'
    },
    {
      type: 'question',
      title: 'MEASURE - Princípio de Pareto',
      question: 'Observe o Pareto. Quantos problemas você deve atacar primeiro para resolver ~80% dos atrasos?',
      context: 'Um herói sábio sabe: não pode lutar todas as batalhas ao mesmo tempo. Priorização é poder.',
      chart: {
        type: 'pareto',
        data: paretoData
      },
      options: [
        { 
          id: 'a', 
          text: 'Os 2 primeiros: Falta de Peças (45%) + Retrabalho (28%) = 73%', 
          correct: true,
          explanation: 'Perfeito, Dr. Lou! Focando nos 2 principais problemas (40% das causas), você ataca 73% dos efeitos. Isso é eficiência máxima! O Princípio de Pareto é sua arma. Recursos otimizados, impacto maximizado. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Todos os 5 problemas simultaneamente', 
          correct: false,
          explanation: 'Recursos dispersos = impacto diluído. Você tem budget e tempo limitados. Atacar "Outros" (4%) junto com gigantes é desperdício. Concentre fogo, Dr. Lou! -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Apenas Falta de Peças (45%)', 
          correct: false,
          explanation: 'Conservador demais. Com pequeno esforço adicional, você pode incluir Retrabalho e alcançar 73%. Não deixe impacto na mesa. Seja ambicioso, mas estratégico. -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Os 4 últimos problemas (27% dos efeitos)', 
          correct: false,
          explanation: 'Você está ignorando o elefante na sala! Atacar os 4 menores problemas e deixar os 2 maiores é absurdo. Inverta sua lógica, Dr. Lou. -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'MEASURE - Baseline Estabelecido',
      image: '📈',
      atmosphere: 'dark',
      text: 'Após semanas de medição rigorosa, você tem o baseline: tempo médio atual = 15.2 dias, desvio padrão = 2.3 dias. Processo instável. Variação excessiva. O inimigo está quantificado.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Agora sei exatamente onde estou. Baseline estabelecido. É impossível melhorar o que não se mede. MEASURE completo. Hora de ANALISAR."',
      mood: 'Os números contam uma história de caos. Mas caos medido pode ser domado.'
    },
    {
      type: 'transition',
      title: 'MEASURE - Dados Coletados',
      image: '✅',
      atmosphere: 'dark',
      text: 'Missão MEASURE concluída. Sistema de medição validado, processo mapeado, gargalos identificados, baseline estabelecido. Os dados estão em suas mãos. Agora é hora de encontrar a raiz do mal.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Medição sem análise é informação sem sabedoria. A fase ANALYZE é onde eu encontro o coração da escuridão."',
      mood: 'O quebra-cabeça está montado. Falta apenas resolver.'
    }
  ];

  // Cenas da fase IMPROVE
  const improveScenes = [
    {
      type: 'narrative',
      title: 'IMPROVE - A Hora da Ação',
      image: '⚡',
      atmosphere: 'dark',
      text: 'Análise completa. Causas raízes expostas. Chegou a hora de agir. Você convoca sua equipe para a sala de guerra. Mapas do processo cobrem as paredes. O plano de ataque está sendo desenhado.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Conhecimento sem ação é covardia. IMPROVE é onde teoria se torna vitória. Vamos reformar este processo e restaurar a ordem."',
      mood: 'A tensão é elétrica. A batalha decisiva se aproxima.'
    },
    {
      type: 'question',
      title: 'IMPROVE - Soluções Criativas',
      question: 'Você identificou que o sistema de inventário é a causa raiz. Qual abordagem LEAN usar para melhorar?',
      context: 'Na fase IMPROVE, escolher a solução certa é como escolher a arma certa para a batalha. Um Dr. Victor Lou conhece seu arsenal.',
      options: [
        { 
          id: 'a', 
          text: 'Kanban + Sistema Pull - Reposição visual e automática', 
          correct: true,
          explanation: 'Perfeito, Dr. Lou! Kanban resolve EXATAMENTE o problema de inventário desatualizado. Sistema pull garante reposição no momento certo, cartões visuais eliminam erros. Você está atacando a raiz com precisão cirúrgica! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Contratar mais funcionários no estoque', 
          correct: false,
          explanation: 'Erro clássico! Mais pessoas não resolvem um problema de SISTEMA. Você está tratando sintomas, não causas. Um herói não joga dinheiro no problema, ele o resolve inteligentemente. -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Implementar punições para erros de inventário', 
          correct: false,
          explanation: 'Negativo! Punir pessoas por falhas de sistema é injusto e ineficaz. Lean é sobre melhorar processos, não culpar pessoas. Você está atacando os aliados, não o inimigo! -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Fazer inventário completo toda semana', 
          correct: false,
          explanation: 'Solução cara e reativa. Você está colocando band-aid em ferida aberta. Kanban previne o problema, inventário semanal apenas o detecta tarde demais. Pense preventivo, não reativo! -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'IMPROVE - Piloto em Campo',
      image: '🧪',
      atmosphere: 'dark',
      text: 'Você implementa um piloto em uma linha de produção. Sistema Kanban instalado. RFID tags nos bins. Alertas automáticos de reposição. Os primeiros dados chegam: tempo de separação caiu 35% em uma semana.',
      speaker: 'Operador Sênior',
      dialogue: '"Dr. Lou, isso é incrível! Não preciso mais adivinhar se tem peça. O cartão vermelho me avisa automaticamente. É como ter visão de raio-X do estoque!"',
      mood: 'Pequenas vitórias acendem a esperança. A batalha pode ser vencida.'
    },
    {
      type: 'question',
      title: 'IMPROVE - Validação da Solução',
      question: 'Antes de expandir o piloto para toda a fábrica, o que fazer?',
      context: 'Um piloto bem-sucedido não garante sucesso em escala. Validação é crucial.',
      options: [
        { 
          id: 'a', 
          text: 'DOE (Design of Experiments) + Teste de hipóteses', 
          correct: true,
          explanation: 'Magistral! DOE permite testar múltiplas variáveis sistematicamente. Teste de hipóteses valida estatisticamente que a melhoria é real, não sorte. Você está sendo científico como um verdadeiro Dr. Victor Lou! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Expandir imediatamente - piloto funcionou', 
          correct: false,
          explanation: 'Precipitado e perigoso! Uma semana de dados não é suficiente. Pode ser efeito Hawthorne (comportamento muda por estar sendo observado). Um erro aqui pode desperdiçar milhões. Paciência, Dr. Lou! -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Pedir opinião da alta gestão', 
          correct: false,
          explanation: 'Gestão decide budget e estratégia, não validade estatística. Você precisa de DADOS, não opiniões. Um Dr. Victor Lou não terceiriza análise crítica. -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Voltar para a fase ANALYZE', 
          correct: false,
          explanation: 'Recuo sem razão! Você já analisou, agora está na IMPROVE. Ir e voltar entre fases sem dados que justifiquem é perda de tempo e confiança. Avance com método! -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'IMPROVE - A Batalha se Intensifica',
      image: '⚔️',
      atmosphere: 'dark',
      text: 'Três semanas de piloto. DOE completo. Resultados validados estatisticamente (p-value < 0.01). Você tem evidências irrefutáveis. O CFO aprova o budget de R$ 180K para expansão. A guerra contra o caos entra na fase final.',
      speaker: 'CFO',
      dialogue: '"Dr. Victor Lou, seus dados são inquestionáveis. Você transformou céticos em crentes. Aprovo os recursos. Agora, entregue os resultados prometidos."',
      mood: 'O peso da expectativa retorna. Falhar agora seria devastador.'
    },
    {
      type: 'question',
      title: 'IMPROVE - Gestão de Mudança',
      question: 'Ao expandir Kanban para toda fábrica, você enfrenta resistência de operadores antigos. Como proceder?',
      context: 'Resistência à mudança é o vilão invisível de todo projeto IMPROVE. Pessoas são mais difíceis que processos.',
      options: [
        { 
          id: 'a', 
          text: 'Treinamento + Envolvimento + Quick Wins visíveis', 
          correct: true,
          explanation: 'Excelente gestão de mudança! Treinamento capacita, envolvimento gera ownership, quick wins provam valor. Você está conquistando corações E mentes. Lean é sobre pessoas primeiro! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Forçar implementação - eles vão se acostumar', 
          correct: false,
          explanation: 'Abordagem autoritária falha em 70% dos projetos de mudança. Resistência passiva vai sabotar sua solução. Você criou inimigos internos. Um herói inspira, não intimida! -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Substituir operadores resistentes', 
          correct: false,
          explanation: 'Extremo e destrutivo! Você está demitindo experiência valiosa. Conhecimento do processo dessas pessoas é insubstituível. Lean valoriza pessoas. Você traiu os princípios! -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Desistir da mudança para evitar conflito', 
          correct: false,
          explanation: 'Covardia! Resistência é normal, mas deve ser gerenciada, não evitada. Você está deixando o caos vencer por medo de conflito. Dr. Victor Lous não recuam. -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'IMPROVE - Vitórias Acumulam',
      image: '📈',
      atmosphere: 'dark',
      text: 'Dois meses após implementação completa: Tempo médio de entrega = 10.2 dias (meta: 9 dias). Quase lá! Processo de separação: 26h (meta: 24h). Falta de peças: reduzida de 45% para 8%. A transformação é real.',
      speaker: 'Green Belt',
      dialogue: '"Dr. Lou, estamos a centímetros da meta! Mais alguns ajustes e conseguimos. A fábrica está irreconhecível. É como ver luz onde havia apenas escuridão."',
      mood: 'A vitória está próxima. Mas a guerra só acaba na fase CONTROL.'
    },
    {
      type: 'transition',
      title: 'IMPROVE - Transformação Realizada',
      image: '✅',
      atmosphere: 'dark',
      text: 'Fase IMPROVE concluída. Soluções implementadas e validadas. Resultados tangíveis alcançados. Mas um Dr. Victor Lou sabe: melhorias sem sustentação evaporam como névoa ao amanhecer. É hora do CONTROL.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"IMPROVE provou que é possível. CONTROL garantirá que seja permanente. A última fase é onde heróis se tornam lendas."',
      mood: 'A batalha foi vencida. Agora vem a vigilância eterna.'
    }
  ];

  // Cenas da fase CONTROL
  const controlScenes = [
    {
      type: 'narrative',
      title: 'CONTROL - O Guardião Vigilante',
      image: '👁️',
      atmosphere: 'dark',
      text: 'Três meses após implementação. Você retorna à fábrica às 2h da manhã. Como um guardião nas sombras, instala sistemas de monitoramento. Dashboards em tempo real. Alertas automáticos. O processo não pode regredir.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Na fase CONTROL, eu não confio em promessas. Confio em sistemas, métricas, auditorias. O que não é monitorado, não é controlado."',
      mood: 'Vigilância constante é o preço da excelência sustentada.'
    },
    {
      type: 'question',
      title: 'CONTROL - Sistema de Controle',
      question: 'Qual ferramenta usar para monitorar CONTINUAMENTE se o processo permanece sob controle?',
      context: 'CONTROL não é evento único, é vigilância perpétua. Escolha suas ferramentas sabiamente.',
      options: [
        { 
          id: 'a', 
          text: 'Gráficos de Controle (SPC - Statistical Process Control)', 
          correct: true,
          explanation: 'Perfeito! Gráficos de controle detectam desvios em tempo real, identificam causas especiais antes que se tornem crises. SPC é o radar do Dr. Victor Lou. Você nunca dorme, sempre vigia! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Reunião mensal para revisar resultados', 
          correct: false,
          explanation: 'Muito lento! Em um mês, o processo pode degradar completamente. Reuniões são importantes, mas não substituem monitoramento contínuo. Você está deixando brechas para o caos retornar. -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Confiar que equipe manterá o padrão', 
          correct: false,
          explanation: 'Confiança sem verificação é ingenuidade! Pessoas têm boas intenções, mas processos degradam naturalmente (entropia). Trust but verify. Você baixou a guarda prematuramente. -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Voltar para IMPROVE se algo der errado', 
          correct: false,
          explanation: 'Reativo demais! CONTROL é PREVENTIVO. Detectar problemas ANTES que virem crises. Ir e voltar entre fases é sintoma de planejamento falho. Um Dr. Victor Lou previne, não apaga incêndios. -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'CONTROL - Plano de Controle',
      image: '📋',
      atmosphere: 'dark',
      text: 'Você cria um Plano de Controle detalhado: O QUE medir (tempo entrega, acurácia inventário), COMO medir (RFID, sistema), QUANDO medir (tempo real), QUEM é responsável (supervisores), O QUE fazer se sair do controle (plano de ação).',
      speaker: 'Yellow Belt',
      dialogue: '"Dr. Lou, esse plano é tão detalhado que até um novato consegue seguir. Você está criando um sistema à prova de falhas humanas. Genial."',
      mood: 'Cada detalhe importa. Controle é sobre não deixar nada ao acaso.'
    },
    {
      type: 'question',
      title: 'CONTROL - Resposta a Desvios',
      question: 'Semana 1 de monitoramento: Um ponto aparece ACIMA do UCL no gráfico de controle. Como proceder?',
      context: 'Pontos fora de controle exigem ação imediata. A natureza da resposta define o sucesso do CONTROL.',
      options: [
        { 
          id: 'a', 
          text: 'Investigar causa raiz IMEDIATAMENTE + Ação corretiva', 
          correct: true,
          explanation: 'Resposta exemplar! Ponto fora de UCL indica causa especial. Investigação rápida previne recorrência. Você está sendo proativo como um verdadeiro guardião. Vigilância sem ação é inútil! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Ignorar - é só um ponto isolado', 
          correct: false,
          explanation: 'Perigosamente negligente! Um ponto fora de controle é um sinal de alerta, não ruído. Ignorar é como ver fumaça e não procurar o fogo. Você está convidando o caos de volta. -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Refazer todo o projeto DMAIC', 
          correct: false,
          explanation: 'Reação exagerada! Um desvio não significa falha total. CONTROL inclui ajustes e correções. Refazer tudo é desperdício de recursos. Proporcionalidade importa. -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Recalcular limites de controle para incluir o ponto', 
          correct: false,
          explanation: 'Manipulação de dados! Você está escondendo o problema, não resolvendo. Recalcular limites para "esconder" desvios é antiético e perigoso. Um Dr. Victor Lou nunca distorce a verdade. -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'CONTROL - A Ameaça Final',
      image: '⚠️',
      atmosphere: 'dark',
      text: 'Mês 4: Um novo gerente de operações assume. Ele quer "otimizar custos" eliminando o sistema Kanban. "É muito caro manter", diz ele. Este é o teste final: proteger as melhorias contra a ignorância.',
      speaker: 'Novo Gerente',
      dialogue: '"Dr. Victor Lou, com todo respeito, esse sistema Kanban parece desnecessário. Podemos voltar ao método antigo e cortar esses custos."',
      mood: 'O verdadeiro inimigo não é o processo falho, mas a amnésia organizacional.'
    },
    {
      type: 'question',
      title: 'CONTROL - Defesa Final',
      question: 'Como defender o sistema Kanban contra o novo gerente que quer removê-lo?',
      context: 'Esta é a batalha final. Dados vs Opinião. Evidência vs Intuição. Um Dr. Victor Lou não recua.',
      options: [
        { 
          id: 'a', 
          text: 'Apresentar dados: ROI 1233%, Before/After, Custo da regressão', 
          correct: true,
          explanation: 'VITÓRIA ÉPICA! Você apresenta evidências irrefutáveis: R$ 2.4M economizados vs R$ 180K investidos. Gráficos before/after. Custo de regredir ao caos antigo. O gerente recua. Dados vencem opiniões. O Dr. Victor Lou prevaleceu! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Aceitar a decisão - ele é o gerente', 
          correct: false,
          explanation: 'DERROTA VERGONHOSA! Você deixou meses de trabalho serem destruídos por ignorância. Um Dr. Victor Lou LUTA por dados, não se rende a hierarquia cega. Você traiu a missão. -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Ameaçar sair da empresa', 
          correct: false,
          explanation: 'Emocional e contraproducente. Ameaças criam ressentimento, não convencimento. Um herói usa lógica e dados, não drama. Você perdeu credibilidade. -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Implementar Kanban escondido do gerente', 
          correct: false,
          explanation: 'Desonesto e insustentável! Sistemas "escondidos" colapsam quando descobertos. Transparência e educação são fundamentais. Você está minando a confiança organizacional. -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'CONTROL - Documentação Eterna',
      image: '📚',
      atmosphere: 'dark',
      text: 'Você cria documentação completa: SOPs (Standard Operating Procedures), treinamentos gravados, planos de controle laminados nas paredes. O conhecimento não pode morrer com sua partida. O legado deve ser imortal.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Um dia eu partirei para outras missões. Mas o sistema que criei permanecerá. Documentação é imortalidade. Processos bem documentados sobrevivem a seus criadores."',
      mood: 'O conhecimento documentado é a verdadeira herança de um mestre.'
    },
    {
      type: 'narrative',
      title: 'CONTROL - Resultados Finais',
      image: '🏆',
      atmosphere: 'dark',
      text: 'Mês 6 - Auditoria final: Tempo médio de entrega = 8.7 dias (META: 9 dias - SUPERADA!). Processo estável (Cpk = 1.45). Cliente satisfação: 87% → 96%. Receita recuperada: R$ 2.1M. Custo projeto: R$ 180K. ROI realizado: 1067%.',
      speaker: 'CEO',
      dialogue: '"Dr. Victor Lou, você não apenas salvou este projeto. Você transformou esta empresa. De caos a excelência operacional. Você é uma lenda."',
      mood: 'Números não mentem. Missão cumprida com maestria.'
    },
    {
      type: 'epilogue',
      title: 'EPÍLOGO - O Legado do Dr. Victor Lou',
      image: '🌃',
      atmosphere: 'dark',
      text: 'Seis meses depois, você está no topo do QG Sigma novamente. A sirene toca. Outra empresa em crise. Mas você olha para trás e vê a fábrica que salvou: luzes acesas, processos fluindo, pessoas sorrindo. O caos foi domado.',
      speaker: 'Dr. Victor Lou (monólogo)',
      dialogue: '"Todo projeto é uma jornada de DMAIC. Define o problema. Measure a realidade. Analyze a causa. Improve o processo. Control o resultado. É simples, mas não é fácil. E é nisso que reside meu propósito: trazer ordem ao caos, luz à escuridão, excelência ao medíocre. Enquanto houver processos falhos, eu estarei nas sombras. Porque eu sou o Dr. Victor Lou. E esta é minha jornada."',
      mood: 'A cidade dorme. Mas o guardião permanece vigilante. Para sempre.',
      finalStats: true
    }
  ];

  // Cenas da fase ANALYZE
  const analyzeScenes = [
    {
      type: 'narrative',
      title: 'ANALYZE - Entrando na Mente do Problema',
      image: '🧠',
      atmosphere: 'dark',
      text: 'Em seu laboratório às 4h da manhã, você espalha os dados em telas holográficas. Gráficos flutuam no ar. É hora de conectar os pontos, encontrar correlações, desvendar causas raízes.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Todo problema tem uma origem. Na fase ANALYZE, eu não aceito sintomas. Eu caço a doença. A raiz deve ser extirpada."',
      mood: 'Silêncio. Concentração absoluta. A mente do Dr. Victor Lou é uma máquina analítica.'
    },
    {
      type: 'question',
      title: 'ANALYZE - Ferramenta de Causa Raiz',
      question: 'Para identificar TODAS as causas potenciais de atraso no processo, qual ferramenta usar primeiro?',
      context: 'A fase ANALYZE exige estrutura. Um Dr. Victor Lou não atira no escuro.',
      options: [
        { 
          id: 'a', 
          text: 'Diagrama de Ishikawa (Espinha de Peixe)', 
          correct: true,
          explanation: 'Excelente escolha! O Ishikawa organiza causas em categorias (6Ms: Método, Máquina, Material, Mão-de-obra, Medição, Meio Ambiente). É perfeito para brainstorming estruturado de causas potenciais. Você está pensando como um verdadeiro Dr. Lou. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'FMEA imediatamente', 
          correct: false,
          explanation: 'FMEA é poderoso, mas prematuro. Primeiro você precisa identificar as causas (Ishikawa/5 Porquês), DEPOIS avalia riscos (FMEA). Sequência importa. -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Implementar soluções óbvias', 
          correct: false,
          explanation: 'ERRO CRÍTICO! "Soluções óbvias" são frequentemente sintomas, não causas raízes. Você está pulando ANALYZE direto para IMPROVE. Um Dr. Victor Lou JAMAIS faz isso. A metodologia existe por uma razão. -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Culpar os fornecedores', 
          correct: false,
          explanation: 'Culpar é fácil. Analisar é difícil. Talvez o problema seja seu processo de compras, não os fornecedores. Análise superficial mata projetos. Cave fundo! -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'ANALYZE - Os 5 Porquês',
      image: '❓',
      atmosphere: 'dark',
      text: 'Você aplica os 5 Porquês ao maior vilão: Falta de Peças. Por quê? Atraso fornecedor. Por quê? Pedidos em cima da hora. Por quê? Falta de previsão. Por quê? Sistema MRP desatualizado. Por quê? Dados de inventário incorretos.',
      speaker: 'Green Belt',
      dialogue: '"Dr. Lou, encontramos! A raiz não era o fornecedor... era nosso próprio sistema de inventário! Estávamos brigando com o inimigo errado."',
      mood: 'A revelação é como um raio na escuridão. A verdade dói, mas liberta.'
    },
    {
      type: 'question',
      title: 'ANALYZE - Gráfico de Controle',
      question: 'Observe o gráfico de controle dos últimos 10 dias. O que ele revela sobre o processo?',
      context: 'Gráficos de controle mostram se o processo está sob controle estatístico. Pontos fora dos limites são sinais de alerta.',
      chart: {
        type: 'control_chart',
        data: controlChartData
      },
      options: [
        { 
          id: 'a', 
          text: 'Processo FORA de controle - 2 pontos acima do UCL', 
          correct: true,
          explanation: 'Diagnóstico correto, Dr. Lou! Os dias 6 e 9 apresentam valores acima do Upper Control Limit (19.2 e 20.5 dias). Isso indica causas especiais, não apenas variação aleatória. Processo instável. Investigação necessária! +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Processo sob controle - dentro dos limites', 
          correct: false,
          explanation: 'Negativo! Você não observou os dias 6 e 9? Pontos claramente acima do UCL (18 dias). Um processo com causas especiais NÃO está sob controle. Atenção aos detalhes, Dr. Lou! -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Processo perfeito - não precisa melhoria', 
          correct: false,
          explanation: 'Perigosamente errado! O processo tem pontos fora de controle E alta variação. Está longe de perfeito. Complacência é o primeiro passo para o fracasso. -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Gráfico inválido - refazer medições', 
          correct: false,
          explanation: 'O gráfico é válido e está mostrando exatamente o que precisa: causas especiais. Refazer medições é fugir da verdade. Encare os dados! -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'ANALYZE - Correlação Revelada',
      image: '🔗',
      atmosphere: 'dark',
      text: 'Análise de regressão: correlação forte (R² = 0.87) entre "Acurácia do Inventário" e "Tempo de Entrega". Quando inventário está incorreto, atrasos disparam. A conexão é cristalina.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Sempre soube que todo problema tem uma causa raiz. Os dados confirmam: nosso inventário é o epicentro do caos. Corrija isso, e o resto se alinha."',
      mood: 'A neblina se dissipa. A causa raiz está exposta, vulnerável.'
    },
    {
      type: 'question',
      title: 'ANALYZE - Teste de Hipóteses',
      question: 'Você quer validar estatisticamente se o tempo de entrega é DIFERENTE entre dois turnos. Qual teste usar?',
      context: 'Testes estatísticos transformam suspeitas em certezas. Um Dr. Victor Lou prova, não assume.',
      options: [
        { 
          id: 'a', 
          text: 'Teste t de Student (comparar 2 médias)', 
          correct: true,
          explanation: 'Perfeito! O Teste t compara médias de dois grupos independentes (Turno 1 vs Turno 2). Se p-value < 0.05, há diferença significativa. Você domina estatística inferencial como domina a noite. +20 pontos!'
        },
        { 
          id: 'b', 
          text: 'Teste Qui-quadrado (dados categóricos)', 
          correct: false,
          explanation: 'Qui-quadrado é para dados categóricos (frequências), não para comparar médias de tempos. Escolha a ferramenta certa para o trabalho certo. -15% saúde do projeto.'
        },
        { 
          id: 'c', 
          text: 'Apenas comparar visualmente', 
          correct: false,
          explanation: 'Análise visual não substitui rigor estatístico. Você pode ver uma diferença que é apenas variação aleatória. Um Dr. Victor Lou exige significância estatística. -15% saúde do projeto.'
        },
        { 
          id: 'd', 
          text: 'Não fazer teste - assumir que são iguais', 
          correct: false,
          explanation: 'Assumir sem testar é amadorismo. Você pode estar ignorando uma causa raiz importante. Hipóteses devem ser testadas, não assumidas. -15% saúde do projeto.'
        }
      ]
    },
    {
      type: 'narrative',
      title: 'ANALYZE - O Quebra-Cabeça Resolvido',
      image: '🧩',
      atmosphere: 'dark',
      text: 'Todas as peças se encaixam. Causas raízes identificadas: (1) Sistema de inventário desatualizado, (2) Processo de separação manual, (3) Falta de comunicação com fornecedores. Tudo validado estatisticamente.',
      speaker: 'CEO (holograma)',
      dialogue: '"Dr. Victor Lou, sua análise é irrefutável. Os dados não mentem. Vocês têm autorização para implementar as melhorias. Não nos decepcione."',
      mood: 'A batalha intelectual foi vencida. Agora vem a batalha da implementação.'
    },
    {
      type: 'transition',
      title: 'ANALYZE - Causas Raízes Expostas',
      image: '✅',
      atmosphere: 'dark',
      text: 'Fase ANALYZE concluída. O inimigo foi identificado, dissecado, compreendido. Você sabe EXATAMENTE onde e como atacar. A fase IMPROVE aguarda... onde teoria se torna ação.',
      speaker: 'Dr. Victor Lou',
      dialogue: '"Análise sem ação é paralisia. IMPROVE é onde eu transformo conhecimento em resultados. O verdadeiro poder de um Dr. Victor Lou."',
      mood: 'A vingança está próxima. O processo será reformado.'
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
      // Avançar para próxima fase
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

  // Componentes de gráficos
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
          <span>Frequência</span>
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
      <h4 className="text-sm font-semibold text-gray-300 mb-3">Gráfico de Controle - Tempo de Entrega (dias)</h4>
      <div className="relative h-48 flex items-end gap-2">
        {data.map((point, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center relative h-full justify-end">
            <div className="absolute top-0 w-full flex flex-col items-center">
              {idx === 0 && (
                <>
                  <div className="text-red-400 text-xs" style={{ position: 'absolute', top: `${100 - (point.ucl / 22) * 100}%` }}>UCL</div>
                  <div className="text-blue-400 text-xs" style={{ position: 'absolute', top: `${100 - (point.mean / 22) * 100}%` }}>Média</div>
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
      <h4 className="text-sm font-semibold text-gray-300 mb-3">Análise Financeira (R$ mil)</h4>
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

  // Componente de abertura do herói
  const OpeningScene = ({ scene }) => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white p-6">
          <h2 className="text-3xl font-bold text-center">{scene.title}</h2>
        </div>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="text-9xl mb-6">{scene.image}</div>
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
              Quando processos falham e o caos reina, apenas um homem pode restaurar a ordem através de dados, análise e metodologia DMAIC.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <button
          onClick={nextScene}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-12 rounded-lg flex items-center gap-2 transition-colors shadow-lg text-lg"
        >
          Iniciar Missão
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );

  // Componente de introdução
  const IntroScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🦇</div>
          <h1 className="text-4xl font-bold text-white mb-2">JORNADA DMAIC</h1>
          <p className="text-lg text-gray-400">As Missões do Dr. Victor Lou</p>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-3">A Lenda</h2>
          <p className="text-gray-300 mb-4">
            Nas sombras da indústria, quando processos falham e empresas agonizam, surge um herói. 
            Dr. Victor Lou, Master Black Belt, guardião da metodologia DMAIC, usa dados como armas e análise como escudo.
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <Shield className="text-blue-400" size={20} />
              <span>Estratégia DMAIC</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Activity className="text-green-400" size={20} />
              <span>Análise Estatística</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="text-yellow-400" size={20} />
              <span>Decisões Rápidas</span>
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
              <strong className="text-red-400">Atenção:</strong> Decisões erradas enfraquecem o projeto. Se a saúde chegar a zero, a missão falha e a empresa sucumbe ao caos.
            </p>
          </div>
        </div>

        <button
          onClick={startGame}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
        >
          <Play size={24} />
          Iniciar Missão
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

  // Componente de questão
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

  // Componente de epílogo
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
              <h3 className="text-xl font-semibold text-green-300 mb-4 text-center">🏆 Estatísticas Finais da Missão 🏆</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded p-3 border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1">Tempo de Entrega</p>
                  <p className="text-2xl font-bold text-green-400">8.7 dias</p>
                  <p className="text-xs text-gray-500">Meta: 9 dias ✓</p>
                </div>
                <div className="bg-gray-900 rounded p-3 border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1">ROI Realizado</p>
                  <p className="text-2xl font-bold text-blue-400">1067%</p>
                  <p className="text-xs text-gray-500">R$ 2.1M recuperado</p>
                </div>
                <div className="bg-gray-900 rounded p-3 border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1">Satisfação Cliente</p>
                  <p className="text-2xl font-bold text-purple-400">96%</p>
                  <p className="text-xs text-gray-500">Era 87%</p>
                </div>
                <div className="bg-gray-900 rounded p-3 border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1">Estabilidade (Cpk)</p>
                  <p className="text-2xl font-bold text-yellow-400">1.45</p>
                  <p className="text-xs text-gray-500">Processo capaz ✓</p>
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

  // Componente de transição
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
          Próxima Fase
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
          <h3 className="text-sm font-semibold text-gray-400">Saúde do Projeto</h3>
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
          <h3 className="text-sm font-semibold text-gray-400">Pontuação</h3>
          <p className="text-2xl font-bold text-blue-400">{score}</p>
        </div>
      </div>
      
      <div className="text-xs text-gray-500">
        Fase: {phaseNames[currentPhase]} ({currentScene + 1}/{allScenes[currentPhase].length})
      </div>
    </div>
  );

  // Tela de conclusão
  const PhaseCompleteScreen = () => {
    const correctDecisions = decisions.filter(d => d.correct).length;
    const totalDecisions = decisions.length;
    const accuracy = Math.round((correctDecisions / totalDecisions) * 100);

    let performanceRank = 'Aprendiz';
    let rankColor = 'gray';
    let rankMessage = 'Você completou a missão, mas há muito a aprender.';

    if (accuracy >= 90 && projectHealth >= 85) {
      performanceRank = 'Master Black Belt Elite';
      rankColor = 'purple';
      rankMessage = 'Desempenho excepcional! Você alcançou o nível do Dr. Victor Lou.';
    } else if (accuracy >= 75 && projectHealth >= 70) {
      performanceRank = 'Master Black Belt';
      rankColor = 'blue';
      rankMessage = 'Excelente trabalho! Você domina a metodologia DMAIC.';
    } else if (accuracy >= 60 && projectHealth >= 50) {
      performanceRank = 'Black Belt';
      rankColor = 'green';
      rankMessage = 'Bom desempenho. Continue aprimorando suas habilidades.';
    } else if (accuracy >= 40) {
      performanceRank = 'Green Belt';
      rankColor = 'yellow';
      rankMessage = 'Você tem potencial, mas precisa de mais prática.';
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-4">
        <div className="max-w-3xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">👑</div>
            <h1 className="text-4xl font-bold text-white mb-2">JORNADA DMAIC COMPLETA!</h1>
            <p className="text-lg text-gray-400">Dr. Victor Lou prevaleceu</p>
          </div>
          
          <div className="bg-purple-950 border-2 border-purple-600 rounded-lg p-6 mb-6 text-center">
            <p className="text-sm text-gray-400 mb-2">Rank Alcançado</p>
            <p className="text-3xl font-bold text-purple-400 mb-2">{performanceRank}</p>
            <p className="text-sm text-gray-300">{rankMessage}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-950 rounded-lg p-4 text-center border border-blue-700">
              <p className="text-sm text-gray-400 mb-1">Pontuação</p>
              <p className="text-3xl font-bold text-blue-400">{score}</p>
            </div>
            <div className="bg-green-950 rounded-lg p-4 text-center border border-green-700">
              <p className="text-sm text-gray-400 mb-1">Saúde Final</p>
              <p className="text-3xl font-bold text-green-400">{projectHealth}%</p>
            </div>
            <div className="bg-purple-950 rounded-lg p-4 text-center border border-purple-700">
              <p className="text-sm text-gray-400 mb-1">Precisão</p>
              <p className="text-3xl font-bold text-purple-400">{accuracy}%</p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-700">
            <h3 className="font-semibold text-white mb-4 text-center">🎯 Todas as Fases Concluídas</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-green-400 bg-gray-800 p-3 rounded border border-gray-700">
                <CheckCircle size={24} />
                <div>
                  <p className="font-semibold">DEFINE</p>
                  <p className="text-xs text-gray-400">Missão estabelecida, Charter aprovado</p>
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
                  <p className="text-xs text-gray-400">Causas raízes identificadas e validadas</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-green-400 bg-gray-800 p-3 rounded border border-gray-700">
                <CheckCircle size={24} />
                <div>
                  <p className="font-semibold">IMPROVE</p>
                  <p className="text-xs text-gray-400">Soluções implementadas, resultados alcançados</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-green-400 bg-gray-800 p-3 rounded border border-gray-700">
                <CheckCircle size={24} />
                <div>
                  <p className="font-semibold">CONTROL</p>
                  <p className="text-xs text-gray-400">Sustentação garantida, legado estabelecido</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-950 to-indigo-950 rounded-lg p-6 mb-6 border border-purple-700">
            <h3 className="font-semibold text-purple-300 mb-3 text-center">📊 Impacto da Missão</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="text-center">
                <p className="text-gray-400">Tempo de Entrega</p>
                <p className="text-xl font-bold text-white">15 → 8.7 dias</p>
                <p className="text-xs text-green-400">↓ 42% de redução</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">ROI Realizado</p>
                <p className="text-xl font-bold text-white">1067%</p>
                <p className="text-xs text-green-400">R$ 2.1M economizados</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">Satisfação Cliente</p>
                <p className="text-xl font-bold text-white">87% → 96%</p>
                <p className="text-xs text-green-400">+9 pontos</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">Processo Estável</p>
                <p className="text-xl font-bold text-white">Cpk 1.45</p>
                <p className="text-xs text-green-400">Capaz e estável</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-700">
            <h3 className="font-semibold text-white mb-3">Suas Decisões:</h3>
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
              Nova Missão
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
          <div className="text-6xl mb-4">💀</div>
          <h1 className="text-3xl font-bold text-white mb-2">Missão Falhou</h1>
          <p className="text-lg text-gray-400">O caos venceu desta vez</p>
        </div>
        
        <div className="bg-red-950 rounded-lg p-6 mb-6 border border-red-700">
          <p className="text-gray-300 mb-4">
            Suas decisões levaram o projeto ao colapso. A empresa sucumbiu ao caos dos processos. 
            Recursos foram desperdiçados, prazos não foram cumpridos, e a confiança foi perdida.
          </p>
          <p className="text-gray-300 font-semibold">
            Até o Dr. Victor Lou pode falhar. Mas um verdadeiro herói se levanta novamente.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 mb-6 border border-gray-700 text-center">
          <p className="text-sm text-gray-400 mb-1">Pontuação Final</p>
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

  // Renderização principal
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