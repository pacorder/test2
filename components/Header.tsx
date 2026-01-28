
import React, { useState, useEffect } from 'react';
import { Language, SiteContent } from '../types';

interface HeaderProps {
  lang: Language;
  onLangChange: (newLang: Language) => void;
  content: SiteContent['nav'];
}

const Header: React.FC<HeaderProps> = ({ lang, onLangChange, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: content.services, href: '#services' },
    { name: content.whyUs, href: '#why-us' },
    { name: content.calc, href: '#calculator' },
    { name: content.contact, href: '#contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white shadow-lg">
              <i className="fa-solid fa-compass-drafting text-xl"></i>
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Lean<span className="text-blue-600">Engineering</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-100 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            
            <div className={`flex items-center space-x-1 p-1 rounded-full border transition-all ${isScrolled ? 'border-slate-200 bg-slate-100' : 'border-white/20 bg-white/10'}`}>
              <button 
                onClick={() => onLangChange('es')}
                className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all ${lang === 'es' ? 'bg-blue-600 text-white shadow-sm' : (isScrolled ? 'text-slate-500 hover:text-blue-600' : 'text-white/70 hover:text-white')}`}
              >
                ES
              </button>
              <button 
                onClick={() => onLangChange('en')}
                className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-sm' : (isScrolled ? 'text-slate-500 hover:text-blue-600' : 'text-white/70 hover:text-white')}`}
              >
                EN
              </button>
            </div>

            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg">
              {content.cta}
            </a>
          </nav>

          <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark text-slate-900' : 'fa-bars ' + (isScrolled ? 'text-slate-900' : 'text-white')}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-slate-100 py-6 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-600 font-semibold hover:text-blue-600 py-3 border-b border-slate-50"
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-center space-x-6 py-4 border-b border-slate-50">
             <button onClick={() => { onLangChange('es'); setIsMenuOpen(false); }} className={`font-bold ${lang === 'es' ? 'text-blue-600' : 'text-slate-400'}`}>ES</button>
             <button onClick={() => { onLangChange('en'); setIsMenuOpen(false); }} className={`font-bold ${lang === 'en' ? 'text-blue-600' : 'text-slate-400'}`}>EN</button>
          </div>
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="bg-blue-600 text-white px-6 py-4 rounded-xl text-center font-bold"
          >
            {content.cta}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
