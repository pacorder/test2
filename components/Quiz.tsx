
import React, { useState } from 'react';
import { Question, SiteContent } from '../types';

interface QuizProps {
  questions: Question[];
  content: SiteContent['exam'];
}

const Quiz: React.FC<QuizProps> = ({ questions, content }) => {
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const startQuiz = () => {
    setCurrentIdx(0);
    setUserAnswers({});
    setShowResults(false);
  };

  const handleAnswer = (optionIdx: number) => {
    if (currentIdx === null) return;
    const qId = questions[currentIdx].id;
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const nextQuestion = () => {
    if (currentIdx === null) return;
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResults(true);
      setCurrentIdx(null);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
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
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {content.categories.map(cat => (
              <span key={cat} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[32px] shadow-xl border border-slate-100 p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
          {currentIdx === null && !showResults && (
            <div className="text-center">
              <i className="fa-solid fa-graduation-cap text-6xl text-blue-600 mb-6"></i>
              <h3 className="text-2xl font-bold mb-8 text-slate-800">¿Listo para poner a prueba tus conocimientos?</h3>
              <button 
                onClick={startQuiz}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg"
              >
                {content.startBtn}
              </button>
            </div>
          )}

          {currentIdx !== null && (
            <div className="animate-fade-in">
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                  Pregunta {currentIdx + 1} de {questions.length}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-xs font-bold">
                  {questions[currentIdx].category}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-relaxed">
                {questions[currentIdx].text}
              </h3>
              <div className="space-y-4 mb-10">
                {questions[currentIdx].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all font-semibold ${userAnswers[questions[currentIdx].id] === i ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50 text-slate-600'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${userAnswers[questions[currentIdx].id] === i ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={nextQuestion}
                  disabled={userAnswers[questions[currentIdx].id] === undefined}
                  className="bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-bold py-4 px-8 rounded-xl transition-all"
                >
                  {currentIdx === questions.length - 1 ? content.finishBtn : content.nextBtn}
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
                {calculateScore()} / {questions.length}
              </div>
              <p className="text-slate-500 mb-10 max-w-sm mx-auto">
                {calculateScore() === questions.length ? "¡Excelente! Estás listo para el PMP." : "Buen intento. Sigue repasando los dominios del PMBOK 8."}
              </p>
              <button 
                onClick={startQuiz}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all"
              >
                Reintentar Simulacro
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
