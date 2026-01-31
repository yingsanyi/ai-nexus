import React, { useState, useEffect } from 'react';
import { 
  Cpu, Zap, Target, GitBranch, 
  Database, Split, Play, BarChart, 
  ArrowRight, Check, Brain, Layers,
  Briefcase, GraduationCap, ChevronRight,
  TrendingUp, Activity, Download
} from 'lucide-react';
import CodeBlock from '../common/CodeBlock';

interface SectionProps {
  onNext?: () => void;
  isPresentation?: boolean;
}

// --- 1. Hero Section ---
export const SklearnHero: React.FC<SectionProps> = ({ isPresentation }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl isolate flex flex-col justify-center ${isPresentation ? 'h-full w-full max-w-6xl mx-auto' : 'min-h-[400px]'}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-slate-900 to-blue-950 opacity-90 z-0"></div>
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fb923c 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
    
    {/* Animated Background Elements */}
    <div className="absolute top-20 right-20 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>

    <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-orange-300 text-sm font-bold uppercase tracking-wider backdrop-blur-md">
                <Brain size={16} />
                <span>Chapter 06: Scikit-Learn</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                你好，<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">机器学习</span>
            </h1>
            <p className="text-orange-100 text-xl md:text-2xl leading-relaxed max-w-xl">
                打造你的第一个 AI 士兵。掌握 Scikit-Learn 的“三板斧”，让数据开始预测未来。
            </p>
        </div>
        
        {/* Visual Metaphor: Swiss Army Knife or Robot */}
        <div className="flex-1 flex justify-center items-center">
             <div className="relative w-72 h-72 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center p-6 transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-2xl"></div>
                <div className="w-24 h-24 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                    <Briefcase size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI 瑞士军刀</h3>
                <div className="flex gap-2 text-sm text-slate-300">
                    <span className="px-2 py-1 bg-white/10 rounded">回归</span>
                    <span className="px-2 py-1 bg-white/10 rounded">分类</span>
                    <span className="px-2 py-1 bg-white/10 rounded">聚类</span>
                </div>
             </div>
        </div>
    </div>
  </div>
);

// --- 2. Concept: The Three Axes ---
export const SklearnCore: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-6 shrink-0">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                <Layers size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">6.1 核心心法：Scikit-Learn “三板斧”</h2>
        </div>

        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            在写代码之前，请把这张流程图刻在脑子里。Scikit-Learn 中 99% 的算法（无论是<strong>线性回归</strong>、<strong>决策树</strong>还是<strong>支持向量机</strong>）都遵循这个标准套路：
        </p>

        <div className="grid lg:grid-cols-2 gap-8 flex-1 min-h-0 items-stretch">
            <div className="space-y-4 flex flex-col justify-center">
                {[
                    { 
                        step: 1, 
                        title: '实例化 (Instantiate)', 
                        desc: '去人才市场雇佣一个“新员工”。LinearRegression (线性回归) 是最基础的模型，它试图画一条直线来拟合数据 (y = wx + b)。', 
                        code: 'model = LinearRegression()',
                        icon: <Briefcase size={20} />,
                        color: 'bg-blue-500'
                    },
                    { 
                        step: 2, 
                        title: '训练 (Fit)', 
                        desc: '给员工看历史考题(X)和答案(y)，让他找规律', 
                        code: 'model.fit(X_train, y_train)',
                        icon: <Brain size={20} />,
                        color: 'bg-orange-500'
                    },
                    { 
                        step: 3, 
                        title: '预测 (Predict)', 
                        desc: '员工正式上岗，处理新来的业务', 
                        code: 'model.predict(X_new)',
                        icon: <Target size={20} />,
                        color: 'bg-green-500'
                    },
                ].map((item) => (
                    <div key={item.step} className="group flex gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-lg flex-1 items-center">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                            {item.icon}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">Step {item.step}</span>
                                <h4 className="font-bold text-lg text-slate-900 dark:text-white">{item.title}</h4>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{item.desc}</p>
                            <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-pink-500 block w-fit">{item.code}</code>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col h-full">
                 <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 relative group h-full flex flex-col">
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700 shrink-0">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <span className="text-xs text-slate-400 font-mono ml-2">pipeline.py</span>
                        </div>
                        <div className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                            Model: LinearRegression
                        </div>
                    </div>
                    <div className="p-6 flex-1 overflow-auto">
                        <CodeBlock 
                            code={`from sklearn.linear_model import LinearRegression\n\n# 1. 实例化 (找个人)\n# LinearRegression: 线性回归 (画直线)\nmodel = LinearRegression()\n\n# 2. 训练 (学习)\n# X_train: 题目 (特征)\n# y_train: 答案 (标签)\nmodel.fit(X_train, y_train)\n\n# 3. 预测 (考试)\ny_pred = model.predict(X_test)`} 
                            hideHeader={true}
                            className="rounded-lg border-none bg-transparent h-full"
                        />
                    </div>
                    
                    {/* Animated Flow Arrows (Overlay) */}
                    <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-20 pointer-events-none">
                        <Activity size={100} className="text-white animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- 3. Practice: House Price Prediction ---
export const SklearnPractice: React.FC<SectionProps> = ({ isPresentation }) => {
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

    const steps = {
        1: {
            title: '1. 准备数据',
            desc: '从 CSV 文件加载房屋数据。这次我们使用多个特征！',
            code: `# 导入必要的库\nimport pandas as pd\nimport numpy as np\n\n# 1. 读取 CSV 文件 (包含更多特征)\ndf = pd.read_csv('house_prices.csv')\nprint(df.columns) \n# 输出: ['面积', '房间数', '房龄', '价格']\n\n# 2. 准备数据\n# X (特征): 取出前三列 (N行, 3列)\n# 这次不需要 .reshape 了，因为已经是二维的\nX = df[['面积', '房间数', '房龄']].values\n\n# y (标签): 最后一列\ny = df['价格'].values`
        },
        2: {
            title: '2. 拆分数据',
            desc: '把数据切成两块：训练集(80%)做作业，测试集(20%)做考试。',
            code: `from sklearn.model_selection import train_test_split\n\n# 自动拆分\n# test_size=0.2 代表 20% 做测试集\n# random_state=42 保证每次切分结果一样\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\nprint(f"训练集特征形状: {X_train.shape}")\n# 输出: (40, 3)`
        },
        3: {
            title: '3. 训练模型',
            desc: '只把训练集喂给模型。模型会自动学习每个特征的权重。',
            code: `from sklearn.linear_model import LinearRegression\n\n# 实例化\nmodel = LinearRegression()\n\n# 训练 (只用训练集!)\nmodel.fit(X_train, y_train)\n\n# 查看每个特征的权重\nfeatures = ['面积', '房间数', '房龄']\nfor f, w in zip(features, model.coef_):\n    print(f"{f}: {w:.2f}")\n\n# 截距\nprint(f"基础价(b): {model.intercept_:.2f}")`
        },
        4: {
            title: '4. 评估结果',
            desc: '让模型在测试集上做“期末考试”，看看预测准不准。',
            code: `from sklearn.metrics import mean_absolute_error\n\n# 预测 (做卷子)\ny_pred = model.predict(X_test)\n\n# 评估 (改卷子)\nmae = mean_absolute_error(y_test, y_pred)\nprint(f"平均误差: {mae:.2f} 万")`
        }
    };

    // Download simulated data as CSV
    const handleDownload = () => {
        const csvContent = "面积,房间数,房龄,价格\n" + Array.from({length: 50}, (_, i) => {
            const area = 50 + (150 * i) / 49; // 50-200平米
            const rooms = Math.floor(area / 30) + Math.floor(Math.random() * 2); // 房间数与面积相关
            const age = Math.floor(Math.random() * 30); // 0-30年房龄
            
            // 价格公式：面积*3 + 房间数*5 - 房龄*0.5 + 基础价 + 噪声
            const price = area * 3 + rooms * 5 - age * 0.5 + 10 + (Math.random() - 0.5) * 40;
            
            return `${area.toFixed(2)},${rooms},${age},${price.toFixed(2)}`;
        }).join("\n");
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'house_prices.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
            <div className="flex items-center gap-3 mb-10 shrink-0">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl">
                    <TrendingUp size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">6.2 实战：预测房价</h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 flex-1 min-h-0 items-stretch">
                {/* Left: Step Selector & Download */}
                <div className="lg:col-span-4 flex flex-col h-full">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex-1 flex flex-col mb-6">
                        <div className="flex items-center justify-between mb-4 shrink-0">
                            <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                <Database size={18} className="text-blue-500" />
                                实验数据
                            </h3>
                            <button 
                                onClick={handleDownload}
                                className="text-xs flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                            >
                                <Download size={12} />
                                下载 CSV
                            </button>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 shrink-0">
                            这是一份模拟的房屋交易数据，包含50条记录。
                        </p>
                        <div className="grid grid-cols-4 gap-2 text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-2 rounded border border-slate-100 dark:border-slate-800 flex-1 overflow-auto">
                            <div className="font-bold text-slate-400">面积</div>
                            <div className="font-bold text-slate-400">房间</div>
                            <div className="font-bold text-slate-400">房龄</div>
                            <div className="font-bold text-slate-400">价格</div>
                            <div>50.00</div><div>3</div><div>12</div><div>185.23</div>
                            <div>53.06</div><div>2</div><div>5</div><div>198.45</div>
                            <div>...</div><div>...</div><div>...</div><div>...</div>
                            <div>200.00</div><div>8</div><div>2</div><div>710.12</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 shrink-0">
                        {([1, 2, 3, 4] as const).map((s) => (
                            <button
                                key={s}
                                onClick={() => setStep(s)}
                                className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                                    step === s
                                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20 ring-2 ring-green-200 dark:ring-green-900'
                                        : 'border-slate-200 dark:border-slate-800 hover:border-green-300 dark:hover:border-green-700 bg-white dark:bg-slate-900'
                                }`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                                    step === s ? 'bg-green-500 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                                }`}>
                                    {s}
                                </div>
                                <div>
                                    <h4 className={`font-bold ${step === s ? 'text-green-700 dark:text-green-300' : 'text-slate-700 dark:text-slate-300'}`}>
                                        {steps[s].title}
                                    </h4>
                                </div>
                                <ChevronRight className={`ml-auto ${step === s ? 'text-green-500' : 'text-slate-300'} opacity-50`} size={20} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Code & Viz */}
                <div className="lg:col-span-8 flex flex-col gap-4 h-full">
                    <div className="bg-slate-900 rounded-2xl p-6 shadow-xl flex-[3] min-h-0 flex flex-col">
                        <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-4 shrink-0">
                            <span className="text-green-400 font-mono text-sm">Step {step}: {steps[step].desc}</span>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <CodeBlock 
                                code={steps[step].code} 
                                hideHeader={true}
                                className="rounded-lg border-none bg-black/30 h-full overflow-auto"
                            />
                        </div>
                    </div>
                    
                    {/* Visual Aid Area - Flexible Height */}
                    <div className="flex-[2] min-h-0 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-center relative overflow-hidden shadow-inner shrink-0">
                        {step === 1 && (
                            <div className="flex gap-8 items-center animate-in fade-in zoom-in duration-500">
                                <div className="text-center group">
                                    <div className="w-20 h-28 bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-400 rounded grid place-items-center text-xs text-blue-600 mb-2 shadow-lg group-hover:scale-110 transition-transform">
                                        <div className="grid grid-cols-4 gap-0.5 w-full px-1 opacity-50">
                                            {[...Array(12)].map((_,i) => <div key={i} className="h-1 bg-blue-400 rounded-full"></div>)}
                                        </div>
                                        <div className="font-bold">DataFrame</div>
                                        <div className="text-[10px]">(50, 4)</div>
                                    </div>
                                    <span className="text-xs text-slate-500 font-bold">Raw Data</span>
                                </div>
                                <ArrowRight className="text-slate-400 animate-pulse" />
                                <div className="text-center group">
                                    <div className="w-16 h-28 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded grid place-items-center text-xs text-green-600 mb-2 shadow-lg group-hover:scale-110 transition-transform">
                                        <div className="grid grid-cols-3 gap-0.5 w-full px-1 opacity-50">
                                            {[...Array(9)].map((_,i) => <div key={i} className="h-1 bg-green-500 rounded-full"></div>)}
                                        </div>
                                        <div className="font-bold">X</div>
                                        <div className="text-[10px]">(50, 3)</div>
                                    </div>
                                    <span className="text-xs text-slate-500 font-bold">Feature (2D)</span>
                                </div>
                                <div className="text-center group">
                                    <div className="w-8 h-28 bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-500 rounded flex flex-col items-center justify-center gap-1 text-xs text-orange-600 mb-2 shadow-lg group-hover:scale-110 transition-transform">
                                         {[...Array(6)].map((_,i) => <div key={i} className="w-4 h-1 bg-orange-400 rounded-full opacity-50"></div>)}
                                        <div className="mt-1 font-bold">y</div>
                                        <div className="text-[10px]">(50,)</div>
                                    </div>
                                    <span className="text-xs text-slate-500 font-bold">Label (1D)</span>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="w-full max-w-lg animate-in fade-in slide-in-from-left duration-500">
                                <div className="flex w-full h-16 rounded-xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl mb-4 relative">
                                    <div className="w-[80%] bg-blue-500 flex flex-col items-center justify-center text-white relative group cursor-help">
                                        <div className="font-bold text-lg">Train Set (80%)</div>
                                        <div className="text-xs opacity-80">40 samples</div>
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <div className="w-[20%] bg-orange-500 flex flex-col items-center justify-center text-white relative group cursor-help">
                                        <div className="font-bold text-lg">Test</div>
                                        <div className="text-xs opacity-80">10</div>
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    {/* Scissors Icon */}
                                    <div className="absolute left-[80%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-slate-800 z-10">
                                        <Split size={16} />
                                    </div>
                                </div>
                                <div className="flex justify-between text-xs font-bold text-slate-500 px-1">
                                    <span className="flex items-center gap-1"><Brain size={12}/> 用于模型学习</span>
                                    <span className="flex items-center gap-1"><GraduationCap size={12}/> 用于期末考试 (严禁偷看!)</span>
                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div className="relative w-full h-full flex items-center justify-center animate-in fade-in duration-700">
                                {/* Grid Background */}
                                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.5 }}></div>
                                
                                {/* Scatter points */}
                                {[...Array(15)].map((_, i) => (
                                    <div key={i} className="absolute w-3 h-3 bg-blue-500 rounded-full opacity-60 shadow-sm backdrop-blur-[1px]" 
                                        style={{ left: `${20 + i*5 + Math.random()*5}%`, top: `${70 - i*4 + Math.random()*8}%` }} 
                                    />
                                ))}

                                {/* Fitting Line Animation (SVG) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                                    <line 
                                        x1="20%" y1="80%" 
                                        x2="80%" y2="20%" 
                                        stroke="#ef4444" 
                                        strokeWidth="4" 
                                        strokeLinecap="round"
                                        className="drop-shadow-lg opacity-80"
                                    >
                                        {/* Simulate finding the best slope and intercept */}
                                        <animate attributeName="y1" values="90%;50%;70%" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                                        <animate attributeName="y2" values="10%;60%;30%" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                                        <animate attributeName="opacity" values="0;1;1" dur="4s" repeatCount="indefinite" />
                                    </line>
                                </svg>
                                
                                {/* Axis Labels - Adjusted position */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-slate-400 font-bold tracking-wider pointer-events-none z-20">PRICE (y)</div>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 font-bold tracking-wider pointer-events-none z-20">AREA + ROOMS + AGE (X)</div>

                                {/* Status Box */}
                                <div className="absolute top-4 left-24 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg max-w-[200px] z-10">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Training (Multi-dim)</span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 leading-tight">
                                        寻找最佳超平面：<br/>
                                        <span className="text-red-500 font-bold">w1, w2, w3</span>: 各特征权重<br/>
                                        <span className="text-red-500 font-bold">b</span>: 基础截距
                                    </p>
                                </div>

                                {/* Loss Curve Mini-chart */}
                                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg z-10">
                                    <div className="text-[10px] text-slate-500 font-bold mb-1 flex justify-between gap-4">
                                        <span>Loss (MSE)</span>
                                        <span className="text-orange-500">Epoch 100</span>
                                    </div>
                                    <div className="flex items-end gap-0.5 h-8 w-32">
                                        {[100, 70, 50, 35, 25, 18, 12, 8, 5, 5].map((h, i) => (
                                            <div key={i} className="flex-1 bg-orange-500 rounded-t-[1px] opacity-80 group relative" 
                                                 style={{ 
                                                     height: `${h}%`,
                                                     animation: `pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                                                     animationDelay: `${i * 0.3}s`
                                                 }}
                                            ></div>
                                        ))}
                                    </div>
                                    <div className="text-[8px] text-slate-400 mt-1 text-center border-t border-slate-200 dark:border-slate-700 pt-1">
                                        Loss = Σ(预测值 - 真实值)²
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 4 && (
                            <div className="flex items-center gap-4 md:gap-12 animate-in zoom-in duration-500">
                                <div className="flex flex-col items-center p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                                    <div className="text-3xl font-bold text-red-500 mb-1">12.5</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Prediction</div>
                                </div>
                                <div className="text-slate-300 font-serif italic text-xl">vs</div>
                                <div className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                                    <div className="text-3xl font-bold text-blue-500 mb-1">13.2</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ground Truth</div>
                                </div>
                                <ArrowRight className="text-slate-300" />
                                <div className="flex flex-col items-center p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30 shadow-lg transform scale-110">
                                    <div className="text-3xl font-bold text-green-600 mb-1">0.7</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Error (MAE)</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- 4. Switch Model ---
export const SklearnSwitch: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-10 shrink-0">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
                <GitBranch size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">6.3 举一反三：换个模型？</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 flex-1 min-h-0 items-center">
            <div className="space-y-8">
                <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-500 p-6 rounded-r-xl">
                    <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">完全不需要重写！</h3>
                    <p className="text-lg text-purple-700 dark:text-purple-300">
                        这就是 Scikit-Learn 的魅力。想从简单的“线性回归”换成高大上的“决策树”或“随机森林”，你只需要改动<strong className="underline decoration-wavy decoration-purple-400 underline-offset-4 mx-1">第一行</strong>代码。
                    </p>
                </div>
                
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 opacity-50">
                        <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-500">
                            <TrendingUp size={20} />
                        </div>
                        <div className="flex-1 font-mono text-sm text-slate-500 line-through">
                            model = LinearRegression()
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                        <ArrowRight className="text-purple-500 rotate-90 md:rotate-0" size={32} />
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-lg">
                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white">
                            <GitBranch size={20} />
                        </div>
                        <div className="flex-1 font-mono text-sm font-bold text-purple-700 dark:text-purple-300">
                            model = DecisionTreeRegressor()
                        </div>
                        <div className="px-2 py-1 bg-purple-200 dark:bg-purple-800 text-xs text-purple-800 dark:text-purple-200 rounded">
                            New!
                        </div>
                    </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 italic">
                    * 下面的 fit() 和 predict() 代码一字不用改！
                </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700">
                 <CodeBlock 
                    code={`# 1. 只需要改这一行！\n# from sklearn.linear_model import LinearRegression\nfrom sklearn.tree import DecisionTreeRegressor\n\n# 实例化 (换个员工)\nmodel = DecisionTreeRegressor()\n\n# 2. 训练 (完全一样)\nmodel.fit(X_train, y_train)\n\n# 3. 预测 (完全一样)\ny_pred = model.predict(X_test)`} 
                    hideHeader={true}
                    className="rounded-lg border-none bg-transparent"
                />
            </div>
        </div>
    </section>
);

// --- 5. Footer ---
export const SklearnFooter: React.FC<SectionProps> = ({ onNext, isPresentation }) => (
    <section className={`w-full flex flex-col justify-center items-center text-center ${isPresentation ? 'h-full max-w-4xl mx-auto' : 'py-20'}`}>
        <div className="mb-8 p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
            <Check size={48} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            恭喜！你已跑通机器学习全流程
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-12">
            你已经掌握了 <strong>Data &rarr; Split &rarr; Fit &rarr; Predict</strong> 的核心循环。这是所有 AI 模型（包括 ChatGPT）的雏形。
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl w-full mb-12">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Brain size={18} className="text-blue-500" />
                    已掌握
                </h4>
                <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
                    <li>• 监督学习的基本概念</li>
                    <li>• 训练集与测试集的划分 (防止作弊)</li>
                    <li>• Scikit-Learn 的统一 API 设计</li>
                </ul>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Target size={18} className="text-orange-500" />
                    下章预告
                </h4>
                <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
                    <li>• 只有数字能预测吗？文本怎么办？</li>
                    <li>• 特征工程：One-Hot 编码</li>
                    <li>• 让 AI 读懂“房屋朝向”</li>
                </ul>
            </div>
        </div>

        {!isPresentation && (
            <button 
                onClick={onNext}
                className="group flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
            >
                进入第 7 章：特征工程
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
        )}
    </section>
);

// --- 6. Main Component ---
const SklearnLesson: React.FC<SectionProps> = (props) => {
    return (
        <div className="space-y-20 pb-20">
            <SklearnHero {...props} />
            <SklearnCore {...props} />
            <SklearnPractice {...props} />
            <SklearnSwitch {...props} />
            <SklearnFooter {...props} />
        </div>
    );
};

export default SklearnLesson;