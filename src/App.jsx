import { useEffect, useMemo, useRef, useState } from 'react';
import ProjectDocumentation from './ProjectDocumentation';
import BuyMeACoffeeButton from './BuyMeACoffeeButton';

const PROFILE = {
  name: 'Pierre Moraes',
  github: 'https://github.com/Pierremoraes-ofc',
  linkedin: 'https://www.linkedin.com/in/pierre-moraes-483b21263/',
  gitbook: 'https://pierremoraes.gitbook.io/home',
  avatar: 'https://avatars.githubusercontent.com/u/185448687?v=4',
  brand: './pierre-brand.svg',
};

const PROJECTS = [
  {
    name: 'Smart Office Hybrid 4.0',
    repo: 'https://github.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0',
    code: 'smart_office_hybrid_4',
    tags: ['PHP', 'MySQL', 'Groq AI', 'Chart.js', 'KPI'],
    pt: 'Dashboard universal orientado a dados com gráficos analíticos, KPIs, insights e consultas assistidas por IA. O projeto conecta modelos SQL a uma camada de inteligência usando PHP, MySQL e Groq AI.',
    en: 'Universal data-driven dashboard with analytical charts, KPIs, insights and AI-assisted queries. The project connects SQL models to an intelligence layer using PHP, MySQL and Groq AI.',
  },
  {
    name: 'Master — Windows Forms',
    repo: 'https://github.com/Pierremoraes-ofc/Master-Windows-Form-CSharp-',
    code: 'master_windows_forms',
    tags: ['C#', '.NET 10', 'WinForms', 'WinAPI', 'Desktop'],
    pt: 'Aplicação desktop em C#/.NET 10 com Windows Forms, manipulação de mouse e teclado via WinAPI, remapeamento de entradas, interface modular, temas, notificações e sistema de idiomas por JSON.',
    en: 'Desktop application built with C#/.NET 10 and Windows Forms, featuring WinAPI mouse/keyboard input, input remapping, modular UI, themes, notifications and JSON-based localization.',
  },
];

const HOBBY_PROJECTS = [
  {
    name: 'PR Bridge',
    repo: 'https://github.com/Pierremoraes-ofc/pr_bridge',
    code: 'pr_bridge',
    tags: ['FiveM', 'Lua', 'Architecture', 'Compatibility'],
    pt: 'Plataforma standalone de compatibilidade e desenvolvimento para FiveM. Normaliza frameworks, inventários, banco, UI, target, callbacks e utilitários nativos em uma API estável.',
    en: 'Standalone FiveM compatibility and developer platform that normalizes frameworks, inventories, databases, UI, target, callbacks and native utilities behind one stable API.',
  },
  {
    name: 'PR Mileage',
    repo: 'https://github.com/Pierremoraes-ofc/pr_mileage',
    code: 'pr_mileage',
    tags: ['FiveM', 'Simulation', 'State Bags', 'Vehicle Systems'],
    pt: 'Simulação veicular com odômetro persistente, State Bags, vida útil por componente, sintomas progressivos de desgaste e integração para oficinas e concessionárias.',
    en: 'Vehicle simulation with persistent odometer data, State Bags, per-component service life, progressive wear symptoms and workshop/dealership integrations.',
  },
  {
    name: 'PR Car Keys',
    repo: 'https://github.com/Pierremoraes-ofc/pr_carkeys',
    code: 'pr_carkeys',
    tags: ['FiveM', 'Gameplay', 'Security', 'State Bags'],
    pt: 'Sistema robusto de chaves veiculares com barcode por chave, bolsas, hotwire, carjack, ignição, expiração e validação server-side.',
    en: 'Robust vehicle-key system with per-key barcodes, key bags, hotwire, carjack, ignition state, expiration and server-side validation.',
  },
  {
    name: 'PR 3D Sound',
    repo: 'https://github.com/Pierremoraes-ofc/pr_3dsound',
    code: 'pr_3dsound',
    tags: ['FiveM', 'WebAudio', 'HRTF', 'Audio'],
    pt: 'Engine de áudio espacial com HRTF, emissores persistentes, streaming por proximidade, attach em entidades, oclusão e ponte de sons nativos do GTA.',
    en: 'Spatial-audio engine with HRTF, persistent emitters, proximity streaming, entity attachment, occlusion and a GTA native-sound bridge.',
  },
  {
    name: 'PR Elevator',
    repo: 'https://github.com/Pierremoraes-ofc/pr-elevator',
    code: 'pr_elevator',
    tags: ['FiveM', 'Lua', 'Interaction', 'Systems'],
    pt: 'Sistema de elevadores para FiveM com integração ao ecossistema PR e fluxo de interação desacoplado.',
    en: 'Elevator system for FiveM with PR ecosystem integration and a decoupled interaction flow.',
  },
  {
    name: 'PR Boombox',
    repo: 'https://github.com/Pierremoraes-ofc/pr_boombox',
    code: 'pr_boombox',
    tags: ['FiveM', '3D Audio', 'Playlists', 'Vehicle Sound'],
    pt: 'Sistema de som 3D com boombox físico, playlists persistentes, carry e reposicionamento, áudio sincronizado, atalhos, múltiplos modelos e integração com sistemas de som automotivo por múltiplos alto-falantes.',
    en: '3D audio system with physical boomboxes, persistent playlists, carry/repositioning, synchronized playback, hotkeys, multiple models and multi-speaker vehicle sound-system integration.',
  },
  {
    name: 'PR WEP',
    repo: 'https://github.com/Pierremoraes-ofc/pr-wep',
    code: 'pr_wep',
    tags: ['FiveM', 'Weapons', 'Sling', 'Weapon Systems'],
    pt: 'Sistema avançado de armas com sling visual, posicionamento por gizmo, coldres, modos de disparo, recoil realista, peso, lanterna persistente, animações, rádio, lançamento e recuperação física de armas.',
    en: 'Advanced weapon system with visual sling, gizmo positioning, holsters, fire modes, realistic recoil, weight, persistent flashlight, animations, radio, physical weapon throwing and recovery.',
  },
  {
    name: 'PR Trailer',
    repo: 'https://github.com/Pierremoraes-ofc/pr_trailer',
    code: 'pr_trailer',
    tags: ['FiveM', 'Trailers', 'Winch', 'Vehicle Physics'],
    pt: 'Sistema avançado de trailers e reboque com rampas, guincho físico por rope, cintas por roda, fixação de veículos, flatbed móvel, sincronização por State Bags e física de acidentes.',
    en: 'Advanced trailer and towing system with ramps, physical rope winch, per-wheel straps, vehicle securing, moving flatbed, State Bag synchronization and crash physics.',
  },
  {
    name: 'PR Nitrous',
    repo: 'https://github.com/Pierremoraes-ofc/pr_nitrous',
    code: 'pr_nitrous',
    tags: ['FiveM', 'Vehicle Systems', 'Nitrous', 'Persistence'],
    pt: 'Sistema avançado de nitro veicular com cilindros físicos persistentes, consumo individual por garrafa, reaproveitamento de carga restante, purge configurável, HUD, efeitos sincronizados e instalação visual.',
    en: 'Advanced vehicle nitrous system with persistent physical bottles, per-bottle consumption, reusable remaining charge, configurable purge, HUD, synchronized effects and visual installation.',
  },
  {
    name: 'PR Placeable',
    repo: 'https://github.com/Pierremoraes-ofc/pr_placeable',
    code: 'pr_placeable',
    tags: ['FiveM', 'Physical Props', 'Persistence', 'Vehicle Cargo'],
    pt: 'Sistema persistente de itens físicos com posicionamento preciso, lotes e caixas, carry, reposicionamento, integração com inventários e carga presa a veículos com física de impacto.',
    en: 'Persistent physical-item system with precision placement, batches and boxes, carry, repositioning, inventory integration and vehicle-mounted cargo with impact physics.',
  },
];

const COPY = {
  'pt-BR': {
    availability: 'Disponível para novas oportunidades',
    titleA: 'Software Developer.',
    titleB: 'Full Stack.',
    titleC: 'Systems Analyst.',
    intro: 'Desenvolvo software, integrações e sistemas com foco em arquitetura limpa, performance, automação e experiências de uso consistentes.',
    aboutTitle: 'Sobre',
    aboutText:
      'Desenvolvedor de Software formado em Análise e Desenvolvimento de Sistemas, com experiência prática em aplicações, APIs, integração de sistemas, bancos de dados, automação e desenvolvimento e suporte a servidores de games.',
    projectsTitle: 'Projetos & Hobby',
    projectsText: 'Projetos profissionais/acadêmicos separados dos sistemas que desenvolvo como hobby para jogos e FiveM.',
    professionalProjects: 'Projetos',
    professionalProjectsText: 'Projetos de software, dados e aplicações que representam minha formação e desenvolvimento profissional.',
    hobbyProjects: 'Hobby',
    hobbyProjectsText: 'Sistemas experimentais e ferramentas que desenvolvo por interesse em jogos, simulação e arquitetura FiveM.',
    stackTitle: 'Stack & competências',
    stackText: 'Tecnologias que utilizo no desenvolvimento de aplicações, ferramentas, integrações e produtos.',
    journeyTitle: 'Experiência & formação',
    journeyText: 'Experiência profissional e formação que sustentam minha atuação em desenvolvimento e análise de sistemas.',
    contactTitle: 'Vamos construir algo?',
    contactText: 'Estou aberto a conversar sobre desenvolvimento de software, integrações, ferramentas, aplicações web e sistemas para FiveM.',
    nav: ['Início', 'Sobre', 'Stack', 'Projetos', 'Experiência', 'Contato'],
    openProject: 'Abrir documentação',
    experience: 'Experiência',
    education: 'Formação',
    current: 'Atual',
    footer: 'Projetado e desenvolvido por Pierre Moraes.',
    supportLabel: 'Gostou do meu trabalho?',
    supportText: 'Se meus projetos, documentações ou ferramentas te ajudaram, você pode apoiar meu trabalho.',
    supportAction: 'Apoiar no Buy Me a Coffee',
    repoLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
    docsLabel: 'GitBook',
  },
  en: {
    availability: 'Open to new opportunities',
    titleA: 'Software Developer.',
    titleB: 'Full Stack.',
    titleC: 'Systems Analyst.',
    intro: 'I build software, integrations and systems focused on clean architecture, performance, automation and consistent user experiences.',
    aboutTitle: 'About',
    aboutText:
      'Software Developer with a degree in Systems Analysis and Development and hands-on experience in applications, APIs, systems integration, databases, automation, and game-server development and support.',
    projectsTitle: 'Projects & Hobby',
    projectsText: 'Professional/academic projects separated from the game and FiveM systems I build as a hobby.',
    professionalProjects: 'Projects',
    professionalProjectsText: 'Software, data and application projects representing my education and professional development.',
    hobbyProjects: 'Hobby',
    hobbyProjectsText: 'Experimental systems and tooling I build around games, simulation and FiveM architecture.',
    stackTitle: 'Stack & skills',
    stackText: 'Technologies I use across applications, tooling, integrations and product development.',
    journeyTitle: 'Experience & education',
    journeyText: 'Professional experience and education supporting my work in software development and systems analysis.',
    contactTitle: 'Build something together?',
    contactText: 'I am open to conversations about software development, integrations, tooling, web applications and FiveM systems.',
    nav: ['Home', 'About', 'Stack', 'Projects', 'Experience', 'Contact'],
    openProject: 'Open documentation',
    experience: 'Experience',
    education: 'Education',
    current: 'Present',
    footer: 'Designed and developed by Pierre Moraes.',
    supportLabel: 'Enjoying my work?',
    supportText: 'If my projects, documentation or tools helped you, you can support my work.',
    supportAction: 'Support on Buy Me a Coffee',
    repoLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
    docsLabel: 'GitBook',
  },
};

const STACK = [
  { group: 'Languages', items: ['Lua', 'JavaScript', 'Python', 'C#', 'PHP', 'C', 'C++', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Vue.js', 'Svelte', 'Angular', 'HTML5', 'CSS3'] },
  { group: 'Data', items: ['MariaDB', 'MySQL', 'Firebase', 'REST', 'JSON'] },
  { group: 'Systems', items: ['Linux', 'Git', 'GitHub', 'APIs', 'Automation', 'Integrations'] },
  { group: 'Workflow', items: ['Scrum', 'Kanban', 'Architecture', 'Documentation', 'Debugging'] },
];

function Icon({ name, size = 18 }) {
  const paths = {
    home: <><path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3"/><path d="M3 12h18"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 2a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v5"/><path d="M8 8h.01"/><path d="M12 16v-5"/><path d="M12 13.5a2.5 2.5 0 0 1 5 0V16"/></>,
    external: <><path d="M15 3h6v6"/><path d="m10 14 11-11"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function App() {
  const [locale, setLocale] = useState(() => localStorage.getItem('portfolio-locale') || 'pt-BR');
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [docProject, setDocProject] = useState(() => {
    const match = window.location.hash.match(/^#docs\/([^/]+)$/);
    return match?.[1] || null;
  });
  const sectionsRef = useRef([]);
  const d = COPY[locale];
  const sections = useMemo(() => [
    ['home', d.nav[0], 'home'],
    ['about', d.nav[1], 'user'],
    ['stack', d.nav[2], 'code'],
    ['projects', d.nav[3], 'grid'],
    ['journey', d.nav[4], 'briefcase'],
    ['contact', d.nav[5], 'mail'],
  ], [d]);

  useEffect(() => {
    localStorage.setItem('portfolio-locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (docProject) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: '-22% 0px -58%', threshold: [0.1, 0.25, 0.5] },
    );

    sectionsRef.current.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, [docProject]);

  useEffect(() => {
    const onHashChange = () => {
      const match = window.location.hash.match(/^#docs\/([^/]+)$/);
      setDocProject(match?.[1] || null);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  const openDocumentation = (projectCode) => {
    window.location.hash = `docs/${projectCode}`;
    setDocProject(projectCode);
  };

  const closeDocumentation = () => {
    setDocProject(null);
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#projects`);
    requestAnimationFrame(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  };

  if (docProject) {
    return <ProjectDocumentation projectKey={docProject} locale={locale} onBack={closeDocumentation} />;
  }

  const Sidebar = ({ mobile = false }) => (
    <aside className={mobile ? 'sidebar sidebar--mobile' : 'sidebar'}>
      <div className="sidebar-profile">
        <img className="brand-mark brand-mark--sidebar" src={PROFILE.brand} alt="Logo Pierre Moraes" />
        <div>
          <strong>Pierre Moraes</strong>
          <span>Developer</span>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Portfolio navigation">
        {sections.map(([id, label, icon]) => (
          <button key={id} className={active === id ? 'active' : ''} onClick={() => scrollTo(id)}>
            <Icon name={icon} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="language">
          <button className="language-trigger" onClick={() => setLanguageOpen((value) => !value)} aria-expanded={languageOpen}>
            <span>{locale === 'pt-BR' ? '🇧🇷' : '🇺🇸'}</span>
            <strong>{locale === 'pt-BR' ? 'PT-BR' : 'EN'}</strong>
            <Icon name="chevron" size={14} />
          </button>
          {languageOpen && (
            <div className="language-menu">
              <button className={locale === 'pt-BR' ? 'active' : ''} onClick={() => { setLocale('pt-BR'); setLanguageOpen(false); }}>
                <span>🇧🇷</span><div><strong>Português</strong><small>Brasil</small></div>
              </button>
              <button className={locale === 'en' ? 'active' : ''} onClick={() => { setLocale('en'); setLanguageOpen(false); }}>
                <span>🇺🇸</span><div><strong>English</strong><small>International</small></div>
              </button>
            </div>
          )}
        </div>

        <div className="sidebar-socials">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href={PROFILE.gitbook} target="_blank" rel="noreferrer" aria-label="GitBook"><Icon name="book" /></a>
        </div>
      </div>
    </aside>
  );

  return (
    <div className="portfolio">
      <Sidebar />

      <header className="mobile-header">
        <button className="mobile-brand" onClick={() => scrollTo('home')}>
          <img src={PROFILE.brand} alt="" aria-hidden="true" />
          <strong>Pierre Moraes</strong>
        </button>
        <button className="mobile-menu-button" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Icon name="menu" /></button>
      </header>

      {mobileOpen && (
        <div className="mobile-layer">
          <button className="mobile-backdrop" onClick={() => setMobileOpen(false)} aria-label="Close menu" />
          <div className="mobile-panel">
            <button className="mobile-close" onClick={() => setMobileOpen(false)}><Icon name="close" /></button>
            <Sidebar mobile />
          </div>
        </div>
      )}

      <main>
        <section id="home" ref={(el) => { sectionsRef.current[0] = el; }} className="hero section">
          <div className="hero-grid">
            <div className="hero-copy">
              <img className="hero-brand-mark" src={PROFILE.brand} alt="Pierre Moraes" />
              <div className="eyebrow"><span />{d.availability}</div>
              <p className="hero-overline">PIERRE MORAES / DEVELOPER</p>
              <h1>{d.titleA}<br /><span>{d.titleB}</span><br />{d.titleC}</h1>
              <p className="hero-intro">{d.intro}</p>

              <div className="hero-actions">
                <button className="primary" onClick={() => scrollTo('projects')}>{d.projectsTitle}<Icon name="chevron" size={16} /></button>
                <a className="secondary" href={PROFILE.github} target="_blank" rel="noreferrer"><Icon name="github" size={17} />GitHub</a>
              </div>
            </div>

            <div className="hero-terminal" aria-label="Developer profile summary">
              <div className="terminal-bar"><span/><span/><span/><small>profile.ts</small></div>
              <pre><code>{`const developer = {
  name: "Pierre Moraes",
  role: [
    "Software Developer",
    "Full Stack Developer",
    "Systems Analyst"
  ],
  focus: [
    "Architecture",
    "APIs & Integrations",
    "Automation",
    "FiveM Systems"
  ],
  mindset: "build • measure • improve"
};`}</code></pre>
            </div>
          </div>

          <div className="hero-metrics">
            <article><strong>8</strong><span>{locale === 'pt-BR' ? 'linguagens' : 'languages'}</span></article>
            <article><strong>4+</strong><span>{locale === 'pt-BR' ? 'frameworks front-end' : 'frontend frameworks'}</span></article>
            <article><strong>Full Stack</strong><span>{locale === 'pt-BR' ? 'aplicações & integrações' : 'applications & integrations'}</span></article>
          </div>
        </section>

        <section id="about" ref={(el) => { sectionsRef.current[1] = el; }} className="section content-section">
          <SectionHeading index="01" title={d.aboutTitle} text={d.aboutText} />
          <div className="about-grid">
            <article className="statement">
              <span>01</span>
              <h3>{locale === 'pt-BR' ? 'Arquitetura antes de complexidade.' : 'Architecture before complexity.'}</h3>
              <p>{locale === 'pt-BR' ? 'Prefiro contratos claros, módulos pequenos, integração desacoplada e código que continue compreensível quando o projeto crescer.' : 'I prefer clear contracts, small modules, decoupled integrations and code that stays understandable as the project grows.'}</p>
            </article>
            <article className="statement">
              <span>02</span>
              <h3>{locale === 'pt-BR' ? 'Experiência de developer importa.' : 'Developer experience matters.'}</h3>
              <p>{locale === 'pt-BR' ? 'Documentação, APIs consistentes, logs úteis e ferramentas internas fazem parte do produto, não são detalhes posteriores.' : 'Documentation, consistent APIs, useful logs and internal tooling are part of the product, not afterthoughts.'}</p>
            </article>
            <article className="statement">
              <span>03</span>
              <h3>{locale === 'pt-BR' ? 'Aprender rápido faz parte da stack.' : 'Learning fast is part of the stack.'}</h3>
              <p>{locale === 'pt-BR' ? 'Tecnologias mudam. O foco é entender fundamentos, adaptar-se à ferramenta certa e entregar soluções confiáveis.' : 'Technologies change. The focus is understanding fundamentals, adapting to the right tool and shipping reliable solutions.'}</p>
            </article>
          </div>
        </section>

        <section id="stack" ref={(el) => { sectionsRef.current[2] = el; }} className="section content-section">
          <SectionHeading index="02" title={d.stackTitle} text={d.stackText} />
          <div className="stack-grid">
            {STACK.map((group) => (
              <article className="stack-card" key={group.group}>
                <span>{group.group}</span>
                <div>{group.items.map((item) => <b key={item}>{item}</b>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" ref={(el) => { sectionsRef.current[3] = el; }} className="section content-section">
          <SectionHeading index="03" title={d.projectsTitle} text={d.projectsText} />

          <div className="project-group">
            <header className="project-group-heading">
              <span>03.1</span>
              <div>
                <h3>{d.professionalProjects}</h3>
                <p>{d.professionalProjectsText}</p>
              </div>
            </header>
            <div className="projects-grid projects-grid--featured">
              {PROJECTS.map((project, index) => (
                <button className="project-card project-card--featured" type="button" onClick={() => openDocumentation(project.code)} key={project.name}>
                  <div className="project-top">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <Icon name="book" size={18} />
                  </div>
                  <code>{project.code}</code>
                  <h3>{project.name}</h3>
                  <p>{project[locale === 'pt-BR' ? 'pt' : 'en']}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <strong className="project-link">{d.openProject}<Icon name="chevron" size={14} /></strong>
                </button>
              ))}
            </div>
          </div>

          <div className="project-group project-group--hobby">
            <header className="project-group-heading">
              <span>03.2</span>
              <div>
                <h3>{d.hobbyProjects}</h3>
                <p>{d.hobbyProjectsText}</p>
              </div>
            </header>
            <div className="projects-grid">
              {HOBBY_PROJECTS.map((project, index) => (
                <button className="project-card" type="button" onClick={() => openDocumentation(project.code)} key={project.name}>
                  <div className="project-top">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <Icon name="book" size={18} />
                  </div>
                  <code>{project.code}</code>
                  <h3>{project.name}</h3>
                  <p>{project[locale === 'pt-BR' ? 'pt' : 'en']}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <strong className="project-link">{d.openProject}<Icon name="chevron" size={14} /></strong>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" ref={(el) => { sectionsRef.current[4] = el; }} className="section content-section">
          <SectionHeading index="04" title={d.journeyTitle} text={d.journeyText} />
          <div className="timeline">
            <article>
              <div className="timeline-date">2019 — {d.current}</div>
              <div className="timeline-body">
                <span>{d.experience}</span>
                <h3>Tribunal de Justiça do Estado do Rio de Janeiro</h3>
                <p>{locale === 'pt-BR' ? 'Auxiliar administrativo. Organização de processos e rotinas administrativas com utilização de ferramentas informatizadas.' : 'Administrative Assistant. Organization of administrative processes and workflows using digital tools.'}</p>
              </div>
            </article>
            <article>
              <div className="timeline-date">{locale === 'pt-BR' ? 'Concluído' : 'Completed'}</div>
              <div className="timeline-body">
                <span>{d.education}</span>
                <h3>{locale === 'pt-BR' ? 'Análise e Desenvolvimento de Sistemas' : 'Systems Analysis and Development'}</h3>
                <p>{locale === 'pt-BR' ? 'Formação superior com foco em desenvolvimento de software, sistemas, bancos de dados e engenharia de soluções.' : 'Higher education focused on software development, systems, databases and solution engineering.'}</p>
              </div>
            </article>
            <article>
              <div className="timeline-date">AWS Academy</div>
              <div className="timeline-body">
                <span>{locale === 'pt-BR' ? 'Formação complementar' : 'Additional education'}</span>
                <h3>Cloud Foundations</h3>
                <p>{locale === 'pt-BR' ? 'Fundamentos de computação em nuvem e serviços AWS.' : 'Cloud-computing fundamentals and AWS services.'}</p>
              </div>
            </article>
            <article>
              <div className="timeline-date">2006</div>
              <div className="timeline-body">
                <span>{locale === 'pt-BR' ? 'Formação complementar' : 'Additional education'}</span>
                <h3>{locale === 'pt-BR' ? 'Curso OEM' : 'OEM Course'}</h3>
                <p>{locale === 'pt-BR' ? 'Microsoft Office Avançado; Montagem e Manutenção de Computadores.' : 'Advanced Microsoft Office; Computer Assembly and Maintenance.'}</p>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" ref={(el) => { sectionsRef.current[5] = el; }} className="section contact-section">
          <div className="contact-card">
            <div>
              <span className="contact-index">05 / CONTACT</span>
              <h2>{d.contactTitle}</h2>
              <p>{d.contactText}</p>
            </div>
            <div className="contact-links">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /><span><small>{d.linkedinLabel}</small>linkedin.com/in/pierre-moraes-483b21263</span><Icon name="external" size={16} /></a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer"><Icon name="github" /><span><small>{d.repoLabel}</small>github.com/Pierremoraes-ofc</span><Icon name="external" size={16} /></a>
              <a href={PROFILE.gitbook} target="_blank" rel="noreferrer"><Icon name="book" /><span><small>{d.docsLabel}</small>pierremoraes.gitbook.io/home</span><Icon name="external" size={16} /></a>
            </div>
          </div>
          <footer className="site-footer">
            <div className="site-footer-meta">
              <span>© {new Date().getFullYear()} Pierre Moraes</span>
              <span>{d.footer}</span>
            </div>
            <div className="support-footer-official">
              <div className="support-footer-copy">
                <small>{d.supportLabel}</small>
                <em>{d.supportText}</em>
              </div>
              <BuyMeACoffeeButton />
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

function SectionHeading({ index, title, text }) {
  return (
    <header className="section-heading">
      <span>{index}</span>
      <div><p>{title.toUpperCase()}</p><h2>{title}</h2><div>{text}</div></div>
    </header>
  );
}

export default App;
