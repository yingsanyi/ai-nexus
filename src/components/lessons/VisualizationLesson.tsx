import React, { useState } from 'react';
import { 
  BarChart2, PieChart, TrendingUp, Layers, 
  Palette, PenTool, LayoutTemplate, Box, 
  ArrowRight, Check, AlertCircle, Info,
  Download, Image as ImageIcon, Grid
} from 'lucide-react';
import CodeBlock from '../common/CodeBlock';

const inlineCodeClass = "bg-slate-100 dark:bg-slate-800 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded font-mono text-sm";

interface SectionProps {
  onNext?: () => void;
  isPresentation?: boolean;
}

// --- 1. Hero Section ---
export const VizHero: React.FC<SectionProps> = ({ isPresentation }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl isolate flex flex-col justify-center ${isPresentation ? 'h-full w-full max-w-6xl mx-auto' : 'min-h-[380px]'}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-950 opacity-90 z-0"></div>
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#818cf8 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
    <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>

    <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-300 text-sm font-bold uppercase tracking-wider backdrop-blur-md">
                <BarChart2 size={16} />
                <span>Chapter 05: Visualization</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                透视数据真相：<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">Matplotlib & Seaborn</span>
            </h1>
            <p className="text-indigo-100 text-xl md:text-2xl leading-relaxed max-w-xl">
                只看表格会错过真相。掌握数据可视化，不仅是为了画图，更是为了发现趋势、分布与异常，让数据开口说话。
            </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
             <div className="relative w-64 h-64 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl flex flex-col p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2">
                    {[40, 70, 50, 90, 60, 80].map((h, i) => (
                        <div key={i} className="w-full bg-gradient-to-t from-indigo-500 to-purple-400 rounded-t-sm animate-pulse" style={{ height: `${h}%`, animationDelay: `${i*100}ms` }}></div>
                    ))}
                </div>
             </div>
        </div>
    </div>
  </div>
);

// --- 2. Concept: Matplotlib vs Seaborn ---
export const VizConcept: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex flex-col gap-4 mb-10 shrink-0">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Layers size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">5.1 核心原理：双剑合璧</h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 ml-1 md:ml-3">
                既然 Seaborn 那么漂亮，为什么还要学 Matplotlib？因为它们是<strong>基石与装修</strong>的关系。
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 flex-1 items-stretch min-h-0">
            {/* Matplotlib Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <PenTool size={120} />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Matplotlib</h3>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full">底层基石</span>
                    </div>
                    <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-lg">
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                            <span><strong>画师角色：</strong> 模仿 MATLAB，控制每一个像素、每一条线。</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                            <span><strong>优点：</strong> 无所不能，灵活性 Max。</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                            <span><strong>缺点：</strong> 代码繁琐，默认配色复古。</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Seaborn Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Palette size={120} />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Seaborn</h3>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-bold rounded-full">高级装修</span>
                    </div>
                    <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-lg">
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                            <span><strong>装修队角色：</strong> 穿了“漂亮衣服”的 Matplotlib。</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                            <span><strong>优点：</strong> 极简代码 (1行顶10行)，内置统计功能，支持 Pandas。</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                            <span><strong>缺点：</strong> 模板固定，微调还得靠 Matplotlib。</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// --- 3. Workflow: The General Formula ---
export const VizWorkflow: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-10 shrink-0">
            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl">
                <LayoutTemplate size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">5.2 绘图“万能公式”</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 flex-1 min-h-0 items-center">
            <div className="space-y-8">
                <p className="text-xl text-slate-600 dark:text-slate-300">
                    这是本章<strong>最重要</strong>的知识点。标准的面向对象 (OO) 绘图套路分为四步。
                </p>
                <div className="space-y-4">
                    {[
                        { step: 1, title: '搭台子 (Create Canvas)', desc: '用 Matplotlib 创建画布和子图', code: 'fig, ax = plt.subplots()' },
                        { step: 2, title: '画内容 (Plotting)', desc: '用 Seaborn 把图画在指定的 ax 上', code: "sns.scatterplot(..., ax=ax)" },
                        { step: 3, title: '修细节 (Customization)', desc: '用 Matplotlib 修改标题、标签', code: 'ax.set_title("Title")' },
                        { step: 4, title: '展示 (Show)', desc: '显示或保存图片', code: 'plt.show()' },
                    ].map((item) => (
                        <div key={item.step} className="flex gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-amber-400 dark:hover:border-amber-600 transition-colors">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
                                {item.step}
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{item.desc}</p>
                                <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-pink-500">{item.code}</code>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col justify-center h-full">
                 <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 border-b border-slate-700">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-xs text-slate-400 font-mono ml-2">workflow.py</span>
                    </div>
                    <CodeBlock 
                        code={`import matplotlib.pyplot as plt\nimport seaborn as sns\n\n# 1. 搭台子\nfig, ax = plt.subplots(figsize=(8, 6))\n\n# 2. 画内容 (关键: ax=ax)\nsns.scatterplot(data=df, x='total_bill', y='tip', ax=ax)\n\n# 3. 修细节\nax.set_title("消费 vs 小费")\nax.set_xlabel("账单金额")\n\n# 4. 展示\nplt.show()`} 
                        hideHeader={true}
                        className="rounded-none border-none"
                    />
                </div>
            </div>
        </div>
    </section>
);

// --- 3.5 Basic Charts: The Big Four ---
export const VizBasicCharts: React.FC<SectionProps> = ({ isPresentation }) => {
    const [activeTab, setActiveTab] = useState<'line' | 'scatter' | 'bar' | 'pie'>('line');

    const chartData = {
        line: {
            title: '折线图 (Line Chart)',
            desc: '展示趋势 (随时间变化)',
            code: `sns.lineplot(data=df, x='date', y='sales')`,
            icon: <TrendingUp size={20} />,
            color: 'text-blue-500',
            bg: 'bg-blue-500',
            borderColor: 'border-blue-500',
        },
        scatter: {
            title: '散点图 (Scatter Plot)',
            desc: '展示关系 (相关性)',
            code: `sns.scatterplot(data=df, x='height', y='weight')`,
            icon: <Grid size={20} />, // Using Grid as a proxy for scatter points
            color: 'text-purple-500',
            bg: 'bg-purple-500',
            borderColor: 'border-purple-500',
        },
        bar: {
            title: '柱状图 (Bar Chart)',
            desc: '展示对比 (类别之间)',
            code: `sns.barplot(data=df, x='category', y='value')`,
            icon: <BarChart2 size={20} />,
            color: 'text-teal-500',
            bg: 'bg-teal-500',
            borderColor: 'border-teal-500',
        },
        pie: {
            title: '饼图 (Pie Chart)',
            desc: '展示占比 (整体与部分)',
            code: `plt.pie(x, labels=labels)  # 注意：Seaborn 不支持饼图`,
            icon: <PieChart size={20} />,
            color: 'text-orange-500',
            bg: 'bg-orange-500',
            borderColor: 'border-orange-500',
        }
    };

    const renderChartSimulation = () => {
        switch (activeTab) {
            case 'line':
                return (
                    <div className="relative w-full h-64 flex items-end p-4 border-l-2 border-b-2 border-slate-300 dark:border-slate-600">
                        <svg className="w-full h-full overflow-visible">
                            <path d="M0,200 C50,150 100,180 150,100 S250,50 300,20" fill="none" stroke="#3b82f6" strokeWidth="4" className="drop-shadow-md" />
                            {[0, 50, 100, 150, 200, 250, 300].map((x, i) => {
                                const y = [200, 150, 180, 100, 75, 50, 20][i];
                                return <circle key={i} cx={x} cy={y} r="6" className="fill-blue-100 stroke-blue-600 stroke-2" />
                            })}
                        </svg>
                    </div>
                );
            case 'scatter':
                return (
                    <div className="relative w-full h-64 border-l-2 border-b-2 border-slate-300 dark:border-slate-600">
                        {[...Array(25)].map((_, i) => (
                            <div 
                                key={i}
                                className="absolute rounded-full bg-purple-500/70 hover:scale-150 transition-transform cursor-pointer"
                                style={{
                                    left: `${Math.random() * 90}%`,
                                    bottom: `${Math.random() * 90}%`,
                                    width: `${Math.random() * 10 + 5}px`,
                                    height: `${Math.random() * 10 + 5}px`,
                                }}
                            />
                        ))}
                    </div>
                );
            case 'bar':
                return (
                    <div className="relative w-full h-64 flex items-end justify-around px-4 border-l-2 border-b-2 border-slate-300 dark:border-slate-600">
                        {[40, 70, 50, 90, 60].map((h, i) => (
                            <div key={i} className="w-12 bg-teal-500 rounded-t-md hover:bg-teal-400 transition-colors relative group" style={{ height: `${h}%` }}>
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {h}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'pie':
                return (
                    <div className="relative w-full h-64 flex items-center justify-center">
                         <svg viewBox="0 0 100 100" className="w-48 h-48 overflow-visible transform hover:scale-105 transition-transform duration-500">
                            {/* Simple Pie Chart SVG */}
                            <circle cx="50" cy="50" r="50" fill="#f97316" className="hover:opacity-90" /> {/* Orange */}
                            <path d="M50,50 L50,0 A50,50 0 0,1 93.3,25 Z" fill="#3b82f6" className="hover:opacity-90" /> {/* Blue */}
                            <path d="M50,50 L93.3,25 A50,50 0 0,1 93.3,75 Z" fill="#10b981" className="hover:opacity-90" /> {/* Green */}
                            <path d="M50,50 L93.3,75 A50,50 0 0,1 50,100 Z" fill="#8b5cf6" className="hover:opacity-90" /> {/* Purple */}
                            
                            {/* Labels */}
                            <text x="30" y="30" fill="white" fontSize="8" fontWeight="bold">35%</text>
                            <text x="70" y="20" fill="white" fontSize="6" fontWeight="bold">15%</text>
                            <text x="80" y="50" fill="white" fontSize="6" fontWeight="bold">20%</text>
                            <text x="70" y="80" fill="white" fontSize="6" fontWeight="bold">30%</text>
                        </svg>
                    </div>
                );
        }
    };

    return (
        <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
            <div className="flex items-center gap-3 mb-10 shrink-0">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                    <PieChart size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">5.3 基础招式：四大金刚</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 flex-1 min-h-0 items-stretch">
                <div className="flex flex-col gap-6">
                    <p className="text-xl text-slate-600 dark:text-slate-300">
                        在掌握复杂的统计图之前，先练好这四种最基础的图表。它们能覆盖 80% 的日常需求。
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        {(Object.keys(chartData) as Array<keyof typeof chartData>).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`p-4 rounded-xl border-2 text-left transition-all ${
                                    activeTab === key 
                                        ? `${chartData[key].borderColor} bg-slate-50 dark:bg-slate-800 ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-black ${chartData[key].color.replace('text', 'ring')}` 
                                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                                }`}
                            >
                                <div className={`mb-2 ${activeTab === key ? chartData[key].color : 'text-slate-400'}`}>
                                    {chartData[key].icon}
                                </div>
                                <div className="font-bold text-slate-900 dark:text-white">{chartData[key].title.split(' ')[0]}</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{chartData[key].desc.split(' ')[0]}</div>
                            </button>
                        ))}
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl mt-auto">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">代码示例</span>
                            <span className={`text-xs font-mono px-2 py-1 rounded ${chartData[activeTab].bg} bg-opacity-20 ${chartData[activeTab].color}`}>
                                {activeTab === 'pie' ? 'Matplotlib' : 'Seaborn'}
                            </span>
                        </div>
                        <CodeBlock 
                            code={chartData[activeTab].code} 
                            hideHeader={true}
                            className="rounded-lg border-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg p-8">
                     <div className="w-full flex items-center justify-between mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                            {chartData[activeTab].title}
                        </h3>
                        <div className="flex gap-2">
                             <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                             <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                        </div>
                     </div>
                     {renderChartSimulation()}
                     <div className="mt-6 text-center text-slate-400 text-sm">
                        * 交互式演示：点击左侧按钮切换图表类型
                     </div>
                </div>
            </div>
        </section>
    );
};

// --- 4. Setup & Distribution ---
export const VizDistribution: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-10 shrink-0">
            <div className="p-3 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-xl">
                <BarChart2 size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">5.4 第一招：分布分析</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 flex-1 min-h-0 items-stretch">
            <div className="flex flex-col gap-6">
                <div className="bg-teal-50 dark:bg-teal-900/10 border-l-4 border-teal-500 p-4 rounded-r-xl">
                    <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-1">核心工具：Histplot + KDE</h4>
                    <p className="text-sm text-teal-700 dark:text-teal-300">
                        直方图 (Histogram) 通过“装箱子”统计频率，KDE (核密度估计) 是一条平滑的概率曲线。
                    </p>
                </div>
                
                <CodeBlock 
                    code={`# 1. 创建画布\nfig, ax = plt.subplots(figsize=(8, 5))\n\n# 2. 绘制 (kde=True 显示曲线)\nsns.histplot(data=df, x='total_bill', kde=True, bins=20, color='teal', ax=ax)\n\n# 3. 装修\nax.set_title('顾客消费金额分布')\nax.set_xlabel('总账单金额 ($)')\n\nplt.show()`} 
                />

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                     <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                        <Info size={16} /> 图表解读 (Data Insight)
                     </h4>
                     <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        <li><strong>峰值:</strong> 消费主力集中在 10-20 美元。</li>
                        <li><strong>偏态:</strong> 典型的<strong>右偏分布</strong> (长尾巴在右边)，说明有少量“土豪”。</li>
                        <li><strong>决策:</strong> 建模时可能需要对数据做 Log 变换。</li>
                     </ul>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg p-6">
                {/* SVG Simulation of Histogram */}
                <div className="relative w-full h-64 flex items-end gap-1 px-4 border-l border-b border-slate-300 dark:border-slate-700">
                    {[5, 15, 30, 50, 40, 25, 15, 10, 5, 3, 2, 1, 1, 0, 1].map((h, i) => (
                        <div key={i} className="flex-1 bg-teal-500/80 hover:bg-teal-400 transition-colors rounded-t-sm relative group" style={{ height: `${h * 1.5}%` }}>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Bin {i}: {h}
                            </div>
                        </div>
                    ))}
                    {/* KDE Curve Simulation */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                        <path d="M 20 250 Q 80 10 150 50 T 300 180 T 500 250" fill="none" stroke="#f43f5e" strokeWidth="3" className="opacity-80" />
                    </svg>
                </div>
                <div className="mt-4 text-center text-slate-500 text-sm">模拟运行结果：直方图与 KDE 曲线</div>
            </div>
        </div>
    </section>
);

// --- 5. Relation Analysis ---
export const VizRelation: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-10 shrink-0">
            <div className="p-3 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-xl">
                <TrendingUp size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">5.5 第二招：关系分析</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 flex-1 min-h-0 items-stretch">
            <div className="flex flex-col gap-6">
                 <div className="bg-pink-50 dark:bg-pink-900/10 border-l-4 border-pink-500 p-4 rounded-r-xl">
                    <h4 className="font-bold text-pink-800 dark:text-pink-200 mb-1">核心工具：Scatterplot + 维度映射</h4>
                    <p className="text-sm text-pink-700 dark:text-pink-300">
                        寻找特征相关性最直观的方法。Seaborn 的强大在于可以用颜色(hue)和大小(size)引入更多维度。
                    </p>
                </div>

                <CodeBlock 
                    code={`# hue='smoker': 吸烟者/不吸烟者用不同颜色\n# size='size': 用餐人数越多，点越大\n\nsns.scatterplot(\n    data=df, \n    x='total_bill', \n    y='tip', \n    hue='smoker', \n    size='size',\n    sizes=(20, 200),\n    alpha=0.8,\n    ax=ax\n)`} 
                />
            </div>

            <div className="flex flex-col justify-center items-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg p-6 relative overflow-hidden">
                 {/* CSS Pattern to simulate scatter plot */}
                 <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 
                 <div className="relative w-full h-full flex items-center justify-center">
                    {/* Simulated Points */}
                    <div className="relative w-64 h-64 border-l-2 border-b-2 border-slate-300 dark:border-slate-600">
                        {/* Positive Correlation Trend */}
                        {[...Array(20)].map((_, i) => (
                            <div 
                                key={i}
                                className={`absolute rounded-full opacity-80 ${i % 3 === 0 ? 'bg-orange-400' : 'bg-blue-500'}`}
                                style={{
                                    left: `${(i / 20) * 80 + 10 + Math.random() * 10}%`,
                                    bottom: `${(i / 20) * 70 + 10 + Math.random() * 15}%`,
                                    width: `${Math.random() * 15 + 8}px`,
                                    height: `${Math.random() * 15 + 8}px`,
                                }}
                            />
                        ))}
                        {/* Outlier */}
                        <div className="absolute right-2 bottom-4 w-4 h-4 rounded-full bg-blue-500 animate-ping opacity-50"></div>
                        <div className="absolute right-2 bottom-4 w-4 h-4 rounded-full bg-blue-500 border-2 border-red-500" title="异常值"></div>
                    </div>
                 </div>
                 <div className="absolute bottom-4 text-sm text-slate-500">消费越高，小费越高 (正相关)</div>
            </div>
        </div>
    </section>
);

// --- 6. Categorical Analysis ---
export const VizCategorical: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-10 shrink-0">
            <div className="p-3 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-xl">
                <Box size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">5.6 第三招：类别对比</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 flex-1 min-h-0 items-stretch">
             <div className="flex flex-col gap-6">
                <p className="text-xl text-slate-600 dark:text-slate-300">
                    周末大家会比平时更大方吗？用<strong>箱线图</strong>和<strong>小提琴图</strong>来对比不同类别的分布。
                </p>
                <CodeBlock 
                    code={`fig, axes = plt.subplots(1, 2, figsize=(16, 6))\n\n# 左图：箱线图 (看离群点)\nsns.boxplot(data=df, x='day', y='total_bill', ax=axes[0])\n\n# 右图：小提琴图 (看密度分布)\nsns.violinplot(data=df, x='day', y='total_bill', ax=axes[1])`} 
                />
            </div>

            <div className="grid grid-cols-2 gap-4 h-full">
                {/* Simulated Boxplot */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 flex flex-col items-center justify-center">
                    <h4 className="font-bold text-slate-500 mb-4 text-sm">Boxplot</h4>
                    <div className="flex gap-4 items-end h-40">
                         {/* Box 1 */}
                         <div className="w-8 relative h-full flex flex-col justify-end items-center">
                            <div className="w-px h-full bg-slate-300 absolute left-1/2"></div>
                            <div className="w-8 h-20 bg-violet-200 dark:bg-violet-900/50 border border-violet-500 relative z-10 mb-8">
                                <div className="absolute top-1/2 w-full h-px bg-violet-800"></div>
                            </div>
                            <div className="absolute top-2 w-1.5 h-1.5 rounded-full bg-slate-800 z-20"></div>
                         </div>
                         {/* Box 2 */}
                         <div className="w-8 relative h-full flex flex-col justify-end items-center">
                            <div className="w-px h-full bg-slate-300 absolute left-1/2"></div>
                            <div className="w-8 h-24 bg-violet-200 dark:bg-violet-900/50 border border-violet-500 relative z-10 mb-6"></div>
                         </div>
                    </div>
                </div>
                 {/* Simulated Violinplot */}
                 <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 flex flex-col items-center justify-center">
                    <h4 className="font-bold text-slate-500 mb-4 text-sm">Violinplot</h4>
                    <div className="flex gap-4 items-end h-40">
                         <div className="w-10 h-32 bg-purple-400/30 rounded-full border border-purple-500 flex items-center justify-center">
                            <div className="w-1 h-20 bg-slate-800/20 rounded-full"></div>
                         </div>
                         <div className="w-10 h-28 bg-purple-400/30 rounded-full border border-purple-500 flex items-center justify-center">
                             <div className="w-1 h-16 bg-slate-800/20 rounded-full"></div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- 7. Heatmap ---
export const VizHeatmap: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-10 shrink-0">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl">
                <Grid size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">5.7 终极奥义：热力图</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 flex-1 min-h-0 items-stretch">
             <div className="flex flex-col gap-6">
                <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-4 rounded-r-xl">
                    <p className="text-red-700 dark:text-red-300 font-bold">
                        特征工程的神器。
                    </p>
                    <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                        一眼看出哪两个变量关系最紧密。颜色越深，相关性越强。
                    </p>
                </div>
                <CodeBlock 
                    code={`# 1. 计算相关系数矩阵\ncorr = df.corr(numeric_only=True)\n\n# 2. 绘制热力图\nsns.heatmap(\n    corr, \n    annot=True,      # 显示数字\n    cmap='coolwarm', # 红蓝配色\n    fmt=".2f"\n)`} 
                />
            </div>

            <div className="flex items-center justify-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg p-8">
                <div className="grid grid-cols-3 gap-1">
                    {/* Header */}
                    <div className="p-2"></div>
                    <div className="p-2 text-center font-bold text-xs">Total</div>
                    <div className="p-2 text-center font-bold text-xs">Tip</div>

                    {/* Row 1 */}
                    <div className="p-2 font-bold text-xs flex items-center">Total</div>
                    <div className="w-20 h-20 bg-red-600 flex items-center justify-center text-white font-bold">1.00</div>
                    <div className="w-20 h-20 bg-red-400 flex items-center justify-center text-white font-bold">0.68</div>

                    {/* Row 2 */}
                    <div className="p-2 font-bold text-xs flex items-center">Tip</div>
                    <div className="w-20 h-20 bg-red-400 flex items-center justify-center text-white font-bold">0.68</div>
                    <div className="w-20 h-20 bg-red-600 flex items-center justify-center text-white font-bold">1.00</div>
                </div>
            </div>
        </div>
    </section>
);

// --- 8. Footer ---
export const VizFooter: React.FC<SectionProps> = ({ onNext, isPresentation }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl isolate flex flex-col justify-center items-center text-center p-12 ${isPresentation ? 'h-full w-full max-w-7xl mx-auto' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-slate-900 opacity-80 z-0"></div>
      
      <div className="relative z-10 max-w-3xl">
          <div className="w-24 h-24 bg-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-indigo-500/40 transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <Check size={48} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Level Up! 洞察之眼已开启</h2>
          <p className="text-2xl text-indigo-100 mb-12 leading-relaxed font-light">
              你已经学会了清洗数据 (Pandas) 和洞察数据 (Seaborn)。<br/>
              现在，数据已经准备好被喂给算法了。
          </p>
          
          <button 
            onClick={onNext}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 hover:bg-indigo-50 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-white/10"
          >
            下一章：Scikit-Learn 建模
            <ArrowRight size={24} />
          </button>
      </div>
  </div>
);

// --- Main Lesson Component ---
const VisualizationLesson: React.FC<SectionProps> = (props) => {
    return (
        <div className="space-y-20 pb-20">
            <VizHero {...props} />
            <VizConcept {...props} />
            <VizWorkflow {...props} />
            <VizBasicCharts {...props} />
            <VizDistribution {...props} />
            <VizRelation {...props} />
            <VizCategorical {...props} />
            <VizHeatmap {...props} />
            <VizFooter {...props} />
        </div>
    );
};

export default VisualizationLesson;
