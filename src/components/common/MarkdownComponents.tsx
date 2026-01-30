import React, { useState } from 'react';
import { Check, Copy, AlertTriangle, Lightbulb, Info, Flame, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import CodeBlock from './CodeBlock';

// --- 1. Interactive Quiz Component ---
interface QuizData {
  question: string;
  options: string[];
  answer: number; // Index of correct answer
  explanation?: string;
}

export const QuizBlock: React.FC<{ content: string }> = ({ content }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  let quizData: QuizData;
  try {
    quizData = JSON.parse(content);
  } catch (e) {
    return <div className="text-red-500 bg-red-50 p-4 rounded">Error parsing quiz data</div>;
  }

  const isCorrect = selected === quizData.answer;

  return (
    <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/40 dark:shadow-black/40">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 flex items-center gap-2 text-white">
        <HelpCircle size={20} />
        <span className="font-bold tracking-wide text-sm uppercase">随堂测验</span>
      </div>
      
      <div className="p-6">
        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 leading-relaxed">
          {quizData.question}
        </h4>

        <div className="space-y-3">
          {quizData.options.map((option, idx) => {
            let itemClass = "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ";
            
            if (isSubmitted) {
              if (idx === quizData.answer) {
                itemClass += "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-400";
              } else if (idx === selected && idx !== quizData.answer) {
                itemClass += "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400";
              } else {
                itemClass += "bg-slate-50 dark:bg-slate-900/50 border-transparent opacity-50";
              }
            } else {
              if (selected === idx) {
                itemClass += "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 text-indigo-700 dark:text-indigo-300 shadow-md ring-1 ring-indigo-500/20";
              } else {
                itemClass += "bg-slate-50 dark:bg-slate-900/50 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => !isSubmitted && setSelected(idx)}
                disabled={isSubmitted}
                className={itemClass}
              >
                <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold transition-colors ${
                        selected === idx || (isSubmitted && idx === quizData.answer) 
                        ? 'border-current bg-current text-white' 
                        : 'border-slate-300 dark:border-slate-600 text-slate-400'
                    }`}>
                        {String.fromCharCode(65 + idx)}
                    </div>
                    <span>{option}</span>
                </div>
                {isSubmitted && idx === quizData.answer && <CheckCircle2 size={20} />}
                {isSubmitted && idx === selected && idx !== quizData.answer && <XCircle size={20} />}
              </button>
            );
          })}
        </div>

        {!isSubmitted ? (
          <div className="mt-6 flex justify-end">
             <button
                onClick={() => setIsSubmitted(true)}
                disabled={selected === null}
                className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all"
             >
                提交答案
             </button>
          </div>
        ) : (
          <div className={`mt-6 p-4 rounded-xl text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 ${
              isCorrect ? 'bg-green-50 dark:bg-green-900/10 text-green-800 dark:text-green-300' : 'bg-red-50 dark:bg-red-900/10 text-red-800 dark:text-red-300'
          }`}>
              <div className="font-bold mb-1 flex items-center gap-2">
                  {isCorrect ? '🎉 回答正确！' : '🤔 再接再厉'}
              </div>
              {quizData.explanation}
          </div>
        )}
      </div>
    </div>
  );
};

// --- 2. Enhanced Code Block ---
export const CustomCodeBlock: React.FC<any> = ({ node, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  const lang = match ? match[1] : '';
  const content = String(children).replace(/\n$/, '');

  // Detect Special "Quiz" Block
  if (lang === 'quiz') {
      return <QuizBlock content={content} />;
  }

  // Inline Code
  if (!match) {
     return <code className="bg-slate-100 dark:bg-slate-800 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded font-mono text-sm" {...props}>{children}</code>;
  }

  // Block Code with Syntax Highlighting
  return (
    <div className="my-6">
      <CodeBlock 
        code={content} 
        language={lang} 
        autoHeight={true}
      />
    </div>
  );
};

// --- 3. Enhanced Callouts (Blockquotes) ---
export const CustomBlockquote: React.FC<any> = ({ children }) => {
  // Extract text content to check for callout tags
  const getBlockContent = (nodes: any): string => {
      if (typeof nodes === 'string') return nodes;
      if (Array.isArray(nodes)) return nodes.map(getBlockContent).join('');
      if (nodes?.props?.children) return getBlockContent(nodes.props.children);
      return '';
  };

  const text = getBlockContent(children);
  
  // Define Callout Types
  const types = {
    '[!TIP]': { color: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-800 dark:text-emerald-200', icon: <Lightbulb size={20} className="text-emerald-500" />, title: 'TIP' },
    '[!NOTE]': { color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-800 dark:text-blue-200', icon: <Info size={20} className="text-blue-500" />, title: 'NOTE' },
    '[!WARNING]': { color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-500 text-amber-800 dark:text-amber-200', icon: <AlertTriangle size={20} className="text-amber-500" />, title: 'WARNING' },
    '[!DANGER]': { color: 'bg-rose-50 dark:bg-rose-900/20 border-rose-500 text-rose-800 dark:text-rose-200', icon: <Flame size={20} className="text-rose-500" />, title: 'DANGER' },
  };

  let matchType = null;
  let cleanChildren = children;

  for (const [tag, config] of Object.entries(types)) {
    if (text.trim().startsWith(tag)) {
        matchType = config;
        // We need to visually remove the [!TAG] from the first paragraph if possible
        // This is a bit of a hack since we are dealing with React nodes.
        // For simplicity, we wrap the original children but apply the style.
        // A cleaner implementation involves deep filtering, but CSS hiding works for visual polish.
        break;
    }
  }

  if (matchType) {
      return (
          <div className={`my-6 rounded-r-xl rounded-l-md border-l-4 p-4 ${matchType.color} shadow-sm`}>
              <div className="flex items-center gap-2 font-bold mb-2 select-none opacity-80">
                  {matchType.icon}
                  <span className="text-xs tracking-wider">{matchType.title}</span>
              </div>
              <div className="prose prose-sm dark:prose-invert max-w-none [&>p]:first-letter:hidden [&>p]:before:hidden">
                   {/* Hacky way to hide the [!TAG] text via CSS logic if needed, or just render children */}
                   {children}
              </div>
          </div>
      );
  }

  // Default Blockquote
  return (
    <blockquote className="border-l-4 border-slate-300 dark:border-slate-700 pl-4 py-1 my-4 text-slate-600 dark:text-slate-400 italic">
      {children}
    </blockquote>
  );
};
