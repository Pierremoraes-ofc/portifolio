export const PROJECT_DOCS = {
  smart_office_hybrid_4: {
    name: 'Smart Office Hybrid 4.0',
    code: 'smart_office_hybrid_4',
    repo: 'https://github.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0',
    category: { pt: 'Projeto • Data & AI', en: 'Project • Data & AI' },
    lead: {
      pt: 'Dashboard universal orientado a dados que conecta estruturas SQL existentes a gráficos, KPIs, análises e uma camada de IA. O projeto foi desenvolvido em PHP/MySQL com AdminLTE, Chart.js e integração Groq AI.',
      en: 'Universal data-driven dashboard that connects existing SQL structures to charts, KPIs, analytics and an AI layer. Built with PHP/MySQL, AdminLTE, Chart.js and Groq AI integration.',
    },
    facts: [
      ['Runtime', 'PHP + Apache'],
      ['Database', 'MySQL / PDO'],
      ['UI', 'AdminLTE + Chart.js'],
      ['AI', 'Groq API'],
    ],
    sections: [
      {
        id: 'overview', title: {pt:'Visão geral',en:'Overview'},
        text: {pt:'O Smart Office Hybrid 4.0 foi pensado para trabalhar sobre dados empresariais já existentes. Em vez de exigir um banco novo para cada dashboard, ele permite modelar tabelas, joins e gráficos, transformando essa camada em KPIs, visualizações e contexto para consultas assistidas por IA.',en:'Smart Office Hybrid 4.0 works on top of existing business data. Instead of requiring a new database per dashboard, it models tables, joins and charts and turns that layer into KPIs, visualizations and AI-assisted context.'},
        cards:[
          ['Dashboard','Gráficos analíticos, KPIs e indicadores sobre dados reais do banco.'],
          ['Modelagem','Tabelas, joins e modelos de gráfico são configurados para descrever como os dados devem ser lidos.'],
          ['IA','A camada de IA recebe o contexto do dashboard para gerar relatórios, tendências, riscos e insights.'],
          ['Instalador','O projeto possui install.php para preparar banco e configuração inicial.'],
        ]
      },
      {
        id:'architecture', title:{pt:'Arquitetura',en:'Architecture'},
        text:{pt:'A aplicação separa entrada web, administração, helpers/API e assets do painel. O README atual documenta a estrutura principal abaixo.',en:'The application separates web entry points, administration, API/helpers and dashboard assets. The current README documents the structure below.'},
        code:`SmartOfficeHybrid/
├── index.php
├── home.php
├── install.php
├── api/
│   ├── database.php
│   ├── functions.php
│   ├── language.php
│   └── list_columns.php
├── admin/
│   ├── dashboard.php
│   ├── login.php
│   ├── novagrafico.php
│   ├── preferences.php
│   └── includes/
└── AdminLTE/`
      },
      {
        id:'data-model', title:{pt:'Modelo de dados',en:'Data model'},
        text:{pt:'A configuração gira em torno de tabelas para gráficos, joins e modelos. Isso desacopla a visualização do schema original da empresa: o dashboard consome um modelo configurado em vez de hardcodear cada consulta no frontend.',en:'Configuration revolves around chart tables, joins and models. This decouples visualization from the company schema: the dashboard consumes configured models rather than hardcoding every query in the frontend.'},
        cards:[
          ['dso_grafico','Define gráficos configurados para o dashboard.'],
          ['dso_grafico_join','Define relações/joins necessários para compor os dados.'],
          ['dso_model_grafico','Armazena modelos reutilizáveis de gráficos.'],
          ['PDO','Acesso ao banco é centralizado na camada PHP usando PDO.'],
        ]
      },
      {
        id:'ai', title:{pt:'Camada de IA',en:'AI layer'},
        text:{pt:'O chat usa helpers em api/functions.php. O contexto do dashboard é serializado e enviado ao provider configurado. O fluxo foi desenhado para responder perguntas sobre os próprios dados e gerar análises acionáveis.',en:'Chat helpers live in api/functions.php. Dashboard context is serialized and sent to the configured provider, enabling questions over the current data and actionable analyses.'},
        code:`if ($msg === '1') {
    $prompt = $lang->get('parametros_iaa')
            . $lang->get('parametros_iaaa')
            . $lang->get('parametros_iaaaa')
            . json_encode($dashboardData, JSON_UNESCAPED_UNICODE);

    return dso_ia_dashboard_ask($pdo, $prompt);
}`
      },
      {
        id:'installation', title:{pt:'Instalação',en:'Installation'},
        bullets:{
          pt:['Instale Apache + MySQL via WAMP/XAMPP ou ambiente equivalente.','Copie o projeto para a raiz do servidor web.','Acesse install.php para executar o wizard.','O instalador prepara/importa o banco e configura api/database.php.','Configure a chave/modelo Groq em Admin → Preferences.','Acesse /admin para operar gráficos, KPIs e preferências.'],
          en:['Install Apache + MySQL through WAMP/XAMPP or equivalent.','Copy the project into the web server root.','Open install.php and run the setup wizard.','The installer prepares/imports the database and configures api/database.php.','Configure Groq key/model in Admin → Preferences.','Use /admin to manage charts, KPIs and preferences.']
        }
      },
      {
        id:'extension', title:{pt:'Extensão e customização',en:'Extension & customization'},
        text:{pt:'Novos fluxos de IA podem ser adicionados criando novas opções de mensagem em api/functions.php e textos correspondentes em api/language.php. Novos gráficos entram pelo modelador do admin, mantendo a lógica de apresentação separada da origem dos dados.',en:'New AI flows can be added through message handlers in api/functions.php plus matching labels in api/language.php. New charts are created through the admin modeler, keeping presentation separate from source data.'}
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
