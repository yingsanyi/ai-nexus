import React from 'react';
import { 
    Terminal, 
    BookOpen, 
    Database, 
    Cpu, 
    Search, 
    Lightbulb, 
    Zap, 
    Keyboard, 
    Layout, 
    Play, 
    Save, 
    AlertTriangle, 
    CheckCircle, 
    ArrowRight,
    MousePointer,
    Table
} from 'lucide-react';

// Import logos
import vscodeLogo from '../../assets/logos/vscode-logo.svg';
import jupyterLogo from '../../assets/logos/jupyter-logo.svg';
import anacondaLogo from '../../assets/logos/anaconda-logo.svg';
import pandasLogo from '../../assets/logos/pandas-logo.svg';
import numpyLogo from '../../assets/logos/numpy-logo.svg';
import matplotlibLogo from '../../assets/logos/matplotlib-logo.svg';

const inlineCodeClass = "bg-slate-100 dark:bg-slate-800 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded font-mono text-sm";

interface SectionProps {
  onNext?: () => void;
  isPresentation?: boolean;
}

// --- 1. Hero Section ---
export const DevToolsHero: React.FC<SectionProps> = ({ onNext, isPresentation }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl isolate flex flex-col justify-center ${isPresentation ? 'h-full w-full max-w-6xl mx-auto' : 'min-h-[380px]'}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 opacity-90 z-0"></div>
    {/* Animated background elements */}
    <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
    
    <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-300 text-sm font-bold uppercase tracking-wider backdrop-blur-md">
                <Terminal size={16} />
                <span>Chapter 02: Development Tools</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                现代工坊：<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">VS Code + Jupyter</span><br/>
                <span className="text-3xl md:text-4xl text-slate-300 font-normal">的数据炼金术</span>
            </h1>
            <p className="text-indigo-100 text-xl leading-relaxed max-w-xl">
                告别原始的手工作坊。学会使用 VS Code 这一现代 IDE，就像给你的实验台装上了“机械臂”和“透视镜”，效率翻倍。
            </p>
        </div>
        
        <div className="flex-1 flex justify-center items-center">
            <div className="relative w-64 h-64 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={vscodeLogo} alt="VS Code" className="w-32 h-32 drop-shadow-lg" />
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-xl shadow-lg p-2 flex items-center justify-center animate-bounce">
                    <img src={jupyterLogo} alt="Jupyter" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-xl shadow-lg p-2 flex items-center justify-center animate-bounce delay-300">
                    <img src={anacondaLogo} alt="Anaconda" className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
    </div>
  </div>
);

// --- 2. Concept: Three-in-One ---
export const DevToolsConcept: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full ${isPresentation ? 'max-w-6xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                <Layout size={24} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">2.1 核心概念：三位一体</h2>
        </div>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
            新手常遇到的“找不到模块”报错，通常是因为没搞清这三个角色的关系。
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* VS Code Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-16 h-16 mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
                    <img src={vscodeLogo} alt="VS Code" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">1. VS Code</h3>
                <div className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">操控台 (Console)</div>
                <p className="text-slate-500 dark:text-slate-400">
                    你的工作界面。负责编辑代码、管理文件、提供插件支持。它只是一个“壳”。
                </p>
            </div>

            {/* Jupyter Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-16 h-16 mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-2xl">
                    <img src={jupyterLogo} alt="Jupyter" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">2. Jupyter</h3>
                <div className="text-orange-600 dark:text-orange-400 font-bold mb-2">实验本 (Notebook)</div>
                <p className="text-slate-500 dark:text-slate-400">
                    你的文件格式 (`.ipynb`)。支持代码分块执行、图表嵌入，是数据分析的标准载体。
                </p>
            </div>

            {/* Anaconda Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-green-500/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-16 h-16 mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-2xl">
                    <img src={anacondaLogo} alt="Anaconda" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">3. Anaconda</h3>
                <div className="text-green-600 dark:text-green-400 font-bold mb-2">发动机 (Engine)</div>
                <p className="text-slate-500 dark:text-slate-400">
                    你的运行环境。提供了 Python 解释器和各种库。VS Code 必须连接到它才能跑代码。
                </p>
            </div>
        </div>

        {/* Warning Section */}
        <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <div className="flex items-start gap-4">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full">
                    <AlertTriangle size={24} />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">新手第一坑：选择内核 (Select Kernel)</h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                        VS Code 只是一个编辑器，它不知道你要用哪个 Python。
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        👉 <strong>操作：</strong> 打开 `.ipynb` 文件后，点击右上角的 `Select Kernel`，必须选择你通过 Anaconda 创建的环境（如 `base` 或 `ai_env`）。只有选对了内核，`import pandas` 才不会报错。
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// --- 3. Features: VS Code Superpowers ---
export const DevToolsFeatures: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full ${isPresentation ? 'max-w-6xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                <Zap size={24} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">2.2 VS Code 的“超能力”</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                        <Search size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">1. 变量查看器 (Data Viewer)</h3>
                </div>
                <div className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-300">
                        也就是你的<strong>“上帝视角”</strong>。告别 `print(df)` 瞎猜数据的样子。
                    </p>
                    <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-mono text-slate-600 dark:text-slate-300">
                        1. 点击顶部工具栏的 <span className="font-bold text-blue-500">Variables</span> 按钮。<br/>
                        2. 点击 DataFrame 旁边的 <span className="inline-block align-middle"><Table size={14}/></span> 图标。<br/>
                        3. 弹出一个像 Excel 一样的交互式表格！
                    </div>
                    <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                        <CheckCircle size={16} />
                        <span>支持筛选、排序，无需写代码</span>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
                        <Lightbulb size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">2. 智能补全 (IntelliSense)</h3>
                </div>
                <div className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-300">
                        忘了函数名？记不住参数？VS Code 会自动提示。
                    </p>
                    <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-mono text-slate-600 dark:text-slate-300">
                        输入 <span className="text-purple-500">pd.re</span><br/>
                        ⬇️ 自动弹出列表:<br/>
                        <span className="bg-blue-200 dark:bg-blue-900 px-1 rounded">read_csv</span><br/>
                        read_excel<br/>
                        read_json
                    </div>
                    <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                        <CheckCircle size={16} />
                        <span>显示文档和参数说明，比网页版快得多</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- Jupyter Cell Component ---
const JupyterCell: React.FC<{ count: number; children: React.ReactNode; output?: React.ReactNode }> = ({ count, children, output }) => (
    <div className="flex flex-col gap-2 w-full font-mono text-sm">
        <div className="flex gap-3">
            <div className="text-blue-600 dark:text-blue-400 select-none pt-3 text-right shrink-0 font-bold w-16">
                In [{count}]:
            </div>
            <div className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 shadow-inner overflow-x-auto">
                <div className="whitespace-pre text-slate-800 dark:text-slate-200 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
        
        {output && (
             <div className="flex gap-3">
                <div className="text-red-500 dark:text-red-400 select-none pt-1 text-right shrink-0 font-bold w-16">
                    Out[{count}]:
                </div>
                <div className="flex-1 p-1 overflow-x-auto text-slate-700 dark:text-slate-300 whitespace-pre">
                    {output}
                </div>
            </div>
        )}
    </div>
);

// --- 4. Practice: House Price Analysis ---
export const DevToolsPractice: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full ${isPresentation ? 'max-w-6xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                <MousePointer size={24} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">2.3 实战任务：房价分析</h2>
        </div>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            请在 VS Code 中新建一个文件 <code className={inlineCodeClass}>house_price.ipynb</code>，跟随以下步骤操作。
        </p>

        <div className="space-y-8">
            {/* Step 1: Pandas */}
            <div className="flex flex-col md:flex-row gap-6 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="md:w-1/3 flex flex-col items-center text-center">
                    <img src={pandasLogo} alt="Pandas" className="w-20 h-20 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Step 1: Pandas</h3>
                    <p className="text-sm text-slate-500">数据的“Excel 杀手”</p>
                </div>
                <div className="md:w-2/3">
                    <JupyterCell count={1}>
                        <span className="text-purple-600 dark:text-purple-400 font-bold">import</span> pandas <span className="text-purple-600 dark:text-purple-400 font-bold">as</span> pd{'\n\n'}
                        <span className="text-slate-500 italic"># 伪造数据</span>{'\n'}
                        data = {'{'}{'\n'}
                        {'    '}<span className="text-green-600 dark:text-green-400">'房间数'</span>: [1, 2, 3, 4, 5, 2, 6, 8],{'\n'}
                        {'    '}<span className="text-green-600 dark:text-green-400">'面积'</span>: [30, 50, 80, 100, 120, 55, 150, 200],{'\n'}
                        {'    '}<span className="text-green-600 dark:text-green-400">'价格'</span>: [100, 160, 250, 320, 380, 170, 480, 650]{'\n'}
                        {'}'}{'\n'}
                        df = pd.DataFrame(data){'\n'}
                        df.head()
                    </JupyterCell>
                    <div className="mt-2 text-sm text-slate-500 flex items-center gap-2 pl-20">
                        <ArrowRight size={14} /> 运行后点击 Variables 按钮查看表格
                    </div>
                </div>
            </div>

            {/* Step 2: Matplotlib */}
            <div className="flex flex-col md:flex-row gap-6 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="md:w-1/3 flex flex-col items-center text-center">
                    <img src={matplotlibLogo} alt="Matplotlib" className="w-20 h-20 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Step 2: Matplotlib</h3>
                    <p className="text-sm text-slate-500">嵌入式画图</p>
                </div>
                <div className="md:w-2/3">
                    <JupyterCell count={2} output={<span className="italic text-slate-500">&lt;Figure size 800x500 with 1 Axes&gt;</span>}>
                        <span className="text-purple-600 dark:text-purple-400 font-bold">import</span> matplotlib.pyplot <span className="text-purple-600 dark:text-purple-400 font-bold">as</span> plt{'\n\n'}
                        plt.figure(figsize=(8, 5)){'\n'}
                        plt.scatter(x=df[<span className="text-green-600 dark:text-green-400">'面积'</span>], y=df[<span className="text-green-600 dark:text-green-400">'价格'</span>], color=<span className="text-green-600 dark:text-green-400">'#FF5733'</span>){'\n'}
                        plt.title(<span className="text-green-600 dark:text-green-400">"House Price Analysis"</span>){'\n'}
                        plt.xlabel(<span className="text-green-600 dark:text-green-400">"Area (sqm)"</span>){'\n'}
                        plt.ylabel(<span className="text-green-600 dark:text-green-400">"Price (10k)"</span>){'\n'}
                        plt.grid(<span className="text-blue-600 dark:text-blue-400 font-bold">True</span>, linestyle=<span className="text-green-600 dark:text-green-400">'--'</span>){'\n'}
                        plt.show()
                    </JupyterCell>
                    <div className="mt-2 text-sm text-slate-500 flex items-center gap-2 pl-20">
                        <ArrowRight size={14} /> 图表会直接显示在代码下方
                    </div>
                </div>
            </div>

            {/* Step 3: NumPy */}
            <div className="flex flex-col md:flex-row gap-6 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="md:w-1/3 flex flex-col items-center text-center">
                    <img src={numpyLogo} alt="NumPy" className="w-20 h-20 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Step 3: NumPy</h3>
                    <p className="text-sm text-slate-500">矩阵化 (关键)</p>
                </div>
                <div className="md:w-2/3">
                    <JupyterCell count={3} output={`X Shape: (8, 2)\ny Shape: (8,)`}>
                        <span className="text-purple-600 dark:text-purple-400 font-bold">import</span> numpy <span className="text-purple-600 dark:text-purple-400 font-bold">as</span> np{'\n\n'}
                        <span className="text-slate-500 italic"># 转化为机器读得懂的矩阵</span>{'\n'}
                        X = df[[<span className="text-green-600 dark:text-green-400">'房间数'</span>, <span className="text-green-600 dark:text-green-400">'面积'</span>]].values{'\n'}
                        y = df[<span className="text-green-600 dark:text-green-400">'价格'</span>].values{'\n\n'}
                        <span className="text-blue-600 dark:text-blue-400">print</span>(f<span className="text-green-600 dark:text-green-400">"X Shape: {'{'}X.shape{'}'}"</span>){'\n'}
                        <span className="text-blue-600 dark:text-blue-400">print</span>(f<span className="text-green-600 dark:text-green-400">"y Shape: {'{'}y.shape{'}'}"</span>)
                    </JupyterCell>
                    <div className="mt-2 text-sm text-slate-500 flex items-center gap-2 pl-20">
                        <ArrowRight size={14} /> 机器学习模型不吃 Excel，只吃矩阵
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- 5. Shortcuts ---
export const DevToolsShortcuts: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full ${isPresentation ? 'max-w-6xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg">
                <Keyboard size={24} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">2.4 键盘侠秘籍</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between group hover:border-blue-500 transition-colors">
                <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">运行当前格</h3>
                    <p className="text-slate-500 text-sm">并跳转到下一格</p>
                </div>
                <div className="flex gap-1">
                    <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30">Shift</kbd>
                    <span className="self-center text-slate-400">+</span>
                    <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30">Enter</kbd>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between group hover:border-blue-500 transition-colors">
                <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">仅运行当前格</h3>
                    <p className="text-slate-500 text-sm">不跳转 (调试专用)</p>
                </div>
                <div className="flex gap-1">
                    <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30">Ctrl</kbd>
                    <span className="self-center text-slate-400">+</span>
                    <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30">Alt</kbd>
                    <span className="self-center text-slate-400">+</span>
                    <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30">Enter</kbd>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between group hover:border-blue-500 transition-colors">
                <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">上方插入格</h3>
                    <p className="text-slate-500 text-sm">需在命令模式下</p>
                </div>
                <div className="flex gap-1">
                    <kbd className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30">A</kbd>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between group hover:border-blue-500 transition-colors">
                <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">下方插入格</h3>
                    <p className="text-slate-500 text-sm">需在命令模式下</p>
                </div>
                <div className="flex gap-1">
                    <kbd className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30">B</kbd>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between group hover:border-blue-500 transition-colors">
                <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">命令面板</h3>
                    <p className="text-slate-500 text-sm">解决一切疑难杂症 (如 Reload Window)</p>
                </div>
                <div className="flex gap-1">
                    <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30">F1</kbd>
                </div>
            </div>
        </div>
    </section>
);

// --- 6. Summary ---
export const DevToolsSummary: React.FC<SectionProps> = ({ onNext, isPresentation }) => (
    <div className={`p-8 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-3xl text-center ${isPresentation ? 'flex flex-col justify-center h-full max-w-5xl mx-auto' : ''}`}>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">本章小结：数据流水线</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 max-w-4xl mx-auto">
            <div className="flex-1 bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Environment</div>
                <div className="font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
                    <img src={anacondaLogo} className="w-5 h-5" alt="" /> Anaconda
                </div>
            </div>
            <ArrowRight className="text-slate-300 hidden md:block" />
            <div className="flex-1 bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Editor</div>
                <div className="font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
                    <img src={vscodeLogo} className="w-5 h-5" alt="" /> VS Code
                </div>
            </div>
            <ArrowRight className="text-slate-300 hidden md:block" />
            <div className="flex-1 bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Data</div>
                <div className="font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
                    <img src={pandasLogo} className="w-5 h-5" alt="" /> Pandas
                </div>
            </div>
            <ArrowRight className="text-slate-300 hidden md:block" />
            <div className="flex-1 bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Matrix</div>
                <div className="font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
                    <img src={numpyLogo} className="w-5 h-5" alt="" /> NumPy
                </div>
            </div>
        </div>

        {onNext && !isPresentation && (
            <div className="mt-8">
                <button 
                    onClick={onNext}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-indigo-600/30"
                >
                    <CheckCircle size={28} />
                    工坊搭建完成，准备开工
                </button>
            </div>
        )}
    </div>
);

// --- Main Component ---
const DevToolsLesson: React.FC<SectionProps> = ({ onNext }) => {
  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      <DevToolsHero onNext={onNext} />
      <DevToolsConcept />
      <DevToolsFeatures />
      <DevToolsPractice />
      <DevToolsShortcuts />
      <DevToolsSummary onNext={onNext} />
    </div>
  );
};

export default DevToolsLesson;
