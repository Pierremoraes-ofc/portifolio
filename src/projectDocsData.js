export const PROJECT_DOCS = {
  smart_office_hybrid_4: {
    "name": "Smart Office Hybrid 4.0",
    "code": "smart_office_hybrid_4",
    "repo": "https://github.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0",
    "category": {
      "pt": "Projeto • Data, BI & AI",
      "en": "Project • Data, BI & AI"
    },
    "lead": {
      "pt": "Dashboard universal com IA que trabalha sobre dados empresariais existentes. O sistema permite definir métricas, agrupamentos, agregações, JOINs e modelos visuais para transformar tabelas SQL em gráficos, KPIs e contexto analítico enviado à Groq AI. Também inclui instalação guiada, autenticação administrativa, preferências, internacionalização e ferramentas de criação/edição do dashboard.",
      "en": "Universal AI-powered dashboard built on top of existing business data. It lets administrators define metrics, groups, aggregations, JOINs and visual models that transform SQL tables into charts, KPIs and analytical context sent to Groq AI. It also includes guided installation, admin authentication, preferences, localization and dashboard authoring tools."
    },
    "facts": [
      [
        "Backend",
        "PHP + PDO"
      ],
      [
        "Database",
        "MySQL"
      ],
      [
        "Current charts",
        "ApexCharts"
      ],
      [
        "UI",
        "AdminLTE + Bootstrap"
      ],
      [
        "AI",
        "Groq Chat Completions"
      ],
      [
        "Languages",
        "PT-BR / EN-US / ES-ES"
      ],
      [
        "License",
        "CC BY-NC 4.0"
      ]
    ],
    "sections": [
      {
        "id": "overview",
        "title": {
          "pt": "Visão geral",
          "en": "Overview"
        },
        "text": {
          "pt": "A proposta do Smart Office Hybrid 4.0 é transformar uma base SQL já existente em uma camada de inteligência e visualização sem obrigar o projeto original a migrar seus dados. O administrador descreve o que deseja medir, de qual tabela os dados vêm, como devem ser agrupados e agregados e como o resultado deve aparecer. O dashboard então executa a consulta, formata os dados e também disponibiliza esse contexto para a IA.",
          "en": "Smart Office Hybrid 4.0 turns an existing SQL database into a visualization and intelligence layer without forcing the source project to migrate its data. Administrators describe what to measure, where data comes from, how it should be grouped/aggregated and how the result should be presented. The dashboard executes the query, formats the result and exposes that context to the AI layer."
        },
        "cards": [
          [
            "Dashboard universal",
            "Pode ser acoplado a aplicações existentes que já possuam tabelas e dados de negócio."
          ],
          [
            "Métricas configuráveis",
            "COUNT, SUM, AVG, MAX e MIN sobre tabelas e colunas escolhidas no painel."
          ],
          [
            "Modelos visuais",
            "KPI-1, KPI-2, barras, linha, donut e área com ordem, tamanho, ícones e cores."
          ],
          [
            "JOINs",
            "INNER, LEFT e RIGHT JOIN podem ser vinculados a uma métrica para enriquecer a consulta."
          ],
          [
            "IA contextual",
            "O próprio estado dos gráficos do dashboard vira contexto para relatórios, riscos, tendências e insights."
          ],
          [
            "Administração",
            "Login, CSRF, preferências, criação/edição de métricas, modelos, joins e configuração Groq."
          ]
        ],
        "note": {
          "pt": "O README cita Chart.js na lista de tecnologias, porém o dashboard atual do repositório instancia ApexCharts em admin/dashboard.php. A documentação do portfólio descreve a implementação atual do código e registra essa diferença.",
          "en": "The README lists Chart.js, while current admin/dashboard.php instantiates ApexCharts. This portfolio documentation follows the current implementation and records that discrepancy."
        }
      },
      {
        "id": "visual-demo",
        "title": {
          "pt": "Demonstração visual",
          "en": "Visual demo"
        },
        "text": {
          "pt": "O repositório possui onze capturas originais usadas no próprio README. Elas foram incorporadas à documentação para que seja possível visualizar o sistema sem sair do portfólio. Clique em uma imagem para abrir a versão completa.",
          "en": "The repository contains eleven original screenshots used by its README. They are embedded here so the system can be explored without leaving the portfolio. Click an image to open the full version."
        },
        "gallery": [
          [
            "Screenshot 01",
            "https://raw.githubusercontent.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0/main/images/Screenshot_1.png"
          ],
          [
            "Screenshot 02",
            "https://raw.githubusercontent.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0/main/images/Screenshot_2.png"
          ],
          [
            "Screenshot 03",
            "https://raw.githubusercontent.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0/main/images/Screenshot_3.png"
          ],
          [
            "Screenshot 04",
            "https://raw.githubusercontent.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0/main/images/Screenshot_4.png"
          ],
          [
            "Screenshot 05",
            "https://raw.githubusercontent.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0/main/images/Screenshot_5.png"
          ],
          [
            "Screenshot 06",
            "https://raw.githubusercontent.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0/main/images/Screenshot_6.png"
          ],
          [
            "Screenshot 07",
            "https://raw.githubusercontent.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0/main/images/Screenshot_7.png"
          ],
          [
            "Screenshot 08",
            "https://raw.githubusercontent.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0/main/images/Screenshot_8.png"
          ],
          [
            "Screenshot 09",
            "https://raw.githubusercontent.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0/main/images/Screenshot_9.png"
          ],
          [
            "Instalador 01",
            "https://raw.githubusercontent.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0/main/images/install.png"
          ],
          [
            "Instalador 02",
            "https://raw.githubusercontent.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0/main/images/install2.png"
          ]
        ]
      },
      {
        "id": "architecture",
        "title": {
          "pt": "Arquitetura do projeto",
          "en": "Project architecture"
        },
        "text": {
          "pt": "A aplicação separa entrada pública, área administrativa, helpers/API, internacionalização e assets. api/functions.php concentra autenticação, preferências, KPI, construção das consultas de gráficos, CRUD de métricas/joins/modelos e integração de IA.",
          "en": "The application separates public entry points, administration, API/helpers, localization and assets. api/functions.php centralizes authentication, preferences, KPIs, chart-query construction, metrics/joins/models CRUD and AI integration."
        },
        "code": "SmartOfficeHybrid/\n├── .htaccess\n├── home.php\n├── index.php\n├── install.php\n├── README.md\n│\n├── api/\n│   ├── database.php\n│   ├── dashboard_ia.php\n│   ├── functions.php\n│   ├── language.php\n│   └── list_columns.php\n│\n├── admin/\n│   ├── dashboard.php\n│   ├── index.php\n│   ├── login.php\n│   ├── login_redirect.php\n│   ├── logout.php\n│   ├── novagrafico.php\n│   ├── preferences.php\n│   └── includes/\n│\n├── images/\n└── AdminLTE/"
      },
      {
        "id": "installation",
        "title": {
          "pt": "Instalação e bootstrap",
          "en": "Installation & bootstrap"
        },
        "text": {
          "pt": "O install.php cria a estrutura principal do Smart Office, registra o primeiro administrador e gera api/database.php com a conexão PDO. O README orienta executar a instalação em Apache + MySQL por WAMP/XAMPP ou ambiente equivalente.",
          "en": "install.php creates the main Smart Office schema, registers the initial administrator and generates api/database.php with PDO credentials. The README documents Apache + MySQL through WAMP/XAMPP or equivalent."
        },
        "steps": {
          "pt": [
            "Coloque o projeto na raiz do servidor web, por exemplo c:/wamp64/www/SmartOfficeHybrid.",
            "Inicie Apache e MySQL.",
            "Abra /SmartOfficeHybrid/install.php.",
            "Informe host, usuário, senha e banco MySQL.",
            "Informe usuário e senha do primeiro administrador.",
            "O instalador cria as tabelas Smart Office necessárias e gera api/database.php.",
            "Abra Admin → Preferences e configure API key e modelo da Groq.",
            "Escolha idioma e se a home pública deve aparecer antes do login.",
            "Acesse /admin e comece a criar métricas, JOINs e modelos de exibição."
          ],
          "en": [
            "Place the project under the web server root.",
            "Start Apache and MySQL.",
            "Open /SmartOfficeHybrid/install.php.",
            "Provide MySQL host, user, password and database.",
            "Create the initial administrator credentials.",
            "The installer creates Smart Office tables and generates api/database.php.",
            "Open Admin → Preferences and configure Groq API key/model.",
            "Choose language and whether the public home is shown before login.",
            "Open /admin and start creating metrics, JOINs and display models."
          ]
        },
        "note": {
          "pt": "O badge do README indica PHP 8.0+, enquanto o texto antigo de instalação ainda menciona PHP 7.2+. Para uma instalação nova, prefira PHP 8.0+.",
          "en": "The README badge says PHP 8.0+, while older installation text still mentions PHP 7.2+. Prefer PHP 8.0+ for new installations."
        }
      },
      {
        "id": "database-model",
        "title": {
          "pt": "Modelo de dados interno",
          "en": "Internal data model"
        },
        "text": {
          "pt": "O Smart Office não copia os dados do negócio para o dashboard. Ele armazena configurações que apontam para as tabelas reais e descrevem como transformá-las em métricas e visualizações.",
          "en": "Smart Office does not copy business data into the dashboard. It stores configuration pointing to real tables and describing how they become metrics and visualizations."
        },
        "table": {
          "headers": [
            "Tabela",
            "Responsabilidade",
            "Campos principais"
          ],
          "rows": [
            [
              "dso_grafico",
              "Métrica/base da consulta",
              "nome, tabela, coluna_grupo, coluna_valor, agregacao, filtro_where"
            ],
            [
              "dso_grafico_join",
              "JOINs vinculados à métrica",
              "grafico_id, tabela, alias, tipo_join, on_expr"
            ],
            [
              "dso_model_grafico",
              "Como a métrica aparece no dashboard",
              "grafico_id, nome, icone, info, tipo, exibicao, ordem, cores"
            ],
            [
              "dso_apikey_ia",
              "Provider de IA",
              "apikey, model, reg_date"
            ],
            [
              "dso_settings",
              "Preferências do sistema",
              "public_home, language"
            ],
            [
              "dso_users_admin",
              "Autenticação administrativa",
              "username, password_hash, email"
            ]
          ]
        }
      },
      {
        "id": "metric-builder",
        "title": {
          "pt": "Como uma métrica é construída",
          "en": "How a metric is built"
        },
        "text": {
          "pt": "A primeira etapa no menu Criar Novo Gráfico é definir a métrica. O formulário lê o schema atual, lista tabelas e carrega suas colunas. O administrador escolhe colunas de agrupamento, uma coluna de valor, a agregação e opcionalmente um filtro WHERE.",
          "en": "The first step in Create New Graph is defining a metric. The form reads the current schema, lists tables and loads their columns. The administrator chooses grouping columns, a value column, aggregation and optionally a WHERE filter."
        },
        "cards": [
          [
            "Nome",
            "Ex.: Clientes por status, Faturamento mensal, Ticket médio por canal."
          ],
          [
            "Tabela principal",
            "Tabela real do banco que servirá de FROM."
          ],
          [
            "Colunas de grupo",
            "Uma ou mais colunas que viram GROUP BY e labels."
          ],
          [
            "Coluna de valor",
            "Coluna numérica/valor utilizada por SUM, AVG, MAX ou MIN; COUNT pode usar *."
          ],
          [
            "Agregação",
            "COUNT, SUM, AVG, MAX ou MIN."
          ],
          [
            "Filtro WHERE",
            "Expressão opcional, por exemplo status = 'pago'."
          ]
        ],
        "code": "SELECT <colunas_grupo>, <AGG>(<coluna_valor>) AS v\nFROM <tabela_principal> AS t\n[JOIN ...]\n[WHERE <filtro_where>]\n[GROUP BY <colunas_grupo>]"
      },
      {
        "id": "graph-example-count",
        "title": {
          "pt": "Exemplo 1 — gráfico de quantidade por status",
          "en": "Example 1 — count by status"
        },
        "text": {
          "pt": "Suponha uma tabela pedidos com colunas id, status, total e criado_em. Para descobrir quantos pedidos existem em cada status, crie uma métrica COUNT agrupada por status e depois associe um modelo DONUT ou BARRA.",
          "en": "Assume a pedidos table with id, status, total and criado_em. To count orders by status, create a COUNT metric grouped by status and then attach a DONUT or BAR display model."
        },
        "table": {
          "headers": [
            "Campo no painel",
            "Valor do exemplo"
          ],
          "rows": [
            [
              "Nome da métrica",
              "Pedidos por status"
            ],
            [
              "Tabela principal",
              "pedidos"
            ],
            [
              "Colunas de grupo",
              "status"
            ],
            [
              "Coluna de valor",
              "deixe vazia para COUNT(*)"
            ],
            [
              "Agregação",
              "COUNT"
            ],
            [
              "Filtro WHERE",
              "opcional: criado_em >= '2026-01-01'"
            ]
          ]
        },
        "code": "-- Consulta equivalente gerada pela configuração\nSELECT status, COUNT(*) AS v\nFROM `pedidos` AS t\nWHERE (criado_em >= '2026-01-01')\nGROUP BY status;\n\n-- Resultado conceitual\n-- Pendente  -> 42\n-- Pago      -> 180\n-- Cancelado -> 17"
      },
      {
        "id": "graph-example-sum",
        "title": {
          "pt": "Exemplo 2 — faturamento por canal",
          "en": "Example 2 — revenue by channel"
        },
        "text": {
          "pt": "Para visualizar receita por canal, utilize SUM sobre uma coluna monetária. A mesma métrica pode alimentar um gráfico de barras, linha ou área simplesmente criando modelos diferentes apontando para o mesmo grafico_id.",
          "en": "To visualize revenue by channel, use SUM over a monetary column. The same metric can feed bar, line or area charts by creating different display models pointing at the same grafico_id."
        },
        "table": {
          "headers": [
            "Campo no painel",
            "Valor do exemplo"
          ],
          "rows": [
            [
              "Nome da métrica",
              "Faturamento por canal"
            ],
            [
              "Tabela principal",
              "vendas"
            ],
            [
              "Colunas de grupo",
              "canal"
            ],
            [
              "Coluna de valor",
              "valor_total"
            ],
            [
              "Agregação",
              "SUM"
            ],
            [
              "Filtro WHERE",
              "status = 'pago'"
            ]
          ]
        },
        "code": "SELECT canal, SUM(valor_total) AS v\nFROM `vendas` AS t\nWHERE (status = 'pago')\nGROUP BY canal;"
      },
      {
        "id": "graph-example-average",
        "title": {
          "pt": "Exemplo 3 — ticket médio",
          "en": "Example 3 — average ticket"
        },
        "text": {
          "pt": "AVG é útil para indicadores de média. Se você não selecionar uma coluna de agrupamento, o sistema retorna uma única série/label com o nome da própria métrica, ideal para KPI.",
          "en": "AVG is useful for average indicators. Without a grouping column the system returns a single series/label using the metric name, which is ideal for a KPI."
        },
        "table": {
          "headers": [
            "Campo no painel",
            "Valor do exemplo"
          ],
          "rows": [
            [
              "Nome da métrica",
              "Ticket médio"
            ],
            [
              "Tabela principal",
              "vendas"
            ],
            [
              "Colunas de grupo",
              "nenhuma"
            ],
            [
              "Coluna de valor",
              "valor_total"
            ],
            [
              "Agregação",
              "AVG"
            ],
            [
              "Filtro WHERE",
              "status = 'pago'"
            ]
          ]
        },
        "code": "SELECT AVG(valor_total) AS v\nFROM `vendas` AS t\nWHERE (status = 'pago');"
      },
      {
        "id": "joins",
        "title": {
          "pt": "Construindo métricas com JOIN",
          "en": "Building metrics with JOIN"
        },
        "text": {
          "pt": "Depois de criar a métrica, a seção Definir JOIN permite adicionar tabelas relacionadas. Cada JOIN pertence a um grafico_id e armazena tabela, alias, tipo e expressão ON. O código atual aceita INNER, LEFT e RIGHT.",
          "en": "After creating a metric, Define JOIN allows related tables to be attached. Each JOIN belongs to a grafico_id and stores table, alias, type and ON expression. Current code supports INNER, LEFT and RIGHT."
        },
        "table": {
          "headers": [
            "Campo",
            "Exemplo"
          ],
          "rows": [
            [
              "Métrica",
              "Faturamento por vendedor"
            ],
            [
              "Tabela a juntar",
              "usuarios"
            ],
            [
              "Alias",
              "u"
            ],
            [
              "Tipo JOIN",
              "LEFT"
            ],
            [
              "Condição ON",
              "t.vendedor_id = u.id"
            ]
          ]
        },
        "code": "SELECT ...\nFROM `vendas` AS t\nLEFT JOIN `usuarios` AS u ON t.vendedor_id = u.id\n..."
      },
      {
        "id": "display-models",
        "title": {
          "pt": "Modelos de exibição",
          "en": "Display models"
        },
        "text": {
          "pt": "A métrica define os dados; o modelo define a apresentação. Isso permite reaproveitar a mesma consulta em mais de uma visualização. O dashboard atual suporta seis tipos.",
          "en": "The metric defines data; the model defines presentation. This allows the same query to be reused in multiple visualizations. The current dashboard supports six types."
        },
        "table": {
          "headers": [
            "Tipo",
            "Uso recomendado",
            "Renderização"
          ],
          "rows": [
            [
              "KPI-1",
              "Indicador compacto com info-box",
              "Número agregado + ícone/estado"
            ],
            [
              "KPI-2",
              "Indicador clean com número em destaque",
              "Card numérico"
            ],
            [
              "BARRA",
              "Comparar categorias",
              "ApexCharts bar"
            ],
            [
              "LINHA",
              "Evolução/sequência",
              "ApexCharts line"
            ],
            [
              "DONUT",
              "Distribuição proporcional",
              "ApexCharts donut"
            ],
            [
              "AREA",
              "Evolução com preenchimento",
              "ApexCharts area"
            ]
          ]
        },
        "cards": [
          [
            "Exibição",
            "CARD, FULL, GRANDE, MEDIO, PEQUENO, MINI e MICRO controlam o espaço ocupado."
          ],
          [
            "Info",
            "INFO, ALERT, SUCCESS e DANGER adicionam significado visual ao modelo."
          ],
          [
            "Ícone",
            "Aceita classes como bi bi-graph-up."
          ],
          [
            "Cores",
            "cor_principal e cor_secundaria alimentam a configuração visual."
          ],
          [
            "Ordem",
            "ordem define a sequência de renderização no dashboard."
          ],
          [
            "Reuso",
            "Vários modelos podem apontar para a mesma métrica."
          ]
        ]
      },
      {
        "id": "graph-example-model",
        "title": {
          "pt": "Exemplo 4 — transformar a métrica em gráfico",
          "en": "Example 4 — turn metric into a chart"
        },
        "text": {
          "pt": "Depois de salvar Faturamento por canal, crie um modelo de exibição. O dashboard carrega dso_model_grafico junto com dso_grafico, executa a consulta e entrega labels/series ao ApexCharts.",
          "en": "After saving Revenue by channel, create a display model. The dashboard loads dso_model_grafico together with dso_grafico, executes the query and feeds labels/series to ApexCharts."
        },
        "table": {
          "headers": [
            "Campo do modelo",
            "Exemplo"
          ],
          "rows": [
            [
              "Métrica",
              "Faturamento por canal"
            ],
            [
              "Nome do modelo",
              "Receita por canal"
            ],
            [
              "Descrição",
              "Distribuição da receita paga por canal"
            ],
            [
              "Ícone",
              "bi bi-bar-chart-fill"
            ],
            [
              "Info",
              "SUCCESS"
            ],
            [
              "Tipo",
              "BARRA"
            ],
            [
              "Exibição",
              "GRANDE"
            ],
            [
              "Ordem",
              "1"
            ],
            [
              "Cor principal",
              "#2f80ed"
            ],
            [
              "Cor secundária",
              "#56ccf2"
            ]
          ]
        },
        "code": "// Estrutura que o dashboard prepara para o frontend\n{\n  id: 'chart_12',\n  titulo: 'Receita por canal',\n  tipo: 'BARRA',\n  labels: ['Loja', 'Site', 'Marketplace'],\n  series: [{\n    name: 'Faturamento por canal',\n    data: [128500, 98400, 41700]\n  }]\n}\n\n// admin/dashboard.php mapeia BARRA -> type: 'bar'\n// e cria new ApexCharts(dom, options).render()"
      },
      {
        "id": "donut",
        "title": {
          "pt": "Exemplo 5 — DONUT e tratamento especial",
          "en": "Example 5 — DONUT special handling"
        },
        "text": {
          "pt": "DONUT possui tratamento dedicado em admin/dashboard.php. O código transforma a primeira série em valores numéricos e usa cfg.labels para os rótulos; se não houver dados, cria um fallback visual com um único item 'Sem dados'.",
          "en": "DONUT has dedicated handling in admin/dashboard.php. The code maps the first series into numeric values and uses cfg.labels for labels; if data is empty it creates a single 'No data' fallback item."
        },
        "code": "const donutOptions = {\n  series: donutValues,\n  chart: { type: 'donut' },\n  labels: donutLabels\n};\n\nif (cfg.cor_principal) donutColors.push(cfg.cor_principal);\nif (cfg.cor_secundaria) donutColors.push(cfg.cor_secundaria);\n\nnew ApexCharts(dom, donutOptions).render();"
      },
      {
        "id": "kpi-engine",
        "title": {
          "pt": "Motor de KPI avançado",
          "en": "Advanced KPI engine"
        },
        "text": {
          "pt": "Além dos modelos KPI-1/KPI-2 do dashboard visual, api/functions.php também contém uma engine de KPI que calcula período atual/anterior, delta absoluto, delta percentual, meta e direção desejada. Ela trabalha com day, week, month, quarter e year e suporta operações DIRECT, SUM, COUNT, AVG, DIFF e RATIO.",
          "en": "In addition to KPI-1/KPI-2 visual models, api/functions.php contains a KPI engine that calculates current/previous periods, absolute delta, percentage delta, targets and desired direction. It supports day, week, month, quarter and year plus DIRECT, SUM, COUNT, AVG, DIFF and RATIO operations."
        },
        "code": "$result = dso_compute_kpi($pdo, $kpi_id, $params);\n\n// retorno inclui:\n// current, previous, delta, delta_pct\n// target, hit_goal, good_dir\n// format, currency, decimals\n// icon, color"
      },
      {
        "id": "dashboard-runtime",
        "title": {
          "pt": "Do banco ao dashboard",
          "en": "From database to dashboard"
        },
        "text": {
          "pt": "dso_get_dashboard_models() une modelo e métrica; dso_fetch_grafico_data() valida identificadores, monta FROM/JOIN/WHERE/GROUP BY e retorna labels + series. admin/dashboard.php converte o tipo do modelo para ApexCharts ou renderiza o KPI diretamente.",
          "en": "dso_get_dashboard_models() joins display model and metric; dso_fetch_grafico_data() validates identifiers, builds FROM/JOIN/WHERE/GROUP BY and returns labels + series. admin/dashboard.php maps the model into ApexCharts or renders KPI markup directly."
        },
        "code": "dso_model_grafico\n      ↓ INNER JOIN\ndso_grafico\n      ↓\ndso_fetch_grafico_data()\n      ↓\n{ labels, series }\n      ↓\nadmin/dashboard.php\n      ↓\nKPI markup OR ApexCharts"
      },
      {
        "id": "ai",
        "title": {
          "pt": "IA baseada nos dados do dashboard",
          "en": "AI over dashboard data"
        },
        "text": {
          "pt": "A integração usa o endpoint OpenAI-compatible da Groq. A API key e o modelo ficam em dso_apikey_ia. O dashboard monta chartConfigs e passa esse conjunto como dashboardData para dso_process_chat_message().",
          "en": "The integration uses Groq's OpenAI-compatible endpoint. API key/model are stored in dso_apikey_ia. The dashboard builds chartConfigs and passes them as dashboardData into dso_process_chat_message()."
        },
        "table": {
          "headers": [
            "Opção do chat",
            "Ação"
          ],
          "rows": [
            [
              "1",
              "Relatório completo do dashboard"
            ],
            [
              "2",
              "Solicita qual gráfico deve ser analisado"
            ],
            [
              "Gráfico: <nome>",
              "Analisa um gráfico específico"
            ],
            [
              "3",
              "Tendências e oportunidades"
            ],
            [
              "4",
              "Riscos detectados"
            ],
            [
              "5",
              "Insights automáticos"
            ]
          ]
        },
        "code": "if ($msg === '1') {\n    $prompt = $lang->get('parametros_iaa')\n            . $lang->get('parametros_iaaa')\n            . $lang->get('parametros_iaaaa')\n            . json_encode($dashboardData, JSON_UNESCAPED_UNICODE);\n\n    return dso_ia_dashboard_ask($pdo, $prompt);\n}"
      },
      {
        "id": "ai-api",
        "title": {
          "pt": "Como a chamada Groq funciona",
          "en": "How the Groq call works"
        },
        "text": {
          "pt": "dso_ia_chat() lê API key/model do banco, cria um payload Chat Completions, envia via cURL e normaliza erros de cURL, HTTP, JSON e conteúdo ausente. temperature padrão é 0.3 e max_tokens padrão é 1024.",
          "en": "dso_ia_chat() reads API key/model from the database, creates a Chat Completions payload, sends it through cURL and normalizes cURL, HTTP, JSON and missing-content errors. Default temperature is 0.3 and max_tokens is 1024."
        },
        "code": "POST https://api.groq.com/openai/v1/chat/completions\nAuthorization: Bearer <apikey>\nContent-Type: application/json\n\n{\n  \"model\": \"<configured model>\",\n  \"messages\": [ ... ],\n  \"temperature\": 0.3,\n  \"max_tokens\": 1024\n}"
      },
      {
        "id": "preferences",
        "title": {
          "pt": "Preferências e administração",
          "en": "Preferences & administration"
        },
        "text": {
          "pt": "admin/preferences.php concentra configurações globais. A API key é exibida mascarada, podendo ser substituída junto com o modelo. O sistema também guarda idioma e public_home. Alterações usam CSRF e mensagens toast.",
          "en": "admin/preferences.php centralizes global settings. API key is displayed masked and can be replaced together with the model. Language and public_home are stored as settings. Changes use CSRF and toast feedback."
        },
        "cards": [
          [
            "Groq API Key",
            "Persistida em dso_apikey_ia; a tela trabalha com versão mascarada da chave."
          ],
          [
            "AI model",
            "Modelo também é persistido e usado nas próximas chamadas."
          ],
          [
            "Language",
            "O sistema possui camada language.php com PT-BR, EN-US e ES-ES."
          ],
          [
            "Public home",
            "Define se uma home pública aparece antes do login administrativo."
          ],
          [
            "CSRF",
            "Preferences, login e editor de gráficos utilizam tokens CSRF."
          ],
          [
            "Password",
            "Usuários administrativos usam password_hash/password_verify."
          ]
        ]
      },
      {
        "id": "security",
        "title": {
          "pt": "Validações e segurança",
          "en": "Validation & security"
        },
        "text": {
          "pt": "O editor valida nomes de tabela/coluna e restringe agregações a uma whitelist. dso_fetch_grafico_data() volta a validar identificadores antes de montar SQL. Vale observar que filtro_where e on_expr são configurações administrativas de SQL e devem ser fornecidas apenas por administradores confiáveis.",
          "en": "The editor validates table/column names and restricts aggregations to a whitelist. dso_fetch_grafico_data() validates identifiers again before building SQL. Note that filtro_where and on_expr are administrator-authored SQL fragments and should only be editable by trusted administrators."
        },
        "bullets": {
          "pt": [
            "Agregações permitidas: COUNT, SUM, AVG, MAX e MIN.",
            "Tipos de JOIN permitidos: INNER, LEFT e RIGHT.",
            "Identificadores passam por regex/whitelist antes de entrar em partes estruturais da query.",
            "Login usa password_hash/password_verify.",
            "Formulários sensíveis usam CSRF.",
            "API key Groq fica no banco e é mascarada na interface.",
            "api/database.php é gerado pelo instalador com as credenciais do banco."
          ],
          "en": [
            "Allowed aggregations: COUNT, SUM, AVG, MAX and MIN.",
            "Allowed JOIN types: INNER, LEFT and RIGHT.",
            "Identifiers pass regex/whitelist validation before structural SQL use.",
            "Login uses password_hash/password_verify.",
            "Sensitive forms use CSRF.",
            "Groq API key is stored in database and masked in UI.",
            "api/database.php is generated by the installer."
          ]
        }
      },
      {
        "id": "customization",
        "title": {
          "pt": "Customização e expansão",
          "en": "Customization & extension"
        },
        "text": {
          "pt": "Novos comportamentos podem ser adicionados sem reescrever o dashboard inteiro: novas opções de chat entram em dso_process_chat_message(), traduções entram em api/language.php e novas métricas são compostas pelo editor. Como o modelo visual é separado da métrica, também é possível criar novas renderizações mantendo a camada SQL atual.",
          "en": "New behavior can be added without rewriting the dashboard: chat options go into dso_process_chat_message(), translations into api/language.php and metrics are composed through the editor. Since visual model is separated from metric, new renderers can be created while preserving the SQL layer."
        },
        "code": "// Exemplo: nova opção de IA\nif ($msg === '6') {\n    $prompt = 'Compare os três indicadores mais relevantes e proponha ações. Dados: '\n            . json_encode($dashboardData, JSON_UNESCAPED_UNICODE);\n\n    return dso_ia_dashboard_ask($pdo, $prompt);\n}\n\n// Depois adicione o novo texto/menu em api/language.php."
      },
      {
        "id": "roadmap",
        "title": {
          "pt": "Roadmap e créditos",
          "en": "Roadmap & credits"
        },
        "text": {
          "pt": "O README marca como concluídos Dashboard, Preferences, Create New Graph, KPI System, integração Groq AI e Install Wizard. O projeto foi desenvolvido por Pierre Moraes no contexto acadêmico de Análise e Desenvolvimento de Sistemas na UNISUAM.",
          "en": "The README marks Dashboard, Preferences, Create New Graph, KPI System, Groq AI integration and Install Wizard as completed. The project was developed by Pierre Moraes in the context of Systems Analysis and Development studies at UNISUAM."
        },
        "cards": [
          [
            "Dashboard",
            "Concluído"
          ],
          [
            "Preferences",
            "Concluído"
          ],
          [
            "Create New Graph",
            "Concluído"
          ],
          [
            "KPI System",
            "Concluído"
          ],
          [
            "Groq AI",
            "Concluído"
          ],
          [
            "Install Wizard",
            "Concluído"
          ]
        ],
        "note": {
          "pt": "Licença: CC BY-NC 4.0 — uso não comercial.",
          "en": "License: CC BY-NC 4.0 — non-commercial use."
        }
      }
    ]
  },
  master_windows_forms: {
    name:'Master — Windows Forms',
    code:'master_windows_forms',
    repo:'https://github.com/Pierremoraes-ofc/Master-Windows-Form-CSharp-',
    category:{pt:'Projeto • Desktop',en:'Project • Desktop'},
    lead:{pt:'Aplicação desktop em C#/.NET 10 para Windows Forms, com interface modular, manipulação de input via WinAPI, remapeamento de mouse/teclado, sistema de temas, notificações, tray e internacionalização JSON.',en:'Desktop application in C#/.NET 10 using Windows Forms, with modular UI, WinAPI input handling, mouse/keyboard remapping, themes, notifications, tray support and JSON localization.'},
    facts:[['Runtime','.NET 10'],['UI','Windows Forms'],['Input','WinAPI / SendInput'],['Locale','JSON']],
    sections:[
      {id:'overview',title:{pt:'Visão geral',en:'Overview'},text:{pt:'O Master funciona como uma aplicação Windows de baixo nível voltada para controle de interface e entrada. O projeto combina forms customizados sem borda, dock entre janelas, atalhos, detecção de botões do mouse e uma camada própria sobre WinAPI.',en:'Master is a low-level Windows desktop application focused on UI and input control. It combines borderless custom forms, docked windows, shortcuts, mouse-button detection and its own WinAPI layer.'}},
      {id:'structure',title:{pt:'Estrutura do projeto',en:'Project structure'},code:`Master/
├── Actions/
│   ├── Mouse.cs
│   ├── Teclado.cs
│   ├── Shortcuts.cs
│   └── Ponteiros.cs
├── Models/
├── Utilities/
│   ├── Remaper.cs
│   ├── SafeNativeMethods.cs
│   └── WinApi.cs
├── Gradients/
├── Master/
│   ├── LanguageManager.cs
│   ├── AppPaths.cs
│   └── StartupManager.cs
├── FormMenu.cs
├── Sistemas.cs
├── MasterForm.cs
└── Program.cs`},
      {id:'input',title:{pt:'Input e WinAPI',en:'Input & WinAPI'},text:{pt:'Actions/Teclado.cs e Actions/Mouse.cs abstraem SendInput. A aplicação consegue emitir tecla down/up, combinações e eventos de mouse. Utilities/Remaper.cs decide quando bloquear o evento original e disparar a ação remapeada.',en:'Actions/Teclado.cs and Actions/Mouse.cs wrap SendInput. The application can emit key down/up, key combinations and mouse events. Utilities/Remaper.cs decides when to block the original event and trigger remapped behavior.'},code:`internal static void LanzarCombo(params KeyN[] teclas)
{
    var numTeclas = (uint)teclas.Length;

    for (int i = 0; i < numTeclas; i++)
        teclasCombo[i].union.keyboard.wVk = teclas[i];

    SendInput(numTeclas * 2, teclasCombo, GenSize);
}`},
      {id:'ui',title:{pt:'Interface modular',en:'Modular UI'},text:{pt:'MasterForm coordena as janelas, enquanto FormMenu e Sistemas são posicionados/dockados em relação ao form principal. Há sincronização de movimento, estado da janela, menu recolhível, tray e redraw customizado.',en:'MasterForm coordinates windows while FormMenu and Sistemas are positioned/docked relative to the main form. Movement, window state, collapsible menu, tray behavior and custom redraw are synchronized.'}},
      {id:'themes',title:{pt:'Temas e visual',en:'Themes & visuals'},text:{pt:'A UI possui tema claro/escuro, bordas arredondadas configuráveis, gradientes e cores aplicadas dinamicamente. O sistema evita depender da decoração padrão da janela ao usar FormBorderStyle.None.',en:'The UI supports light/dark themes, configurable rounded borders, gradients and runtime colors. It avoids default window chrome through FormBorderStyle.None.'}},
      {id:'locale',title:{pt:'Sistema de idiomas',en:'Localization'},text:{pt:'LanguageManager carrega arquivos JSON e achata estruturas aninhadas em chaves pontuadas. Isso permite organizar traduções hierárquicas sem acoplar o código a um único idioma.',en:'LanguageManager loads JSON files and flattens nested objects into dotted keys, allowing hierarchical translations without coupling code to one language.'},code:`LanguageManager.Load("Portugues-BR");
icon_home.Text = LanguageManager.Get("rato.menu.home");`},
      {id:'build',title:{pt:'Build',en:'Build'},code:`dotnet restore
dotnet build Master/Master.csproj
dotnet run --project Master/Master.csproj`,text:{pt:'O projeto alvo é net10.0-windows e usa UseWindowsForms=true. Portanto, a execução exige Windows e runtime/SDK compatível com .NET 10.',en:'Target framework is net10.0-windows with UseWindowsForms=true, so execution requires Windows and a compatible .NET 10 runtime/SDK.'}}
    ]
  },

  pr_bridge: {
    name:'PR Bridge', code:'pr_bridge', repo:'https://github.com/Pierremoraes-ofc/pr_bridge',
    category:{pt:'Hobby • FiveM Architecture',en:'Hobby • FiveM Architecture'},
    lead:{pt:'Plataforma standalone de compatibilidade e desenvolvimento para FiveM. Centraliza frameworks, inventários, banco, target/interact, UI, callbacks, comandos, recursos nativos e uma camada de compatibilidade ox em uma API única.',en:'Standalone compatibility and development platform for FiveM, unifying frameworks, inventories, databases, target/interact, UI, callbacks, commands, native utilities and an ox compatibility layer behind one API.'},
    facts:[['Version','1.4.2'],['Context','shared / server / client'],['Architecture','standalone + adapters'],['Compatibility','ox_lib / ox_target']],
    sections:[
      {id:'overview',title:{pt:'Visão geral',en:'Overview'},text:{pt:'Resources consumidores importam @pr_bridge/init.lua e trabalham com pr_lib. O bridge detecta providers ativos, normaliza assinaturas e preserva regras de negócio do resource sem obrigá-lo a conhecer QBCore, QBX, ESX, inventários ou libs específicas.',en:'Consumers import @pr_bridge/init.lua and work against pr_lib. The bridge detects active providers, normalizes signatures and keeps business logic independent from QBCore, QBX, ESX, inventory or library specifics.'}},
      {id:'architecture',title:{pt:'Arquitetura',en:'Architecture'},code:`resource
  ↓
@pr_bridge/init.lua
  ↓
provider detection
  ↓
normalization / adapters
  ↓
pr_lib.*`},
      {id:'modules',title:{pt:'Famílias de API',en:'API families'},cards:[['Framework','Player, groups, jobs, money, identifiers and framework normalization.'],['Inventory','Items, slots, metadata, stashes and provider normalization.'],['Database','Queries, inserts, updates, transactions and normalized results.'],['UI','Context, input, progress, notify, text UI, metadata and menus.'],['Target / Interact','Entities, models, zones, pickups, LOS/wall handling and interaction ownership.'],['Developer Toolkit','Cache, callbacks, commands, keybinds, locale, files, DUI, streaming, gizmo and native helpers.']]},
      {id:'ox',title:{pt:'Compatibilidade ox_lib / ox_target',en:'ox_lib / ox_target compatibility'},text:{pt:'A linha 1.4.x incorporou a compatibilidade ox diretamente ao PR Bridge. O manifest fornece as identidades ox_lib e ox_target e a borda de compatibilidade traduz chamadas legadas para implementações PR quando possível.',en:'The 1.4.x line integrated ox compatibility directly into PR Bridge. The manifest provides ox_lib and ox_target identities and adapts legacy calls into PR implementations where possible.'},code:`shared_script '@ox_lib/init.lua'
dependency 'ox_lib'
dependency 'ox_target'

lib.registerContext({...})
exports.ox_target:addLocalEntity(entity, options)`},
      {id:'callbacks',title:{pt:'Callbacks e segurança',en:'Callbacks & security'},text:{pt:'O runtime possui callbacks legacy e secure, preserva múltiplos retornos inclusive posições nil e pode aplicar controle de ambiente, rate-limit/contratos e autorização. Comandos e ACE também são normalizados.',en:'Runtime supports legacy and secure callbacks, preserves multi-return values including nil positions, and can apply environment/rate-limit/authorization rules. Commands and ACE are normalized as well.'}},
      {id:'persistence',title:{pt:'Persistência e runtime',en:'Persistence & runtime'},text:{pt:'A v1.4.2 reforçou persistência JSON com backup/recovery, locks locais, batch writes e tentativa de restauração. O bridge também centraliza cache de resource state e sincronização de preferências/configuração.',en:'v1.4.2 hardened JSON persistence with backup/recovery, local locks, batch writes and restoration attempts. It also centralizes resource-state caching and synchronized configuration.'}},
      {id:'integration',title:{pt:'Integração de um resource',en:'Consumer integration'},code:`-- fxmanifest.lua
shared_scripts {
    '@pr_bridge/init.lua',
}

-- consumer.lua
local player = pr_lib.framework.getPlayer(source)
local result = pr_lib.db.query('SELECT * FROM vehicles WHERE owner = ?', { owner })
pr_lib.notify(source, {
    title = 'Example',
    description = 'Running through PR Bridge'
})`},
      {id:'providers',title:{pt:'Providers e expansão',en:'Providers & expansion'},text:{pt:'Novos adapters podem ser adicionados sem alterar scripts consumidores. A ideia central é manter um contrato estável no topo e encapsular particularidades de cada framework/provider em módulos especializados.',en:'New adapters can be added without changing consumers. The core idea is a stable top-level contract with provider-specific behavior encapsulated in specialized modules.'}}
    ]
  },

  pr_mileage: {
    "name": "PR Mileage",
    "code": "pr_mileage",
    "repo": "https://github.com/Pierremoraes-ofc/pr_mileage",
    "category": {
      "pt": "Hobby • Vehicle Simulation",
      "en": "Hobby • Vehicle Simulation"
    },
    "lead": {
      "pt": "Simulador veicular de odômetro, histórico mecânico e desgaste progressivo para FiveM. O sistema mede a distância realmente percorrida, mantém o odômetro em banco/State Bag, registra cada peça por placa com quilometragem de instalação e durabilidade própria e transforma o desgaste em sintomas físicos, visuais e mecânicos.",
      "en": "FiveM vehicle simulator for odometer data, mechanical history and progressive component wear. It measures actual traveled distance, keeps mileage in database/State Bags, records each installed part by plate with installation mileage and individual durability, and turns wear into physical, visual and mechanical symptoms."
    },
    "facts": [
      [
        "Version",
        "2.3.2"
      ],
      [
        "Parts",
        "62"
      ],
      [
        "Wear effects",
        "16"
      ],
      [
        "Runtime",
        "DB + State Bags"
      ],
      [
        "Mileage loop",
        "1 s"
      ],
      [
        "Wear loop",
        "5 s"
      ],
      [
        "Frameworks",
        "ND / ox_core / ESX / QBX / QB"
      ]
    ],
    "sections": [
      {
        "id": "overview",
        "title": {
          "pt": "Visão geral",
          "en": "Overview"
        },
        "text": {
          "pt": "O PR Mileage não trata quilometragem apenas como um número para HUD. O odômetro é a base de uma camada de simulação mecânica: o veículo acumula distância, a quilometragem fica disponível em runtime pela State Bag vehicleMileage, peças registradas guardam em que KM foram instaladas e a vida restante é calculada a partir do uso real do carro.",
          "en": "PR Mileage does not treat mileage as a HUD-only number. Odometer data drives a mechanical simulation layer: the vehicle accumulates real distance, runtime mileage is exposed through the vehicleMileage State Bag, installed parts remember the odometer at installation and remaining life is derived from actual use."
        },
        "cards": [
          [
            "Odômetro real",
            "Distância é calculada pelo deslocamento entre coordenadas sucessivas do veículo, não por um contador artificial de tempo."
          ],
          [
            "State Bag",
            "vehicleMileage replica o odômetro atual para HUDs, peças e outros resources sem polling SQL contínuo."
          ],
          [
            "Peças por placa",
            "vehicle_parts mantém uma linha por plate + part com stage, installed_km, durability, installer e datas."
          ],
          [
            "Durabilidade individual",
            "Cada instalação sorteia uma vida útil entre durability.min e durability.max."
          ],
          [
            "Sintomas progressivos",
            "Uma peça pode apresentar vários sintomas em diferentes percentuais de vida restante."
          ],
          [
            "Física e imersão",
            "Falhas podem alterar handling, direção, motor, pneus, luzes, RPM, câmera, partículas e forças físicas."
          ]
        ]
      },
      {
        "id": "architecture",
        "title": {
          "pt": "Arquitetura do sistema",
          "en": "System architecture"
        },
        "text": {
          "pt": "O resource separa rastreamento do odômetro, persistência de peças e aplicação dos sintomas. Essa divisão evita salvar desgaste de cada peça a cada tick: o desgaste é derivado de vehicle_km - installed_km.",
          "en": "The resource separates odometer tracking, part persistence and symptom application. This avoids saving every component wear value every tick: wear is derived from vehicle_km - installed_km."
        },
        "code": "VEÍCULO EM MOVIMENTO\n        ↓\nclient/client.lua\nmede distância real\n        ↓\nState Bag: vehicleMileage\n        ↓\nserver/server.lua\nDB (veículo do player) / RAM (veículo de rua)\n        ↓\nclient/cl_parts.lua\ncarrega vehicle_parts\n        ↓\ncurrent_km = vehicle_km - installed_km\n        ↓\nclient/cl_wear.lua\nresolve sintoma ativo\n        ↓\nhandling / motor / partículas / pneus / direção / câmera"
      },
      {
        "id": "installation",
        "title": {
          "pt": "Instalação e dependências",
          "en": "Installation & dependencies"
        },
        "text": {
          "pt": "O fxmanifest atual declara oxmysql e ox_lib como dependências. main.lua detecta automaticamente o framework ativo para descobrir a tabela de veículos e a coluna de proprietário.",
          "en": "The current fxmanifest declares oxmysql and ox_lib as dependencies. main.lua automatically detects the active framework to determine the owned-vehicle table and owner column."
        },
        "table": {
          "headers": [
            "Framework detectado",
            "Tabela de veículos",
            "Coluna do proprietário"
          ],
          "rows": [
            [
              "ND_Core",
              "player_vehicles",
              "citizenid"
            ],
            [
              "ox_core",
              "vehicles",
              "charId"
            ],
            [
              "es_extended",
              "owned_vehicles",
              "owner"
            ],
            [
              "qbx-core",
              "player_vehicles",
              "citizenid"
            ],
            [
              "qb-core",
              "player_vehicles",
              "citizenid"
            ],
            [
              "Fallback",
              "player_vehicles",
              "citizenid"
            ]
          ]
        },
        "code": "ensure oxmysql\nensure ox_lib\nensure pr_mileage"
      },
      {
        "id": "odometer",
        "title": {
          "pt": "Como o odômetro é calculado",
          "en": "How the odometer is calculated"
        },
        "text": {
          "pt": "O loop do odômetro roda a cada segundo, apenas para o motorista. A distância em metros entre a posição anterior e a atual é convertida para quilômetros. O sistema só soma distância quando o veículo está com todas as rodas no chão e fora d'água.",
          "en": "The odometer loop runs once per second and only for the driver. Distance in meters between previous and current position is converted to kilometers. Distance only accumulates while the vehicle is on all wheels and outside water."
        },
        "steps": {
          "pt": [
            "Verifica se existe veículo em cache e se o player ocupa o banco do motorista.",
            "Ignora classes configuradas em Config.IgnoredClasses.",
            "Resolve a origem da placa: DB para veículo persistente, RAM para veículo de rua ou nova placa.",
            "Calcula #(lastLocation - GetEntityCoords(vehicle)).",
            "Converte metros para quilômetros.",
            "Atualiza vehicleMileage quando o valor arredondado para 0,1 km muda.",
            "Envia novo save ao servidor quando a diferença atinge Config.SaveThreshold."
          ],
          "en": [
            "Verify cached vehicle and driver seat.",
            "Skip classes configured in Config.IgnoredClasses.",
            "Resolve plate origin: DB, street RAM or a new plate.",
            "Calculate #(lastLocation - GetEntityCoords(vehicle)).",
            "Convert meters into kilometers.",
            "Update vehicleMileage whenever the 0.1 km rounded value changes.",
            "Save server-side when Config.SaveThreshold is reached."
          ]
        },
        "code": "local dist = #(lastLocation - GetEntityCoords(vehicle))\ncurrentMileage = currentMileage + (dist / 1000.0)\n\nlocal rounded = tonumber(string.format('%.1f', currentMileage))\nEntity(vehicle).state:set('vehicleMileage', rounded, true)"
      },
      {
        "id": "persistence",
        "title": {
          "pt": "DB, State Bags e veículos de rua",
          "en": "DB, State Bags & street vehicles"
        },
        "text": {
          "pt": "Veículos pertencentes a players salvam mileage na tabela detectada do framework. Veículos de rua, que não existem nessa tabela, recebem histórico temporário em RAM no servidor. A State Bag mantém o valor mais recente na entity e o SQL possui proteção contra regressão de odômetro.",
          "en": "Player-owned vehicles persist mileage in the framework vehicle table. Street vehicles not present there keep session history in server RAM. The State Bag carries the latest entity value and SQL prevents odometer regression."
        },
        "table": {
          "headers": [
            "Camada",
            "Responsabilidade",
            "Persistência"
          ],
          "rows": [
            [
              "vehicles.mileage",
              "Odômetro de veículos registrados",
              "Banco"
            ],
            [
              "vehicleMileage",
              "Odômetro atual da entity",
              "State Bag replicada"
            ],
            [
              "worldVehicles",
              "KM de placas sem registro persistente",
              "RAM do servidor"
            ],
            [
              "vehicle_parts",
              "Histórico de peças instaladas",
              "Banco"
            ]
          ]
        },
        "note": {
          "pt": "writeToDB() só atualiza quando o novo mileage é maior que o salvo. Isso evita que um client com estado antigo faça o odômetro voltar.",
          "en": "writeToDB() only updates when the new mileage is greater than the stored value, preventing stale clients from rolling the odometer backward."
        }
      },
      {
        "id": "fresh-street",
        "title": {
          "pt": "Veículo zero KM e quilometragem de rua",
          "en": "Zero-KM & street mileage"
        },
        "text": {
          "pt": "Veículos marcados como fresh começam em 0 km. Placas novas que não pertencem a player recebem uma quilometragem aleatória por classe, tornando carros de rua mais críveis. Hooks atuais incluem eventos de ESX garages, compra ESX, QBCore spawn, qb-garages, ox_garage e o evento pr_mileage:fresh.",
          "en": "Vehicles marked fresh start at 0 km. New street plates receive class-based randomized mileage for believable world vehicles. Current hooks include ESX garages/purchase, QBCore spawn, qb-garages, ox_garage and pr_mileage:fresh."
        },
        "code": "-- marcar manualmente a entity recém-entregue\nexports['pr_mileage']:markFresh(vehicle)\n\n-- alternativa\nTriggerEvent('pr_mileage:fresh', vehicle)\n\n-- server: zerar a placa persistente\nexports['pr_mileage']:resetMileage(plate)"
      },
      {
        "id": "wear-math",
        "title": {
          "pt": "Matemática do desgaste",
          "en": "Wear mathematics"
        },
        "text": {
          "pt": "A tabela vehicle_parts não precisa receber atualização contínua do desgaste. Basta registrar a quilometragem da instalação e a durabilidade total. O estado atual é reconstruído usando o odômetro do carro.",
          "en": "vehicle_parts does not need continuous wear writes. It stores installation mileage and total durability; current condition is reconstructed from vehicle odometer."
        },
        "code": "current_km   = floor(vehicle_km) - floor(installed_km)\nremaining_km = max(durability - current_km, 0)\nratio        = remaining_km / durability\npercent      = ratio * 100",
        "table": {
          "headers": [
            "Exemplo",
            "Valor"
          ],
          "rows": [
            [
              "Odômetro atual",
              "80.000 km"
            ],
            [
              "Peça instalada em",
              "60.000 km"
            ],
            [
              "KM rodados pela peça",
              "20.000 km"
            ],
            [
              "Durabilidade sorteada",
              "50.000 km"
            ],
            [
              "KM restantes",
              "30.000 km"
            ],
            [
              "Vida restante",
              "60%"
            ]
          ]
        }
      },
      {
        "id": "status",
        "title": {
          "pt": "Status e thresholds",
          "en": "Status & thresholds"
        },
        "text": {
          "pt": "WearConfig separa o status de saúde da aplicação física de sintomas. Com a configuração atual, 100% é Boa, entre 30% e abaixo de 100% é Razoável e abaixo de 30% é Ruim.",
          "en": "WearConfig separates health labels from physical symptom activation. With the current settings, 100% is Good, 30% to below 100% is Fair and below 30% is Bad."
        },
        "table": {
          "headers": [
            "Faixa",
            "Status",
            "Efeitos físicos"
          ],
          "rows": [
            [
              "100%",
              "Boa",
              "Não"
            ],
            [
              "30% até 99,9%",
              "Razoável",
              "Não"
            ],
            [
              "Abaixo de 30%",
              "Ruim",
              "Pode ativar sintomas"
            ]
          ]
        },
        "note": {
          "pt": "O resolver atual de sintomas só considera definições cujo threshold seja menor que 0.30. Portanto, um sintoma definido em threshold = 0.40 pode existir como informação de configuração, mas não será aplicado fisicamente pelo cl_wear.lua atual.",
          "en": "The current symptom resolver only considers definitions with threshold below 0.30. A symptom configured at threshold = 0.40 may exist in configuration, but current cl_wear.lua will not physically apply it."
        }
      },
      {
        "id": "parts-catalog",
        "title": {
          "pt": "Catálogo atual de 62 peças",
          "en": "Current 62-part catalog"
        },
        "text": {
          "pt": "config/parts_consumable.lua contém 62 definições. O catálogo mistura sensores, consumíveis, manutenção, suspensão, pneus, freios, turbo e componentes especiais.",
          "en": "config/parts_consumable.lua contains 62 definitions spanning sensors, consumables, maintenance, suspension, tyres, brakes, turbo and special components."
        },
        "table": {
          "headers": [
            "Grupo",
            "Exemplos"
          ],
          "rows": [
            [
              "Sensores",
              "sensor_maf, sensor_map, sensor_iat, sensor_tps, sensor_ckp, sensor_cmp, sensor_ect, sensor_o2_pre, sensor_egt"
            ],
            [
              "Motor/manutenção",
              "oleo_motor, filtro_oleo, filtro_ar, filtro_combustivel, vela_ignicao, bobina_ignicao, correia_dentada"
            ],
            [
              "Arrefecimento",
              "bomba_agua, mangueiras_radiador, ventoinha_airforce_fan_quebrada"
            ],
            [
              "Suspensão",
              "amortecedor, mola, bucha, bandeja, pivo, barra_estabilizadora, bieleta"
            ],
            [
              "Pneus",
              "tire_common, tire_street, tire_sport, tire_race, tire_semislick, tire_slick, tire_drift, tire_touring"
            ],
            [
              "Freios",
              "brake_level_1..4, disco_freio, fluido_freio, pastilha_freio"
            ],
            [
              "Performance",
              "turbo_garret_1..4, nitro_kit, bobina_pro_race"
            ]
          ]
        }
      },
      {
        "id": "create-part",
        "title": {
          "pt": "Criando uma peça do zero",
          "en": "Creating a part from scratch"
        },
        "text": {
          "pt": "Para participar do desgaste interno, a peça precisa existir em Parts.Items. labelItem é o nome humano, durability define a faixa de vida útil em KM e symptoms descreve os estados de falha. O stage não fica na definição: ele é informado quando a peça é instalada.",
          "en": "To participate in internal wear simulation, a part must exist in Parts.Items. labelItem is the human label, durability defines its KM service-life range and symptoms describes failure states. stage is supplied at installation rather than stored in the definition."
        },
        "code": "Parts.Items['filtro_ar_premium'] = {\n    labelItem = 'Filtro de Ar Premium',\n\n    -- A vida final é sorteada no momento da instalação\n    durability = {\n        min = 18000,\n        max = 26000\n    },\n\n    symptoms = {}\n}"
      },
      {
        "id": "symptom-basic",
        "title": {
          "pt": "Criando um sintoma para uma peça",
          "en": "Creating a symptom"
        },
        "text": {
          "pt": "threshold representa a porcentagem RESTANTE que ativa o sintoma. Ex.: 0.25 significa 25% de vida restante ou menos. Como o resolver atual só aplica thresholds abaixo de 0.30, use valores como 0.25, 0.15, 0.05 para sintomas físicos.",
          "en": "threshold represents REMAINING life ratio. 0.25 means 25% life remaining or less. Since the current resolver only applies thresholds below 0.30, values such as 0.25, 0.15 and 0.05 are appropriate for physical symptoms."
        },
        "code": "Parts.Items['filtro_ar_premium'] = {\n    labelItem = 'Filtro de Ar Premium',\n    durability = { min = 18000, max = 26000 },\n\n    symptoms = {\n        {\n            threshold = 0.25, -- ativa com <= 25% restante\n            label = 'Filtro saturado',\n            effects = {\n                {\n                    type = 'shake_cam',\n                    params = {\n                        type = 'ROAD_VIBRATION_SHAKE',\n                        speed = 40,\n                        intensity = 0.04\n                    }\n                },\n                {\n                    type = 'stall',\n                    params = { chance = 0.03 }\n                }\n            }\n        }\n    }\n}"
      },
      {
        "id": "symptom-progressive",
        "title": {
          "pt": "Exemplo de falha progressiva em 3 estágios",
          "en": "Three-stage progressive failure"
        },
        "text": {
          "pt": "Uma peça pode ter vários sintomas. O resolver escolhe o sintoma ativo mais severo compatível com a vida restante. No exemplo, a mangueira começa vazando levemente em 25%, piora em 12% e chega à condição crítica em 4%.",
          "en": "A part may contain multiple symptoms. The resolver selects the most severe active symptom compatible with remaining life. This hose starts leaking at 25%, worsens at 12% and becomes critical at 4%."
        },
        "code": "Parts.Items['mangueira_coolant_custom'] = {\n    labelItem = 'Mangueira de Arrefecimento Reforçada',\n    durability = { min = 45000, max = 70000 },\n\n    symptoms = {\n        {\n            threshold = 0.25,\n            label = 'Pequeno vazamento de arrefecimento',\n            effects = {\n                { type = 'particle', params = {\n                    dict = 'core',\n                    name = 'ent_sht_steam',\n                    bone = Parts.VehicleBones.motor,\n                    scale = 0.30\n                }},\n                { type = 'engine_health', params = { value = 800 } }\n            }\n        },\n        {\n            threshold = 0.12,\n            label = 'Vazamento severo',\n            effects = {\n                { type = 'particle', params = {\n                    dict = 'core',\n                    name = 'ent_amb_smoke_engine',\n                    bone = Parts.VehicleBones.motor,\n                    scale = 0.55\n                }},\n                { type = 'engine_health', params = { value = 500 } },\n                { type = 'stall', params = { chance = 0.08 } }\n            }\n        },\n        {\n            threshold = 0.04,\n            label = 'Mangueira rompida — superaquecimento crítico',\n            effects = {\n                { type = 'particle', params = {\n                    dict = 'core',\n                    name = 'ent_amb_smoke_engine',\n                    bone = Parts.VehicleBones.motor,\n                    scale = 0.85\n                }},\n                { type = 'engine_health', params = { value = 180 } },\n                { type = 'stall', params = { chance = 0.35 } }\n            }\n        }\n    }\n}"
      },
      {
        "id": "symptom-brakes",
        "title": {
          "pt": "Exemplo — freio perdendo eficiência",
          "en": "Example — brake degradation"
        },
        "text": {
          "pt": "handling_float permite degradar propriedades reais do CHandlingData. O exemplo reduz fBrakeForce somente acima da velocidade configurada e combina vibração para tornar a falha perceptível.",
          "en": "handling_float can degrade real CHandlingData properties. This example reduces fBrakeForce only above the configured speed and adds camera vibration for perceptible feedback."
        },
        "code": "Parts.Items['pastilha_ceramica_custom'] = {\n    labelItem = 'Pastilha Cerâmica Custom',\n    durability = { min = 28000, max = 42000 },\n    symptoms = {\n        {\n            threshold = 0.25,\n            label = 'Frenagem perdendo eficiência',\n            effects = {\n                { type = 'handling_float', params = {\n                    field = 'fBrakeForce',\n                    value = 0.52,\n                    speed = 10\n                }},\n                { type = 'shake_cam', params = {\n                    type = 'ROAD_VIBRATION_SHAKE',\n                    intensity = 0.04,\n                    speed = 40\n                }}\n            }\n        },\n        {\n            threshold = 0.06,\n            label = 'Pastilha no limite',\n            effects = {\n                { type = 'handling_float', params = {\n                    field = 'fBrakeForce',\n                    value = 0.30,\n                    speed = 5\n                }}\n            }\n        }\n    }\n}"
      },
      {
        "id": "symptom-tyre",
        "title": {
          "pt": "Exemplo — pneu com perda de estabilidade e estouro",
          "en": "Example — tyre instability & blowout"
        },
        "text": {
          "pt": "Pneus podem combinar handling, força lateral e tyre_burst. Quando wheel é nil, o applier escolhe uma roda aleatória entre 0 e 3.",
          "en": "Tyres can combine handling changes, lateral force and tyre_burst. When wheel is nil the applier selects a random wheel from 0 to 3."
        },
        "code": "Parts.Items['tire_endurance_custom'] = {\n    labelItem = 'Pneu Endurance',\n    durability = { min = 55000, max = 80000 },\n    symptoms = {\n        {\n            threshold = 0.20,\n            label = 'Aderência reduzida',\n            effects = {\n                { type = 'handling_float', params = {\n                    field = 'fTractionLossMult',\n                    value = 1.30,\n                    speed = 30\n                }},\n                { type = 'lateral_force', params = {\n                    value = 0.08,\n                    speed = 60\n                }}\n            }\n        },\n        {\n            threshold = 0.03,\n            label = 'Carcaça comprometida',\n            effects = {\n                { type = 'tyre_burst', params = { wheel = nil } },\n                { type = 'lateral_force', params = {\n                    value = 0.20,\n                    speed = 25\n                }}\n            }\n        }\n    }\n}"
      },
      {
        "id": "effects-reference",
        "title": {
          "pt": "Referência dos 16 efeitos",
          "en": "16-effect reference"
        },
        "table": {
          "headers": [
            "Effect",
            "Parâmetros principais",
            "Resultado"
          ],
          "rows": [
            [
              "particle",
              "dict, name, bone, scale, offset",
              "Partícula loopada presa ao bone do veículo"
            ],
            [
              "engine_health",
              "value",
              "Limita a saúde do motor ao valor configurado"
            ],
            [
              "power_mult",
              "value",
              "Multiplicador/integração de potência; toggle global atual false"
            ],
            [
              "torque_mult",
              "value",
              "Multiplicador/integração de torque; toggle global atual false"
            ],
            [
              "undriveable",
              "value",
              "Torna o veículo dirigível ou não"
            ],
            [
              "engine_on",
              "value",
              "Liga/desliga o motor"
            ],
            [
              "shake_cam",
              "type, intensity, speed",
              "Vibração de câmera acima de velocidade mínima"
            ],
            [
              "apply_force",
              "x, y, z, random, intensity, speed",
              "Aplica micro-forças/trancos no veículo"
            ],
            [
              "handling_float",
              "field, value, speed",
              "Altera um float do CHandlingData"
            ],
            [
              "tyre_burst",
              "wheel",
              "Estoura uma roda específica ou aleatória"
            ],
            [
              "vehicle_lights",
              "state",
              "Controla faróis 0/1/2"
            ],
            [
              "indicator",
              "left, right",
              "Controla indicadores/setas"
            ],
            [
              "rpm_override",
              "value",
              "Força RPM usando integração interna/externa"
            ],
            [
              "stall",
              "chance",
              "Chance por tick de o motor morrer e tentar religar"
            ],
            [
              "steering_scale",
              "value",
              "Limita escala/ângulo da direção"
            ],
            [
              "lateral_force",
              "value, speed",
              "Força lateral constante para simular desalinhamento"
            ]
          ]
        },
        "note": {
          "pt": "WearConfig.Effects permite desligar qualquer tipo globalmente. No código atual power_mult e torque_mult vêm false para evitar conflito com outros sistemas de performance.",
          "en": "WearConfig.Effects can globally disable any effect type. Current code ships power_mult and torque_mult as false to avoid conflicts with other performance systems."
        }
      },
      {
        "id": "bones",
        "title": {
          "pt": "Bones para partículas e sintomas",
          "en": "Vehicle bones for effects"
        },
        "text": {
          "pt": "Parts.VehicleBones centraliza aliases para bones GTA. Em vez de repetir strings, sintomas podem apontar para Parts.VehicleBones.motor, escape, roda, suspensão, porta, farol, tanque, volante etc.",
          "en": "Parts.VehicleBones centralizes GTA bone aliases. Symptoms can reference Parts.VehicleBones.motor, exhaust, wheels, suspension, doors, headlights, fuel cap, steering wheel and more."
        },
        "code": "{ type = 'particle', params = {\n    dict = 'core',\n    name = 'ent_sht_steam',\n    bone = Parts.VehicleBones.motor,\n    scale = 0.45,\n    offset = vector3(0.0, 0.0, 0.05)\n}}"
      },
      {
        "id": "install-part",
        "title": {
          "pt": "Instalando e substituindo uma peça",
          "en": "Installing & replacing a part"
        },
        "text": {
          "pt": "installPart usa UPSERT por plate + part. Se a mesma peça já existe na placa, stage, installed_km, durability, citizen_id e installed_at são renovados. A durabilidade é sorteada novamente a cada instalação.",
          "en": "installPart performs an upsert by plate + part. Reinstalling the same part renews stage, installed_km, durability, citizen_id and installed_at. Durability is rolled again on each installation."
        },
        "code": "-- SERVER — recomendado para oficina, concessionária ou sistema autoritativo\nlocal plate = 'ABC1234'\nlocal currentKm = exports['pr_mileage']:getMileageByPlate(plate) or 0\n\nlocal ok = exports['pr_mileage']:installPart(\n    plate,\n    'pastilha_freio',\n    1,          -- stage\n    currentKm,  -- KM da instalação\n    mechanicId  -- citizen/identifier ou nil\n)\n\n-- CLIENT — usa automaticamente placa/KM do veículo atual\nexports['pr_mileage']:installPart('pastilha_freio', 1, mechanicId)\nexports['pr_mileage']:reloadParts()"
      },
      {
        "id": "workshop",
        "title": {
          "pt": "Exemplo de integração com oficina",
          "en": "Workshop integration example"
        },
        "text": {
          "pt": "A oficina deve validar distância/permissão/item e consumir a peça no próprio resource. Depois, chame installPart server-side com o KM atual. Isso mantém a regra mecânica no PR Mileage e a economia/inventário no sistema da oficina.",
          "en": "The workshop should validate distance/permission/item and consume inventory in its own resource. Then call server-side installPart with current mileage, leaving mechanical simulation in PR Mileage and economy/inventory in the workshop."
        },
        "code": "-- server.lua da oficina\nlocal function replacePart(source, plate, itemName, stage)\n    -- 1. Valide o player, item, veículo e proximidade no seu resource.\n    -- 2. Remova/consuma o item da oficina.\n\n    local vehicleKm = exports['pr_mileage']:getMileageByPlate(plate)\n    if vehicleKm == false then return false, 'mileage_not_found' end\n\n    local installerId = GetPlayerIdentifierByType(tostring(source), 'license')\n\n    local installed = exports['pr_mileage']:installPart(\n        plate,\n        itemName,\n        stage or 1,\n        vehicleKm,\n        installerId\n    )\n\n    return installed == true\nend"
      },
      {
        "id": "dealership-kit",
        "title": {
          "pt": "Função de kit de fábrica para concessionária",
          "en": "Factory-kit helper for dealerships"
        },
        "text": {
          "pt": "O PR Mileage não expõe um export nativo chamado installKit. O padrão abaixo é uma função de integração para ser criada no resource da concessionária usando exports oficiais do PR Mileage. Ela zera o veículo novo e instala todas as peças em 0 km.",
          "en": "PR Mileage does not expose a native installKit export. The pattern below is a helper you add to the dealership resource using official PR Mileage exports. It resets a brand-new vehicle and installs every factory component at 0 km."
        },
        "code": "-- server.lua da concessionária\nlocal FactoryKits = {\n    economy = {\n        { part = 'oleo_motor',         stage = 1 },\n        { part = 'filtro_oleo',        stage = 1 },\n        { part = 'filtro_ar',          stage = 1 },\n        { part = 'filtro_combustivel', stage = 1 },\n        { part = 'vela_ignicao',       stage = 1 },\n        { part = 'bobina_ignicao',     stage = 1 },\n        { part = 'correia_dentada',    stage = 1 },\n        { part = 'bomba_agua',         stage = 1 },\n        { part = 'tire_common',        stage = 1 },\n        { part = 'disco_freio',        stage = 1 },\n        { part = 'pastilha_freio',     stage = 1 },\n        { part = 'fluido_freio',       stage = 1 },\n    },\n\n    sport = {\n        { part = 'oleo_motor',      stage = 1 },\n        { part = 'filtro_oleo',     stage = 1 },\n        { part = 'filtro_ar',       stage = 1 },\n        { part = 'vela_ignicao',    stage = 1 },\n        { part = 'bobina_ignicao',  stage = 1 },\n        { part = 'tire_sport',      stage = 2 },\n        { part = 'brake_level_2',   stage = 2 },\n        { part = 'disco_freio',     stage = 2 },\n        { part = 'pastilha_freio',  stage = 2 },\n        { part = 'fluido_freio',    stage = 2 },\n    }\n}\n\nlocal function installFactoryKit(plate, kitName, ownerId)\n    local kit = FactoryKits[kitName]\n    if not kit then return false, 'invalid_kit' end\n\n    -- IMPORTANTE: a concessionária deve ter INSERTado a placa no banco antes.\n    exports['pr_mileage']:resetMileage(plate)\n\n    for _, entry in ipairs(kit) do\n        local ok = exports['pr_mileage']:installPart(\n            plate,\n            entry.part,\n            entry.stage or 1,\n            0,       -- veículo sai de fábrica em 0 km\n            ownerId\n        )\n\n        if not ok then\n            return false, entry.part\n        end\n    end\n\n    return true\nend"
      },
      {
        "id": "dealership-flow",
        "title": {
          "pt": "Fluxo completo de compra 0 KM",
          "en": "Complete zero-KM purchase flow"
        },
        "steps": {
          "pt": [
            "A concessionária gera/valida a placa.",
            "Salva o veículo e o proprietário na tabela do framework.",
            "Escolhe o kit de fábrica pela versão/modelo.",
            "Chama resetMileage(plate).",
            "Instala cada peça com installPart(..., installed_km = 0).",
            "Spawna a entity para o comprador.",
            "No client, chama markFresh(vehicle) ou TriggerEvent('pr_mileage:fresh', vehicle).",
            "O primeiro tick reconhece o veículo como fresh/owned, zera o odômetro e replica vehicleMileage = 0."
          ],
          "en": [
            "Dealership generates/validates the plate.",
            "Persist vehicle ownership in the framework table.",
            "Choose a factory kit by model/trim.",
            "Call resetMileage(plate).",
            "Install every part with installed_km = 0.",
            "Spawn the entity for the buyer.",
            "Client calls markFresh(vehicle) or pr_mileage:fresh.",
            "The first tick recognizes the fresh owned vehicle, resets odometer and replicates vehicleMileage = 0."
          ]
        },
        "code": "-- server após salvar a compra\nlocal ok, failedPart = installFactoryKit(newPlate, 'sport', buyerCitizenId)\nif not ok then\n    print(('Falha ao preparar kit: %s'):format(failedPart))\nend\n\n-- client quando a entity foi criada/entregue\nexports['pr_mileage']:markFresh(vehicle)"
      },
      {
        "id": "model-kits",
        "title": {
          "pt": "Kit diferente por modelo ou categoria",
          "en": "Kits by model or category"
        },
        "text": {
          "pt": "A concessionária pode mapear cada modelo para um pacote. Isso permite que um compacto saia com componentes comuns e um esportivo já nasça com pneu sport e freio de stage maior.",
          "en": "Dealerships can map each model to a package so compacts leave with common components while sports models ship with sport tyres and higher-stage brakes."
        },
        "code": "local ModelKit = {\n    blista = 'economy',\n    prairie = 'economy',\n    sultan = 'sport',\n    elegy = 'sport'\n}\n\nlocal kitName = ModelKit[vehicleModel] or 'economy'\nlocal ok, err = installFactoryKit(plate, kitName, buyerCitizenId)"
      },
      {
        "id": "used-car",
        "title": {
          "pt": "Concessionária de usados",
          "en": "Used-car dealership"
        },
        "text": {
          "pt": "Em carro usado, não zere o odômetro e não instale peça nova com installed_km = 0. Pegue o KM atual da placa e use esse valor para qualquer componente substituído no momento da venda. Assim um veículo de 120.000 km pode receber uma pastilha nova com 0 km de uso.",
          "en": "For used cars, do not reset mileage and do not install a new part with installed_km = 0. Read current plate mileage and use it for any component replaced at sale time, allowing a 120,000 km vehicle to receive a brand-new zero-wear brake pad."
        },
        "code": "local vehicleKm = exports['pr_mileage']:getMileageByPlate(plate)\nif vehicleKm == false then return end\n\n-- veículo tem 120.000 km, mas a peça começa nova AGORA\nexports['pr_mileage']:installPart(\n    plate,\n    'pastilha_freio',\n    1,\n    vehicleKm,\n    sellerOrMechanicId\n)"
      },
      {
        "id": "statebag-integration",
        "title": {
          "pt": "Integrando HUD, painel e telemetria",
          "en": "HUD/dashboard integration"
        },
        "text": {
          "pt": "vehicleMileage é o contrato mais barato para consumo em runtime. Outros scripts podem ler a State Bag da entity sem consultar SQL a cada frame. Os exports convertem para milhas quando Config.Unit = miles.",
          "en": "vehicleMileage is the cheapest runtime contract. Other resources can read the entity State Bag without querying SQL every frame. Exports convert to miles when Config.Unit = miles."
        },
        "code": "local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)\nif vehicle ~= 0 then\n    local rawKm = Entity(vehicle).state.vehicleMileage\n    local displayKm = exports['pr_mileage']:getMileageByEntity(vehicle)\n\n    SendNUIMessage({\n        action = 'odometer',\n        rawKilometers = rawKm,\n        displayValue = displayKm,\n        unit = exports['pr_mileage']:getUnit()\n    })\nend"
      },
      {
        "id": "external-parts",
        "title": {
          "pt": "Usando peças de outro resource",
          "en": "External parts provider"
        },
        "text": {
          "pt": "Se outro script já possui seu próprio banco/estado de peças, o PR Mileage pode consumir uma tabela externa apenas para calcular desgaste e aplicar sintomas. A chave do partName precisa corresponder a Parts.Items para herdar os sintomas.",
          "en": "If another resource already owns part persistence/state, PR Mileage can consume an external table only for wear calculations and symptoms. partName must match Parts.Items to inherit its symptom definition."
        },
        "code": "-- tabela estática\nexports['pr_mileage']:setExternalParts({\n    ['pastilha_freio'] = {\n        installed_km = 32000,\n        durability = 40000,\n        stage = 1\n    }\n})\n\n-- provider dinâmico\nexports['pr_mileage']:setExternalParts(function()\n    return MyMechanicState.parts\nend)\n\n-- desmontar integração\nexports['pr_mileage']:clearExternalParts()"
      },
      {
        "id": "handling-integration",
        "title": {
          "pt": "Convivendo com stance/handling externo",
          "en": "External stance/handling integration"
        },
        "text": {
          "pt": "config/func_exported.lua funciona como uma ponte para servidores que já possuem outro resource alterando RPM, handling, potência, torque ou suspensão. Cada função possui um boolean que permite trocar a implementação nativa por exports externos.",
          "en": "config/func_exported.lua acts as a bridge for servers already using another resource to modify RPM, handling, power, torque or suspension. Each function has a boolean that can switch from native behavior to external exports."
        },
        "table": {
          "headers": [
            "Hook",
            "Uso"
          ],
          "rows": [
            [
              "Exported.rpmOverride",
              "Substituir SetVehicleCurrentRpm"
            ],
            [
              "Exported.handlingFloat",
              "Substituir SetVehicleHandlingFloat"
            ],
            [
              "Exported.powerMult",
              "Substituir SetVehicleCheatPowerIncrease"
            ],
            [
              "Exported.torqueMult",
              "Substituir fDriveInertia"
            ],
            [
              "Exported.setOriginalHandling",
              "Restaurar o handling por outro resource"
            ],
            [
              "Exported.resetPartsInstalled",
              "Restaurar componentes/stance customizados"
            ]
          ]
        },
        "note": {
          "pt": "O arquivo atual já contém uma chamada de exemplo para pr_stance dentro de Exported.handlingFloat. Ao adaptar, mantenha somente a integração que realmente existe no seu servidor.",
          "en": "The current file already contains an example pr_stance call inside Exported.handlingFloat. When adapting it, keep only integrations that actually exist on your server."
        }
      },
      {
        "id": "scanner",
        "title": {
          "pt": "Scanner OBD / diagnóstico",
          "en": "OBD scanner / diagnostics"
        },
        "text": {
          "pt": "O repositório contém um módulo de scanner com DUI, prop, câmera, interação com bonnet, leitura de mileage e GetVehicleParts. Ele prepara labels, percentuais/status e telemetria como body health, engine health, fuel e velocidade teórica.",
          "en": "The repository contains a DUI scanner module with prop/camera interaction at the bonnet, mileage lookup and GetVehicleParts. It prepares labels, percentage/status and telemetry such as body health, engine health, fuel and theoretical top speed."
        },
        "cards": [
          [
            "DisplayMode",
            "progress mostra percentual; stats usa StatusLabels/StatusThresholds."
          ],
          [
            "ScanDuration",
            "Config.Scanner.ScanDuration controla a duração da animação/tela de loading."
          ],
          [
            "Blacklist",
            "Config.BacklistItemDesgaste remove peças específicas da lista diagnóstica."
          ],
          [
            "Targets",
            "Código do scanner tenta ox_target, depois qb-target e por fim interação [E]."
          ],
          [
            "DUI",
            "O resultado é desenhado em uma textura ligada ao prop do scanner."
          ],
          [
            "Telemetria",
            "Pode mostrar placa, modelo, body/engine health, fuel e top speed."
          ]
        ],
        "note": {
          "pt": "O fxmanifest.lua v2.3.2 atual não lista scanner/scanner.lua ou scanner/camera.lua em client_scripts. Portanto, os arquivos existem no repositório, mas não são carregados pelo manifest mostrado na main atual sem integração adicional.",
          "en": "Current v2.3.2 fxmanifest does not list scanner/scanner.lua or scanner/camera.lua in client_scripts. The source files exist, but they are not loaded by the current main manifest without additional integration."
        }
      },
      {
        "id": "server-api",
        "title": {
          "pt": "API server-side",
          "en": "Server-side API"
        },
        "table": {
          "headers": [
            "Export",
            "Uso"
          ],
          "rows": [
            [
              "getMileageByPlate(plate)",
              "Obtém o odômetro pela placa na unidade configurada."
            ],
            [
              "getMileageByEntity(entity)",
              "Lê vehicleMileage da State Bag da entity."
            ],
            [
              "getUnit() / GetUnit()",
              "Retorna kilometers ou miles."
            ],
            [
              "GetMileage(plate)",
              "Retorna mileage + unidade."
            ],
            [
              "plateExists(plate)",
              "Verifica se a placa pertence à tabela persistente."
            ],
            [
              "plateRegistered(plate)",
              "Verifica se há mileage conhecido em DB/RAM."
            ],
            [
              "resetMileage(plate)",
              "Zera odômetro em DB ou RAM."
            ],
            [
              "setMileage(plate, value)",
              "Define odômetro na unidade configurada."
            ],
            [
              "getTopMileage(limit)",
              "Ranking de maior quilometragem persistente."
            ],
            [
              "getPlayerVehiclesMileage(source|identifier)",
              "Lista veículos/KM do owner."
            ],
            [
              "getWorldVehicles()",
              "Snapshot dos veículos de rua em RAM."
            ],
            [
              "GetPartsPercent(plate, part, vehicleKm)",
              "Percentual restante da peça."
            ],
            [
              "GetPartsMileage(plate, part, vehicleKm)",
              "KM restantes da peça."
            ],
            [
              "GetPartsStatus(plate, part, vehicleKm)",
              "Boa/Razoável/Ruim."
            ],
            [
              "GetParts(plate, part, vehicleKm)",
              "Objeto completo da peça."
            ],
            [
              "GetVehicleParts(plate, vehicleKm)",
              "Todas as peças da placa."
            ],
            [
              "installPart(plate, part, stage, vehicleKm, citizenId)",
              "Instala/substitui peça."
            ],
            [
              "removePart(plate, part)",
              "Remove peça."
            ]
          ]
        }
      },
      {
        "id": "client-api",
        "title": {
          "pt": "API client-side",
          "en": "Client-side API"
        },
        "table": {
          "headers": [
            "Export",
            "Uso"
          ],
          "rows": [
            [
              "getMileage()",
              "KM do veículo que o player está dirigindo."
            ],
            [
              "getMileageByEntity(entity)",
              "Mileage de qualquer entity veículo local."
            ],
            [
              "getMileageByPlate(plate)",
              "Prioriza State Bag; fallback para callback server."
            ],
            [
              "GetMileage(plate)",
              "Alias que também retorna unidade."
            ],
            [
              "getVehiclePlate()",
              "Placa do veículo atual."
            ],
            [
              "getCurrentVehicle()",
              "Handle da entity atual."
            ],
            [
              "getVehicleClass()",
              "Classe numérica GTA."
            ],
            [
              "getVehicleClassName()",
              "Nome amigável da classe."
            ],
            [
              "isDriving()",
              "Confirma banco do motorista."
            ],
            [
              "isOwnedVehicle()",
              "Indica se a origem resolvida é persistente."
            ],
            [
              "markFresh(vehicle)",
              "Marca a entity como veículo 0 km."
            ],
            [
              "resetCurrentMileage()",
              "Zera veículo atual e sincroniza."
            ],
            [
              "GetPartsPercent(part)",
              "Percentual da peça carregada."
            ],
            [
              "GetPartsMileage(part)",
              "KM restantes."
            ],
            [
              "GetPartsStatus(part)",
              "Status da peça."
            ],
            [
              "GetParts(part)",
              "Info completa."
            ],
            [
              "GetVehicleParts()",
              "Todas as peças carregadas."
            ],
            [
              "installPart(part, stage, citizenId)",
              "Instala no veículo atual."
            ],
            [
              "removePart(part)",
              "Remove do veículo atual."
            ],
            [
              "reloadParts()",
              "Recarrega peças do banco."
            ],
            [
              "setExternalParts(source)",
              "Adiciona provider externo."
            ],
            [
              "clearExternalParts()",
              "Remove provider externo."
            ],
            [
              "getCurrentPlate()",
              "Placa rastreada pelo módulo de peças."
            ],
            [
              "startWearEffects(callback)",
              "Usa um estado externo no motor de sintomas."
            ],
            [
              "stopWearEffects()",
              "Interrompe efeitos externos."
            ],
            [
              "applyEffect(type, params, partName)",
              "Aplica um effect manualmente."
            ],
            [
              "stopPartParticle(partName)",
              "Para partícula de uma peça."
            ],
            [
              "getPartDefinition(partName)",
              "Retorna Parts.Items[partName]."
            ],
            [
              "getAllParts()",
              "Retorna o catálogo completo."
            ]
          ]
        }
      },
      {
        "id": "part-object",
        "title": {
          "pt": "Objeto retornado por GetParts",
          "en": "GetParts return object"
        },
        "code": "{\n    id = 42,\n    plate = 'ABC1234',\n    part = 'pastilha_freio',\n    stage = 1,\n    installed_km = 60000,\n    durability = 40000,\n    current_km = 20000,\n    remaining_km = 20000,\n    percent = 50.0,\n    status = 'Razoável',\n    citizen_id = 'installer-id',\n    installed_at = '2026-10-13 12:30:00'\n}"
      },
      {
        "id": "commands",
        "title": {
          "pt": "Comandos de teste e manutenção",
          "en": "Test & maintenance commands"
        },
        "table": {
          "headers": [
            "Comando",
            "Objetivo"
          ],
          "rows": [
            [
              "/km",
              "Mostra o mileage do veículo atual."
            ],
            [
              "/kmplaca [placa]",
              "Consulta uma placa."
            ],
            [
              "/installpeca [nome] [stage]",
              "Instala peça no veículo atual para teste/manutenção."
            ],
            [
              "/removepeca [nome]",
              "Remove uma peça."
            ],
            [
              "/reloadpecas",
              "Recarrega peças persistidas."
            ],
            [
              "/pecas",
              "Lista estado das peças carregadas."
            ],
            [
              "/givescanner / /scantest / /scanstop",
              "Ferramentas presentes no módulo scanner."
            ]
          ]
        }
      },
      {
        "id": "performance",
        "title": {
          "pt": "Performance e boas práticas",
          "en": "Performance & best practices"
        },
        "text": {
          "pt": "A arquitetura evita loops pesados e escrita contínua de cada peça. O odômetro amostra 1 vez por segundo; WearConfig.TickInterval é 5000 ms; State Bags servem leituras em runtime; current_km é derivado; e efeitos são limpos/restaurados ao trocar de veículo ou quando deixam de ser aplicáveis.",
          "en": "The architecture avoids heavy loops and constant per-part writes. Odometer samples once per second; WearConfig.TickInterval is 5000 ms; State Bags serve runtime reads; current_km is derived; and effects are cleaned/restored when switching vehicles or when no longer applicable."
        },
        "cards": [
          [
            "1 s",
            "Tick do odômetro apenas quando há veículo/motorista válido."
          ],
          [
            "5 s",
            "Tick padrão do motor de desgaste."
          ],
          [
            "1 km",
            "SaveThreshold padrão para mileage server-side."
          ],
          [
            "Derived state",
            "current_km e remaining_km são calculados, não persistidos a cada tick."
          ],
          [
            "State Bag",
            "Outros scripts leem mileage sem abrir SQL por frame."
          ],
          [
            "Cleanup",
            "Partículas, shake e handling são restaurados no ciclo de limpeza."
          ]
        ]
      }
    ]
  },
  pr_carkeys: {
    name:'PR Car Keys',code:'pr_carkeys',repo:'https://github.com/Pierremoraes-ofc/pr_carkeys',
    category:{pt:'Hobby • Vehicle Access',en:'Hobby • Vehicle Access'},
    lead:{pt:'Sistema de chaves veiculares físicas com barcode único por via, tipos permanentes/temporários, bolsas, ignição, hotwire, carjack, expiração e validação server-side, usando DB para persistência e State Bags para sincronização de estado do veículo.',en:'Physical vehicle-key system with per-copy unique barcodes, permanent/temporary types, bags, ignition, hotwire, carjack, expiration and server-side validation, using DB persistence and State Bags for vehicle-state sync.'},
    facts:[['Version','1.3.1'],['Integration','PR Bridge'],['Identity','Unique barcode'],['Runtime','DB + State Bags']],
    sections:[
      {id:'keys',title:{pt:'Modelo de chaves',en:'Key model'},cards:[['carkey_permanent','Chave original permanente.'],['carkey_copy','Cópia permanente com barcode próprio.'],['carkey_temp','Chave/acesso temporário.'],['carkey_single','Chave temporizada com expires_at.']]},
      {id:'metadata',title:{pt:'Metadata física',en:'Physical metadata'},text:{pt:'Cada item pode carregar barcode, plate, modelo, code, sound, motor, distance, expires_at e owner. O barcode identifica a via física específica mesmo quando várias chaves apontam para a mesma placa.',en:'Each item can carry barcode, plate, model, code, sound, motor, distance, expires_at and owner. Barcode identifies a specific physical copy even when multiple keys target the same plate.'}},
      {id:'ignition',title:{pt:'Chave na ignição',en:'Key in ignition'},text:{pt:'Ao ligar o motor, a chave pode sair do inventário/bolsa e ficar registrada na ignição. Quando o motor é desligado ela é reconstruída com a mesma metadata e devolvida, evitando duplicação.',en:'When engine starts, the key can leave inventory/bag and live in the ignition registry. When engine stops it is rebuilt with the same metadata and returned, avoiding duplication.'}},
      {id:'bags',title:{pt:'Bolsas de chaves',en:'Key bags'},cards:[['carkey_bag','10 slots; container individual por barcode.'],['carkey_bag_large','25 slots; container maior, também identificado por barcode.']]},
      {id:'hotwire',title:{pt:'Hotwire seguro',en:'Secure hotwire'},text:{pt:'O servidor cria uma sessão vinculada a source + netId + plate. O client executa o minigame e devolve o token; só então o servidor revalida contexto e concede acesso temporário.',en:'Server creates a session bound to source + netId + plate. Client runs the minigame and returns the token; server then revalidates context before granting temporary access.'},code:`driver seat
  ↓
request session
  ↓
source + netId + plate + token
  ↓
PR Bridge minigame
  ↓
server revalidation
  ↓
temporary access`},
      {id:'carjack',title:{pt:'Carjack de NPC',en:'NPC carjack'},text:{pt:'O fluxo considera mira, arma/classe, reação do NPC, fuga, busca da chave, tempo e cooldown. O resultado pode ser acesso temporário ou permanente conforme configuração.',en:'Flow considers aim, weapon/class, NPC reaction, fleeing, key search, timing and cooldown. Result can be temporary or permanent access depending on configuration.'}},
      {id:'expiration',title:{pt:'Expiração',en:'Expiration'},text:{pt:'Chaves temporizadas vencidas são removidas do inventário, bolsas e ignição. Se a chave expirada estiver mantendo acesso de ignição, o estado relacionado é limpo e o motor pode ser forçado a desligar.',en:'Expired timed keys are removed from inventory, bags and ignition. If an expired key is sustaining ignition access, related state is cleared and engine may be forced off.'}},
      {id:'api',title:{pt:'API',en:'API'},bullets:{pt:['BuyOriginalKey / CopyKey','GiveTempKey / RemoveTempKey','CreateTempKeyItem / CreateTimedKeyItem','RemoveKeysForOwnerPlate','HasVehicleAccess / IsPlayerPolice','SetLockState / GiveKeys / GetKeys','Client: HaveKey / HavePermanentKey / HaveTempKey'],en:['BuyOriginalKey / CopyKey','GiveTempKey / RemoveTempKey','CreateTempKeyItem / CreateTimedKeyItem','RemoveKeysForOwnerPlate','HasVehicleAccess / IsPlayerPolice','SetLockState / GiveKeys / GetKeys','Client: HaveKey / HavePermanentKey / HaveTempKey']}}
    ]
  },

  pr_3dsound: {
    name:'PR 3D Sound',code:'pr_3dsound',repo:'https://github.com/Pierremoraes-ofc/pr_3dsound',
    category:{pt:'Hobby • Spatial Audio',en:'Hobby • Spatial Audio'},
    lead:{pt:'Engine de áudio espacial para FiveM com emitters persistentes, URLs e arquivos locais, reprodução 2D/3D, attach em entities, streaming por proximidade, sincronização autoritativa, HRTF quando CORS permite e oclusão acústica.',en:'Spatial-audio engine for FiveM with persistent emitters, URLs/local files, 2D/3D playback, entity attachment, proximity streaming, authoritative synchronization, HRTF where CORS permits and acoustic occlusion.'},
    facts:[['Version','4.0.0'],['Spatial','HRTF / PannerNode'],['Streaming','Proximity'],['Native','GTA sound bridge']],
    sections:[
      {id:'sources',title:{pt:'Fontes de áudio',en:'Audio sources'},text:{pt:'Suporta arquivos locais, URLs diretas HTTP(S), YouTube/SoundCloud via player compatível e sons nativos GTA em camada separada. URLs diretas podem entrar na cadeia WebAudio quando CORS permite.',en:'Supports local files, direct HTTP(S) URLs, YouTube/SoundCloud through compatible players and GTA native audio through a separate layer. Direct URLs can enter the WebAudio chain when CORS allows.'}},
      {id:'hrtf',title:{pt:'HRTF real',en:'Real HRTF'},code:`HTMLAudioElement
  → MediaElementSource
  → PannerNode(HRTF)
  → Low-pass
  → Gain`,text:{pt:'Quando a origem permite WebAudio/CORS, o PannerNode executa espacialização HRTF. Em fallback HTML5/Howler ainda há distância e oclusão, mas sem HRTF real.',en:'When origin allows WebAudio/CORS, PannerNode performs HRTF spatialization. HTML5/Howler fallback still provides distance/occlusion but not true HRTF.'}},
      {id:'streaming',title:{pt:'Emitters persistentes',en:'Persistent emitters'},text:{pt:'Emitters server-side mantêm startedAt, seekBase, paused, pausedOffset, volume, radius, loop e destino. Jogadores que entram no raio depois recebem o timestamp correto em vez de reiniciar o áudio.',en:'Server emitters retain startedAt, seekBase, paused, pausedOffset, volume, radius, loop and destination. Players entering radius later receive correct timestamp instead of restarting audio.'}},
      {id:'attach',title:{pt:'Attach em entities',en:'Entity attachment'},text:{pt:'Um emitter pode acompanhar veículo, objeto ou ped usando Network ID. O client tenta resolver a entity novamente quando ela ainda não está streamada. O fluxo respeita routing bucket quando disponível.',en:'An emitter can follow vehicle, object or ped using Network ID. Client retries entity resolution when not yet streamed. Flow respects routing buckets when available.'}},
      {id:'occlusion',title:{pt:'Oclusão acústica',en:'Acoustic occlusion'},text:{pt:'Raycasts e heurísticas de veículos/interiores reduzem volume e, em URLs WebAudio diretas, também aplicam low-pass real. Estado de portas/janelas, veículos fechados e transições MLO participam do cálculo.',en:'Raycasts plus vehicle/interior heuristics attenuate volume and, for direct WebAudio URLs, apply a real low-pass filter. Door/window state, closed vehicles and MLO transitions participate in the result.'}},
      {id:'server-api',title:{pt:'Exports server-side',en:'Server exports'},bullets:{pt:['Play / PlayUrl / PlayUrlPos / PlayUrlAttached','AttachToEntity / DetachEntity / UpdateCoords','Pause / Resume / Stop / StopAll','SetVolume / SetVolumeMax / SetDistance / SetLoop / SetTimestamp','FadeIn / FadeOut','SoundExists / GetAllSounds'],en:['Play / PlayUrl / PlayUrlPos / PlayUrlAttached','AttachToEntity / DetachEntity / UpdateCoords','Pause / Resume / Stop / StopAll','SetVolume / SetVolumeMax / SetDistance / SetLoop / SetTimestamp','FadeIn / FadeOut','SoundExists / GetAllSounds']}},
      {id:'client-api',title:{pt:'Exports client-side',en:'Client exports'},bullets:{pt:['PlayLocal / PlayLocal2D','PlayUrl2D / PlayUrl3D / PlayAttached','Pause / Resume / Stop','SetVolume / SetDistance','FadeIn / FadeOut','SoundExists / IsPlaying / IsPaused / GetInfo / GetAllSounds'],en:['PlayLocal / PlayLocal2D','PlayUrl2D / PlayUrl3D / PlayAttached','Pause / Resume / Stop','SetVolume / SetDistance','FadeIn / FadeOut','SoundExists / IsPlaying / IsPaused / GetInfo / GetAllSounds']}},
      {id:'security',title:{pt:'Segurança e controle compartilhado',en:'Security & shared control'},text:{pt:'Eventos client→server de controle são bloqueados por padrão. Controle compartilhado deve preferir exports server-side; eventos autorizados podem ser liberados por convar/ACE. URLs e caminhos locais passam por validações de formato/tamanho.',en:'Client→server control events are blocked by default. Shared control should prefer server exports; authorized event control can be enabled through convar/ACE. URLs and local paths are validated for format/size.'}}
    ]
  },

  pr_elevator: {
    name:'PR Elevator',code:'pr_elevator',repo:'https://github.com/Pierremoraes-ofc/pr_elevator',
    category:{pt:'Hobby • World Interaction',en:'Hobby • World Interaction'},
    lead:{pt:'Sistema de elevadores e controle de acesso com painéis físicos DUI, criação in-game, permissões por andar, cartões, senhas, grupos, character IDs e integração completa com PR Bridge.',en:'Elevator and access-control system with physical DUI panels, in-game creation, per-floor permissions, keycards, passwords, groups, character IDs and PR Bridge integration.'},
    facts:[['Version','1.1.2'],['Dependency','PR Bridge'],['Persistence','MariaDB'],['Locales','PT / EN / ES / FR']],
    sections:[
      {id:'overview',title:{pt:'Elevador físico',en:'Physical elevator'},text:{pt:'Cada elevador é uma entidade persistente com andares independentes. Cada andar possui destino, código, ordem, posição física do painel, metadata visual, distância de interação e sua própria política de acesso.',en:'Each elevator is a persistent entity with independent floors. Every floor stores destination, code, order, physical panel placement, visual metadata, interaction distance and its own access policy.'}},
      {id:'creator',title:{pt:'Fluxo de criação',en:'Creation workflow'},bullets:{pt:['Crie o elevador pai e nomeie-o.','Em cada andar, capture posição/heading de destino.','Posicione o keypad físico usando gizmo do PR Bridge.','Configure código, ordem, distância, cores e política de acesso.','Alterações disparam refresh para reconstruir o runtime.'],en:['Create and name the parent elevator.','Capture destination position/heading per floor.','Place physical keypad using PR Bridge gizmo.','Configure code, order, distance, colors and access policy.','Changes broadcast refresh to rebuild runtime.']}},
      {id:'access',title:{pt:'Controle de acesso por andar',en:'Per-floor access control'},cards:[['Public','Sem restrição.'],['Job / gang','Grupo configurado + grade mínima.'],['Citizen ID','Lista de identificadores de personagem.'],['Keycard','Item/metadado de cartão exigido.'],['Password','Senha validada server-side.'],['Combined','job_keycard, job_password e job_citizenid.']]},
      {id:'dui',title:{pt:'Keypad DUI',en:'DUI keypad'},text:{pt:'O sistema cria uma textura browser-driven para o keypad físico, controla câmera/foco, detecta botões, reproduz feedback e apresenta estados como CHECKING, ERROR, SUCCESS, andar inválido e senha incorreta.',en:'System creates a browser-driven texture for the physical keypad, controls camera/focus, detects buttons, provides feedback and exposes CHECKING, ERROR, SUCCESS, invalid floor and invalid password states.'}},
      {id:'interaction',title:{pt:'Target e Interact',en:'Target & Interact'},text:{pt:'Runtime pode usar Target, Interact ou ambos via PR Bridge. Preferências incluem respeito a paredes/LOS, offset frontal do painel e distância. Um fallback de proximidade pode operar quando o provider/registro não está disponível.',en:'Runtime can use Target, Interact or both through PR Bridge. Preferences include wall/LOS behavior, front offset and distance. A proximity fallback can operate when provider/registration is unavailable.'}},
      {id:'database',title:{pt:'Banco e migrations',en:'Database & migrations'},text:{pt:'Duas tabelas principais armazenam elevadores e andares. Startup cria/migra schema, adiciona campos modernos de acesso e pode migrar restrições antigas do nível do elevador para os andares.',en:'Two main tables store elevators and floors. Startup creates/migrates schema, adds modern access fields and can migrate older elevator-level restrictions into floor records.'},code:`pr_elevator_elevator
  └─ parent / name / legacy access

pr_elevator_floor
  └─ code / order / distance
  └─ destination / interact_coords
  └─ colors / access policy`},
      {id:'exports',title:{pt:'Exports',en:'Exports'},bullets:{pt:['OpenCreatorMenu / OpenCreateElevatorMenu','OpenCreateFloorMenu / OpenCreateKeycardMenu','CreateDUI / CreateKeypad','CreateKeypadFromInteract / OpenKeypadEntity','DeleteKeypad'],en:['OpenCreatorMenu / OpenCreateElevatorMenu','OpenCreateFloorMenu / OpenCreateKeycardMenu','CreateDUI / CreateKeypad','CreateKeypadFromInteract / OpenKeypadEntity','DeleteKeypad']}},
      {id:'diagnostics',title:{pt:'Diagnóstico',en:'Diagnostics'},bullets:{pt:['prelevator_refresh','prelevator_dui_status','prelevator_dui_preview','prelevator_dui_reset','createkeypad / testkeypad'],en:['prelevator_refresh','prelevator_dui_status','prelevator_dui_preview','prelevator_dui_reset','createkeypad / testkeypad']}}
    ]
  }
};
