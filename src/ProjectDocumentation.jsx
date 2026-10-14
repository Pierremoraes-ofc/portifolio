import { useEffect, useMemo, useState } from 'react';
import { PROJECT_DOCS } from './projectDocsData';

function Arrow({ left = false }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={left ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} /></svg>;
}

function ExternalIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>;
}

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 2a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></svg>;
}

export default function ProjectDocumentation({ projectKey, locale, onBack }) {
  const doc = PROJECT_DOCS[projectKey];
  const [active, setActive] = useState(doc?.sections?.[0]?.id || 'overview');
  const pt = locale === 'pt-BR';

  const labels = useMemo(() => ({
    back: pt ? 'Voltar ao portfólio' : 'Back to portfolio',
    repo: pt ? 'Repositório' : 'Repository',
    index: pt ? 'Nesta documentação' : 'In this documentation',
    source: pt ? 'Documentação baseada no código e nos materiais atuais do repositório.' : 'Documentation based on the repository current code and materials.',
  }), [pt]);

  useEffect(() => {
    setActive(doc?.sections?.[0]?.id || 'overview');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [projectKey, doc]);

  useEffect(() => {
    if (!doc) return undefined;
    const elements = doc.sections.map((section) => document.getElementById(`doc-${section.id}`)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.dataset?.docSection) setActive(visible.target.dataset.docSection);
    }, { rootMargin: '-18% 0px -65%', threshold: [0.05, 0.2, 0.5] });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [doc]);

  if (!doc) {
    return <div className="documentation-empty"><button onClick={onBack}>{labels.back}</button></div>;
  }

  const goTo = (id) => document.getElementById(`doc-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="documentation-shell">
      <aside className="documentation-sidebar">
        <button className="documentation-back" onClick={onBack}><Arrow left />{labels.back}</button>
        <div className="documentation-brand">
          <span>PM</span>
          <div><strong>{doc.name}</strong><small>{doc.category[pt ? 'pt' : 'en']}</small></div>
        </div>

        <div className="documentation-index-label">{labels.index}</div>
        <nav>
          {doc.sections.map((section, index) => (
            <button key={section.id} className={active === section.id ? 'active' : ''} onClick={() => goTo(section.id)}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{section.title[pt ? 'pt' : 'en']}</strong>
            </button>
          ))}
        </nav>

        <a className="documentation-repo-mini" href={doc.repo} target="_blank" rel="noreferrer">
          <GithubIcon/><span>GitHub</span><ExternalIcon/>
        </a>
      </aside>

      <main className="documentation-main">
        <header className="documentation-hero">
          <div>
            <div className="documentation-eyebrow">{doc.category[pt ? 'pt' : 'en']}</div>
            <code>{doc.code}</code>
            <h1>{doc.name}</h1>
            <p>{doc.lead[pt ? 'pt' : 'en']}</p>
            <div className="documentation-actions">
              <a href={doc.repo} target="_blank" rel="noreferrer"><GithubIcon/>{labels.repo}<ExternalIcon/></a>
              <button onClick={onBack}>{labels.back}</button>
            </div>
          </div>

          <div className="documentation-facts">
            {doc.facts.map(([label, value]) => (
              <article key={label}><span>{label}</span><strong>{value}</strong></article>
            ))}
          </div>
        </header>

        <div className="documentation-body">
          {doc.sections.map((section, index) => (
            <section id={`doc-${section.id}`} data-doc-section={section.id} className="documentation-section" key={section.id}>
              <header>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><small>{section.title[pt ? 'pt' : 'en']}</small><h2>{section.title[pt ? 'pt' : 'en']}</h2></div>
              </header>

              {section.text && <p className="documentation-lead">{section.text[pt ? 'pt' : 'en']}</p>}

              {section.cards && (
                <div className="documentation-cards">
                  {section.cards.map(([title, description]) => (
                    <article key={title}><span>{title}</span><p>{description}</p></article>
                  ))}
                </div>
              )}

              {section.bullets && (
                <ul className="documentation-list">
                  {section.bullets[pt ? 'pt' : 'en'].map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}

              {section.code && <pre className="documentation-code"><code>{section.code}</code></pre>}
            </section>
          ))}

          <section className="documentation-source">
            <span>SOURCE REVIEW</span>
            <h2>{doc.name}</h2>
            <p>{labels.source}</p>
            <a href={doc.repo} target="_blank" rel="noreferrer"><GithubIcon/>{doc.repo.replace('https://github.com/', '')}<ExternalIcon/></a>
          </section>
        </div>
      </main>
    </div>
  );
}
