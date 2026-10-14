import { useEffect, useMemo, useRef, useState } from 'react';

const PROFILE = {
  name: 'Pierre Moraes',
  github: 'https://github.com/Pierremoraes-ofc',
  linkedin: 'https://www.linkedin.com/in/pierre-moraes-483b21263/',
  gitbook: 'https://pierremoraes.gitbook.io/home',
  avatar: 'https://avatars.githubusercontent.com/u/185448687?v=4',
};

const PROJECTS = [
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
    tags: ['Simulation', 'State Bags', 'SQL', 'Vehicle Systems'],
    pt: 'Simulação veicular com odômetro persistente, State Bags, vida útil por componente, sintomas progressivos de desgaste e integração para oficinas e concessionárias.',
    en: 'Vehicle simulation with persistent odometer data, State Bags, per-component service life, progressive wear symptoms and workshop/dealership integrations.',
  },
  {
    name: 'PR Car Keys',
    repo: 'https://github.com/Pierremoraes-ofc/pr_carkeys',
    code: 'pr_carkeys',
    tags: ['Gameplay', 'Security', 'State Bags', 'Lua'],
    pt: 'Sistema robusto de chaves veiculares com barcode por chave, bolsas, hotwire, carjack, ignição, expiração e validação server-side.',
    en: 'Robust vehicle-key system with per-key barcodes, key bags, hotwire, carjack, ignition state, expiration and server-side validation.',
  },
  {
    name: 'PR 3D Sound',
    repo: 'https://github.com/Pierremoraes-ofc/pr_3dsound',
    code: 'pr_3dsound',
    tags: ['WebAudio', 'HRTF', 'FiveM', 'Audio'],
    pt: 'Engine de áudio espacial com HRTF, emissores persistentes, streaming por proximidade, attach em entidades, oclusão e ponte de sons nativos do GTA.',
    en: 'Spatial-audio engine with HRTF, persistent emitters, proximity streaming, entity attachment, occlusion and a GTA native-sound bridge.',
  },
  {
    name: 'Smart Office Hybrid 4.0',
    repo: 'https://github.com/Pierremoraes-ofc/Smart-Office-Hybrid-4.0',
    code: 'smart_office',
    tags: ['AI', 'Data', 'KPI', 'Dashboards'],
    pt: 'Projeto acadêmico para análise de dados empresariais com gráficos, KPIs, insights, consultas assistidas por IA e recomendações conectadas ao banco de dados.',
    en: 'Academic business-data platform with charts, KPIs, insights, AI-assisted querying and recommendations connected directly to company data.',
  },
  {
    name: 'PR Elevator',
    repo: 'https://github.com/Pierremoraes-ofc/pr-elevator',
    code: 'pr_elevator',
    tags: ['FiveM', 'Lua', 'Interaction', 'Systems'],
    pt: 'Sistema de elevadores voltado para experiências FiveM com integração ao ecossistema PR e fluxo de interação desacoplado.',
    en: 'Elevator system for FiveM experiences with PR ecosystem integration and a decoupled interaction flow.',
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
      'Formado em Análise e Desenvolvimento de Sistemas, atuo com desenvolvimento de aplicações, APIs, bancos relacionais, automação, Linux, Git/GitHub e integração entre sistemas. Gosto de transformar problemas complexos em soluções simples de manter, evoluir e reutilizar.',
    projectsTitle: 'Projetos selecionados',
    projectsText: 'Uma seleção de projetos que representam arquitetura, integração, simulação, áudio, dados e experiência de desenvolvimento.',
    stackTitle: 'Stack & competências',
    stackText: 'Tecnologias que utilizo no desenvolvimento de aplicações, ferramentas, integrações e produtos.',
    journeyTitle: 'Experiência & formação',
    journeyText: 'Experiência profissional e formação que sustentam minha atuação em desenvolvimento e análise de sistemas.',
    contactTitle: 'Vamos construir algo?',
    contactText: 'Estou aberto a conversar sobre desenvolvimento de software, integrações, ferramentas, aplicações web e sistemas para FiveM.',
    nav: ['Início', 'Sobre', 'Stack', 'Projetos', 'Experiência', 'Contato'],
    openProject: 'Abrir repositório',
    experience: 'Experiência',
    education: 'Formação',
    current: 'Atual',
    footer: 'Projetado e desenvolvido por Pierre Moraes.',
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
      'Graduate in Systems Analysis and Development with hands-on experience in applications, APIs, relational databases, automation, Linux, Git/GitHub and systems integration. I enjoy turning complex problems into solutions that are easier to maintain, evolve and reuse.',
    projectsTitle: 'Selected projects',
    projectsText: 'A selection of projects representing architecture, integrations, simulation, audio, data and developer experience.',
    stackTitle: 'Stack & skills',
    stackText: 'Technologies I use across applications, tooling, integrations and product development.',
    journeyTitle: 'Experience & education',
    journeyText: 'Professional experience and education supporting my work in software development and systems analysis.',
    contactTitle: 'Build something together?',
    contactText: 'I am open to conversations about software development, integrations, tooling, web applications and FiveM systems.',
    nav: ['Home', 'About', 'Stack', 'Projects', 'Experience', 'Contact'],
    openProject: 'Open repository',
    experience: 'Experience',
    education: 'Education',
    current: 'Present',
    footer: 'Designed and developed by Pierre Moraes.',
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
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  const Sidebar = ({ mobile = false }) => (
    <aside className={mobile ? 'sidebar sidebar--mobile' : 'sidebar'}>
      <div className="sidebar-profile">
        <img src={PROFILE.avatar} alt="Pierre Moraes" />
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
          <span>PM</span><strong>Pierre Moraes</strong>
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
          <div className="projects-grid">
            {PROJECTS.map((project, index) => (
              <a className="project-card" href={project.repo} target="_blank" rel="noreferrer" key={project.name}>
                <div className="project-top">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Icon name="external" size={18} />
                </div>
                <code>{project.code}</code>
                <h3>{project.name}</h3>
                <p>{project[locale === 'pt-BR' ? 'pt' : 'en']}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <strong className="project-link">{d.openProject}<Icon name="chevron" size={14} /></strong>
              </a>
            ))}
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
                <p>{locale === 'pt-BR' ? 'Processos administrativos, suporte técnico, ferramentas digitais e organização de fluxos de trabalho.' : 'Administrative processes, technical support, digital tools and workflow organization.'}</p>
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
          <footer><span>© {new Date().getFullYear()} Pierre Moraes</span><span>{d.footer}</span></footer>
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
