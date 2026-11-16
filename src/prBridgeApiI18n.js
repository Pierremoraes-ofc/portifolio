// PT-BR / EN-US localization helpers for the PR Bridge API catalog.
// Signatures and API identifiers are intentionally kept unchanged.
const TERMS = {
  load: ['Valor produzido pelo módulo Lua carregado; pode ser uma tabela, função ou outro tipo, conforme o chunk.', 'Value produced by the loaded Lua chunk; it may be a table, function, or another type.'],
  loadFile: ['Retorna um chunk compilado (função) ou nil quando a leitura opcional não encontra o arquivo.', 'Returns a compiled Lua chunk (function), or nil when an optional file is missing.'],
  loadModule: ['Retorna o valor exportado pelo módulo Lua executado; o tipo depende do módulo.', 'Returns the value exported by the executed Lua module; the type depends on the module.'],
  loadJson: ['Retorna dados decodificados do JSON (normalmente uma tabela Lua), ou nil se um arquivo opcional não existir.', 'Returns decoded JSON data (usually a Lua table), or nil when an optional file does not exist.'],
  readJson: ['Retorna dados decodificados do JSON (normalmente uma tabela Lua), ou nil se um arquivo opcional não existir.', 'Returns decoded JSON data (usually a Lua table), or nil when an optional file does not exist.'],
  jsonExists: ['Retorna um booleano: true se o arquivo existir, false caso contrário.', 'Returns a boolean: true if the file exists, otherwise false.'],
  saveJson: ['Retorna true e uma tabela com detalhes da gravação; em falha, false e o motivo.', 'Returns true and a table of save details, or false and the failure reason.'],
  writeJson: ['Retorna true e uma tabela com detalhes da gravação; em falha, false e o motivo.', 'Returns true and a table of save details, or false and the failure reason.'],
  updateJson: ['Retorna o status da gravação, os dados atualizados e detalhes (ou o motivo da falha).', 'Returns the save status, updated data, and details (or the failure reason).'],
  mergeJson: ['Retorna o status da gravação, os dados atualizados e detalhes (ou o motivo da falha).', 'Returns the save status, updated data, and details (or the failure reason).'],
  GetPlayer: ['Retorna a representação do jogador pelo framework ativo; pode ser nil quando indisponível.', 'Returns a player representation from the active framework; it can be nil when unavailable.'],
  GetPlayerData: ['Retorna a estrutura de dados do personagem, sujeita ao framework e ao contexto.', 'Returns the character data structure according to the active framework and execution context.'],
  GetResourceState: ['Retorna uma cópia defensiva da tabela publicada para resource + domain, ou nil.', 'Returns a defensive copy of the table published for resource + domain, or nil.'],
  OnResourceState: ['Retorna a assinatura/handle para interromper a escuta das alterações.', 'Returns an unsubscribe handle/function for the change listener.'],
};
const EXACT_EN = {
  'pr_lib.load(path, env, optional)': 'Loads and executes a Lua chunk from a virtual or physical resource file. The optional env table provides a custom execution environment. With optional=true, a missing file returns nil rather than raising an error. The returned value is whatever the chunk itself returns, not necessarily a table.',
  'pr_lib.loadFile(resource, fileName, env, optional)': 'Loads and compiles a Lua file from the specified FiveM resource. It can receive a custom environment and optionally suppress missing-file errors. Returns the compiled chunk (a function), rather than executing it.',
  'pr_lib.loadModule(path, env, optional)': 'Loads and executes a Lua module using the PR Bridge module loader. Returns the value exported by the module, which can be a table, function, or another Lua value.',
  'pr_lib.loadJson(path, optional)': 'Reads and decodes the specified JSON file, returning its decoded Lua value. If optional=true and the file is missing, returns nil.',
  'pr_lib.readJson(path, optional)': 'Reads and decodes JSON from a resource file; this is an alias of loadJson. Missing optional files return nil.',
  'pr_lib.saveJson(path, value, options)': 'Encodes the provided Lua value as JSON and writes it to the resource file. Returns true and save details on success, or false and a failure reason. The base method does not guarantee backup or pretty indentation.',
  'pr_lib.jsonExists(path)': 'Checks whether the specified JSON file exists in a resource. Returns true or false.',
  'pr_lib.framework.GetPlayer()': 'Returns the local player representation exposed by the active framework on the client. Availability and fields depend on the selected adapter.',
  'pr_lib.framework.GetPlayer(source)': 'Looks up a player by server source using the active framework adapter. Returns the player representation, or nil when unavailable.',
  'pr_lib.cache.GetResourceState(resource, key)': 'Reads a defensive copy of an explicitly published cache record. It does not call producer exports, fetch an initial snapshot, or automatically replicate data.',
  'pr_lib.cache.OnResourceState(resource, key, callback)': 'Subscribes to changes in an explicitly published resource cache domain. Returns a cancellation handle; it does not provide an initial snapshot.',
  'pr_lib.environment.getMode()': 'Returns the configured runtime mode: production, development, or test. The default is production.',
  'pr_lib.frameworkRouting.select(supported)': 'Selects a framework route from the frameworks accepted by the consumer. Prioritizes the real native core over compatibility aliases; returns the selected name or nil.',
  'pr_lib.appearance.getProvider()': 'Reports whether the forge-appearance provider is available. Returns its resource name, or nil when unavailable or still starting.',
};
// High-frequency historical descriptions, translated verbatim when repeated.
const REPEATED = [
  ['Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.', 'Advanced utilities for searching vehicles spawned in the server world.'],
  ['Resgata e lista todos os objetos físicos gerados dentro do raio informado.', 'Lists all physical objects spawned within the specified radius.'],
  ['Utilitários avançados de pesquisa de slots por critério de itens correspondentes ou vazios.', 'Advanced utilities for finding inventory slots based on matching items or empty slots.'],
  ['Consultas remotas de localização de entidades cadastradas nos pools do motor do jogo (ex: "CPed", "CVehicle", "CObject").', 'Remote location queries for entities in the game engine pools (such as CPed, CVehicle, and CObject).'],
  ['Retornam metadados estáticos do item a partir da tabela de configuração de itens registrada no inventário.', 'Returns static item metadata from the registered inventory item definitions.'],
  ['Aliases compatíveis de leitura e gravação legadas para scripts antigos que dependiam de mysql-async ou ghmattimysql.', 'Compatibility aliases for legacy database reads and writes used by older mysql-async or ghmattimysql scripts.'],
  ['Renderiza o navegador web em polígonos tridimensionais posicionados no espaço.', 'Renders browser content onto 3D polygons positioned in the world.'],
  ['Lógicas de gerenciamento remoto de itens persistidos dentro de baús registrados.', 'Remote operations for managing items stored in registered stashes.'],
  ['Obtém o caminho da imagem de exibição do item para uso em interfaces NUI.', 'Returns the item image path for display in NUI interfaces.'],
  ['Executa instruções DDL ou DML (como INSERT, UPDATE, DELETE) que alteram dados, retornando a quantidade de linhas afetadas ou informações da transação.', 'Executes data-changing DDL/DML statements (such as INSERT, UPDATE, or DELETE), returning the affected row count or transaction details.'],
  ['Associa a DUI a um render target de textura nativo do GTA (ex: telas internas originais de cinemas ou monitores).', 'Attaches a DUI surface to a native GTA render target, such as an in-game cinema or monitor texture.'],
  ['Desenha texturas DUI em elementos gráficos 2D.', 'Draws DUI textures onto 2D screen elements.'],
  ['APIs utilitárias para acionar ações cinemáticas combinadas.', 'Utility APIs for coordinated cinematic actions.'],
  ['APIs otimizadas que carregam o modelo correspondente e criam objetos, peds ou veículos locais no cliente.', 'Optimized APIs that load the requested model and create local objects, peds, or vehicles on the client.'],
  ['Obtém o saldo de dinheiro em uma conta específica (ex: "cash", "bank", "crypto").', 'Retrieves the monetary balance of a specified account, such as cash, bank, or crypto.'],
  ['Retorna uma lista contendo todos os IDs de jogadores conectados no servidor.', 'Returns a list of source IDs for all connected players.'],
  ['Retorna a tabela abstrata que representa o jogador ativo do framework para a ID (source) indicada.', 'Returns the active framework player object for the specified server source.'],
  ['Verificações de estoque de itens.', 'Checks the availability and quantities of inventory items.'],
  ['Imprime logs de erro formatados em vermelho no console.', 'Prints error-level log messages in the console.'],
  ['Exibe logs de alerta em amarelo no console do servidor/cliente.', 'Prints warning-level messages in the client/server console.'],
];
const REPEATED_MAP = new Map(REPEATED);
const PARAMS = {
  path: ['Caminho virtual ou físico do arquivo/módulo, como @meu_recurso/pasta/modulo.lua.', 'Virtual or physical file/module path, such as @my_resource/folder/module.lua.'],
  env: ['Tabela Lua opcional que define o ambiente de execução (_ENV) do chunk.', 'Optional Lua table defining the chunk execution environment (_ENV).'],
  optional: ['Booleano opcional. true permite retornar nil quando o arquivo não existe; false mantém o erro.', 'Optional boolean. true allows nil for a missing file; false preserves the error.'],
  source: ['ID numérico do jogador (source) no servidor.', 'Numeric server-side player ID (source).'],
  src: ['ID numérico do jogador no servidor.', 'Numeric server-side player ID.'],
  playerSource: ['ID numérico do jogador no servidor.', 'Numeric server-side player ID.'],
  resource: ['Nome do resource FiveM que fornece o arquivo ou serviço.', 'Name of the FiveM resource that provides the file or service.'],
  fileName: ['Nome e caminho relativo do arquivo no resource.', 'File name and relative path inside the resource.'],
  key: ['Chave de identificação de dados, cache ou configuração.', 'Data, cache, or configuration identifier key.'],
  domain: ['Identificador do domínio de dados dentro de um resource.', 'Domain identifier for resource-owned data.'],
  callback: ['Função de callback chamada quando a operação responde ou altera estado.', 'Callback function called when the operation completes or state changes.'],
  cb: ['Callback executado com os dados de resposta.', 'Callback invoked with the response data.'],
  timeout: ['Tempo máximo de espera em milissegundos, quando aplicável.', 'Maximum waiting time in milliseconds, when applicable.'],
  value: ['Valor Lua que será usado, transformado ou armazenado.', 'Lua value to use, transform, or store.'],
  options: ['Tabela de configuração opcional; consulte as opções aceitas pelo módulo.', 'Optional configuration table; see the module-specific supported keys.'],
  config: ['Tabela de configuração da operação.', 'Configuration table for this operation.'],
  name: ['Nome do item, registro, evento ou recurso, conforme a operação.', 'Name of an item, record, event, or resource, depending on the operation.'],
  metadata: ['Tabela de metadados do item/entidade ou filtro de metadados.', 'Item/entity metadata table or metadata filter.'],
  data: ['Tabela ou valor de entrada aceito pelo contrato da API.', 'Input table or value accepted by the API contract.'],
  id: ['Identificador do objeto, registro, menu ou entidade.', 'Identifier of the object, record, menu, or entity.'],
  account: ['Nome da conta de dinheiro conforme mapeamento do provider.', 'Account name as mapped by the active money provider.'],
  amount: ['Quantidade numérica usada na operação.', 'Numeric amount used in the operation.'],
  count: ['Quantidade de itens ou elementos.', 'Number of items or elements.'],
  slot: ['Índice numérico do slot do inventário, se aplicável.', 'Numeric inventory slot index, when applicable.'],
  itemName: ['Nome registrado do item.', 'Registered item name.'],
  model: ['Nome ou hash do modelo GTA, conforme o contrato.', 'GTA model name or hash, according to the contract.'],
  coords: ['Coordenadas do mundo, normalmente vector3.', 'World coordinates, usually a vector3.'],
  distance: ['Distância numérica usada como alcance/limite.', 'Numeric interaction/search distance.'],
  reason: ['Motivo textual opcional usado para auditoria ou logs.', 'Optional textual reason used for auditing or logs.'],
  fallback: ['Valor retornado caso não exista dado disponível.', 'Value returned if no stored data is available.'],
  ttl: ['Prazo de validade do cache, normalmente em milissegundos.', 'Cache lifetime, generally in milliseconds.'],
  sourceId: ['ID do jogador ou entidade de origem.', 'Source player or entity identifier.'],
  target: ['Alvo da operação; o tipo depende do método e contexto.', 'Operation target; type depends on the method and execution context.'],
  enabled: ['Booleano que habilita ou desabilita a funcionalidade.', 'Boolean that enables or disables the feature.'],
  state: ['Estado a ser consultado ou aplicado.', 'State to query or apply.'],
  onExit: ['Callback executado ao encerrar o menu ou interface.', 'Callback invoked when the menu or interface closes.'],
  prefix: ['Prefixo de namespace, tradução ou chave.', 'Namespace, translation, or key prefix.'],
  table: ['Tabela Lua fornecida ao método.', 'Lua table provided to the method.'],
  params: ['Parâmetros posicionais ou nomeados da operação.', 'Positional or named parameters for the operation.'],
  args: ['Argumentos adicionais usados na chamada.', 'Additional arguments passed to the operation.'],
  index: ['Índice numérico do elemento.', 'Numeric element index.'],
  identifier: ['Identificador persistente de jogador ou objeto.', 'Persistent player or object identifier.'],
  plate: ['Placa textual do veículo.', 'Vehicle license plate text.'],
  jobName: ['Nome identificador do emprego.', 'Job identifier/name.'],
  grade: ['Grau ou nível do emprego.', 'Job grade or rank.'],
  event: ['Nome do evento FiveM.', 'FiveM event name.'],
  eventName: ['Nome do evento FiveM.', 'FiveM event name.'],
  title: ['Título exibido na interface.', 'Title displayed in the interface.'],
  label: ['Texto de identificação apresentado ao usuário.', 'Label displayed to the user.'],
  text: ['Texto ou mensagem a exibir.', 'Text or message to display.'],
  message: ['Mensagem textual da operação.', 'Text message for the operation.'],
  duration: ['Duração da execução, geralmente em milissegundos.', 'Execution duration, generally in milliseconds.'],
  prop: ['Identificador ou configuração do objeto anexado.', 'Attached prop identifier or configuration.'],
  bone: ['Índice numérico do osso de entidade/ped.', 'Numeric entity/ped bone index.'],
  vehicle: ['Handle da entidade de veículo do GTA.', 'GTA vehicle entity handle.'],
  entity: ['Handle da entidade do jogo.', 'Game entity handle.'],
  ped: ['Handle de ped do GTA.', 'GTA ped entity handle.'],
  query: ['Instrução SQL ou expressão de consulta.', 'SQL statement or query expression.'],
  sql: ['Instrução SQL a executar.', 'SQL statement to execute.'],
  parameters: ['Parâmetros vinculados à consulta SQL ou callback.', 'Parameters bound to the SQL statement or callback.'],
  force: ['Booleano que solicita a execução forçada.', 'Boolean requesting forced execution.'],
  limit: ['Quantidade máxima de resultados.', 'Maximum number of results.'],
  callbackName: ['Identificador do callback registrado.', 'Identifier of the registered callback.'],
  locale: ['Código de idioma/localidade, como pt-br ou en-us.', 'Locale code, such as pt-br or en-us.'],
  newLocale: ['Novo código de localidade.', 'New locale code.'],
  tags: ['Tags usadas na classificação ou pesquisa.', 'Tags used for classification or searching.'],
  token: ['Token de identificação ou controle.', 'Identification or control token.'],
};
const RETURN_TEXT = {
  table: ['Tabela Lua retornada', 'Return table'],
  list: ['Lista retornada', 'Return list'],
  boolean: ['Booleano retornado', 'Return boolean'],
  number: ['Número retornado', 'Return number'],
  string: ['Texto retornado', 'Return string'],
  identifier: ['Identificador retornado', 'Return identifier'],
  entity: ['Entidade retornada', 'Return entity'],
  player: ['Jogador retornado', 'Return player'],
  vector: ['Coordenadas retornadas', 'Return coordinates'],
  function: ['Função retornada', 'Return function'],
  callback: ['Assinatura retornada', 'Return subscription'],
  status: ['Estado retornado', 'Return status'],
  multiple: ['Valores retornados', 'Return values'],
  module: ['Valor do módulo retornado', 'Return module value'],
  value: ['Valor retornado', 'Returned value'],
  none: ['Retorno não documentado', 'No documented return'],
};
const CURATED_EN = {
  "core.checkDependency": "Checks whether a required FiveM resource is running and meets the specified minimum version constraint. The optional printMessage parameter controls diagnostic output.",
  "core.deleteJson": "Deletes the JSON file stored at the provided resource path. Use with care because it removes the persisted file.",
  "core.versionCheck": "Queries the public GitHub release tags to compare the resource manifest version against the latest published release. This is a background version check.",
  "core.addExports": "Registers one or more exports in the consumer resource, accepting either a function or a map of callbacks.",
  "core.logger": "Emits standardized log messages tagged with source, event, message, and an optional tag for the consumer resource.",
  "core.waitFor": "Waits for a callback or condition to succeed until the configured timeout is reached.",
  "locale.clear": "Removes all translation entries currently loaded into the locale object.",
  "locale.delete": "Deletes a specific translated phrase, optionally inside a namespace prefix.",
  "locale.extend": "Adds translated phrases to the active dictionary, optionally under a namespace prefix.",
  "locale.has": "Returns a boolean indicating whether the requested translation key exists in the active locale.",
  "locale.locale": "Changes the locale code used by the translation object, such as pt, en, or es.",
  "locale.replace": "Replaces all current translation phrases with a new dictionary.",
  "locale.t": "Returns the translation for a key, applying interpolated substitutions such as %{name} when provided.",
  "locale.getLocales": "Returns the available locale information for the consumer resource.",
  "cache.clear": "Removes a cached key and notifies subscribers about the state change.",
  "cache.clearPrefix": "Invalidates all cached keys whose names begin with the specified prefix.",
  "cache.get": "Reads a stored cache value; returns the fallback when the key is absent.",
  "cache.GetMetadata": "Retrieves a particular player's metadata from a short-lived cache.",
  "cache.GetPlayer": "Retrieves the player object from memory cache to reduce repeated framework export calls.",
  "cache.InvalidatePlayer": "Invalidates the cached player data for the supplied server source.",
  "cache.onChange": "Subscribes to changes for a specific cache key. The callback receives new and previous values.",
  "cache.remember": "Returns an existing cached value or invokes the supplied callback and caches its result for the requested TTL.",
  "cache.call": "Returns an existing cached value or invokes the callback when absent, storing the result for the specified TTL.",
  "cache.set": "Stores a value in memory under a cache key.",
  "cache.setShared": "Publishes a value in the centrally managed shared cache only when the requested key is authorized.",
  "cache.GetResourceState": "Returns a defensive copy of previously published resource/domain state. This read does not fetch external exports or create automatic replication.",
  "cache.OnResourceState": "Subscribes to domain changes for a resource; returns a subscription cancellation handle. The initial snapshot must be read separately.",
  "cache.SetResourceState": "Publishes a resource-owned domain table into the explicit cache and stores a defensive copy. No automatic network replication is implied.",
  "cache.getEntities": "Returns cached entities matching the selected kind, without implying a live world scan.",
  "cache.getEntity": "Retrieves cached entity information by entity handle or network ID.",
  "cache.getMetrics": "Returns diagnostic metrics about the cache.",
  "cache.scanWorld": "Runs a world scan according to the currently enabled cache configuration.",
  "cache.setWorldEnabled": "Enables or disables world-cache collection when the owner supports that operation.",
  "framework.AddAccountBalance": "Deposits an amount into a player's specified money account, optionally recording a log reason.",
  "framework.AddPlayerAccountBalance": "Deposits money into a player's mapped account, optionally logging a reason.",
  "framework.addMoney": "Adds funds to the active player's mapped money account; requires a valid account and amount.",
  "framework.addPlayerMoney": "Deposits an amount into the specified player's account via the selected framework.",
  "framework.AddItem": "Adds an inventory item to the specified player, optionally including metadata and a preferred slot.",
  "framework.AddJobAccountBalance": "Adds funds to a society/job account through the selected banking integration.",
  "framework.addSocietyBalance": "Adds funds to a registered business/society account.",
  "framework.AddPlayerToGang": "Associates a citizen ID with a gang, grade, or primary gang according to the active framework.",
  "framework.AddPlayerToJob": "Associates a citizen ID with a job and grade according to the active framework.",
  "framework.AddWeapon": "Handles weapon data under frameworks that use legacy physical-weapon loadouts.",
  "framework.CreateWeaponData": "Converts or creates data for a weapon in a legacy framework loadout contract.",
  "framework.CanCarryItem": "Checks whether a player's inventory has enough weight and slot capacity for the requested item quantity.",
  "framework.ClearPlayerInventory": "Removes the items currently stored in a player's inventory.",
  "framework.DeleteOwnedVehicle": "Deletes persisted ownership data for the vehicle identified by its plate.",
  "framework.GetAccountBalance": "Returns the balance of the mapped money account, such as cash, bank, or crypto. On the server, supply the player's source.",
  "framework.GetAllPlayers": "Returns a list of server source IDs for all currently connected players.",
  "framework.getCharacterName": "Returns the local player's roleplay character name.",
  "framework.GetClosestPlayer": "Returns the closest player/ped information from the client.",
  "framework.GetClosestVehicle": "Returns the handle of the nearest vehicle entity.",
  "framework.GetCoords": "Returns a vector3 or vector4 containing the player's world coordinates and, when requested, heading.",
  "framework.GetFrameworkGangs": "Returns the registered gang/faction definitions when the active framework supports gangs.",
  "framework.GetFrameworkJobs": "Returns the registered job definitions exposed by the active framework.",
  "framework.GetIdentifier": "Returns the player's persistent framework identifier, such as CitizenID or a license/character identifier.",
  "framework.GetPlayerIdentifier": "Returns the active player's persistent character identifier using the selected framework convention.",
  "framework.GetItemByName": "Returns detailed metadata for a named inventory item.",
  "framework.getItemByName": "Looks up the definition of a named inventory item.",
  "framework.GetItemBySlot": "Returns the item occupying the specified inventory slot.",
  "framework.GetItemCount": "Returns the quantity of matching items in the inventory, optionally filtering by metadata.",
  "framework.GetItemData": "Returns the matching item's detailed data from the player's inventory.",
  "framework.GetItemLabel": "Returns the human-readable label of a registered item.",
  "framework.GetItemlabel": "Returns the human-readable label of a registered item.",
  "framework.GetJobAccountBalance": "Returns the current balance of a society/business account.",
  "framework.GetJobCount": "Returns the number of on-duty, connected employees for a given job.",
  "framework.GetJobInfo": "Retrieves synchronized local character job information from the active framework.",
  "framework.GetMoney": "Returns the local player's balance for a specified account.",
  "framework.GetOwnedVehicleData": "Reads persistent vehicle ownership data using a vehicle plate.",
  "framework.GetOwnedVehicleOwner": "Returns the persistent character identifier of the vehicle's owner.",
  "framework.GetPlayerData": "Returns normalized player/character data such as name, metadata, and financial information.",
  "framework.GetPlayerDob": "Returns the player's recorded date of birth.",
  "framework.getPlayerDOB": "Returns the player's recorded date of birth.",
  "framework.getPlayerFromId": "Looks up the active player object using a server source ID.",
  "framework.GetPlayerFromId": "Looks up the active player object using a server source ID.",
  "framework.GetPlayerFromIdentifier": "Looks up a connected player by their license, CitizenID, or equivalent framework identifier.",
  "framework.GetPlayerGender": "Returns the recorded character gender value (such as m/f or the provider's equivalent).",
  "framework.GetPlayerGroup": "Returns the player's administrative permission group, such as user or admin.",
  "framework.getPlayerGroup": "Returns the player's administrative permission group.",
  "framework.getPlayerHeight": "Returns the recorded character height, when the framework provides this field.",
  "framework.GetPlayerInventory": "Returns the normalized raw inventory data currently loaded for the player.",
  "framework.GetPlayerJob": "Returns the player's current job name, grade, and permissions according to the provider.",
  "framework.IsPlayerDead": "Returns whether the local character is dead or incapacitated.",
  "framework.IsPlayerLoaded": "Returns whether the local character has finished loading and spawning.",
  "database.GetResourceName": "Returns the resource name of the active SQL provider, such as oxmysql.",
  "database.query": "Runs a parameterized SQL query and returns all matching rows as a Lua array of record tables.",
  "database.Select": "Runs a parameterized SQL SELECT statement and returns all matching records.",
  "database.single": "Runs a parameterized SQL query and returns only the first record as a Lua table, or nil.",
  "database.scalar": "Runs a SQL query and returns the first column from its first row (such as COUNT(*)).",
  "database.Scalar": "Returns the first column of the first SQL result row.",
  "database.insert": "Inserts a record and returns its auto-incremented numeric insert ID.",
  "database.Insert": "Inserts a record and returns its auto-incremented numeric insert ID.",
  "database.execute": "Runs a write or DDL/DML statement (INSERT, UPDATE, DELETE) and returns affected-row or transaction information.",
  "database.Execute": "Runs a data-changing SQL statement and returns affected-row/transaction information.",
  "database.update": "Runs a SQL data update and returns the number of affected rows.",
  "database.Update": "Runs a SQL data update and returns the number of affected rows.",
  "database.transaction": "Executes multiple statements as one SQL transaction. On failure, the transaction is rolled back.",
  "database.Transaction": "Runs a batch of SQL statements atomically with rollback upon failure.",
  "database.prepare": "Executes a prepared SQL statement using one parameter set or multiple sets as supported by the adapter.",
  "database.Prepare": "Executes prepared queries through the selected SQL provider.",
  "database.isReady": "Returns whether the MySQL connection pool is available for queries.",
  "database.ready": "Invokes the callback when the selected SQL adapter is ready; without a callback, reports readiness.",
  "database.rawExecute": "Runs raw write statements and preserves provider-compatible affectedRows response fields.",
  "database.RawExecute": "Runs raw write statements or batches and returns a provider-compatible affectedRows response.",
  "database.fetch": "Legacy compatibility alias for SQL result retrieval (mysql-async/ghmattimysql).",
  "database.fetchAll": "Legacy compatibility alias for fetching multiple SQL result rows.",
  "database.read": "Legacy compatibility alias for SQL read operations.",
  "database.write": "Legacy compatibility alias for SQL write operations.",
  "database.backup": "Exports selected schema/data into a SQL backup file using server-side database operations.",
  "database.createBackup": "Exports selected database tables and data to a server-side .sql backup file."
};
function nativeEnglish(entry) {
  const name = entry.signature.split('(')[0].split(/[.:]/).pop() || '';
  const pretty = name.replace(/([a-z\d])([A-Z])/g, '$1 $2').replace(/[_-]+/g, ' ').trim().toLowerCase();
  const module = entry.module?.replaceAll('.', ' / ') || 'bridge';
  const description = entry.detail || '';
  if (EXACT_EN[entry.signature]) return EXACT_EN[entry.signature];
  if (CURATED_EN[(entry.module || '') + '.' + name]) return CURATED_EN[(entry.module || '') + '.' + name];
  if (REPEATED_MAP.has(description)) return REPEATED_MAP.get(description);
  if (/^(?:OX-compatible|Returns |Registers |Creates |Executes |Provides |Normalizes |Allows |Gets |Sets |Reads |Removes |Adds |Maps |Forwards |Loads |Exposes |Queries |Checks |Obtains |Calls |Delegates |Locates |Converts |Publishes |Reports |Confirms )/i.test(description)) return description;
  if (entry.module?.startsWith('collections.')) {
    const concepts = { get: 'Reads an item', set: 'Stores or updates an item', add: 'Adds an item', remove: 'Removes an item', push: 'Appends one or more entries', pop: 'Removes and returns the last entry', clear: 'Clears all entries', has: 'Checks whether an item exists', size: 'Returns the number of entries', filter: 'Builds a filtered collection', map: 'Transforms the collection', find: 'Locates a matching entry', from: 'Creates a collection from an iterable', includes: 'Checks for a matching element', reverse: 'Reverses the collection order', toArray: 'Converts the collection into an array', isEmpty: 'Reports whether the collection has any elements' };
    return (concepts[name] || ('Performs the ' + pretty + ' operation')) + ' using the ' + module + ' class from the lazy-loaded canonical PR library. Instance methods use colon syntax and operate on objects created with :new().';
  }
  const operations = [
    [/^(get|fetch|find|read|load|resolve|lookup|search|query|list|retrieve|snapshot|select|await|request)/i, 'Retrieves'],
    [/^(is|has|can|exists|check|validate|verify)/i, 'Checks'],
    [/^(register|subscribe|on|addEvent|bind|listen)/i, 'Registers'],
    [/^(set|update|patch|write|save|assign|put|store|publish)/i, 'Updates'],
    [/^(add|create|spawn|new|insert|attach|push)/i, 'Creates or adds'],
    [/^(remove|delete|clear|destroy|detach|unregister|drop)/i, 'Removes'],
    [/^(show|open|display|draw|render)/i, 'Displays'],
    [/^(hide|close|dismiss)/i, 'Hides or closes'],
    [/^(start|begin|run|execute|trigger|send|emit|fire|play|call)/i, 'Executes'],
    [/^(stop|cancel|pause|end|abort)/i, 'Stops or cancels'],
    [/^(get|convert|normalize|format|encode|decode|serialize|parse|map|clone|copy)/i, 'Transforms'],
  ];
  const action = operations.find(([re]) => re.test(name))?.[1] || 'Performs';
  let extra = '';
  if (/sql|mysql|consulta SQL|banco de dados|database/i.test(description)) extra += ' SQL queries must use parameters and run in the supported server context.';
  if (/cache|TTL|memória|statebag|state bag/i.test(description)) extra += ' Check cache ownership, lifetime, and invalidation behavior.';
  if (/framework|adaptador|provider|inventário|inventory/i.test(description)) extra += ' Availability and returned fields depend on the active provider or adapter.';
  if (/callback|assinatura|escuta|observa|handler/i.test(description)) extra += ' Follow the callback registration and lifecycle contract in the source module.';
  if (/nil|false|erro|falha|indisponível/i.test(description)) extra += ' Handle nil/false and unavailable-provider cases explicitly.';
  if (/client|cliente/i.test(description) && entry.context === 'client') extra += ' Client-side API.';
  if (/server|servidor/i.test(description) && entry.context === 'server') extra += ' Server-side API.';
  if (/JSON/i.test(description)) extra += ' Works with JSON serialization or persisted JSON data.';
  if (/Lua/i.test(description) && /módulo|chunk|module/i.test(description)) extra += ' Works with Lua modules or chunks.';
  return action + ' the "' + pretty + '" operation through the ' + module + ' API.' + extra + ' Refer to the linked source for exact argument constraints and adapter-specific behavior.';
}
export function localizedDetail(entry, locale) {
  if (locale === 'pt-BR') return entry.detail;
  return entry.detailEn || nativeEnglish(entry);
}
export function parameterDescription(raw, locale) {
  const p = raw.trim().replace(/\?$/, '');
  const pt = locale === 'pt-BR';
  const entry = PARAMS[p];
  let result = entry?.[pt ? 0 : 1];
  if (!result) {
    if (/^on[A-Z]|callback|handler|^cb$|Fn$|^fn$/.test(p)) result = pt ? 'Função de callback executada pelo método.' : 'Callback function invoked by the method.';
    else if (/id$/i.test(p)) result = pt ? 'Identificador do registro ou entidade.' : 'Record or entity identifier.';
    else if (/names?$/i.test(p)) result = pt ? 'Nome ou identificador aceito pelo módulo.' : 'Name or identifier accepted by the module.';
    else if (/amount|count|index|size|radius|distance|length|speed|minutes|duration|timeout/i.test(p)) result = pt ? 'Parâmetro numérico; consulte a unidade exigida pelo módulo.' : 'Numeric argument; check the unit used by the module.';
    else if (/flags|enabled|strict|optional|^is[A-Z]|^has[A-Z]/.test(p)) result = pt ? 'Indicador de ativação ou filtro, geralmente booleano.' : 'Enable/filter flag, usually a boolean.';
    else if (/options|config|metadata|data|params|fields|filter/i.test(p)) result = pt ? 'Tabela de dados/opções conforme o contrato público.' : 'Data/options table as defined by the public contract.';
    else result = pt ? 'Argumento do contrato da API; consulte o arquivo de origem para o formato aceito.' : 'API contract argument; consult the linked source for its supported format.';
  }
  return result + (raw.trim().endsWith('?') ? (pt ? ' Opcional.' : ' Optional.') : '');
}
export function getReturnInfo(entry) {
  const sig = entry.signature || '';
  const method = sig.split('(')[0].split(/[.:]/).pop() || '';
  const description = entry.detail || '';
  const desc = description.toLowerCase();
  if (/^pr_lib\.(load|loadModule)\(/.test(sig)) return { kind: 'module', detail: TERMS[method] };
  if (/^pr_lib\.loadFile\(/.test(sig)) return { kind: 'function', detail: TERMS.loadFile };
  if (/^pr_lib\.(loadJson|readJson)\(/.test(sig)) return { kind: 'table', detail: TERMS[method] };
  if (/^pr_lib\.(saveJson|writeJson|updateJson|mergeJson)\(/.test(sig)) return { kind: 'multiple', detail: TERMS[method] };
  if (/^pr_lib\.jsonExists\(/.test(sig)) return { kind: 'boolean', detail: TERMS.jsonExists };
  if (/framework\.GetPlayer\(/.test(sig)) return { kind: 'player', detail: TERMS.GetPlayer };
  if (/cache\.GetResourceState\(/.test(sig)) return { kind: 'table', detail: TERMS.GetResourceState };
  if (/cache\.OnResourceState\(/.test(sig)) return { kind: 'callback', detail: TERMS.OnResourceState };
  if (/\bretorna (?:um |uma )?(booleano|true\/false)|retorna true (?:ou|se)|retorna false|tipo booleano|boolean result/i.test(desc)) return { kind: 'boolean' };
  if (/retorna (?:uma )?(?:lista|array)|retorna (?:todos os|a lista)|retorna múltiplos objetos|retorna várias entradas/i.test(desc)) return { kind: 'list' };
  if (/retorna (?:uma |a )?(tabela|estrutura|cópia|objeto lua)|retorna dados (?:do|da) (?:personagem|jogador)|retorna [\w\s]*tabela|retorna (?:os|as) dados em (?:formato|uma) tabela/i.test(desc)) return { kind: 'table' };
  if (/retorna (?:um |uma )?(valor numérico|número|quantidade|contagem|índice|tempo|saldo|porcentagem|float)|número (?:de|das) linhas afetadas|affected rows/i.test(desc)) return { kind: 'number' };
  if (/retorna (?:um |uma )?(texto|string|nome|mensagem)|retorna o nome|retorna (?:uma )?string/i.test(desc)) return { kind: 'string' };
  if (/retorna (?:uma )?(função|closure)|retorna função de cancelamento/i.test(desc)) return { kind: 'function' };
  if (/retorna (?:um )?(vector[234]|vetor)|retorna coordenadas/i.test(desc)) return { kind: 'vector' };
  if (/retorna (?:um |o )?(id|identificador|handle)|retorna (?:o )?source/i.test(desc)) return { kind: 'identifier' };
  if (/retorna (?:um |o )?(ped|veículo|objeto|entidade)|retorna (?:a )?entidade/i.test(desc)) return { kind: 'entity' };
  if (/retorna (?:sucesso|status|estado)|retorna true ou false/i.test(desc)) return { kind: 'status' };
  if (/retorna (?:o|um|dois|três) .+ e .+|retorna (?:sucesso|resultado)\/(?:motivo|erro)|retorna [\w\s]+(?: ou )false e/i.test(desc)) return { kind: 'multiple' };
  if (/^(get|fetch|find|read|load|resolve|list|has|is|can|search|query|request|await|count|calculate|format|create|insert|check|snapshot|peek|select|copy|normalize|parse|encode|decode|to)/i.test(method)) return { kind: 'value' };
  if (/^(show|hide|clear|set|start|stop|remove|register|unregister|send|trigger|notify|open|close|print|draw|delete|destroy|play|pause)/i.test(method) && !/retorna|returns|return|resultado|boolean|sucesso/i.test(desc)) return { kind: 'none' };
  return { kind: 'value' };
}
export function returnDescription(entry, locale) {
  const pt = locale === 'pt-BR';
  const info = getReturnInfo(entry);
  if (info.detail) return info.detail[pt ? 0 : 1];
  const kinds = {
    table: ['Retorna uma tabela Lua; pode ser nil quando não há registro ou o provider está indisponível.', 'Returns a Lua table; it may be nil if no record exists or the provider is unavailable.'],
    list: ['Retorna uma lista de elementos. Verifique se está vazia antes de percorrê-la.', 'Returns a list of entries. Check whether it is empty before iterating.'],
    boolean: ['Retorna true ou false para indicar o resultado da verificação/operação.', 'Returns true or false to indicate the check or operation outcome.'],
    number: ['Retorna um valor numérico; confira unidade e significado na descrição.', 'Returns a numeric value; check the description for its unit and meaning.'],
    string: ['Retorna texto; dependendo do adapter, pode retornar nil.', 'Returns a string; some adapters may return nil.'],
    function: ['Retorna uma função ou um callback que pode ser utilizado pelo consumidor.', 'Returns a function or callback for use by the consumer.'],
    vector: ['Retorna coordenadas/um vetor do jogo.', 'Returns world coordinates/a game vector.'],
    identifier: ['Retorna um ID/handle de identificação; a indisponibilidade pode retornar nil.', 'Returns an identifier/handle; missing values may yield nil.'],
    entity: ['Retorna a entidade do GTA; verifique sua validade antes de utilizá-la.', 'Returns a GTA entity handle; validate it before using.'],
    player: TERMS.GetPlayer,
    callback: TERMS.OnResourceState,
    status: ['Retorna um estado/status conforme o provider ativo.', 'Returns a status value according to the active provider.'],
    multiple: ['Retorna mais de um valor. Confira o status, os dados e o motivo de falha, quando presentes.', 'Returns multiple values. Inspect the status, data, and failure reason when present.'],
    module: TERMS.load,
    none: ['A função não documenta retorno útil. Uma chamada concluída não comprova sucesso sem verificação adicional.', 'The function does not document a meaningful return. Completing a call alone does not prove success.'],
    value: ['Retorna um resultado cujo tipo depende da função ou do provider. Confira o contrato da origem antes de assumir uma tabela ou booleano.', 'Returns a result whose type depends on the function/provider. Inspect the source contract before assuming a table or boolean.'],
  };
  return kinds[info.kind]?.[pt ? 0 : 1] || kinds.value[pt ? 0 : 1];
}
function safePrintLabel(kind, locale) {
  return RETURN_TEXT[kind]?.[locale === 'pt-BR' ? 0 : 1] || RETURN_TEXT.value[locale === 'pt-BR' ? 0 : 1];
}
export function localizedExample(entry, locale) {
  let code = entry.example || '';
  const pt = locale === 'pt-BR';
  const info = getReturnInfo(entry);
  const label = safePrintLabel(info.kind, locale).replaceAll("'", "\\'");
  // Only translate the generated generic result logger, preserving author-written examples.
  const generic = /print\(\s*'(?:(?:Retorno da operação|Resultado|Return value|Return result|Returned value):?)'\s*,\s*result\s*\)/g;
  if (info.kind === 'none') {
    code = code.replace(/local result = ([^\n]+)\nprint\(\s*'(?:(?:Retorno da operação|Resultado):?)'\s*,\s*result\s*\)/g,
      (_, call) => call + '\nprint(\'' + (pt ? 'Operação executada (sem retorno documentado)' : 'Operation called (no documented return)') + '\')');
  } else {
    code = code.replace(generic, "print('" + label + ":', result)");
  }
  // Change generic comments from previous code generation without modifying identifiers.
  code = code.replace(/-- ID do jogador no servidor \(obtido do evento\/comando\)/g, pt ? '-- ID do jogador recebido do evento/comando' : '-- player ID received from an event/command')
    .replace(/-- substitua pelo source real recebido no servidor/g, pt ? '-- substitua pelo source recebido no servidor' : '-- replace with the real server source')
    .replace(/-- parâmetros do contrato do provider/g, pt ? '-- parâmetros exigidos pelo provider' : '-- arguments required by the provider')
    .replace(/-- Complete os parâmetros segundo o export/g, pt ? '-- Complete os parâmetros segundo o export' : '-- Supply arguments according to the export');
  // Source-verified: load returns the result of fn(), not a fixed table type.
  if (entry.signature === 'pr_lib.load(path, env, optional)' || entry.signature === 'pr_lib.loadModule(path, env, optional)') {
    const func = entry.signature.startsWith('pr_lib.loadModule') ? 'pr_lib.loadModule' : 'pr_lib.load';
    code = "local result = " + func + "('@my_resource/modules/example', nil, false)\n"
      + "print('" + safePrintLabel('module', locale) + ":', result)\n"
      + "print('" + (pt ? 'Tipo Lua retornado' : 'Returned Lua type') + ":', type(result))";
  }
  if (entry.signature === 'pr_lib.loadJson(path, optional)' || entry.signature === 'pr_lib.readJson(path, optional)') {
    const fn = entry.signature.startsWith('pr_lib.readJson') ? 'pr_lib.readJson' : 'pr_lib.loadJson';
    code = "local result = " + fn + "('@my_resource/data/config', true)\n"
      + "print('" + safePrintLabel('table', locale) + ":', result and json.encode(result) or 'nil')";
  }
  if (entry.signature === 'pr_lib.framework.GetPlayer()') {
    code = "local result = pr_lib.framework.GetPlayer()\nprint('" + safePrintLabel('player', locale) + ":', result)";
  }
  if (entry.signature === 'pr_lib.framework.GetPlayer(source)') {
    code = "local playerSource = source -- " + (pt ? 'source do evento/comando no servidor' : 'server event/command source') + "\n"
      + "local result = pr_lib.framework.GetPlayer(playerSource)\n"
      + "print('" + safePrintLabel('player', locale) + ":', result)";
  }

  // Explicit examples for APIs with documented multi-value or callable returns.
  if (entry.signature === 'pr_lib.loadFile(resource, fileName, env, optional)') {
    code = "local chunk = pr_lib.loadFile('my_resource', 'modules/example.lua', nil, true)\n"
      + "print('" + safePrintLabel('function', locale) + ":', chunk)\n"
      + "if chunk then\n"
      + "    local moduleValue = chunk()\n"
      + "    print('" + safePrintLabel('module', locale) + ":', moduleValue)\n"
      + "end";
  }
  if (/^pr_lib\.(saveJson|writeJson)\(path, value, options\)$/.test(entry.signature)) {
    const func = entry.signature.split('(')[0];
    code = "local saved, details = " + func + "('@my_resource/data/config', { enabled = true })\n"
      + "print('" + (pt ? 'Gravação concluída' : 'Save succeeded') + ":', saved)\n"
      + "print('" + (pt ? 'Detalhes ou erro' : 'Details or error') + ":', details)";
  }
  if (/^pr_lib\.(updateJson|mergeJson)\(path, changes, options\)$/.test(entry.signature)) {
    const func = entry.signature.split('(')[0];
    code = "local success, updated, details = " + func + "('@my_resource/data/config', { enabled = true })\n"
      + "print('" + (pt ? 'Atualização concluída' : 'Update succeeded') + ":', success)\n"
      + "print('" + (pt ? 'Dados atualizados ou motivo de erro' : 'Updated data or error') + ":', updated)\n"
      + "print('" + (pt ? 'Detalhes da gravação' : 'Save details') + ":', details)";
  }
  if (entry.signature === 'pr_lib.jsonExists(path)') {
    code = "local exists = pr_lib.jsonExists('@my_resource/data/config.json')\n"
      + "print('" + safePrintLabel('boolean', locale) + ":', exists)";
  }
  if (/^pr_lib\.cache\.GetResourceState\(/.test(entry.signature)) {
    code = "local state = pr_lib.cache.GetResourceState('my_resource', 'status')\n"
      + "print('" + safePrintLabel('table', locale) + ":', state and json.encode(state) or 'nil')";
  }
  if (/^pr_lib\.cache\.OnResourceState\(/.test(entry.signature)) {
    code = "local unsubscribe = pr_lib.cache.OnResourceState('my_resource', 'status', function(newValue, oldValue)\n"
      + "    print('" + (pt ? 'Novo estado' : 'New state') + ":', newValue)\n"
      + "end)\n"
      + "print('" + safePrintLabel('callback', locale) + ":', unsubscribe)\n"
      + "-- " + (pt ? 'Chame unsubscribe() quando não precisar mais do listener, conforme o contrato.' : 'Call unsubscribe() when the listener is no longer needed, as supported by the API.') ;
  }
  if (/^pr_lib\.frameworkRouting\.select\(/.test(entry.signature)) {
    code = "local route = pr_lib.frameworkRouting.select({ 'qb', 'esx' })\n"
      + "print('" + (pt ? 'Framework selecionado' : 'Selected framework') + ":', route)";
  }
  if (/^pr_lib\.environment\.getMode\(/.test(entry.signature)) {
    code = "local mode = pr_lib.environment.getMode()\n"
      + "print('" + (pt ? 'Modo do ambiente' : 'Environment mode') + ":', mode)";
  }
  return code;
}
