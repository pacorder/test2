
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import TechSphere from './components/TechSphere';
import { CONTENT, QUESTIONS } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('site_lang');
    return (saved === 'en' || saved === 'es') ? saved : 'es';
  });

  const content = CONTENT[lang];
  const questions = QUESTIONS[lang];

  useEffect(() => {
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header 
        lang={lang} 
        onLangChange={setLang} 
        content={{
          services: content.nav.principles,
          whyUs: content.nav.domains,
          calc: content.nav.processes,
          contact: content.nav.exam,
          cta: content.nav.cta
        }} 
      />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900 overflow-hidden">
        <TechSphere />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 text-blue-400 text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>{content.hero.badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              {content.hero.title}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {content.hero.titleAccent}
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              {content.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#exam" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-600/30 transition-all text-center">
                {content.hero.ctaPrimary}
              </a>
              <a href="#domains" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white text-lg font-bold rounded-2xl border border-slate-700 transition-all text-center">
                {content.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Principles Section */}
      <section id="principles" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">{content.principles.title}</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {content.principles.items.map((item) => (
              <div key={item.id} className="group p-6 bg-slate-50 rounded-2xl hover:bg-blue-600 hover:text-white transition-all text-center">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${item.icon} text-xl`}></i>
                </div>
                <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-[10px] opacity-70 leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Domains Section */}
      <section id="domains" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">{content.domains.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{content.domains.desc}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.domains.items.map((domain) => (
              <div key={domain.id} className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className={`fa-solid ${domain.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{domain.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{domain.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {domain.topics.map(t => (
                    <span key={t} className="px-2 py-1 bg-slate-100 text-[10px] font-bold text-slate-500 rounded uppercase tracking-wider">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processes Infographic */}
      <section id="processes" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">{content.processes.title}</h2>
            <p className="text-slate-600">{content.processes.desc}</p>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
            <div className="grid lg:grid-cols-5 gap-8">
              {content.processes.areas.map((area, idx) => (
                <div key={area.name} className="relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-blue-500 transition-colors">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">{area.name}</h4>
                  <div className="text-blue-600 font-black text-2xl mb-2">{area.count}</div>
                  <p className="text-xs text-slate-500 leading-tight">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exam Simulator Component */}
      <Quiz questions={questions} content={content.exam} />

      {/* Business & Evolution Section */}
      <section id="business" className="py-24 bg-slate-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-8">{content.business.title}</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-microchip text-blue-400 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-blue-400">{content.business.aiTitle}</h3>
                    <p className="text-slate-400 leading-relaxed">{content.business.aiDesc}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-leaf text-emerald-400 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-emerald-400">{content.business.sustainTitle}</h3>
                    <p className="text-slate-400 leading-relaxed">{content.business.sustainDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/20 transition-all"></div>
              <h3 className="text-3xl font-black mb-6">¿Preparado para certificar?</h3>
              <p className="text-blue-100 mb-10 text-lg leading-relaxed">
                Nuestra plataforma de PMBOK 8 está actualizada con los últimos estándares globales de gestión de proyectos.
              </p>
              <a href="#exam" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                Comenzar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} PMP Mastery Hub - PMBOK 8 Standard. Santiago, Chile.</p>
      </footer>
    </div>
  );
};

export default App;
