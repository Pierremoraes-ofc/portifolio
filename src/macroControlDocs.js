export const MACRO_CONTROL_DOC = {
  "name": "PR MacroControl",
  "code": "pr_macrocontrol",
  "repo": "https://github.com/Pierremoraes-ofc/PR-MacroControl",
  "category": {
    "pt": "Projeto • Aplicação Desktop & Automação",
    "en": "Project • Desktop Software & Automation"
  },
  "lead": {
    "pt": "Controle avançado de macros, perfis e entrada de mouse/teclado no Windows. Documentação de usuário e estudo de caso técnico baseado na implementação em C#/.NET 10.",
    "en": "Advanced Windows keyboard/mouse macro and profile control. User guide and technical case study based on the C#/.NET 10 implementation."
  },
  "facts": [
    [
      "Platform",
      "Windows"
    ],
    [
      "Stack",
      "C# / .NET 10"
    ],
    [
      "UI",
      "Windows Forms"
    ],
    [
      "Input",
      "WinAPI / SendInput"
    ],
    [
      "Storage",
      "JSON (local)"
    ],
    [
      "Languages",
      "PT / EN / ES / FR"
    ],
    [
      "Architecture",
      "Services + Models"
    ]
  ],
  "sections": [
    {
      "id": "overview",
      "title": {
        "pt": "Visão geral e proposta",
        "en": "Overview and purpose"
      },
      "text": {
        "pt": "O PR MacroControl é uma aplicação desktop de automação para Windows. O objetivo é permitir que pessoas sem conhecimento de programação criem sequências reproduzíveis de teclado e mouse, vinculem essas sequências a gatilhos e organizem diferentes configurações por perfil. Este estudo de caso destaca o projeto como demonstração de engenharia de software: interação com WinAPI, processamento de eventos, persistência JSON, internacionalização e interface desktop personalizável.",
        "en": "PR MacroControl is a Windows desktop automation application. Its goal is to let people without programming experience record repeatable keyboard/mouse sequences, bind them to triggers, and organize setups into profiles. This case study also highlights software engineering: WinAPI integration, event processing, JSON persistence, localization, and customizable desktop UI."
      },
      "cards": [
        [
          "Automação orientada a eventos",
          "Captura entradas físicas, representa ações em modelos estruturados e executa sequências."
        ],
        [
          "Perfis independentes",
          "Separação entre conjuntos de macros, atalhos, regras de bloqueio e comportamento do mouse."
        ],
        [
          "Persistência local",
          "Armazenamento legível em JSON, sem exigir um serviço remoto para as preferências."
        ],
        [
          "Experiência desktop",
          "WinForms customizado, preferências visuais, integração com o Windows e quatro idiomas."
        ]
      ]
    },
    {
      "id": "visual",
      "title": {
        "pt": "Galeria e identidade visual",
        "en": "Gallery and visual identity"
      },
      "text": {
        "pt": "Conheça os quatro layouts promocionais e as áreas mais importantes do programa. Os painéis demonstrativos abaixo recriam visualmente a interface para permitir a navegação pública; não substituem as capturas originais usadas como referência. Abra cada imagem para ampliar.",
        "en": "Browse four promotional compositions and the application's most important areas. The public illustrations below visually recreate the app UI for the portfolio; they do not replace the original screenshots used as reference. Open each image to enlarge."
      },
      "gallery": [
        [
          "Macro editor — preview",
          "./macro-control/hero-editor.svg"
        ],
        [
          "Profiles & shortcuts — preview",
          "./macro-control/hero-profile.svg"
        ],
        [
          "Mouse controls — preview",
          "./macro-control/hero-mouse.svg"
        ],
        [
          "Appearance & settings — preview",
          "./macro-control/hero-settings.svg"
        ]
      ],
      "note": {
        "pt": "O aplicativo mantém artes promocionais em português, inglês, espanhol e francês no repositório de origem; como esse repositório está privado, esta página incorpora ilustrações hospedadas pelo próprio portfólio para garantir acesso aos visitantes.",
        "en": "The app repository contains promotional assets in Portuguese, English, Spanish, and French; because that repository is private, this page embeds illustrations hosted by the portfolio so visitors can view them."
      }
    },
    {
      "id": "requirements",
      "title": {
        "pt": "Requisitos e instalação",
        "en": "Requirements and installation"
      },
      "text": {
        "pt": "O projeto de código-fonte utiliza o Windows Forms do .NET 10. A compilação deve ocorrer em um ambiente Windows com SDK .NET 10 e as ferramentas de desenvolvimento adequadas. O repositório é uma solução C#; não é um programa web e não roda nativamente em Linux/macOS.",
        "en": "The source project targets .NET 10 Windows Forms. Build on Windows with the .NET 10 SDK and appropriate development tooling. This is a C# solution, not a web app, and does not run natively on Linux/macOS."
      },
      "steps": {
        "pt": [
          "Instale o SDK .NET 10 e Visual Studio com a carga de trabalho de desenvolvimento para desktop .NET, ou outro ambiente Windows compatível.",
          "Clone o repositório e abra Master.slnx na IDE.",
          "Restaure as dependências e compile Master/Master.csproj em configuração Debug ou Release.",
          "Execute PR-MacroControl.exe gerado na pasta de saída. Mantenha os arquivos de Preferences/Language e Resources que são copiados na compilação.",
          "Abra Configurações para escolher idioma, aparência e eventual inicialização com o Windows."
        ],
        "en": [
          "Install .NET 10 SDK and Visual Studio with the .NET desktop development workload, or another compatible Windows environment.",
          "Clone the repository and open Master.slnx in your IDE.",
          "Restore dependencies and build Master/Master.csproj in Debug or Release.",
          "Run the produced PR-MacroControl.exe. Keep copied Preferences/Language and Resources files alongside the output.",
          "Open Settings to select the language, appearance, and optional Windows startup."
        ]
      },
      "code": "git clone https://github.com/Pierremoraes-ofc/PR-MacroControl.git\ncd PR-MacroControl\ndotnet restore Master/Master.csproj\ndotnet build Master/Master.csproj -c Release"
    },
    {
      "id": "navigation",
      "title": {
        "pt": "Conhecendo a interface",
        "en": "Getting to know the interface"
      },
      "text": {
        "pt": "O menu lateral reúne Início, Macro, Mouse, Perfil e Configurações. O fluxo de uso recomendado é criar ou selecionar um perfil, preparar as ações no editor, associá-las a uma entrada e finalmente testar o comportamento. Evite usar macros não testadas em documentos importantes.",
        "en": "The side menu contains Home, Macro, Mouse, Profile, and Settings. A recommended workflow is to select/create a profile, prepare actions in the editor, bind them to an input, and test the result. Avoid testing unknown automation on important documents."
      },
      "table": {
        "headers": [
          "Área / Area",
          "Objetivo / Purpose",
          "Onde / Where"
        ],
        "rows": [
          [
            "Início / Home",
            "Visão inicial, navegação e apresentação / Landing view",
            "FormMenu / MasterForm"
          ],
          [
            "Macro",
            "Criar, editar, gravar, testar / Create, edit, record, test",
            "MacroManagerControl"
          ],
          [
            "Perfil / Profile",
            "Atalhos, vínculos, clonagem / Bindings, hotkeys, cloning",
            "ProfileManagerControl"
          ],
          [
            "Mouse",
            "Ajuste de multiplicador / Pointer scaling",
            "MouseDpiScaler"
          ],
          [
            "Configurações / Settings",
            "Tema, idioma, opacidade, startup / Appearance and startup",
            "Sistemas + AppSettings"
          ]
        ]
      }
    },
    {
      "id": "first-macro",
      "title": {
        "pt": "Tutorial: primeira macro",
        "en": "Tutorial: your first macro"
      },
      "text": {
        "pt": "Uma macro é uma lista ordenada de ações. A gravação captura eventos físicos, transforma cada evento em MacroAction e permite ajustar delays e repetição antes da reprodução.",
        "en": "A macro is an ordered action list. Recording captures physical events, converts them to MacroAction instances, and lets you tune delays and repetition before playback."
      },
      "steps": {
        "pt": [
          "Acesse Macro e selecione NOVO para criar uma macro no perfil ativo.",
          "Dê um nome descritivo (por exemplo, 'Abrir painel de trabalho').",
          "Defina Gravar Delays para preservar intervalos da captura, ou use Delay Padrão Fixo e informe milissegundos.",
          "Clique em GRAVAR e execute apenas a sequência desejada de teclado/mouse; encerre com PARAR.",
          "Revise a lista do editor, ordene e ajuste o tempo entre eventos conforme necessário.",
          "Defina Repetições. Teste uma única execução antes de aumentar o número de loops.",
          "Use TESTAR e confirme se o resultado é reproduzível antes de vincular um atalho global."
        ],
        "en": [
          "Open Macro and choose NEW to create a macro in the active profile.",
          "Give it a descriptive name, e.g. 'Open work dashboard'.",
          "Enable Record Delays to preserve timing, or use Fixed Default Delay and enter milliseconds.",
          "Click RECORD, perform only the target keyboard/mouse sequence, and stop with STOP.",
          "Review the action list, ordering, and timing.",
          "Configure repetitions; test a single iteration before increasing loops.",
          "Choose TEST and verify reproducibility before assigning a global shortcut."
        ]
      },
      "note": {
        "pt": "O registro de eventos ignora entradas injetadas ao monitorar os hooks, reduzindo a chance de registrar a própria reprodução. Isso não elimina a necessidade de testar cenários com outras ferramentas de automação.",
        "en": "The recording hook filters injected input events, reducing the chance of capturing the app's own playback. You should still test interactions with other automation tools."
      }
    },
    {
      "id": "action-types",
      "title": {
        "pt": "Tipos de ações e semântica",
        "en": "Action types and semantics"
      },
      "text": {
        "pt": "Cada etapa possui um tipo de ação, identificação do botão/tecla, código virtual e tempo associado. Movimentos podem guardar deltas X/Y; comandos especiais podem guardar texto adicional. A granularidade permite construir sequências com pressionar/soltar em vez de apenas cliques genéricos.",
        "en": "Each step stores the action kind, button/key label, virtual key code and timing. Movement actions can store X/Y deltas, and special commands can store a command string. Separate press/release events allow accurate sequences."
      },
      "table": {
        "headers": [
          "MacroActionKind",
          "Significado / Meaning",
          "Parâmetros / Parameters"
        ],
        "rows": [
          [
            "KeyDown",
            "Pressionar tecla / Press key",
            "VirtualCode, ButtonName"
          ],
          [
            "KeyUp",
            "Soltar tecla / Release key",
            "VirtualCode, ButtonName"
          ],
          [
            "MouseDown",
            "Pressionar botão / Press mouse button",
            "ButtonName"
          ],
          [
            "MouseUp",
            "Soltar botão / Release mouse button",
            "ButtonName"
          ],
          [
            "MouseMove",
            "Deslocamento relativo / Relative movement",
            "DeltaX, DeltaY"
          ],
          [
            "MouseScroll",
            "Rolar roda / Wheel scroll",
            "VirtualCode"
          ],
          [
            "SpecialCommand",
            "Comando pré-definido / Preset command",
            "CommandString"
          ],
          [
            "LaunchProcess",
            "Iniciar processo / Launch process",
            "CommandString"
          ]
        ]
      }
    },
    {
      "id": "timing",
      "title": {
        "pt": "Delays, loops e auto-repeat",
        "en": "Delays, loops and auto-repeat"
      },
      "text": {
        "pt": "O modelo MacroSettings define RecordDelays, InsertDefaultDelay, DefaultDelayMs, LoopsCount e RepeatRunWhenKeyDown. A configuração permite escolher entre a cadência real registrada e intervalos fixos. Repetição contínua enquanto o disparador é mantido pressionado exige atenção para não criar ciclos indesejados.",
        "en": "MacroSettings defines RecordDelays, InsertDefaultDelay, DefaultDelayMs, LoopsCount and RepeatRunWhenKeyDown. These options distinguish captured timing from fixed intervals. Holding a trigger to repeat a macro requires care to avoid unintended cycles."
      },
      "steps": {
        "pt": [
          "Para preservar um ritmo humano, habilite Gravar Delays e grave a sequência normalmente.",
          "Para passos mais uniformes, ative Delay Padrão Fixo e escolha o tempo em milissegundos.",
          "Comece com 1 repetição; aumente gradualmente e monitore o comportamento.",
          "Habilite Repetir enquanto pressionado somente quando houver um gatilho simples e seguro para interromper a execução."
        ],
        "en": [
          "To preserve natural timing, enable Record Delays and record normally.",
          "For even timing, enable Fixed Default Delay and enter milliseconds.",
          "Start with one loop and increase gradually while observing behavior.",
          "Enable Repeat while held only if you can safely release/stop the trigger."
        ]
      },
      "code": "// Configuração ilustrativa compatível com MacroSettings\nvar settings = new MacroSettings {\n    RecordDelays = true,\n    InsertDefaultDelay = false,\n    DefaultDelayMs = 10,\n    LoopsCount = 1,\n    RepeatRunWhenKeyDown = false\n};"
    },
    {
      "id": "profiles",
      "title": {
        "pt": "Criando e administrando perfis",
        "en": "Creating and managing profiles"
      },
      "text": {
        "pt": "ProfileModel agrupa nome, identificador, atalho global de troca, multiplicador do mouse, tecla mestre e uma lista de bindings. É possível criar, renomear, clonar, excluir e escolher o perfil ativo. Na clonagem, as macros associadas são duplicadas com novos IDs e as referências dos vínculos são reajustadas.",
        "en": "ProfileModel groups a name, ID, global switching shortcut, pointer multiplier, master key, and bindings. Users can create, rename, clone, remove, and activate profiles. Cloning duplicates associated macros with new IDs and rewrites binding references."
      },
      "steps": {
        "pt": [
          "Abra Perfil e use + para criar uma nova configuração.",
          "Defina um nome que represente o contexto de uso, como 'Trabalho' ou 'Edição'.",
          "Opcionalmente escolha um atalho de troca, por exemplo HOME + NUMPAD_1.",
          "Use CLONA para criar uma versão independente de um perfil existente; confirme e ajuste seus atalhos.",
          "Configure as vinculações apenas no perfil desejado e salve alterações.",
          "Alterne os perfis e teste individualmente os gatilhos para evitar conflitos."
        ],
        "en": [
          "Open Profile and use + to create a setup.",
          "Choose a context-based name such as 'Work' or 'Editing'.",
          "Optionally choose a switching shortcut, such as HOME + NUMPAD_1.",
          "Use CLONE to make an independent copy of an existing profile and adjust its shortcuts.",
          "Configure bindings only in the intended profile and save.",
          "Switch profiles and verify triggers separately to avoid conflicts."
        ]
      }
    },
    {
      "id": "bindings",
      "title": {
        "pt": "Vinculações de botões e teclas",
        "en": "Mouse and keyboard bindings"
      },
      "text": {
        "pt": "ActionBinding diferencia o disparador (MouseButton ou KeyboardKey) da ação executada (Macro, Key, KeyCombination ou PresetCommand). Você pode escolher um botão de mouse, uma tecla específica ou uma combinação de teclas e associá-la à macro desejada. O perfil define se a ação original do Windows deve ser bloqueada.",
        "en": "ActionBinding separates the triggering input (MouseButton or KeyboardKey) from the executed behavior (Macro, Key, KeyCombination or PresetCommand). Pick a mouse button, keyboard key or key combination and map it to the intended behavior. The profile can block the original Windows action."
      },
      "steps": {
        "pt": [
          "No Perfil, selecione a configuração que receberá a vinculação.",
          "Clique em + VINCULAR MACRO / e escolha a entrada a capturar.",
          "Defina a ação: executar macro, enviar tecla, combinação ou comando pré-definido.",
          "Selecione a macro no perfil quando a ação escolhida for Macro.",
          "Defina a tecla mestre de segurança (ou NONE para não exigir modificador).",
          "Decida se Bloquear Ação Original do Windows deve suprimir o comportamento nativo do botão.",
          "Salve, alterne para um aplicativo seguro de testes e valide o disparo."
        ],
        "en": [
          "Within Profile, select the target setup.",
          "Choose + BIND MACRO and capture an input.",
          "Select the action kind: macro, key, key combination, or preset.",
          "Choose the macro for a Macro binding.",
          "Set an optional master safety modifier (or NONE).",
          "Decide whether Block Original Windows Action should suppress native input.",
          "Save and test the trigger in a safe environment."
        ]
      },
      "table": {
        "headers": [
          "BindingActionKind",
          "Comportamento / Behavior"
        ],
        "rows": [
          [
            "None",
            "Sem vínculo / No action"
          ],
          [
            "Macro",
            "Executa macro pelo ID / Run macro by ID"
          ],
          [
            "Key",
            "Envia tecla / Send a key"
          ],
          [
            "KeyCombination",
            "Envia combinação / Send a shortcut"
          ],
          [
            "PresetCommand",
            "Executa comando interno / Execute a preset command"
          ]
        ]
      }
    },
    {
      "id": "safety",
      "title": {
        "pt": "Tecla mestre e bloqueio do Windows",
        "en": "Master modifier and Windows input blocking"
      },
      "text": {
        "pt": "MasterKeyModifier exige um modificador como CTRL, ALT, SHIFT ou WIN enquanto o gatilho é acionado. BlockOriginal determina se o evento capturado substitui a ação normal, por exemplo o menu do botão direito. Para reduzir conflitos, prefira combinações que não sejam atalhos essenciais do sistema operacional.",
        "en": "MasterKeyModifier requires CTRL, ALT, SHIFT, or WIN when the trigger fires. BlockOriginal controls whether the intercepted event replaces the native behavior, such as the right-click context menu. Avoid remapping essential OS shortcuts."
      },
      "bullets": {
        "pt": [
          "Tecla mestre NONE permite execução sem pressionar um modificador adicional.",
          "Com bloqueio ligado, o evento original pode deixar de chegar ao aplicativo em primeiro plano.",
          "Se uma tecla ou clique parar de funcionar como esperado, revise o perfil ativo e desative temporariamente o bloqueio.",
          "Ao depurar comportamento inesperado, feche o aplicativo pela bandeja para encerrar os hooks globais."
        ],
        "en": [
          "NONE runs without an additional modifier.",
          "When blocking is enabled, the native event may not reach the foreground app.",
          "If input stops behaving normally, inspect the active profile and temporarily disable blocking.",
          "When troubleshooting, exit from the system tray to release global hooks."
        ]
      }
    },
    {
      "id": "mouse",
      "title": {
        "pt": "Controle de movimento do mouse",
        "en": "Mouse pointer scaling"
      },
      "text": {
        "pt": "O MouseDpiScaler usa GetCursorPos, SetCursorPos e um timer WinForms para aplicar um multiplicador ao deslocamento observado do cursor. É um ajuste de sensibilidade do ponteiro em software: não reprograma o sensor físico e não equivale a alterar o DPI nativo do hardware.",
        "en": "MouseDpiScaler uses GetCursorPos, SetCursorPos, and a WinForms timer to apply a multiplier to observed pointer movement. This is software pointer scaling: it does not reprogram the mouse sensor and is not equivalent to changing hardware DPI."
      },
      "steps": {
        "pt": [
          "Abra Mouse e localize o controle DPI Control.",
          "Ajuste o controle deslizante gradualmente; prefira mudanças pequenas.",
          "Mova o cursor em diferentes direções e avalie a precisão.",
          "Se desejar retornar ao comportamento usual, restaure a configuração anterior.",
          "O efeito pode variar conforme aceleração do ponteiro, jogos com entrada bruta e restrições de cursor."
        ],
        "en": [
          "Open Mouse and locate DPI Control.",
          "Move the slider in small increments.",
          "Test movement in multiple directions.",
          "Restore the previous value to return to the familiar pointer feel.",
          "Behavior can vary with pointer acceleration, raw-input games, and cursor restrictions."
        ]
      },
      "note": {
        "pt": "A implementação calcula deslocamentos do cursor a intervalos definidos pelo Timer; a frequência real depende do agendador e da UI do Windows. Não se deve prometer precisão de hardware.",
        "en": "This implementation samples cursor movement using a Timer; actual timing depends on the Windows UI scheduler. Hardware-level precision is not claimed."
      }
    },
    {
      "id": "appearance",
      "title": {
        "pt": "Temas, bordas e opacidade",
        "en": "Themes, borders and opacity"
      },
      "text": {
        "pt": "O AppSettings reúne ThemeMode (Dark, Light ou System), cores hexadecimais de fundo e borda, BorderSize, BorderRadius, Opacity e controles independentes dos quatro cantos. A tela de personalização permite adaptar a interface sem recompilar o executável.",
        "en": "AppSettings includes ThemeMode (Dark, Light, System), hexadecimal background/border colors, BorderSize, BorderRadius, Opacity, and four independent corner controls. Users can customize the interface without recompiling."
      },
      "steps": {
        "pt": [
          "Abra Configurações > Aparência e Tema e selecione Claro, Escuro ou acompanhar o sistema, se disponível na versão em uso.",
          "Na seção Tema e Cores, escolha as cores de fundo e borda.",
          "Ajuste Largura da Borda e Curvatura da Borda pelos controles deslizantes.",
          "Marque individualmente Topo Esquerdo, Topo Direito, Base Direita e Base Esquerda.",
          "Ajuste Opacidade do Sistema e confirme a legibilidade antes de usar transparência intensa."
        ],
        "en": [
          "Open Settings > Appearance and Theme and select Light, Dark, or System where available.",
          "Choose background and border colors.",
          "Adjust Border Width and Border Curvature.",
          "Toggle top-left, top-right, bottom-right and bottom-left corners independently.",
          "Adjust window opacity and check readability before using high transparency."
        ]
      },
      "table": {
        "headers": [
          "Propriedade / Property",
          "Exemplo / Example",
          "Aplicação / Usage"
        ],
        "rows": [
          [
            "ThemeMode",
            "Dark | Light | System",
            "Tema geral"
          ],
          [
            "BackgroundColorHex",
            "#282828",
            "Cor do fundo"
          ],
          [
            "BorderColorHex",
            "#00FF00",
            "Destaque de borda"
          ],
          [
            "BorderSize / BorderRadius",
            "1 / 1",
            "Espessura / arredondamento"
          ],
          [
            "Opacity",
            "0.5",
            "Transparência"
          ],
          [
            "TopLeft / TopRight / BottomLeft / BottomRight",
            "true / false",
            "Cantos arredondados"
          ]
        ]
      }
    },
    {
      "id": "language",
      "title": {
        "pt": "Idiomas e localização",
        "en": "Languages and localization"
      },
      "text": {
        "pt": "A internacionalização usa arquivos JSON em Preferences/Language. LanguageManager.Load carrega o arquivo correspondente e converte propriedades aninhadas em chaves de pontos; LanguageManager.Get retorna a tradução ou a própria chave quando não encontrada. O projeto contém Português (Brasil), Inglês (EUA), Espanhol e Francês.",
        "en": "Localization uses JSON files under Preferences/Language. LanguageManager.Load flattens nested JSON keys into dot notation; LanguageManager.Get returns a translation or the key itself when unavailable. The project includes Brazilian Portuguese, US English, Spanish and French."
      },
      "steps": {
        "pt": [
          "Abra Configurações e escolha o idioma no seletor.",
          "Para contribuir com uma tradução, copie um arquivo JSON existente em Master/Preferences/Language.",
          "Preserve a estrutura e todas as chaves; traduza apenas os valores.",
          "Use um nome que corresponda ao identificador esperado pelo seletor de idioma.",
          "Recompile ou atualize o arquivo na pasta de saída e teste telas, botões, mensagens e termos longos."
        ],
        "en": [
          "Choose a language in Settings.",
          "To add a translation, copy a JSON file from Master/Preferences/Language.",
          "Preserve all keys and nested structure; translate values only.",
          "Name the file according to an identifier supported by the language selector.",
          "Rebuild or copy the file to the output folder and test labels and longer strings."
        ]
      },
      "table": {
        "headers": [
          "Arquivo / File",
          "Idioma / Language"
        ],
        "rows": [
          [
            "Portugues-BR.json",
            "Português (Brasil)"
          ],
          [
            "English-USA.json",
            "English (United States)"
          ],
          [
            "Espanol-ES.json",
            "Español"
          ],
          [
            "Francais-FR.json",
            "Français"
          ]
        ]
      }
    },
    {
      "id": "windows",
      "title": {
        "pt": "Inicialização e bandeja do sistema",
        "en": "Windows startup and system tray"
      },
      "text": {
        "pt": "StartupManager manipula a chave de registro por usuário HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run sob o nome PR-MacroControl. Essa operação liga ou desliga a inicialização com o Windows sem exigir alteração de configuração para todos os usuários. A interface também dispõe de comportamento de ocultar/minimizar para a área de notificação.",
        "en": "StartupManager manages the per-user registry key HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run using the PR-MacroControl name. This toggles start-on-login without changing settings for other users. The interface also includes minimize/hide behavior for the notification area."
      },
      "steps": {
        "pt": [
          "Em Configurações, marque Iniciar com o Windows para configurar a execução automática.",
          "Desmarque a opção caso queira iniciar o aplicativo manualmente.",
          "Quando a janela estiver oculta, procure o ícone na bandeja próxima ao relógio do Windows.",
          "Para fechar definitivamente, use a opção de sair, não apenas minimizar.",
          "Se mover o executável após habilitar a inicialização, revise a configuração, pois o registro aponta para o caminho anterior."
        ],
        "en": [
          "Enable Start with Windows in Settings to configure startup.",
          "Disable it if you prefer launching manually.",
          "When hidden, find the app icon in the Windows notification area.",
          "Use Exit to terminate fully instead of only minimizing.",
          "If the executable moves, update startup settings because the registry path points to its previous location."
        ]
      }
    },
    {
      "id": "storage",
      "title": {
        "pt": "Arquivos JSON e persistência",
        "en": "JSON storage and persistence"
      },
      "text": {
        "pt": "JsonConfigService centraliza carga, salvamento e notificações para settings.json, profiles.json e macros.json. Na ausência de arquivos, cria dados iniciais; ao carregar, associa macros sem ProfileId a um perfil padrão, limpa vínculos vazios e valida o perfil ativo. A serialização usa System.Text.Json com indentação e leitura de propriedades sem diferenciar maiúsculas/minúsculas.",
        "en": "JsonConfigService centralizes loading, saving, and change events for settings.json, profiles.json and macros.json. Missing files receive defaults; loading associates unassigned macros with a default profile, removes empty bindings, and validates the active profile. System.Text.Json uses indentation and case-insensitive property matching."
      },
      "table": {
        "headers": [
          "Arquivo",
          "Conteúdo / Content"
        ],
        "rows": [
          [
            "settings.json",
            "Tema, idioma, opacidade, DPI padrão, perfil ativo, startup"
          ],
          [
            "profiles.json",
            "Perfis e respectivas regras, atalhos e vinculações"
          ],
          [
            "macros.json",
            "Macros, propriedades de repetição e sequências de ações"
          ]
        ]
      },
      "bullets": {
        "pt": [
          "Salve as alterações antes de fechar o aplicativo.",
          "Faça backup dos três JSON antes de editar manualmente.",
          "IDs de perfis e macros fazem parte das relações; não os altere casualmente.",
          "Uma estrutura JSON inválida pode fazer o serviço usar configurações iniciais em memória; mantenha cópias de segurança."
        ],
        "en": [
          "Save changes before closing the app.",
          "Back up all three JSON files before hand-editing them.",
          "Macro and profile IDs link data; avoid changing IDs unnecessarily.",
          "Malformed JSON may cause in-memory defaults to load; keep backups."
        ]
      }
    },
    {
      "id": "architecture",
      "title": {
        "pt": "Arquitetura e responsabilidades",
        "en": "Architecture and responsibilities"
      },
      "text": {
        "pt": "A solução separa apresentação WinForms, modelos de domínio, serviços de entrada e persistência, utilitários WinAPI e recursos de localização. O ponto de entrada inicializa os formulários e serviços; o editor manipula modelos; os hooks recebem eventos físicos; o player sintetiza a execução por SendInput.",
        "en": "The solution separates WinForms presentation, domain models, input/persistence services, WinAPI utilities, and localization. The entry point starts forms/services; the editor edits models; hooks observe physical input; and playback uses SendInput."
      },
      "table": {
        "headers": [
          "Arquivo / Módulo",
          "Responsabilidade / Responsibility"
        ],
        "rows": [
          [
            "Controls/MacroManagerControl.cs",
            "Editor, gravação e teste de macros"
          ],
          [
            "Controls/ProfileManagerControl.cs",
            "Perfis, vínculos e atalhos"
          ],
          [
            "Services/GlobalInputHookService.cs",
            "Hooks globais e captura de entradas"
          ],
          [
            "Services/MacroRecorderEngine.cs",
            "Acúmulo de eventos gravados"
          ],
          [
            "Services/MacroPlayerEngine.cs",
            "Execução de eventos e SendInput"
          ],
          [
            "Services/JsonConfigService.cs",
            "Persistência e eventos de alteração"
          ],
          [
            "Models/*.cs",
            "Contratos e modelos de dados"
          ],
          [
            "Master/LanguageManager.cs",
            "Localização JSON"
          ],
          [
            "Master/StartupManager.cs",
            "Inicialização automática"
          ],
          [
            "Documentation/MouseDpiScaler.cs",
            "Escalonamento do cursor"
          ]
        ]
      },
      "code": "[WinForms / UI]\n      | cria e edita\n[MacroModel + ProfileModel]\n      | persiste\n[JsonConfigService] -> settings.json / profiles.json / macros.json\n      |\n[GlobalInputHookService] -> [MacroRecorderEngine]\n      |\n[MacroPlayerEngine] -> WinAPI SendInput"
    },
    {
      "id": "input-hooks",
      "title": {
        "pt": "Hooks globais e captura",
        "en": "Global input hooks and capture"
      },
      "text": {
        "pt": "GlobalInputHookService instala WH_KEYBOARD_LL e WH_MOUSE_LL usando SetWindowsHookEx. Diferencia teclas físicas de eventos injetados por flags LLKHF_INJECTED e LLMHF_INJECTED, acompanha teclas pressionadas e emite eventos para o gravador e para o sistema de atalhos. Os hooks são removidos em Stop usando UnhookWindowsHookEx.",
        "en": "GlobalInputHookService installs WH_KEYBOARD_LL and WH_MOUSE_LL using SetWindowsHookEx. It separates physical from injected events with LLKHF_INJECTED/LLMHF_INJECTED, tracks currently held keys, and raises recorder/shortcut events. Stop removes hooks using UnhookWindowsHookEx."
      },
      "bullets": {
        "pt": [
          "Os callbacks devem ser rápidos, pois hooks de baixo nível interceptam eventos do sistema.",
          "A captura de um atalho é um modo distinto da gravação de macro.",
          "A filtragem de entradas injetadas ajuda a prevenir realimentação do próprio player.",
          "A ativação de um perfil precisa sincronizar estado de atalhos e vínculos.",
          "Erros de permissões, foco ou diferença de integridade entre processos podem limitar automações."
        ],
        "en": [
          "Hook callbacks should be fast because low-level hooks intercept system events.",
          "Capturing a trigger is different from recording a macro.",
          "Filtering injected input helps prevent replay feedback loops.",
          "Profile switching must synchronize shortcut and binding state.",
          "Permissions, focus, or integrity-level differences may restrict automation."
        ]
      }
    },
    {
      "id": "playback",
      "title": {
        "pt": "Engine de execução e WinAPI",
        "en": "Playback engine and WinAPI"
      },
      "text": {
        "pt": "MacroPlayerEngine traduz ações em eventos sintéticos de teclado e mouse. Os pares Down/Up preservam o estado de pressionamento, o movimento usa deltas relativos, a rolagem usa o evento de roda e comandos especiais são encaminhados a rotinas internas. A reprodução depende de foco, privilégios e do software de destino.",
        "en": "MacroPlayerEngine converts structured actions to synthetic keyboard/mouse input. Down/Up pairs preserve button state, motion uses relative deltas, wheel actions use mouse-wheel events, and special commands call internal routines. Playback depends on focus, privileges and target application behavior."
      },
      "bullets": {
        "pt": [
          "Sempre inclua eventos de soltura para teclas e botões pressionados.",
          "Dê tempo suficiente para janelas e diálogos carregarem.",
          "Use loops curtos durante desenvolvimento e valide os intervalos.",
          "Os sistemas de anti-cheat ou aplicativos privilegiados podem rejeitar entradas sintéticas; o projeto não garante compatibilidade com todo jogo."
        ],
        "en": [
          "Always pair press and release events.",
          "Allow enough time for windows and dialogs to appear.",
          "Use short loops while developing and validate delays.",
          "Anti-cheat systems and elevated applications may reject synthetic input; universal game compatibility is not guaranteed."
        ]
      }
    },
    {
      "id": "commands",
      "title": {
        "pt": "Comandos especiais disponíveis",
        "en": "Built-in preset commands"
      },
      "text": {
        "pt": "O player contém um roteador de comandos especiais. Ele reconhece identificadores para edição de texto, sistema Windows, multimídia, eixo de mouse e velocidade do ponteiro. A lista abaixo corresponde a rótulos encontrados no código, não a uma promessa de automação externa universal.",
        "en": "The player includes a special-command dispatcher. It recognizes identifiers for text editing, Windows actions, media, pointer-axis locking, and pointer speed. These are code-supported identifiers rather than a guarantee of universal third-party automation."
      },
      "table": {
        "headers": [
          "Categoria / Category",
          "Comandos / Commands"
        ],
        "rows": [
          [
            "Clipboard",
            "COPY, PASTE, CUT, SELECT_ALL, UNDO, REDO"
          ],
          [
            "Windows",
            "LOCK_PC, SHOW_DESKTOP, EXPLORER, TASK_MGR, RUN, SCREENSHOT"
          ],
          [
            "Media",
            "VOLUME_UP, VOLUME_DOWN, VOLUME_MUTE, MEDIA_PLAY_PAUSE, MEDIA_NEXT_TRACK, MEDIA_PREV_TRACK, MEDIA_STOP"
          ],
          [
            "Mouse axes",
            "LOCK_AXIS_X, LOCK_AXIS_Y, UNLOCK_AXIS"
          ],
          [
            "Pointer speed",
            "POINTER_SPEED_DOWN, POINTER_SPEED_UP, POINTER_SPEED_DEFAULT"
          ]
        ]
      }
    },
    {
      "id": "data-contracts",
      "title": {
        "pt": "Modelo de dados e exemplo JSON",
        "en": "Data contracts and JSON example"
      },
      "text": {
        "pt": "MacroModel guarda Id, ProfileId, Name, Settings e Actions. ProfileModel armazena Bindings com TriggerInput, MasterKeyModifier, ActionKind, MacroId e BlockOriginal. A separação evita duplicar sequências dentro de cada atalho e facilita a clonagem segura.",
        "en": "MacroModel stores Id, ProfileId, Name, Settings and Actions. ProfileModel holds Bindings with TriggerInput, MasterKeyModifier, ActionKind, MacroId, and BlockOriginal. Keeping bindings separate from sequences avoids duplication and enables safer cloning."
      },
      "code": "{\n  \"Id\": \"macro-example-01\",\n  \"ProfileId\": \"profile-work\",\n  \"Name\": \"Exemplo de atalho\",\n  \"Settings\": {\n    \"RecordDelays\": true,\n    \"InsertDefaultDelay\": false,\n    \"DefaultDelayMs\": 10,\n    \"LoopsCount\": 1,\n    \"RepeatRunWhenKeyDown\": false\n  },\n  \"Actions\": [\n    { \"ActionKind\": 0, \"ButtonName\": \"A\", \"VirtualCode\": 65, \"ElapsedTimeMs\": 50, \"DeltaX\": 0, \"DeltaY\": 0, \"CommandString\": \"\" },\n    { \"ActionKind\": 1, \"ButtonName\": \"A\", \"VirtualCode\": 65, \"ElapsedTimeMs\": 50, \"DeltaX\": 0, \"DeltaY\": 0, \"CommandString\": \"\" }\n  ]\n}",
      "note": {
        "pt": "Exemplo didático, não um arquivo de configuração importável garantido. Enums podem ser serializados numericamente pelo System.Text.Json na configuração atual.",
        "en": "Illustrative example, not a guaranteed import-ready file. With current System.Text.Json options, enums may serialize as numbers."
      }
    },
    {
      "id": "project-structure",
      "title": {
        "pt": "Organização do repositório",
        "en": "Repository organization"
      },
      "text": {
        "pt": "A divisão por pastas favorece manutenção e expansão: controles WinForms, serviços, modelos, preferências e recursos visuais têm responsabilidades separadas. Os scripts de build usam a solução Master.slnx e o projeto Master/Master.csproj.",
        "en": "The folder layout supports maintainability and growth: WinForms controls, services, models, preferences and assets have separate responsibilities. Build entry points are Master.slnx and Master/Master.csproj."
      },
      "code": "PR-MacroControl/\n├── Master.slnx\n├── Master/\n│   ├── Master.csproj\n│   ├── Program.cs\n│   ├── Controls/\n│   ├── Services/\n│   ├── Models/\n│   ├── Actions/\n│   ├── Utilities/\n│   ├── Preferences/Language/\n│   ├── Resources/\n│   └── Master/\n│       ├── LanguageManager.cs\n│       └── StartupManager.cs\n└── README.md"
    },
    {
      "id": "development",
      "title": {
        "pt": "Guia para contribuidores",
        "en": "Developer workflow"
      },
      "text": {
        "pt": "Ao adicionar uma ação, mantenha coerência entre o enum MacroActionKind, serialização, editor, gravador e player. Ao adicionar uma preferência, declare a propriedade em AppSettings, persista pelo JsonConfigService e sincronize a UI. Faça alterações incrementais e teste em Windows real.",
        "en": "When introducing a new action kind, keep MacroActionKind, serialization, editor, recorder, and player aligned. New preferences belong in AppSettings and should be saved through JsonConfigService and reflected in UI. Make incremental changes and test on actual Windows."
      },
      "steps": {
        "pt": [
          "Crie uma branch de desenvolvimento e mantenha mudanças pequenas.",
          "Identifique qual modelo é dono da informação antes de alterar a interface.",
          "Implemente a regra em Services e faça a apresentação consumi-la.",
          "Adicione traduções em todos os quatro arquivos de idioma.",
          "Teste gravação, execução, persistência, alternância de perfil e atualização de UI.",
          "Valide tratamento de erros, encerramento dos hooks e possíveis conflitos de atalhos.",
          "Documente o comportamento e envie a alteração ao controle de versão."
        ],
        "en": [
          "Create a feature branch and keep changes focused.",
          "Find the model that owns the data before changing UI.",
          "Implement behavior in Services and have UI consume it.",
          "Add localization keys to all four language files.",
          "Test recording, playback, persistence, profile switching, and UI refresh.",
          "Check failure paths, hook cleanup, and shortcut conflicts.",
          "Document the change and commit it."
        ]
      }
    },
    {
      "id": "qa",
      "title": {
        "pt": "Checklist de testes e validação",
        "en": "Testing and QA checklist"
      },
      "text": {
        "pt": "Para avaliar a robustez do projeto, cubra a combinação de fluxos: entrada física, gravação, edição, execução, salvamento e recuperação. Testes automatizados de lógica são úteis, mas interações com WinAPI e foco de janelas exigem validação manual em Windows.",
        "en": "Evaluate the whole flow: physical input, recording, editing, playback, saving, and restoring. Automated logic tests are useful, but WinAPI and window-focus interactions need hands-on Windows testing."
      },
      "bullets": {
        "pt": [
          "Criar, renomear, clonar e excluir perfis.",
          "Gravar combinações com KeyDown e KeyUp e garantir soltura correta.",
          "Reproduzir cliques, roda e movimentos relativos.",
          "Verificar timings curtos/longos e repetição por pressão.",
          "Trocar idiomas e abrir telas com textos longos.",
          "Reiniciar o programa e confirmar o carregamento dos três JSON.",
          "Validar tema claro/escuro, opacidade e bordas em diferentes escalas de exibição.",
          "Testar ocultar/restaurar pela bandeja e inicialização automática.",
          "Verificar que encerrar libera hooks e não deixa botões presos."
        ],
        "en": [
          "Create, rename, clone, and delete profiles.",
          "Record key press/release sequences and ensure correct release.",
          "Play mouse clicks, wheel, and relative movement.",
          "Test short/long delays and held-trigger repetition.",
          "Switch languages and check longer labels.",
          "Restart and verify all three JSON files load.",
          "Validate light/dark theme, opacity, and borders on varying DPI scaling.",
          "Test tray restore and Windows startup.",
          "Verify exiting unregisters hooks and does not leave inputs held."
        ]
      }
    },
    {
      "id": "troubleshooting",
      "title": {
        "pt": "Solução de problemas",
        "en": "Troubleshooting"
      },
      "text": {
        "pt": "Os problemas mais comuns envolvem conflitos de atalhos, perfil incorreto, tempo insuficiente, diferenças entre entrada física e sintética ou JSON inválido. As verificações abaixo ajudam a isolar a origem antes de alterar o código.",
        "en": "Common issues involve shortcut collisions, wrong active profile, insufficient timing, physical versus synthetic input, or invalid JSON. Use the checks below before changing code."
      },
      "table": {
        "headers": [
          "Sintoma / Symptom",
          "Verificação / Check"
        ],
        "rows": [
          [
            "Macro não dispara / Won't trigger",
            "Perfil ativo, tecla mestre, binding e ação selecionada"
          ],
          [
            "Atalho normal para de funcionar / Native input blocked",
            "Desative BlockOriginal e examine conflito"
          ],
          [
            "Sequência fora de ordem / Wrong order",
            "Aumente delays e confirme pares Down/Up"
          ],
          [
            "Cursor se comporta estranhamente / Pointer oddity",
            "Restaure multiplicador e revise aceleração"
          ],
          [
            "Configuração desaparece / Missing settings",
            "Confira backup, JSON e pasta de preferências"
          ],
          [
            "Idioma incompleto / Missing localization",
            "Revise chaves JSON e nome do arquivo"
          ],
          [
            "Não inicia com Windows / Startup fails",
            "Verifique caminho do exe e entrada HKCU Run"
          ]
        ]
      }
    },
    {
      "id": "limitations",
      "title": {
        "pt": "Limitações e boas práticas",
        "en": "Limitations and best practices"
      },
      "text": {
        "pt": "A aplicação depende do Windows e de APIs nativas. Algumas aplicações capturam raw input ou bloqueiam automação. O projeto não promete suporte universal a jogos nem funcionamento em sessões remotas, janelas elevadas ou ambientes restritos. Os exemplos são voltados a produtividade, acessibilidade e automação legítima.",
        "en": "The app depends on Windows native APIs. Some applications capture raw input or block automation. Universal compatibility with games, remote sessions, elevated windows, or restricted environments is not guaranteed. Examples focus on legitimate productivity and automation."
      },
      "bullets": {
        "pt": [
          "Não automatize operações irreversíveis sem confirmação.",
          "Mantenha backup de configurações antes de atualizar versões.",
          "Nunca compartilhe arquivos com dados sensíveis acidentalmente gravados em macros.",
          "Respeite os termos de uso dos aplicativos e jogos de destino.",
          "Considere acessibilidade, feedback visual e uma forma confiável de parar a execução."
        ],
        "en": [
          "Avoid automating irreversible operations without confirmation.",
          "Back up configuration before updating.",
          "Do not share macros containing sensitive captured input.",
          "Respect target application/game terms.",
          "Prioritize accessibility, visible feedback, and reliable stop controls."
        ]
      }
    },
    {
      "id": "roadmap",
      "title": {
        "pt": "Evolução e oportunidades de melhoria",
        "en": "Evolution and opportunities"
      },
      "text": {
        "pt": "O código já demonstra uma base funcional modular. Próximos investimentos plausíveis incluem testes automatizados para modelos e persistência, exportação/importação validada, logs estruturados, verificação de integridade de macros, acessibilidade e um instalador assinado. Esta seção descreve possibilidades, não funcionalidades já entregues.",
        "en": "The existing code provides a modular foundation. Reasonable future investments include automated tests for models/persistence, validated import/export, structured logging, macro integrity checks, accessibility, and signed installer packaging. These are ideas, not shipped features."
      },
      "cards": [
        [
          "Qualidade",
          "Testes automatizados para serialização, clonagem e resoluções de conflitos."
        ],
        [
          "Observabilidade",
          "Logs de execução opcionais sem armazenar conteúdo sensível."
        ],
        [
          "Distribuição",
          "Release assinado e instalador com atualização confiável."
        ],
        [
          "UX e acessibilidade",
          "Navegação por teclado, descrições claras e fluxo de testes guiado."
        ]
      ]
    },
    {
      "id": "source",
      "title": {
        "pt": "Código-fonte e autoria",
        "en": "Source and authorship"
      },
      "text": {
        "pt": "O projeto foi desenvolvido por Pierre Moraes. Esta documentação detalha fluxos de usuário e decisões técnicas identificáveis no código disponibilizado ao proprietário. A disponibilidade de download, releases e permissões de acesso dependem da configuração atual do repositório GitHub.",
        "en": "Developed by Pierre Moraes. This documentation describes user flows and technical decisions identifiable in the repository source. Downloads, releases, and repository access depend on current GitHub visibility and permissions."
      },
      "cards": [
        [
          "Tecnologia",
          "C# / .NET 10 / Windows Forms / WinAPI / System.Text.Json"
        ],
        [
          "Código",
          "github.com/Pierremoraes-ofc/PR-MacroControl"
        ],
        [
          "Portfólio",
          "Documentação integrada ao portfólio de Pierre Moraes"
        ],
        [
          "Idiomas",
          "Português, Inglês, Espanhol e Francês no aplicativo"
        ]
      ]
    }
  ]
};
