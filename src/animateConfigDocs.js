export const ANIMATE_CONFIG_DOC = {
  "name": "PR Animate Config",
  "code": "pr_animateconfig",
  "repo": "https://github.com/Pierremoraes-ofc/pr_animateConfig",
  "category": {
    "pt": "Hobby • FiveM, Lua, NUI & Ferramentas Dev",
    "en": "Hobby • FiveM, Lua, NUI & Developer Tools"
  },
  "lead": {
    "pt": "Editor visual de animações e props para FiveM, com gizmo 3D, seleção de ossos, prévia, geração de snippets Lua/JSON/Scully, catálogo persistente e exports para outros scripts.",
    "en": "Visual FiveM animation and prop editor with 3D gizmo, bone selection, previews, Lua/JSON/Scully code generation, persistent catalog, and exports for other scripts."
  },
  "facts": [
    [
      "Runtime",
      "FiveM / FXServer"
    ],
    [
      "Stack",
      "Lua 5.4 + NUI"
    ],
    [
      "UI",
      "HTML / CSS / JS"
    ],
    [
      "Dependency",
      "pr_bridge"
    ],
    [
      "Formats",
      "Lua / JSON / Native / Scully"
    ],
    [
      "Persistence",
      "saved_config.json"
    ],
    [
      "Manifest",
      "v1.2.4"
    ]
  ],
  "sections": [
    {
      "id": "overview",
      "title": {
        "pt": "Visão geral: Forge Animated",
        "en": "Overview: Forge Animated"
      },
      "text": {
        "pt": "O PR Animate Config é um editor in-game de animações com objetos anexados ao personagem para servidores FiveM. Em vez de posicionar props por tentativa e erro no código, o desenvolvedor visualiza o personagem, reproduz uma animação, seleciona o osso, ajusta offsets e rotações em tempo real, e gera configurações reutilizáveis. A proposta é transformar um processo manual e repetitivo em um fluxo visual, documentável e integrável a outros recursos. A interface mostra a marca Forge Animated; o identificador técnico do resource é pr_animateConfig.",
        "en": "PR Animate Config is an in-game animation and prop attachment editor for FiveM. Instead of trial-and-error changes in code, developers preview the player, play an animation, select a bone, adjust offsets and rotations live, and generate reusable configurations. It turns a repetitive manual workflow into a visual, documentable process that other resources can integrate with. The UI is branded Forge Animated; the resource name is pr_animateConfig."
      },
      "cards": [
        [
          "Edição in-game",
          "Prévia 3D do personagem, animações e objetos anexados em tempo real."
        ],
        [
          "Exportação",
          "Geração de Lua, JSON, nativos do FiveM, valores simples e configurações Scully."
        ],
        [
          "Catálogo persistente",
          "Salvar animações nomeadas no JSON do resource e recuperá-las por ID."
        ],
        [
          "Integração externa",
          "Exports do lado cliente e servidor para reproduzir, interromper e consultar animações."
        ]
      ]
    },
    {
      "id": "gallery",
      "title": {
        "pt": "Demonstrações e capturas",
        "en": "Gallery and screenshots"
      },
      "text": {
        "pt": "A galeria prioriza os cinco prints originais do sistema enviados pelo desenvolvedor: edição de animações, seleção de bones, chroma key, gizmo 3D e exportação. Enquanto os arquivos PNG originais não estiverem publicados na pasta de imagens, serão exibidas versões ilustrativas de reserva. Clique em qualquer imagem para ampliar.",
        "en": "This gallery prioritizes five original screenshots provided by the developer: animation editing, bone selection, chroma key, 3D gizmo, and export. Until the original PNGs are uploaded to the image directory, illustrative fallbacks are displayed. Open an image to enlarge."
      },
      "gallery": [
        [
          "Editor de animações e conexão de props",
          "./animate-config/capture-01.png"
        ],
        [
          "Seleção de ossos sobre o personagem",
          "./animate-config/capture-02.png"
        ],
        [
          "Prévia com chroma verde",
          "./animate-config/capture-03.png"
        ],
        [
          "Edição de posicionamento com gizmo",
          "./animate-config/capture-04.png"
        ],
        [
          "Geração de configurações e exportações",
          "./animate-config/capture-05.png"
        ]
      ]
    },
    {
      "id": "requirements",
      "title": {
        "pt": "Requisitos e instalação",
        "en": "Requirements and installation"
      },
      "text": {
        "pt": "O manifest declara FXServer/FiveM com fx_version cerulean, jogo gta5, scripts Lua e interface NUI HTML/JavaScript. A dependência explícita é pr_bridge, utilizado para localização, keybind, notificações, debug e gizmo. O projeto não é independente do pr_bridge: inicie-o primeiro. A versão identificada no fxmanifest consultado é 1.2.4.",
        "en": "The fxmanifest declares FXServer/FiveM (cerulean, gta5), Lua scripts, and an HTML/JavaScript NUI. pr_bridge is an explicit dependency for localization, keybindings, notifications, debugging, and the gizmo. This resource is not standalone; start pr_bridge first. The inspected fxmanifest identifies version 1.2.4."
      },
      "steps": {
        "pt": [
          "Instale e configure o pr_bridge em sua base FiveM.",
          "Copie o resource pr_animateConfig para a pasta resources do servidor, preservando client, server, shared, web e locale.",
          "No server.cfg, inicie ensure pr_bridge antes de ensure pr_animateConfig.",
          "Confira shared/config.lua para idioma, comando, câmera, limites e presets.",
          "Reinicie o resource e utilize /animconfig no jogo; verifique console e F8 caso haja erros."
        ],
        "en": [
          "Install and configure pr_bridge in your FiveM server.",
          "Place pr_animateConfig in your resources folder, keeping client, server, shared, web, and locale directories.",
          "In server.cfg, ensure pr_bridge before pr_animateConfig.",
          "Review shared/config.lua for language, command, camera, limits, and presets.",
          "Restart the resource and type /animconfig in game; check console and F8 on errors."
        ]
      },
      "code": "ensure pr_bridge\nensure pr_animateConfig\n\n# Comando padrão em jogo:\n# /animconfig"
    },
    {
      "id": "workflow",
      "title": {
        "pt": "Fluxo completo de criação",
        "en": "Complete creation workflow"
      },
      "text": {
        "pt": "A experiência foi organizada para começar pela animação e concluir com um resultado pronto para scripts. Cada alteração de prop pode ser observada imediatamente. A configuração final preserva dicionário, clipe, flags, duração, velocidade e posicionamento relativo dos objetos.",
        "en": "The workflow begins with selecting an animation and ends with script-ready output. Prop changes are visible immediately. The resulting configuration keeps animation dictionary, clip, flags, duration, speed, and attached-object transforms."
      },
      "steps": {
        "pt": [
          "Abra /animconfig e defina um ID exclusivo para identificar a animação; opcionalmente adicione um rótulo amigável para o menu.",
          "Escolha um preset de animação ou digite manualmente Dict e Animação/Clipe.",
          "Ajuste Flag, Blend in, Blend out, Duration e Velocidade e pressione Reproduzir.",
          "Selecione um prop da lista ou informe um modelo customizado; clique em Adicionar.",
          "Escolha a região do esqueleto e o osso por nome/ID ou usando Clicar no osso.",
          "Ajuste Position X/Y/Z e Rotation X/Y/Z, ou utilize Editar com Gizmo para manipulação 3D.",
          "Teste o movimento, ajuste o cenário e revise como o prop acompanha o ped.",
          "Escolha formato Lua, JSON, AttachEntityToEntity, valores ou Scully; clique em Gerar/Copiar.",
          "Use Salvar JSON no resource para persistir o catálogo e reutilizar por exports em outros scripts."
        ],
        "en": [
          "Open /animconfig, choose a unique animation ID, and optionally add a display label.",
          "Pick an animation preset or enter Dict and Animation/Clip manually.",
          "Set Flag, Blend in, Blend out, Duration, and Playback speed; press Play.",
          "Select a prop preset or custom model and click Add.",
          "Choose a skeletal region and bone by name/ID or with the visual bone picker.",
          "Adjust Position/Rotation X/Y/Z or use Edit with Gizmo for 3D manipulation.",
          "Test movement and preview the prop in your desired scene.",
          "Select Lua, JSON, AttachEntityToEntity, raw values or Scully output; generate and copy.",
          "Save JSON to the resource catalog for reuse via exports from other scripts."
        ]
      }
    },
    {
      "id": "animation-ids",
      "title": {
        "pt": "ID, nome e histórico",
        "en": "Animation IDs, labels and history"
      },
      "text": {
        "pt": "O campo ID é uma chave estável usada na persistência e nos exports; o nome no menu de emotes funciona como rótulo amigável. O servidor normaliza IDs para minúsculas, converte espaços em _ e remove caracteres fora de letras/números, _ e -, limitando a 64 caracteres. A interface mantém um histórico local de sessões e um rascunho no armazenamento da NUI, além de poder recuperar entradas do catálogo no servidor.",
        "en": "The ID is the stable key used for persistence and exports; the emote menu name is a human-readable label. The server normalizes IDs to lowercase, replaces spaces with underscores, strips characters outside letters/numbers, _ and -, and limits them to 64 characters. The NUI also keeps local history and a draft alongside server-catalog restoration."
      },
      "bullets": {
        "pt": [
          "Use IDs estáveis, como beber_agua, tomar_cafe ou segurar_radio.",
          "O rótulo é opcional e pode ser alterado para melhorar o catálogo.",
          "Restaurar última sessão utiliza o rascunho local; Carregar catálogo busca registros salvos no resource.",
          "Ao gravar uma entrada com um ID existente, o servidor atualiza a configuração correspondente.",
          "A alteração do ID cria outra chave; scripts externos precisam ser atualizados se a chave mudou."
        ],
        "en": [
          "Use stable IDs such as beber_agua, tomar_cafe, or segurar_radio.",
          "The display label is optional and helps organize the catalog.",
          "Restore last session uses the local draft; Load catalog fetches resource-saved entries.",
          "Saving an existing ID updates its stored configuration.",
          "Changing an ID makes a new key and requires updating external consumers."
        ]
      }
    },
    {
      "id": "presets",
      "title": {
        "pt": "Bibliotecas prontas: emotes, props e bones",
        "en": "Built-in animation, prop and bone catalogs"
      },
      "text": {
        "pt": "shared/config.lua contém catálogos Config.Animations, Config.Props e Config.Bones. Eles alimentam os seletores de presets para animações e objetos do GTA V e pontos da malha esquelética. Isso reduz a necessidade de memorizar nomes internos. A seleção Custom permite fornecer dicionário, clipe e modelo manualmente. O arquivo também define presets de flags de animação.",
        "en": "shared/config.lua defines Config.Animations, Config.Props, and Config.Bones for browsing GTA V animations, object models, and skeletal attachment points. This reduces the need to memorize internal asset names. Custom entries accept manual dict/clip/model values. Animation flag presets are defined here as well."
      },
      "table": {
        "headers": [
          "Catálogo",
          "Origem",
          "Utilização"
        ],
        "rows": [
          [
            "Config.Animations",
            "shared/config.lua",
            "dict, name, flag e labelId"
          ],
          [
            "Config.Props",
            "shared/config.lua",
            "modelos disponíveis e busca por nome"
          ],
          [
            "Config.Bones",
            "shared/config.lua",
            "IDs e regiões; inclusive segmentos de dedos"
          ],
          [
            "Config.AnimationFlags",
            "shared/config.lua",
            "Loop, Upper, Move, Stay, Freeze"
          ]
        ]
      },
      "code": "Config.Animations = {\n    { labelId = \"Beer2\",\n      dict = \"amb@world_human_drinking@beer@male@idle_a\",\n      name = \"idle_c\", flag = 49 },\n}\nConfig.Props = {\n    { labelId = \"Bottle\", model = \"prop_ld_flow_bottle\" },\n}"
    },
    {
      "id": "animation-fields",
      "title": {
        "pt": "Dict, clipe, flags, blend e duração",
        "en": "Animation dictionary, clip, flags, blend and duration"
      },
      "text": {
        "pt": "O dicionário (dict) identifica o conjunto de animações; anim especifica o clipe. Flag controla comportamento como loop e movimentação. Blend in/out representam os parâmetros de transição utilizados na reprodução. Duration -1 significa manter a animação conforme comportamento do jogo; valores positivos são em milissegundos. Playback rate é configurável no editor, mas o player de catálogo atualmente chama TaskPlayAnim com rate 0.0; portanto, não se deve afirmar que a velocidade salva controla necessariamente a reprodução via export.",
        "en": "The dictionary (dict) identifies the animation collection; anim names its clip. Flags control behavior including loops and movement. Blend in/out are playback transition parameters. Duration -1 defers to game behavior, while positive values are milliseconds. Playback rate can be edited, but the saved-animation player currently calls TaskPlayAnim with rate 0.0, so do not assume the stored speed necessarily affects export playback."
      },
      "table": {
        "headers": [
          "Campo",
          "Exemplo",
          "Explicação"
        ],
        "rows": [
          [
            "dict",
            "mp_player_intdrink",
            "Dicionário da animação"
          ],
          [
            "anim",
            "loop_bottle",
            "Nome exato do clipe"
          ],
          [
            "flag",
            "49",
            "Bitflags de reprodução"
          ],
          [
            "blendIn / blendOut",
            "8 / -8",
            "Transições da animação"
          ],
          [
            "duration",
            "-1",
            "Milissegundos ou padrão indefinido"
          ],
          [
            "playbackRate",
            "1.0",
            "Controle de velocidade no editor"
          ]
        ]
      },
      "bullets": {
        "pt": [
          "As opções rápidas são Loop=1, Upper=16, Move=32, Stay=49 e Freeze=50, de acordo com Config.AnimationFlags.",
          "Valores de flags podem ser combinados conforme os recursos da native TaskPlayAnim.",
          "Use Testar em movimento para conferir se o ped pode se deslocar durante o clipe.",
          "A disponibilidade dos dicionários e clips depende das assets instaladas no jogo."
        ],
        "en": [
          "Built-in quick flags are Loop=1, Upper=16, Move=32, Stay=49, Freeze=50.",
          "Flag values may be combined according to TaskPlayAnim semantics.",
          "Use Test in movement to check how the ped behaves while moving.",
          "Animation asset availability depends on installed game data."
        ]
      }
    },
    {
      "id": "timeline",
      "title": {
        "pt": "Timeline, pausa, seek e testes",
        "en": "Timeline, pause, seek and testing"
      },
      "text": {
        "pt": "O editor possui Reproduzir, Pausar, Parar, Limpar, velocidades rápidas 0,5×/1×/1,5× e entrada numérica de velocidade. A linha do tempo permite arrastar a posição do clipe e avançar/voltar incrementos de 0,05 s. Há uma rotina para manter pose durante a pausa e um modo Testar em movimento para verificar o comportamento fora da pose estática.",
        "en": "The editor includes Play, Pause, Stop, Clear, quick playback speeds (0.5×, 1×, 1.5×), and a numeric speed field. The timeline supports scrubbing and ±0.05-second steps. A paused-pose holding routine and a movement-test mode allow more than static previews."
      },
      "steps": {
        "pt": [
          "Reproduza a animação e observe se os objetos acompanham o corpo corretamente.",
          "Use a linha do tempo para examinar momentos críticos, por exemplo quando o objeto toca a boca.",
          "Pause para conferir alinhamentos sem alterar posição física do personagem.",
          "Avance/retroceda 0,05 s para localizar o quadro de maior desvio.",
          "Use Testar em movimento para identificar clipping, deslocamentos e rotações inadequadas.",
          "Retorne a um quadro estável antes de capturar offsets finais."
        ],
        "en": [
          "Play the animation and check attached objects throughout the clip.",
          "Scrub to key phases, such as the moment a bottle reaches the mouth.",
          "Pause to inspect alignment.",
          "Move by ±0.05 s to find problem frames.",
          "Use Test in movement to catch clipping and misalignment.",
          "Return to a stable frame before capturing final offsets."
        ]
      }
    },
    {
      "id": "props",
      "title": {
        "pt": "Anexação de props e limite de objetos",
        "en": "Prop attachment and object limits"
      },
      "text": {
        "pt": "O painel de conexão apresenta modelo, adicionar, trocar modelo, ocultar, remover e lista de objetos anexados. A configuração Config.MaxEditorProps define o limite no editor (8 no código analisado). Cada prop tem modelo, osso, ordem de rotação, deslocamento e rotação independentes. Ocultar não equivale a excluir; selecione um objeto ativo antes de aplicar alterações.",
        "en": "The attachment panel provides model selection, Add, Replace model, Hide, Remove, and an attached-object list. Config.MaxEditorProps sets the editor limit (8 in the inspected source). Each prop carries its model, bone, rotation order, offset and rotation. Hiding is distinct from removal; select the active prop before editing."
      },
      "steps": {
        "pt": [
          "Em Prop / Objeto, escolha o preset ou defina Custom.",
          "Informe o nome do modelo, como prop_ld_flow_bottle ou prop_amb_beer_bottle.",
          "Clique Adicionar para criar e anexar o objeto de teste.",
          "Selecione o objeto na lista para editar o bone e os offsets apenas dele.",
          "Use Trocar modelo para experimentar outro visual preservando o contexto de edição.",
          "Ocultar permite comparar a animação com e sem o objeto; Remover exclui o prop do editor.",
          "Se usar diversos objetos, exporte Todos os objetos para preservar o conjunto."
        ],
        "en": [
          "Choose a preset or Custom in Prop/Object.",
          "Enter a model such as prop_ld_flow_bottle or prop_amb_beer_bottle.",
          "Click Add to create and attach a preview prop.",
          "Select the prop in the list to edit only its bone/offsets.",
          "Use Replace model to try a different visual.",
          "Hide to compare with/without; Remove to delete from the editor.",
          "Export All objects when you have a multi-prop composition."
        ]
      }
    },
    {
      "id": "bones",
      "title": {
        "pt": "Seleção visual de bones",
        "en": "Visual bone selection"
      },
      "text": {
        "pt": "Escolher o osso certo é mais importante que ajustar um deslocamento extremo. O editor permite filtrar por região, pesquisar nome/ID e usar Clicar no osso; círculos aparecem projetados sobre o ped para seleção direta. Há registros de mãos, pulsos, boca, cabeça, coluna, pés e dedos. O bone ID é uma referência do esqueleto GTA, não um índice de array de props.",
        "en": "Correct bone selection matters more than compensating with extreme offsets. The editor can filter by region, search names/IDs, and use Click bone; interactive markers project over the ped. Catalog entries include hands, wrists, mouth, head, spine, feet, and finger joints. A bone ID identifies a GTA skeletal joint, not a prop-array index."
      },
      "table": {
        "headers": [
          "Bone",
          "ID",
          "Aplicação típica"
        ],
        "rows": [
          [
            "Mão direita",
            "57005",
            "Objetos carregados com a mão direita"
          ],
          [
            "Mão esquerda",
            "18905",
            "Objetos carregados com a mão esquerda"
          ],
          [
            "Cabeça",
            "31086",
            "Acessórios de cabeça"
          ],
          [
            "Boca",
            "47495",
            "Props de interação facial"
          ],
          [
            "Coluna",
            "24818",
            "Acessórios no torso"
          ],
          [
            "Pé direito",
            "52301",
            "Posicionamentos junto ao calçado"
          ]
        ]
      },
      "steps": {
        "pt": [
          "Selecione a Região dos ossos adequada.",
          "Digite parte do nome ou ID para filtrar opções.",
          "Use Clicar no osso e selecione um dos marcadores sobre o personagem.",
          "Confirme o bone resultante no campo Bone ID.",
          "Ajuste o offset com passos pequenos e reproduza novamente."
        ],
        "en": [
          "Select the desired bone region.",
          "Search by part of the name or numeric ID.",
          "Click the on-character bone marker.",
          "Confirm the Bone ID field.",
          "Adjust the offset in small steps and replay."
        ]
      }
    },
    {
      "id": "transform",
      "title": {
        "pt": "Offset de posição e rotação",
        "en": "Position and rotation offsets"
      },
      "text": {
        "pt": "Position X/Y/Z descreve o deslocamento do objeto relativo ao bone; Rotation X/Y/Z descreve a orientação relativa. NudgeSteps permite passos de 0.001, 0.005, 0.01, 0.05 e 0.1 na posição e 0.1°, 0.5°, 1°, 5° e 15° na rotação. Rotation order influencia a interpretação da orientação; manter orientação ao trocar a ordem solicita conversão para preservar o resultado visual.",
        "en": "Position X/Y/Z controls the prop offset relative to its bone; Rotation X/Y/Z controls relative orientation. NudgeSteps offers position steps of 0.001, 0.005, 0.01, 0.05, 0.1 and rotation steps of 0.1°, 0.5°, 1°, 5°, 15°. Rotation order affects orientation math; Preserve orientation requests a conversion when changing order."
      },
      "code": "Config.DefaultProp = {\n    model = 'prop_ld_flow_bottle',\n    boneId = 57005,\n    rotationOrder = 2,\n    offset = { x = 0.12, y = 0.02, z = -0.02 },\n    rotation = { x = -80.0, y = 0.0, z = 10.0 },\n}",
      "steps": {
        "pt": [
          "Escolha a escala de precisão no seletor de Position ou Rotation.",
          "Use X-/X+, Y-/Y+, Z-/Z+ ou digite o valor diretamente.",
          "Ajuste primeiro a posição aproximada, depois a orientação.",
          "Reproduza novamente e observe a transição das mãos e do corpo.",
          "Se trocar Rotation order, marque Manter a orientação para preservar a aparência, quando possível."
        ],
        "en": [
          "Choose a Position or Rotation precision step.",
          "Use X-/X+, Y-/Y+, Z-/Z+ or enter numbers.",
          "Align position first, then orientation.",
          "Replay and inspect hand/body movement.",
          "When changing Rotation order, keep Preserve orientation checked where appropriate."
        ]
      }
    },
    {
      "id": "gizmo",
      "title": {
        "pt": "Gizmo 3D e captura da posição",
        "en": "3D gizmo and transform capture"
      },
      "text": {
        "pt": "O botão Editar com Gizmo abre a manipulação tridimensional fornecida por pr_bridge. Uma entidade auxiliar permite mover/rotacionar o objeto em mundo; o recurso converte a transformação para offset e rotação relativos ao bone. Confirmar aplica a nova transformação; cancelar restaura valores anteriores. O modo possui câmera livre, controle de precisão e atualização dos campos do editor.",
        "en": "Edit with Gizmo invokes the 3D manipulation interface provided by pr_bridge. A helper entity allows world-space manipulation; the code converts its transform back to the chosen bone's local offset/rotation. Confirm commits; cancel restores previous values. It supports free camera, precision controls and live editor updates."
      },
      "steps": {
        "pt": [
          "Selecione o prop e confirme que ele está visível e já anexado.",
          "Clique Editar com Gizmo; a interface de edição assume o foco.",
          "Use as setas/eixos do gizmo para reposicionar e orientar o objeto.",
          "Alterne precisão e câmera livre conforme as teclas exibidas na interface.",
          "Confirme para gravar a transformação no editor ou cancele para restaurar os offsets anteriores.",
          "Use Capturar posição atual quando quiser converter o transform atual do objeto para o osso."
        ],
        "en": [
          "Select a visible attached prop.",
          "Click Edit with Gizmo to enter manipulation mode.",
          "Use axes and handles to place/rotate the object.",
          "Switch precision and free camera using on-screen controls.",
          "Confirm to save or cancel to restore previous offsets.",
          "Use Capture current position to convert the current world transform to bone-local values."
        ]
      },
      "note": {
        "pt": "Se o pr_bridge não disponibilizar o módulo de gizmo, o callback retorna gizmo_missing. Posicionamento numérico continua sendo um caminho alternativo.",
        "en": "If pr_bridge has no gizmo module, the callback returns gizmo_missing. Numeric positioning remains the alternative."
      }
    },
    {
      "id": "scene",
      "title": {
        "pt": "Cenário de prévia, clima e chroma key",
        "en": "Preview scene, weather and chroma key"
      },
      "text": {
        "pt": "O editor oferece cenário da cidade, chroma verde e cor de fundo customizada, além de ajustes de hora local e clima. A câmera pode focar cintura, cabeça, pés e mãos; o chroma facilita recortes e demonstrações de poses em materiais de divulgação. As substituições de cenário são reversíveis e a sessão procura restaurá-las ao fechar o editor.",
        "en": "The preview supports city backdrop, green chroma key and custom colors, as well as local hour and weather controls. Camera targets include waist, head, feet, and hands; chroma makes it easier to capture promotional material. Scene overrides are intended to be restored when the editor closes."
      },
      "steps": {
        "pt": [
          "Expanda Cenário da prévia.",
          "Selecione Da cidade para trabalhar com o ambiente GTA, ou Chroma verde para isolação visual.",
          "Se desejar, selecione fundo customizado e defina a cor manualmente.",
          "Informe hora 0–23 e escolha o clima para avaliar diferenças de iluminação.",
          "Use o seletor de câmera para inspecionar mãos, rosto, pés ou cintura.",
          "Ao encerrar a edição, verifique se clima e câmera retornaram ao estado habitual."
        ],
        "en": [
          "Expand Preview scene.",
          "Choose City or Green chroma.",
          "Set a custom background color if needed.",
          "Adjust local hour 0–23 and weather.",
          "Use camera targets to inspect hands, face, feet and waist.",
          "Verify that camera/weather overrides are restored on exit."
        ]
      }
    },
    {
      "id": "export",
      "title": {
        "pt": "Gerador de códigos: todos os formatos",
        "en": "Code generator: all output formats"
      },
      "text": {
        "pt": "O arquivo web/formats.js implementa cinco formatos: lua (padrão), json, native, values e scully. O menu seleciona o formato e o escopo Todos os objetos/Objeto selecionado. A ação Gerar constrói o conteúdo no painel de texto; Copiar tenta o clipboard moderno e recorre à seleção do campo. Os formatos diferem em propósito: Lua/JSON representam dados, native produz instruções de attachment, values fornece números e scully produz um snippet de configuração compatível.",
        "en": "web/formats.js implements five formats: lua (default), json, native, values, and scully. Choose a format and scope (All or Selected prop). Generate renders the output and Copy uses the modern clipboard API with a selection fallback. Lua/JSON are structured data, native produces attachment statements, values shows transforms, and scully generates a compatible configuration snippet."
      },
      "table": {
        "headers": [
          "Formato",
          "Saída gerada",
          "Uso recomendado"
        ],
        "rows": [
          [
            "Lua",
            "Tabela com dict, anim, flags, blend, duration, playbackRate e props",
            "Integração em recursos Lua"
          ],
          [
            "JSON",
            "Objeto com id, label, animation e props",
            "Persistência, APIs e ferramentas externas"
          ],
          [
            "AttachEntityToEntity",
            "Chamadas da native por prop",
            "Integração manual na lógica do recurso"
          ],
          [
            "Valores de posição/rotação",
            "Modelo + bone + vetores numéricos",
            "Depuração e ajustes em outros sistemas"
          ],
          [
            "Scully Emote Menu",
            "Tabela Label, Command, Dictionary, Animation e Options/Props",
            "Cadastro em formato Scully"
          ]
        ]
      },
      "steps": {
        "pt": [
          "Conclua posicionamento e animação antes de gerar.",
          "Escolha o Formato no painel Config gerada.",
          "Escolha Todos os objetos ou apenas o selecionado.",
          "Clique Gerar e revise o resultado produzido.",
          "Clique Copiar para usar o snippet em outro script, verificando o contrato esperado pelo recurso de destino.",
          "Se quiser reexecutar por ID sem copiar código, escolha Salvar JSON no resource e use os exports."
        ],
        "en": [
          "Finish positioning and animation.",
          "Choose the Output format.",
          "Choose All or Selected prop.",
          "Click Generate and review the output.",
          "Click Copy to paste in another resource, adapting to its schema.",
          "To play by ID without duplicating implementation, save to the resource catalog and use exports."
        ]
      }
    },
    {
      "id": "lua-example",
      "title": {
        "pt": "Exemplo de configuração Lua",
        "en": "Lua configuration example"
      },
      "text": {
        "pt": "O formato Lua já traz um template de animação com modelo, bone e vec3 de posição/rotação. O exemplo abaixo segue o contrato produzido pelo gerador e pode ser adaptado ao schema do script de emotes. Um gerador não pode garantir integração automática com qualquer sistema sem mapear os nomes dos campos.",
        "en": "The Lua format provides animation and prop table values with bone and vec3 transforms. The following sample follows the generated schema and may be adapted to an emote script. Generated code is not a guarantee of zero-adaptation compatibility with every framework."
      },
      "code": "{\n    id = \"garrafa_dagua\",\n    dict = \"mp_player_intdrink\",\n    anim = \"loop_bottle\",\n    flags = 49,\n    blendIn = 8,\n    blendOut = -8,\n    duration = -1,\n    playbackRate = 1,\n    props = {\n        {\n            model = \"prop_ld_flow_bottle\",\n            bone = 57005,\n            pos = vec3(0.12, 0.02, -0.02),\n            rot = vec3(-80.0, 0.0, 10.0),\n            rotationOrder = 2,\n        },\n    },\n}"
    },
    {
      "id": "json-example",
      "title": {
        "pt": "Exemplo de exportação JSON",
        "en": "JSON export example"
      },
      "text": {
        "pt": "A saída JSON armazena valores para ferramentas externas e utiliza o objeto animation junto a props. O servidor persiste um catálogo versionado contendo uma coleção animations indexada por ID e timestamps de criação/atualização.",
        "en": "JSON output stores data for external tools and contains an animation object plus props. The server persists a versioned catalog with an animations map keyed by ID and creation/update timestamps."
      },
      "code": "{\n  \"id\": \"garrafa_dagua\",\n  \"label\": \"Beber água\",\n  \"animation\": {\n    \"dict\": \"mp_player_intdrink\",\n    \"anim\": \"loop_bottle\",\n    \"flag\": 49,\n    \"blendIn\": 8,\n    \"blendOut\": -8,\n    \"duration\": -1,\n    \"playbackRate\": 1\n  },\n  \"props\": [{\n    \"model\": \"prop_ld_flow_bottle\",\n    \"boneId\": 57005,\n    \"rotationOrder\": 2,\n    \"offset\": { \"x\": 0.12, \"y\": 0.02, \"z\": -0.02 },\n    \"rotation\": { \"x\": -80, \"y\": 0, \"z\": 10 }\n  }]\n}",
      "note": {
        "pt": "Exemplo ilustrativo com valores presentes na configuração padrão. Use o botão Gerar para obter os números da sua sessão.",
        "en": "Illustrative values based on defaults. Use Generate for the exact values from your session."
      }
    },
    {
      "id": "native-example",
      "title": {
        "pt": "Saída nativa: AttachEntityToEntity",
        "en": "Native output: AttachEntityToEntity"
      },
      "text": {
        "pt": "No formato native, o gerador emite uma chamada AttachEntityToEntity para cada prop. O trecho gerado pressupõe que o script já tenha criado o objeto e possua as variáveis ped e object1. Ele não carrega modelos nem cria automaticamente entidades: cabe ao recurso consumidor fazer isso ou utilizar o export Play pronto.",
        "en": "In native format, the generator creates one AttachEntityToEntity call per prop. The snippet assumes the script has already created its object and has ped/object1 variables. It does not load models or create entities; the consumer must do that or use the ready-made Play export."
      },
      "code": "-- Trecho gerado (requer 'ped' e 'object1' existentes)\nAttachEntityToEntity(\n    object1, ped, GetPedBoneIndex(ped, 57005),\n    0.12000, 0.02000, -0.02000,\n    -80.00000, 0.00000, 10.00000,\n    true, true, false, true, 2, true\n)"
    },
    {
      "id": "scully",
      "title": {
        "pt": "Exportação para Scully Emote Menu",
        "en": "Scully Emote Menu export"
      },
      "text": {
        "pt": "A exportação Scully converte parâmetros para Label, Command, Dictionary, Animation e Options. Props passam a Name, Bone e Placement com dois vec3. O gerador consulta o client para converter rotações no formato esperado. Existe uma aproximação dos flags de movimento/loop e o próprio editor sinaliza quando certas opções não correspondem exatamente ao formato Scully.",
        "en": "The Scully format maps settings to Label, Command, Dictionary, Animation, and Options. Props use Name, Bone, and Placement with two vec3 values. The generator asks the client to convert rotations for the target format. Movement/loop flags may be approximated; the editor warns when options do not map exactly."
      },
      "code": "{\n    Label = \"Beber água\",\n    Command = \"garrafa_dagua\",\n    Dictionary = \"mp_player_intdrink\",\n    Animation = \"loop_bottle\",\n    Options = {\n        Flags = { Move = true, Loop = true },\n        Props = {\n            {\n                Name = \"prop_ld_flow_bottle\",\n                Bone = 57005,\n                Placement = { vec3(0.12, 0.02, -0.02), vec3(-80.0, 0.0, 10.0) },\n            },\n        },\n    },\n},",
      "note": {
        "pt": "O vetor de rotação do exemplo é ilustrativo; use o valor calculado pelo gerador Scully no editor, que realiza conversão específica.",
        "en": "The example rotation is illustrative; use the editor-generated Scully rotation because it performs format-specific conversion."
      }
    },
    {
      "id": "persistent-catalog",
      "title": {
        "pt": "Catálogo salvo em saved_config.json",
        "en": "Persistent catalog in saved_config.json"
      },
      "text": {
        "pt": "O botão Salvar JSON no resource envia uma solicitação NUI ao client, que aciona o evento pr_animateConfig:server:saveConfig. O servidor normaliza e valida o ID/dict/anim, prepara os dados e grava saved_config.json com SaveResourceFile. O arquivo é mantido no resource do servidor, não apenas no navegador; o catálogo é enviado aos clientes após o salvamento. O formato atual usa version=2 e animations como mapa indexado por ID; há migração simples de um registro legado.",
        "en": "Save JSON in resource calls a NUI handler, then the server event pr_animateConfig:server:saveConfig. The server sanitizes/validates ID/dict/anim and writes saved_config.json via SaveResourceFile. This file is server-side, not merely browser storage. After saving, the catalog is broadcast to clients. The current file uses version=2 and an animations map by ID; a basic legacy-entry migration is present."
      },
      "steps": {
        "pt": [
          "Escolha uma ID e nome para o emote.",
          "Monte a animação e os props e teste o resultado.",
          "Clique Salvar JSON no resource.",
          "Confirme a mensagem de sucesso do servidor.",
          "Verifique saved_config.json na raiz do resource e procure animations[ID].",
          "Reinicie o resource para confirmar que o catálogo é carregado novamente.",
          "Consulte ou reproduza a entrada pelo ID usando Get/Play."
        ],
        "en": [
          "Choose an emote ID and display label.",
          "Build and test the animation and props.",
          "Click Save JSON in resource.",
          "Confirm the server success response.",
          "Inspect root saved_config.json and animations[ID].",
          "Restart the resource to confirm catalog reload.",
          "Call Get/Play with the saved ID."
        ]
      },
      "code": "{\n  \"version\": 2,\n  \"animations\": {\n    \"garrafa_dagua\": {\n      \"id\": \"garrafa_dagua\",\n      \"label\": \"Beber água\",\n      \"animation\": { \"dict\": \"mp_player_intdrink\", \"anim\": \"loop_bottle\",\n                     \"flag\": 49, \"duration\": -1, \"blendIn\": 8,\n                     \"blendOut\": -8, \"playbackRate\": 1 },\n      \"props\": []\n    }\n  }\n}"
    },
    {
      "id": "exports-client",
      "title": {
        "pt": "API de exports: client-side",
        "en": "Client-side exports API"
      },
      "text": {
        "pt": "Os exports definidos em client/main.lua são Open, Close, Play, pr_animate, Stop, Get e GetAll. Play executa uma animação já salva no catálogo do jogador local, criando e anexando seus objetos; Stop interrompe e remove os objetos. Open/Close controlam o editor. Get/GetAll retornam dados do cache sincronizado com o servidor.",
        "en": "client/main.lua exposes Open, Close, Play, pr_animate, Stop, Get, and GetAll. Play runs a previously saved animation for the local player, creating and attaching its props; Stop ends playback and deletes spawned props. Open/Close control the editor. Get/GetAll expose the client-side synchronized catalog."
      },
      "table": {
        "headers": [
          "Export",
          "Assinatura (client)",
          "Resultado"
        ],
        "rows": [
          [
            "Open",
            "Open(source?)",
            "Abre o editor NUI"
          ],
          [
            "Close",
            "Close()",
            "Fecha o editor"
          ],
          [
            "Play",
            "Play(id, durationSeconds?)",
            "Reproduz configuração local pelo ID"
          ],
          [
            "pr_animate",
            "pr_animate(id, durationSeconds?)",
            "Alias de Play"
          ],
          [
            "Stop",
            "Stop()",
            "Interrompe e remove props"
          ],
          [
            "Get",
            "Get(id)",
            "Entrada por ID ou nil"
          ],
          [
            "GetAll",
            "GetAll()",
            "Mapa de animações sincronizadas"
          ]
        ]
      },
      "code": "-- client.lua de outro recurso FiveM\nlocal id = 'garrafa_dagua'\n\n-- Reproduz no jogador local. Opcional: duração em segundos.\nlocal ok = exports['pr_animateConfig']:Play(id, 10)\nif not ok then print('Animação não encontrada ou não carregada') end\n\n-- Consulta a configuração completa\nlocal config = exports['pr_animateConfig']:Get(id)\nif config then\n    print(config.animation.dict, config.animation.anim)\nend\n\n-- Interrompe e remove props criados pelo player\nexports['pr_animateConfig']:Stop()"
    },
    {
      "id": "exports-server",
      "title": {
        "pt": "API de exports: server-side",
        "en": "Server-side exports API"
      },
      "text": {
        "pt": "No servidor, Get/GetAll retornam as entradas persistidas; Play envia um evento para um jogador específico e Stop envia o encerramento ao jogador. A assinatura é diferente do cliente: Play(playerId, id, durationSeconds) e Stop(playerId). O retorno booleano de Play confirma ID válido e evento enviado, não garante que o cliente conseguiu carregar todas as assets.",
        "en": "On the server, Get/GetAll return persisted entries; Play dispatches to a particular player and Stop dispatches termination. Signatures differ from the client: Play(playerId, id, durationSeconds), Stop(playerId). A true Play return confirms a valid ID and dispatched event, not successful loading of every asset on the client."
      },
      "table": {
        "headers": [
          "Export",
          "Assinatura (server)",
          "Resultado"
        ],
        "rows": [
          [
            "Get",
            "Get(id)",
            "Retorna objeto da animação ou nil"
          ],
          [
            "GetAll",
            "GetAll()",
            "Mapa completo de entradas"
          ],
          [
            "Play",
            "Play(playerId, id, durationSeconds?)",
            "Envia reprodução para um player"
          ],
          [
            "Stop",
            "Stop(playerId)",
            "Envia interrupção ao player"
          ]
        ]
      },
      "code": "-- server.lua de um recurso próprio\nRegisterCommand('bebersalvo', function(source)\n    if source <= 0 then return end\n    local ok = exports['pr_animateConfig']:Play(source, 'garrafa_dagua', 10)\n    if not ok then\n        print('ID de animação inexistente no catálogo')\n    end\nend, false)\n\nRegisterCommand('pararbeber', function(source)\n    if source <= 0 then return end\n    exports['pr_animateConfig']:Stop(source)\nend, false)"
    },
    {
      "id": "integration",
      "title": {
        "pt": "Integração em scripts existentes",
        "en": "Integration with other resources"
      },
      "text": {
        "pt": "O recurso consumidor não precisa repetir RequestAnimDict, TaskPlayAnim, CreateObjectNoOffset, GetPedBoneIndex e AttachEntityToEntity. Depois de salvar a animação por ID, basta chamar Play do lado adequado. O player do pr_animateConfig realiza carregamento do dicionário/modelos, execução, criação de objetos e anexação; Stop encerra a task e remove seus props. Esse é o principal ganho arquitetural da ferramenta.",
        "en": "The consuming resource does not need to duplicate RequestAnimDict, TaskPlayAnim, CreateObjectNoOffset, GetPedBoneIndex, and AttachEntityToEntity. After saving a named animation, call Play on the appropriate side. The built-in player loads animation/model assets, starts playback, creates props, and attaches them; Stop ends the task and deletes its props. This reuse is a key architectural benefit."
      },
      "steps": {
        "pt": [
          "No editor, salve uma entrada com ID estável, por exemplo garrafa_dagua.",
          "Em outro resource, garanta a inicialização de pr_animateConfig antes da chamada (dependência no fxmanifest ou server.cfg).",
          "Para uso local, chame exports['pr_animateConfig']:Play('garrafa_dagua', 10) no cliente.",
          "Para acionar um jogador pelo servidor, chame exports['pr_animateConfig']:Play(playerId, 'garrafa_dagua', 10).",
          "Para interromper, chame Stop no mesmo contexto e evite criar props duplicados no recurso consumidor.",
          "Use Get(id) para consultar dados quando precisar mostrar nome, ícone ou detalhes em seu próprio menu."
        ],
        "en": [
          "Save a stable ID, e.g. garrafa_dagua, in the editor.",
          "Ensure pr_animateConfig starts before the consumer resource (dependency or server.cfg order).",
          "On the client, call exports['pr_animateConfig']:Play('garrafa_dagua', 10).",
          "From the server, call exports['pr_animateConfig']:Play(playerId, 'garrafa_dagua', 10).",
          "Call Stop in the matching context; do not spawn duplicate props in the consumer.",
          "Use Get(id) when building an external emote menu."
        ]
      },
      "code": "-- fxmanifest.lua de outro recurso\ndependency 'pr_animateConfig'\n\n-- client.lua (exemplo: interação local)\nRegisterCommand('beberagua', function()\n    exports['pr_animateConfig']:Play('garrafa_dagua', 8)\nend, false)\n\nRegisterCommand('cancelaremo', function()\n    exports['pr_animateConfig']:Stop()\nend, false)",
      "note": {
        "pt": "Os exemplos são integrações explícitas com exports existentes. A existência do recurso e do ID salvo deve ser verificada; chamadas antecipadas após a inicialização podem encontrar o cache do cliente ainda não sincronizado.",
        "en": "Examples use existing exports. Check the resource and stored ID; early calls after starting may occur before client catalog synchronization."
      }
    },
    {
      "id": "runtime",
      "title": {
        "pt": "Como o player executa animações",
        "en": "Saved-animation runtime internals"
      },
      "text": {
        "pt": "O player resolve a entrada do catálogo, interrompe a reprodução anterior, aguarda o carregamento do anim dict por até 5 segundos, chama TaskPlayAnim, solicita cada modelo por até 5 segundos, cria objetos com CreateObjectNoOffset, anexa ao bone usando AttachEntityToEntity e guarda a lista criada. Se duration for positiva, agenda Stop; Stop remove os objetos e encerra a animação. Ele atua sobre PlayerPedId() no cliente.",
        "en": "The saved player resolves a catalog entry, stops prior playback, awaits anim-dict loading for up to five seconds, calls TaskPlayAnim, loads each prop model for up to five seconds, creates with CreateObjectNoOffset, attaches via AttachEntityToEntity, and tracks spawned objects. A positive duration schedules Stop; Stop removes props and stops playback. It targets PlayerPedId() on the client."
      },
      "cards": [
        [
          "Carregamento controlado",
          "Solicita dicionários e modelos com timeout antes de utilizar assets."
        ],
        [
          "Transformação por bone",
          "Respeita boneId, offset, rotation e rotationOrder persistidos."
        ],
        [
          "Ciclo de vida",
          "A lista savedPlayback.props permite limpeza dos objetos da reprodução atual."
        ],
        [
          "Escopo local",
          "Play client atua no ped local; Play server direciona um evento a um player específico."
        ]
      ]
    },
    {
      "id": "advanced-config",
      "title": {
        "pt": "Referência de shared/config.lua",
        "en": "shared/config.lua reference"
      },
      "text": {
        "pt": "shared/config.lua centraliza idioma, modo debug, comando, câmera, distância do clone de prévia, valores-padrão de animação e prop, escalas de ajuste, presets e bones. Faça ajustes nesse arquivo e reinicie o resource; preserve os tipos esperados (string, número, tabela, booleano).",
        "en": "shared/config.lua centralizes language, debugging, command, camera options, preview clone distance, default animation/prop values, nudge precision, presets, and bones. Edit this file and restart the resource, preserving expected value types."
      },
      "table": {
        "headers": [
          "Chave",
          "Valor no código",
          "Descrição"
        ],
        "rows": [
          [
            "Config.Language",
            "pt-br",
            "Idioma padrão da interface"
          ],
          [
            "Config.VersionCheck",
            "true",
            "Verificação de versão"
          ],
          [
            "Config.Debug",
            "true",
            "Mensagens de debug"
          ],
          [
            "Config.DebugMaxEntries",
            "10",
            "Limite de entradas visíveis de debug"
          ],
          [
            "Config.Command",
            "animconfig",
            "Comando do editor"
          ],
          [
            "Config.CloseKey",
            "177",
            "Controle de fechar (Backspace)"
          ],
          [
            "Config.MaxEditorProps",
            "8",
            "Máximo de props na edição"
          ],
          [
            "Config.Camera.enabled",
            "true",
            "Habilita câmera do editor"
          ],
          [
            "Config.Camera.useRightMouse",
            "true",
            "Controle de câmera com botão direito"
          ],
          [
            "Config.Preview.cloneDistance",
            "1.25",
            "Distância de prévia auxiliar"
          ],
          [
            "Config.NudgeSteps.position",
            "0.001..0.1",
            "Passos de posição"
          ],
          [
            "Config.NudgeSteps.rotation",
            "0.1..15",
            "Passos de rotação"
          ]
        ]
      },
      "code": "Config.Language = 'pt-br'\nConfig.Command = 'animconfig'\nConfig.MaxEditorProps = 8\nConfig.Camera = { enabled = true, useRightMouse = true }\nConfig.Preview = { cloneDistance = 1.25 }\nConfig.NudgeSteps = {\n    position = { 0.001, 0.005, 0.01, 0.05, 0.1 },\n    rotation = { 0.1, 0.5, 1.0, 5.0, 15.0 }\n}"
    },
    {
      "id": "localization",
      "title": {
        "pt": "Idiomas e personalização de tradução",
        "en": "Languages and localization"
      },
      "text": {
        "pt": "Os arquivos locale/pt-br.lua, locale/en-us.lua e locale/es.lua estão presentes no repositório analisado. A NUI recebe um conjunto de traduções construído por pr_lib.locale() e atualiza os rótulos do editor. Ao acrescentar termos, mantenha as mesmas chaves em cada idioma.",
        "en": "The inspected repository contains locale/pt-br.lua, locale/en-us.lua, and locale/es.lua. The NUI receives a translations bundle constructed through pr_lib.locale() and updates editor labels. Keep keys consistent when adding or editing translations."
      },
      "steps": {
        "pt": [
          "Selecione Config.Language com um identificador existente, como pt-br, en-us ou es.",
          "Altere os valores nas tabelas de locale correspondentes sem renomear chaves.",
          "Se criar um novo idioma, adicione arquivo de locale e garanta que pr_bridge o consiga resolver.",
          "Reinicie o resource para testar menus, notificações, botões, erros e mensagens da interface."
        ],
        "en": [
          "Set Config.Language to an available identifier such as pt-br, en-us, or es.",
          "Edit locale text values without renaming keys.",
          "For a new language, add a locale file and ensure pr_bridge can resolve it.",
          "Restart and test menus, buttons, warnings, notifications, and messages."
        ]
      }
    },
    {
      "id": "architecture",
      "title": {
        "pt": "Arquitetura FiveM, NUI e sincronização",
        "en": "FiveM architecture, NUI and synchronization"
      },
      "text": {
        "pt": "O fxmanifest monta os componentes shared, client, server e UI. web/main.js mantém estado de formulários e envia fetch para callbacks NUI; client/main.lua controla ped, câmera, gizmo, playback e objetos; server/main.lua mantém o catálogo JSON e broadcasts. O JS de web/formats.js transforma estado em texto copiável. A separação evita colocar manipulação de entidade no navegador ou persistência do servidor apenas no cliente.",
        "en": "The fxmanifest assembles shared, client, server and NUI layers. web/main.js manages forms and posts NUI callbacks; client/main.lua owns ped, camera, gizmo, playback and entities; server/main.lua keeps the JSON catalog and broadcasts changes. web/formats.js renders copyable snippets. This separation keeps GTA entity manipulation out of the browser and server persistence out of client-only storage."
      },
      "code": "[NUI HTML/CSS/JS]  ⇄  [client/main.lua]\n     │                           │\n     ├─ formats.js (Lua/JSON)     ├─ camera, gizmo, bones, props\n     └─ local draft/history      ├─ ped + playback\n                                 │\n                       TriggerServerEvent\n                                 │\n                         [server/main.lua]\n                                 │\n                     saved_config.json (v2)\n                                 │\n                        setCatalog broadcast\n                                 │\n                 Client cache / exports Get, Play"
    },
    {
      "id": "security",
      "title": {
        "pt": "Segurança e controle de acesso",
        "en": "Security and access control"
      },
      "text": {
        "pt": "O handler server:saveConfig exposto no código analisado recebe solicitações de clientes, sanitiza alguns campos e salva o catálogo, mas não apresenta uma checagem explícita de permissão ACE, cargo ou identidade antes da escrita. Em servidor público isso significa risco de alterações não autorizadas. O ideal é restringir o uso do editor e, principalmente, validar acesso no handler server-side antes de persistir. Não confunda a existência de um menu acessível somente à equipe com autorização efetiva no servidor.",
        "en": "The inspected server:saveConfig handler accepts client requests, sanitizes some fields and persists the catalog, but has no explicit ACE/role/identity check before writing. On public servers this is an unauthorized-modification risk. Restrict access to the editor and, most importantly, enforce permissions in the server handler before saving. A hidden admin menu alone is not server-side authorization."
      },
      "bullets": {
        "pt": [
          "Adicione validação server-side via IsPlayerAceAllowed ou seu sistema de permissões antes da gravação.",
          "Restrinja volume de props, tamanho das strings e taxas de requisição conforme necessidades da base.",
          "Evite aceitar nomes de modelos e dicionários sem validação adicional caso recursos externos controlem os parâmetros.",
          "Mantenha backup de saved_config.json e revisões em Git.",
          "Não trate debug de console como mecanismo de proteção."
        ],
        "en": [
          "Add server-side ACE or framework authorization before catalog writes.",
          "Bound prop count, string sizes and save frequency as needed.",
          "Validate model/dict inputs further if external resources can control them.",
          "Back up saved_config.json and version it.",
          "Debug logging is not an access-control mechanism."
        ]
      },
      "note": {
        "pt": "Observação baseada na implementação consultada, não em teste de invasão. Recomenda-se corrigir o controle de acesso antes de liberar edição a jogadores comuns.",
        "en": "This finding is based on inspected source, not penetration testing. Address authorization before exposing editing to regular players."
      }
    },
    {
      "id": "troubleshooting",
      "title": {
        "pt": "Solução de problemas e depuração",
        "en": "Troubleshooting and debugging"
      },
      "text": {
        "pt": "Problemas comuns decorrem de dependência ausente, dicionário/modelo não carregado, osso inadequado, transformação incorreta, timeout na gravação ou incompatibilidade do formato de exportação. Ative Debug durante o desenvolvimento e consulte as mensagens da NUI, F8 e console do servidor.",
        "en": "Common issues involve missing dependencies, failed model/dict loading, wrong bones, bad transforms, save timeouts, and mismatched export formats. Enable Debug while developing and inspect NUI logs, F8, and server console."
      },
      "table": {
        "headers": [
          "Sintoma",
          "Causa provável",
          "Verificação"
        ],
        "rows": [
          [
            "Comando não abre",
            "pr_bridge ausente ou erro Lua",
            "Startup order e F8"
          ],
          [
            "Modelo não aparece",
            "Model incorreto/asset indisponível",
            "Nome do prop e timeout"
          ],
          [
            "Objeto longe da mão",
            "Bone errado ou offset excessivo",
            "Clicar no osso e reset offsets"
          ],
          [
            "Gizmo não funciona",
            "API ausente no bridge",
            "gizmo_missing no callback"
          ],
          [
            "Export vazio",
            "Nenhum prop no escopo selecionado",
            "Selecionar Todos ou Adicionar"
          ],
          [
            "Salvar falha",
            "Write denied, timeout ou payload inválido",
            "Logs e saved_config.json"
          ],
          [
            "Emote não executa",
            "ID não encontrado no cache",
            "Get/GetAll e sincronização"
          ],
          [
            "Scully desalinhado",
            "Conversão de rotação",
            "Usar saída gerada do editor"
          ]
        ]
      }
    },
    {
      "id": "testing",
      "title": {
        "pt": "Checklist de qualidade e validação",
        "en": "Quality assurance checklist"
      },
      "text": {
        "pt": "Para documentar o projeto profissionalmente, teste cada etapa do ciclo completo e registre que edição visual, persistência e replay por export são aspectos distintos. Valide múltiplos jogadores e o reinício do resource, além da interface local.",
        "en": "For professional documentation, test the full editing-to-consumption lifecycle and distinguish visual authoring, persistence, and export playback. Include multiplayer and resource restart scenarios."
      },
      "bullets": {
        "pt": [
          "Abrir/fechar pelo comando e keybind; foco NUI liberado após fechar.",
          "Adicionar, trocar, ocultar, selecionar e remover múltiplos props.",
          "Filtrar bones por região e clicar diretamente no marcador correto.",
          "Alterar rotation order preservando a orientação quando marcado.",
          "Editar com gizmo, confirmar, cancelar e recuperar valores originais.",
          "Usar timeline, pausa, seek, velocidade e teste em movimento.",
          "Trocar cidade/chroma/cor/clima e restaurar o cenário no fechamento.",
          "Gerar e copiar cada um dos cinco formatos, com todos e somente o prop selecionado.",
          "Salvar em JSON, reiniciar resource e restaurar o catálogo.",
          "Executar Play/Stop pelo cliente e pelo servidor, inclusive cleanup de props.",
          "Testar permissões de acesso e editar entradas existentes com segurança."
        ],
        "en": [
          "Open/close via command/keybind; release NUI focus on close.",
          "Add, replace, hide, select, remove multiple props.",
          "Filter/select bones by clicking overlay markers.",
          "Change rotation order while preserving orientation.",
          "Confirm/cancel gizmo and restore offsets.",
          "Test timeline, pause, seek, playback rate and movement.",
          "Toggle city/chroma/custom color/weather and restore scene.",
          "Generate/copy each of five formats for all/selected props.",
          "Save JSON, restart, restore catalog.",
          "Play/Stop from both client and server with cleanup.",
          "Test authorization and safe updates."
        ]
      }
    },
    {
      "id": "source",
      "title": {
        "pt": "Estrutura do código e materiais",
        "en": "Source structure and materials"
      },
      "text": {
        "pt": "Os módulos principais incluem fxmanifest.lua, shared/config.lua, client/main.lua, server/main.lua, web/main.js, web/formats.js e locale. O projeto é desenvolvido sob a marca Forge por Pierre Moraes. Os exemplos desta página foram conferidos contra o código acessível no repositório; a disponibilidade pública do código depende das permissões configuradas em GitHub.",
        "en": "Main modules are fxmanifest.lua, shared/config.lua, client/main.lua, server/main.lua, web/main.js, web/formats.js and locale. Developed under Forge by Pierre Moraes. Examples on this page were checked against the accessible source; public source access depends on GitHub permissions."
      },
      "code": "pr_animateConfig/\n├── fxmanifest.lua\n├── shared/\n│   └── config.lua\n├── client/\n│   └── main.lua\n├── server/\n│   ├── main.lua\n│   └── version.lua\n├── web/\n│   ├── index.html\n│   ├── main.css\n│   ├── main.js\n│   └── formats.js\n├── locale/\n│   ├── pt-br.lua\n│   ├── en-us.lua\n│   └── es.lua\n└── saved_config.json"
    }
  ]
};
