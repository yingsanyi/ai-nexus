import React, { useState } from 'react';
import { ArrowRight, BrainCircuit, Check, Map, MousePointer2, Search, Target, Users, Ruler, Activity, GitBranch, Zap, Layers, AlertTriangle, ArrowDown, HelpCircle, XCircle, CheckCircle2, RotateCcw } from 'lucide-react';

interface SectionProps {
    onNext?: () => void;
    isPresentation?: boolean;
}

// --- 1. Hero Section ---
export const AlgoMapHero: React.FC<SectionProps> = ({ isPresentation }) => (
    <div className={`relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl isolate flex flex-col justify-center ${isPresentation ? 'h-full w-full max-w-6xl mx-auto' : 'min-h-[400px]'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-950 opacity-90 z-0"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#818cf8 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-300 text-sm font-bold uppercase tracking-wider backdrop-blur-md mb-4">
                        <Map size={16} />
                        <span>Chapter 08: Algorithm Map</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
                        算法地图：<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-200">选择你的最强武器</span>
                    </h1>
                    <p className="text-indigo-100 text-lg leading-relaxed">
                        面对一个 AI 问题，新手往往上来就问：“代码怎么写？”<br/>
                        而高手会先问三个问题：
                    </p>
                </div>
                
                <div className="space-y-4">
                    {[
                        { icon: Target, text: "你的数据有标签（答案）吗？", sub: "有监督 vs 无监督" },
                        { icon: Activity, text: "你要预测的是一个数字，还是一个类别？", sub: "回归 vs 分类" },
                        { icon: Users, text: "你的数据量有多大？", sub: "样本量决定算法选择" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all group backdrop-blur-sm">
                            <div className="p-3 bg-indigo-500/20 text-indigo-300 rounded-lg group-hover:scale-110 transition-transform">
                                <item.icon size={24} />
                            </div>
                            <div>
                                <div className="font-bold text-lg text-white">{item.text}</div>
                                <div className="text-sm text-indigo-200/70">{item.sub}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative h-[400px] bg-slate-800/50 rounded-3xl border border-white/10 p-8 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Visual Map Metaphor */}
                <div className="relative z-10 grid grid-cols-2 gap-6 w-full max-w-md">
                    <div className="col-span-2 flex justify-center">
                        <div className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-xl flex items-center gap-2 hover:scale-105 transition-transform">
                            <BrainCircuit size={20} />
                            START
                        </div>
                    </div>
                    <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-dashed border-l-2 border-slate-600 -translate-x-1/2 -z-10"></div>
                    
                    <div className="p-4 bg-slate-800 rounded-xl shadow-lg border border-indigo-500/30 flex flex-col items-center text-center gap-2 transform -rotate-2 translate-y-4 hover:scale-105 transition-transform hover:border-indigo-500">
                        <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center">
                            <Ruler size={20} />
                        </div>
                        <span className="font-bold text-slate-200">回归森林</span>
                    </div>

                    <div className="p-4 bg-slate-800 rounded-xl shadow-lg border border-purple-500/30 flex flex-col items-center text-center gap-2 transform rotate-2 translate-y-8 hover:scale-105 transition-transform hover:border-purple-500">
                        <div className="w-10 h-10 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center">
                            <MousePointer2 size={20} />
                        </div>
                        <span className="font-bold text-slate-200">分类群岛</span>
                    </div>

                    <div className="col-span-2 flex justify-center mt-8">
                        <div className="p-4 bg-slate-800 rounded-xl shadow-lg border border-green-500/30 flex flex-col items-center text-center gap-2 hover:scale-105 transition-transform hover:border-green-500">
                            <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">
                                <Users size={20} />
                            </div>
                            <span className="font-bold text-slate-200">聚类山谷</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- 1.5 Concepts Section (Supervised vs Unsupervised) ---
export const AlgoMapConcepts: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
                <BrainCircuit size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">8.0 核心概念：有监督 vs 无监督</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 flex-1 min-h-0">
            {/* Supervised Learning */}
            <div className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center shadow-inner">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">有监督学习</h3>
                        <div className="text-xs font-mono text-indigo-500">Supervised Learning</div>
                    </div>
                </div>
                
                <div className="space-y-4 flex-1 text-sm">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 p-3 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
                        <h4 className="font-bold text-indigo-900 dark:text-indigo-200 mb-1 flex items-center gap-2 text-xs">
                            <Users size={14} /> 
                            形象比喻：学生上课
                        </h4>
                        <p className="text-indigo-800 dark:text-indigo-300 leading-snug text-xs">
                            老师（算法）拿着课本，课本里既有<strong>题目（数据 x）</strong>，也有<strong>标准答案（标签 y）</strong>。
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-xs">关键特征：</h4>
                        <ul className="space-y-1">
                            <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                                <Check size={14} className="text-green-500 mt-0.5 shrink-0" />
                                <span>数据必须有<strong>标签 (Label)</strong>。</span>
                            </li>
                            <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                                <Check size={14} className="text-green-500 mt-0.5 shrink-0" />
                                <span>目标是<strong>预测</strong>新数据的答案。</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-xs">典型任务：</h4>
                        <div className="flex gap-2">
                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-300">回归 (预测数字)</span>
                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-300">分类 (预测类别)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Unsupervised Learning */}
            <div className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-800 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center shadow-inner">
                        <Search size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">无监督学习</h3>
                        <div className="text-xs font-mono text-orange-500">Unsupervised Learning</div>
                    </div>
                </div>

                <div className="space-y-4 flex-1 text-sm">
                    <div className="bg-orange-50 dark:bg-orange-900/10 p-3 rounded-lg border border-orange-100 dark:border-orange-900/30">
                        <h4 className="font-bold text-orange-900 dark:text-orange-200 mb-1 flex items-center gap-2 text-xs">
                            <HelpCircle size={14} />
                            形象比喻：自学 / 婴儿探索
                        </h4>
                        <p className="text-orange-800 dark:text-orange-300 leading-snug text-xs">
                            没有老师，只有一堆<strong>题目（数据 x）</strong>，<strong>没有答案（无标签）</strong>。
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-xs">关键特征：</h4>
                        <ul className="space-y-1">
                            <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                                <Check size={14} className="text-green-500 mt-0.5 shrink-0" />
                                <span>数据<strong>没有标签</strong> (只有特征)。</span>
                            </li>
                            <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                                <Check size={14} className="text-green-500 mt-0.5 shrink-0" />
                                <span>目标是<strong>发现结构</strong>或<strong>模式</strong>。</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-xs">典型任务：</h4>
                        <div className="flex gap-2">
                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-300">聚类 (找圈子)</span>
                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-300">降维 (压缩数据)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Data Example Table */}
        <div className="mt-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Activity size={18} className="text-slate-500" />
                一看就懂：数据长什么样？
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
                {/* Supervised Data */}
                <div>
                    <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-2 flex items-center justify-between">
                        <span>有监督数据 (房价预测)</span>
                        <span className="text-[10px] px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 rounded">有 y (标签)</span>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                        <table className="w-full text-xs">
                            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-500">
                                <tr>
                                    <th className="px-3 py-1.5 text-left">面积 (x1)</th>
                                    <th className="px-3 py-1.5 text-left">卧室 (x2)</th>
                                    <th className="px-3 py-1.5 text-left bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-l border-indigo-100 dark:border-indigo-900/50">价格 (y)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                                <tr><td className="px-3 py-1.5">80㎡</td><td className="px-3 py-1.5">2</td><td className="px-3 py-1.5 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/30 dark:bg-indigo-900/10 border-l border-indigo-100 dark:border-indigo-900/50">300万</td></tr>
                                <tr><td className="px-3 py-1.5">120㎡</td><td className="px-3 py-1.5">3</td><td className="px-3 py-1.5 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/30 dark:bg-indigo-900/10 border-l border-indigo-100 dark:border-indigo-900/50">500万</td></tr>
                                <tr><td className="px-3 py-1.5">60㎡</td><td className="px-3 py-1.5">1</td><td className="px-3 py-1.5 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/30 dark:bg-indigo-900/10 border-l border-indigo-100 dark:border-indigo-900/50">220万</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Unsupervised Data */}
                <div>
                    <div className="text-xs font-bold text-orange-600 dark:text-orange-400 mb-2 flex items-center justify-between">
                        <span>无监督数据 (房屋聚类)</span>
                        <span className="text-[10px] px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded">无 y</span>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                        <table className="w-full text-xs">
                            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-500">
                                <tr>
                                    <th className="px-3 py-1.5 text-left">面积 (x1)</th>
                                    <th className="px-3 py-1.5 text-left">卧室 (x2)</th>
                                    <th className="px-3 py-1.5 text-left text-slate-300 dark:text-slate-600 bg-slate-50 dark:bg-slate-800/50 border-l border-slate-100 dark:border-slate-700">???</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                                <tr><td className="px-3 py-1.5">80㎡</td><td className="px-3 py-1.5">2</td><td className="px-3 py-1.5 text-slate-300 dark:text-slate-600 bg-slate-50 dark:bg-slate-800/50 border-l border-slate-100 dark:border-slate-700">?</td></tr>
                                <tr><td className="px-3 py-1.5">120㎡</td><td className="px-3 py-1.5">3</td><td className="px-3 py-1.5 text-slate-300 dark:text-slate-600 bg-slate-50 dark:bg-slate-800/50 border-l border-slate-100 dark:border-slate-700">?</td></tr>
                                <tr><td className="px-3 py-1.5">60㎡</td><td className="px-3 py-1.5">1</td><td className="px-3 py-1.5 text-slate-300 dark:text-slate-600 bg-slate-50 dark:bg-slate-800/50 border-l border-slate-100 dark:border-slate-700">?</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div className="mt-4 text-center text-xs text-slate-500">
                👉 左边可以训练模型预测价格；右边只能分析“哪些房子比较像”。
            </div>
        </div>
    </section>
);

// --- 2. Tasks Section (Three Main Tasks) ---
export const AlgoMapTasks: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                <Target size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">8.1 维度一：三大任务 (你想要什么？)</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 flex-1">
            {/* Regression */}
            <div className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all hover:-translate-y-1 group cursor-default">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                    <Ruler size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">1. 回归 (Regression)</h3>
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">有监督</span>
                    <span className="text-slate-400 text-sm">预测“多少”</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1">
                    预测一个<strong>连续的数值</strong>。就像画一条线（拟合），尽可能穿过所有的数据点。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Case Study</div>
                    <div className="font-bold text-slate-700 dark:text-slate-200 mb-1">🥤 奶茶店长的烦恼</div>
                    <p className="text-sm text-slate-500">明天到底要煮多少斤珍珠？(5.5斤? 8.2斤?)</p>
                </div>
            </div>

            {/* Classification */}
            <div className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-800 transition-all hover:-translate-y-1 group cursor-default">
                <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                    <MousePointer2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">2. 分类 (Classification)</h3>
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded">有监督</span>
                    <span className="text-slate-400 text-sm">预测“是谁”</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1">
                    预测一个<strong>离散的类别</strong>。画一条边界（Decision Boundary），把红点和蓝点分开。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Case Study</div>
                    <div className="font-bold text-slate-700 dark:text-slate-200 mb-1">🏥 急诊室的分诊台</div>
                    <p className="text-sm text-slate-500">是普通感冒（回家吃药），还是急性阑尾炎（马上手术）？(A or B)</p>
                </div>
            </div>

            {/* Clustering */}
            <div className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-green-200 dark:hover:border-green-800 transition-all hover:-translate-y-1 group cursor-default">
                <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                    <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">3. 聚类 (Clustering)</h3>
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">无监督</span>
                    <span className="text-slate-400 text-sm">寻找“圈子”</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1">
                    没有标签。让 AI 自己发现数据内部的<strong>结构</strong>和<strong>相似性</strong>。物以类聚，人以群分。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Case Study</div>
                    <div className="font-bold text-slate-700 dark:text-slate-200 mb-1">🎩 哈利波特的分院帽</div>
                    <p className="text-sm text-slate-500">性格相似的学生堆在一起。</p>
                </div>
            </div>
        </div>
    </section>
);

// --- 3. Families Section (Algorithm Families) ---
export const AlgoMapFamilies: React.FC<SectionProps> = ({ isPresentation }) => {
    const [activeFamily, setActiveFamily] = useState<string>('linear');

    const families = [
        {
            id: 'linear',
            title: '1. 线性模型 (Linear)',
            subtitle: 'Linear Regression, Logistic Regression',
            desc: '试图画一条直线（或平面）来拟合或分割数据。',
            pros: '速度极快，可解释性最强。',
            case: '🍉 案例：直尺切西瓜',
            icon: Ruler,
            color: 'text-blue-600',
            bg: 'bg-blue-100 dark:bg-blue-900/30',
            borderColor: 'border-blue-500'
        },
        {
            id: 'tree',
            title: '2. 树模型 (Tree) 👑',
            subtitle: 'Decision Tree, Random Forest, XGBoost',
            desc: '像很多个“如果-那么” (If-Else) 的规则组合。',
            pros: '表格数据之王，准确率高，能处理非线性。',
            case: '💑 案例：相亲问卷 / 猜人游戏',
            icon: GitBranch,
            color: 'text-green-600',
            bg: 'bg-green-100 dark:bg-green-900/30',
            borderColor: 'border-green-500'
        },
        {
            id: 'svm',
            title: '3. 支持向量机 (SVM)',
            subtitle: 'SVC, SVR',
            desc: '试图找到一条最宽的“马路”（最大间隔）来分隔不同类别。',
            pros: '适合数据量不大，但维度特别高的情况。',
            case: '⚔️ 案例：两国划界 (非军事区)',
            icon: Activity,
            color: 'text-purple-600',
            bg: 'bg-purple-100 dark:bg-purple-900/30',
            borderColor: 'border-purple-500'
        },
        {
            id: 'knn',
            title: '4. 近邻算法 (KNN)',
            subtitle: 'K-Nearest Neighbors',
            desc: '“近朱者赤”。新数据像谁，它就是谁。',
            pros: '逻辑简单，不做公式推导，直接看邻居。',
            case: '🏘️ 案例：孟母三迁 / 房价估算',
            icon: Users,
            color: 'text-orange-600',
            bg: 'bg-orange-100 dark:bg-orange-900/30',
            borderColor: 'border-orange-500'
        }
    ];

    const activeData = families.find(f => f.id === activeFamily) || families[0];

    return (
        <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                    <Layers size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">8.2 维度二：武器库盘点 (你用什么打？)</h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 flex-1 min-h-0">
                {/* Left: Navigation List */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                    {families.map((f) => (
                        <button
                            key={f.id}
                            onClick={() => setActiveFamily(f.id)}
                            className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left group ${
                                activeFamily === f.id
                                    ? `${f.borderColor} bg-white dark:bg-slate-800 shadow-md`
                                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-slate-900/50'
                            }`}
                        >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${f.bg} ${f.color} shrink-0`}>
                                <f.icon size={20} />
                            </div>
                            <div>
                                <div className={`font-bold ${activeFamily === f.id ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                                    {f.title}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Right: Detail Card */}
                <div className="lg:col-span-7 h-full">
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl relative overflow-hidden flex flex-col justify-center animate-in fade-in slide-in-from-right-4 duration-300" key={activeFamily}>
                        <div className={`absolute top-0 right-0 p-32 rounded-full blur-3xl opacity-10 ${activeData.bg.split(' ')[0]}`}></div>
                        
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className={`p-4 rounded-2xl ${activeData.bg} ${activeData.color}`}>
                                <activeData.icon size={48} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{activeData.title}</h3>
                                <div className="font-mono text-slate-400">{activeData.subtitle}</div>
                            </div>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                    <BrainCircuit size={18} className="text-indigo-500" />
                                    原理
                                </h4>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {activeData.desc}
                                </p>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-1 p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-900/30">
                                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                                        <CheckCircle2 size={18} />
                                        优点
                                    </h4>
                                    <p className="text-green-700 dark:text-green-300 text-sm">
                                        {activeData.pros}
                                    </p>
                                </div>
                                <div className="flex-1 p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                                    <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2 flex items-center gap-2">
                                        <Zap size={18} />
                                        直观案例
                                    </h4>
                                    <p className="text-indigo-700 dark:text-indigo-300 text-sm font-medium">
                                        {activeData.case}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- 4. Guide Section (Decision Guide) ---
export const AlgoMapGuide: React.FC<SectionProps> = ({ isPresentation }) => {
    const [step, setStep] = useState(1);
    const [history, setHistory] = useState<number[]>([]);

    const reset = () => {
        setStep(1);
        setHistory([]);
    };

    const nextStep = (next: number) => {
        setHistory([...history, step]);
        setStep(next);
    };

    // Step Content Definitions
    const steps: Record<number, { question: string, options: { label: string, next: number, color: string }[], result?: { title: string, algo: string, icon: any, color: string } }> = {
        1: {
            question: "Step 1: 你的数据量够吗？",
            options: [
                { label: "不够 (<50个)", next: 99, color: "bg-red-500 hover:bg-red-600" },
                { label: "足够 (>50个)", next: 2, color: "bg-green-500 hover:bg-green-600" }
            ]
        },
        2: {
            question: "Step 2: 你有标签 (y) 吗？",
            options: [
                { label: "没有 (无监督)", next: 3, color: "bg-orange-500 hover:bg-orange-600" },
                { label: "有 (有监督)", next: 4, color: "bg-blue-500 hover:bg-blue-600" }
            ]
        },
        3: {
            // Unsupervised Result
            question: "",
            options: [],
            result: { title: "聚类 (Clustering)", algo: "K-Means", icon: Users, color: "text-orange-600" }
        },
        4: {
            question: "Step 3: 你的 y 是什么类型？",
            options: [
                { label: "连续数字 (房价)", next: 5, color: "bg-indigo-500 hover:bg-indigo-600" },
                { label: "离散类别 (是否)", next: 6, color: "bg-purple-500 hover:bg-purple-600" }
            ]
        },
        5: {
            // Regression Result
            question: "",
            options: [],
            result: { title: "回归 (Regression)", algo: "Lasso / Ridge / XGBoost", icon: Ruler, color: "text-indigo-600" }
        },
        6: {
            // Classification Result
            question: "",
            options: [],
            result: { title: "分类 (Classification)", algo: "逻辑回归 / SVM / 随机森林", icon: MousePointer2, color: "text-purple-600" }
        },
        99: {
            // Fail Result
            question: "",
            options: [],
            result: { title: "数据不足", algo: "别做机器学习了，这叫统计学上的“不可信”", icon: XCircle, color: "text-red-600" }
        }
    };

    const currentData = steps[step];

    return (
        <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
                    <GitBranch size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">8.3 决策向导：如何选型？</h2>
            </div>

            <div className="relative flex-1 min-h-[400px] bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] [background-size:20px_20px] [background-position:0_0,10px_10px]"></div>
                
                <div className="relative z-10 w-full max-w-2xl">
                    {/* Progress Dots */}
                    <div className="flex justify-center gap-2 mb-12">
                        {[1, 2, 4].map((s) => (
                            <div key={s} className={`w-3 h-3 rounded-full transition-all ${
                                step === s ? 'bg-emerald-500 scale-125' : 
                                history.includes(s) ? 'bg-emerald-300' : 'bg-slate-300 dark:bg-slate-700'
                            }`} />
                        ))}
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-slate-100 dark:border-slate-700 transition-all animate-in fade-in zoom-in duration-300" key={step}>
                        {currentData.result ? (
                            <div className="flex flex-col items-center gap-6">
                                <div className={`p-6 rounded-full bg-slate-100 dark:bg-slate-900 ${currentData.result.color} mb-2`}>
                                    <currentData.result.icon size={64} />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                                    推荐：{currentData.result.title}
                                </h3>
                                <div className="px-6 py-3 bg-slate-100 dark:bg-slate-900 rounded-xl font-mono font-bold text-slate-600 dark:text-slate-300">
                                    {currentData.result.algo}
                                </div>
                                <button 
                                    onClick={reset}
                                    className="mt-8 flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-colors"
                                >
                                    <RotateCcw size={16} />
                                    重新选择
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                    {currentData.question}
                                </h3>
                                <div className="flex gap-6 w-full justify-center">
                                    {currentData.options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => nextStep(opt.next)}
                                            className={`px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-transform hover:scale-105 active:scale-95 ${opt.color} min-w-[160px]`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- 5. No Free Lunch Section ---
export const AlgoMapNoFreeLunch: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl">
                <AlertTriangle size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">8.4 避坑指南：没有免费的午餐</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 flex-1 min-h-0 items-center">
            <div className="space-y-8">
                <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-3xl border border-red-100 dark:border-red-900/30">
                    <h3 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-4">
                        No Free Lunch Theorem
                    </h3>
                    <p className="text-xl text-slate-700 dark:text-slate-300 font-serif italic">
                        "没有一个算法在所有问题上都是最强的。"
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center shrink-0">
                            <Target size={24} className="text-slate-600 dark:text-slate-300" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-slate-900 dark:text-white">逻辑回归 = 瑞士军刀</h4>
                            <p className="text-slate-500">轻便、好用、随身携带，能解决 80% 的日常问题（切水果、拧螺丝）。</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center shrink-0">
                            <Zap size={24} className="text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-slate-900 dark:text-white">深度学习 = 精密手术刀</h4>
                            <p className="text-slate-500">能做开颅手术，但如果你只是想削个苹果，用手术刀不仅杀鸡用牛刀，还容易割伤手（过拟合）。</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center h-full bg-slate-100 dark:bg-slate-900 rounded-3xl p-8 relative overflow-hidden">
                {/* Visual Metaphor */}
                <div className="relative w-full max-w-md aspect-square">
                    <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-4 bg-white dark:bg-slate-800 rounded-full opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4 z-10">
                            <div className="text-6xl">⚖️</div>
                            <div className="font-bold text-slate-400">Trade-off</div>
                            <div className="text-sm text-slate-500">
                                精度 <span className="mx-2">vs</span> 速度<br/>
                                复杂度 <span className="mx-2">vs</span> 可解释性
                            </div>
                        </div>
                    </div>
                    {/* Orbiting Icons */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-lg shadow-lg animate-bounce">
                        模型复杂度
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-green-500 text-white p-2 rounded-lg shadow-lg">
                        数据规模
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white p-2 rounded-lg shadow-lg">
                        计算资源
                    </div>
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-lg shadow-lg">
                        可解释性
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- 6. Summary Footer ---
export const AlgoMapSummary: React.FC<SectionProps> = ({ onNext, isPresentation }) => (
    <section className={`w-full flex flex-col justify-center items-center text-center ${isPresentation ? 'h-full max-w-4xl mx-auto' : ''}`}>
        <div className="mb-6 p-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
            <Check size={48} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            本章小结：手里有地图，心中不慌
        </h2>
        
        <div className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm mb-12">
            <div className="grid grid-cols-4 bg-slate-50 dark:bg-slate-800/50 p-4 font-bold text-slate-500 text-sm uppercase tracking-wider">
                <div>任务</div>
                <div>核心目标</div>
                <div>一句话例子</div>
                <div>首选算法</div>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                <div className="grid grid-cols-4 p-4 items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <div className="font-bold text-blue-600">回归</div>
                    <div className="text-slate-600 dark:text-slate-300">预测数字</div>
                    <div className="text-slate-500 text-sm">预测明天多少度</div>
                    <div className="text-slate-500 font-mono text-sm">线性回归, XGBoost</div>
                </div>
                <div className="grid grid-cols-4 p-4 items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <div className="font-bold text-purple-600">分类</div>
                    <div className="text-slate-600 dark:text-slate-300">预测类别</div>
                    <div className="text-slate-500 text-sm">预测明天是否下雨</div>
                    <div className="text-slate-500 font-mono text-sm">逻辑回归, 随机森林</div>
                </div>
                <div className="grid grid-cols-4 p-4 items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <div className="font-bold text-green-600">聚类</div>
                    <div className="text-slate-600 dark:text-slate-300">发现分组</div>
                    <div className="text-slate-500 text-sm">给学生分班</div>
                    <div className="text-slate-500 font-mono text-sm">K-Means</div>
                </div>
            </div>
        </div>
        
        <div className="max-w-3xl text-slate-600 dark:text-slate-400 mb-12 space-y-2">
            <p className="font-bold text-lg text-slate-900 dark:text-white">下一章预告：</p>
            <p>理论地图有了，我们开始逐个击破。</p>
            <p>
                <strong>第 9 章</strong>，我们将从最经典、面试最爱问的 <strong>“逻辑回归” (Logistic Regression)</strong> 开始。
                别被它的名字骗了！虽然它叫“回归”，但它其实是用来解决<strong>泰坦尼克号生存预测（分类问题）</strong>的神器。
            </p>
        </div>

        {!isPresentation && (
            <button 
                onClick={onNext}
                className="group flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
            >
                下一章：逻辑回归 (其实是分类)
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
        )}
    </section>
);

// --- Main Component ---
const AlgorithmMapLesson: React.FC<SectionProps> = (props) => {
    return (
        <div className="space-y-20 pb-20">
            <AlgoMapHero {...props} />
            <AlgoMapConcepts {...props} />
            <AlgoMapTasks {...props} />
            <AlgoMapFamilies {...props} />
            <AlgoMapGuide {...props} />
            <AlgoMapNoFreeLunch {...props} />
            <AlgoMapSummary {...props} />
        </div>
    );
};

export default AlgorithmMapLesson;
