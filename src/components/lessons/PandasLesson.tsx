import React, { useState } from 'react';
import { 
  Database, FileSpreadsheet, Table, Search, 
  Filter, Scissors, Wrench, Layers, 
  ArrowRight, Check, LayoutGrid, 
  GitMerge, BarChart, ArrowDown,
  Download, FileText, Info, Eye
} from 'lucide-react';
import CodeBlock from '../common/CodeBlock';

const inlineCodeClass = "bg-slate-100 dark:bg-slate-800 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded font-mono text-sm";

interface SectionProps {
  onNext?: () => void;
  isPresentation?: boolean;
}

// --- 1. Hero Section ---
export const PandasHero: React.FC<SectionProps> = ({ isPresentation }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl isolate flex flex-col justify-center ${isPresentation ? 'h-full w-full max-w-6xl mx-auto' : 'min-h-[380px]'}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 opacity-90 z-0"></div>
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
    <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 left-10 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>

    <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-sm font-bold uppercase tracking-wider backdrop-blur-md">
                <FileSpreadsheet size={16} />
                <span>Chapter 04: Pandas</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                数据治理神器：<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Pandas 的全流程攻略</span>
            </h1>
            <p className="text-emerald-100 text-xl md:text-2xl leading-relaxed max-w-xl">
                在现实世界里，数据是复杂的：有文本、时间、缺失值。
                Pandas 基于 NumPy 构建，提供了像 Excel 甚至 SQL 一样强大的数据操作能力。
            </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
             <div className="relative w-64 h-64 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl flex flex-col p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-2">
                    <div className="col-span-3 h-8 bg-emerald-500/50 rounded flex items-center px-2 text-xs font-mono">Index | Col1 | Col2</div>
                    {[...Array(4)].map((_, i) => (
                        <React.Fragment key={i}>
                            <div className="h-6 bg-white/5 rounded animate-pulse" style={{ animationDelay: `${i*100}ms` }}></div>
                            <div className="h-6 bg-white/5 rounded animate-pulse" style={{ animationDelay: `${i*100 + 50}ms` }}></div>
                            <div className="h-6 bg-white/5 rounded animate-pulse" style={{ animationDelay: `${i*100 + 100}ms` }}></div>
                        </React.Fragment>
                    ))}
                </div>
             </div>
        </div>
    </div>
  </div>
);

// --- 2. Core Architecture ---
export const PandasCore: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                <LayoutGrid size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">4.1 核心架构：解剖 Pandas 的两大心脏</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 flex-1 items-center">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 h-full flex flex-col shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">1. Series (序列)</h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full">一维数据</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center mb-6">
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="text-xs text-slate-400 text-center mb-1">Index</div>
                            {['0', '1', '2'].map(i => (
                                <div key={i} className="w-12 h-10 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded flex items-center justify-center font-mono text-sm text-slate-500">{i}</div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-xs text-slate-400 text-center mb-1">Data</div>
                            {['Apple', 'Banana', 'Orange'].map(i => (
                                <div key={i} className="w-24 h-10 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded flex items-center justify-center font-bold text-blue-700 dark:text-blue-300">{i}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2"><ArrowRight size={18} className="mt-1 text-blue-500"/> 形象理解：Excel 表格中的<strong>某一列</strong>。</li>
                    <li className="flex items-start gap-2"><ArrowRight size={18} className="mt-1 text-blue-500"/> 结构：<strong>索引 (Index)</strong> + <strong>数据 (Data)</strong>。</li>
                    <li className="flex items-start gap-2"><ArrowRight size={18} className="mt-1 text-blue-500"/> 代码：<code className={inlineCodeClass}>df['价格']</code> 取出来的就是 Series。</li>
                </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 h-full flex flex-col shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2. DataFrame (数据框)</h3>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-bold rounded-full">二维数据</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 border-2 border-dashed border-emerald-500/20 rounded-xl"></div>
                    <div className="grid grid-cols-3 gap-2 p-4">
                        {/* Header */}
                        <div className="col-span-1"></div>
                        <div className="bg-emerald-100 dark:bg-emerald-900/40 rounded p-1 text-center text-xs font-bold text-emerald-700 dark:text-emerald-300">Name</div>
                        <div className="bg-emerald-100 dark:bg-emerald-900/40 rounded p-1 text-center text-xs font-bold text-emerald-700 dark:text-emerald-300">Price</div>
                        
                        {/* Row 1 */}
                        <div className="bg-slate-100 dark:bg-slate-800 rounded p-1 text-center text-xs text-slate-500">0</div>
                        <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded p-1 text-center text-sm">Apple</div>
                        <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded p-1 text-center text-sm">5.0</div>

                        {/* Row 2 */}
                        <div className="bg-slate-100 dark:bg-slate-800 rounded p-1 text-center text-xs text-slate-500">1</div>
                        <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded p-1 text-center text-sm">Banana</div>
                        <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded p-1 text-center text-sm">3.5</div>
                    </div>
                </div>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2"><ArrowRight size={18} className="mt-1 text-emerald-500"/> 形象理解：整个 Excel <strong>表格</strong>。</li>
                    <li className="flex items-start gap-2"><ArrowRight size={18} className="mt-1 text-emerald-500"/> 结构：由多个 Series 拼合而成，有<strong>行索引</strong>和<strong>列名</strong>。</li>
                </ul>
            </div>
        </div>
    </section>
);

// --- 3. Creation & Read ---
export const PandasCreation: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
                <Database size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">4.2 从零开始：创建与读取</h2>
        </div>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            我们先在代码中凭空创造一个表格，感受一下它的结构。
        </p>

        <div className="grid lg:grid-cols-2 gap-12 flex-1 min-h-0">
            <div className="flex flex-col">
                <CodeBlock 
                    code={`import pandas as pd\nimport numpy as np\n\n# 1. 构造一个字典 (Key是列名)\ndata = {\n    '日期': ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05'],\n    '城市': ['北京', '上海', '广州', '北京', '深圳'],\n    '温度': [100, 105, 120, 95, 110],\n    '风力': [3, 4, 2, 5, np.nan] # np.nan 模拟数据丢失\n}\n\n# 2. 转换为 DataFrame\ndf = pd.DataFrame(data)\n\n# 3. 设置索引 (Index)\ndf.set_index('日期', inplace=True)\n\nprint(df)`} 
                    fullHeight={true}
                    className="h-full"
                />
            </div>

            <div className="flex flex-col gap-6">
                <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 overflow-hidden">
                    <h4 className="font-bold text-slate-500 dark:text-slate-400 mb-3 text-sm uppercase tracking-wider">运行结果模拟</h4>
                    <div className="font-mono text-sm overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white">
                                    <th className="p-2">日期 (Index)</th>
                                    <th className="p-2">城市</th>
                                    <th className="p-2">温度</th>
                                    <th className="p-2">风力</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-600 dark:text-slate-300">
                                <tr><td className="p-2 font-bold">2023-01-01</td><td className="p-2">北京</td><td className="p-2">100</td><td className="p-2">3.0</td></tr>
                                <tr><td className="p-2 font-bold">2023-01-02</td><td className="p-2">上海</td><td className="p-2">105</td><td className="p-2">4.0</td></tr>
                                <tr><td className="p-2 font-bold">2023-01-03</td><td className="p-2">广州</td><td className="p-2">120</td><td className="p-2">2.0</td></tr>
                                <tr><td className="p-2 font-bold">2023-01-04</td><td className="p-2">北京</td><td className="p-2">95</td><td className="p-2">5.0</td></tr>
                                <tr><td className="p-2 font-bold">2023-01-05</td><td className="p-2">深圳</td><td className="p-2">110</td><td className="p-2 text-red-500">NaN</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-xl">
                    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2">
                        <Wrench size={18}/> 常用读取指令
                    </h4>
                    <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                        <li><code className={inlineCodeClass}>pd.read_csv('file.csv')</code>: 读取逗号分隔文件 (最常用)</li>
                        <li><code className={inlineCodeClass}>pd.read_excel('file.xlsx')</code>: 读取 Excel 文件</li>
                        <li><code className={inlineCodeClass}>pd.read_sql(...)</code>: 直接连接数据库读取</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// --- 4. Inspection ---
export const PandasInspect: React.FC<SectionProps> = ({ isPresentation }) => {
    const [activeTab, setActiveTab] = useState<'head' | 'info' | 'describe'>('head');

    return (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-xl shrink-0">
                    <Search size={32} />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">4.3 数据的“全身体检”</h2>
                    <div className="flex items-center gap-4">
                        <a 
                            href="/data/house_price.csv" 
                            download 
                            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-cyan-700 dark:text-cyan-400 rounded-lg font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700"
                        >
                            <Download size={14} />
                            下载示例数据
                        </a>
                        <span className="text-xs text-slate-400 font-mono">house_price.csv • 39KB</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 flex-1 min-h-0 items-stretch">
            {/* Left: Controls & Code */}
            <div className="flex flex-col gap-6 h-full">
                <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-xl shrink-0">
                    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-1 flex items-center gap-2">
                        <Info size={16}/> 中文乱码预警
                    </h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                        如果 CSV 文件包含中文，直接读取可能会乱码。请务必加上 encoding 参数：
                        <br/>
                        <code className="bg-amber-100 dark:bg-amber-800/50 px-1 rounded font-mono mt-1 inline-block">pd.read_csv('data.csv', encoding='utf-8-sig')</code>
                        <span className="mx-1 text-xs opacity-70">或</span>
                        <code className="bg-amber-100 dark:bg-amber-800/50 px-1 rounded font-mono mt-1 inline-block">encoding='gbk'</code>
                    </p>
                </div>

                <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit shrink-0">
                    <button 
                        onClick={() => setActiveTab('head')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${activeTab === 'head' ? 'bg-white dark:bg-slate-700 shadow text-cyan-600 dark:text-cyan-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                        <Eye size={16} /> 宏观 (Head)
                    </button>
                    <button 
                        onClick={() => setActiveTab('info')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${activeTab === 'info' ? 'bg-white dark:bg-slate-700 shadow text-purple-600 dark:text-purple-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                        <FileText size={16} /> 病历 (Info)
                    </button>
                    <button 
                        onClick={() => setActiveTab('describe')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${activeTab === 'describe' ? 'bg-white dark:bg-slate-700 shadow text-indigo-600 dark:text-indigo-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                        <Table size={16} /> 统计 (Describe)
                    </button>
                </div>

                <div className="flex-1 min-h-0">
                     <CodeBlock 
                        code={
                            activeTab === 'head' ? `# 1. 宏观概览：看前 5 行\n# 加上 encoding 防止中文乱码\ndf = pd.read_csv('house_price.csv', encoding='utf-8-sig')\n\nprint(df.head()) \n# df.tail() 可以看最后 5 行` :
                            activeTab === 'info' ? `# 2. 查病历：看类型和空值\n# 关键看点：\n# 1. Non-Null Count (有没有缺数据?)\n# 2. Dtype (类型对不对? 比如价格是不是变成字符了?)\n\ndf.info()` :
                            `# 3. 查指标：看统计分布\n# 只会统计数值类型的列 (Number only)\n\ndf.describe()`
                        } 
                        className="h-full"
                        fullHeight={true}
                    />
                </div>
            </div>

            {/* Right: Output Preview */}
            <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col h-full">
                <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center gap-2 shrink-0">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 ml-2">Output Terminal</span>
                </div>
                
                <div className="p-6 font-mono text-sm overflow-x-auto custom-scrollbar flex-1">
                    {activeTab === 'head' && (
                        <div className="text-slate-300">
                            <div className="mb-2 text-slate-500"># Output of df.head()</div>
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-700 text-cyan-400">
                                        <th className="p-2"></th>
                                        <th className="p-2">小区名称</th>
                                        <th className="p-2">户型</th>
                                        <th className="p-2">面积(㎡)</th>
                                        <th className="p-2">价格(万)</th>
                                        <th className="p-2">日期</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {id: 0, name: '阳光花园', type: '2室1厅', area: 88.5, price: 450, date: '2023-01-01'},
                                        {id: 1, name: '翠湖豪庭', type: '3室2厅', area: 120.0, price: 800, date: '2023-01-02'},
                                        {id: 2, name: '老破小', type: '1室0厅', area: 35.0, price: 180, date: '2023-01-02'},
                                        {id: 3, name: '学区房', type: '2室1厅', area: 60.0, price: 600, date: '2023-01-03'},
                                        {id: 4, name: '郊区别墅', type: '独栋', area: 240.0, price: 1200, date: '2023-01-04'},
                                    ].map((row) => (
                                        <tr key={row.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                                            <td className="p-2 text-slate-500">{row.id}</td>
                                            <td className="p-2">{row.name}</td>
                                            <td className="p-2">{row.type}</td>
                                            <td className="p-2 text-green-400">{row.area}</td>
                                            <td className="p-2 text-green-400">{row.price}</td>
                                            <td className="p-2">{row.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-2 text-slate-500 italic">... (5 rows x 5 columns)</div>
                        </div>
                    )}

                    {activeTab === 'info' && (
                        <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                            <div className="text-slate-500 mb-2"># Output of df.info()</div>
                            <div>&lt;class 'pandas.core.frame.DataFrame'&gt;</div>
                            <div>RangeIndex: 1000 entries, 0 to 999</div>
                            <div>Data columns (total 5 columns):</div>
                            <div className="my-2 border-t border-b border-slate-700 py-2">
                                <div className="grid grid-cols-[30px_100px_150px_100px] gap-2 font-bold text-slate-400 mb-1">
                                    <span>#</span><span>Column</span><span>Non-Null Count</span><span>Dtype</span>
                                </div>
                                <div className="grid grid-cols-[30px_100px_150px_100px] gap-2">
                                    <span>0</span><span>小区名称</span><span>1000 non-null</span><span className="text-red-400">object</span>
                                </div>
                                <div className="grid grid-cols-[30px_100px_150px_100px] gap-2">
                                    <span>1</span><span>户型</span><span className="text-yellow-500">850 non-null</span><span className="text-red-400">object</span>
                                </div>
                                <div className="grid grid-cols-[30px_100px_150px_100px] gap-2">
                                    <span>2</span><span>面积(㎡)</span><span>1000 non-null</span><span className="text-green-400">float64</span>
                                </div>
                                <div className="grid grid-cols-[30px_100px_150px_100px] gap-2">
                                    <span>3</span><span>价格(万)</span><span>1000 non-null</span><span className="text-green-400">int64</span>
                                </div>
                                <div className="grid grid-cols-[30px_100px_150px_100px] gap-2">
                                    <span>4</span><span>日期</span><span>1000 non-null</span><span className="text-red-400">object</span>
                                </div>
                            </div>
                            <div>dtypes: float64(1), int64(1), object(3)</div>
                            <div>memory usage: 39.2+ KB</div>
                            <div className="mt-4 p-2 bg-yellow-900/20 border border-yellow-700/50 rounded text-yellow-200 text-xs">
                                ⚠️ 注意: "户型" 只有 850 个非空值，说明有 150 个缺失值 (NaN)！
                            </div>
                        </div>
                    )}

                    {activeTab === 'describe' && (
                        <div className="text-slate-300">
                            <div className="mb-2 text-slate-500"># Output of df.describe()</div>
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-700 text-indigo-400">
                                        <th className="p-2"></th>
                                        <th className="p-2">面积(㎡)</th>
                                        <th className="p-2">价格(万)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-800"><td className="p-2 font-bold text-slate-400">count</td><td className="p-2">1000.0</td><td className="p-2">1000.0</td></tr>
                                    <tr className="border-b border-slate-800"><td className="p-2 font-bold text-slate-400">mean</td><td className="p-2">95.5</td><td className="p-2">650.2</td></tr>
                                    <tr className="border-b border-slate-800"><td className="p-2 font-bold text-slate-400">std</td><td className="p-2">30.2</td><td className="p-2">210.5</td></tr>
                                    <tr className="border-b border-slate-800"><td className="p-2 font-bold text-slate-400">min</td><td className="p-2">35.0</td><td className="p-2">180.0</td></tr>
                                    <tr className="border-b border-slate-800"><td className="p-2 font-bold text-slate-400">25%</td><td className="p-2">70.0</td><td className="p-2">450.0</td></tr>
                                    <tr className="border-b border-slate-800 bg-indigo-900/20"><td className="p-2 font-bold text-slate-400">50%</td><td className="p-2 font-bold text-white">92.0</td><td className="p-2 font-bold text-white">620.0</td></tr>
                                    <tr className="border-b border-slate-800"><td className="p-2 font-bold text-slate-400">75%</td><td className="p-2">115.0</td><td className="p-2">800.0</td></tr>
                                    <tr className="border-b border-slate-800"><td className="p-2 font-bold text-slate-400">max</td><td className="p-2">240.0</td><td className="p-2">1500.0</td></tr>
                                </tbody>
                            </table>
                            <div className="mt-4 p-2 bg-indigo-900/20 border border-indigo-700/50 rounded text-indigo-200 text-xs">
                                💡 提示: 50% 分位数即为“中位数”，比平均值更能反映真实房价水平（不受豪宅影响）。
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
)};

// --- 5. Indexing (Loc vs Iloc) ---
export const PandasIndexing: React.FC<SectionProps> = ({ isPresentation }) => {
    const [mode, setMode] = useState<'loc' | 'iloc'>('loc');

    // Data for visual table
    const columns = ['城市', '温度', '风力'];
    const rows = [
        { idx: '2023-01-01', data: ['北京', 100, 3] },
        { idx: '2023-01-02', data: ['上海', 105, 4] },
        { idx: '2023-01-03', data: ['广州', 120, 2] },
        { idx: '2023-01-04', data: ['北京', 95, 5] },
    ];

    const isSelected = (rIndex: number, cIndex: number, rLabel: string, cLabel: string) => {
        if (mode === 'loc') {
            // loc['2023-01-02', ['城市', '温度']]
            return rLabel === '2023-01-02' && (cLabel === '城市' || cLabel === '温度');
        } else {
            // iloc[0:3, 0:2] -> Rows 0,1,2; Cols 0,1
            return rIndex < 3 && cIndex < 2;
        }
    };

    return (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-10 shrink-0">
            <div className="p-3 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-xl">
                <Scissors size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">4.4 数据的“手术刀”：索引与切片</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch min-h-0 flex-1">
            {/* Left: Process Visualization */}
            <div className="flex flex-col gap-6">
                 <div className="flex gap-4 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit">
                    <button 
                        onClick={() => setMode('loc')}
                        className={`px-6 py-2 rounded-lg font-bold transition-all ${mode === 'loc' ? 'bg-white dark:bg-slate-700 shadow text-rose-600 dark:text-rose-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                        loc (按标签)
                    </button>
                    <button 
                        onClick={() => setMode('iloc')}
                        className={`px-6 py-2 rounded-lg font-bold transition-all ${mode === 'iloc' ? 'bg-white dark:bg-slate-700 shadow text-blue-600 dark:text-blue-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                        iloc (按位置)
                    </button>
                </div>

                <div className={`flex-1 p-6 rounded-3xl border-2 transition-all flex flex-col ${mode === 'loc' ? 'border-rose-100 bg-rose-50/50 dark:bg-rose-900/10 dark:border-rose-900/30' : 'border-blue-100 bg-blue-50/50 dark:bg-blue-900/10 dark:border-blue-900/30'}`}>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className={`text-xl font-bold ${mode === 'loc' ? 'text-rose-700 dark:text-rose-300' : 'text-blue-700 dark:text-blue-300'}`}>
                            {mode === 'loc' ? '🎯 标签匹配模式' : '📏 位置切分模式'}
                        </h3>
                        <div className="text-xs font-mono bg-white/50 dark:bg-black/20 px-2 py-1 rounded">
                            {mode === 'loc' ? "df.loc['2023-01-02', ['城市','温度']]" : "df.iloc[0:3, 0:2]"}
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center overflow-x-auto">
                        <table className="border-separate border-spacing-2">
                            <thead>
                                <tr>
                                    <th className="p-2 text-xs text-slate-400 font-normal italic">Index</th>
                                    {columns.map((col, i) => (
                                        <th key={col} className={`p-2 text-sm font-bold transition-colors ${mode === 'iloc' && i < 2 ? 'text-blue-600 dark:text-blue-400' : (mode === 'loc' && (col === '城市' || col === '温度') ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500')}`}>
                                            {mode === 'iloc' ? i : col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, rIdx) => (
                                    <tr key={row.idx}>
                                        <td className={`p-2 text-sm font-bold text-right transition-colors ${mode === 'iloc' && rIdx < 3 ? 'text-blue-600 dark:text-blue-400' : (mode === 'loc' && row.idx === '2023-01-02' ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500')}`}>
                                            {mode === 'iloc' ? rIdx : row.idx}
                                        </td>
                                        {row.data.map((cell, cIdx) => {
                                            const active = isSelected(rIdx, cIdx, row.idx, columns[cIdx]);
                                            return (
                                                <td key={cIdx} className={`
                                                    w-20 h-10 text-center text-sm rounded-lg border transition-all duration-300
                                                    ${active 
                                                        ? (mode === 'loc' 
                                                            ? 'bg-rose-500 text-white border-rose-600 shadow-lg scale-110' 
                                                            : 'bg-blue-500 text-white border-blue-600 shadow-lg'
                                                        ) 
                                                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600 scale-90 opacity-60'
                                                    }
                                                `}>
                                                    {cell}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                     <p className="mt-6 text-sm text-center text-slate-500 dark:text-slate-400">
                        {mode === 'loc' ? '“所见即所得”：直接呼叫行名和列名' : '“数学坐标系”：左闭右开区间 [0:3) = 0, 1, 2'}
                    </p>
                </div>
            </div>

            {/* Right: Code & Output */}
            <div className="flex flex-col gap-6 justify-center">
                 <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-xl shrink-0">
                    <p className="text-amber-800 dark:text-amber-200 font-bold flex items-center gap-2 text-sm">
                        <Check size={16} /> 最佳实践
                    </p>
                    <p className="text-amber-700 dark:text-amber-300 text-xs mt-1">
                        尽量使用 <strong>loc</strong>。代码 <code className={inlineCodeClass}>df.loc['2023-01-01']</code> 比 <code className={inlineCodeClass}>df.iloc[0]</code> 更容易读懂，也不容易因为数据排序变化而出错。
                    </p>
                </div>

                <CodeBlock code={mode === 'loc' 
                    ? `# 场景: 提取 "2023-01-02" 的 "城市" 和 "温度"\n# 注意：loc 是闭区间 (包含结束标签)\n\nprint(df.loc['2023-01-02', ['城市', '温度']])` 
                    : `# 场景: 提取前 3 行，前 2 列\n# 注意：iloc 是开区间 (不包含结束位置)\n\nprint(df.iloc[0:3, 0:2])`} 
                />
                
                {/* Output Terminal */}
                <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-lg">
                    <div className="bg-slate-800 px-4 py-2 text-xs text-slate-400 font-mono border-b border-slate-700 flex items-center justify-between">
                        <span>Output Terminal</span>
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        </div>
                    </div>
                    <div className="p-4 font-mono text-sm overflow-x-auto">
                        {mode === 'loc' ? (
                            <div className="text-slate-300">
                                <div className="mb-2 text-slate-500"># Result (Series)</div>
                                <div className="flex gap-8">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-rose-400">城市</span>
                                        <span className="text-rose-400">温度</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span>上海</span>
                                        <span>105</span>
                                    </div>
                                </div>
                                <div className="mt-2 text-slate-500 text-xs">Name: 2023-01-02, dtype: object</div>
                            </div>
                        ) : (
                            <div className="text-slate-300">
                                <div className="mb-2 text-slate-500"># Result (DataFrame)</div>
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-700 text-blue-400">
                                            <th className="p-1"></th>
                                            <th className="p-1">城市</th>
                                            <th className="p-1">温度</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td className="p-1 text-slate-500">2023-01-01</td><td className="p-1">北京</td><td className="p-1">100</td></tr>
                                        <tr><td className="p-1 text-slate-500">2023-01-02</td><td className="p-1">上海</td><td className="p-1">105</td></tr>
                                        <tr><td className="p-1 text-slate-500">2023-01-03</td><td className="p-1">广州</td><td className="p-1">120</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
)};

// --- 6. Boolean Indexing ---
export const PandasFilter: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-10 shrink-0">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl">
                <Filter size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">4.5 数据的“过滤器”：布尔索引</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">逻辑：给数据贴标签</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                    数据清洗中最强大的工具。先产生一个全是 True/False 的列表（掩码），然后把它贴到 DataFrame 上。
                </p>
                <div className="flex items-center gap-4 mb-6">
                    <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg font-bold border border-green-200 dark:border-green-800">True (留下)</div>
                    <ArrowRight className="text-slate-400" />
                    <div className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg font-bold border border-red-200 dark:border-red-800">False (扔掉)</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-sm font-mono">
                    <div className="text-slate-500">任务：找出“温度 &gt; 100”且“风力 &lt; 4”的日子</div>
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center">
                <CodeBlock code={`# 1. 定义条件\nhigh_temp = df['温度'] > 100\nlow_wind = df['风力'] < 4\n\n# 2. 组合筛选 (必须用 & 和 |，且条件要加括号)\nresult = df[high_temp & low_wind]\n\nprint(result)`} />
                
                <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-lg">
                    <div className="bg-slate-800 px-4 py-2 text-xs text-slate-400 font-mono border-b border-slate-700 flex items-center justify-between">
                        <span>Output Terminal</span>
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        </div>
                    </div>
                    <div className="p-4 overflow-x-auto">
                         <table className="w-full text-sm text-left font-mono border-collapse">
                            <thead>
                                <tr className="border-b border-slate-700 text-slate-500">
                                    <th className="p-2 w-24"></th>
                                    <th className="p-2">城市</th>
                                    <th className="p-2">温度</th>
                                    <th className="p-2">风力</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr>
                                    <td className="p-2 text-slate-500">2023-01-03</td>
                                    <td className="p-2">广州</td>
                                    <td className="p-2 text-green-400">120</td>
                                    <td className="p-2 text-green-400">2.0</td>
                                </tr>
                            </tbody>
                         </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- 7. Processing (Missing & Apply) ---
export const PandasProcess: React.FC<SectionProps> = ({ isPresentation }) => {
    const [nanStrategy, setNanStrategy] = useState<'original' | 'drop' | 'fill'>('original');

    return (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-10 shrink-0">
            <div className="p-3 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-xl">
                <Wrench size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">4.6 数据的“维修站”</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch flex-1 min-h-0">
            {/* 1. Missing Values Station */}
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col gap-6">
                 <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-red-500/30">1</span>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">缺失值 (NaN) 修复</h3>
                    </div>
                    <div className="text-xs font-mono text-slate-400">pd.dropna() / pd.fillna()</div>
                 </div>

                 {/* Controls */}
                 <div className="grid grid-cols-3 gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                    <button onClick={() => setNanStrategy('original')} className={`py-2 rounded-lg text-sm font-bold transition-all ${nanStrategy === 'original' ? 'bg-white dark:bg-slate-700 shadow text-slate-700 dark:text-slate-200' : 'text-slate-500 hover:text-slate-600'}`}>
                        原始状态
                    </button>
                    <button onClick={() => setNanStrategy('drop')} className={`py-2 rounded-lg text-sm font-bold transition-all ${nanStrategy === 'drop' ? 'bg-white dark:bg-slate-700 shadow text-red-600 dark:text-red-400' : 'text-slate-500 hover:text-red-500'}`}>
                        方案A: 删除
                    </button>
                    <button onClick={() => setNanStrategy('fill')} className={`py-2 rounded-lg text-sm font-bold transition-all ${nanStrategy === 'fill' ? 'bg-white dark:bg-slate-700 shadow text-green-600 dark:text-green-400' : 'text-slate-500 hover:text-green-500'}`}>
                        方案B: 填充
                    </button>
                 </div>

                 {/* Code Display */}
                 <div className="min-h-[80px]">
                    {nanStrategy === 'original' && (
                        <div className="h-full flex items-center justify-center border border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-slate-400 text-sm italic bg-slate-50 dark:bg-slate-800/50">
                            请选择上方策略以预览代码与结果
                        </div>
                    )}
                    {nanStrategy === 'drop' && <CodeBlock code="df.dropna(inplace=True) # 简单粗暴，直接丢弃" hideHeader />}
                    {nanStrategy === 'fill' && <CodeBlock code="mean = df['风力'].mean() # 计算平均值 4.0\ndf['风力'].fillna(mean, inplace=True) # 填补空缺" hideHeader />}
                 </div>

                 {/* Visual Table */}
                 <div className="flex-1 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800/20">
                    <table className="w-full text-sm text-center border-collapse">
                        <thead className="bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold border-b border-slate-200 dark:border-slate-700">
                            <tr><th className="p-3">日期</th><th className="p-3">风力 (Wind)</th></tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-900">
                            <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 text-slate-500">01-01</td><td className="p-3 font-mono">3.0</td></tr>
                            {nanStrategy !== 'drop' && (
                                <tr className="border-b border-slate-100 dark:border-slate-800 bg-red-50/30 dark:bg-red-900/10">
                                    <td className="p-3 text-slate-500">01-02</td>
                                    <td className="p-3 font-mono font-bold">
                                        {nanStrategy === 'original' 
                                            ? <span className="text-red-500 animate-pulse">NaN</span> 
                                            : <span className="text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">4.0</span>
                                        }
                                    </td>
                                </tr>
                            )}
                            <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 text-slate-500">01-03</td><td className="p-3 font-mono">5.0</td></tr>
                        </tbody>
                    </table>
                    {nanStrategy === 'drop' && (
                        <div className="p-3 text-center text-xs text-red-500 bg-red-50 dark:bg-red-900/20 italic border-t border-red-100 dark:border-red-900/30">
                            * Index 01-02 已被移除
                        </div>
                    )}
                 </div>
            </div>

            {/* 2. Apply Station */}
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/30">2</span>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">列变换 (Apply)</h3>
                    </div>
                    <div className="text-xs font-mono text-slate-400">df.apply(lambda x: ...)</div>
                 </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                    Pandas 最灵活的函数。想象有一条流水线，把这一列的每一个数据都拿出来，用自定义函数处理一遍，再放回新的一列。
                </div>

                <CodeBlock code={`# 任务：华氏度(F) -> 摄氏度(C)\n# 公式: (F - 32) * 5/9\n\ndf['C'] = df['F'].apply(lambda x: int((x-32)*5/9))`} hideHeader />

                {/* Interactive Table */}
                <div className="flex-1 relative border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                     <table className="w-full text-sm text-center border-collapse h-full">
                        <thead className="bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th className="p-3">城市</th>
                                <th className="p-3 text-blue-500">Temp(F)</th>
                                <th className="p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 border-l border-emerald-100 dark:border-emerald-900/30">
                                    <div className="flex items-center justify-center gap-1">
                                        <Wrench size={12} />
                                        Temp(C)
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-900">
                            {[
                                {city: '北京', f: 86, c: 30},
                                {city: '伦敦', f: 50, c: 10},
                                {city: '东京', f: 68, c: 20}
                            ].map((row, i) => (
                                <tr key={row.city} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                    <td className="p-3 font-medium text-slate-700 dark:text-slate-300">{row.city}</td>
                                    <td className="p-3 font-mono text-blue-500 group-hover:scale-110 transition-transform">{row.f}°</td>
                                    <td className="p-3 font-mono font-bold text-emerald-600 bg-emerald-50/30 dark:bg-emerald-900/10 border-l border-emerald-100 dark:border-emerald-900/30">
                                        <div className="flex items-center justify-center gap-2 opacity-80 group-hover:opacity-100">
                                            <ArrowRight size={14} className="text-slate-300 -ml-4" />
                                            {row.c}°
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
)};

// --- 8. GroupBy ---
export const PandasGroup: React.FC<SectionProps> = ({ isPresentation }) => {
    const [step, setStep] = useState<number>(0);

    // Visual data for animation
    const sourceData = [
        { city: '北京', val: 100, color: 'bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300' },
        { city: '上海', val: 105, color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300' },
        { city: '广州', val: 120, color: 'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300' },
        { city: '北京', val: 95, color: 'bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300' },
    ];

    return (
    <section className={`w-full flex flex-col justify-center ${isPresentation ? 'h-full max-w-7xl mx-auto' : ''}`}>
        <div className="flex flex-col gap-4 mb-10 shrink-0">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                    <Layers size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">4.7 数据的“透视表”：GroupBy</h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 ml-1 md:ml-3">
                数据分析的灵魂。这个过程被称为 <strong>Split-Apply-Combine</strong> (拆分-应用-合并)。
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 flex-1 min-h-0 items-stretch">
            {/* Left: Code & Logic */}
            <div className="flex flex-col gap-6 justify-center">
                <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800 p-4 rounded-2xl">
                    <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-4">交互演示：点击按钮查看过程</h3>
                    <div className="flex gap-2">
                        {[0, 1, 2, 3].map((s) => (
                            <button
                                key={s}
                                onClick={() => setStep(s)}
                                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${step === s 
                                    ? 'bg-indigo-600 text-white shadow-lg scale-105' 
                                    : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-indigo-50 dark:hover:bg-slate-700'}`}
                            >
                                {['原始数据', '1. Split (拆分)', '2. Apply (计算)', '3. Combine (合并)'][s]}
                            </button>
                        ))}
                    </div>
                </div>

                <CodeBlock code={`# 语法: df.groupby('按谁分')['算谁'].怎么算()\n\ncity_stats = df.groupby('城市')['温度'].mean()\n\nprint(city_stats)`} />
                
                <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-lg">
                    <div className="bg-slate-800 px-4 py-2 text-xs text-slate-400 font-mono border-b border-slate-700 flex items-center justify-between">
                        <span>Output Terminal</span>
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        </div>
                    </div>
                    <div className="p-4 font-mono text-sm">
                         <div className="text-slate-500 mb-2"># Result Series</div>
                         <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-700 text-slate-500">
                                    <th className="p-1">城市</th>
                                    <th className="p-1">温度 (mean)</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className={`transition-opacity duration-500 ${step === 3 ? 'opacity-100' : 'opacity-30'}`}><td className="p-1">上海</td><td className="p-1 text-indigo-400">105.0</td></tr>
                                <tr className={`transition-opacity duration-500 ${step === 3 ? 'opacity-100' : 'opacity-30'}`}>
                                    <td className="p-1">北京</td>
                                    <td className="p-1 text-indigo-400">97.5 <span className="text-slate-600 text-xs ml-2">(100+95)/2</span></td>
                                </tr>
                                <tr className={`transition-opacity duration-500 ${step === 3 ? 'opacity-100' : 'opacity-30'}`}><td className="p-1">广州</td><td className="p-1 text-indigo-400">120.0</td></tr>
                            </tbody>
                         </table>
                    </div>
                </div>
            </div>

            {/* Right: Visual Animation */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))] pointer-events-none" />
                
                <div className="w-full max-w-md space-y-8 relative z-10 min-h-[400px] flex flex-col justify-center transition-all duration-500">
                    
                    {/* Stage 0: Original */}
                    <div className={`transition-all duration-500 absolute w-full ${step === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
                        <h4 className="text-center font-bold text-slate-500 mb-4">原始 DataFrame</h4>
                        <div className="space-y-2">
                            {sourceData.map((row, i) => (
                                <div key={i} className={`flex items-center justify-between p-3 rounded-xl border ${row.color}`}>
                                    <span className="font-bold">{row.city}</span>
                                    <span className="font-mono bg-white/50 dark:bg-black/20 px-2 rounded">{row.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stage 1: Split */}
                    <div className={`transition-all duration-500 absolute w-full ${step === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                        <h4 className="text-center font-bold text-slate-500 mb-4">1. Split (按城市拆分)</h4>
                        <div className="grid grid-cols-3 gap-2">
                            {/* Group Beijing */}
                            <div className="col-span-1 space-y-2">
                                <div className="text-xs text-center text-red-500 font-bold">Group: 北京</div>
                                <div className="p-2 rounded border bg-red-100 border-red-200 text-red-700 text-xs flex justify-between"><span>北京</span><span>100</span></div>
                                <div className="p-2 rounded border bg-red-100 border-red-200 text-red-700 text-xs flex justify-between"><span>北京</span><span>95</span></div>
                            </div>
                            {/* Group Shanghai */}
                            <div className="col-span-1 space-y-2">
                                <div className="text-xs text-center text-blue-500 font-bold">Group: 上海</div>
                                <div className="p-2 rounded border bg-blue-100 border-blue-200 text-blue-700 text-xs flex justify-between"><span>上海</span><span>105</span></div>
                            </div>
                            {/* Group Guangzhou */}
                            <div className="col-span-1 space-y-2">
                                <div className="text-xs text-center text-green-500 font-bold">Group: 广州</div>
                                <div className="p-2 rounded border bg-green-100 border-green-200 text-green-700 text-xs flex justify-between"><span>广州</span><span>120</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Stage 2: Apply */}
                    <div className={`transition-all duration-500 absolute w-full ${step === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                        <h4 className="text-center font-bold text-slate-500 mb-4">2. Apply (计算平均值 Mean)</h4>
                        <div className="grid grid-cols-3 gap-2 items-end h-40">
                             <div className="flex flex-col items-center gap-2">
                                <div className="text-xs text-slate-400">(100+95)/2</div>
                                <div className="w-full bg-red-500 text-white rounded-t-lg flex items-end justify-center pb-2 font-bold shadow-lg shadow-red-500/30" style={{height: '97.5px'}}>97.5</div>
                                <div className="text-xs font-bold text-red-600">北京</div>
                             </div>
                             <div className="flex flex-col items-center gap-2">
                                <div className="text-xs text-slate-400">105/1</div>
                                <div className="w-full bg-blue-500 text-white rounded-t-lg flex items-end justify-center pb-2 font-bold shadow-lg shadow-blue-500/30" style={{height: '105px'}}>105</div>
                                <div className="text-xs font-bold text-blue-600">上海</div>
                             </div>
                             <div className="flex flex-col items-center gap-2">
                                <div className="text-xs text-slate-400">120/1</div>
                                <div className="w-full bg-green-500 text-white rounded-t-lg flex items-end justify-center pb-2 font-bold shadow-lg shadow-green-500/30" style={{height: '120px'}}>120</div>
                                <div className="text-xs font-bold text-green-600">广州</div>
                             </div>
                        </div>
                    </div>

                    {/* Stage 3: Combine */}
                    <div className={`transition-all duration-500 absolute w-full ${step === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                        <h4 className="text-center font-bold text-slate-500 mb-4">3. Combine (合并为 Series)</h4>
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-500/30 rounded-2xl p-6 shadow-2xl">
                            <table className="w-full text-left">
                                <tbody className="divide-y divide-indigo-200 dark:divide-indigo-800">
                                    <tr className="text-indigo-900 dark:text-indigo-100">
                                        <td className="py-3 font-bold">上海</td>
                                        <td className="py-3 font-mono text-right">105.0</td>
                                    </tr>
                                    <tr className="text-indigo-900 dark:text-indigo-100 bg-indigo-100/50 dark:bg-indigo-800/30">
                                        <td className="py-3 font-bold pl-2 border-l-4 border-indigo-500">北京</td>
                                        <td className="py-3 font-mono text-right pr-2">97.5</td>
                                    </tr>
                                    <tr className="text-indigo-900 dark:text-indigo-100">
                                        <td className="py-3 font-bold">广州</td>
                                        <td className="py-3 font-mono text-right">120.0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
)};

// --- 9. Footer ---
export const PandasFooter: React.FC<SectionProps> = ({ onNext, isPresentation }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl isolate flex flex-col justify-center items-center text-center p-12 ${isPresentation ? 'h-full w-full max-w-7xl mx-auto' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-slate-900 opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="relative z-10 max-w-3xl">
          <div className="w-24 h-24 bg-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/40 transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <BarChart size={48} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Pandas 技能树已点亮</h2>
          <p className="text-2xl text-emerald-100 mb-12 leading-relaxed font-light">
              数据已经就绪。<br/>
              下一章，我们将学习如何把枯燥的表格变成一眼看穿趋势的<strong>可视化图表</strong> (Matplotlib)。
          </p>
          
          <button 
            onClick={onNext}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 hover:bg-emerald-50 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-white/10"
          >
            继续：可视化图表
            <ArrowRight size={24} />
          </button>
      </div>
  </div>
);

// --- Main Lesson Component ---
const PandasLesson: React.FC<SectionProps> = (props) => {
    return (
        <div className="space-y-20 pb-20">
            <PandasHero {...props} />
            <PandasCore {...props} />
            <PandasCreation {...props} />
            <PandasInspect {...props} />
            <PandasIndexing {...props} />
            <PandasFilter {...props} />
            <PandasProcess {...props} />
            <PandasGroup {...props} />
            <PandasFooter {...props} />
        </div>
    );
};

export default PandasLesson;