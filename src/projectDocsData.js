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
    name:'PR Mileage',code:'pr_mileage',repo:'https://github.com/Pierremoraes-ofc/pr_mileage',
    category:{pt:'Hobby • Vehicle Simulation',en:'Hobby • Vehicle Simulation'},
    lead:{pt:'Simulador de odômetro e desgaste mecânico para FiveM. Persiste quilometragem, replica vehicleMileage por State Bag e transforma peças instaladas em componentes com vida útil, histórico, sintomas e impacto físico.',en:'FiveM odometer and mechanical-wear simulator. It persists mileage, replicates vehicleMileage through State Bags and turns installed parts into components with service life, history, symptoms and physical impact.'},
    facts:[['Version','2.3.2'],['Parts','62'],['Wear effects','16'],['Runtime','DB + State Bags']],
    sections:[
      {id:'odometer',title:{pt:'Odômetro real',en:'Real odometer'},text:{pt:'A quilometragem é derivada da distância entre posições sucessivas do veículo, com amostragem moderada e condições físicas para evitar falsos incrementos. O valor é persistido para veículos registrados e replicado na entity.',en:'Mileage is derived from distance between successive vehicle positions, sampled at a moderate interval with physical guards. It is persisted for registered vehicles and replicated on the entity.'},code:`local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
local km = Entity(vehicle).state.vehicleMileage

-- API
local displayed = exports['pr_mileage']:getMileage()`},
      {id:'wear',title:{pt:'Matemática de desgaste',en:'Wear math'},code:`current_km   = floor(vehicle_km) - floor(installed_km)
remaining_km = max(durability - current_km, 0)
percent      = (remaining_km / durability) * 100`,text:{pt:'A peça envelhece pela quilometragem percorrida desde a instalação. Substituir a peça grava um novo installed_km e sorteia uma nova durabilidade dentro da faixa definida.',en:'A part ages from mileage traveled since installation. Replacing it records a new installed_km and rolls new durability within its configured range.'}},
      {id:'parts',title:{pt:'Peças e sintomas',en:'Parts & symptoms'},cards:[['Engine','Óleo, filtros, ignição, correias, bombas e sensores.'],['Cooling','Bomba d’água, mangueiras e falhas com vapor/saúde do motor.'],['Suspension','Amortecedor, mola, buchas, braços, pivôs e estabilizadora.'],['Tyres','Perfis common, street, sport, race, semislick, slick, drift e touring.'],['Brakes','Discos, pastilhas, fluido e stages de performance.'],['Sensors','MAF, MAP, IAT, TPS, APP, CKP, CMP, O2, EGT e outros.']]},
      {id:'create-part',title:{pt:'Criando uma peça',en:'Creating a part'},code:`Parts.Items['pastilha_ceramica_custom'] = {
    labelItem = 'Pastilha Cerâmica Custom',
    durability = { min = 28000, max = 42000 },
    symptoms = {
        {
            threshold = 0.25,
            label = 'Frenagem perdendo eficiência',
            effects = {
                { type = 'handling_float', params = {
                    field = 'fBrakeForce',
                    value = 0.52,
                    speed = 10
                }}
            }
        }
    }
}`},
      {id:'effects',title:{pt:'Motor de efeitos',en:'Effects engine'},bullets:{pt:['particle','shake_cam','apply_force','engine_health','undriveable','engine_on','stall','tyre_burst','vehicle_lights','indicator','rpm_override','steering_scale','lateral_force','handling_float','power_mult','torque_mult'],en:['particle','shake_cam','apply_force','engine_health','undriveable','engine_on','stall','tyre_burst','vehicle_lights','indicator','rpm_override','steering_scale','lateral_force','handling_float','power_mult','torque_mult']}},
      {id:'dealership',title:{pt:'Concessionária e peças de fábrica',en:'Dealership & factory parts'},text:{pt:'Após registrar a propriedade do veículo, zere o odômetro, instale o pacote de peças com installed_km=0 e marque a entity como fresh quando ela for entregue ao comprador.',en:'After persisting ownership, reset mileage, install the factory parts with installed_km=0 and mark the entity fresh when delivered.'},code:`exports['pr_mileage']:resetMileage(plate)

for _, part in ipairs(FACTORY_PARTS) do
    exports['pr_mileage']:installPart(
        plate, part.name, part.stage, 0, ownerId
    )
end

-- client, after spawn
exports['pr_mileage']:markFresh(vehicle)`},
      {id:'used-cars',title:{pt:'Veículos usados',en:'Used vehicles'},text:{pt:'Ao instalar uma peça nova em um carro usado, passe o odômetro atual como installed_km. Assim uma peça nova em um carro de 120.000 km nasce com 0 km de desgaste, e não com 120.000 km.',en:'When fitting a new component to a used vehicle, pass current odometer as installed_km. A new part on a 120,000 km car then starts with 0 km wear rather than inheriting 120,000 km.'}},
      {id:'api',title:{pt:'API principal',en:'Main API'},bullets:{pt:['getMileage / getMileageByEntity / getMileageByPlate','resetMileage / setMileage','GetVehicleParts / GetParts / GetPartsStatus','installPart / removePart / reloadParts','setExternalParts / clearExternalParts','markFresh'],en:['getMileage / getMileageByEntity / getMileageByPlate','resetMileage / setMileage','GetVehicleParts / GetParts / GetPartsStatus','installPart / removePart / reloadParts','setExternalParts / clearExternalParts','markFresh']}}
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
