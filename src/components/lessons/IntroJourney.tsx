import React from 'react';
import { Target, Brain, Code, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Layers, Box, Database, Shield, Zap, BookOpen, Lightbulb } from 'lucide-react';

interface SectionProps {
  onNext?: () => void;
  isPresentation?: boolean;
}

// --- 1. Hero Section (Fits on one slide) ---
export const IntroHero: React.FC<SectionProps> = ({ onNext, isPresentation }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl isolate flex flex-col justify-center ${isPresentation ? 'h-full w-full max-w-6xl mx-auto' : 'min-h-[500px]'}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-slate-900 opacity-90 z-0"></div>
    <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"></div>
    
    <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Brain size={14} />
                <span>Module 00: Orientation</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                开启你的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">AI 之旅</span>
            </h1>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-xl">
                欢迎来到人工智能（AI）的世界。在敲下第一行代码之前，我们需要先调整一下“导航仪”。
                学习 AI 不仅仅是掌握工具，更是掌握一种全新的<strong>解决问题的范式</strong>。
            </p>
            
            <div className="flex flex-col gap-4 mt-4">
                 <p className="text-indigo-200/80 text-sm">
                    看看我们将要去哪里，背包里需要带什么，以及路上会遇到什么样的风景和挑战。
                 </p>
                {!isPresentation && (
                    <button 
                        onClick={onNext}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-900 hover:bg-cyan-50 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-black/20 self-start"
                    >
                        开始探索
                        <ArrowRight size={18} />
                    </button>
                )}
            </div>
        </div>
        
        <div className="flex-1 w-full max-w-sm relative hidden md:block">
             <div className="relative aspect-square">
                 <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl transform rotate-6 scale-90 backdrop-blur-sm z-10 flex items-center justify-center">
                    <Code size={64} className="text-white/20" />
                 </div>
                 <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-2xl transform -rotate-3 scale-95 backdrop-blur-md z-20 flex items-center justify-center">
                    <Layers size={64} className="text-white/30" />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 border border-white/30 rounded-2xl shadow-xl z-30 flex flex-col items-center justify-center p-6 text-center backdrop-blur-xl">
                    <Brain size={64} className="text-cyan-300 mb-4 drop-shadow-[0_0_15px_rgba(103,232,249,0.5)]" />
                    <div className="font-bold text-xl">Thinking in AI</div>
                    <div className="text-white/70 text-sm mt-2">Data + Goal = Rules</div>
                 </div>
             </div>
        </div>
    </div>
  </div>
);

// --- 2. Why AI (Split into 2 parts) ---

const WhyAI_Part1 = () => (
    <>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-lg">
                <Target size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">0.1 我们为什么学 AI？</h2>
        </div>
        
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            AI 不仅仅是为了追逐热点，它代表了计算模式的根本转变。
        </p>

        <div className="space-y-6 mb-8">
             <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-xl">
                 <div className="flex items-center gap-2 font-bold text-blue-700 dark:text-blue-300 mb-2">
                     <Lightbulb size={18} />
                     <span>Paradigm Shift (范式转移)</span>
                 </div>
                 <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    传统的 <strong>Software 1.0</strong> 是你告诉电脑“怎么做”；而 <strong>Software 2.0 (AI)</strong> 是你告诉电脑“想要什么”，让它自己学会怎么做。
                 </p>
             </div>

             <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-sm">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                        <Database size={18} className="text-purple-500"/> 解锁非结构化数据
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        传统的程序擅长处理表格（Excel），而 AI 赋予了计算机“看”（CV）、“听”（Audio）、“读”（NLP）的能力。
                    </p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-sm">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                        <Shield size={18} className="text-green-500"/> 职业护城河
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        无论你是做后端、前端还是传统科研，掌握 AI 都能为你现有的工作流赋能，从自动化脚本到决策辅助。
                    </p>
                </div>
             </div>
        </div>
    </>
);

const WhyAI_Part2 = () => (
    <div className="grid md:grid-cols-2 gap-8 w-full">
      <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 transition-all hover:shadow-xl relative overflow-hidden">
        <div className="relative z-10">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">The Old Way</div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Software 1.0</h3>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                程序员显式地编写规则（If-Else）。比如写一个垃圾邮件过滤器，你需要列出所有可能的敏感词。这很难穷尽。
            </p>

            <div className="p-3 bg-slate-50 dark:bg-black/50 rounded-xl border border-slate-100 dark:border-slate-800 font-mono text-xs text-slate-600 dark:text-slate-400">
                <span className="text-purple-500">if</span> email.contains(<span className="text-green-500">"buy"</span>):<br/>
                &nbsp;&nbsp;<span className="text-purple-500">return</span> <span className="text-blue-500">SPAM</span>
            </div>
        </div>
      </div>

      <div className="group bg-white dark:bg-slate-900 border border-cyan-200 dark:border-cyan-900/50 rounded-3xl p-6 transition-all hover:shadow-xl relative overflow-hidden ring-1 ring-cyan-100 dark:ring-cyan-900/30">
        <div className="relative z-10">
            <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">The New Way</div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Software 2.0</h3>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                程序员不再编写规则，而是<strong>定义目标</strong>并提供<strong>数据</strong>。你只需要给模型看 1 万封垃圾邮件，它就能自己学会分辨。
            </p>

            <div className="p-3 bg-cyan-50/50 dark:bg-cyan-900/10 rounded-xl border border-cyan-100 dark:border-cyan-900/30 font-mono text-xs text-slate-600 dark:text-slate-400">
                model = <span className="text-yellow-600 dark:text-yellow-400">train</span>(data, target)<br/>
                prediction = <span className="text-purple-500">model</span>(email)
            </div>
        </div>
      </div>
    </div>
);

// Combined Component for Web View
export const IntroWhyAI: React.FC<SectionProps> = () => (
    <section className="max-w-4xl mx-auto w-full">
        <WhyAI_Part1 />
        <WhyAI_Part2 />
    </section>
);

// Individual Components for Slides
export const IntroWhyAI_Slide1 = () => (
    <div className="h-full flex flex-col justify-center max-w-5xl mx-auto w-full">
        <WhyAI_Part1 />
    </div>
);
export const IntroWhyAI_Slide2 = () => (
    <div className="h-full flex flex-col justify-center max-w-5xl mx-auto w-full">
         <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Software 1.0 vs 2.0</h2>
        <WhyAI_Part2 />
    </div>
);

// --- 3. Skills (Split into 2 parts) ---

const Skills_Part1 = () => (
    <>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg">
                <Box size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">0.2 必备技能锦囊</h2>
        </div>
        
        <div className="mb-8">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                不要被“人工智能”这个词吓倒。对于大多数应用者来说，你不需要成为数学家。
            </p>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-xl">
                 <div className="flex items-center gap-2 font-bold text-amber-700 dark:text-amber-300 mb-2">
                     <AlertTriangle size={18} />
                     <span>学习建议</span>
                 </div>
                 <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    不要试图在一开始就搞懂所有推导！<strong>先看几何意义 (Geometric Intuition)</strong>，再看代码实现，最后才是数学证明。
                 </p>
            </div>
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-blue-500"/> 装备包 A：数学基础 (理论核心)
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">线性代数</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-2">数据容器：向量、矩阵、维度变换</p>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">计算机眼中的图片不是图，而是一个巨大的数字矩阵。</p>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">微积分</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-2">优化引擎：导数、梯度</p>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">训练模型的过程就像“下山”，梯度告诉我们往哪个方向走。</p>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">概率统计</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-2">不确定性：分布、期望</p>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">现实世界是充满噪声的，模型输出的永远是一个概率。</p>
                </div>
            </div>
        </div>
    </>
);

const Skills_Part2 = () => (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm w-full">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
            <Zap size={20} className="text-yellow-500"/> 装备包 B：编程基础 (工程核心)
        </h3>
        <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-4">
            <li className="flex flex-col gap-1 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div className="flex gap-2 font-bold text-slate-700 dark:text-slate-300">
                    <span>Python:</span>
                    <span className="font-normal text-slate-500">AI 领域的通用语</span>
                </div>
                <p className="text-xs text-slate-500">需熟练掌握列表推导式、类 (Class) 与对象、装饰器等中级特性。</p>
            </li>
            <li className="flex flex-col gap-1 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div className="flex gap-2 font-bold text-slate-700 dark:text-slate-300">
                    <span>NumPy / Pandas / Matplotlib:</span>
                    <span className="font-normal text-slate-500">科学计算与可视化</span>
                </div>
                <p className="text-xs text-slate-500">NumPy 处理多维数组；Pandas 清洗数据；Matplotlib 绘制图表。</p>
            </li>
            <li className="flex flex-col gap-1 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div className="flex gap-2 font-bold text-slate-700 dark:text-slate-300">
                    <span>Scikit-Learn:</span>
                    <span className="font-normal text-slate-500">传统机器学习工具箱</span>
                </div>
                <p className="text-xs text-slate-500">提供现成的算法实现（如决策树、SVM），是理解机器学习流程的最佳起点。</p>
            </li>
            <li className="flex flex-col gap-1 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div className="flex gap-2 font-bold text-slate-700 dark:text-slate-300">
                    <span>PyTorch:</span>
                    <span className="font-normal text-slate-500">像搭积木一样构建网络</span>
                </div>
                <p className="text-xs text-slate-500">目前学术界和工业界最流行的深度学习框架，如同乐高积木一样灵活。</p>
            </li>
        </ul>
    </div>
);

// Combined Component for Web View
export const IntroSkills: React.FC<SectionProps> = () => (
  <section className="max-w-4xl mx-auto w-full">
     <Skills_Part1 />
     <div className="h-6"></div>
     <Skills_Part2 />
  </section>
);

// Individual Components for Slides
export const IntroSkills_Slide1 = () => (
    <div className="h-full flex flex-col justify-center max-w-5xl mx-auto w-full">
        <Skills_Part1 />
    </div>
);
export const IntroSkills_Slide2 = () => (
    <div className="h-full flex flex-col justify-center max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">工程与工具栈</h2>
        <Skills_Part2 />
    </div>
);

// --- 4. Valley (Split into 2 parts) ---

const Valley_Part1 = () => (
    <>
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                <TrendingUp size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">0.3 达克效应学习曲线</h2>
        </div>
        
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            学习 AI 并不是一条直线向上的坦途，你将经历著名的“达克效应” (Dunning-Kruger Effect) 曲线。
        </p>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm mb-4 flex-1 min-h-[300px] md:min-h-[350px] flex items-center justify-center">
           <div className="aspect-[2/1] w-full relative h-full">
               <svg viewBox="0 0 800 350" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#f472b6" />
                      <stop offset="40%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                    </marker>
                  </defs>
                  
                  <line x1="50" y1="300" x2="750" y2="300" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="50" y1="300" x2="50" y2="20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <text x="750" y="320" className="fill-slate-500 text-xs font-bold">能力</text>
                  <text x="20" y="20" className="fill-slate-500 text-xs font-bold" writingMode="tb">自信</text>

                  <path 
                      d="M 50 250 Q 150 20 150 20 C 180 20 280 280 350 280 Q 550 280 750 80" 
                      fill="none" 
                      stroke="url(#lineGrad)" 
                      strokeWidth="6" 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="drop-shadow-lg"
                   />

                   <g className="group cursor-pointer">
                      <circle cx="150" cy="20" r="8" className="fill-white stroke-pink-500 stroke-4" />
                      <text x="150" y="-10" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-xs font-bold">蜜月期</text>
                   </g>

                   <g className="group cursor-pointer">
                      <circle cx="350" cy="280" r="8" className="fill-white stroke-red-500 stroke-4" />
                      <text x="350" y="310" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-xs font-bold">绝望之谷</text>
                   </g>

                   <g className="group cursor-pointer">
                      <circle cx="750" cy="80" r="8" className="fill-white stroke-green-500 stroke-4" />
                      <text x="750" y="50" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-xs font-bold">精通高原</text>
                   </g>
               </svg>
           </div>
        </div>
    </>
);

const Valley_Part2 = () => (
    <div className="grid md:grid-cols-2 gap-6 w-full">
         <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl hover:shadow-md transition-shadow">
                <h4 className="font-bold text-pink-500 text-sm mb-2">第一阶段：蜜月期 (愚昧之山)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    你跟着教程跑通了 Hello World 级别的 Demo（如手写数字识别），代码一运行，准确率 99%。心态：“AI 也不过如此嘛，简单！”
                </p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl hover:shadow-md transition-shadow">
                <h4 className="font-bold text-red-500 text-sm mb-2 flex items-center gap-2">
                    <AlertTriangle size={14}/> 第二阶段：绝望之谷 (高危流失区)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                    当你试图处理自己的数据时，报错开始了：<code>RuntimeError: size mismatch</code>。Loss 居高不下。
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 italic">
                    真相：你发现自己并没有真正理解代码背后的原理，只会复制粘贴。
                </p>
            </div>
         </div>
         <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl hover:shadow-md transition-shadow">
                <h4 className="font-bold text-amber-500 text-sm mb-2">第三阶段：开悟之坡</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    你开始理解为什么 Learning Rate 设大了会震荡，为什么这里需要加一层 Normalization。你能看懂 PyTorch 的官方文档了。
                </p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl hover:shadow-md transition-shadow">
                <h4 className="font-bold text-green-500 text-sm mb-2">第四阶段：精通高原</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    工具已经不再是阻碍。你拿到一个实际问题，脑海里能迅速构建出适用的模型架构，并知道如何优化它。
                </p>
            </div>
         </div>
    </div>
);

// Combined Component for Web View
export const IntroValley: React.FC<SectionProps> = ({ isPresentation }) => (
  <section className="max-w-5xl mx-auto w-full">
    <Valley_Part1 />
    <div className="h-8"></div>
    {/* Web view logic for Valley: If presentation mode (legacy check) show small alert, else show full stages */}
    {!isPresentation ? (
        <Valley_Part2 />
    ) : (
        // This fallback block is technically not used anymore in the new slide structure, 
        // but kept for safety if IntroValley is used directly in a restricted space.
        <div className="flex gap-4 p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl">
            <AlertTriangle size={24} className="text-red-500 shrink-0" />
            <p className="text-sm text-red-600 dark:text-red-300">
                <strong>高危流失预警：</strong> 90% 的初学者会在“绝望之谷”放弃。
            </p>
        </div>
    )}
  </section>
);

// Individual Components for Slides
export const IntroValley_Slide1 = () => (
    <div className="h-full flex flex-col justify-center max-w-5xl mx-auto w-full">
        <Valley_Part1 />
    </div>
);
export const IntroValley_Slide2 = () => (
    <div className="h-full flex flex-col justify-center max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">阶段解析</h2>
        <Valley_Part2 />
    </div>
);

// --- 5. Footer (Fits on one slide) ---
export const IntroFooter: React.FC<SectionProps> = ({ onNext, isPresentation }) => (
  <div className={`w-full flex flex-col items-center justify-center text-center p-8 ${isPresentation ? 'h-full' : ''}`}>
     <p className="italic text-slate-400 font-serif text-2xl mb-12">
       "The best way to predict the future is to invent it."
     </p>
     {!isPresentation && (
         <button 
            onClick={onNext}
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-cyan-600/30 ring-4 ring-cyan-600/20"
         >
            <CheckCircle size={24} />
            我已经准备好了
         </button>
     )}
  </div>
);

const IntroJourney: React.FC<SectionProps> = ({ onNext }) => {
  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      <IntroHero onNext={onNext} />
      <IntroWhyAI />
      <IntroSkills />
      <IntroValley />
      <IntroFooter onNext={onNext} />
    </div>
  );
};

export default IntroJourney;
