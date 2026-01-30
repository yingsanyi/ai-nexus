import React, { useState } from 'react';
import { 
  Layers, Zap, ArrowRight, Grid, 
  Maximize, Move, Database, 
  Calculator, Sparkles,
  ArrowDown, RefreshCw, Check
} from 'lucide-react';
import CodeBlock from '../common/CodeBlock';

interface SectionProps {
  onNext?: () => void;
  isPresentation?: boolean;
}

// --- 1. Hero Section ---
export const NumPyHero: React.FC<SectionProps> = ({ isPresentation }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl isolate flex flex-col justify-center ${isPresentation ? 'h-full w-full max-w-7xl mx-auto' : 'min-h-[380px]'}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 opacity-90 z-0"></div>
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
    <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

    <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm font-bold uppercase tracking-wider backdrop-blur-md">
                <Grid size={16} />
                <span>Chapter 03: NumPy</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                数学引擎：<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">矩阵思维与高维魔法</span>
            </h1>
            <p className="text-blue-100 text-xl md:text-2xl leading-relaxed max-w-xl">
                在 Python 的世界里，原生列表太慢了。对于深度学习动辄百万级的参数运算，我们需要一辆“F1 赛车”。
                NumPy 就是这辆赛车，它是所有现代 AI 框架的<strong>底层依赖</strong>。
            </p>
        </div>
        <div className="flex-1 flex justify-center items-center perspective-1000">
             <div className="relative w-64 h-64 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-y-12 rotate-x-12 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 cursor-pointer group border border-white/20">
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2 opacity-50">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="bg-white/20 rounded-md"></div>
                    ))}
                </div>
                <div className="text-6xl font-black text-white z-10 drop-shadow-lg tracking-widest">
                    [ ]
                </div>
                <div className="absolute -bottom-16 text-center text-base font-mono text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    np.array([[1, 2, 3], ...])
                </div>
             </div>
        </div>
    </div>
  </div>
);

// --- 2. Why NumPy? (Speed Comparison) ---
export const NumPyWhy: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                <Zap size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">3.1 为什么我们需要 NumPy？</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12 flex-1 items-center">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full"></div>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200">Python List</h3>
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold rounded-full">单兵作战</span>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-mono">1</div>
                        <div className="h-3 w-32 bg-slate-300 dark:bg-slate-600 rounded"></div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-mono">2</div>
                        <div className="h-3 w-24 bg-slate-300 dark:bg-slate-600 rounded"></div>
                    </div>
                    <div className="flex justify-center py-4 text-slate-400 text-base animate-pulse">
                        <RefreshCw size={20} className="animate-spin mr-2" /> 逐个循环处理...
                    </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                    CPU 需要在循环中一次次地取数、判断类型、相加。效率低下，不适合大规模计算。
                </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border-2 border-indigo-500/20 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-indigo-500/10 h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full"></div>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">NumPy Array</h3>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold rounded-full">集团军作战</span>
                </div>
                <div className="flex gap-2 mb-8 overflow-hidden flex-1 items-center">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex-1 h-20 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-mono text-xl animate-pulse shadow-lg" style={{ animationDelay: `${i * 100}ms` }}>
                            {i+1}
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center gap-3 text-indigo-600 dark:text-indigo-400 text-lg font-bold mb-6">
                    <Zap size={24} fill="currentColor" /> SIMD 指令集加速
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                    调用底层 C 语言代码，利用 CPU 的 SIMD 指令集，一声令下，百万数据同时相加。
                </p>
            </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-3">
                <Database size={24} className="text-blue-500" />
                核心数据结构：ndarray
            </h3>
            <ul className="grid md:grid-cols-2 gap-6 text-slate-600 dark:text-slate-300 text-lg">
                <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                    <span><strong>内存连续：</strong> 它在内存里是一块连续的空间（像一排紧挨着的储物柜），读取速度极快。</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                    <span><strong>类型固定：</strong> 里面的元素必须是同一种类型（比如全是整数），省去了类型检查的开销。</span>
                </li>
            </ul>
        </div>
    </section>
);

// --- 3. Dimensions Visualization ---
export const NumPyDimensions: React.FC<SectionProps> = ({ isPresentation }) => {
    const [activeDim, setActiveDim] = useState(0);

    const dimensions = [
        { 
            level: 0, 
            name: "Scalar (标量)", 
            desc: "一个点。场景：Loss 值，准确率", 
            shape: "()",
            code: `import numpy as np\n\n# Level 0: 标量\nd0 = np.array(10)\nprint(f"维度: {d0.ndim}") # 0`
        },
        { 
            level: 1, 
            name: "Vector (向量)", 
            desc: "一条线。场景：音频波形，特征向量", 
            shape: "(3,)",
            code: `import numpy as np\n\n# Level 1: 向量\nd1 = np.array([1, 2, 3])\nprint(f"维度: {d1.ndim}") # 1`
        },
        { 
            level: 2, 
            name: "Matrix (矩阵)", 
            desc: "一个面。场景：灰度图片，Excel 表", 
            shape: "(2, 3)",
            code: `import numpy as np\n\n# Level 2: 矩阵 (2行3列)\nd2 = np.array([\n    [1, 2, 3],\n    [4, 5, 6]\n])\nprint(f"Shape: {d2.shape}") # (2, 3)`
        },
        { 
            level: 3, 
            name: "Tensor (张量)", 
            desc: "一个体。场景：彩色图片，视频流", 
            shape: "(2, 2, 2)",
            code: `import numpy as np\n\n# Level 3: 张量 (高x宽x通道)\nd3 = np.array([\n    [[1, 2], [3, 4]], \n    [[5, 6], [7, 8]]\n])\nprint(f"Shape: {d3.shape}") # (2, 2, 2)`
        },
    ];

    return (
        <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
            <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
                    <Layers size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">3.2 维度：空间想象力</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 flex-1 min-h-0">
                {/* Controls */}
                <div className="flex flex-col h-full">
                    <div className="space-y-4 flex-1 overflow-y-auto pr-2">
                        {dimensions.map((dim) => (
                            <button
                                key={dim.level}
                                onClick={() => setActiveDim(dim.level)}
                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                                    activeDim === dim.level 
                                    ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-500 ring-1 ring-purple-500 shadow-lg' 
                                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-purple-300'
                                }`}
                            >
                                <div>
                                    <div className={`font-bold text-xl mb-2 ${activeDim === dim.level ? 'text-purple-700 dark:text-purple-300' : 'text-slate-700 dark:text-slate-300'}`}>
                                        {dim.level}D: {dim.name}
                                    </div>
                                    <div className="text-base text-slate-500 dark:text-slate-400">{dim.desc}</div>
                                </div>
                                <div className="font-mono text-sm bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-500">
                                    {dim.shape}
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="mt-6 text-center text-slate-500 text-lg bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        🧠 记忆口诀: 看最左边有几个中括号 <code className="bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded font-bold text-slate-700 dark:text-slate-200">[</code>，就是几维数组。
                    </div>
                </div>

                {/* Visualization Display */}
                <div className="flex flex-col gap-6 h-full">
                    <div className="flex-1 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 flex items-center justify-center relative overflow-hidden min-h-[300px]">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        
                        {activeDim === 0 && (
                            <div className="w-24 h-24 bg-purple-500 rounded-full shadow-2xl shadow-purple-500/40 animate-bounce flex items-center justify-center text-white text-2xl font-bold border-4 border-white dark:border-slate-800">10</div>
                        )}
                        {activeDim === 1 && (
                            <div className="flex gap-4">
                                {[1, 2, 3].map(n => (
                                    <div key={n} className="w-20 h-20 bg-purple-500 rounded-2xl shadow-xl flex items-center justify-center text-white text-2xl font-bold animate-in slide-in-from-left duration-500 border-2 border-white/20" style={{ animationDelay: `${n*100}ms` }}>{n}</div>
                                ))}
                            </div>
                        )}
                        {activeDim === 2 && (
                            <div className="grid grid-cols-3 gap-3 bg-white/5 p-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                                {[1, 2, 3, 4, 5, 6].map(n => (
                                    <div key={n} className="w-20 h-20 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold hover:scale-105 transition-transform">{n}</div>
                                ))}
                            </div>
                        )}
                        {activeDim === 3 && (
                            <div className="relative w-64 h-64 flex items-center justify-center" style={{ perspective: '1000px' }}>
                                <div className="relative w-48 h-48 transition-all duration-500 preserve-3d" style={{ transformStyle: 'preserve-3d', animation: 'spin-tensor 12s linear infinite' }}>
                                    <style>{`
                                        @keyframes spin-tensor {
                                            0% { transform: rotateX(-20deg) rotateY(0deg); }
                                            100% { transform: rotateX(-20deg) rotateY(360deg); }
                                        }
                                    `}</style>
                                    
                                    {/* Layer 1 (Front) */}
                                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-3 bg-purple-500/20 border-2 border-purple-400/50 rounded-2xl backdrop-blur-sm"
                                         style={{ transform: 'translateZ(40px)' }}>
                                        <div className="absolute -top-8 left-0 w-full text-center text-sm font-bold text-purple-300">Channel 0</div>
                                        {[1, 2, 3, 4].map(n => (
                                            <div key={n} className="bg-purple-500/80 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-inner border border-white/20">
                                                {n}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Layer 2 (Back) */}
                                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-3 bg-indigo-500/20 border-2 border-indigo-400/50 rounded-2xl backdrop-blur-sm"
                                         style={{ transform: 'translateZ(-40px)' }}>
                                        <div className="absolute -bottom-8 left-0 w-full text-center text-sm font-bold text-indigo-300">Channel 1</div>
                                        {[5, 6, 7, 8].map(n => (
                                            <div key={n} className="bg-indigo-500/80 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-inner border border-white/20">
                                                {n}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Connecting lines for visual depth */}
                                    <div className="absolute inset-0 border border-white/10 rounded-2xl" style={{ transform: 'rotateY(90deg) translateZ(96px) scaleX(0.4)', opacity: 0.3 }}></div>
                                    <div className="absolute inset-0 border border-white/10 rounded-2xl" style={{ transform: 'rotateY(90deg) translateZ(-96px) scaleX(0.4)', opacity: 0.3 }}></div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <CodeBlock code={dimensions[activeDim].code} className="flex-none" />
                </div>
            </div>
        </section>
    );
};

// --- 4. Creation & Random ---
export const NumPyCreation: React.FC<SectionProps> = ({ isPresentation }) => {
    const [creationMode, setCreationMode] = useState<'zeros' | 'random'>('zeros');

    // 生成固定的随机数用于展示，避免每次渲染都变
    const randomData = [
        0.45, -1.23, 0.89,
        -0.56, 1.45, -0.12,
        0.67, -0.98, 0.34
    ];

    return (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
         <div className={`flex items-center gap-3 ${isPresentation ? 'mb-6' : 'mb-10'}`}>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl">
                <Sparkles size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">3.3 创建数组：不仅仅是手写</h2>
        </div>

        <div className={`grid md:grid-cols-2 ${isPresentation ? 'gap-6' : 'gap-10'} flex-1 min-h-0`}>
            <div className={`h-full flex flex-col ${isPresentation ? 'space-y-4' : 'space-y-6'}`}>
                <div 
                    onClick={() => setCreationMode('zeros')}
                    className={`${(!isPresentation || creationMode === 'zeros') ? 'flex-1' : 'flex-none'} flex flex-col ${isPresentation ? 'p-4' : 'p-6'} rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                        creationMode === 'zeros' 
                        ? 'bg-slate-100 dark:bg-slate-800 border-slate-400 dark:border-slate-500 shadow-lg scale-[1.02]' 
                        : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                >
                    <h3 className={`text-2xl font-bold text-slate-800 dark:text-white ${isPresentation ? 'mb-2' : 'mb-4'} flex items-center gap-2`}>
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${creationMode === 'zeros' ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900' : 'bg-slate-200 dark:bg-slate-700'}`}>1</span>
                        特殊数组生成
                    </h3>
                    {(!isPresentation || creationMode === 'zeros') && (
                        <CodeBlock className="w-full" code={`# 1. 全 0 矩阵 (初始化画布)\nzeros = np.zeros((3, 4))\n\n# 2. 全 1 矩阵 (掩码)\nones = np.ones((2, 2))\n\n# 3. 序列生成 (range)\nsequence = np.arange(0, 10, 2)\n# 输出: [0, 2, 4, 6, 8]`} />
                    )}
                </div>
                
                <div 
                    onClick={() => setCreationMode('random')}
                    className={`${(!isPresentation || creationMode === 'random') ? 'flex-1' : 'flex-none'} flex flex-col ${isPresentation ? 'p-4' : 'p-6'} rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                        creationMode === 'random' 
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-500 shadow-lg scale-[1.02]' 
                        : 'bg-transparent border-transparent hover:bg-green-50/50 dark:hover:bg-green-900/10'
                    }`}
                >
                    <h4 className={`font-bold text-xl text-green-800 dark:text-green-300 ${isPresentation ? 'mb-1' : 'mb-2'} flex items-center gap-2`}>
                         <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${creationMode === 'random' ? 'bg-green-600 text-white' : 'bg-green-200 dark:bg-green-800'}`}>2</span>
                        随机数生成 (AI 的起点)
                    </h4>
                    <p className={`text-base text-green-700 dark:text-green-400 ${isPresentation ? 'mb-2' : 'mb-4'}`}>
                        神经网络的权重 (Weights) 在训练开始前，必须随机初始化。
                    </p>
                    {(!isPresentation || creationMode === 'random') && (
                        <CodeBlock className="w-full !my-0" code={`# 1. 标准正态分布 (均值0, 方差1)\nweights = np.random.randn(3, 3)\n\n# 2. 随机整数 (抽奖)\nindices = np.random.randint(0, 100, size=5)`} />
                    )}
                </div>
            </div>
            
            <div className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl ${isPresentation ? 'p-4 gap-4' : 'p-8 gap-8'} flex flex-col items-center justify-center shadow-xl transition-all duration-500`}>
                {creationMode === 'zeros' ? (
                    <>
                        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">Visualizing np.zeros((3, 4))</div>
                            <div className="text-slate-500">初始化全零矩阵用于占位</div>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-2 w-full max-w-md p-4 bg-slate-100 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in duration-500">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="aspect-square bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-lg text-slate-400 border border-slate-200 dark:border-slate-700 shadow-sm font-mono">
                                    0.
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex gap-4 animate-in fade-in delay-150 duration-500">
                             <div className="px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-mono">Shape: (3, 4)</div>
                             <div className="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-mono">Type: float64</div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">Visualizing np.random.randn(3, 3)</div>
                            <div className="text-slate-500">正态分布随机数 (Heatmap Style)</div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 w-full max-w-md p-4 bg-slate-100 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in duration-500">
                            {randomData.map((val, i) => {
                                // 简单的热力图颜色逻辑
                                const intensity = Math.min(Math.abs(val), 2) / 2; // 归一化 0~1
                                const isPos = val > 0;
                                const bgStyle = isPos 
                                    ? `rgba(34, 197, 94, ${0.2 + intensity * 0.8})` // Green for positive
                                    : `rgba(239, 68, 68, ${0.2 + intensity * 0.8})`; // Red for negative
                                const textClass = intensity > 0.5 ? 'text-white' : 'text-slate-700 dark:text-slate-200';

                                return (
                                    <div key={i} 
                                        className={`aspect-square rounded-xl flex items-center justify-center text-lg font-mono border border-black/5 shadow-sm transition-transform hover:scale-105 ${textClass}`}
                                        style={{ backgroundColor: bgStyle }}
                                    >
                                        {val}
                                    </div>
                                )
                            })}
                        </div>
                        
                        <div className="flex gap-4 animate-in fade-in delay-150 duration-500">
                             <div className="px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-mono">Shape: (3, 3)</div>
                             <div className="px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-mono">Mean ≈ 0, Std ≈ 1</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    </section>
)};

// --- 5. Reshape & Operations ---
export const NumPyReshape: React.FC<SectionProps> = ({ isPresentation }) => {
    const [isFlattened, setIsFlattened] = useState(true);

    return (
        <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl">
                        <Maximize size={32} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">3.4 变形记：Reshape 的艺术</h2>
                </div>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                    数据往往不是你要的样子。比如读取了一张图片 (28x28)，但模型需要一个向量 (784).
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 flex-1 items-center min-h-0">
                <div className="order-2 lg:order-1 h-full flex flex-col justify-center">
                    <CodeBlock className="w-full text-base" code={`# 创建一个包含 12 个元素的数组\narr = np.arange(12)\n\n# 动作 1: 变成 3行4列\nmat = arr.reshape(3, 4)\n\n# 动作 2: 展平 (Flatten)\nflat = mat.reshape(-1)\n\n# 🔥 核心技巧: -1 (自动推导)\nauto_mat = arr.reshape(-1, 2) \n# NumPy 自动算出: 12 / 2 = 6 行`} />
                </div>

                <div className={`order-1 lg:order-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl ${isPresentation ? 'p-6' : 'p-10'} flex flex-col items-center justify-center h-full shadow-2xl relative overflow-hidden`}>
                     <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-red-500"></div>
                    
                    <div className="flex-1 flex items-center justify-center w-full transition-all duration-700">
                        {isFlattened ? (
                            <div className="flex gap-2 animate-in fade-in duration-500 flex-wrap justify-center content-center max-w-lg">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-300 dark:border-orange-700 rounded-xl flex items-center justify-center text-lg font-mono text-orange-800 dark:text-orange-200 shadow-sm">
                                        {i}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-4 gap-3 animate-in zoom-in duration-500">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-300 dark:border-blue-700 rounded-xl flex items-center justify-center text-xl font-mono text-blue-800 dark:text-blue-200 shadow-sm">
                                        {i}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    <div className="mt-8 flex flex-col items-center gap-4">
                        <button 
                            onClick={() => setIsFlattened(!isFlattened)}
                            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-orange-500/30 flex items-center gap-3 hover:scale-105 active:scale-95"
                        >
                            <RefreshCw size={20} /> 
                            {isFlattened ? 'Reshape to (3, 4)' : 'Flatten to (-1)'}
                        </button>
                         <div className="font-mono text-slate-500 text-base bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg">
                            {isFlattened ? 'Current Shape: (12,)  // 一维长条' : 'Current Shape: (3, 4)  // 3行4列矩阵'}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- 6. Indexing & Broadcasting ---
export const NumPyAdvanced: React.FC<SectionProps> = ({ isPresentation }) => {
    const [indexingMode, setIndexingMode] = useState<'single' | 'slice' | 'boolean'>('single');

    const renderGrid = () => {
        const data = [
            [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90]
        ];

        // Helper to check if row/col is involved
        const isRowActive = (r: number) => {
            if (indexingMode === 'single') return r === 1;
            if (indexingMode === 'slice') return r >= 0 && r < 2;
            return false; // Boolean mode doesn't strictly follow rows
        };
        const isColActive = (c: number) => {
            if (indexingMode === 'single') return c === 1;
            if (indexingMode === 'slice') return c >= 1;
            return false;
        };

        return (
            <div className="relative p-4">
                {/* Row Indices */}
                <div className="absolute left-0 top-4 bottom-4 w-6 flex flex-col justify-around text-xs font-mono">
                    {[0, 1, 2].map(r => (
                        <div key={r} className={`text-right pr-2 transition-colors ${isRowActive(r) ? 'text-pink-400 font-bold' : 'text-slate-600'}`}>
                            {r}
                        </div>
                    ))}
                </div>
                {/* Col Indices */}
                <div className="absolute top-0 left-6 right-0 h-6 flex justify-around text-xs font-mono">
                    {[0, 1, 2].map(c => (
                        <div key={c} className={`text-center pt-1 transition-colors ${isColActive(c) ? 'text-pink-400 font-bold' : 'text-slate-600'}`}>
                            {c}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-2 ml-6 mt-6">
                    {data.map((row, rIndex) => (
                        row.map((val, cIndex) => {
                            let isActive = false;
                            
                            if (indexingMode === 'single') {
                                isActive = rIndex === 1 && cIndex === 1;
                            } else if (indexingMode === 'slice') {
                                const rowMatch = rIndex >= 0 && rIndex < 2;
                                const colMatch = cIndex >= 1;
                                isActive = rowMatch && colMatch;
                            } else if (indexingMode === 'boolean') {
                                isActive = val > 50;
                            }

                            return (
                                <div 
                                    key={`${rIndex}-${cIndex}`}
                                    className={`
                                        h-12 flex items-center justify-center rounded-lg font-mono text-lg transition-all duration-300 border-2
                                        ${isActive 
                                            ? 'bg-pink-500 text-white border-pink-400 scale-105 shadow-lg shadow-pink-500/30 z-10' 
                                            : 'bg-slate-800 text-slate-500 border-slate-700 opacity-60'
                                        }
                                    `}
                                >
                                    {val}
                                </div>
                            );
                        })
                    ))}
                </div>
            </div>
        );
    };

    return (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="grid lg:grid-cols-2 gap-16 h-full">
            {/* Indexing */}
            <div className="flex flex-col h-full">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-xl">
                        <Move size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">3.5 切片与索引</h3>
                </div>
                
                <div className="flex gap-2 mb-6">
                    {(['single', 'slice', 'boolean'] as const).map(mode => (
                        <button
                            key={mode}
                            onClick={() => setIndexingMode(mode)}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                                indexingMode === mode 
                                ? 'bg-pink-500 text-white shadow-md' 
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-pink-100 dark:hover:bg-pink-900/20'
                            }`}
                        >
                            {mode === 'single' && '单点 [1, 1]'}
                            {mode === 'slice' && '切片 [0:2, 1:]'}
                            {mode === 'boolean' && '布尔 (> 50)'}
                        </button>
                    ))}
                </div>

                <div className="flex-1 bg-slate-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-xl border border-slate-700">
                    <div className="mb-8 w-full max-w-[320px]">
                        {renderGrid()}
                    </div>
                    
                    <div className="w-full bg-black/30 rounded-xl p-4 border border-white/10">
                        <div className="font-mono text-sm text-pink-300 mb-2 border-b border-white/10 pb-2">
                            {indexingMode === 'single' && '# 1. 取出中间元素 (Row 1, Col 1)'}
                            {indexingMode === 'slice' && '# 2. 切片: 行 0~1 (不含2), 列 1~最后'}
                            {indexingMode === 'boolean' && '# 3. 布尔索引: 找出大于 50 的数'}
                        </div>
                        <CodeBlock 
                            code={
                                indexingMode === 'single' ? 'data[1, 1]' :
                                indexingMode === 'slice' ? 'data[0:2, 1:]' :
                                'data[data > 50]'
                            } 
                            className="!bg-transparent !border-none !p-0 !shadow-none"
                        />
                         <div className="mt-2 text-slate-400 text-sm font-mono border-t border-white/10 pt-2">
                            {indexingMode === 'single' && '>> 50'}
                            {indexingMode === 'slice' && (
                                <span>
                                    {`>> [[20, 30],`}
                                    <br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`[50, 60]]`}
                                </span>
                            )}
                            {indexingMode === 'boolean' && '>> [60, 70, 80, 90]'}
                        </div>
                    </div>
                </div>
            </div>

            {/* Broadcasting */}
             <div className="flex flex-col h-full">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-xl">
                        <ArrowDown size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">3.6 广播 (Broadcasting)</h3>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                    NumPy 自动把小数组“复制”成大数组的形状。
                </p>

                <div className="flex-1 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-center items-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>
                    
                    <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm">
                        {/* Matrix A */}
                        <div className="w-full">
                            <div className="text-xs font-mono text-slate-400 mb-2">Matrix A (2, 3)</div>
                            <div className="grid grid-cols-3 gap-2">
                                {[80, 90, 85, 70, 75, 80].map((v, i) => (
                                    <div key={i} className="h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded flex items-center justify-center text-slate-600 dark:text-slate-300 font-medium shadow-sm">{v}</div>
                                ))}
                            </div>
                        </div>

                        <div className="text-2xl font-bold text-slate-400">+</div>

                        {/* Array B (Broadcasted) */}
                        <div className="w-full relative group">
                             <div className="text-xs font-mono text-slate-400 mb-2 flex justify-between">
                                <span>Array B (3,)</span>
                                <span className="text-cyan-500 flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold">
                                    <RefreshCw size={10} className="animate-spin" /> Auto-Expand
                                </span>
                             </div>
                             
                             <div className="relative p-2 border-2 border-dashed border-cyan-300/50 rounded-xl">
                                {/* Original B */}
                                <div className="grid grid-cols-3 gap-2 relative z-10">
                                    {[10, 5, 0].map((v, i) => (
                                        <div key={i} className="h-10 bg-cyan-100 dark:bg-cyan-900/40 border border-cyan-300 dark:border-cyan-700 rounded flex items-center justify-center text-cyan-700 dark:text-cyan-300 font-bold shadow-sm">{v}</div>
                                    ))}
                                </div>
                                
                                {/* Replicated B */}
                                <div className="grid grid-cols-3 gap-2 mt-2 opacity-50 animate-pulse">
                                     {[10, 5, 0].map((v, i) => (
                                        <div key={i} className="h-10 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded flex items-center justify-center text-cyan-700/50 dark:text-cyan-300/50 font-medium">{v}</div>
                                    ))}
                                </div>
                                
                                {/* Visual Arrow indicating copy */}
                                <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 rotate-90 text-cyan-300">
                                    <ArrowRight size={20} className="animate-bounce" />
                                </div>
                             </div>
                        </div>

                        <div className="text-2xl font-bold text-slate-400">=</div>

                         {/* Result */}
                         <div className="w-full">
                            <div className="text-xs font-mono text-slate-400 mb-2">Result (2, 3)</div>
                            <div className="grid grid-cols-3 gap-2">
                                {[90, 95, 85, 80, 80, 80].map((v, i) => (
                                    <div key={i} className="h-10 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded flex items-center justify-center text-green-700 dark:text-green-300 font-bold shadow-sm animate-in zoom-in duration-300" style={{ animationDelay: `${i * 50}ms` }}>{v}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

// --- 7. Dot Product ---
export const NumPyDotProduct: React.FC<SectionProps> = ({ isPresentation }) => {
    const [mode, setMode] = useState<'element' | 'matrix'>('matrix');
    const [hoveredResult, setHoveredResult] = useState<[number, number] | null>(null);

    // Helper for matrix rendering
    const renderMatrix = (
        data: number[][], 
        highlightFn?: (r: number, c: number) => boolean,
        isInteractive: boolean = false
    ) => (
        <div className="grid grid-cols-2 gap-2">
            {data.map((row, r) => (
                row.map((val, c) => {
                    const isHighlighted = highlightFn ? highlightFn(r, c) : false;
                    return (
                        <div 
                            key={`${r}-${c}`}
                            onMouseEnter={() => isInteractive && setHoveredResult([r, c])}
                            onMouseLeave={() => isInteractive && setHoveredResult(null)}
                            className={`
                                w-12 h-12 flex items-center justify-center rounded-lg font-mono text-lg transition-all duration-200 border-2
                                ${isInteractive ? 'cursor-pointer hover:scale-110' : ''}
                                ${isHighlighted 
                                    ? 'bg-blue-500 text-white border-blue-400 shadow-lg scale-105 z-10' 
                                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                                }
                            `}
                        >
                            {val}
                        </div>
                    );
                })
            ))}
        </div>
    );

    const A = [[1, 2], [3, 4]];
    const B = [[1, 0], [0, 1]];
    // Pre-calculated results
    const resultElement = [[1, 0], [0, 4]];
    const resultMatrix = [[1, 2], [3, 4]];

    const getHighlightA = (r: number, c: number) => {
        if (!hoveredResult) return false;
        const [hr, hc] = hoveredResult;
        if (mode === 'element') return r === hr && c === hc;
        return r === hr; // Row highlight for matrix mult
    };

    const getHighlightB = (r: number, c: number) => {
        if (!hoveredResult) return false;
        const [hr, hc] = hoveredResult;
        if (mode === 'element') return r === hr && c === hc;
        return c === hc; // Col highlight for matrix mult
    };

    return (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl">
                    <Calculator size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">3.7 矩阵运算：点积</h2>
            </div>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed pl-2 border-l-4 border-blue-500 ml-2">
                这是深度学习的灵魂。神经网络的前向传播，本质上就是<strong className="text-blue-600 dark:text-blue-400 mx-2">矩阵乘法</strong>。
            </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 flex-1 items-start">
            <div className="space-y-6">
                <CodeBlock className="text-base" code={`a = np.array([[1, 2], [3, 4]])\nb = np.array([[1, 0], [0, 1]])\n\n# 1. 对应位置相乘 (Element-wise)\nprint(a * b) \n# [[1, 0], [0, 4]]\n\n# 2. 矩阵乘法 (Matrix Multiplication)\nprint(a @ b) \n# [[1, 2], [3, 4]]`} />
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 text-blue-800 dark:text-blue-200">
                    <div className="font-bold mb-2 flex items-center gap-2">
                        <Sparkles size={18} />
                        小贴士
                    </div>
                    在 Python 中，<code className="bg-white/50 dark:bg-black/20 px-1.5 py-0.5 rounded font-mono font-bold">*</code> 代表对应位置相乘，<code className="bg-white/50 dark:bg-black/20 px-1.5 py-0.5 rounded font-mono font-bold">@</code> 代表矩阵乘法（点积）。混淆这两个符号是新手最常见的 Bug 来源。
                </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col h-full min-h-[400px]">
                {/* Mode Toggle */}
                <div className="flex bg-slate-200 dark:bg-slate-800 p-1.5 rounded-xl mb-12 self-center">
                    <button 
                        onClick={() => setMode('element')}
                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'element' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-300' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        对应位置 (*)
                    </button>
                    <button 
                        onClick={() => setMode('matrix')}
                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'matrix' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-300' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        矩阵乘法 (@)
                    </button>
                </div>

                {/* Interactive Viz */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-4 md:gap-8 mb-8">
                        {/* Matrix A */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs font-mono text-slate-400">A</span>
                            {renderMatrix(A, getHighlightA)}
                        </div>

                        <div className="text-3xl font-bold text-slate-300 dark:text-slate-600">
                            {mode === 'element' ? '*' : '@'}
                        </div>

                        {/* Matrix B */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs font-mono text-slate-400">B</span>
                            {renderMatrix(B, getHighlightB)}
                        </div>

                        <div className="text-3xl font-bold text-slate-300 dark:text-slate-600">=</div>

                        {/* Result */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs font-mono text-slate-400">Result</span>
                            {renderMatrix(
                                mode === 'element' ? resultElement : resultMatrix, 
                                (r,c) => !!hoveredResult && r === hoveredResult[0] && c === hoveredResult[1],
                                true
                            )}
                        </div>
                    </div>

                    <div className="h-12 flex items-center justify-center w-full max-w-lg">
                        {hoveredResult ? (
                            <div className="bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-lg border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-300 font-mono text-sm md:text-base animate-in slide-in-from-bottom-2 fade-in duration-200 whitespace-nowrap">
                                {mode === 'element' ? (
                                    <>
                                        <span className="font-bold">Result[{hoveredResult[0]}, {hoveredResult[1]}]</span> = A[{hoveredResult[0]}, {hoveredResult[1]}] * B[{hoveredResult[0]}, {hoveredResult[1]}]
                                    </>
                                ) : (
                                    <>
                                        <span className="font-bold">Result[{hoveredResult[0]}, {hoveredResult[1]}]</span> = (Row {hoveredResult[0]} of A) · (Col {hoveredResult[1]} of B)
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="text-slate-400 flex items-center gap-2 animate-pulse">
                                <Move size={16} /> 鼠标悬停在结果矩阵上查看计算逻辑
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

// --- 8. Footer & Next Steps ---
export const NumPyFooter: React.FC<SectionProps> = ({ onNext, isPresentation }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl isolate flex flex-col justify-center items-center text-center p-12 ${isPresentation ? 'h-full w-full max-w-7xl mx-auto' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-slate-900 opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="relative z-10 max-w-3xl">
          <div className="w-24 h-24 bg-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/40 transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <Database size={48} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">内功已成，准备出山</h2>
          <p className="text-2xl text-blue-100 mb-12 leading-relaxed font-light">
              NumPy 的核心内功您已经了解了。<br/>
              下一章，我们将基于 NumPy，学习如何像处理 Excel 一样处理真实的表格数据。
          </p>
          
          <button 
            onClick={onNext}
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
              <span>第 4 章：Pandas 数据处理</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </button>
      </div>
  </div>
);

// --- Main Lesson Component ---
const NumPyLesson: React.FC<SectionProps> = (props) => {
    return (
        <div className="space-y-20 pb-20">
            <NumPyHero {...props} />
            <NumPyWhy {...props} />
            <NumPyDimensions {...props} />
            <NumPyCreation {...props} />
            <NumPyReshape {...props} />
            <NumPyAdvanced {...props} />
            <NumPyDotProduct {...props} />
            <NumPyFooter {...props} />
        </div>
    );
};

export default NumPyLesson;