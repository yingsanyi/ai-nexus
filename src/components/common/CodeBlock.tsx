import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
  fullHeight?: boolean;
  autoHeight?: boolean;
  hideHeader?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'python', 
  title, 
  className = '', 
  fullHeight = false, 
  autoHeight = false,
  hideHeader = false
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative group rounded-xl overflow-hidden shadow-lg bg-[#1e1e1e] border border-slate-700/50 text-left flex flex-col ${className}`}>
      {!hideHeader && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-white/5 shrink-0">
          <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="ml-2 text-xs text-slate-400 font-mono lowercase">{title || language}</span>
          </div>
          <button 
              onClick={handleCopy}
              className="text-slate-400 hover:text-white transition-colors"
              title="Copy code"
          >
              {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <div className={`overflow-auto custom-scrollbar ${fullHeight ? 'flex-1 min-h-0' : (autoHeight ? '' : 'max-h-[300px]')}`}>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
          }}
          codeTagProps={{
            style: { fontFamily: 'inherit' }
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
