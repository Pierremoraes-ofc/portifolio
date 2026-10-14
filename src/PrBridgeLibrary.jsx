import { useMemo, useState } from 'react';
import { PR_BRIDGE_API, PR_BRIDGE_MODULES, PR_BRIDGE_API_COUNT } from './data/prBridgeApi.generated';

const UI_EXAMPLES = [
  {
    id: 'profile',
    title: 'Perfil visual global',
    description: 'Exemplo baseado em interface/data/config.json. Branding, paleta e posições das interfaces podem ser centralizados no PR Bridge.',
    code: `{
  "branding": {
    "logoUrl": "https://example.com/logo.png"
  },
  "palette": {
    "primary": "#f2f2f3",
    "primaryHover": "#ffffff",
    "success": "#10b981",
    "warning": "#f59e0b",
    "error": "#ef4444",
    "info": "#3b82f6",
    "text": "#ffffff",
    "textMuted": "#8e8e9f",
    "surface": "#0c0c0f",
    "surfaceOpacity": 0.88,
    "border": "#2d2d35"
  },
  "layout": {
    "registerContext": "right",
    "metadata": "left",
    "alertDialog": "center",
    "inputDialog": "center",
    "registerMenu": "right",
    "notify": "top-right",
    "progressBar": "bottom-center",
    "skillCheck": "bottom-center",
    "showTextUI": "right-center"
  }
}`
  },
  {
    id: 'context',
    title: 'Context menu rico',
    description: 'registerContext aceita metadata, progresso, badge, keybind, checked, imagens, submenu, eventos e callbacks locais.',
    code: `pr_lib.registerContext({
    id = 'vehicle_profile',
    title = 'Vehicle profile',
    searchPlaceholder = 'Buscar opção...',
    searchEmpty = 'Nada encontrado',
    options = {
        {
            title = 'Estado do veículo',
            description = 'Resumo mecânico e administrativo',
            icon = 'car-front-fill',
            badge = 'ONLINE',
            keybind = 'G',
            progress = 82,
            metadata = {
                { label = 'Plate', value = 'ABC1234' },
                { label = 'Mileage', value = '42.510 km' },
                { label = 'Owner', value = 'Pierre Moraes' }
            },
            onSelect = function()
                print('open vehicle status')
            end
        },
        {
            title = 'Configurações',
            description = 'Abrir submenu',
            icon = 'gear-fill',
            menu = 'vehicle_settings'
        }
    }
})

pr_lib.registerContext({
    id = 'vehicle_settings',
    title = 'Configurações',
    menu = 'vehicle_profile',
    options = {
        {
            title = 'Motor automático',
            checked = true,
            icon = 'toggle-on'
        }
    }
})

pr_lib.showContext('vehicle_profile')`
  },
  {
    id: 'list-menu',
    title: 'List menu com scroll e checkbox',
    description: 'registerMenu preserva side-scroll, checkbox, seleção e callbacks de mudança.',
    code: `pr_lib.registerMenu({
    id = 'vehicle_setup',
    title = 'Vehicle setup',
    position = 'top-left',
    options = {
        {
            label = 'Suspensão',
            values = { 'Comfort', 'Sport', 'Track' },
            defaultIndex = 2,
            args = { field = 'suspension' }
        },
        {
            label = 'Traction control',
            checked = true,
            args = { field = 'traction' }
        }
    },
    onSideScroll = function(index, scrollIndex, args)
        print('scroll', index, scrollIndex, args.field)
    end,
    onCheck = function(index, checked, args)
        print('check', index, checked, args.field)
    end,
    onSelected = function(index, value, args)
        print('selected', index, value)
    end,
    onClose = function(key)
        print('closed', key)
    end
}, function(index, scrollIndex, args, checked)
    print('confirmed', index, scrollIndex, checked)
end)

pr_lib.showMenu('vehicle_setup')`
  },
  {
    id: 'input',
    title: 'Input dialog',
    description: 'InputDialog recebe rows tipadas. O módulo atual serializa input, number, select, checkbox e propriedades de validação/pesquisa.',
    code: `local values = pr_lib.inputDialog('Criar garagem', {
    {
        type = 'input',
        label = 'Nome',
        placeholder = 'Garagem Central',
        required = true,
        minLength = 3,
        maxLength = 40
    },
    {
        type = 'number',
        label = 'Capacidade',
        default = 10,
        min = 1,
        max = 100,
        step = 1
    },
    {
        type = 'select',
        label = 'Categoria',
        searchable = true,
        options = {
            { value = 'public', label = 'Pública' },
            { value = 'job', label = 'Emprego' },
            { value = 'private', label = 'Privada' }
        }
    },
    {
        type = 'checkbox',
        label = 'Ativa',
        checked = true
    }
}, {
    size = 'lg',
    allowCancel = true
})

if values then
    print(json.encode(values))
end`
  },
  {
    id: 'alert-notify',
    title: 'Alert dialog + Notify',
    description: 'AlertDialog retorna confirm/cancel. Notify aceita título, descrição, tipo, duração, posição e ícone.',
    code: `local result = pr_lib.alertDialog({
    header = 'Confirmar remoção',
    content = 'Esta ação não pode ser desfeita.',
    centered = true,
    cancel = true,
    labels = {
        cancel = 'Voltar',
        confirm = 'Remover'
    },
    size = 'md'
})

if result == 'confirm' then
    pr_lib.Notify({
        title = 'Registro removido',
        description = 'A operação foi concluída.',
        type = 'success',
        duration = 5000,
        position = 'top-right',
        icon = 'check-circle'
    })
end`
  },
  {
    id: 'radial',
    title: 'Radial menu',
    description: 'Itens radiais podem apontar diretamente para callbacks ou abrir um menu radial registrado.',
    code: `pr_lib.addRadialItem({
    {
        id = 'vehicle',
        label = 'Veículo',
        icon = 'car-front-fill',
        menu = 'vehicle_radial'
    }
})

pr_lib.registerRadial({
    id = 'vehicle_radial',
    items = {
        {
            id = 'lock',
            label = 'Trancar',
            icon = 'lock-fill',
            onSelect = function()
                print('lock')
            end
        },
        {
            id = 'engine',
            label = 'Motor',
            icon = 'power',
            keepOpen = true,
            onSelect = function()
                print('engine')
            end
        }
    }
})`
  },
  {
    id: 'target',
    title: 'Target — entity + zone',
    description: 'O Target nativo aceita entidades, network IDs, modelos, globais e zonas. As opções usam groups, items, bones, canInteract e múltiplas formas de dispatch.',
    code: `pr_lib.target.addLocalEntity(ped, {
    {
        name = 'mechanic:inspect',
        label = 'Inspecionar veículo',
        icon = 'fa-solid fa-wrench',
        distance = 2.0,
        groups = {
            mechanic = 0
        },
        canInteract = function(entity, distance, coords, name)
            return DoesEntityExist(entity) and distance <= 2.0
        end,
        onSelect = function(data)
            print('entity', data.entity, 'distance', data.distance)
        end
    }
})

local zoneId = pr_lib.target.addBoxZone({
    name = 'dealership:desk',
    coords = vector3(-56.0, -1096.0, 26.4),
    size = vector3(2.0, 2.0, 2.0),
    rotation = 25.0,
    debug = false,
    options = {
        {
            name = 'dealership:open',
            label = 'Abrir concessionária',
            icon = 'fa-solid fa-car',
            onSelect = function()
                TriggerEvent('dealership:client:open')
            end
        }
    }
})`
  },
  {
    id: 'interact',
    title: 'Interact — world interaction',
    description: 'Interact mantém pontos persistentes no mundo, seleção por roda/setas e execução pela tecla configurável.',
    code: `pr_lib.interact.AddInteraction({
    id = 'workshop:bench',
    coords = vector3(-340.0, -136.0, 39.0),
    distance = 8.0,
    interactDst = 1.5,
    exclusive = false,
    showUI = true,
    options = {
        {
            name = 'workshop:repair',
            label = 'Reparar',
            icon = 'fa-solid fa-screwdriver-wrench',
            canInteract = function(entity, coords, args)
                return true
            end,
            action = function(entity, coords, args)
                print('repair at', coords)
            end
        },
        {
            name = 'workshop:inspect',
            label = 'Diagnosticar',
            icon = 'bi bi-activity',
            action = function(entity, coords, args)
                print('diagnostics')
            end
        }
    }
})`
  },
  {
    id: 'target-profile',
    title: 'Perfil visual do Target',
    description: 'O painel /pr_ui_admin > Target permite posição, olho, lista, fonte, cores, marcadores, efeitos e detecção de paredes.',
    code: `{
  "target": {
    "x": 50,
    "y": 50,
    "optionsY": 48.4,
    "offsetX": 24,
    "width": 200,
    "height": 29.3,
    "eyeIcon": "fa-solid fa-hand-pointer",
    "eyeSize": 25,
    "eyeScale": 1,
    "fontSize": 14.6,
    "color": "#fd983f",
    "hoverColor": "#ffffff",
    "markerIcon": "bi bi-record-circle",
    "markerTargetIcon": "bi bi-diamond",
    "markerEffect": "spin",
    "markerDistance": 5,
    "wallDetection": true,
    "wallRayFlags": 277
  }
}`
  },
  {
    id: 'interact-profile',
    title: 'Perfil visual do Interact',
    description: 'O Interact pode usar clean, blue_circle, green_square, glitch, circle, crosshair, bullseye, geo-alt-fill, cursor-fill, diamond e obtaizen_ui.',
    code: `{
  "interact": {
    "style": "clean",
    "scale": 0.8,
    "fontSize": 14,
    "fontFamily": "inter",
    "fontBold": true,
    "keyBold": true,
    "optionWidth": 180,
    "optionHeight": 24,
    "optionGap": 2,
    "cleanKeySize": 18,
    "cleanTextColor": "#ffffff",
    "cleanHighlightColor": "#f2f2f3",
    "cleanIconColor": "#c8c8ce",
    "cleanKeyColor": "#f4f6f8",
    "cleanKeyTextColor": "#161616",
    "cleanBackgroundOpacity": 0,
    "wallDetection": true,
    "showUI": true,
    "disableOnDeath": true,
    "disableOnNuiFocus": true,
    "disableInVehicle": true,
    "disableWhenCuffed": true,
    "perspectiveEnabled": true,
    "perspectiveMaxAngle": 25,
    "perspectiveSensitivity": 1,
    "perspectiveDistance": 600,
    "perspectiveSmoothing": 120
  }
}`
  }
];

function parseSignature(signature) {
  const open = signature.indexOf('(');
  const close = signature.lastIndexOf(')');
  const name = open === -1 ? signature : signature.slice(0, open);
  const argsRaw = open === -1 || close < open ? '' : signature.slice(open + 1, close).trim();
  return { name, args: argsRaw ? argsRaw.split(',').map((arg) => arg.trim()).filter(Boolean) : [] };
}

function tagList(entry) {
  const explicit = (entry.tags || '').split(',').map((tag) => tag.trim().toLowerCase()).filter(Boolean);
  return Array.from(new Set([entry.module, entry.context, ...explicit])).filter(Boolean);
}

function isReturnFunction(signature) {
  const parsed = parseSignature(signature);
  const fn = parsed.name.split(/[.:]/).pop()?.toLowerCase() || '';
  return /^(get|fetch|find|search|read|load|resolve|list|has|can|is|await|request|query|single|scalar|insert|remember|call|create|exists|zoneexists)/.test(fn);
}

export default function PrBridgeLibrary({ locale = 'pt-BR' }) {
  const pt = locale === 'pt-BR';
  const [query, setQuery] = useState('');
  const [module, setModule] = useState('all');
  const [context, setContext] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);

  const availableTags = useMemo(() => {
    const count = new Map();
    for (const entry of PR_BRIDGE_API) {
      for (const tag of tagList(entry)) count.set(tag, (count.get(tag) || 0) + 1);
    }
    return Array.from(count.entries())
      .filter(([tag]) => !PR_BRIDGE_MODULES.includes(tag) && !['shared', 'client', 'server', 'client/server'].includes(tag))
      .sort((a, b) => b[1] - a[1])
      .slice(0, 28);
  }, []);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PR_BRIDGE_API.filter((entry) => {
      if (module !== 'all' && entry.module !== module) return false;
      if (context !== 'all' && entry.context !== context) return false;
      const tags = tagList(entry);
      if (selectedTags.length && !selectedTags.every((tag) => tags.includes(tag))) return false;
      if (!q) return true;
      const haystack = [
        entry.signature,
        entry.detail,
        entry.module,
        entry.context,
        entry.tags,
        entry.directory,
        entry.example
      ].filter(Boolean).join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }, [query, module, context, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags((current) => current.includes(tag) ? current.filter((value) => value !== tag) : [...current, tag]);
  };

  return (
    <>
      <section id="doc-bridge-interfaces" data-doc-section="bridge-interfaces" className="documentation-section">
        <header>
          <span>09</span>
          <div>
            <small>INTERFACE TOOLKIT</small>
            <h2>{pt ? 'Menus, perfis visuais, Target e Interact com exemplos completos.' : 'Menus, visual profiles, Target and Interact with complete examples.'}</h2>
          </div>
        </header>
        <p className="documentation-lead">
          {pt
            ? 'Os exemplos abaixo usam os contratos atuais da interface nativa do PR Bridge e mostram como estruturar menus, formulários, perfil visual global, Target e Interact sem depender de uma UI externa.'
            : 'Examples below use the current native PR Bridge interface contracts and show how to structure menus, forms, global visual profiles, Target and Interact without an external UI.'}
        </p>

        <div className="bridge-ui-example-grid">
          {UI_EXAMPLES.map((example) => (
            <article className="bridge-ui-example" key={example.id}>
              <div>
                <span>{example.id.replaceAll('-', ' ')}</span>
                <h3>{example.title}</h3>
                <p>{example.description}</p>
              </div>
              <pre><code>{example.code}</code></pre>
            </article>
          ))}
        </div>
      </section>

      <section id="doc-bridge-api" data-doc-section="bridge-api" className="documentation-section bridge-api-section">
        <header>
          <span>10</span>
          <div>
            <small>FUNCTION CATALOG</small>
            <h2>{pt ? 'Catálogo pesquisável de todas as funções documentadas do PR Bridge.' : 'Searchable catalog of all documented PR Bridge functions.'}</h2>
          </div>
        </header>
        <p className="documentation-lead">
          {pt
            ? `${PR_BRIDGE_API_COUNT} funções estão indexadas. Pesquise pelo nome, descrição, tag, módulo, diretório ou trecho do exemplo; combine módulo, contexto e várias tags para chegar rapidamente à função desejada.`
            : `${PR_BRIDGE_API_COUNT} functions are indexed. Search by name, description, tag, module, directory or example text; combine module, context and multiple tags to narrow the result.`}
        </p>

        <div className="bridge-api-toolbar">
          <label className="bridge-api-search">
            <span>{pt ? 'Pesquisar' : 'Search'}</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={pt ? 'Ex.: vehicle, target, callback, player, metadata...' : 'e.g. vehicle, target, callback, player, metadata...'}
            />
          </label>

          <label>
            <span>{pt ? 'Módulo' : 'Module'}</span>
            <select value={module} onChange={(event) => setModule(event.target.value)}>
              <option value="all">{pt ? 'Todos os módulos' : 'All modules'}</option>
              {PR_BRIDGE_MODULES.map((item) => <option value={item} key={item}>{item}</option>)}
            </select>
          </label>

          <label>
            <span>{pt ? 'Contexto' : 'Context'}</span>
            <select value={context} onChange={(event) => setContext(event.target.value)}>
              <option value="all">{pt ? 'Todos' : 'All'}</option>
              <option value="shared">shared</option>
              <option value="client">client</option>
              <option value="server">server</option>
              <option value="client/server">client/server</option>
            </select>
          </label>

          <div className="bridge-api-count">
            <strong>{rows.length}</strong>
            <span>{pt ? 'resultados' : 'results'}</span>
          </div>
        </div>

        <div className="bridge-api-tags">
          <button className={!selectedTags.length ? 'active' : ''} onClick={() => setSelectedTags([])}>
            {pt ? 'Todas as tags' : 'All tags'}
          </button>
          {availableTags.map(([tag, count]) => (
            <button className={selectedTags.includes(tag) ? 'active' : ''} onClick={() => toggleTag(tag)} key={tag}>
              {tag}<small>{count}</small>
            </button>
          ))}
        </div>

        {selectedTags.length > 0 && (
          <div className="bridge-api-selected">
            <span>{pt ? 'Filtros ativos:' : 'Active filters:'}</span>
            {selectedTags.map((tag) => <button onClick={() => toggleTag(tag)} key={tag}>{tag} ×</button>)}
          </div>
        )}

        {!rows.length && (
          <div className="bridge-api-empty">{pt ? 'Nenhuma função encontrada com esses filtros.' : 'No functions match these filters.'}</div>
        )}

        <div className="bridge-api-list">
          {rows.map((entry, index) => {
            const parsed = parseSignature(entry.signature);
            const tags = tagList(entry);
            return (
              <article className="bridge-api-card" key={`${entry.module}:${entry.context}:${entry.signature}:${index}`}>
                <div className="bridge-api-card-top">
                  <div>
                    <span>{entry.module}</span>
                    <code>{entry.signature}</code>
                  </div>
                  <b className={`context-${entry.context.replace('/', '-')}`}>{entry.context}</b>
                </div>

                <p>{entry.detail || (pt ? 'Função disponível no contrato público do módulo.' : 'Function available in the module public contract.')}</p>

                <div className="bridge-api-card-tags">
                  {tags.slice(0, 12).map((tag) => (
                    <button onClick={() => toggleTag(tag)} key={tag}>{tag}</button>
                  ))}
                </div>

                <div className="bridge-api-meta">
                  <div>
                    <span>{pt ? 'Parâmetros' : 'Parameters'}</span>
                    <div>{parsed.args.length ? parsed.args.map((arg) => <code key={arg}>{arg}</code>) : <em>{pt ? 'Sem parâmetros' : 'No parameters'}</em>}</div>
                  </div>
                  <div>
                    <span>{pt ? 'Retorno' : 'Return'}</span>
                    <p>{isReturnFunction(entry.signature)
                      ? (pt ? 'Retorna valor/resultado conforme o contrato e provider ativo.' : 'Returns a value/result according to the contract and active provider.')
                      : (pt ? 'Executa a operação; consulte a descrição quando houver retorno específico.' : 'Executes the operation; see description when a specific return is documented.')}</p>
                  </div>
                  {entry.directory && (
                    <div>
                      <span>{pt ? 'Fonte' : 'Source'}</span>
                      <code>{entry.directory}</code>
                    </div>
                  )}
                </div>

                <div className="bridge-api-example">
                  <span>{pt ? 'Exemplo de uso' : 'Usage example'}</span>
                  <pre><code>{entry.example}</code></pre>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
