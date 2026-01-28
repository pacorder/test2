
import React from 'react';
import { SiteContent } from '../types';

interface ComparisonProps {
  content: SiteContent['comparison'];
}

const Comparison: React.FC<ComparisonProps> = ({ content }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{content.title}</h2>
          <p className="text-slate-600 text-lg">{content.desc}</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-5 text-sm font-bold text-slate-500 uppercase tracking-wider">{content.thPillar}</th>
                <th className="px-6 py-5 text-sm font-bold text-slate-500 uppercase tracking-wider hidden sm:table-cell">{content.thTrad}</th>
                <th className="px-6 py-5 text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50/50">{content.thLean}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {content.rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-6 font-semibold text-slate-700">{row.feature}</td>
                  <td className="px-6 py-6 text-slate-500 hidden sm:table-cell">{row.traditional}</td>
                  <td className="px-6 py-6 font-bold text-blue-700 bg-blue-50/30">
                    <div className="flex items-center space-x-2">
                      <i className="fa-solid fa-circle-check text-emerald-500"></i>
                      <span>{row.leanEngineering}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-8 bg-blue-600 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-blue-500/20">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">{content.ctaTitle}</h3>
            <p className="opacity-90">{content.ctaDesc}</p>
          </div>
          <a href="#contact" className="bg-white text-blue-700 hover:bg-slate-100 font-bold px-8 py-4 rounded-2xl transition-all shadow-lg text-lg">
            {content.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
