import React, { useState } from 'react';
import { Check, Copy, Activity } from 'lucide-react';
import CodeBlock from './CodeBlock';

export const MacWindowCode: React.FC<{
    code: string;
    fileName: string;
    label?: string;
    className?: string;
}> = ({ code, fileName, label, className = '' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 relative flex flex-col ${className}`}>
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs text-slate-400 font-mono">{fileName}</span>
                </div>
                <div className="flex items-center gap-3">
                    {label && (
                        <div className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20">
                            {label}
                        </div>
                    )}
                    <button 
                        onClick={handleCopy}
                        className="text-slate-500 hover:text-white transition-colors"
                        title="Copy code"
                    >
                        {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                    </button>
                </div>
            </div>
            
            <div className="flex-1 overflow-hidden relative group">
                <CodeBlock 
                    code={code} 
                    hideHeader={true}
                    className="h-full border-none bg-transparent !shadow-none"
                />
                <Activity className="absolute bottom-6 right-6 text-slate-800/50 w-24 h-24 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </div>
    );
};
