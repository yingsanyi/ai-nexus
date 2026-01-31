import React, { useState } from 'react';
import { 
  Wrench, Binary, Ruler, Boxes, 
  ArrowRight, Check, AlertTriangle, 
  Code, Database, Zap, Sparkles,
  ArrowDown, ListFilter, Divide,
  Copy, Activity
} from 'lucide-react';
import CodeBlock from '../common/CodeBlock';
import { MacWindowCode } from '../common/MacWindowCode';

interface SectionProps {
  onNext?: () => void;
  isPresentation?: boolean;
}



// --- 1. Hero Section ---
export const FeatEngHero: React.FC<SectionProps> = ({ isPresentation }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl isolate flex flex-col justify-center ${isPresentation ? 'h-full w-full max-w-6xl mx-auto' : 'min-h-[400px]'}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-950 opacity-90 z-0"></div>
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#818cf8 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
    
    {/* Animated Background Elements */}
    <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>

    <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-300 text-sm font-bold uppercase tracking-wider backdrop-blur-md">
                <Wrench size={16} />
                <span>Chapter 07: Feature Engineering</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                特征工程：<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-200">让数据开口说话</span>
            </h1>
            <p className="text-indigo-100 text-xl md:text-2xl leading-relaxed max-w-xl">
                数据和特征决定了机器学习的上限，而模型只是在逼近这个上限。学会这“三大战役”，把原始数据改造成模型最爱吃的样子。
            </p>
        </div>
        
        {/* Visual Metaphor: Raw Ore to Gem */}
        <div className="flex-1 flex justify-center items-center">
             <div className="relative w-72 h-72 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center p-6 transform hover:scale-105 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400">
                        <Database size={32} />
                    </div>
                    <ArrowRight className="text-slate-500" />
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg animate-pulse">
                        <Sparkles size={32} />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">点石成金</h3>
                <p className="text-sm text-slate-300 text-center">
                    Raw Data &rarr; Features
                </p>
             </div>
        </div>
    </div>
  </div>
);

// --- 2. Encoding Section ---
export const FeatEngEncoding: React.FC<SectionProps> = ({ isPresentation }) => {
    const [mode, setMode] = useState<'label' | 'onehot'>('label');

    return (
        <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
            <div className="flex items-center gap-3 mb-4 shrink-0">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                    <Binary size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">7.1 第一战：类别编码 (翻译官)</h2>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                AI 模型只认识数字。对于文字类数据，我们必须根据其<strong className="text-indigo-600 dark:text-indigo-400 font-bold mx-1">是否有序</strong>，选择不同的翻译策略。
            </p>

            <div className="grid lg:grid-cols-12 gap-6 flex-1 min-h-0 items-stretch">
                {/* Left Column: Controls & Visualization */}
                <div className="lg:col-span-5 flex flex-col gap-4 h-full">
                    {/* Controls (Horizontal) */}
                    <div className="flex gap-4 shrink-0">
                        <button
                            onClick={() => setMode('label')}
                            className={`flex-1 p-3 rounded-xl border-2 text-left transition-all ${
                                mode === 'label' 
                                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 ring-2 ring-indigo-200 dark:ring-indigo-900' 
                                : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300 bg-white dark:bg-slate-900'
                            }`}
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <ListFilter size={16} className={mode === 'label' ? 'text-indigo-600' : 'text-slate-400'} />
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white">有序类别</h3>
                            </div>
                            <div className="inline-block px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold rounded">
                                Label Encoding
                            </div>
                        </button>

                        <button
                            onClick={() => setMode('onehot')}
                            className={`flex-1 p-3 rounded-xl border-2 text-left transition-all ${
                                mode === 'onehot' 
                                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 ring-2 ring-purple-200 dark:ring-purple-900' 
                                : 'border-slate-200 dark:border-slate-800 hover:border-purple-300 bg-white dark:bg-slate-900'
                            }`}
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <Boxes size={16} className={mode === 'onehot' ? 'text-purple-600' : 'text-slate-400'} />
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white">无序类别</h3>
                            </div>
                            <div className="inline-block px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-[10px] font-bold rounded">
                                One-Hot
                            </div>
                        </button>
                    </div>

                    {/* Warning Box */}
                    <div className="px-3 py-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg shrink-0 flex items-center gap-2">
                        <AlertTriangle size={14} className="text-amber-600 dark:text-amber-400 shrink-0" />
                        <p className="text-[10px] text-amber-700 dark:text-amber-300 leading-tight">
                            警示：如果类别过多（如1万个商品ID），One-Hot 会导致维度爆炸。
                        </p>
                    </div>

                    {/* Visual Transformation (Fills remaining height) */}
                    <div className="flex-1 min-h-0 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-center relative overflow-hidden shadow-inner">
                        {mode === 'label' ? (
                            <div className="flex flex-col gap-8 animate-in fade-in zoom-in duration-500 w-full scale-110 origin-center">
                                <div className="flex justify-center gap-3">
                                    {['S', 'M', 'L', 'XL'].map((size) => (
                                        <div key={size} className="w-12 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded border border-slate-300 dark:border-slate-600 font-bold text-base text-slate-600 dark:text-slate-300 shadow-sm">
                                            {size}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="h-8 w-0.5 bg-slate-300 dark:bg-slate-600"></div>
                                    <div className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-400">map()</div>
                                    <div className="h-8 w-0.5 bg-slate-300 dark:bg-slate-600"></div>
                                </div>
                                <div className="flex justify-center gap-3">
                                    {[1, 2, 3, 4].map((num) => (
                                        <div key={num} className="w-12 h-10 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 rounded border border-indigo-300 dark:border-indigo-600 font-bold text-base text-indigo-600 dark:text-indigo-300 shadow-sm">
                                            {num}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center">
                                    <span className="text-xs text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1.5 rounded">
                                        保留大小关系 (1&lt;2&lt;3)
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 w-full scale-110 origin-center">
                                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg border border-slate-300 dark:border-slate-600 font-bold text-base text-slate-600 dark:text-slate-300">
                                    城市: 北京
                                </div>
                                <ArrowDown size={24} className="text-purple-500 animate-bounce" />
                                <div className="grid grid-cols-1 gap-3 w-full max-w-[240px]">
                                    <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 border border-purple-500">
                                        <span className="text-sm text-purple-600 dark:text-purple-300 font-bold">City_北京</span>
                                        <span className="text-xl font-bold text-purple-700 dark:text-white">1</span>
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 opacity-50">
                                        <span className="text-sm text-slate-500">City_上海</span>
                                        <span className="text-xl font-bold text-slate-400">0</span>
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 opacity-50">
                                        <span className="text-sm text-slate-500">City_深圳</span>
                                        <span className="text-xl font-bold text-slate-400">0</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Code Block */}
                <div className="lg:col-span-7 h-full min-h-0">
                    <MacWindowCode 
                        fileName={mode === 'label' ? 'pandas_map.py' : 'pandas_onehot.py'}
                        label={mode === 'label' ? 'Pandas Map' : 'Pandas get_dummies'}
                        code={mode === 'label' 
                            ? `import pandas as pd\n\ndf = pd.DataFrame({'尺码': ['S', 'XL', 'M', 'L']})\n\n# 自定义映射字典 (指定大小关系)\nsize_mapping = {\n    'S': 1, 'M': 2, 'L': 3, 'XL': 4\n}\n\n# 翻译\ndf['尺码_Code'] = df['尺码'].map(size_mapping)` 
                            : `# 独热编码 (One-Hot)\ndf = pd.DataFrame({'城市': ['北京', '上海', '深圳']})\n\n# 自动创建新列\n# prefix='City' -> City_北京, City_上海...\ndf_onehot = pd.get_dummies(df, columns=['城市'], prefix='City')\n\n# True/False -> 1/0\ndf_onehot = df_onehot.astype(int)`}
                        className="h-full"
                    />
                </div>
            </div>
        </section>
    );
};

// --- 3. Scaling Section ---
export const FeatEngScaling: React.FC<SectionProps> = ({ isPresentation }) => {
    const [scaling, setScaling] = useState<'none' | 'standard' | 'minmax'>('none');

    return (
        <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
            <div className="flex items-center gap-3 mb-6 shrink-0">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-xl">
                    <Ruler size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">7.2 第二战：特征缩放 (度量衡)</h2>
            </div>

            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                如果一个特征是几万（工资），另一个是几（身高），模型会认为工资比身高重要一万倍。我们需要统一它们的“度量衡”。
            </p>

            <div className="grid lg:grid-cols-2 gap-8 flex-1 min-h-0 items-stretch">
                {/* Left Column: Visualization */}
                <div className="flex flex-col h-full min-h-0">
                     {/* Visual Chart (Seaborn Style) */}
                    <div className="w-full h-full min-h-[400px] bg-[#EAEAF2] dark:bg-[#2C3035] rounded-2xl relative overflow-hidden select-none border border-slate-200 dark:border-slate-700 group shadow-sm">
                        {/* Grid Lines (White/Dark Grid) */}
                        <div className="absolute inset-8 opacity-50">
                            {/* Horizontal Grid */}
                            {[0, 25, 50, 75, 100].map(p => (
                                <div key={`h-${p}`} className="absolute left-0 right-0 h-0.5 bg-white dark:bg-slate-600" style={{ bottom: `${p}%` }} />
                            ))}
                            {/* Vertical Grid */}
                            {[0, 25, 50, 75, 100].map(p => (
                                <div key={`v-${p}`} className="absolute top-0 bottom-0 w-0.5 bg-white dark:bg-slate-600" style={{ left: `${p}%` }} />
                            ))}
                        </div>

                        {/* Axes Labels */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                            HEIGHT (身高)
                        </div>
                        <div className="absolute left-2 bottom-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider origin-center">
                            INCOME (工资)
                        </div>

                        {/* Axis Ticks (Simplified) */}
                        <div className="absolute left-8 bottom-8 top-8 w-px bg-transparent flex flex-col justify-between text-[10px] text-slate-400 font-mono py-1">
                            <span>{scaling === 'minmax' ? '1.0' : scaling === 'standard' ? '+3σ' : '100k'}</span>
                            <span>{scaling === 'minmax' ? '0.5' : scaling === 'standard' ? '0' : '50k'}</span>
                            <span>{scaling === 'minmax' ? '0.0' : scaling === 'standard' ? '-3σ' : '0'}</span>
                        </div>
                        <div className="absolute left-8 right-8 bottom-8 h-px bg-transparent flex justify-between text-[10px] text-slate-400 font-mono px-1">
                            <span>{scaling === 'minmax' ? '0.0' : scaling === 'standard' ? '-3σ' : '0'}</span>
                            <span>{scaling === 'minmax' ? '0.5' : scaling === 'standard' ? '0' : '150'}</span>
                            <span>{scaling === 'minmax' ? '1.0' : scaling === 'standard' ? '+3σ' : '300'}</span>
                        </div>
                        
                        {/* Plot Area */}
                        <div className="absolute inset-8">
                             {/* Center Lines for Standard */}
                             {scaling === 'standard' && (
                                <>
                                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-400/30 dark:bg-slate-400/30"></div>
                                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-400/30 dark:bg-slate-400/30"></div>
                                </>
                            )}

                            {/* Data Points */}
                            {[
                                {h: 20, i: 80}, {h: 25, i: 90}, {h: 15, i: 70}, 
                                {h: 30, i: 100}, {h: 22, i: 85},
                                // Add more points for "Scatter" feel
                                {h: 28, i: 95}, {h: 18, i: 75}, {h: 24, i: 88}
                            ].map((pt, idx) => {
                                let x, y;
                                if (scaling === 'none') {
                                    // Raw: Height (X) is tiny compared to Income (Y)
                                    // We simulate "squashed X" by keeping X range small visually
                                    x = 20 + (pt.h - 15) * 2; // Range [15,30] -> [20, 50]% width
                                    y = ((pt.i - 60) / 50) * 80 + 10; // Range [60,110] -> spread out Y
                                } else if (scaling === 'standard') {
                                    // Centered
                                    x = 50 + (pt.h - 22) * 5; 
                                    y = 50 + (pt.i - 85) * 5;
                                } else {
                                    // MinMax: 0-100
                                    x = ((pt.h - 15) / 15) * 90 + 5;
                                    y = ((pt.i - 70) / 30) * 90 + 5;
                                }

                                return (
                                    <div 
                                        key={idx}
                                        className={`absolute w-4 h-4 -ml-2 -mb-2 rounded-full border border-white/50 dark:border-slate-800/50 shadow-sm transition-all duration-700 ${
                                            scaling === 'none' ? 'bg-[#D62728]' :  // Tableau Red
                                            scaling === 'standard' ? 'bg-[#1F77B4]' : // Tableau Blue
                                            'bg-[#2CA02C]' // Tableau Green
                                        }`}
                                        style={{ 
                                            left: `${x}%`, 
                                            bottom: `${scaling === 'none' ? (pt.i > 50 ? 90 : 10) : y}%`, // Raw data issue: heavily biased
                                            opacity: 0.8
                                        }}
                                    />
                                );
                            })}

                             {/* Raw Data Annotation: "Vertical Line" Effect */}
                             {scaling === 'none' && (
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-[10%] bottom-[10%] left-[20%] w-[30%] border-2 border-dashed border-red-400/50 rounded-full"></div>
                                    <div className="absolute top-1/2 left-[35%] translate-x-4 -translate-y-1/2 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 px-3 py-1 rounded text-xs font-bold border border-red-200 dark:border-red-800 shadow-sm whitespace-nowrap z-10">
                                        Gradient Descent 难走
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Legend */}
                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-2 rounded border border-slate-200 dark:border-slate-600 shadow-sm z-20">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Legend</div>
                            <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${
                                    scaling === 'none' ? 'bg-[#D62728]' : 
                                    scaling === 'standard' ? 'bg-[#1F77B4]' : 'bg-[#2CA02C]'
                                }`}></div>
                                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                    {scaling === 'none' ? 'Sample (Raw)' : 
                                     scaling === 'standard' ? 'Sample (Std)' : 'Sample (Norm)'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Controls & Code */}
                <div className="flex flex-col gap-4 h-full min-h-0">
                    {/* Controls (Horizontal) */}
                    <div className="flex gap-4 shrink-0">
                        <button
                            onClick={() => setScaling('none')}
                            className={`flex-1 p-3 rounded-xl border-2 text-left transition-all ${
                                scaling === 'none' 
                                ? 'border-slate-500 bg-slate-100 dark:bg-slate-800' 
                                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                            }`}
                        >
                            <div className="font-bold mb-1 text-sm">原始数据</div>
                            <div className="text-[10px] text-slate-500">量纲差异大</div>
                        </button>
                        
                        <button
                            onClick={() => setScaling('standard')}
                            className={`flex-1 p-3 rounded-xl border-2 text-left transition-all ${
                                scaling === 'standard' 
                                ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20' 
                                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                            }`}
                        >
                            <div className="font-bold text-cyan-700 dark:text-cyan-300 mb-1 text-sm">标准化 ⭐</div>
                            <div className="text-[10px] text-slate-500">Z-Score</div>
                        </button>

                        <button
                            onClick={() => setScaling('minmax')}
                            className={`flex-1 p-3 rounded-xl border-2 text-left transition-all ${
                                scaling === 'minmax' 
                                ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                            }`}
                        >
                            <div className="font-bold text-green-700 dark:text-green-300 mb-1 text-sm">归一化</div>
                            <div className="text-[10px] text-slate-500">Min-Max</div>
                        </button>
                    </div>

                    {/* Warning Box */}
                    <div className="px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg shrink-0 text-[10px] text-slate-500 flex items-center gap-2">
                        <AlertTriangle size={14} className="text-slate-400 shrink-0" />
                        <span className="leading-tight">
                            <strong className="text-slate-700 dark:text-slate-300 mr-1">黄金法则:</strong>
                            训练集 fit，测试集 transform。
                        </span>
                    </div>

                    {/* Code Block */}
                    <MacWindowCode 
                        fileName="scaling.py"
                        label={scaling === 'none' ? 'Raw Data' : scaling === 'standard' ? 'StandardScaler' : 'MinMaxScaler'}
                        code={scaling === 'none' 
                            ? `# 原始数据\n# 面积: 50~200, 房间: 1~5\n# 结果：模型只看面积，忽略房间数` 
                            : scaling === 'standard'
                            ? `from sklearn.preprocessing import StandardScaler\n\nscaler = StandardScaler()\n# 均值=0, 方差=1\nX_scaled = scaler.fit_transform(X_train)\n\n# 测试集只能 transform!\nX_test_scaled = scaler.transform(X_test)`
                            : `from sklearn.preprocessing import MinMaxScaler\n\nscaler = MinMaxScaler()\n# 压缩到 [0, 1]\nX_scaled = scaler.fit_transform(X_train)`}
                        className="flex-1 min-h-0"
                    />
                </div>
            </div>
        </section>
    );
};

// --- 4. Construction Section ---
export const FeatEngConstruction: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-6 shrink-0">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl">
                <Wrench size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">7.3 第三战：特征构造 (挖掘机)</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 flex-1 min-h-0 items-stretch">
            {/* Part 1: Binning (Data Binning) */}
            <div className="flex flex-col gap-4 p-5 bg-orange-50 dark:bg-orange-900/10 rounded-3xl border border-orange-200 dark:border-orange-800">
                <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg">
                        <Divide size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200">
                        1. 数据分箱 (Binning)
                    </h3>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                    <strong>问题：</strong>有些关系不是线性的（如年龄与风险是U型曲线）。<br/>
                    <strong>解法：</strong>把连续数值切成几段，变成类别特征。
                </p>

                {/* Binning Visualization */}
                <div className="flex-1 min-h-[200px] flex flex-col items-center justify-center bg-white dark:bg-slate-900/50 rounded-2xl border border-orange-100 dark:border-orange-800/30 p-4 pl-12 pb-12 relative">
                     <div className="relative w-full max-w-[200px] h-[120px] border-l-2 border-b-2 border-slate-300 dark:border-slate-600">
                        {/* Axis Labels */}
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-slate-400 whitespace-nowrap">
                            健康风险 (Risk)
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 whitespace-nowrap">
                            年龄 (Age)
                        </div>

                        {/* U-Shape Curve */}
                        <svg className="absolute inset-0 overflow-visible" preserveAspectRatio="none">
                            <path d="M 0,20 Q 100,110 200,20" fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        
                        {/* Binning Lines */}
                        <div className="absolute left-[20%] top-0 bottom-0 border-l-2 border-dashed border-slate-400 flex items-end pb-1">
                            <span className="text-[10px] font-bold text-slate-500 -ml-2 bg-white dark:bg-slate-900 px-1 relative z-10">18</span>
                        </div>
                        <div className="absolute left-[70%] top-0 bottom-0 border-l-2 border-dashed border-slate-400 flex items-end pb-1">
                            <span className="text-[10px] font-bold text-slate-500 -ml-2 bg-white dark:bg-slate-900 px-1 relative z-10">50</span>
                        </div>

                        <div className="absolute bottom-[-20px] left-[5%] text-[10px] font-bold text-slate-500">少年</div>
                        <div className="absolute bottom-[-20px] left-[40%] text-[10px] font-bold text-slate-500">青年</div>
                        <div className="absolute bottom-[-20px] left-[80%] text-[10px] font-bold text-slate-500">老年</div>
                    </div>
                    <div className="mt-8 text-[10px] text-center text-slate-400">
                        分箱后：非线性曲线 &rarr; 3个离散台阶
                    </div>
                </div>

                <MacWindowCode 
                    fileName="binning.py"
                    label="Pandas cut"
                    code={`# 0-18岁, 18-50岁, 50-100岁\ndf['Age_Bin'] = pd.cut(df['Age'], \n  bins=[0, 18, 50, 100], \n  labels=['Child', 'Adult', 'Elder'])`}
                    className="text-xs"
                />
            </div>

            {/* Part 2: Interaction (Feature Interaction) */}
            <div className="flex flex-col gap-4 p-5 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                        <Sparkles size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">
                        2. 特征组合 (Interaction)
                    </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm">
                    <strong>问题：</strong>模型不知道“长”和“宽”相乘等于“面积”。<br/>
                    <strong>解法：</strong>手动创造组合特征，给模型“提示”。
                </p>

                {/* Interaction Visualization */}
                <div className="flex-1 min-h-[200px] flex items-center justify-center bg-white dark:bg-slate-900/50 rounded-2xl border border-blue-100 dark:border-blue-800/30 p-4 px-12 relative">
                    <div className="grid grid-cols-2 gap-8 items-center">
                        {/* Inputs */}
                        <div className="flex flex-col gap-3 items-end relative">
                             {/* Input Label (Vertical) */}
                            <div className="absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-slate-400 whitespace-nowrap">
                                原始特征 (Inputs)
                            </div>
                            
                            <div className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 text-xs font-mono w-20 text-center">Length</div>
                            <div className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 text-xs font-mono w-20 text-center">Width</div>
                        </div>
                        
                        {/* Operation */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-400 font-bold text-xl">
                            &times;
                        </div>

                        {/* Output */}
                        <div className="flex flex-col items-start pl-4 relative">
                             {/* Output Label */}
                             <div className="absolute -right-16 top-1/2 -translate-y-1/2 rotate-90 text-[10px] font-bold text-slate-400 whitespace-nowrap">
                                组合特征 (New)
                            </div>

                             <div className="w-24 h-16 bg-blue-500/20 border-2 border-blue-500 rounded flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-sm shadow-sm relative group">
                                <span className="z-10">Area</span>
                                <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
                                {/* Dimensions Labels */}
                                <div className="absolute -top-4 text-[10px] text-slate-500 font-mono">L</div>
                                <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 font-mono">W</div>
                             </div>
                             <div className="mt-2 text-[10px] text-slate-400">
                                New Feature = L × W
                             </div>
                        </div>
                    </div>
                </div>

                <MacWindowCode 
                    fileName="interaction.py"
                    label="PolynomialFeatures"
                    code={`from sklearn.preprocessing import PolynomialFeatures\n\n# 自动生成: A, B, A^2, A*B, B^2\npoly = PolynomialFeatures(degree=2)\nX_poly = poly.fit_transform(X)`}
                    className="text-xs"
                />
            </div>
        </div>
    </section>
);

// --- 5. Footer ---
export const FeatEngFooter: React.FC<SectionProps> = ({ onNext, isPresentation }) => (
    <section className={`w-full flex flex-col justify-center items-center text-center ${isPresentation ? 'h-full max-w-4xl mx-auto' : 'py-20'}`}>
        <div className="mb-8 p-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
            <Check size={48} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            检查清单：数据准备好了吗？
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl w-full mb-12">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <div className="flex items-center gap-2 font-bold text-lg mb-2 text-indigo-600 dark:text-indigo-400">
                    <Binary size={20} />
                    1. 翻译
                </div>
                <p className="text-sm text-slate-500">有序用 Label，无序用 One-Hot。</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <div className="flex items-center gap-2 font-bold text-lg mb-2 text-cyan-600 dark:text-cyan-400">
                    <Ruler size={20} />
                    2. 缩放
                </div>
                <p className="text-sm text-slate-500">所有数字特征必须标准化 (StandardScaler)。</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <div className="flex items-center gap-2 font-bold text-lg mb-2 text-orange-600 dark:text-orange-400">
                    <Wrench size={20} />
                    3. 构造
                </div>
                <p className="text-sm text-slate-500">处理非线性关系，手动组合特征。</p>
            </div>
        </div>

        {!isPresentation && (
            <button 
                onClick={onNext}
                className="group flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
            >
                完成准备，开始进阶
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
        )}
    </section>
);

// --- 6. Main Component ---
const FeatureEngineeringLesson: React.FC<SectionProps> = (props) => {
    return (
        <div className="space-y-20 pb-20">
            <FeatEngHero {...props} />
            <FeatEngEncoding {...props} />
            <FeatEngScaling {...props} />
            <FeatEngConstruction {...props} />
            <FeatEngFooter {...props} />
        </div>
    );
};

export default FeatureEngineeringLesson;
