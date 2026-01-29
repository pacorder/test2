
import React, { useState, useMemo } from 'react';
import { Question, SiteContent } from '../types';

interface QuizProps {
  questions: Question[];
  content: SiteContent['exam'];
}

const Quiz: React.FC<QuizProps> = ({ questions, content }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | 'All'>('All');
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'All') {
      // Return 20 random questions or all? Let's do all but shuffle them
      return [...questions].sort(() => Math.random() - 0.5);
    }
    return questions.filter(q => q.category === selectedCategory);
  }, [questions, selectedCategory]);

  const startQuiz = () => {
    setCurrentIdx(0);
    setUserAnswers({});
    setShowResults(false);
  };

  const handleAnswer = (optionIdx: number) => {
    if (currentIdx === null) return;
    const qId = filteredQuestions[currentIdx].id;
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const nextQuestion = () => {
    if (currentIdx === null) return;
    if (currentIdx < filteredQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResults(true);
      setCurrentIdx(null);
    }
  };

  const calculateScore = () => {
    let score = 0;
    filteredQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  return (
    <section id="exam" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{content.title}</h2>
          <p className="text-slate-600">{content.desc}</p>
        </div>

        <div className="bg-white rounded-[32px] shadow-xl border border-slate-100 p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
          {currentIdx === null && !showResults && (
            <div className="text-center">
              <i className="fa-solid fa-graduation-cap text-6xl text-blue-600 mb-6"></i>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Selecciona un área de estudio</h3>
              
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className={`px-4 py-2 rounded-xl border-2 font-bold transition-all ${selectedCategory === 'All' ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white border-slate-100 text-slate-500 hover:border-blue-200'}`}
                >
                  Examen Completo (90 q)
                </button>
                {content.categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl border-2 font-bold transition-all ${selectedCategory === cat ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white border-slate-100 text-slate-500 hover:border-blue-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <button 
                onClick={startQuiz}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-12 rounded-2xl transition-all shadow-xl transform hover:-translate-y-1"
              >
                {content.startBtn}
              </button>
              <p className="mt-4 text-xs text-slate-400">Preguntas disponibles en esta sesión: {filteredQuestions.length}</p>
            </div>
          )}

          {currentIdx !== null && (
            <div className="animate-fade-in">
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                  Pregunta {currentIdx + 1} de {filteredQuestions.length}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-xs font-bold">
                  {filteredQuestions[currentIdx].category}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-relaxed">
                {filteredQuestions[currentIdx].text}
              </h3>
              <div className="space-y-4 mb-10">
                {filteredQuestions[currentIdx].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all font-semibold ${userAnswers[filteredQuestions[currentIdx].id] === i ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50 text-slate-600'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${userAnswers[filteredQuestions[currentIdx].id] === i ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex justify-between items-center">
                 <button 
                  onClick={() => { setCurrentIdx(null); setSelectedCategory('All'); }}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                >
                  <i className="fa-solid fa-arrow-left mr-2"></i> Abandonar
                </button>
                <button 
                  onClick={nextQuestion}
                  disabled={userAnswers[filteredQuestions[currentIdx].id] === undefined}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg"
                >
                  {currentIdx === filteredQuestions.length - 1 ? content.finishBtn : content.nextBtn}
                </button>
              </div>
            </div>
          )}

          {showResults && (
            <div className="text-center animate-fade-in">
              <div className="inline-block p-6 rounded-full bg-emerald-50 text-emerald-600 mb-6">
                <i className="fa-solid fa-trophy text-5xl"></i>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-2">{content.scoreTitle}</h3>
              <div className="text-6xl font-black text-blue-600 mb-8">
                {calculateScore()} / {filteredQuestions.length}
              </div>
              
              <div className="max-w-md mx-auto mb-10 text-left bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-700 mb-4">Análisis por categorías:</h4>
                <div className="space-y-3">
                  {Array.from(new Set(filteredQuestions.map(q => q.category))).map(cat => {
                    const total = filteredQuestions.filter(q => q.category === cat).length;
                    const correct = filteredQuestions.filter(q => q.category === cat && userAnswers[q.id] === q.correctAnswer).length;
                    const percent = Math.round((correct / total) * 100);
                    return (
                      <div key={cat} className="flex flex-col">
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span>{cat}</span>
                          <span>{percent}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div className={`h-full transition-all ${percent > 70 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${percent}%` }}></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <button 
                onClick={() => { setShowResults(false); setCurrentIdx(null); }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl"
              >
                Volver al Menú
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
