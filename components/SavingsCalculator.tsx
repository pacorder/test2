
import React, { useState } from 'react';
import { SiteContent } from '../types';

interface SavingsCalculatorProps {
  content: SiteContent['calc'];
}

const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ content }) => {
  // capex in thousands (e.g., 1000 = $1,000,000)
  const [capexThousands, setCapexThousands] = useState<number>(1000);
  const [complexity, setComplexity] = useState<number>(1); // 1 = Simple, 2 = Mid, 3 = Complex

  const estimatedSavingsMin = capexThousands * 0.10;
  const estimatedSavingsMax = capexThousands * 0.25;
  const typicalOurFee = complexity * 15; // in thousands
  const netSavings = (estimatedSavingsMin + estimatedSavingsMax) / 2 - typicalOurFee;

  return (
    <section id="calculator" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{content.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">{content.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm">
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-300 mb-3">{content.labelBudget}</label>
              <input 
                type="range" 
                min="100" 
                max="50000" 
                step="100"
                value={capexThousands}
                onChange={(e) => setCapexThousands(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between mt-2 text-sm text-slate-400">
                <span>$100k</span>
                <div className="text-center">
                  <span className="text-blue-400 font-bold text-lg technical-font block">
                    ${capexThousands.toLocaleString()}k
                  </span>
                  <span className="text-[10px] opacity-50 uppercase">USD</span>
                </div>
                <span>$50M</span>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-300 mb-3">{content.labelComplexity}</label>
              <div className="grid grid-cols-3 gap-3">
                {content.complexities.map((label, idx) => (
                  <button
                    key={idx}
                    onClick={() => setComplexity(idx + 1)}
                    className={`py-3 rounded-xl text-sm font-bold transition-all border ${complexity === idx + 1 ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/40' : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            
            <p className="text-xs text-slate-500 italic">{content.note}</p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-3xl border border-white/10 shadow-inner">
              <h3 className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-2">{content.resultTitle}</h3>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl md:text-5xl font-black text-emerald-400 technical-font">
                  ${Math.round(estimatedSavingsMin).toLocaleString()}k
                </span>
                <span className="text-slate-400">to</span>
                <span className="text-4xl md:text-5xl font-black text-emerald-400 technical-font">
                  ${Math.round(estimatedSavingsMax).toLocaleString()}k
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="text-slate-400 text-xs block mb-1 uppercase font-bold">{content.labelFee}</span>
                <span className="text-xl font-bold technical-font text-blue-300">~${typicalOurFee.toLocaleString()}k</span>
              </div>
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="text-slate-400 text-xs block mb-1 uppercase font-bold">{content.labelRoi}</span>
                <span className="text-xl font-bold technical-font text-blue-300">{(netSavings / typicalOurFee).toFixed(1)}x</span>
              </div>
            </div>

            <div className="pt-4">
              <a href="#contact" className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 rounded-2xl transition-all shadow-xl hover:scale-[1.02] flex items-center justify-center space-x-2 no-underline">
                <span>{content.btn}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
