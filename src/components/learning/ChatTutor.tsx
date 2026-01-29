import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, Settings, Key, Save, Trash2, X, Copy, Check } from 'lucide-react';
import { ChatMessage } from '../../types';
import { sendMessageStream, initGemini, setCustomApiKey, getCustomApiKey } from '../../services/geminiService';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface ChatTutorProps {
  externalTrigger?: string | null;
  onTriggerHandled?: () => void;
}

type TeachingStyle = 'normal' | 'socratic' | 'humorous';

const ChatTutor: React.FC<ChatTutorProps> = ({ externalTrigger, onTriggerHandled }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: '你好！我是智核助手。关于本课程有什么不明白的地方，或者想深入了解某个概念吗？' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [teachingStyle, setTeachingStyle] = useState<TeachingStyle>('normal');

  // Settings State
  const [showSettings, setShowSettings] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [hasCustomKey, setHasCustomKey] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Use ref for auto-scroll state to avoid stale closures in event handlers
  const shouldAutoScrollRef = useRef(true);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  // Scroll Handler: Detect if user has manually scrolled up
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      // If we are very close to bottom (< 50px), we consider it "at bottom"
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;

      // Only change the ref if we are NOT currently auto-scrolling (to avoid fighting)
      // Actually, we just want to know: "Did the user scroll away?"
      if (!isAtBottom) {
        shouldAutoScrollRef.current = false;
      } else {
        shouldAutoScrollRef.current = true;
      }
    }
  };

  // Intelligent Scroll Logic
  useLayoutEffect(() => {
    const lastMsg = messages[messages.length - 1];

    // 1. User just sent a message: Force scroll to bottom smoothly
    if (lastMsg?.role === 'user') {
      shouldAutoScrollRef.current = true;
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // 2. AI is typing/streaming: Stick to bottom if user hasn't scrolled up
    if (isLoading) {
      if (shouldAutoScrollRef.current && scrollContainerRef.current) {
        // Use direct DOM manipulation for instant, jitter-free scrolling during high-frequency updates
        scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
      }
    }
  }, [messages, isLoading]);

  useEffect(() => {
    initGemini();
    const storedKey = getCustomApiKey();
    if (storedKey) {
      setApiKeyInput(storedKey);
      setHasCustomKey(true);
    }
  }, []);

  useEffect(() => {
    if (externalTrigger) {
      handleSend(externalTrigger);
      if (onTriggerHandled) {
        onTriggerHandled();
      }
    }
  }, [externalTrigger, onTriggerHandled]);

  const handleSaveKey = () => {
    if (apiKeyInput.trim()) {
      setCustomApiKey(apiKeyInput.trim());
      setHasCustomKey(true);
      setShowSettings(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: 'API Key 已更新，会话已重置。我们可以继续了！'
      }]);
    }
  };

  const handleClearKey = () => {
    setCustomApiKey(null);
    setApiKeyInput('');
    setHasCustomKey(false);
  };

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    if (!textOverride) {
      setInput('');
    }

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend
    };

    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);
    shouldAutoScrollRef.current = true; // Reset auto-scroll on new send

    const modelMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: '', isStreaming: true }]);

    let promptToSend = textToSend;
    if (teachingStyle === 'socratic') {
      promptToSend = `[指令：请使用苏格拉底教学法。不要直接给出完整答案，而是通过提问引导用户思考。]\n${textToSend}`;
    } else if (teachingStyle === 'humorous') {
      promptToSend = `[指令：请使用幽默风趣的语气。多使用比喻、网络热梗或生动的类比来解释。]\n${textToSend}`;
    }

    try {
      const stream = await sendMessageStream(promptToSend);
      let fullText = '';

      for await (const chunk of stream) {
        const c = chunk;
        const text = c.text;

        if (text) {
          fullText += text;
          setMessages(prev => prev.map(m =>
            m.id === modelMsgId ? { ...m, text: fullText } : m
          ));
        }
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => prev.map(m =>
        m.id === modelMsgId ? { ...m, text: "抱歉，连接到智核网络时出现错误。请检查您的 API Key 配置或网络连接。" } : m
      ));
    } finally {
      setIsLoading(false);
      setMessages(prev => prev.map(m =>
        m.id === modelMsgId ? { ...m, isStreaming: false } : m
      ));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    "给我一个代码示例",
    "现实生活中的应用场景",
    "总结本节核心要点",
    "下一步该学什么？"
  ];

  const markdownComponents = {
    code: ({ node, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '')
      return !String(children).includes('\n') ? (
        <code className={`${className} bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-xs font-mono text-pink-600 dark:text-pink-400`} {...props}>
          {children}
        </code>
      ) : (
        <div className="relative group my-2">
          <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="px-2 py-1 bg-slate-700 text-white text-[10px] rounded">
              {match?.[1] || 'code'}
            </div>
          </div>
          <code className={`block bg-slate-900 text-slate-50 p-3 rounded-lg text-xs overflow-x-auto font-mono custom-scrollbar border border-slate-700`} {...props}>
            {children}
          </code>
        </div>
      )
    },
    table: ({ children }: any) => (
      <div className="overflow-x-auto my-3 rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700 text-sm">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }: any) => <thead className="bg-slate-50 dark:bg-slate-800">{children}</thead>,
    th: ({ children }: any) => <th className="px-3 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{children}</th>,
    td: ({ children }: any) => <td className="px-3 py-2 whitespace-nowrap border-t border-slate-100 dark:border-slate-700/50">{children}</td>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-cyan-500 pl-3 italic text-slate-500 dark:text-slate-400 my-2 bg-slate-50 dark:bg-slate-800/50 py-1 rounded-r">
        {children}
      </blockquote>
    )
  };

  return (
    // Root: Absolute inset-0 forces this component to take exactly the available space in parent
    <div className="absolute inset-0 flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">

      {/* 1. Header - Fixed Height */}
      <div className="shrink-0 h-14 px-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-30">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">AI 助教</h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative group">
            <select
              value={teachingStyle}
              onChange={(e) => setTeachingStyle(e.target.value as TeachingStyle)}
              className="appearance-none bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 py-1.5 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <option value="normal">🎓 严谨导师</option>
              <option value="socratic">🤔 苏格拉底</option>
              <option value="humorous">😄 幽默风趣</option>
            </select>
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </div>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`p-1.5 rounded-lg transition-colors ${showSettings ? 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            title="配置 API Key"
          >
            <Settings size={16} />
          </button>
        </div>
      </div>

      {/* Settings Overlay */}
      {showSettings && (
        <div className="absolute inset-x-0 top-14 z-50 p-4 animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-4 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <Key size={16} className="text-cyan-500" />
                  API Key 配置
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  输入您自己的 Google Gemini API Key。
                </p>
              </div>
              <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <X size={16} />
              </button>
            </div>

            <div className="relative">
              <input
                type="password"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="sk-..."
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg py-2 pl-3 pr-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 font-mono"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSaveKey}
                className="flex-1 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white py-2 rounded-lg text-xs font-bold transition-colors shadow-sm"
              >
                <Save size={14} /> 保存配置
              </button>
              {hasCustomKey && (
                <button
                  onClick={handleClearKey}
                  className="px-3 flex items-center justify-center bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 hover:bg-rose-100 dark:hover:bg-rose-900/40 rounded-lg transition-colors"
                  title="清除自定义 Key"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. Messages - Flexible Height (Flex-1) */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto min-h-0 p-4 space-y-6 custom-scrollbar scroll-smooth bg-slate-50/50 dark:bg-slate-900/50 overscroll-contain"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm border ${msg.role === 'user'
              ? 'bg-indigo-600 border-indigo-500 text-white'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-cyan-600 dark:text-cyan-400'
              }`}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>

            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${msg.role === 'user'
              ? 'bg-indigo-600 text-white rounded-tr-none'
              : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-none'
              }`}>
              {msg.role === 'model' && msg.text === '' && msg.isStreaming ? (
                <span className="flex gap-1 h-5 items-center px-1">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-200"></span>
                </span>
              ) : (
                <div className="prose prose-sm dark:prose-invert max-w-none prose-p:mb-2 prose-p:last:mb-0 break-words">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={markdownComponents}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        ))}
        {/* Invisible anchor for scrolling */}
        <div ref={messagesEndRef} className="h-px w-full" />
      </div>

      {/* 3. Input Area - Fixed Height (Shrink-0) */}
      <div className="shrink-0 p-3 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 z-20 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.3)]">

        {/* Quick Action Chips */}
        <div className="flex gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar mask-gradient-right">
          {quickActions.map((action, i) => (
            <button
              key={i}
              onClick={() => handleSend(action)}
              disabled={isLoading}
              className="whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-300 text-xs border border-slate-200 dark:border-slate-700 hover:border-cyan-200 dark:hover:border-cyan-800 transition-all shadow-sm"
            >
              {action}
            </button>
          ))}
        </div>

        <div className="relative group bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl flex items-end transition-all focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/20">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              teachingStyle === 'socratic' ? "准备好接受挑战了吗？输入回答..." :
                teachingStyle === 'humorous' ? "聊点什么有趣的？..." :
                  "询问关于本节的问题..."
            }
            rows={1}
            className="w-full bg-transparent border-none focus:ring-0 py-3 pl-4 pr-12 text-sm resize-none max-h-[150px] custom-scrollbar text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 leading-relaxed"
            disabled={isLoading}
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 bottom-1.5 p-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-cyan-600/20 hover:scale-105 active:scale-95"
          >
            {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatTutor;