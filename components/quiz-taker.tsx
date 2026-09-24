'use client';

import { useMemo, useState } from 'react';

type Question = {
  id: string;
  prompt: string;
  explanation: string;
  source: string;
  options: { id: string; text: string; isCorrect: boolean }[];
};

type QuizTakerProps = {
  title: string;
  questions: Question[];
};

export function QuizTaker({ title, questions }: QuizTakerProps) {
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let total = 0;
    questions.forEach((question) => {
      const picked = selected[question.id];
      const correct = question.options.find((option) => option.isCorrect)?.id;
      if (picked && picked === correct) total += 1;
    });
    return total;
  }, [questions, selected]);

  const percent = Math.round((score / questions.length) * 100);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {questions.length} questions
          </span>
        </div>
      </div>

      {questions.map((question, index) => {
        const answer = selected[question.id];
        const correctOptionId = question.options.find((option) => option.isCorrect)?.id;

        return (
          <div key={question.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-slate-500">
              Question {index + 1}
            </p>
            <h3 className="mb-5 text-lg font-semibold text-slate-900">{question.prompt}</h3>

            <div className="space-y-3">
              {question.options.map((option) => {
                const isSelected = answer === option.id;
                const showCorrect = submitted && option.isCorrect;
                const showIncorrect = submitted && isSelected && !option.isCorrect;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelected((prev) => ({ ...prev, [question.id]: option.id }))}
                    className={[
                      'flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition',
                      isSelected ? 'border-brand-500 bg-brand-50' : 'border-slate-200 bg-slate-50 hover:border-slate-300',
                      showCorrect ? 'border-green-500 bg-green-50' : '',
                      showIncorrect ? 'border-red-500 bg-red-50' : ''
                    ].join(' ')}
                  >
                    <span className="text-sm font-medium text-slate-700">{option.text}</span>
                    {submitted && option.isCorrect && <span className="text-xs font-bold text-green-700">Correct</span>}
                    {submitted && isSelected && !option.isCorrect && <span className="text-xs font-bold text-red-700">Your answer</span>}
                  </button>
                );
              })}
            </div>

            {submitted && (
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-1 text-sm font-semibold text-slate-800">Explanation</p>
                <p className="mb-2 text-sm text-slate-600">{question.explanation}</p>
                <p className="text-xs text-slate-500">Reference: {question.source}</p>
                <p className="mt-2 text-xs font-medium text-slate-600">
                  {correctOptionId === answer ? 'You selected the correct answer.' : `Correct answer: ${question.options.find((o) => o.isCorrect)?.text}`}
                </p>
              </div>
            )}
          </div>
        );
      })}

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        {!submitted ? (
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="inline-flex rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Submit answers
          </button>
        ) : (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-500">Your score</p>
              <p className="text-2xl font-bold text-slate-900">{score}/{questions.length}</p>
            </div>
            <div className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">{percent}%</div>
          </div>
        )}
      </div>
    </div>
  );
}
