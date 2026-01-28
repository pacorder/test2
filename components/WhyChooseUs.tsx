
import React from 'react';
import { SiteContent } from '../types';

interface WhyChooseUsProps {
  content: SiteContent['whyChoose'];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ content }) => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Text & Features */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              {content.title}
            </h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              {content.description}
            </p>

            <div className="space-y-8 mb-12">
              {content.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-check text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-slate-500 italic text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg text-center self-start"
            >
              {content.cta}
            </a>
          </div>

          {/* Right Side: Grid of Value Cards */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
            {content.cards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group flex flex-col"
              >
                <div className="mb-6">
                  <span className="text-4xl font-black text-blue-600 block mb-1">
                    {card.highlight}
                  </span>
                  <span className="text-[10px] font-extrabold tracking-[0.2em] text-slate-400 uppercase">
                    {card.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
