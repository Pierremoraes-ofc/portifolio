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
    "name": "PR Car Keys",
    "code": "pr_carkeys",
    "repo": "https://github.com/Pierremoraes-ofc/pr_carkeys",
    "category": {
      "pt": "Hobby • Vehicle Access & Keys",
      "en": "Hobby • Vehicle Access & Keys"
    },
    "lead": {
      "pt": "Sistema físico e persistente de chaves veiculares para FiveM, com identidade individual por barcode, tipos de chave permanentes e temporários, bolsas, ignição real, hotwire, carjack, confisco policial, expiração automática, som 3D, bloqueio de portas e validação server-side. O banco persiste a configuração de cada chave e State Bags sincronizam estados do veículo em runtime.",
      "en": "Physical and persistent vehicle-key system for FiveM with per-key barcode identity, permanent and temporary key types, key bags, real ignition flow, hotwire, carjack, police seizure, automatic expiration, 3D lock audio, door-lock control and server-side validation. Database rows persist each key configuration while State Bags synchronize vehicle runtime state."
    },
    "facts": [
      [
        "Version",
        "1.3.1"
      ],
      [
        "Key types",
        "4"
      ],
      [
        "Bags",
        "10 / 25 slots"
      ],
      [
        "Frameworks",
        "QB / QBX / ESX / ox_core / ND"
      ],
      [
        "Inventories",
        "ox_inventory / qb-inventory"
      ],
      [
        "Databases",
        "oxmysql / ghmattimysql / mysql-async"
      ],
      [
        "Runtime",
        "DB + State Bags"
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
          "pt": "PR Car Keys trata cada chave como um objeto físico independente. Duas chaves da mesma placa podem ter barcodes, alcance, som, configuração de motor, tipo e expiração diferentes. O acesso a um veículo é determinado pela chave física, chaves temporárias registradas, chave deixada na ignição e regras operacionais como acesso policial.",
          "en": "PR Car Keys treats each key as an independent physical object. Two keys for the same plate can have different barcodes, range, lock sound, engine behavior, type and expiration. Vehicle access is determined by physical keys, registered temporary access, keys left in ignition and operational rules such as police access."
        },
        "cards": [
          [
            "Barcode único",
            "Cada via física possui um identificador próprio; cópias da mesma placa continuam sendo objetos distintos."
          ],
          [
            "Persistência",
            "A tabela pr_carkeys armazena configuração individual de cada barcode."
          ],
          [
            "Runtime seguro",
            "Validação de acesso ao banco do motorista e ao motor é feita server-side."
          ],
          [
            "Ignition state",
            "A chave pode sair do inventário e ficar fisicamente registrada no veículo enquanto o motor permanece ligado."
          ],
          [
            "Bolsas",
            "Chaves podem viver em stashes individuais de bolsas sem perder barcode/configuração."
          ],
          [
            "Gameplay",
            "Hotwire, carjack e confisco policial integram acesso temporário, animações e minigames."
          ]
        ]
      },
      {
        "id": "architecture",
        "title": {
          "pt": "Arquitetura",
          "en": "Architecture"
        },
        "text": {
          "pt": "O sistema separa persistência de chaves, estado temporário de acesso e estado da entity. O banco guarda identidade/configuração; estruturas server-side mantêm chaves temporárias e ignição; o client mantém um cache local de acesso e reage aos estados replicados do veículo.",
          "en": "The system separates persistent key data, temporary access and entity state. The database stores identity/configuration; server-side structures track temporary keys and ignition; the client keeps local access cache and reacts to replicated vehicle state."
        },
        "code": "ITEM / BAG\n   ↓ barcode\npr_carkeys table\n   ↓\nserver cache + validation\n   ↓\nTempKeys / VehiclesWithKeyInside\n   ↓\nclient VehicleState\n   ↓\nlock / engine / hotwire / carjack\n   ↓\nState Bags (ex.: doorslockstate / rev states)"
      },
      {
        "id": "installation",
        "title": {
          "pt": "Instalação e providers",
          "en": "Installation & providers"
        },
        "text": {
          "pt": "O fxmanifest importa @pr_bridge/init.lua e mantém ox_lib opcional/recomendado para menus, progressbars e minigames. Framework, SQL e inventory podem ser detectados automaticamente ou forçados no config.",
          "en": "The fxmanifest imports @pr_bridge/init.lua and keeps ox_lib optional/recommended for menus, progress bars and minigames. Framework, SQL and inventory providers can be auto-detected or forced in config."
        },
        "table": {
          "headers": [
            "Camada",
            "Valores suportados/configuráveis"
          ],
          "rows": [
            [
              "Framework",
              "auto, qb-core, qbx_core/qbx-core, es_extended, ox_core, ND_Core"
            ],
            [
              "Inventory",
              "auto, ox_inventory, qb-inventory"
            ],
            [
              "SQL",
              "auto, oxmysql, ghmattimysql, mysql-async"
            ],
            [
              "UI/minigame",
              "ox_lib opcional/recomendado"
            ],
            [
              "3D audio",
              "pr_3dsound opcional"
            ]
          ]
        },
        "code": "ensure pr_bridge\nensure pr_carkeys\n\n-- Config\nConfig.Framework = 'auto'\nConfig.Inventory = 'auto'\nConfig.SQL = 'auto'"
      },
      {
        "id": "database",
        "title": {
          "pt": "Banco de dados",
          "en": "Database"
        },
        "text": {
          "pt": "Cada barcode ocupa uma linha em pr_carkeys. Isso significa que configuração e expiração pertencem à chave específica e não apenas ao veículo.",
          "en": "Each barcode occupies one row in pr_carkeys. Configuration and expiration therefore belong to the specific key rather than only to the vehicle."
        },
        "table": {
          "headers": [
            "Campo",
            "Função"
          ],
          "rows": [
            [
              "barcode",
              "Identidade única da via física."
            ],
            [
              "citizenid",
              "Dono/portador associado no registro."
            ],
            [
              "plate",
              "Veículo associado."
            ],
            [
              "key_type",
              "permanent, temporary ou single_use."
            ],
            [
              "sound",
              "Som configurado para lock/unlock."
            ],
            [
              "motor",
              "Se destrancar deve ligar o motor."
            ],
            [
              "level",
              "original ou copy."
            ],
            [
              "distance",
              "Alcance do sinal da chave."
            ],
            [
              "expires_at",
              "Timestamp de expiração quando aplicável."
            ],
            [
              "created_at",
              "Data de criação."
            ]
          ]
        }
      },
      {
        "id": "key-types",
        "title": {
          "pt": "Tipos de chave",
          "en": "Key types"
        },
        "text": {
          "pt": "Config.KeyTypes define quatro itens físicos. keyType representa o comportamento de persistência e level diferencia original de cópia.",
          "en": "Config.KeyTypes defines four physical items. keyType represents persistence behavior while level distinguishes original from copy."
        },
        "table": {
          "headers": [
            "Item",
            "Tipo",
            "Nível",
            "Uso"
          ],
          "rows": [
            [
              "carkey_permanent",
              "permanent",
              "original",
              "Chave original permanente."
            ],
            [
              "carkey_copy",
              "permanent",
              "copy",
              "Cópia permanente de uma chave existente."
            ],
            [
              "carkey_temp",
              "temporary",
              "copy",
              "Chave temporária com expiração opcional."
            ],
            [
              "carkey_single",
              "single_use",
              "copy",
              "Chave avulsa/single-use conforme fluxo configurado."
            ]
          ]
        }
      },
      {
        "id": "metadata",
        "title": {
          "pt": "Metadata e identidade física",
          "en": "Physical metadata & identity"
        },
        "text": {
          "pt": "A metadata do item carrega o barcode e dados usados para apresentação/lookup. O barcode é o elo entre item, banco e configurações da chave. Essa modelagem permite duas cópias da mesma placa com comportamentos diferentes.",
          "en": "Item metadata carries the barcode plus presentation/lookup data. Barcode links inventory item, database row and key configuration. This model allows two copies for the same plate to behave differently."
        },
        "code": "metadata = {\n    barcode = 'K3Y9A8C2...',\n    plate = 'ABC1234',\n    label = 'Placa: ABC1234\\nTipo: permanent\\nSerial: K3Y9A8C2...',\n    owner = 'Citizen Name' -- quando showOwner estiver habilitado\n}"
      },
      {
        "id": "key-config",
        "title": {
          "pt": "Configuração individual da chave",
          "en": "Per-key configuration"
        },
        "text": {
          "pt": "As propriedades sound, motor e distance são editáveis individualmente por barcode. O servidor usa whitelist de campos para impedir edição arbitrária da row.",
          "en": "sound, motor and distance are editable per barcode. Server-side field whitelisting prevents arbitrary database-field edits."
        },
        "table": {
          "headers": [
            "Campo",
            "Exemplo",
            "Efeito"
          ],
          "rows": [
            [
              "sound",
              "tranca_1",
              "Seleciona o som usado ao acionar a chave."
            ],
            [
              "motor",
              "0 / 1",
              "Pode ligar o motor automaticamente ao destrancar."
            ],
            [
              "distance",
              "8.0",
              "Define até onde a chave encontra/aciona o veículo."
            ]
          ]
        }
      },
      {
        "id": "key-menu",
        "title": {
          "pt": "Menu de configuração da chave",
          "en": "Key configuration menu"
        },
        "text": {
          "pt": "client/cl_menu.lua monta um contexto por barcode. A tela exibe informações da chave e permite trocar som, ativar/desativar motor ao destrancar e alterar distância sem recriar a chave.",
          "en": "client/cl_menu.lua builds one context per barcode. It displays key information and lets users change sound, toggle engine-on-unlock and change range without recreating the key."
        },
        "code": "-- fluxo conceitual\nBolsa / item\n   ↓\nGerenciar chave\n   ↓\npr_carkeys_key_<barcode>\n   ├─ Som\n   ├─ Motor ao destrancar\n   ├─ Distância\n   └─ Registro / barcode"
      },
      {
        "id": "sound-config",
        "title": {
          "pt": "Som de tranca 3D",
          "en": "3D lock audio"
        },
        "text": {
          "pt": "Quando pr_3dsound está iniciado, o lock/unlock pode tocar um som server-side audível por players próximos. Config.Sound define raio, volume, som padrão e lista de arquivos.",
          "en": "When pr_3dsound is running, lock/unlock can play server-side audio heard by nearby players. Config.Sound defines radius, volume, default sound and available files."
        },
        "code": "Config.Sound = {\n    radius = 8.0,\n    volume = 0.8,\n    soundDefault = 'tranca_1',\n    sounds = {\n        { id = 'tranca_1', label = 'Som Padrao', file = 'tranca_1.ogg' },\n        { id = 'tranca_2', label = 'Som Alternativo', file = 'tranca_2.ogg' }\n    }\n}\n\n-- arquivos esperados pelo pr_3dsound:\n-- pr_3dsound/html/sounds/pr_carkeys/tranca_1.ogg"
      },
      {
        "id": "lock-flow",
        "title": {
          "pt": "Fluxo de trancar/destrancar",
          "en": "Lock/unlock flow"
        },
        "text": {
          "pt": "Ao usar uma chave, o client envia barcode e referência do veículo; o servidor valida a row/expiração, resolve os dados da chave e devolve a configuração efetiva. O client encontra o veículo dentro da distância da chave, toca animação, altera locks e sincroniza o estado.",
          "en": "When a key is used, the client sends barcode and vehicle reference; the server validates the row/expiration, resolves key data and returns effective configuration. The client finds the vehicle within key range, plays the animation, changes locks and synchronizes state."
        },
        "steps": {
          "pt": [
            "Item contém barcode.",
            "Client encontra o veículo pela plate dentro da distância padrão.",
            "Server busca o barcode no cache/banco.",
            "Server rejeita chave expirada.",
            "Server devolve plate, distance, sound, motor e key_type.",
            "Client aplica animação e alterna lock state.",
            "Estado é sincronizado server-side e doorslockstate é replicado.",
            "pr_3dsound toca o feedback quando disponível."
          ],
          "en": [
            "Inventory item contains barcode.",
            "Client finds vehicle by plate within default range.",
            "Server resolves barcode from cache/database.",
            "Expired keys are rejected.",
            "Server returns plate, distance, sound, motor and key_type.",
            "Client plays key animation and toggles door locks.",
            "Server synchronizes state and replicates doorslockstate.",
            "pr_3dsound plays feedback when available."
          ]
        }
      },
      {
        "id": "statebags",
        "title": {
          "pt": "State Bags e sincronização",
          "en": "State Bags & synchronization"
        },
        "text": {
          "pt": "A persistência da chave não é feita em cache apenas. DB guarda a chave; State Bags carregam estados runtime do veículo, como doorslockstate e estados temporários usados no efeito de rev/skip ped. Isso separa persistência de identidade da sincronização da entity.",
          "en": "Key persistence is not cache-only. Database stores the key while State Bags carry vehicle runtime state such as doorslockstate and temporary rev/skip-ped states. This separates persistent identity from entity synchronization."
        },
        "code": "-- Exemplo utilizado pelo resource\nSetVehicleDoorsLocked(vehicle, state)\nEntity(vehicle).state:set('doorslockstate', state, true)\n\n-- Estados temporários de efeito também podem ser replicados:\nEntity(vehicle).state:set('pr_carkeys_revving', true, true)"
      },
      {
        "id": "engine-security",
        "title": {
          "pt": "Motor e validação server-side",
          "en": "Engine & server-side validation"
        },
        "text": {
          "pt": "Ligar/desligar motor exige validação de acesso antes de aceitar a ação. Além do toggle manual, existe um watchdog que observa uma transição OFF→ON e consulta validateKeyAccess; se o player não tiver acesso, o motor é desligado novamente.",
          "en": "Starting/stopping the engine requires access validation. In addition to manual toggle, a watchdog observes OFF→ON transitions and checks validateKeyAccess; unauthorized starts are immediately cancelled."
        },
        "code": "local hasAccess = pr_lib.callback.await(\n    'pr_carkeys:server:validateKeyAccess',\n    false,\n    plate\n)\n\nif not hasAccess then\n    SetVehicleEngineOn(vehicle, false, true, true)\n    return\nend"
      },
      {
        "id": "key-in-vehicle",
        "title": {
          "pt": "Chave na ignição",
          "en": "Key in ignition"
        },
        "text": {
          "pt": "Quando Config.KeyInVehicle.enabled está ativo, ligar o veículo desloca a chave física para o registro de ignição. O servidor procura o item real no inventário ou dentro de bolsas, remove a via correta pelo barcode e registra VehiclesWithKeyInside.",
          "en": "With Config.KeyInVehicle.enabled, starting a vehicle moves the physical key into ignition state. The server locates the real item in inventory or bags, removes the exact barcode and registers VehiclesWithKeyInside."
        },
        "code": "VehiclesWithKeyInside[vehNetId] = {\n    plate = plate,\n    barcode = barcode,\n    citizenid = citizenid,\n    itemName = itemName,\n    fromStash = stashId,\n    fromBagItem = bagItemName\n}"
      },
      {
        "id": "engine-exit",
        "title": {
          "pt": "Sair com motor ligado",
          "en": "Leaving with engine running"
        },
        "text": {
          "pt": "Com keepVehicleEngineOn=true, o motor pode permanecer ligado ao sair. A chave continua no carro; outro player que entrar no banco do motorista pode receber indicação de chave disponível e pegá-la. Ao desligar, o sistema tenta reconstruir/devolver a chave ao inventário ou bolsa correspondente.",
          "en": "With keepVehicleEngineOn=true, engine may remain running after exit. The key stays in the vehicle; another driver can be notified that a key is available and pick it up. When engine stops, the system reconstructs/returns the key to inventory or its originating bag."
        },
        "table": {
          "headers": [
            "Config",
            "Padrão",
            "Função"
          ],
          "rows": [
            [
              "enabled",
              "true",
              "Ativa o conceito de chave física na ignição."
            ],
            [
              "keepVehicleEngineOn",
              "true",
              "Mantém motor ligado após sair."
            ],
            [
              "pickupTime",
              "2000 ms",
              "Tempo para retirar a chave do veículo."
            ],
            [
              "pickupLabel",
              "Pegando chave do carro...",
              "Texto da progressbar."
            ]
          ]
        }
      },
      {
        "id": "bags",
        "title": {
          "pt": "Bolsas de chaves",
          "en": "Key bags"
        },
        "text": {
          "pt": "Cada bolsa recebe barcode próprio por lazy initialization. Esse barcode gera um stash exclusivo, portanto duas bolsas do mesmo item não compartilham conteúdo. O servidor consegue encontrar chaves dentro dessas bolsas durante validações e ignição.",
          "en": "Each bag receives its own barcode through lazy initialization. That barcode generates a unique stash, so two bags of the same item never share content. Server-side access checks and ignition logic can discover keys inside these bags."
        },
        "table": {
          "headers": [
            "Item",
            "Slots",
            "Peso",
            "Tempo de abertura"
          ],
          "rows": [
            [
              "carkey_bag",
              "10",
              "5000",
              "3000 ms"
            ],
            [
              "carkey_bag_large",
              "25",
              "15000",
              "4000 ms"
            ]
          ]
        }
      },
      {
        "id": "bag-flow",
        "title": {
          "pt": "Gerenciar bolsa",
          "en": "Bag management"
        },
        "text": {
          "pt": "Se KeyMetadata.openMenu estiver false, usar a bolsa abre o stash diretamente. Quando true, um menu permite escolher entre abrir o armazenamento e gerenciar as chaves. A listagem de gestão combina metadata do item com dados atuais do banco pelo barcode.",
          "en": "With KeyMetadata.openMenu=false, using a bag opens its stash directly. When enabled, users can choose between opening storage and managing contained keys. Management combines item metadata with current database data by barcode."
        },
        "code": "Config.Default.KeyMetadata = {\n    showOwner = true,\n    openMenu = true\n}\n\n-- Menu:\n-- Bolsa de Chaves\n-- ├─ Abrir bolsa\n-- └─ Gerenciar chaves\n--      └─ <barcode>\n--          ├─ Som\n--          ├─ Motor ao destrancar\n--          └─ Distância"
      },
      {
        "id": "original-key",
        "title": {
          "pt": "Emitindo chave original",
          "en": "Issuing an original key"
        },
        "text": {
          "pt": "BuyOriginalKey é o export apropriado para concessionárias, compra inicial ou emissão oficial. Se duration for omitido, cria uma chave permanente original; se duration for informado, cria uma chave temporária com expiração.",
          "en": "BuyOriginalKey is intended for dealerships, initial purchase or official issuance. Without duration it creates a permanent original key; with duration it creates an expiring temporary key."
        },
        "code": "-- server-side\nlocal result = exports['pr_carkeys']:BuyOriginalKey(\n    source,\n    'ABC1234'\n)\n\nif result.success then\n    print('barcode:', result.barcode)\nelse\n    print('reason:', result.reason)\nend"
      },
      {
        "id": "dealership",
        "title": {
          "pt": "Integração com concessionária",
          "en": "Dealership integration"
        },
        "text": {
          "pt": "O ponto correto é emitir a chave depois que a compra e a propriedade do veículo foram confirmadas. A concessionária continua responsável por pagamento/DB/spawn; PR Car Keys cria a via física e seu registro.",
          "en": "The key should be issued after vehicle purchase and ownership have been confirmed. The dealership remains responsible for payment/database/spawn; PR Car Keys creates the physical key and its persistent record."
        },
        "code": "-- server.lua da concessionária\nlocal function finalizeVehiclePurchase(src, plate, vehicleData)\n    -- 1. validar pagamento\n    -- 2. persistir veículo/owner no resource da concessionária/framework\n    -- 3. só depois emitir a chave\n\n    local key = exports['pr_carkeys']:BuyOriginalKey(src, plate)\n    if not key.success then\n        return false, key.reason\n    end\n\n    return true, {\n        plate = plate,\n        keyBarcode = key.barcode\n    }\nend"
      },
      {
        "id": "used-dealership",
        "title": {
          "pt": "Veículos usados e transferência",
          "en": "Used vehicles & transfer"
        },
        "text": {
          "pt": "Ao vender um veículo usado, a loja pode decidir se preserva as chaves existentes, revoga todas e cria uma nova original, ou copia uma chave válida. RemoveKeysForOwnerPlate existe para limpar chaves vinculadas ao proprietário/placa em fluxos de transferência.",
          "en": "For used-car sales, a dealership can preserve existing keys, revoke them and issue a new original, or copy a valid key. RemoveKeysForOwnerPlate exists for transfer/revocation flows."
        },
        "code": "-- Exemplo de transferência controlada\nexports['pr_carkeys']:RemoveKeysForOwnerPlate(oldOwnerId, plate)\n\nlocal newKey = exports['pr_carkeys']:BuyOriginalKey(newOwnerSource, plate)\nif not newKey.success then\n    return false, newKey.reason\nend"
      },
      {
        "id": "copy-key",
        "title": {
          "pt": "Copiando uma chave",
          "en": "Copying a key"
        },
        "text": {
          "pt": "CopyKey recebe o barcode original. A nova via ganha um barcode novo, level=copy e herda a placa. Chaves single_use não podem ser copiadas.",
          "en": "CopyKey receives the original barcode. The new physical copy gets a new barcode, level=copy and the same plate. single_use keys cannot be copied."
        },
        "code": "local result = exports['pr_carkeys']:CopyKey(\n    source,\n    originalBarcode\n)\n\nif result.success then\n    print(('Nova cópia: %s'):format(result.barcode))\nend"
      },
      {
        "id": "temporary-keys",
        "title": {
          "pt": "Chaves e acessos temporários",
          "en": "Temporary keys & access"
        },
        "text": {
          "pt": "O resource possui tanto acesso temporário em runtime quanto itens físicos temporários. GiveTempKey/RemoveTempKey manipulam acesso temporário; CreateTempKeyItem/CreateTimedKeyItem criam item físico quando o fluxo exige uma chave real.",
          "en": "The resource supports both runtime temporary access and physical temporary items. GiveTempKey/RemoveTempKey manage temporary access while CreateTempKeyItem/CreateTimedKeyItem create physical keys when the flow requires an actual item."
        },
        "code": "-- acesso temporário\nexports['pr_carkeys']:GiveTempKey(source, plate)\n\n-- remover acesso\nexports['pr_carkeys']:RemoveTempKey(source, plate)\n\n-- item físico temporário\nexports['pr_carkeys']:CreateTempKeyItem(source, plate)\n\n-- item com duração/expiração\nexports['pr_carkeys']:CreateTimedKeyItem(source, plate, durationSeconds)"
      },
      {
        "id": "timed-key",
        "title": {
          "pt": "Exemplo de valet / empréstimo por tempo",
          "en": "Timed valet / loan key example"
        },
        "text": {
          "pt": "Uma aplicação prática é criar uma chave temporizada para valet, locadora, oficina ou test-drive. A expiração é persistida no banco; o worker de expiration remove a chave do inventário/bolsa/ignição e elimina o registro.",
          "en": "Timed keys are useful for valet, rentals, workshops or test drives. Expiration is persisted; the expiration worker removes the key from inventory/bags/ignition and deletes its database row."
        },
        "code": "-- 30 minutos de test-drive\nlocal duration = 30 * 60\nlocal result = exports['pr_carkeys']:BuyOriginalKey(\n    source,\n    plate,\n    duration\n)\n\n-- ou use CreateTimedKeyItem quando o fluxo já possui acesso/runtime separado"
      },
      {
        "id": "expiration",
        "title": {
          "pt": "Expiração automática",
          "en": "Automatic expiration"
        },
        "text": {
          "pt": "server/sv_expiration.lua procura rows com expires_at vencido. Antes de apagar a row, tenta remover a chave da ignição, força desligamento quando necessário, procura o barcode em players online/inventários/bolsas e então invalida cache e banco.",
          "en": "server/sv_expiration.lua searches for expired expires_at rows. Before deleting the row it removes matching ignition state, forces engine shutdown when needed, searches online players/inventories/bags for the barcode, then invalidates cache and database."
        },
        "steps": {
          "pt": [
            "Localiza barcode expirado no banco.",
            "Verifica se está em VehiclesWithKeyInside.",
            "Se estiver, limpa ignição e força engine off.",
            "Tenta remover do driver/inventário/bolsas.",
            "Faz fallback procurando players online.",
            "Apaga row pr_carkeys.",
            "Invalida cache server-side."
          ],
          "en": [
            "Find expired barcode in database.",
            "Check VehiclesWithKeyInside.",
            "Clear ignition and force engine off if needed.",
            "Try driver/inventory/bag removal.",
            "Fallback scan through online players.",
            "Delete pr_carkeys row.",
            "Invalidate server cache."
          ]
        }
      },
      {
        "id": "hotwire",
        "title": {
          "pt": "Hotwire",
          "en": "Hotwire"
        },
        "text": {
          "pt": "Hotwire não concede acesso apenas porque o client venceu um minigame. O servidor cria uma sessão vinculada a source, netId e plate com expiração. O client roda o minigame pelo PR Bridge e a confirmação volta para validação server-side.",
          "en": "Hotwire does not grant access solely because the client wins a minigame. The server creates an expiring session bound to source, netId and plate. Client runs the PR Bridge minigame and success is returned for server-side validation."
        },
        "code": "driver seat sem chave\n    ↓\nrequestHotwireSession\n    ↓\n{ source, netId, plate, expires }\n    ↓\nPR Bridge minigame\n    ↓\nserver validates session/context\n    ↓\ntemporary key / ignition access"
      },
      {
        "id": "minigames",
        "title": {
          "pt": "Configuração de minigames",
          "en": "Minigame configuration"
        },
        "text": {
          "pt": "Config.Minigame separa parâmetros de veículo estacionado e carjack. O provider pode ser ox_lib, glitch-minigame ou mhacking; game define o minigame chamado pelo PR Bridge. O config já expõe parâmetros universais para diversas modalidades.",
          "en": "Config.Minigame separates parked-vehicle and carjack parameters. Provider can be ox_lib, glitch-minigame or mhacking; game selects the PR Bridge minigame. The config exposes universal parameters for many game modes."
        },
        "table": {
          "headers": [
            "Grupo",
            "Exemplos de parâmetros"
          ],
          "rows": [
            [
              "Core",
              "rounds, speed, timeLimit, maxFailures, zoneSize"
            ],
            [
              "Skill/Hold",
              "perfectZoneSize, randomizeZone, keys"
            ],
            [
              "Memory",
              "gridSize, memorizeTime, answerTime, maxAttempts"
            ],
            [
              "Aim",
              "targetsToHit, maxMisses, targetLifetime, targetSize"
            ],
            [
              "Sequence",
              "comboLength, totalStages, keysPerStage, sequenceLength"
            ],
            [
              "Circuit",
              "difficultyLevel, disconnectChance, reconnect timers"
            ],
            [
              "Rhythm",
              "lanes, noteSpeed, noteSpawnRate, requiredNotes"
            ]
          ]
        }
      },
      {
        "id": "carjack",
        "title": {
          "pt": "Carjack de NPC",
          "en": "NPC carjack"
        },
        "text": {
          "pt": "O módulo de carjack possui máquina de estados própria para alvo, rendição, reação, fuga, busca da chave e confisco policial. A chance de reação depende da categoria da arma e há blacklist de armas que não podem iniciar roubo.",
          "en": "The carjack module has its own state machine for target detection, surrender, reaction, escape, key search and police seizure. Reaction chance depends on weapon group and blacklisted weapons cannot start carjack."
        },
        "table": {
          "headers": [
            "Config",
            "Padrão atual"
          ],
          "rows": [
            [
              "aimDistance",
              "30.0"
            ],
            [
              "npcReactChance",
              "0.30"
            ],
            [
              "policeFleeChance",
              "0.30"
            ],
            [
              "minTime",
              "5000–7000 ms"
            ],
            [
              "cooldown",
              "5000–10000 ms"
            ],
            [
              "getPermKey",
              "false"
            ]
          ]
        }
      },
      {
        "id": "carjack-reaction",
        "title": {
          "pt": "Reação do NPC e chave perdida",
          "en": "NPC reaction & lost key"
        },
        "text": {
          "pt": "O NPC pode reagir dirigindo, sair, fugir ou manter a chave. O código mantém estado para fleeingPed/fleeingVehicle/fleeingPlate; quando a chave fica com o NPC, existe fluxo para procurar/saquear a chave posteriormente.",
          "en": "NPC can react by driving, exiting, fleeing or retaining the key. The code tracks fleeingPed/fleeingVehicle/fleeingPlate and includes a later search/loot flow when the NPC keeps the key."
        },
        "code": "fleeingPed\nfleeingVehicle\nfleeingPlate\ncanLootFleeKey\n    ↓\nplayer finds/loots key\n    ↓\npr_carkeys:client:carjackLootKeyResult"
      },
      {
        "id": "police",
        "title": {
          "pt": "Polícia e confisco",
          "en": "Police & seizure"
        },
        "text": {
          "pt": "Jobs policiais configurados podem receber acesso operacional. HasVehicleAccess retorna true para policiais autorizados; o carjack também possui fluxo específico de confisco de NPC e registro de chave temporária em ignição.",
          "en": "Configured police jobs receive operational access. HasVehicleAccess returns true for authorized officers; carjack also contains a dedicated NPC seizure flow and temporary ignition-key registration."
        },
        "code": "Config.Police = {\n    enabled = true,\n    jobs = { 'police', 'sheriff', 'swat' }\n}\n\nif exports['pr_carkeys']:IsPlayerPolice(source) then\n    -- acesso operacional\nend"
      },
      {
        "id": "blacklist",
        "title": {
          "pt": "Veículos que não exigem chave",
          "en": "Vehicles that need no key"
        },
        "text": {
          "pt": "Config.NoKeyNeeded permite excluir modelos do sistema. O config atual inclui bicicletas, evitando que o player precise de uma chave física para esse tipo de veículo.",
          "en": "Config.NoKeyNeeded excludes models from key enforcement. Current defaults include bicycles so those vehicles do not require physical keys."
        },
        "code": "Config.NoKeyNeeded = {\n    [joaat('bmx')] = true,\n    [joaat('cruiser')] = true,\n    [joaat('scorcher')] = true,\n    [joaat('tribike')] = true\n}"
      },
      {
        "id": "garage-spawn",
        "title": {
          "pt": "Spawn por garagem",
          "en": "Garage spawn"
        },
        "text": {
          "pt": "Quando um veículo é spawnado, o sistema precisa inicializar lock/engine/access sem confiar apenas no estado local anterior. A arquitetura usa callbacks e eventos de validação para impedir que um carro recém-spawnado permaneça ligado sem chave válida.",
          "en": "When a vehicle spawns, lock/engine/access must be initialized without trusting stale local state. The architecture uses validation callbacks/events to prevent a newly spawned car from staying running without valid access."
        },
        "note": {
          "pt": "O README ainda contém a anotação de bug 'ao spawnar veiculo ta iniciando ligado!'. O código atual possui validação de banco do motorista e watchdog de engine, mas a documentação não assume que esse bug esteja totalmente resolvido sem teste em runtime.",
          "en": "README still contains the bug note 'vehicle starts running on spawn'. Current code has driver-seat validation and an engine watchdog, but this documentation does not claim the bug is fully resolved without runtime validation."
        }
      },
      {
        "id": "integration-garage",
        "title": {
          "pt": "Exemplo de integração com garagem",
          "en": "Garage integration example"
        },
        "text": {
          "pt": "Uma garagem externa pode sincronizar lock state no spawn e usar HaveKey/HasVehicleAccess para decidir UX. Para ações sensíveis, prefira sempre a verificação server-side.",
          "en": "An external garage can synchronize lock state on spawn and use HaveKey/HasVehicleAccess for UX decisions. Sensitive actions should still rely on server-side validation."
        },
        "code": "-- server\nlocal hasAccess = exports['pr_carkeys']:HasVehicleAccess(source, plate)\nif not hasAccess then\n    exports['pr_carkeys']:SetLockState(vehicle, 2)\nelse\n    exports['pr_carkeys']:SetLockState(vehicle, 1)\nend\n\n-- client (apenas UX/local check)\nif exports['pr_carkeys']:HaveKey(plate) then\n    print('player possui acesso local para esta placa')\nend"
      },
      {
        "id": "api-server",
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
              "BuyOriginalKey(src, plate, duration?)",
              "Cria/entrega chave original permanente ou temporizada."
            ],
            [
              "CopyKey(src, originalBarcode, duration?)",
              "Cria cópia física de uma chave existente."
            ],
            [
              "GiveTempKey(src, plate)",
              "Concede acesso temporário."
            ],
            [
              "RemoveTempKey(src, plate)",
              "Remove acesso temporário."
            ],
            [
              "CreateTempKeyItem(src, plate, ...)",
              "Cria item físico temporário."
            ],
            [
              "CreateTimedKeyItem(src, plate, duration, ...)",
              "Cria item físico com expiração."
            ],
            [
              "RemoveTempKeyItem(src, plate, ...)",
              "Remove item temporário."
            ],
            [
              "RemoveKeysForOwnerPlate(owner, plate)",
              "Revoga chaves de owner/plate."
            ],
            [
              "IsPlayerPolice(src)",
              "Verifica papel policial configurado."
            ],
            [
              "HasVehicleAccess(src, plate)",
              "Validação abrangente de acesso."
            ],
            [
              "SetLockState(vehicle, state)",
              "Aplica lock e replica doorslockstate."
            ],
            [
              "GiveKeys(src, vehicle)",
              "Compatibilidade: concede chave temporária pela entity."
            ],
            [
              "GetKeys(src)",
              "Retorna placas/chaves acessíveis ao player."
            ]
          ]
        }
      },
      {
        "id": "api-client",
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
              "HaveKey(plate)",
              "Verifica qualquer acesso local conhecido para a placa."
            ],
            [
              "HavePermanentKey(plate)",
              "Verifica chave permanente em cache local."
            ],
            [
              "HaveTempKey(plate)",
              "Verifica acesso temporário em cache local."
            ]
          ]
        },
        "note": {
          "pt": "Esses exports client-side são úteis para UI e conveniência. Para autorizar ações server-side, use HasVehicleAccess no servidor ou os callbacks internos de validação.",
          "en": "Client exports are useful for UI/convenience. Server-sensitive authorization should use server HasVehicleAccess or internal validation callbacks."
        }
      },
      {
        "id": "qb-compat",
        "title": {
          "pt": "Compatibilidade com vehicle keys existentes",
          "en": "Compatibility with existing vehicle-key events"
        },
        "text": {
          "pt": "sv_vehicle.lua registra eventos de compatibilidade para ecossistemas existentes, incluindo qb-vehiclekeys e mm_carkeys. Isso facilita migrar scripts que já disparam eventos de aquisição/lock sem reescrever tudo imediatamente.",
          "en": "sv_vehicle.lua registers compatibility events for existing ecosystems, including qb-vehiclekeys and mm_carkeys, easing migration for scripts that already emit acquire/lock events."
        },
        "code": "qb-vehiclekeys:server:setVehLockState\nqb-vehiclekeys:server:AcquireVehicleKeys\nmm_carkeys:server:acquiretempvehiclekeys"
      },
      {
        "id": "create-key-event",
        "title": {
          "pt": "Criação avançada de uma chave",
          "en": "Advanced key creation"
        },
        "text": {
          "pt": "Internamente, createKey aceita plate, barcode, key_type, sound, motor, distance e duration. Em integrações externas é preferível usar BuyOriginalKey/CopyKey porque esses exports cuidam de geração única do barcode e entrega do item.",
          "en": "Internally createKey accepts plate, barcode, key_type, sound, motor, distance and duration. External integrations should prefer BuyOriginalKey/CopyKey because they handle unique barcode generation and item delivery."
        },
        "code": "-- Preferido\nlocal key = exports['pr_carkeys']:BuyOriginalKey(src, plate)\n\n-- Em vez de montar barcode manualmente via evento interno."
      },
      {
        "id": "cache",
        "title": {
          "pt": "Cache server-side",
          "en": "Server-side cache"
        },
        "text": {
          "pt": "As rows são mantidas em cache para reduzir queries repetidas por barcode. Operações de criação, edição, delete e expiração atualizam/invalida esse cache junto com o banco.",
          "en": "Rows are cached server-side to reduce repeated barcode lookups. Create, update, delete and expiration operations update/invalidate that cache along with database state."
        }
      },
      {
        "id": "security",
        "title": {
          "pt": "Segurança e autoridade",
          "en": "Security & authority"
        },
        "text": {
          "pt": "Os fluxos sensíveis não confiam apenas no client: hotwire usa sessão, engine valida acesso, lock é sincronizado, key-in-vehicle procura item físico real, expiração remove barcode e carjack faz validações de proximidade/contexto.",
          "en": "Sensitive flows do not trust the client alone: hotwire uses sessions, engine validates access, locks are synchronized, ignition searches for the real physical item, expiration removes the barcode and carjack checks proximity/context."
        },
        "bullets": {
          "pt": [
            "validateKeyAccess antes de permitir engine start.",
            "Watchdog OFF→ON desliga motor em tentativa não autorizada.",
            "Hotwire vincula sessão a source + netId + plate.",
            "Campos editáveis da chave são whitelisted.",
            "Barcode deve existir no banco/cache para uso normal.",
            "Expiração limpa inventário, bolsa, ignição, cache e row.",
            "HasVehicleAccess é a verificação server-side recomendada para integrações.",
            "Carjack/ações em veículo validam proximidade e entidade."
          ],
          "en": [
            "validateKeyAccess before engine start.",
            "OFF→ON watchdog cancels unauthorized starts.",
            "Hotwire session binds source + netId + plate.",
            "Editable key fields are whitelisted.",
            "Barcode must exist in database/cache for normal use.",
            "Expiration cleans inventory, bags, ignition, cache and database row.",
            "HasVehicleAccess is the recommended server-side integration check.",
            "Vehicle/carjack actions validate proximity and entity."
          ]
        }
      },
      {
        "id": "notifications",
        "title": {
          "pt": "Notificações e UX",
          "en": "Notifications & UX"
        },
        "text": {
          "pt": "Config.Notify centraliza mensagens como bolsa aberta, chave usada, veículo trancado, motor ligado, chave expirada, veículo não encontrado e sem permissão. Isso permite adequar o resource ao estilo visual do servidor sem mudar lógica.",
          "en": "Config.Notify centralizes messages for bag open, key use, lock, engine, expiration, missing vehicle and permission errors, allowing visual customization without changing core logic."
        }
      },
      {
        "id": "performance",
        "title": {
          "pt": "Performance e boas práticas",
          "en": "Performance & best practices"
        },
        "text": {
          "pt": "O desenho evita consultas SQL a cada frame. O client reconstrói cache em mudanças de inventário/player load, o servidor mantém cache por barcode e State Bags sincronizam locks/efeitos. Threads mais agressivas só ficam ativas em contextos específicos como banco do motorista ou carjack.",
          "en": "The design avoids per-frame SQL queries. Client cache rebuilds on inventory/player changes, server caches barcodes and State Bags synchronize locks/effects. Tighter loops only run in relevant contexts such as driver seat or carjack."
        },
        "cards": [
          [
            "Server cache",
            "Busca por barcode não depende de SQL em toda ação."
          ],
          [
            "Inventory hooks",
            "Rebuild ocorre quando inventário/player muda."
          ],
          [
            "State Bags",
            "Locks e efeitos runtime são replicados pela entity."
          ],
          [
            "Scoped loops",
            "Watchdogs reduzem frequência fora do contexto relevante."
          ],
          [
            "Bags indexed",
            "Cada bolsa possui stash derivado do próprio barcode."
          ],
          [
            "DB normalized",
            "Configuração individual fica em uma única row por barcode."
          ]
        ]
      }
    ]
  },
  pr_3dsound: {
    "name": "PR 3D Sound",
    "code": "pr_3dsound",
    "repo": "https://github.com/Pierremoraes-ofc/pr_3dsound",
    "category": {
      "pt": "Hobby • Spatial Audio",
      "en": "Hobby • Spatial Audio"
    },
    "lead": {
      "pt": "Engine de áudio espacial para FiveM com arquivos locais, URLs diretas, HLS, YouTube, SoundCloud, emitters persistentes, streaming por proximidade, attach em entities, sincronização autoritativa, HRTF real quando CORS permite, oclusão acústica e uma ponte separada para sons nativos do GTA.",
      "en": "Spatial audio engine for FiveM with local files, direct URLs, HLS, YouTube, SoundCloud, persistent emitters, proximity streaming, entity attachment, authoritative synchronization, real HRTF when CORS permits, acoustic occlusion and a separate bridge for GTA native sounds."
    },
    "facts": [
      [
        "Version",
        "4.0.0"
      ],
      [
        "Spatial",
        "WebAudio HRTF"
      ],
      [
        "Streaming",
        "Proximity + hysteresis"
      ],
      [
        "Sources",
        "Local / HTTP / HLS / YT / SC"
      ],
      [
        "Native",
        "GTA sound bridge"
      ],
      [
        "Server IDs",
        "> 100000"
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
          "pt": "O PR 3D Sound separa reprodução local de áudio e estado compartilhado de emitters. Sons posicionais criados no servidor permanecem registrados mesmo quando ninguém está no raio. O servidor decide quem deve ouvir, qual timestamp cada listener deve receber e quando um som deve entrar ou sair do client.",
          "en": "PR 3D Sound separates local playback from shared emitter state. Server-created positional sounds remain registered even when nobody is inside their range. The server decides who should listen, which timestamp each listener receives and when a sound streams in or out."
        },
        "cards": [
          [
            "Áudio 2D",
            "Playback sem posição espacial para um player ou grupo elegível."
          ],
          [
            "Áudio 3D fixo",
            "Emitter persistente preso a coordenadas do mundo."
          ],
          [
            "Attach",
            "Emitter acompanha Network ID de veículo, objeto ou ped."
          ],
          [
            "HRTF",
            "PannerNode em modo HRTF para URL direta com WebAudio/CORS."
          ],
          [
            "Oclusão",
            "Raycast, veículo e MLO modulam volume e low-pass."
          ],
          [
            "Sincronização",
            "Pause, resume, seek, loop, volume e distância vivem no estado autoritativo."
          ]
        ]
      },
      {
        "id": "architecture",
        "title": {
          "pt": "Arquitetura",
          "en": "Architecture"
        },
        "text": {
          "pt": "A implementação combina Lua no client/server com NUI JavaScript. Lua cuida de estado, proximidade, entities, raycasts e regras; SoundPlayer.js faz a reprodução e espacialização no browser.",
          "en": "The implementation combines client/server Lua with JavaScript NUI. Lua handles state, proximity, entities, raycasts and rules; SoundPlayer.js performs playback and spatialization in the browser."
        },
        "code": "SERVER\n  Sounds{}\n  ├─ emitter state\n  ├─ listener set\n  ├─ timestamp / pause\n  ├─ proximity streaming\n  └─ routing bucket\n        ↓ client events\nCLIENT LUA\n  ├─ local registry\n  ├─ entity attachment\n  ├─ distance attenuation\n  ├─ raycast / vehicle / MLO occlusion\n  └─ listener position\n        ↓ SendNUIMessage\nNUI / SoundPlayer.js\n  ├─ Howler\n  ├─ HTMLAudioElement\n  ├─ HLS.js\n  ├─ YouTube / SoundCloud players\n  └─ WebAudio HRTF / filter / gain"
      },
      {
        "id": "installation",
        "title": {
          "pt": "Instalação",
          "en": "Installation"
        },
        "text": {
          "pt": "O resource é standalone. Basta garantir o ensure e deixar client/test_commands.lua desabilitado em produção. Arquivos locais ficam em html/sounds/ e podem ser organizados em subpastas.",
          "en": "The resource is standalone. Ensure it in server.cfg and keep client/test_commands.lua disabled in production. Local files live under html/sounds/ and may be organized into subfolders."
        },
        "code": "ensure pr_3dsound\n\n# client/test_commands.lua permanece comentado no fxmanifest em produção\n\n# estrutura sugerida\npr_3dsound/\n└── html/sounds/\n    ├── ambient/\n    │   └── city.ogg\n    ├── dealership/\n    │   └── showroom.mp3\n    └── pr_carkeys/\n        └── lock.ogg"
      },
      {
        "id": "sources",
        "title": {
          "pt": "Fontes de áudio suportadas",
          "en": "Supported audio sources"
        },
        "table": {
          "headers": [
            "Fonte",
            "3D",
            "HRTF real",
            "Seek/sync",
            "Observação"
          ],
          "rows": [
            [
              "Arquivo local",
              "Sim",
              "Howler/Panner",
              "Sim",
              "Servido pela própria NUI."
            ],
            [
              "URL direta MP3/OGG/WEBA",
              "Sim",
              "Sim, se CORS permitir",
              "Sim quando seekable",
              "Melhor opção para áudio espacial preciso."
            ],
            [
              "HLS (.m3u8)",
              "2D/3D",
              "Pode usar pipeline espacial",
              "Depende do stream",
              "HLS.js/MSE com retries limitados."
            ],
            [
              "YouTube",
              "2D/3D simulado",
              "Não",
              "Widget-dependent",
              "Iframe cross-origin impede PannerNode."
            ],
            [
              "SoundCloud",
              "2D/3D simulado",
              "Não",
              "Widget-dependent",
              "Iframe/widget cross-origin."
            ],
            [
              "GTA native audio",
              "Nativo",
              "Não aplicável",
              "Nativo",
              "Usa PlaySound* do jogo, separado do WebAudio."
            ]
          ]
        }
      },
      {
        "id": "local-files",
        "title": {
          "pt": "Arquivos locais",
          "en": "Local files"
        },
        "text": {
          "pt": "Play() server-side reproduz um arquivo dentro de html/sounds em coordenadas fixas. resourceName permite prefixar uma subpasta sem precisar concatenar manualmente no consumer.",
          "en": "Server-side Play() plays a file under html/sounds at fixed coordinates. resourceName can prefix a subfolder without manual path concatenation in the consumer."
        },
        "code": "-- html/sounds/dealership/showroom.ogg\nexports['pr_3dsound']:Play(\n    vector3(-55.2, -1097.7, 26.4),\n    'showroom.ogg',\n    0.75,            -- volume\n    35.0,            -- radius\n    'dealer_music',  -- uniqueId\n    'dealership',    -- resourceName / subpasta\n    true             -- loop\n)"
      },
      {
        "id": "url-2d",
        "title": {
          "pt": "URL 2D",
          "en": "2D URL"
        },
        "text": {
          "pt": "PlayUrl() cria uma fonte não-posicional. sourcePlayer = -1 torna todos os players elegíveis; um source específico restringe o som àquele player.",
          "en": "PlayUrl() creates non-positional playback. sourcePlayer = -1 makes all players eligible; a specific source limits playback to that player."
        },
        "code": "-- tocar apenas para o player\nexports['pr_3dsound']:PlayUrl(\n    source,\n    'ui_radio_preview',\n    'https://cdn.example.com/preview.mp3',\n    0.55,\n    false\n)\n\n-- tocar para todos\nexports['pr_3dsound']:PlayUrl(\n    -1,\n    'announcement',\n    'https://cdn.example.com/announcement.mp3',\n    0.8,\n    false\n)"
      },
      {
        "id": "url-3d",
        "title": {
          "pt": "URL 3D em posição fixa",
          "en": "Fixed-position 3D URL"
        },
        "text": {
          "pt": "PlayUrlPos() é o principal export para caixas de som, rádios ambientais, lojas, eventos e ambientes. O emitter continua existindo no servidor e novos listeners entram já sincronizados.",
          "en": "PlayUrlPos() is the primary export for speakers, ambient radios, stores, events and world audio. The emitter stays alive server-side and new listeners stream in already synchronized."
        },
        "code": "exports['pr_3dsound']:PlayUrlPos(\n    -1,\n    'radio_praca',\n    'https://cdn.example.com/radio.mp3',\n    0.8,\n    vector3(215.0, -810.0, 30.0),\n    45.0,\n    true\n)"
      },
      {
        "id": "routing-bucket",
        "title": {
          "pt": "Routing bucket",
          "en": "Routing bucket"
        },
        "text": {
          "pt": "PlayUrlPos aceita routingBucket opcional. Quando definido, apenas players no mesmo bucket são elegíveis. Em emitters attached, o servidor atualiza o bucket a partir da entity quando consegue resolvê-la.",
          "en": "PlayUrlPos accepts an optional routingBucket. When set, only players in the same bucket are eligible. Attached emitters refresh their bucket from the entity whenever the server can resolve it."
        },
        "code": "local bucket = GetPlayerRoutingBucket(source)\n\nexports['pr_3dsound']:PlayUrlPos(\n    -1,\n    'private_room_radio',\n    url,\n    0.7,\n    coords,\n    30.0,\n    true,\n    bucket\n)"
      },
      {
        "id": "attached",
        "title": {
          "pt": "Som preso a veículo/entity",
          "en": "Entity-attached sound"
        },
        "text": {
          "pt": "PlayUrlAttached() cria diretamente um emitter associado a um Network ID. O server acompanha as coordenadas e o client resolve/re-resolve a entity no scope do OneSync.",
          "en": "PlayUrlAttached() creates an emitter associated with a Network ID. The server follows coordinates and the client resolves/re-resolves the entity inside OneSync scope."
        },
        "code": "local netId = NetworkGetNetworkIdFromEntity(vehicle)\n\nexports['pr_3dsound']:PlayUrlAttached(\n    -1,\n    ('car_radio_%s'):format(netId),\n    'https://cdn.example.com/music.mp3',\n    0.8,\n    netId,\n    35.0,\n    true\n)"
      },
      {
        "id": "attach-existing",
        "title": {
          "pt": "Attach/Detach de um emitter existente",
          "en": "Attach/detach an existing emitter"
        },
        "text": {
          "pt": "AttachToEntity pode transformar um emitter já existente em attached e também aceita offset. DetachEntity captura a última posição conhecida e deixa o som parado naquele ponto.",
          "en": "AttachToEntity can convert an existing emitter into an attached emitter and accepts an offset. DetachEntity captures the last known position and leaves the sound playing at that location."
        },
        "code": "exports['pr_3dsound']:AttachToEntity(\n    'radio_praca',\n    NetworkGetNetworkIdFromEntity(vehicle),\n    { x = 0.0, y = -0.7, z = 0.4 }\n)\n\n-- mais tarde: o som continua nas últimas coords conhecidas\nexports['pr_3dsound']:DetachEntity('radio_praca')"
      },
      {
        "id": "car-radio",
        "title": {
          "pt": "Exemplo completo — rádio de veículo",
          "en": "Complete example — vehicle radio"
        },
        "text": {
          "pt": "Um sistema de rádio pode usar um ID determinístico por Network ID, manter loop e alterar volume/radius sem recriar o emitter. Ao destruir/desligar o rádio, Stop remove o emitter e todos os listeners.",
          "en": "A vehicle-radio system can use a deterministic ID per Network ID, keep looping and change volume/radius without recreating the emitter. Stop removes the emitter and all listeners."
        },
        "code": "local function startVehicleRadio(vehicle, url)\n    local netId = NetworkGetNetworkIdFromEntity(vehicle)\n    local soundId = ('radio:vehicle:%d'):format(netId)\n\n    exports['pr_3dsound']:PlayUrlAttached(\n        -1, soundId, url, 0.65, netId, 28.0, true\n    )\n\n    return soundId\nend\n\nlocal function setVehicleRadioVolume(soundId, volume)\n    exports['pr_3dsound']:SetVolume(soundId, volume)\nend\n\nlocal function stopVehicleRadio(soundId)\n    exports['pr_3dsound']:FadeOut(soundId, 700)\n    SetTimeout(750, function()\n        exports['pr_3dsound']:Stop(soundId)\n    end)\nend"
      },
      {
        "id": "shop-radio",
        "title": {
          "pt": "Exemplo — música ambiente em loja",
          "en": "Example — store ambience"
        },
        "text": {
          "pt": "Para lojas, concessionárias ou clubes, use emitter fixo, loop e uniqueId estável. A histerese evita play/stop constante quando o player fica exatamente na borda do raio.",
          "en": "For stores, dealerships or clubs, use a fixed emitter, loop and stable uniqueId. Hysteresis prevents repeated play/stop while a player stands around the radius edge."
        },
        "code": "local SHOP_RADIO = 'dealer:showroom:radio'\n\nexports['pr_3dsound']:PlayUrlPos(\n    -1,\n    SHOP_RADIO,\n    'https://cdn.example.com/showroom.ogg',\n    0.45,\n    vector3(-47.4, -1097.1, 26.4),\n    24.0,\n    true\n)\n\n-- horário de fechamento\nexports['pr_3dsound']:FadeOut(SHOP_RADIO, 1500)"
      },
      {
        "id": "hrtf",
        "title": {
          "pt": "Pipeline HRTF real",
          "en": "Real HRTF pipeline"
        },
        "text": {
          "pt": "Para URL direta 3D, SoundPlayer.js tenta criar HTMLAudioElement + MediaElementSource + PannerNode(HRTF) + low-pass + Gain. O Panner usa rolloffFactor 0 porque a atenuação de distância já é calculada no Lua; assim evita dupla queda de volume.",
          "en": "For direct 3D URLs, SoundPlayer.js attempts HTMLAudioElement + MediaElementSource + PannerNode(HRTF) + low-pass + Gain. Panner rolloffFactor is 0 because Lua already computes distance attenuation, avoiding double attenuation."
        },
        "code": "HTMLAudioElement\n      ↓\nMediaElementSource\n      ↓\nPannerNode\n  panningModel = 'HRTF'\n  distanceModel = 'linear'\n  rolloffFactor = 0\n      ↓\nBiquadFilter(lowpass)\n      ↓\nGainNode\n      ↓\nAudioContext.destination"
      },
      {
        "id": "cors",
        "title": {
          "pt": "CORS e fallback",
          "en": "CORS & fallback"
        },
        "text": {
          "pt": "Para conectar uma URL externa ao WebAudio, o host precisa permitir CORS. Sem isso, o resource tenta uma rota compatível de reprodução; distância/volume/oclusão ainda podem funcionar, mas o áudio não passa pelo PannerNode HRTF real.",
          "en": "To route an external URL through WebAudio, its host must allow CORS. Without it the resource attempts a compatible fallback path; distance/volume/occlusion can still work, but audio cannot use real HRTF PannerNode spatialization."
        },
        "code": "Access-Control-Allow-Origin: *\n\n# ou permita explicitamente a origem usada pela NUI"
      },
      {
        "id": "hls",
        "title": {
          "pt": "HLS / streams",
          "en": "HLS / streams"
        },
        "text": {
          "pt": "SoundPlayer.js detecta URLs HLS e usa HLS.js quando o CEF não fornece HLS nativo. O código possui retry limitado de erros de rede para evitar loop infinito de manifestLoadError. Streams live podem não aceitar seek.",
          "en": "SoundPlayer.js detects HLS URLs and uses HLS.js when CEF lacks native HLS support. Network retries are bounded to avoid infinite manifestLoadError loops. Live streams may not support seeking."
        },
        "code": "exports['pr_3dsound']:PlayUrlPos(\n    -1,\n    'live_station',\n    'https://stream.example.com/live/index.m3u8',\n    0.65,\n    vector3(0.0, 0.0, 72.0),\n    40.0,\n    true\n)"
      },
      {
        "id": "youtube-soundcloud",
        "title": {
          "pt": "YouTube e SoundCloud",
          "en": "YouTube & SoundCloud"
        },
        "text": {
          "pt": "Essas fontes usam iframe/widget cross-origin. O browser não permite capturar o áudio interno e conectar ao PannerNode. Elas continuam podendo receber volume por distância e oclusão simulada, mas não HRTF verdadeiro.",
          "en": "These sources use cross-origin iframe/widgets. The browser cannot capture their internal audio and connect it to PannerNode. They can still receive distance-based volume and simulated occlusion, but not true HRTF."
        },
        "note": {
          "pt": "Para caixas de som, rádio em carro ou ambientes onde direção espacial precisa ser convincente, prefira URL direta MP3/OGG/WEBA ou HLS compatível.",
          "en": "For speakers, vehicle radios or environments where directional audio matters, prefer direct MP3/OGG/WEBA URLs or compatible HLS."
        }
      },
      {
        "id": "streaming",
        "title": {
          "pt": "Streaming por proximidade",
          "en": "Proximity streaming"
        },
        "text": {
          "pt": "O servidor mantém Sounds{} e percorre players elegíveis em intervalo configurável. Para entrar, o player precisa estar dentro de radius; para sair, o limite vira radius + hysteresis, reduzindo flapping na borda.",
          "en": "The server maintains Sounds{} and evaluates eligible players at a configurable interval. Entering requires being within radius; exiting uses radius + hysteresis to reduce flapping at the edge."
        },
        "code": "entrar no áudio:\n  distance <= radius\n\njá está ouvindo:\n  permanece até distance > radius + hysteresis\n\n# defaults\npr_3dsound_stream_interval  = 1000 ms\npr_3dsound_stream_hysteresis = 8.0"
      },
      {
        "id": "late-join",
        "title": {
          "pt": "Late join e reentrada no raio",
          "en": "Late join & radius re-entry"
        },
        "text": {
          "pt": "Quando um listener recebe o emitter depois, buildOptions() envia startAt calculado pelo relógio autoritativo. Arquivos seekable retomam no ponto correspondente, em vez de começarem do zero.",
          "en": "When a listener receives an emitter later, buildOptions() sends an authoritative startAt. Seekable files resume at the corresponding position instead of restarting."
        },
        "code": "startAt = seekBase + ((GetGameTimer() - startedAt) / 1000)\n\n-- se pausado\nstartAt = pausedOffset"
      },
      {
        "id": "pause-sync",
        "title": {
          "pt": "Pause/Resume autoritativo",
          "en": "Authoritative pause/resume"
        },
        "text": {
          "pt": "Pause captura o offset atual e marca paused. Resume recria startedAt a partir desse offset. O client possui mensagens pauseAt/resumeAt para alinhar seek + estado de reprodução de forma atômica.",
          "en": "Pause captures current playback offset and marks the emitter paused. Resume rebuilds startedAt from that offset. Client supports pauseAt/resumeAt messages to atomically align seeking and playback state."
        },
        "code": "exports['pr_3dsound']:Pause('radio_praca')\n\n-- ... depois\nexports['pr_3dsound']:Resume('radio_praca')\n\n-- reposicionar playback\nexports['pr_3dsound']:SetTimestamp('radio_praca', 125.5)"
      },
      {
        "id": "controls",
        "title": {
          "pt": "Controles de emitter",
          "en": "Emitter controls"
        },
        "table": {
          "headers": [
            "Export",
            "Uso"
          ],
          "rows": [
            [
              "Pause(id)",
              "Pausa preservando offset autoritativo."
            ],
            [
              "Resume(id)",
              "Retoma do offset preservado."
            ],
            [
              "Stop(id)",
              "Remove um emitter."
            ],
            [
              "StopAll()",
              "Remove todos os emitters gerenciados."
            ],
            [
              "UpdateCoords(id, coords)",
              "Move emitter e remove attachment."
            ],
            [
              "SetVolume(id, volume)",
              "Altera volume base 0..1."
            ],
            [
              "SetVolumeMax(id, volume)",
              "Atualiza limite máximo enviado ao client."
            ],
            [
              "SetDistance(id, radius)",
              "Altera o raio e força reavaliação de listeners."
            ],
            [
              "SetLoop(id, bool)",
              "Atualiza loop."
            ],
            [
              "SetTimestamp(id, seconds)",
              "Reposiciona playback autoritativo."
            ],
            [
              "FadeIn(id, duration, targetVolume)",
              "Fade até o volume alvo."
            ],
            [
              "FadeOut(id, duration)",
              "Fade para zero; não equivale necessariamente a Stop."
            ],
            [
              "SoundExists(id)",
              "Verifica presença do uniqueId."
            ],
            [
              "GetAllSounds()",
              "Snapshot/estado dos emitters."
            ]
          ]
        }
      },
      {
        "id": "dynamic-movement",
        "title": {
          "pt": "Mover um emitter manualmente",
          "en": "Move an emitter manually"
        },
        "text": {
          "pt": "UpdateCoords é útil para fontes móveis que não possuem Network ID ou quando o consumer quer controlar o ponto manualmente. Ao chamar UpdateCoords em um emitter attached, o attachment é limpo.",
          "en": "UpdateCoords is useful for moving sources without a Network ID or when a consumer controls the position manually. Calling it on an attached emitter clears attachment."
        },
        "code": "CreateThread(function()\n    while exports['pr_3dsound']:SoundExists('drone_audio') do\n        local coords = getDronePosition()\n        exports['pr_3dsound']:UpdateCoords('drone_audio', coords)\n        Wait(250)\n    end\nend)"
      },
      {
        "id": "entity-grace",
        "title": {
          "pt": "Grace de entity no OneSync",
          "en": "OneSync entity grace"
        },
        "text": {
          "pt": "Um Network ID pode desaparecer temporariamente em troca de ownership/scope. O servidor mantém uma janela de graça antes de stream-out de listeners existentes; novos listeners aguardam a entity voltar a resolver.",
          "en": "A Network ID may disappear temporarily during ownership/scope transitions. The server keeps a grace window before streaming existing listeners out, while new listeners wait until the entity resolves again."
        },
        "table": {
          "headers": [
            "Convar",
            "Default",
            "Função"
          ],
          "rows": [
            [
              "pr_3dsound_entity_grace",
              "2500 ms",
              "Janela curta sem cortar listeners existentes."
            ],
            [
              "pr_3dsound_entity_timeout",
              "10000 ms",
              "Timeout maior para lifecycle de entity missing."
            ]
          ]
        }
      },
      {
        "id": "occlusion",
        "title": {
          "pt": "Oclusão acústica",
          "en": "Acoustic occlusion"
        },
        "text": {
          "pt": "O client combina raycast suavizado, estado de veículo e interiores/MLO. O multiplicador final reduz volume; em direct URL WebAudio também reduz a frequência do low-pass, deixando paredes e carrocerias perceptíveis como abafamento.",
          "en": "Client combines smoothed raycasts, vehicle state and interiors/MLO. The final multiplier attenuates volume; for direct WebAudio URLs it also lowers low-pass frequency, making walls and vehicle bodies sound muffled."
        },
        "table": {
          "headers": [
            "Situação",
            "Multiplicador atual"
          ],
          "rows": [
            [
              "Parede grossa",
              "0.20"
            ],
            [
              "Parede fina/heurística",
              "0.50"
            ],
            [
              "Fonte em veículo fechado",
              "0.15"
            ],
            [
              "Janela aberta/quebrada da fonte",
              "0.35"
            ],
            [
              "1 porta aberta da fonte",
              "0.60"
            ],
            [
              "2 portas abertas da fonte",
              "0.70"
            ],
            [
              "Porta-malas / 3+ portas",
              "1.00"
            ],
            [
              "Listener dentro de veículo fechado",
              "0.15"
            ],
            [
              "Janela listener aberta/quebrada",
              "0.50"
            ],
            [
              "Porta listener aberta",
              "0.85"
            ],
            [
              "MLO: dentro x fora",
              "0.55"
            ],
            [
              "MLO: interiores diferentes",
              "0.55 × 0.55"
            ]
          ]
        }
      },
      {
        "id": "occlusion-loop",
        "title": {
          "pt": "Raycast e suavização",
          "en": "Raycast & smoothing"
        },
        "text": {
          "pt": "O raycast não roda todo frame. CFG usa intervalo de 400 ms e smoothing 0.72 para evitar mudanças bruscas. Isso reduz custo e evita que uma parede cause volume serrilhado quando o player/câmera oscila.",
          "en": "Raycasts do not run every frame. CFG uses 400 ms interval and 0.72 smoothing to avoid abrupt transitions, reducing cost and jagged volume changes as player/camera moves."
        },
        "code": "RAYCAST_ENABLED     = true\nRAYCAST_INTERVAL_MS = 400\nRAYCAST_SMOOTH      = 0.72\nRAYCAST_FLAGS       = 1 + 8"
      },
      {
        "id": "vehicle-occlusion",
        "title": {
          "pt": "Som dentro e fora de veículos",
          "en": "Vehicle acoustic model"
        },
        "text": {
          "pt": "O código olha portas, janelas, porta-malas e se fonte/listener estão no mesmo veículo. Duas cabines fechadas recebem um piso específico para evitar volume excessivamente baixo por multiplicação dupla.",
          "en": "The code considers doors, windows, trunk and whether source/listener share the same vehicle. Two closed cabins use a floor value to avoid excessive attenuation from multiplying both sides."
        },
        "note": {
          "pt": "Se fonte e listener estão no mesmo veículo, a oclusão da carroceria é removida. Isso torna rádio interno coerente para ocupantes do mesmo carro.",
          "en": "If source and listener are inside the same vehicle, body occlusion is removed, which keeps in-car radio coherent for occupants."
        }
      },
      {
        "id": "mlo",
        "title": {
          "pt": "Interiores e MLO",
          "en": "Interiors & MLO"
        },
        "text": {
          "pt": "O client usa interior IDs e heurísticas de portal. Um listener dentro e fonte fora recebem atenuação; dois interiores diferentes recebem multiplicação mais forte; no mesmo interior, distâncias maiores podem aplicar portal multiplier.",
          "en": "The client uses interior IDs and portal heuristics. Inside/outside transitions attenuate sound, different interiors attenuate more heavily, and longer distances inside the same interior can apply portal multiplier."
        }
      },
      {
        "id": "client-local",
        "title": {
          "pt": "Áudio local client-side",
          "en": "Local client-side audio"
        },
        "text": {
          "pt": "Exports client-side criam sons apenas naquele client. Eles são ideais para UI, feedback privado e efeitos que não precisam de estado compartilhado.",
          "en": "Client exports create sounds only for that client. They are ideal for UI, private feedback and effects that do not require shared state."
        },
        "code": "-- arquivo local 3D no ponto atual do player\nlocal id = exports['pr_3dsound']:PlayLocal(\n    'ui/scan.ogg',\n    0.8,\n    12.0,\n    false\n)\n\n-- arquivo local 2D\nlocal id2 = exports['pr_3dsound']:PlayLocal2D('ui/click.ogg', 0.4, false)\n\n-- URL 3D local\nlocal id3 = exports['pr_3dsound']:PlayUrl3D(\n    'https://cdn.example.com/effect.mp3',\n    0.6,\n    20.0,\n    false\n)"
      },
      {
        "id": "client-attached",
        "title": {
          "pt": "Attach local client-side",
          "en": "Local client attachment"
        },
        "code": "local netId = NetworkGetNetworkIdFromEntity(vehicle)\n\nlocal localSoundId = exports['pr_3dsound']:PlayAttached(\n    'https://cdn.example.com/engine-whine.mp3',\n    0.45,\n    netId,\n    18.0,\n    true\n)\n\nexports['pr_3dsound']:SetVolume(localSoundId, 0.25)\nexports['pr_3dsound']:FadeOut(localSoundId, 800)"
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
              "SoundExists(uniqueId)",
              "Verifica registro local."
            ],
            [
              "IsPlaying(uniqueId)",
              "Estado playing."
            ],
            [
              "IsPaused(uniqueId)",
              "Estado paused."
            ],
            [
              "GetInfo(uniqueId)",
              "Retorna estrutura do som local."
            ],
            [
              "GetAllSounds()",
              "Tabela de sons locais."
            ],
            [
              "PlayLocal(file, volume, radius, loop)",
              "Arquivo local 3D."
            ],
            [
              "PlayLocal2D(file, volume, loop)",
              "Arquivo local não-posicional."
            ],
            [
              "PlayUrl2D(url, volume, loop)",
              "URL 2D local."
            ],
            [
              "PlayUrl3D(url, volume, radius, loop)",
              "URL 3D local."
            ],
            [
              "PlayAttached(url, volume, netId, radius, loop)",
              "URL presa a entity no client."
            ],
            [
              "Stop(uniqueId)",
              "Para som local."
            ],
            [
              "Pause(uniqueId) / Resume(uniqueId)",
              "Controle local."
            ],
            [
              "SetVolume(uniqueId, volume)",
              "Volume local."
            ],
            [
              "SetDistance(uniqueId, dist)",
              "Raio local."
            ],
            [
              "FadeIn(uniqueId, duration, targetVolume)",
              "Fade local."
            ],
            [
              "FadeOut(uniqueId, duration)",
              "Fade local."
            ]
          ]
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
            "Assinatura conceitual"
          ],
          "rows": [
            [
              "Play",
              "Play(coords, soundName, volume, radius, uniqueId, resourceName, loop)"
            ],
            [
              "PlayUrl",
              "PlayUrl(sourcePlayer, name, url, volume, loop)"
            ],
            [
              "PlayUrlPos",
              "PlayUrlPos(sourcePlayer, name, url, volume, coords, radius, loop, routingBucket)"
            ],
            [
              "PlayUrlAttached",
              "PlayUrlAttached(sourcePlayer, name, url, volume, entityNetId, radius, loop)"
            ],
            [
              "AttachToEntity",
              "AttachToEntity(uniqueId, entityNetId, offset)"
            ],
            [
              "DetachEntity",
              "DetachEntity(uniqueId)"
            ],
            [
              "Pause / Resume / Stop",
              "Controle por uniqueId."
            ],
            [
              "StopAll",
              "Remove todos os sons server-managed."
            ],
            [
              "UpdateCoords",
              "UpdateCoords(uniqueId, coords)"
            ],
            [
              "SetVolume / SetVolumeMax",
              "Volume base/limite."
            ],
            [
              "SetDistance",
              "SetDistance(uniqueId, radius)"
            ],
            [
              "SetLoop",
              "SetLoop(uniqueId, bool)"
            ],
            [
              "SetTimestamp",
              "SetTimestamp(uniqueId, seconds)"
            ],
            [
              "FadeIn / FadeOut",
              "Fades compartilhados."
            ],
            [
              "SoundExists / GetAllSounds",
              "Introspecção do registry."
            ]
          ]
        }
      },
      {
        "id": "native-overview",
        "title": {
          "pt": "Ponte de sons nativos GTA",
          "en": "GTA native sound bridge"
        },
        "text": {
          "pt": "client/native_sound.lua e server/native_sound.lua são independentes do WebAudio. Eles usam APIs nativas GTA para audioName/audioRef e podem tocar em entity ou coordenadas. Também aceitam sequência de nomes, audioBank, timeout, intervalo, range e regras de oclusão.",
          "en": "client/native_sound.lua and server/native_sound.lua are separate from WebAudio. They use GTA native audioName/audioRef APIs and can play from entities or coordinates. They also support name sequences, audioBank, timeout, interval, range and occlusion rules."
        }
      },
      {
        "id": "native-local",
        "title": {
          "pt": "Exemplo — som nativo local",
          "en": "Example — local native sound"
        },
        "code": "exports['pr_3dsound']:PlayLocalNativeSoundFromCoords({\n    audioName = 'NAV_UP_DOWN',\n    audioRef = 'HUD_FRONTEND_DEFAULT_SOUNDSET',\n    coords = GetEntityCoords(PlayerPedId()),\n    range = 20.0,\n    clientRangeCheck = true\n})"
      },
      {
        "id": "native-sequence",
        "title": {
          "pt": "Sequência de sons nativos",
          "en": "Native sound sequence"
        },
        "text": {
          "pt": "audioName pode ser string ou array. interval/delayBetweenSounds define o tempo entre elementos. retainSoundIds controla se IDs nativos precisam ser mantidos pelo helper.",
          "en": "audioName can be a string or array. interval/delayBetweenSounds sets spacing between items. retainSoundIds controls native sound ID retention."
        },
        "code": "exports['pr_3dsound']:PlayNativeSoundFromEntity({\n    entity = vehicle,\n    audioName = {\n        'NAV_UP_DOWN',\n        'SELECT'\n    },\n    audioRef = 'HUD_FRONTEND_DEFAULT_SOUNDSET',\n    interval = 250,\n    timeout = 2500,\n    retainSoundIds = false\n})"
      },
      {
        "id": "native-occlusion",
        "title": {
          "pt": "Oclusão nos sons nativos",
          "en": "Native-sound occlusion"
        },
        "text": {
          "pt": "Native audio não passa pelo low-pass do WebAudio. O helper pode fazer raycast antes de tocar e então silenciar, trocar audioName/audioRef ou pular a reprodução conforme a configuração.",
          "en": "Native audio does not pass through WebAudio low-pass. The helper may raycast before playback and then mute, swap audioName/audioRef or skip playback according to configuration."
        },
        "code": "exports['pr_3dsound']:PlayNativeSoundFromCoords({\n    audioName = 'BEEP_RED',\n    audioRef = 'DLC_HEIST_HACKING_SNAKE_SOUNDS',\n    coords = sourceCoords,\n    range = 35.0,\n    occlusion = true,\n    occlusionMode = 'mute',\n    skipOnOcclusion = true,\n\n    -- alternativa: trocar o som quando obstruído\n    occludedAudioName = 'NAV_UP_DOWN',\n    occludedAudioRef = 'HUD_FRONTEND_DEFAULT_SOUNDSET'\n})"
      },
      {
        "id": "native-shared",
        "title": {
          "pt": "Som nativo compartilhado",
          "en": "Shared native audio"
        },
        "text": {
          "pt": "Server exports ForAll selecionam listeners elegíveis. Para entity/coords, o server não precisa transmitir cegamente para todos: ele pode selecionar players por range. Requests client-side compartilhados também possuem limites de raio, distância e cooldown.",
          "en": "Server ForAll exports select eligible listeners. For entity/coords playback the server can select players by range instead of blindly broadcasting. Client shared requests also enforce radius, source-distance and cooldown limits."
        },
        "table": {
          "headers": [
            "Proteção",
            "Valor atual"
          ],
          "rows": [
            [
              "MAX_CLIENT_RADIUS",
              "80.0"
            ],
            [
              "MAX_CLIENT_SOURCE_DISTANCE",
              "80.0"
            ],
            [
              "CLIENT_REQUEST_COOLDOWN",
              "250 ms"
            ]
          ]
        }
      },
      {
        "id": "native-api",
        "title": {
          "pt": "Exports de áudio nativo",
          "en": "Native-audio exports"
        },
        "table": {
          "headers": [
            "Lado",
            "Exports"
          ],
          "rows": [
            [
              "Client",
              "PlaySound / PlaySoundFromEntity / PlaySoundFromCoords"
            ],
            [
              "Client aliases",
              "PlayNativeSound / PlayNativeSoundFromEntity / PlayNativeSoundFromCoords"
            ],
            [
              "Client local",
              "PlayLocalNativeSound / PlayLocalNativeSoundFromEntity / PlayLocalNativeSoundFromCoords"
            ],
            [
              "Client shared",
              "PlaySharedNativeSoundFromEntity / PlaySharedNativeSoundFromCoords"
            ],
            [
              "Server",
              "PlaySound / PlaySoundFromEntity / PlaySoundFromCoords"
            ],
            [
              "Server aliases",
              "PlayNativeSound / PlayNativeSoundFromEntity / PlayNativeSoundFromCoords"
            ],
            [
              "Server all",
              "PlaySoundForAll / PlaySoundFromEntityForAll / PlaySoundFromCoordsForAll"
            ],
            [
              "Server all aliases",
              "PlayNativeSoundForAll / PlayNativeSoundFromEntityForAll / PlayNativeSoundFromCoordsForAll"
            ]
          ]
        }
      },
      {
        "id": "security",
        "title": {
          "pt": "Segurança",
          "en": "Security"
        },
        "text": {
          "pt": "A forma recomendada de controlar áudio compartilhado é chamar exports server-side dentro de resources confiáveis. No código atual, eventos client→server de controle ficam bloqueados por padrão e só passam quando pr_3dsound_allow_client_events=1 ou o player possui a ACE configurada por pr_3dsound_client_ace.",
          "en": "Recommended shared-audio control uses server-side exports from trusted resources. Current code blocks client→server control events by default unless pr_3dsound_allow_client_events=1 or the player has the ACE configured by pr_3dsound_client_ace."
        },
        "code": "# default atual\nsetr pr_3dsound_allow_client_events 0\nsetr pr_3dsound_client_ace pr_3dsound.control\n\n# liberar somente uma identidade administrativa\nadd_ace identifier.license:SUA_LICENSE pr_3dsound.control allow"
      },
      {
        "id": "security-note",
        "title": {
          "pt": "README x código atual da ACE",
          "en": "README vs current ACE behavior"
        },
        "note": {
          "pt": "O README ainda cita pr_3dsound.broadcast em alguns trechos de compatibilidade/teste. O server/server.lua v4.0.0 atual usa CLIENT_ACE = pr_3dsound.control por padrão para guarded client events. Esta documentação segue o código atual.",
          "en": "The README still mentions pr_3dsound.broadcast in some compatibility/test sections. Current server/server.lua v4.0.0 defaults CLIENT_ACE to pr_3dsound.control for guarded client events. This documentation follows current code."
        }
      },
      {
        "id": "validation",
        "title": {
          "pt": "Validação de entrada",
          "en": "Input validation"
        },
        "text": {
          "pt": "O servidor limita name, URL, paths, volume e radius. URL precisa ser http/https e ter até 2048 chars; path local rejeita '..', paths absolutos e strings acima de 256 chars; unique name aceita até 128 chars; volume é clamped em 0..1 e radius em 1..MAX_RADIUS.",
          "en": "Server validates names, URLs, local paths, volume and radius. URL must be http/https and <= 2048 chars; local paths reject '..', absolute paths and >256 chars; names allow <=128 chars; volume is clamped to 0..1 and radius to 1..MAX_RADIUS."
        }
      },
      {
        "id": "convars",
        "title": {
          "pt": "Convars de runtime",
          "en": "Runtime convars"
        },
        "table": {
          "headers": [
            "Convar",
            "Default",
            "Uso"
          ],
          "rows": [
            [
              "pr_3dsound_stream_interval",
              "1000",
              "Intervalo mínimo de streaming server-side; código limita a >=200 ms."
            ],
            [
              "pr_3dsound_stream_hysteresis",
              "8.0",
              "Margem adicional para stream-out."
            ],
            [
              "pr_3dsound_max_radius",
              "1000.0",
              "Raio máximo aceito por emitter server-side."
            ],
            [
              "pr_3dsound_entity_timeout",
              "10000",
              "Timeout de entity missing."
            ],
            [
              "pr_3dsound_entity_grace",
              "2500",
              "Grace para ownership/scope."
            ],
            [
              "pr_3dsound_allow_client_events",
              "0",
              "Compatibilidade: libera eventos client→server."
            ],
            [
              "pr_3dsound_client_ace",
              "pr_3dsound.control",
              "ACE usada para autorização."
            ],
            [
              "pr_3dsound_debug",
              "0",
              "Debug client-side."
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
        "cards": [
          [
            "Server streaming",
            "O servidor decide quem precisa receber cada emitter em vez de mandar todos os sons para todos os players."
          ],
          [
            "Histerese",
            "Reduz criação/destruição repetitiva na borda do raio."
          ],
          [
            "Raycast 400 ms",
            "Oclusão não é recalculada por frame."
          ],
          [
            "Lua attenuation",
            "Distância fica no Lua; Panner não duplica rolloff."
          ],
          [
            "Entity retry",
            "Attach tolera scope/ownership transitório sem recriar o som imediatamente."
          ],
          [
            "Unique IDs",
            "IDs server-side internos começam acima de 100000 para não colidir com sons locais."
          ]
        ]
      },
      {
        "id": "production-patterns",
        "title": {
          "pt": "Padrões recomendados em produção",
          "en": "Production patterns"
        },
        "bullets": {
          "pt": [
            "Prefira exports server-side para qualquer áudio compartilhado.",
            "Use uniqueId determinístico por objeto lógico: radio:shop:12, radio:vehicle:<netId>, alarm:door:45.",
            "Use URL direta com CORS quando espacialização precisa ser convincente.",
            "Para YouTube/SoundCloud, trate HRTF como indisponível.",
            "Não use radius maior que o necessário; deixe proximity streaming trabalhar a seu favor.",
            "Não habilite client/test_commands.lua em produção.",
            "Aplique FadeOut antes de Stop quando quiser transição suave.",
            "Use AttachToEntity/PlayUrlAttached em vez de atualizar coords manualmente quando existir Network ID confiável.",
            "Use native sound bridge para sons GTA/UI onde WebAudio não é necessário."
          ],
          "en": [
            "Prefer server-side exports for shared audio.",
            "Use deterministic unique IDs per logical object.",
            "Use direct CORS-enabled URLs when convincing spatialization matters.",
            "Treat YouTube/SoundCloud HRTF as unavailable.",
            "Keep radius no larger than necessary.",
            "Do not enable client/test_commands.lua in production.",
            "FadeOut before Stop for smooth transitions.",
            "Prefer entity attachment when a reliable Network ID exists.",
            "Use native sound bridge for GTA/UI sounds when WebAudio is unnecessary."
          ]
        }
      }
    ]
  },
  pr_placeable: {
    name:'PR Placeable',
    code:'pr_placeable',
    repo:'https://github.com/Pierremoraes-ofc/pr_placeable',
    category:{pt:'Hobby • World Items & Physical Props',en:'Hobby • World Items & Physical Props'},
    lead:{
      pt:'Sistema persistente de itens físicos para FiveM que transforma itens de inventário em objetos reais no mundo. Suporta posicionamento livre e preciso, colocação sequencial, lotes/caixas, retirada total ou unitária, transporte nas mãos, reposicionamento, persistência MariaDB, State Bags e carga presa em veículos com offset persistente, recuperação por placa e física de desprendimento por impacto ou inclinação.',
      en:'Persistent FiveM physical-item system that turns inventory items into real world objects. It supports free and precision placement, sequential placement, batches/boxes, full or single-unit pickup, hand carrying, repositioning, MariaDB persistence, State Bags and vehicle-mounted cargo with persistent offsets, plate-based recovery and impact/tilt detachment physics.'
    },
    facts:[
      ['Version','1.0.1'],
      ['Configured items','15'],
      ['Inventories','ox / QB / core_inventory'],
      ['Targets','ox_target / qb-target'],
      ['Persistence','MariaDB + State Bags'],
      ['Vehicle cargo','Plate + local offset'],
      ['Locales','PT-BR / EN-US / ES']
    ],
    sections:[
      {
        id:'overview',
        title:{pt:'Visão geral',en:'Overview'},
        text:{
          pt:'O PR Placeable não trata o prop como uma decoração temporária. Ao colocar um item, ele sai do inventário, recebe identidade persistente, é criado como entity networked, armazena quantidade, dono, metadata, posição e estado de carga, e volta ao inventário quando recolhido. O mesmo objeto pode ser colocado no chão, carregado pelo personagem, reposicionado ou preso fisicamente a um veículo.',
          en:'PR Placeable does not treat props as temporary decoration. When placed, an item leaves inventory, receives persistent identity, becomes a networked entity, stores quantity, owner, metadata, position and cargo state, and returns to inventory when picked up. The same object can be placed on the ground, carried by a character, repositioned or physically attached to a vehicle.'
        },
        cards:[
          ['Item → mundo','O item de inventário vira uma entity persistente.'],
          ['Mundo → item','Ao recolher, quantidade e metadata retornam ao inventário.'],
          ['Lotes','Itens stackable podem ser representados individualmente ou como uma caixa.'],
          ['Carry','Props podem ser carregados com animação onehand/twohand.'],
          ['Veículos','Carga pode ser fixada ao bodyshell com offset relativo persistente.'],
          ['Física','Impactos e inclinações podem desprender automaticamente a carga.']
        ]
      },
      {
        id:'architecture',
        title:{pt:'Arquitetura',en:'Architecture'},
        text:{
          pt:'O resource separa configuração do item, placement client-side, autoridade/persistência server-side e sincronização da entity. O banco mantém o estado durável; State Bags conectam a entity networked à identidade lógica; e o client reconstrói Target, carry e attach conforme o estado recebido.',
          en:'The resource separates item configuration, client-side placement, server authority/persistence and entity synchronization. The database stores durable state; State Bags connect the networked entity to logical identity; and the client rebuilds Target, carry and vehicle attachment behavior from synchronized state.'
        },
        code:"Inventory item\n   ↓ Config.Items[item]\nPlacement preview\n   ↓ confirm\nserver:savePersistentProp\n   ↓\npr_placeable_item (MariaDB)\n   ↓\nNetworked object + State Bags\n   ↓\nTarget / pickup / carry / reposition\n   ↓\nWorld position OR vehicle plate + offset"
      },
      {
        id:'providers',
        title:{pt:'Providers e dependências',en:'Providers and dependencies'},
        text:{
          pt:'A implementação atual usa QB-Core para player/citizenid e locale base, oxmysql para banco e ox_lib carregado no manifest. Inventário, Target, notificações e TextUI possuem providers configuráveis.',
          en:'The current implementation uses QB-Core for player/citizenid and base locale behavior, oxmysql for persistence and ox_lib loaded through the manifest. Inventory, Target, notifications and TextUI have configurable providers.'
        },
        table:{
          headers:['Camada','Valores atuais suportados'],
          rows:[
            ['Inventory','ox_inventory, qb-inventory, core_inventory'],
            ['Target','ox_target, qb-target'],
            ['Notify','ox_lib, qb-core'],
            ['TextUI','ox_lib ou instructional/GTA conforme fluxo do client'],
            ['Database','oxmysql / MySQL API'],
            ['Framework base','QB-Core'],
            ['UI helpers','ox_lib']
          ]
        },
        code:"Config.Inventory = 'ox_inventory'\nConfig.Target    = 'ox_target'\nConfig.Notify    = 'ox_lib'\nConfig.TextUi    = 'ox_lib'\nConfig.AddOutline = true"
      },
      {
        id:'item-definition',
        title:{pt:'Como cadastrar um item colocável',en:'How to define a placeable item'},
        text:{
          pt:'Cada item é declarado em Config.Items. A definição controla o modelo individual, modelo de caixa, capacidade de agrupamento, limites de placement, comportamento Freeze, tratamento como pickup nativo do GTA e animações usadas para carregar com uma ou duas mãos.',
          en:'Each placeable item is declared in Config.Items. The definition controls individual model, box model, stacking capability, placement limits, Freeze behavior, native GTA pickup handling and one/two-handed carry animations.'
        },
        code:"Config.Items['jerry_can'] = {\n    prop      = 'w_am_jerrycan',\n    box       = 'v_serv_abox_02',\n    stackable = false,\n    maxPlace  = 4,\n    maxBox    = 8,\n    Freeze    = false,\n    is_pickup = true,\n\n    twohand = {\n        dict = 'weapons@misc@jerrycan@mp_male',\n        anim = 'idle',\n        bone = 28422,\n        pos  = vector3(0.0, -0.1, -0.1),\n        rot  = vector3(0.0, 0.0, 0.0),\n        flag = 51\n    },\n\n    onehand = {\n        dict = 'weapons@misc@jerrycan@mp_male',\n        anim = 'idle_c',\n        bone = 28422,\n        pos  = vector3(0.0, -0.1, -0.1),\n        rot  = vector3(0.0, 0.0, 0.0),\n        flag = 49\n    }\n}"
      },
      {
        id:'item-fields',
        title:{pt:'Campos de Config.Items',en:'Config.Items fields'},
        table:{
          headers:['Campo','Função'],
          rows:[
            ['prop','Modelo GTA usado para uma unidade individual.'],
            ['box / propbox','Modelo visual usado para representar um lote/caixa.'],
            ['stackable','Permite escolher múltiplas unidades no placement.'],
            ['maxPlace','Limite de unidades colocadas individualmente em sequência.'],
            ['maxBox','Máximo de unidades representadas por uma caixa.'],
            ['Freeze','Define se o objeto deve ficar congelado quando repousa no mundo.'],
            ['is_pickup','Ativa tratamento especial para modelos que o GTA reconhece como pickup.'],
            ['onehand','Animação, bone, posição e rotação ao carregar unidade.'],
            ['twohand','Animação, bone, posição e rotação ao carregar caixa/lote.']
          ]
        }
      },
      {
        id:'catalog',
        title:{pt:'Catálogo padrão atual',en:'Current default catalog'},
        text:{
          pt:'A configuração atual inclui 15 itens de exemplo cobrindo bebidas, comida, utilidades, combustível, cilindros e estruturas. O objetivo é demonstrar diferentes classes físicas e não limitar o resource a esses itens.',
          en:'The current configuration includes 15 sample items across drinks, food, utilities, fuel, cylinders and structures. They demonstrate different physical classes rather than limiting the resource to these items.'
        },
        table:{
          headers:['Categoria','Itens configurados'],
          rows:[
            ['Bebidas','water, sprunk, beer, whiskey, vodka, wine, wine_glass, coffee'],
            ['Comida','sandwich'],
            ['Utilidades','jerry_can, diving_fill, nitrous'],
            ['Estruturas','tendinha, caixa_mad, fogueira']
          ]
        }
      },
      {
        id:'placement',
        title:{pt:'Sistema de posicionamento',en:'Placement system'},
        text:{
          pt:'Ao iniciar o placement, o client cria uma prévia do prop em frente ao personagem. O jogador movimenta, gira e ajusta altura enquanto o sistema tenta resolver a superfície abaixo do objeto. O contorno opcional facilita visualizar a peça antes de confirmar.',
          en:'When placement starts, the client creates a preview in front of the character. The player moves, rotates and adjusts height while the system resolves the surface below the object. Optional outline rendering makes the object easier to position before confirmation.'
        },
        cards:[
          ['Preview real','O próprio modelo é criado localmente durante o ajuste.'],
          ['Surface detection','A altura pode acompanhar a superfície encontrada.'],
          ['Heading','Rotação é ajustável antes de persistir.'],
          ['Manual Z','Permite sair do snap automático e controlar altura.'],
          ['Outline','Config.AddOutline destaca visualmente o objeto.'],
          ['Cancelamento','Cancelar remove a prévia sem consumir o item.']
        ]
      },
      {
        id:'precision',
        title:{pt:'Modo de precisão',en:'Precision mode'},
        text:{
          pt:'O placement possui modo normal e modo de precisão. O mesmo controlador centralizado altera offsets horizontal/vertical e heading, permitindo fazer desde colocação rápida de caixas no chão até alinhamento fino de objetos sobre bancadas, prateleiras ou carrocerias.',
          en:'Placement supports normal and precision modes. The same centralized controller adjusts horizontal/vertical offsets and heading, enabling both quick floor placement and fine alignment on counters, shelves or vehicle beds.'
        },
        note:{
          pt:'O modo também é reutilizado ao reposicionar um prop que já existe no mundo, evitando destruir e recriar o item.',
          en:'The same placement mode is reused when repositioning an existing prop, avoiding destroy/recreate cycles.'
        }
      },
      {
        id:'stacking',
        title:{pt:'Itens stackable, unidades e caixas',en:'Stackable items, units and boxes'},
        text:{
          pt:'Quando um item stackable possui quantidade maior que 1, o export placeItem abre uma seleção de quantidade. O jogador pode colocar várias unidades individualmente, em sequência, ou usar um modelo de caixa para representar um lote inteiro quando box/propbox estiver configurado.',
          en:'When a stackable item has more than one unit, the placeItem export opens a quantity selector. Players can place several units sequentially or use a box model to represent an entire batch when box/propbox is configured.'
        },
        table:{
          headers:['Modo','Persistência','Comportamento'],
          rows:[
            ['Individual','quantity normalmente 1 por prop','Cada unidade vira uma entity própria.'],
            ['Sequencial','Vários placements consecutivos','O fluxo chama o placement repetidamente até atingir a quantidade.'],
            ['Caixa/lote','Uma entity com quantity > 1 e is_box=true','Representa várias unidades em um único objeto físico.']
          ]
        }
      },
      {
        id:'box-example',
        title:{pt:'Exemplo: caixa com 12 bebidas',en:'Example: 12-drink box'},
        steps:{
          pt:[
            'O inventário possui 20 unidades do item.',
            'Config.stackable está ativo e maxBox permite pelo menos 12.',
            'O jogador aciona placeItem.',
            'Seleciona quantidade 12 e marca opção de caixa.',
            'O client usa o modelo box/propbox.',
            'O servidor salva quantity = 12 e is_box = 1.',
            'O inventário perde 12 unidades.',
            'No mundo existe apenas uma entity representando o lote.'
          ],
          en:[
            'Inventory contains 20 units.',
            'Config.stackable is enabled and maxBox allows at least 12.',
            'Player invokes placeItem.',
            'Player selects quantity 12 and box mode.',
            'Client uses the box/propbox model.',
            'Server stores quantity = 12 and is_box = 1.',
            'Inventory removes 12 units.',
            'Only one world entity represents the batch.'
          ]
        }
      },
      {
        id:'pickup',
        title:{pt:'Retirada total ou unitária',en:'Full or single-unit pickup'},
        text:{
          pt:'Targets de um lote oferecem duas operações diferentes. Recolher o lote inteiro apaga a row, remove a entity e devolve quantity itens. Recolher uma unidade decrementa quantity no banco e State Bag sem destruir o prop enquanto ainda restarem unidades.',
          en:'Batch targets expose two distinct operations. Picking up the whole batch deletes the row, removes the entity and returns quantity items. Picking up one unit decrements quantity in database and synchronized state without destroying the prop while units remain.'
        },
        code:"-- lote com quantity = 12\npickup whole -> AddItem(item, 12) + DELETE row\npickup unit  -> quantity = 11 + AddItem(item, 1)\n...\nlast unit    -> DELETE row + DeleteEntity"
      },
      {
        id:'carry',
        title:{pt:'Carregar props nas mãos',en:'Carry props by hand'},
        text:{
          pt:'Além de recolher para o inventário, o jogador pode simplesmente carregar o objeto existente. O prop é attachado ao bone configurado do ped e a animação definida no próprio item permanece ativa enquanto o carry estiver em andamento.',
          en:'Instead of returning an object to inventory, players can carry the existing world entity. The prop attaches to the configured ped bone and the item-specific animation remains active while carrying.'
        },
        table:{
          headers:['Estado','Animação usada'],
          rows:[
            ['Prop individual','Config.Items[item].onehand'],
            ['Caixa/lote','Config.Items[item].twohand']
          ]
        }
      },
      {
        id:'reposition',
        title:{pt:'Reposicionar sem recriar',en:'Reposition without recreating'},
        text:{
          pt:'Durante o carry, o jogador pode entrar novamente no modo de posicionamento. A entity atual é desacoplada do ped, fica semi-transparente/realçada e passa a usar o mesmo controlador de placement. Confirmar atualiza coordenadas no banco ou cria o attach no veículo; cancelar retorna ao carry.',
          en:'While carrying, the player can re-enter placement mode. The current entity detaches from the ped, becomes a highlighted placement object and reuses the same controller. Confirming updates world coordinates or creates vehicle attachment; cancelling returns to carry.'
        }
      },
      {
        id:'vehicle-cargo',
        title:{pt:'Carga física em veículos',en:'Physical vehicle cargo'},
        text:{
          pt:'Se a superfície detectada durante a confirmação for um veículo — ou um prop que já esteja preso a um veículo — o PR Placeable calcula coordenadas locais em relação ao veículo e persiste placa + offset. O prop é então attachado ao bone bodyshell, mantendo sua posição relativa durante o movimento.',
          en:'If the detected placement surface is a vehicle — or another prop already attached to a vehicle — PR Placeable calculates vehicle-local coordinates and persists plate + offset. The prop then attaches to the bodyshell bone, preserving relative position while the vehicle moves.'
        },
        code:"offset = {\n    x = localCoords.x,\n    y = localCoords.y,\n    z = localCoords.z,\n    h = propHeading - vehicleHeading\n}\n\nDB:\nin_vehicle = 1\nvehicle_plate = plate\nvehicle_offset_x/y/z/h = offset"
      },
      {
        id:'vehicle-recovery',
        title:{pt:'Persistência por placa e recuperação',en:'Plate persistence and recovery'},
        text:{
          pt:'Uma carga presa continua relacionada ao veículo mesmo quando ele não está presente no streaming local. Ao carregar o prop, o client procura a placa; se o veículo ainda não existir, oculta o prop e o coloca em pendingVehicleProps. Um scanner periódico percorre veículos streamados e faz o attach assim que a placa correspondente reaparece.',
          en:'Mounted cargo remains associated with a vehicle even while that vehicle is not locally streamed. On prop load, the client searches for its plate; if unavailable, the prop is hidden and queued in pendingVehicleProps. A periodic scanner checks streamed vehicles and reattaches cargo when the matching plate appears.'
        },
        table:{
          headers:['Config','Padrão','Função'],
          rows:[
            ['VehicleScanMs','2000 ms','Procura veículos para props pendentes por placa.'],
            ['CoordsSyncMs','8000 ms','Intervalo configurado para sincronização periódica de coordenadas.'],
            ['vehicle_plate','Persistido','Identidade usada para reencontrar o veículo.'],
            ['vehicle_offset_*','Persistido','Reconstrói a posição local da carga.']
          ]
        }
      },
      {
        id:'vehicle-physics',
        title:{pt:'Física de desprendimento da carga',en:'Cargo detachment physics'},
        text:{
          pt:'Props presos em veículos têm um monitor de física próprio. Inclinação lateral/frontal acima dos limites ou uma variação brusca de velocidade pode romper o attach. Em vez de simplesmente soltar o prop parado, o sistema calcula impulso com base na velocidade do veículo, direção do impacto e inclinação e aplica força/torque para produzir uma queda coerente.',
          en:'Vehicle-mounted props have their own physics monitor. Excessive roll/pitch or a sharp velocity delta can break the attachment. Instead of dropping the prop statically, the system derives impulse from vehicle speed, impact direction and tilt and applies force/torque for believable cargo motion.'
        },
        table:{
          headers:['Parâmetro','Padrão','Efeito'],
          rows:[
            ['MaxRoll','35°','Desprende por inclinação lateral excessiva.'],
            ['MaxPitch','35°','Desprende por inclinação frontal excessiva.'],
            ['ImpactThreshold','8.0 m/s Δv','Desprende após mudança brusca do vetor de velocidade.'],
            ['PhysicsCheckMs','300 ms','Frequência do monitor de física.'],
            ['Impulse','~17% da velocidade','Base usada pelo cálculo cinematográfico de lançamento.']
          ]
        }
      },
      {
        id:'physics-scenarios',
        title:{pt:'Cenários físicos simulados',en:'Simulated physics scenarios'},
        cards:[
          ['Impacto frontal','Carga tende a continuar na direção anterior do movimento com componente vertical.'],
          ['Impacto lateral','O cálculo adiciona desvio lateral conforme a direção do delta de velocidade.'],
          ['Capotamento','Roll/pitch influenciam o vetor de desprendimento.'],
          ['Torque','Força angular aleatória limitada adiciona rotação visual ao objeto.'],
          ['Freeze posterior','Itens configurados com Freeze podem ser congelados novamente após estabilização.']
        ]
      },
      {
        id:'native-pickups',
        title:{pt:'Tratamento de pickups nativos do GTA',en:'Native GTA pickup handling'},
        text:{
          pt:'Alguns modelos, como armas/utilidades reconhecidas pelo jogo como pickup, não funcionam de forma confiável com raycast de addLocalEntity. Para itens marcados is_pickup=true, o resource usa uma sphere zone do ox_target e atualiza sua posição periodicamente.',
          en:'Some models recognized by GTA as native pickups do not behave reliably with addLocalEntity raycasts. For items marked is_pickup=true, the resource uses an ox_target sphere zone and periodically rebuilds it at the object position.'
        },
        code:"if cfg.is_pickup then\n    exports.ox_target:addSphereZone({\n        coords = GetEntityCoords(entity),\n        radius = 1.5,\n        options = options\n    })\nelse\n    exports.ox_target:addLocalEntity(entity, options)\nend"
      },
      {
        id:'targets',
        title:{pt:'Opções disponíveis no Target',en:'Target actions'},
        text:{
          pt:'Cada prop recebe opções de interação conforme quantidade e estado. Para lotes, a interface diferencia recolher tudo de retirar apenas uma unidade; todos podem oferecer carry. O provider pode ser ox_target ou qb-target.',
          en:'Each prop receives interaction options based on quantity and state. Batches distinguish full pickup from single-unit pickup, while objects can also expose carry. Target provider can be ox_target or qb-target.'
        },
        table:{
          headers:['Ação','Resultado'],
          rows:[
            ['Recolher','Remove o prop e devolve toda a quantity.'],
            ['Pegar 1 unidade','Disponível quando quantity > 1; decrementa o lote.'],
            ['Carregar','Mantém a entity no mundo e prende ao personagem.'],
            ['Reposicionar','Acessado a partir do carry para mover o mesmo objeto.']
          ]
        }
      },
      {
        id:'statebags',
        title:{pt:'State Bags e identidade runtime',en:'State Bags and runtime identity'},
        text:{
          pt:'A entity networked carrega dados que evitam depender de consultas SQL para cada interação. O client usa esses estados para identificar item, propId, metadata, quantity, is_box, freeze e associação com veículo.',
          en:'The networked entity carries state that avoids SQL lookups for every interaction. Clients use these values to identify item, propId, metadata, quantity, box state, freeze behavior and vehicle association.'
        },
        table:{
          headers:['State','Uso'],
          rows:[
            ['useditem','Item de inventário originário.'],
            ['propid','ID persistente lógico.'],
            ['metadata','Metadata devolvida no pickup.'],
            ['quantity','Quantidade representada pela entity.'],
            ['is_box','Indica lote/caixa.'],
            ['freeze','Comportamento de congelamento.'],
            ['in_vehicle','Indica associação com veículo.'],
            ['vehicle_plate','Placa persistente do veículo associado.']
          ]
        }
      },
      {
        id:'database',
        title:{pt:'Banco de dados',en:'Database'},
        text:{
          pt:'A tabela pr_placeable_item representa cada objeto persistente. A mesma row suporta objeto solto e carga veicular; quando in_vehicle=1, placa e offsets complementam a posição mundial.',
          en:'The pr_placeable_item table represents each persistent object. The same row supports free-standing objects and vehicle cargo; when in_vehicle=1, plate and local offsets complement world coordinates.'
        },
        table:{
          headers:['Campo','Função'],
          rows:[
            ['id','Identificador persistente do prop.'],
            ['model','Hash/model salvo.'],
            ['item','Item de inventário de origem.'],
            ['quantity','Quantidade representada.'],
            ['is_box','Marca lote/caixa.'],
            ['freeze','Estado de congelamento usado pelo runtime.'],
            ['x / y / z / heading','Transform mundial.'],
            ['citizen','Citizen ID de quem colocou.'],
            ['metadata','Metadata serializada do item.'],
            ['in_vehicle','Indica attach persistente.'],
            ['vehicle_plate','Veículo associado.'],
            ['vehicle_offset_x/y/z/h','Transform local relativa ao veículo.']
          ]
        }
      },
      {
        id:'persistence-flow',
        title:{pt:'Fluxo de persistência',en:'Persistence flow'},
        steps:{
          pt:[
            'Player escolhe item/quantidade no inventário.',
            'Client cria a prévia e recebe a posição final.',
            'Servidor gera um propId.',
            'Row é inserida em pr_placeable_item.',
            'Servidor cria a entity networked.',
            'State Bags recebem identidade e estado operacional.',
            'Item/quantidade são removidos do inventário.',
            'Clients registram Target e comportamento local.',
            'Movimentos posteriores atualizam coords ou attach no banco.',
            'Pickup devolve o item e remove/decrementa a persistência.'
          ],
          en:[
            'Player chooses an inventory item/quantity.',
            'Client previews and confirms final placement.',
            'Server generates a propId.',
            'A row is inserted into pr_placeable_item.',
            'Server creates the networked entity.',
            'State Bags receive logical and operational state.',
            'Inventory removes the placed amount.',
            'Clients register target and local behavior.',
            'Later movement updates coordinates or vehicle attachment.',
            'Pickup restores inventory and deletes/decrements persistence.'
          ]
        }
      },
      {
        id:'inventory-usage',
        title:{pt:'Como usar o item pelo inventário',en:'How to use an item from inventory'},
        text:{
          pt:'O PR Placeable precisa receber o item ou slot selecionado no inventário para iniciar o placement. O ponto comum entre os providers é o export client-side placeItem. Cada inventário apenas precisa oferecer uma ação como Colocar/Place e encaminhar o slot ou os dados do item para esse export.',
          en:'PR Placeable needs the selected inventory item or slot to start placement. The common entry point for all providers is the client-side placeItem export. Each inventory only needs to expose an action such as Place and forward the selected slot or item data to that export.'
        },
        code:"exports['pr_placeable']:placeItem(slot)\n\n-- o export identifica o provider definido em Config.Inventory\n-- resolve o item selecionado\n-- consulta Config.Items[item.name]\n-- fecha o inventário\n-- inicia placement individual, sequencial ou caixa/lote",
        note:{
          pt:'O item também precisa existir em Config.Items. A integração do botão do inventário apenas inicia o fluxo; modelo, stackable, maxPlace, maxBox, Freeze e animações continuam sendo definidos pelo PR Placeable.',
          en:'The item must also exist in Config.Items. The inventory button only starts the flow; model, stackable behavior, maxPlace, maxBox, Freeze and carry animations are still defined by PR Placeable.'
        }
      },
      {
        id:'inventory-provider',
        title:{pt:'Selecionando o inventário',en:'Selecting the inventory provider'},
        text:{
          pt:'Defina em config.lua qual inventário está sendo usado. O mesmo export placeItem adapta a leitura do slot conforme o provider selecionado.',
          en:'Set the inventory provider in config.lua. The same placeItem export adapts slot lookup according to the selected provider.'
        },
        code:"-- ox_inventory\nConfig.Inventory = 'ox_inventory'\n\n-- qb-inventory\nConfig.Inventory = 'qb-inventory'\n\n-- core_inventory\nConfig.Inventory = 'core_inventory'",
        table:{
          headers:['Provider','Como o PR Placeable resolve o item'],
          rows:[
            ['ox_inventory',"exports['ox_inventory']:GetPlayerItems()[slot] ou recebe a tabela do item diretamente."],
            ['qb-inventory',"exports['qb-inventory']:GetInventoryItem(slot)."],
            ['core_inventory',"exports['core_inventory']:GetItem(slot)."]
          ]
        }
      },
      {
        id:'ox-inventory-usage',
        title:{pt:'ox_inventory — configurar a ação de colocar',en:'ox_inventory — configure the place action'},
        text:{
          pt:'No ox_inventory, a forma mais direta é registrar no próprio item um client export apontando para pr_placeable.placeItem. Ao usar a ação do item, o ox_inventory entrega o slot/dados ao export e o PR Placeable inicia o placement.',
          en:'With ox_inventory, the most direct integration is to register a client export on the item pointing to pr_placeable.placeItem. When that item action is used, ox_inventory forwards the slot/item data and PR Placeable starts placement.'
        },
        code:"-- exemplo no arquivo de itens do ox_inventory\n['water'] = {\n    label = 'Água',\n    weight = 500,\n    stack = true,\n    close = true,\n\n    client = {\n        export = 'pr_placeable.placeItem'\n    }\n}",
        steps:{
          pt:[
            "Defina Config.Inventory = 'ox_inventory'.",
            'Cadastre o item normalmente no ox_inventory.',
            "No bloco client do item, adicione export = 'pr_placeable.placeItem'.",
            'Cadastre o mesmo nome do item em Config.Items do PR Placeable.',
            'Ao acionar o item pelo inventário, o export recebe o slot/tabela.',
            'O PR Placeable fecha o inventário e verifica stackable, maxPlace e maxBox.',
            'O placement é iniciado com o modelo configurado para aquele item.'
          ],
          en:[
            "Set Config.Inventory = 'ox_inventory'.",
            'Register the item normally in ox_inventory.',
            "Add export = 'pr_placeable.placeItem' to the item client block.",
            'Register the same item name in PR Placeable Config.Items.',
            'Using the inventory item forwards its slot/table to the export.',
            'PR Placeable closes the inventory and checks stackable, maxPlace and maxBox.',
            'Placement starts with the configured model.'
          ]
        }
      },
      {
        id:'ox-complete-example',
        title:{pt:'ox_inventory — exemplo completo com Config.Items',en:'ox_inventory — complete Config.Items example'},
        text:{
          pt:'O nome usado pelo inventário deve corresponder à chave usada em Config.Items. O inventário define como o jogador chama o resource; o PR Placeable define como aquele item se comporta fisicamente.',
          en:'The inventory item name must match the key used in Config.Items. Inventory configuration defines how the player invokes the resource; PR Placeable defines how the item behaves physically.'
        },
        code:"-- ox_inventory/data/items.lua\n['water'] = {\n    label = 'Água',\n    weight = 500,\n    stack = true,\n    close = true,\n    client = { export = 'pr_placeable.placeItem' }\n}\n\n-- pr_placeable/config.lua\nConfig.Items['water'] = {\n    prop = 'prop_ld_flow_bottle',\n    propbox = 'v_serv_abox_02',\n    stackable = true,\n    maxPlace = 10,\n    maxBox = 24,\n    Freeze = false,\n    is_pickup = false,\n    onehand = { /* animação */ },\n    twohand = { /* animação */ }\n}"
      },
      {
        id:'qb-inventory-usage',
        title:{pt:'qb-inventory — adicionar opção PLACE',en:'qb-inventory — add a PLACE action'},
        text:{
          pt:'No qb-inventory, o padrão documentado é criar uma área/opção PLACE na interface e encaminhar o item selecionado para um NUI callback. Na implementação atual, esse callback pode chamar diretamente o export placeItem do PR Placeable, passando data.item ou o slot correspondente.',
          en:'For qb-inventory, the documented pattern is to add a PLACE area/action to the UI and forward the selected item through a NUI callback. In the current implementation, that callback can call the PR Placeable placeItem export directly with data.item or the corresponding slot.'
        },
        code:"<!-- qb-inventory/html/ui.html -->\n<div class=\"inv-option-item\" id=\"item-use\"><p>USE</p></div>\n<div class=\"inv-option-item\" id=\"item-place\"><p>PLACE</p></div>",
        note:{
          pt:'Essa abordagem segue a integração apresentada no README original, mas usando o entry point atual do PR Placeable.',
          en:'This follows the integration pattern shown in the original README while using the current PR Placeable entry point.'
        }
      },
      {
        id:'qb-inventory-js',
        title:{pt:'qb-inventory — ação da interface',en:'qb-inventory — UI action'},
        text:{
          pt:'No JavaScript do qb-inventory, faça a área PLACE receber o item arrastado e enviar os dados para o callback PlaceItem.',
          en:'In qb-inventory JavaScript, make the PLACE area accept the dragged item and post its data to the PlaceItem callback.'
        },
        code:"$('#item-place').droppable({\n    hoverClass: 'button-hover',\n    drop: function (event, ui) {\n        setTimeout(function () {\n            IsDragging = false\n        }, 300)\n\n        fromData = ui.draggable.data('item')\n\n        if (fromData.useable) {\n            Inventory.Close()\n            $.post(\n                'https://qb-inventory/PlaceItem',\n                JSON.stringify({ item: fromData })\n            )\n        }\n    }\n})"
      },
      {
        id:'qb-inventory-callback',
        title:{pt:'qb-inventory — callback client',en:'qb-inventory — client callback'},
        text:{
          pt:'No client do qb-inventory, registre o NUI callback e repasse o item para o export do PR Placeable. O export atual aceita uma tabela de item quando o fluxo fornece os dados diretamente.',
          en:'In the qb-inventory client, register the NUI callback and forward the item to PR Placeable. The current export accepts item data directly when the integration provides a table.'
        },
        code:"RegisterNUICallback('PlaceItem', function(data, cb)\n    exports['pr_placeable']:placeItem(data.item)\n    cb('ok')\nend)"
      },
      {
        id:'core-inventory-usage',
        title:{pt:'core_inventory — adicionar opção PLACE',en:'core_inventory — add a PLACE action'},
        text:{
          pt:'Para core_inventory, o README original adiciona uma nova ação PLACE ao menu contextual. O princípio continua o mesmo: a interface envia o item escolhido a um NUI callback e o callback chama o PR Placeable.',
          en:'For core_inventory, the original README adds a new PLACE action to the contextual menu. The same principle applies: the UI forwards the selected item to a NUI callback and that callback invokes PR Placeable.'
        },
        code:"-- core_inventory/config.lua\n['use']   = 'USE',\n['place'] = 'PLACE',"
      },
      {
        id:'core-inventory-nui',
        title:{pt:'core_inventory — callback NUI',en:'core_inventory — NUI callback'},
        text:{
          pt:'Adicione um callback para a ação Place. Se sua versão do core_inventory entregar o item completo, encaminhe essa tabela; se entregar apenas slot/id, encaminhe esse identificador, pois placeItem também resolve o item através do provider core_inventory.',
          en:'Add a callback for the Place action. If your core_inventory version provides the complete item, forward that table; if it provides only slot/id, forward that identifier because placeItem can resolve it through the core_inventory provider.'
        },
        code:"RegisterNUICallback('placeItem', function(data, cb)\n    local itemOrSlot = data.item or data.slot or data.exact\n    exports['pr_placeable']:placeItem(itemOrSlot)\n    cb('ok')\nend)"
      },
      {
        id:'core-inventory-js',
        title:{pt:'core_inventory — função PLACE na interface',en:'core_inventory — PLACE UI function'},
        text:{
          pt:'No JavaScript do inventário, crie a função responsável por fechar a interface e disparar o callback NUI.',
          en:'In the inventory JavaScript, create a function that closes the interface and triggers the NUI callback.'
        },
        code:"function placeItem(item) {\n    closeMenu()\n\n    $.post('https://core_inventory/placeItem', JSON.stringify({\n        item: item\n    }))\n}"
      },
      {
        id:'inventory-flow',
        title:{pt:'Fluxo completo: inventário → mundo',en:'Complete flow: inventory → world'},
        steps:{
          pt:[
            'O jogador abre o inventário.',
            'Seleciona um item configurado como colocável.',
            'Usa a ação PLACE/Colocar ou o client export do item.',
            "O inventário chama exports['pr_placeable']:placeItem(...).",
            'PR Placeable resolve nome, slot e quantidade de acordo com Config.Inventory.',
            'O nome do item é procurado em Config.Items.',
            'O inventário é fechado.',
            'Se stackable=false ou houver uma unidade, abre placement simples.',
            'Se stackable=true, o jogador escolhe quantidade e, quando disponível, caixa/lote.',
            'Ao confirmar a posição, o servidor persiste a entity e remove a quantidade correta do inventário.'
          ],
          en:[
            'Player opens the inventory.',
            'Selects an item configured as placeable.',
            'Uses the PLACE action or item client export.',
            "Inventory calls exports['pr_placeable']:placeItem(...).",
            'PR Placeable resolves item name, slot and quantity based on Config.Inventory.',
            'Item name is looked up in Config.Items.',
            'Inventory is closed.',
            'If stackable=false or only one unit exists, simple placement starts.',
            'If stackable=true, player chooses quantity and optional box/batch mode.',
            'After confirmation, the server persists the entity and removes the correct inventory amount.'
          ]
        }
      },
      {
        id:'inventory-checklist',
        title:{pt:'Checklist para um item funcionar',en:'Checklist for a working item'},
        bullets:{
          pt:[
            'Config.Inventory precisa corresponder ao inventário realmente usado pelo servidor.',
            'O item precisa existir no inventário.',
            'O mesmo nome precisa existir em Config.Items.',
            'O inventário precisa chamar pr_placeable.placeItem ao usar a ação Colocar.',
            'prop precisa apontar para um model GTA válido.',
            'Para caixas, configure propbox/box e maxBox.',
            'Para múltiplas unidades individuais, use stackable=true e maxPlace.',
            'Se o modelo for tratado pelo GTA como pickup e não receber Target corretamente, marque is_pickup=true.',
            'Teste a ação de inventário antes de depurar o placement: se placeItem não for chamado, o problema está na integração do inventário.'
          ],
          en:[
            'Config.Inventory must match the inventory actually used by the server.',
            'The item must exist in inventory.',
            'The same name must exist in Config.Items.',
            'Inventory must invoke pr_placeable.placeItem from its Place action.',
            'prop must reference a valid GTA model.',
            'For boxes, configure propbox/box and maxBox.',
            'For multiple individual units, use stackable=true and maxPlace.',
            'If GTA treats the model as a native pickup and Target fails, set is_pickup=true.',
            'Test the inventory action before debugging placement: if placeItem is never called, the issue is in inventory integration.'
          ]
        }
      },
      {
        id:'export',
        title:{pt:'Export para integração com inventários',en:'Inventory integration export'},
        text:{
          pt:'O principal export client-side é placeItem(slot). Ele resolve o item conforme o provider selecionado, consulta Config.Items, fecha o inventário e decide se abre placement simples, fluxo sequencial ou caixa/lote.',
          en:'The main client export is placeItem(slot). It resolves the selected inventory slot, reads Config.Items, closes inventory and chooses simple placement, sequential placement or box/batch flow.'
        },
        code:"-- exemplo de integração\nexports['pr_placeable']:placeItem(slot)\n\n-- o resource resolve:\n-- item.name\n-- item.count/amount\n-- Config.Items[item.name]\n-- prop / propbox / maxPlace / maxBox"
      },
      {
        id:'examples',
        title:{pt:'Modelos de uso',en:'Usage models'},
        table:{
          headers:['Cenário','Como usar o PR Placeable'],
          rows:[
            ['Loja/mercado','Garrafas, latas, comida e caixas físicas com retirada unitária.'],
            ['Bar/restaurante','Bebidas e copos posicionáveis sobre balcões e mesas.'],
            ['Acampamento','Tenda, fogueira e caixas persistentes no mundo.'],
            ['Oficina','Galões, cilindros, nitro e peças físicas no chão ou bancada.'],
            ['Entrega/logística','Caixas com quantity, carry e carga presa ao veículo.'],
            ['Pickup/carga','Jerry can e outros modelos especiais usando sphere zone.'],
            ['Roleplay de mudança','Objetos carregados nas mãos e reposicionados sem ir ao inventário.'],
            ['Caminhão/pickup','Carga posicionada na carroceria com offset persistente e física de queda.']
          ]
        }
      },
      {
        id:'truck-example',
        title:{pt:'Exemplo: carregar uma caminhonete',en:'Example: loading a pickup truck'},
        steps:{
          pt:[
            'Player coloca uma caixa perto da carroceria.',
            'Usa Carregar para pegar a entity nas mãos.',
            'Entra no modo de reposicionamento.',
            'Move a caixa sobre a carroceria.',
            'O raycast identifica o veículo como superfície.',
            'O client converte posição mundial para offset local.',
            'Servidor persiste plate + offset e in_vehicle=1.',
            'A caixa acompanha o veículo.',
            'Se o veículo sair do streaming, a associação continua persistida.',
            'Quando a mesma placa reaparece, o client reanexa a carga.',
            'Impacto forte ou inclinação excessiva pode derrubar a caixa.'
          ],
          en:[
            'Player places a box near the truck bed.',
            'Uses Carry to hold the existing entity.',
            'Enters reposition mode.',
            'Moves the box over the truck bed.',
            'Surface detection identifies the vehicle.',
            'Client converts world position to local offset.',
            'Server persists plate + offset and in_vehicle=1.',
            'The box follows the vehicle.',
            'If the vehicle leaves streaming, association remains persistent.',
            'When the same plate reappears, the client reattaches cargo.',
            'A strong impact or excessive tilt can throw the box off.'
          ]
        }
      },
      {
        id:'locales',
        title:{pt:'Idiomas',en:'Locales'},
        text:{
          pt:'O recurso possui arquivos de locale para PT-BR, EN-US e ES. Mensagens de placement, pickup, carry, quantidade, caixa e targets são resolvidas pelo sistema de locale usado no resource.',
          en:'The resource includes PT-BR, EN-US and ES locale files. Placement, pickup, carry, quantity, box and target strings are resolved through the resource locale system.'
        }
      },
      {
        id:'performance',
        title:{pt:'Performance e loops',en:'Performance and loops'},
        text:{
          pt:'As rotinas mais frequentes são condicionais ao estado. O monitor de física só existe enquanto um prop está attached; a busca de veículos pendentes roda no intervalo configurado; targets são verificados periodicamente; e o banco recebe atualização de movimento em eventos/sincronizações, não por frame.',
          en:'Frequent routines are state-dependent. Physics monitoring only runs while a prop is attached; pending vehicle scans use a configurable interval; targets are checked periodically; and database position writes happen through events/synchronization rather than every frame.'
        },
        cards:[
          ['300 ms','Monitor de física de carga attached.'],
          ['2 s','VehicleScanMs padrão para reencontrar placas.'],
          ['1.5 s','Monitor client de criação de Targets.'],
          ['8 s','CoordsSyncMs configurado para sincronização de posição.'],
          ['State Bags','Dados runtime ficam na entity, reduzindo lookup SQL por interação.']
        ]
      },
      {
        id:'security-notes',
        title:{pt:'Autoridade e pontos de atenção',en:'Authority and important considerations'},
        bullets:{
          pt:[
            'O servidor é responsável por persistir, criar a entity e remover/adicionar itens do inventário.',
            'Cada prop registra o citizenid do personagem que o colocou.',
            'Pickup só prossegue para entities conhecidas na lista server-side de props persistentes.',
            'Quantidade de lotes é persistida e sincronizada após retirada unitária.',
            'Attach/detach atualizam o banco para que o estado sobreviva a streaming/restart.',
            'Modelos marcados is_pickup precisam do fluxo especial de zone para interação confiável.',
            'A configuração atual ainda é baseada em QB-Core no servidor; os providers de inventory não significam independência completa de framework.'
          ],
          en:[
            'The server persists state, creates the entity and removes/adds inventory items.',
            'Each prop stores the citizenid of the character that placed it.',
            'Pickup only proceeds for entities known by the server-side persistent prop list.',
            'Batch quantity persists and synchronizes after single-unit pickup.',
            'Attach/detach update database state so it survives streaming/restarts.',
            'Models marked is_pickup require the special zone flow for reliable interaction.',
            'The current server implementation still depends on QB-Core; inventory provider support does not imply complete framework independence.'
          ]
        }
      },
      {
        id:'production-patterns',
        title:{pt:'Boas práticas de configuração',en:'Recommended production patterns'},
        bullets:{
          pt:[
            'Use stackable somente quando fizer sentido representar várias unidades do mesmo item.',
            'Defina maxPlace para evitar que grandes stacks gerem dezenas de entities em uma única ação.',
            'Use box/propbox para mercadorias, entregas e armazenamento físico de grandes quantidades.',
            'Marque is_pickup=true para modelos problemáticos com raycast de entity.',
            'Configure Freeze=true para estruturas que não devem reagir à física após placement.',
            'Ajuste onehand/twohand por modelo para evitar clipping durante o carry.',
            'Para cargas em veículos, teste offsets em diferentes classes e tamanhos de carroceria.',
            'Não reduza demais PhysicsCheckMs em servidores com grande volume de carga attached.',
            'Ajuste ImpactThreshold conforme o nível de realismo desejado; valores menores derrubam carga com impactos leves.',
            'Mantenha MaxRoll/MaxPitch coerentes com o comportamento esperado de pickups, caminhões e veículos off-road.'
          ],
          en:[
            'Use stackable only when multiple units should logically share the same placement flow.',
            'Set maxPlace to prevent large stacks from generating dozens of entities in one action.',
            'Use box/propbox for merchandise, deliveries and physical bulk storage.',
            'Mark problematic native pickup models with is_pickup=true.',
            'Use Freeze=true for structures that should stop reacting to physics after placement.',
            'Tune onehand/twohand animations per model to reduce carry clipping.',
            'Test vehicle cargo offsets across different bed/body dimensions.',
            'Do not over-aggressively lower PhysicsCheckMs on servers with many attached cargo props.',
            'Tune ImpactThreshold to desired realism; lower values detach cargo on lighter impacts.',
            'Keep MaxRoll/MaxPitch appropriate for pickups, trucks and off-road gameplay.'
          ]
        }
      }
    ]
  },

  pr_elevator: {
    name:'PR Elevator',
    code:'pr_elevator',
    repo:'https://github.com/Pierremoraes-ofc/pr_elevator',
    category:{pt:'Hobby • World Interaction & Access Control',en:'Hobby • World Interaction & Access Control'},
    lead:{
      pt:'Sistema completo de elevadores, transporte entre andares e controle de acesso para FiveM. Cada andar pode ter seu próprio destino, painel físico DUI, código, aparência, distância de interação e política de autorização, com suporte a empregos, gangs, grades, Character IDs, cartões físicos com metadata, senhas e combinações de requisitos. O mesmo runtime transporta jogadores a pé ou o veículo em que estejam, permitindo desde elevadores sociais e áreas VIP até plataformas de garagem e elevadores veiculares.',
      en:'Complete FiveM elevator, floor transport and access-control system. Each floor can define its own destination, physical DUI panel, code, appearance, interaction distance and authorization policy, with jobs, gangs, grades, Character IDs, physical metadata keycards, passwords and combined requirements. The same runtime transports a player on foot or the vehicle they are currently inside, enabling passenger elevators, VIP areas, garages and vehicle lifts.'
    },
    facts:[
      ['Access modes','9'],
      ['Panel','Physical DUI keypad'],
      ['Transport','Pedestrian + vehicle'],
      ['Interaction','PR Bridge Target / Interact'],
      ['Persistence','MariaDB + JSON settings'],
      ['Locales','PT-BR / EN-US / ES-ES / FR-FR'],
      ['Dependency','PR Bridge']
    ],
    sections:[
      {
        id:'overview',
        title:{pt:'Visão geral',en:'Overview'},
        text:{
          pt:'O PR Elevator trata um elevador como uma estrutura persistente composta por um elevador pai e vários andares independentes. A configuração de segurança fica no andar, não apenas no elevador inteiro. Isso permite que o mesmo conjunto tenha, por exemplo, térreo público, estacionamento liberado por cartão, cobertura exclusiva para um emprego e sala técnica protegida por emprego + senha.',
          en:'PR Elevator models an elevator as a persistent parent with multiple independent floors. Security is configured per floor rather than only at elevator level. The same elevator can therefore have a public lobby, keycard parking level, job-restricted penthouse and a technical floor protected by job plus password.'
        },
        cards:[
          ['Andares independentes','Cada destino possui nome/código, ordem, distância, cores, coordenadas, painel e política de acesso próprios.'],
          ['Painel físico','O keypad é um prop real no mundo com textura DUI, câmera de interação, botões e estados visuais.'],
          ['Validação server-side','Job, gang, grade, Character ID, cartão e senha são verificados no servidor antes do transporte.'],
          ['Pedestre ou veículo','O runtime detecta se o jogador está em um veículo e transporta a entity apropriada.'],
          ['Criação in-game','Elevadores, andares, painéis e cartões podem ser administrados por menus integrados ao PR Bridge.'],
          ['Persistência','Elevadores/andares usam MariaDB; preferências globais de interação usam JSON revisionado.']
        ]
      },
      {
        id:'architecture',
        title:{pt:'Arquitetura do sistema',en:'System architecture'},
        text:{
          pt:'A arquitetura separa persistência, interação física, autorização e transporte. O banco define elevadores e andares; o client cria os painéis e registra as interações; o servidor resolve a política de acesso; e somente depois da autorização o client executa o transporte.',
          en:'The architecture separates persistence, physical interaction, authorization and transport. Database rows define elevators and floors; the client renders keypads and registers interactions; the server resolves access policy; and transport only happens after authorization.'
        },
        code:'pr_elevator_elevator\n   ↓ 1:N\npr_elevator_floor\n   ↓ interact_coords\nPhysical keypad prop + DUI\n   ↓ PR Bridge Target / Interact\nFloor code selection\n   ↓ server:checkFloorAccess\nAccess policy validation\n   ↓ allowed\nPedestrian or current vehicle transport'
      },
      {
        id:'floor-model',
        title:{pt:'Modelo de cada andar',en:'Per-floor model'},
        text:{
          pt:'Cada andar é uma unidade funcional completa. Além do destino, ele armazena como o player chama o andar, onde o painel existe no mundo e quais requisitos precisam ser satisfeitos. Por isso, dois andares do mesmo elevador podem se comportar de maneiras totalmente diferentes.',
          en:'Each floor is a complete functional unit. Besides destination coordinates, it stores how players call the floor, where its physical keypad exists and which requirements must be satisfied. Two floors in the same elevator can therefore behave completely differently.'
        },
        table:{
          headers:['Campo','Função'],
          rows:[
            ['name','Código/nome exibido e aceito no keypad, como T, S1, 1, 15 ou 50.'],
            ['floor','Ordem/número lógico usado também como código alternativo.'],
            ['distance','Distância associada ao andar.'],
            ['theme_color','Cor principal configurada para apresentação.'],
            ['theme_background','Cor de fundo configurada para apresentação.'],
            ['coords','Destino final, incluindo posição e heading.'],
            ['interact_coords','Posição/rotação/modelo do painel DUI ou formato legado de interação.'],
            ['access_type','Política de acesso aplicada somente àquele andar.'],
            ['access_job / grade','Grupo e nível mínimo quando a política exige emprego/gang.'],
            ['access_password','Senha server-side quando usada.'],
            ['access_key / item','Chave lógica e item físico exigidos para cartão.'],
            ['access_citizenid','Character ID autorizado quando usado.']
          ]
        }
      },
      {
        id:'access-modes',
        title:{pt:'9 modos reais de controle de acesso',en:'9 implemented access-control modes'},
        text:{
          pt:'O menu atual expõe nove políticas de acesso. As combinações são avaliadas com lógica AND: quando um modo exige dois fatores, os dois precisam ser válidos.',
          en:'The current menu exposes nine access policies. Combined policies use AND semantics: when a mode requires two factors, both must be valid.'
        },
        table:{
          headers:['Modo','Requisito','Exemplo de uso'],
          rows:[
            ['public','Nenhum','Elevador social, recepção, metrô interno ou área comum.'],
            ['job','Emprego/grupo + grade mínima','Andar de hospital, polícia, mecânica ou empresa.'],
            ['gang','Gang/grupo + grade mínima','Base de facção ou área restrita de organização.'],
            ['citizenid','Character ID específico','Apartamento, sala privada ou acesso nominal.'],
            ['password','Senha','Sala técnica, cofre, bunker ou acesso compartilhado por código.'],
            ['keycard','Cartão + access_key','Hotel, laboratório, segurança, VIP ou bunker.'],
            ['job_citizenid','Job/grupo + Character ID','Cargo autorizado, mas limitado a uma pessoa específica.'],
            ['job_keycard','Job/grupo + cartão','Funcionário autorizado que também precisa portar credencial física.'],
            ['job_password','Job/grupo + senha','Equipe autorizada que também precisa conhecer um código.']
          ]
        },
        note:{
          pt:'No código existem aliases para nomes legados como job_card, gang_card, emprego_cartao, job_senha e outros; eles são normalizados para os modos atuais.',
          en:'The runtime also normalizes legacy aliases such as job_card, gang_card, emprego_cartao and job_senha into the current access modes.'
        }
      },
      {
        id:'access-combinations',
        title:{pt:'Como montar combinações de acesso',en:'How to build access combinations'},
        text:{
          pt:'Como a segurança é definida por andar, as combinações podem ser usadas para construir zonas progressivamente mais restritas dentro do mesmo prédio. O painel não precisa mudar; quem muda é a política do destino selecionado.',
          en:'Because security is configured per floor, combinations can create progressively restricted zones inside the same building. The physical panel can remain identical while the selected destination determines the policy.'
        },
        table:{
          headers:['Cenário','Configuração recomendada'],
          rows:[
            ['Recepção → escritórios','T = public; escritórios = job com grade mínima.'],
            ['Hospital','T = public; enfermaria = job; direção = job com grade maior; laboratório = job_keycard.'],
            ['Delegacia','Recepção = public; garagem = job; evidências = job_keycard; comando = job_password.'],
            ['Hotel/VIP','Lobby = public; suítes = keycard; cobertura = keycard com access_key exclusivo.'],
            ['Bunker','Entrada = password; operação = job_password; sala crítica = job_keycard.'],
            ['Residência privada','Garagem = citizenid; cobertura = citizenid ou job_citizenid conforme o projeto.'],
            ['Facção','Entrada = gang; arsenal = job_keycard usando o grupo/gang configurado; liderança = job_password.']
          ]
        }
      },
      {
        id:'group-grade',
        title:{pt:'Empregos, gangs e grades mínimas',en:'Jobs, gangs and minimum grades'},
        text:{
          pt:'As políticas baseadas em grupo leem dados do personagem e comparam o nome do emprego/gang com o grupo configurado. A grade mínima permite que um mesmo prédio tenha níveis hierárquicos de acesso. O runtime contém leitura compatível com estruturas de QB/QBX e também resolve dados de ESX quando disponíveis.',
          en:'Group-based policies read character data and compare the configured job/gang name with the player group. Minimum grade enables hierarchical access in the same building. Runtime logic understands QB/QBX-style structures and resolves ESX data when available.'
        },
        code:"-- exemplo conceitual por andar\naccess_type      = 'job'\naccess_job       = 'police'\naccess_job_grade = 2\n\n-- resultado\n-- police grade 0/1 -> negado\n-- police grade 2+  -> permitido"
      },
      {
        id:'citizenid',
        title:{pt:'Acesso por Character ID',en:'Character ID access'},
        text:{
          pt:'O modo citizenid restringe o andar a um identificador de personagem. O resolvedor também normaliza diferentes nomes de campos usados por frameworks, como citizenid, citizenId, cid, charid e identifier. Isso é útil para áreas privadas que não devem depender apenas de profissão.',
          en:'citizenid mode restricts a floor to a character identifier. The resolver also normalizes common framework field names such as citizenid, citizenId, cid, charid and identifier, making it useful for private areas that should not depend only on profession.'
        },
        cards:[
          ['Residência','Liberar um andar para o morador específico.'],
          ['Escritório executivo','Combinar job + Character ID para limitar a um funcionário nominal.'],
          ['Evento/quest','Liberar um destino somente para determinado personagem.'],
          ['Área administrativa RP','Criar acesso individual sem expor uma senha compartilhada.']
        ]
      },
      {
        id:'password',
        title:{pt:'Senha com validação no servidor',en:'Server-validated password'},
        text:{
          pt:'A senha não é tratada como uma confirmação puramente visual do client. Ao selecionar um andar protegido, o painel primeiro consulta o servidor. Se o destino exigir senha, a mesma interface muda para o estado de autenticação e somente transporta após nova validação server-side.',
          en:'Passwords are not treated as a client-only visual confirmation. When a protected floor is selected, the keypad first asks the server. If a password is required, the same interface switches to authentication mode and transport only happens after a second server-side validation.'
        },
        steps:{
          pt:[
            'Player digita o código/nome do andar.',
            'Painel mostra estado de verificação.',
            'Servidor carrega a política daquele andar.',
            'Se houver senha, o visor muda para a etapa SENHA.',
            'Player digita a senha.',
            'Servidor compara o valor esperado.',
            'Senha incorreta mantém o painel disponível para nova tentativa.',
            'Senha correta mostra sucesso e libera o transporte.'
          ],
          en:[
            'Player enters the floor code/name.',
            'Keypad switches to checking state.',
            'Server loads the selected floor policy.',
            'If password is required, display switches to password mode.',
            'Player enters the password.',
            'Server validates the expected value.',
            'Invalid password keeps the keypad available for retry.',
            'Valid password shows success and allows transport.'
          ]
        }
      },
      {
        id:'keycards',
        title:{pt:'Cartões físicos e metadata',en:'Physical keycards and metadata'},
        text:{
          pt:'O cartão é validado como item físico de inventário e pode exigir uma chave lógica específica em metadata. O sistema procura access_key em variantes compatíveis de metadata, permitindo que o mesmo modelo de item represente credenciais diferentes.',
          en:'Keycards are validated as physical inventory items and can require a specific logical key in metadata. The system searches compatible access_key metadata variants, allowing the same item model to represent different credentials.'
        },
        table:{
          headers:['Configuração','Função'],
          rows:[
            ['PR.ItemList','Lista de modelos de cartões oferecidos pelo sistema.'],
            ['access_item','Opcionalmente força um item específico para aquele andar.'],
            ['access_key','Valor lógico que a metadata do cartão precisa possuir.'],
            ['Any keycard','Quando access_item não é definido, o sistema percorre os itens configurados.'],
            ['Metadata aliases','Reconhece acesso, access, access_key e accessKey.']
          ]
        },
        code:"-- cartões padrão em shared/config.lua\nPR.ItemList = {\n    { item = 'key_card_ilegal',  labelKey = 'items.illegal' },\n    { item = 'key_card_security', labelKey = 'items.security' },\n    { item = 'key_card_gold',     labelKey = 'items.vip' }\n}\n\n-- exemplo de metadata lógica\nmetadata = { access_key = 'hospital_lab' }"
      },
      {
        id:'keycard-examples',
        title:{pt:'Exemplos de hierarquia com cartões',en:'Keycard hierarchy examples'},
        table:{
          headers:['Cartão','access_key sugerida','Uso'],
          rows:[
            ['Security','security_level_1','Áreas gerais de segurança.'],
            ['Security','security_evidence','Sala de evidências.'],
            ['Gold/VIP','vip_rooftop','Cobertura, lounge ou suíte premium.'],
            ['Illegal','bunker_alpha','Bunker/facção específica.'],
            ['Mesmo item, outra metadata','lab_bio_03','Laboratório ou setor técnico específico.']
          ]
        },
        note:{
          pt:'O nome do item e a access_key são conceitos diferentes. Um único item visual pode representar várias credenciais, desde que cada instância tenha metadata adequada.',
          en:'Item name and access_key are separate concepts. A single visual card item can represent multiple credentials when each instance carries the appropriate metadata.'
        }
      },
      {
        id:'dui-panel',
        title:{pt:'Painel físico DUI',en:'Physical DUI keypad'},
        text:{
          pt:'O PR Elevator usa o prop ch_prop_casino_keypad_01 como painel físico padrão e substitui sua textura de display por uma página DUI. O painel não é apenas uma NUI sobreposta: ele existe no mundo, recebe posição e rotação, pode ser colocado com gizmo e acompanha uma câmera dedicada durante a interação.',
          en:'PR Elevator uses ch_prop_casino_keypad_01 as its default physical panel and replaces its display texture with a DUI page. It is not merely a screen overlay: the keypad exists in the world, stores position and rotation, can be placed with a gizmo and uses a dedicated camera during interaction.'
        },
        cards:[
          ['Prop real','ch_prop_casino_keypad_01 é criado na posição salva do andar.'],
          ['DUI','Uma página browser-driven alimenta a textura do display.'],
          ['Botões físicos','Dígitos, S, #, cancelar e confirmar são mapeados no modelo.'],
          ['Câmera','A interação abre foco/câmera adequada ao teclado.'],
          ['Persistência','coords, rotation, heading, model e modelName podem viver em interact_coords.'],
          ['Sem CDN crítica','O display foi ajustado para não depender de fonte/biblioteca externa para aparecer.']
        ]
      },
      {
        id:'dui-states',
        title:{pt:'Estados do visor e autenticação',en:'Display and authentication states'},
        text:{
          pt:'O visor preserva o contexto da sessão e diferencia seleção de andar, autenticação e erros. Confirmações duplicadas são bloqueadas enquanto uma consulta está em andamento e respostas antigas de sessões canceladas são descartadas.',
          en:'The display preserves session context and separates floor selection, authentication and error states. Duplicate confirmations are blocked while a request is pending and stale responses from cancelled sessions are ignored.'
        },
        table:{
          headers:['Estado','Quando aparece'],
          rows:[
            ['ANDAR','Estado inicial para digitar o destino.'],
            ['CHECKING / VERIFICANDO','Enquanto aguarda validação server-side.'],
            ['SENHA','Quando a política do andar exige password.'],
            ['SUCCESS / SUCESSO','Após autorização válida.'],
            ['INVALID FLOOR','Código digitado não corresponde a nenhum andar.'],
            ['CURRENT FLOOR','Destino é o mesmo andar atual.'],
            ['DENIED','Job/gang/grade/Character ID/cartão não atendem à política.'],
            ['INVALID PASSWORD','Senha incorreta; permite nova tentativa.'],
            ['ERROR','Falha de consulta ou condição inesperada.']
          ]
        }
      },
      {
        id:'interaction',
        title:{pt:'Target, Interact ou ambos',en:'Target, Interact or both'},
        text:{
          pt:'A interação dos painéis é fornecida diretamente pelo PR Bridge. O administrador pode escolher Target, Interact ou ambos, decidir se paredes/obstáculos devem bloquear a interação e ajustar o ponto frontal e a distância.',
          en:'Panel interaction is provided directly by PR Bridge. Administrators can choose Target, Interact or both, decide whether walls/obstacles should block interaction and adjust front offset and usable distance.'
        },
        table:{
          headers:['Opção','Faixa / valores','Padrão'],
          rows:[
            ['mode','target / interact / both','target'],
            ['respectWalls','true / false','true'],
            ['frontOffset','0.05 a 1.00 m','0.18 m'],
            ['distance','0.5 a 5.0 m','2.0 m']
          ]
        },
        note:{
          pt:'Essas quatro opções são persistidas em data/settings.json e sincronizadas para todos os clientes. Ao alterar o modo, registros antigos são removidos antes da recriação para evitar Target/Interact duplicado.',
          en:'These four options persist in data/settings.json and synchronize to all clients. When interaction mode changes, old registrations are removed before rebuilding to avoid duplicate Target/Interact entries.'
        }
      },
      {
        id:'interaction-walls',
        title:{pt:'Paredes, offset e posicionamento',en:'Walls, offset and positioning'},
        text:{
          pt:'RespectWalls controla a disponibilidade da interação através de obstáculos, não a colisão do prop. O ponto do Interact é deslocado para a frente do keypad porque registrar exatamente no centro do modelo pode fazer o próprio painel obstruir a interação. No modelo padrão, a frente está no eixo Y local negativo.',
          en:'RespectWalls controls interaction visibility through obstacles, not prop collision. The Interact point is offset in front of the keypad because registering at model center can let the panel obstruct itself. On the default model, the front side is local negative Y.'
        },
        code:"PR.Target = 'target'\nPR.RespectWalls = true\nPR.KeypadInteractDistance = 2.0\nPR.KeypadInteractOffset = vector3(0.0, -0.18, 0.03)"
      },
      {
        id:'creation',
        title:{pt:'Fluxo completo de criação in-game',en:'Complete in-game creation workflow'},
        steps:{
          pt:[
            'Abra o menu de gerenciamento autorizado.',
            'Crie o elevador pai e defina um nome administrativo.',
            'Adicione um andar e escolha o nome/código, como T, S1, 1 ou 25.',
            'Defina a ordem lógica do andar.',
            'Capture as coordenadas e heading do destino.',
            'Posicione o keypad físico com o gizmo.',
            'Ajuste distância e propriedades visuais disponíveis.',
            'Escolha uma das 9 políticas de acesso.',
            'Preencha grupo/grade, senha, cartão/access_key ou Character ID quando exigido.',
            'Salve; o servidor persiste o andar e envia refresh para reconstruir o runtime.',
            'Repita para os demais andares, combinando políticas diferentes no mesmo elevador.'
          ],
          en:[
            'Open the authorized management menu.',
            'Create the parent elevator and assign an administrative name.',
            'Add a floor and choose a code such as T, S1, 1 or 25.',
            'Set its logical order.',
            'Capture destination coordinates and heading.',
            'Place the physical keypad using the gizmo.',
            'Adjust interaction distance and available visual properties.',
            'Choose one of the 9 access policies.',
            'Fill group/grade, password, card/access_key or Character ID when required.',
            'Save; the server persists the floor and broadcasts a runtime refresh.',
            'Repeat for remaining floors, mixing different policies in the same elevator.'
          ]
        }
      },
      {
        id:'use-models',
        title:{pt:'Modelos de elevador que podem ser construídos',en:'Elevator usage models'},
        text:{
          pt:'O recurso não precisa de uma classe rígida para cada cenário. O tipo de elevador emerge das coordenadas, dos painéis e das regras de acesso definidas para seus andares. Isso permite reutilizar a mesma base para vários formatos de gameplay.',
          en:'The resource does not require a rigid class for every scenario. Elevator behavior emerges from floor destinations, keypad placement and access policies, allowing the same system to represent many gameplay models.'
        },
        table:{
          headers:['Modelo','Como configurar'],
          rows:[
            ['Elevador social','Andares public; destinos internos; painel em cada piso.'],
            ['Elevador corporativo','Lobby public; demais pisos job com grades diferentes.'],
            ['Elevador hospitalar','Áreas comuns public; setores job; laboratórios job_keycard.'],
            ['Elevador VIP/hotel','Lobby public; andares keycard; cobertura com access_key exclusiva.'],
            ['Elevador residencial','Andares citizenid ou cartões por apartamento.'],
            ['Elevador policial','Garagem job; evidências job_keycard; comando job_password.'],
            ['Elevador de facção','Gang/grupo para base; cartão ou senha para setores internos.'],
            ['Plataforma de garagem','Destinos amplos; player entra com veículo e o veículo inteiro é transportado.'],
            ['Elevador híbrido','O mesmo conjunto atende player a pé e player dentro de veículo.']
          ]
        }
      },
      {
        id:'vehicle-elevators',
        title:{pt:'Elevadores para veículos e garagens',en:'Vehicle lifts and garages'},
        text:{
          pt:'O transporte atual escolhe automaticamente a entity. Se o player estiver a pé, move o ped. Se estiver dentro de um veículo, move o veículo atual e aplica o heading do destino. Isso permite construir plataformas de garagem, elevadores de oficina, acesso a estacionamento subterrâneo ou transporte de carros entre pisos.',
          en:'The current transport automatically chooses the entity. On foot, it moves the player ped. When the player is inside a vehicle, it moves the current vehicle and applies destination heading. This supports garage platforms, workshop lifts, underground parking access and multi-level vehicle transport.'
        },
        code:"local vehicle = nil\nif IsPedInAnyVehicle(ped, false) then\n    vehicle = GetVehiclePedIsIn(ped, false)\nend\n\nlocal entity = vehicle and vehicle ~= 0 and vehicle or ped\nSetEntityCoords(entity, coords.x, coords.y, coords.z, false, false, false, false)\nSetEntityHeading(entity, coords.heading or 0.0)",
        note:{
          pt:'Atualmente não existe um campo elevator_type separado no banco para limitar explicitamente um elevador a player/vehicle/both. O comportamento é automático. Para um elevador exclusivamente veicular, o design do mapa, o espaço do destino e as regras de acesso devem conduzir esse uso.',
          en:'There is currently no separate elevator_type database field that explicitly restricts an elevator to player/vehicle/both. Behavior is automatic. For a vehicle-only lift, map design, destination space and access rules should guide usage.'
        }
      },
      {
        id:'vehicle-design',
        title:{pt:'Boas práticas para elevadores veiculares',en:'Vehicle elevator best practices'},
        bullets:{
          pt:[
            'Use destinos com área livre suficiente para o comprimento e largura dos veículos esperados.',
            'Evite spawn encostado em paredes, pilares, props ou portões fechados.',
            'Configure heading coerente com a saída da garagem para reduzir manobras e colisões.',
            'Posicione o keypad onde o motorista consiga interagir sem abandonar a área do elevador.',
            'Use job, keycard ou job_keycard em oficinas, garagens policiais e estacionamentos privados.',
            'Considere um andar público de entrada e andares internos restritos.',
            'Teste veículos grandes separadamente; o transporte move a entity, mas não redimensiona o espaço físico do mapa.'
          ],
          en:[
            'Use destinations with enough free area for expected vehicle length and width.',
            'Avoid spawning against walls, pillars, props or closed gates.',
            'Align heading with garage exits to reduce maneuvering and collisions.',
            'Place the keypad where drivers can interact without leaving the lift area.',
            'Use job, keycard or job_keycard for workshops, police garages and private parking.',
            'Consider a public entry level with restricted internal levels.',
            'Test large vehicles separately; transport moves the entity but does not resize physical map space.'
          ]
        }
      },
      {
        id:'runtime-flow',
        title:{pt:'Fluxo de uso pelo jogador',en:'Player runtime flow'},
        steps:{
          pt:[
            'Player se aproxima do painel físico.',
            'PR Bridge Target/Interact disponibiliza a ação conforme distância e visibilidade.',
            'O keypad abre com o prompt de andar.',
            'Player digita o nome ou número do destino.',
            'O client resolve o andar correspondente.',
            'O servidor verifica a política de acesso daquele destino.',
            'Se necessário, o keypad solicita senha.',
            'Após autorização, o progress de espera do elevador é executado.',
            'A tela faz fade-out.',
            'O runtime move ped ou veículo para coords + heading do andar.',
            'A tela retorna com fade-in.'
          ],
          en:[
            'Player approaches the physical keypad.',
            'PR Bridge Target/Interact exposes the action according to distance and visibility.',
            'The keypad opens with the floor prompt.',
            'Player enters a destination name or number.',
            'Client resolves the matching floor.',
            'Server checks that destination access policy.',
            'If required, keypad asks for a password.',
            'After authorization, the elevator wait progress runs.',
            'Screen fades out.',
            'Runtime moves ped or vehicle to floor coords + heading.',
            'Screen fades back in.'
          ]
        }
      },
      {
        id:'wait-animation',
        title:{pt:'Espera e transição do elevador',en:'Elevator wait and transition'},
        text:{
          pt:'Antes do transporte, o sistema usa PR.elevatorWaitTime, com padrão de 3000 ms. Quando o PR Bridge oferece progressBar, movimento, uso de carro e combate são bloqueados durante a espera e a animação anim@apt_trans@elevator / elev_1 é usada. Depois ocorre fade-out, teleporte e fade-in.',
          en:'Before transport, the system uses PR.elevatorWaitTime, defaulting to 3000 ms. When PR Bridge progressBar is available, movement, vehicle controls and combat are disabled during the wait while anim@apt_trans@elevator / elev_1 plays. The system then fades out, transports and fades back in.'
        },
        code:"PR.elevatorWaitTime = 3000\n\n-- runtime\nprogressBar -> fade out -> move entity -> apply heading -> fade in"
      },
      {
        id:'creator-permissions',
        title:{pt:'Permissões para criação e administração',en:'Creator and administration permissions'},
        text:{
          pt:'O menu exportado de criação pode ser liberado por jobs/gangs específicos e grade mínima. Isso é separado da permissão para alterar configurações globais do resource. Assim, por exemplo, um corretor pode criar elevadores sem receber poderes para mudar o provider de interação de todo o servidor.',
          en:'The exported creator menu can be restricted to specific jobs/gangs and minimum grades. This is separate from permission to change global resource settings. A realtor can therefore create elevators without gaining permission to change interaction providers server-wide.'
        },
        code:"PR.ExportCreatorMenu = {\n    enabled = true,\n    jobs = { realestate = 2, realtor = 0 },\n    gangs = {}\n}",
        note:{
          pt:'Se jobs e gangs estiverem vazios, o export de criação pode ser aberto por qualquer player conforme o fluxo do recurso consumidor.',
          en:'When jobs and gangs are empty, the creator export can be opened by any player according to the calling resource flow.'
        }
      },
      {
        id:'settings-permissions',
        title:{pt:'Quem pode alterar configurações globais',en:'Who can change global settings'},
        text:{
          pt:'As preferências globais de Target/Interact são protegidas server-side. O recurso aceita autorização pela integração Forge Core quando disponível, whitelist administrativa do PR Bridge, ACE pr_elevator.admin/admin/group.admin/god e permissões admin/god expostas pelo framework.',
          en:'Global Target/Interact preferences are server-side protected. The resource accepts Forge Core server-settings authorization when available, PR Bridge admin whitelist, ACE pr_elevator.admin/admin/group.admin/god and framework admin/god permissions.'
        },
        cards:[
          ['Forge Core','CanManageServerSettings quando o resource está iniciado.'],
          ['PR Bridge ACE','Whitelist administrativa centralizada.'],
          ['ACE explícito','pr_elevator.admin e aliases administrativos.'],
          ['Framework','Fallback para HasPermission admin/god.']
        ]
      },
      {
        id:'database',
        title:{pt:'Banco de dados e migrations',en:'Database and migrations'},
        text:{
          pt:'O recurso mantém uma tabela para o elevador pai e outra para os andares. O startup cria o schema quando necessário e adiciona campos modernos em instalações antigas. Restrições legadas do elevador podem ser migradas para a política por andar.',
          en:'The resource keeps one parent elevator table and one floor table. Startup creates schema when needed and adds modern fields to older installations. Legacy elevator-level restrictions can be migrated into per-floor access policies.'
        },
        code:'pr_elevator_elevator\n  id / name\n  type / job / job_grade / password / access_key / citizenid  (legacy compatibility)\n\npr_elevator_floor\n  id / elevator_id\n  name / floor / distance\n  theme_color / theme_background\n  coords / interact_coords\n  access_type / access_job / access_job_grade\n  access_password / access_key / access_item / access_citizenid'
      },
      {
        id:'interaction-storage',
        title:{pt:'Como o painel é salvo em interact_coords',en:'How keypad placement is stored'},
        text:{
          pt:'O formato moderno de interact_coords pode guardar não só uma coordenada, mas todo o payload do prop DUI. O normalizador também aceita formatos legados, permitindo evolução do schema sem quebrar painéis antigos.',
          en:'Modern interact_coords can store more than a coordinate: it can persist the full DUI prop placement payload. The normalizer also accepts legacy formats, allowing schema evolution without breaking older panels.'
        },
        code:"{\n  mode = 'dui',\n  type = 'prop',\n  model = joaat('ch_prop_casino_keypad_01'),\n  modelName = 'ch_prop_casino_keypad_01',\n  coords = { x = 0.0, y = 0.0, z = 0.0 },\n  rotation = { x = 0.0, y = 0.0, z = 90.0 },\n  heading = 90.0\n}"
      },
      {
        id:'exports',
        title:{pt:'Exports disponíveis',en:'Available exports'},
        text:{
          pt:'O recurso expõe funções para abrir menus de criação e também para criar/manipular keypads DUI a partir de outros scripts.',
          en:'The resource exposes functions for opening creation menus and for creating/manipulating DUI keypads from other resources.'
        },
        table:{
          headers:['Export','Uso'],
          rows:[
            ['OpenCreatorMenu / OpenCreateElevatorMenu','Abre o fluxo principal de criação/gerenciamento.'],
            ['OpenCreateFloorMenu','Abre criação de andar para um elevador.'],
            ['OpenCreateKeycardMenu','Abre criação/configuração relacionada a cartões.'],
            ['CreateDUI / CreateKeypad','Cria a infraestrutura visual/keypad.'],
            ['CreateKeypadFromInteract','Cria keypad usando payload de posicionamento salvo.'],
            ['OpenKeypadEntity','Abre uma entity de keypad existente para entrada.'],
            ['DeleteKeypad','Remove keypad e limpa recursos associados.']
          ]
        }
      },
      {
        id:'locales',
        title:{pt:'Idiomas e textos do painel',en:'Locales and keypad text'},
        text:{
          pt:'PT-BR, EN-US, ES-ES e FR-FR compartilham o mesmo conjunto de chaves. Menus, notificações, visor, cartões e diagnósticos usam o locale do PR Bridge. Nomes administrativos de elevadores, códigos de andar e identificadores técnicos permanecem como dados e não são traduzidos automaticamente.',
          en:'PT-BR, EN-US, ES-ES and FR-FR share the same locale key set. Menus, notifications, display states, cards and diagnostics use PR Bridge locale resolution. Administrator-defined elevator names, floor codes and technical identifiers remain data and are not automatically translated.'
        }
      },
      {
        id:'diagnostics',
        title:{pt:'Diagnóstico da DUI e runtime',en:'DUI and runtime diagnostics'},
        text:{
          pt:'O resource possui comandos de diagnóstico específicos para separar problema de página DUI, aplicação da textura no modelo e reconstrução do runtime. O status não registra senha nem os dígitos digitados.',
          en:'The resource includes diagnostics specifically designed to separate DUI page issues, model texture replacement and runtime rebuild problems. Status output does not log passwords or entered digits.'
        },
        table:{
          headers:['Comando','Objetivo'],
          rows:[
            ['prelevator_refresh','Força/reexecuta atualização dos elevadores no client.'],
            ['prelevator_dui_status','Mostra instância, prontidão, URL, modelo e textura em uso.'],
            ['prelevator_dui_preview','Desenha uma prévia temporária da mesma textura para isolar falhas.'],
            ['prelevator_dui_reset','Reinicializa estado/instância da DUI.'],
            ['createkeypad / testkeypad','Ferramentas de desenvolvimento e teste do keypad.']
          ]
        }
      },
      {
        id:'security',
        title:{pt:'Segurança e autoridade do servidor',en:'Security and server authority'},
        bullets:{
          pt:[
            'A seleção visual do andar não concede acesso por si só.',
            'Políticas são resolvidas usando dados server-side do andar e do personagem.',
            'Senha precisa ser confirmada pelo servidor antes do transporte.',
            'Cartão precisa existir no inventário e carregar a access_key esperada.',
            'Combinações exigem todos os fatores previstos pelo modo.',
            'Configurações globais possuem validação de permissão, whitelist de campos, limites e controle de revisão.',
            'Falha ao persistir settings não aplica parcialmente uma configuração nova.'
          ],
          en:[
            'Visually selecting a floor does not grant access by itself.',
            'Policies are resolved using server-side floor and character data.',
            'Passwords must be confirmed by the server before transport.',
            'Keycards must exist in inventory and carry the expected access_key.',
            'Combined modes require every configured factor.',
            'Global settings use permission checks, field validation, limits and revision control.',
            'A settings persistence failure does not partially apply a new configuration.'
          ]
        }
      },
      {
        id:'production-patterns',
        title:{pt:'Padrões recomendados de configuração',en:'Recommended configuration patterns'},
        bullets:{
          pt:[
            'Use public somente em andares realmente públicos; restrinja o destino, não apenas o painel de origem.',
            'Prefira grade mínima em áreas hierárquicas para não criar elevadores duplicados por cargo.',
            'Use keycard quando quiser uma credencial física transferível; use citizenid quando o acesso deve seguir a identidade do personagem.',
            'Use job_keycard para áreas onde pertencer ao grupo não basta sem portar a credencial.',
            'Use job_password para operações em que um código compartilhado deve continuar limitado ao grupo correto.',
            'Mantenha códigos de andar curtos e claros, especialmente em keypads físicos.',
            'Para garagens, valide espaço, heading e veículos grandes antes de liberar em produção.',
            'Ao reposicionar painéis, prefira o payload DUI completo com rotation em vez de coordenada simples.',
            'Use Target ou Interact como padrão global consistente; habilite both somente quando realmente quiser as duas experiências.',
            'Mantenha RespectWalls ativo em áreas onde interagir através de paredes quebraria a imersão ou a segurança.'
          ],
          en:[
            'Use public only for genuinely public floors; secure the destination rather than only the source keypad.',
            'Prefer minimum grades in hierarchical areas instead of duplicating elevators per rank.',
            'Use keycard for transferable physical credentials; use citizenid when access must follow character identity.',
            'Use job_keycard where group membership alone is insufficient without carrying a credential.',
            'Use job_password when a shared code should still be limited to the correct group.',
            'Keep floor codes short and clear, especially on physical keypads.',
            'For garages, validate space, heading and large vehicles before production rollout.',
            'When repositioning keypads, prefer the full DUI payload with rotation over a bare coordinate.',
            'Use either Target or Interact as the consistent global default; enable both only when both experiences are intentionally desired.',
            'Keep RespectWalls enabled where through-wall interaction would break immersion or security.'
          ]
        }
      }
    ]
  }
};
