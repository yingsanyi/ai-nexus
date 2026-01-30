import React from 'react';
import { Cpu, Zap, Layers, Box, Terminal, PenTool, Cloud, Server, Globe, CheckCircle, AlertCircle, Package, Monitor, HardDrive, ArrowRight, Database } from 'lucide-react';

// Import logos
import pythonLogo from '../../assets/logos/python-logo.svg';
import anacondaLogo from '../../assets/logos/anaconda-logo.svg';
import condaLogo from '../../assets/logos/conda-logo.svg';
import jupyterLogo from '../../assets/logos/jupyter-logo.svg';
import vscodeLogo from '../../assets/logos/vscode-logo.svg';
import sklearnLogo from '../../assets/logos/sklearn-logo.svg';
import pytorchLogo from '../../assets/logos/pytorch-logo.svg';
import tensorflowLogo from '../../assets/logos/tensorflow-logo.svg';
import colabLogo from '../../assets/logos/colab-logo.svg';
import kaggleLogo from '../../assets/logos/kaggle-logo.png';
import numpyLogo from '../../assets/logos/numpy-logo.svg';
import pandasLogo from '../../assets/logos/pandas-logo.svg';
import autodlLogo from '../../assets/logos/autodl-logo.svg';

interface SectionProps {
  onNext?: () => void;
  isPresentation?: boolean;
}

// --- 1. Hero Section ---
export const EnvHero: React.FC<SectionProps> = ({ onNext, isPresentation }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl isolate flex flex-col justify-center ${isPresentation ? 'h-full w-full max-w-6xl mx-auto' : 'min-h-[380px]'}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 opacity-90 z-0"></div>
    {/* Animated background elements */}
    <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    
    <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm font-bold uppercase tracking-wider backdrop-blur-md">
                <Box size={16} />
                <span>Chapter 01: Environment</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                工欲善其事：<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AI 开发环境全景</span>
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed max-w-xl">
                Anaconda, Miniconda, Scikit-Learn, PyTorch... 这些名词到底是什么关系？
                本章为你构建一张清晰的<strong>工具地图</strong>，让环境配置不再是拦路虎。
            </p>
        </div>
        
        {/* Abstract Visualization of Environment Layers */}
        <div className="flex-1 w-full max-w-sm relative hidden md:flex flex-col gap-4 items-center justify-center">
             <div className="w-64 p-4 bg-slate-800/80 border border-slate-700 rounded-xl text-center shadow-lg backdrop-blur-sm transform translate-y-4 scale-95 opacity-80">
                <div className="font-bold text-slate-400">Hardware (CPU/GPU)</div>
             </div>
             <div className="w-64 p-4 bg-slate-700/80 border border-slate-600 rounded-xl text-center shadow-lg backdrop-blur-sm transform translate-y-2 scale-100 opacity-90">
                <div className="font-bold text-slate-300">OS & Drivers</div>
             </div>
             <div className="w-64 p-4 bg-gradient-to-r from-blue-600 to-cyan-600 border border-blue-400 rounded-xl text-center shadow-xl backdrop-blur-sm z-10">
                <div className="font-bold text-white text-lg">Python & Libraries</div>
             </div>
             <div className="w-64 p-4 bg-white/10 border border-white/20 rounded-xl text-center shadow-lg backdrop-blur-sm transform -translate-y-2 scale-105">
                <div className="font-bold text-cyan-300">Jupyter / IDE</div>
             </div>
        </div>
    </div>
  </div>
);

// --- 2. Hardware: CPU vs GPU ---
export const EnvHardware: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full ${isPresentation ? 'max-w-6xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                <HardDrive size={24} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">1.1 算力基石：CPU vs GPU</h2>
        </div>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            虽然在传统的机器学习阶段，普通电脑的 CPU 通常足够应付，但了解算力区别对未来进阶至关重要。
        </p>

        <div className="grid md:grid-cols-2 gap-6">
            {/* CPU Card */}
            <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                        <Cpu size={32} className="text-slate-600 dark:text-slate-400 group-hover:text-blue-500" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">CPU (中央处理器)</h3>
                        <p className="text-sm text-slate-500">核心少，擅长逻辑控制</p>
                    </div>
                </div>
                <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-center">
                    <span className="text-4xl block mb-2">👨‍🏫</span>
                    <div className="font-bold text-slate-700 dark:text-slate-300 text-lg">角色：老教授</div>
                    <div className="text-sm text-slate-500 mt-1">博学多才，擅长处理复杂的顺序指令</div>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong>现状：</strong> 在学习 <strong>Scikit-Learn</strong> 等传统机器学习算法时，CPU 是主力，处理表格数据绰绰有余。
                </p>
            </div>

            {/* GPU Card */}
            <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-green-50 dark:group-hover:bg-green-900/20 transition-colors">
                        <Zap size={32} className="text-slate-600 dark:text-slate-400 group-hover:text-green-500" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">GPU (图形处理器)</h3>
                        <p className="text-sm text-slate-500">核心多，擅长并发计算</p>
                    </div>
                </div>
                <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-center">
                    <span className="text-4xl block mb-2">👷👷‍♀️👷‍♂️</span>
                    <div className="font-bold text-slate-700 dark:text-slate-300 text-lg">角色：千人计算团</div>
                    <div className="text-sm text-slate-500 mt-1">人多力量大，擅长同时搬运砖头</div>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong>现状：</strong> 到了 <strong>深度学习</strong> 阶段（处理图像、大模型），才必须用到 GPU 加速大规模矩阵运算。
                </p>
            </div>
        </div>
    </section>
);

// --- 3. Software: Python & Conda ---
export const EnvSoftware: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full ${isPresentation ? 'max-w-6xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg">
                <Package size={24} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">1.2 软件管家：Python 与 Conda</h2>
        </div>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            很多新手最困惑的问题是：<em>“我已经装了 Python，为什么还要装 Conda？”</em> 这就涉及到了<strong>依赖管理</strong>的问题。
        </p>

        <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <div className="flex-1 text-center max-w-xs">
                    <div className="w-24 h-24 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-200 dark:border-slate-700 mb-4 p-4">
                        <img src={pythonLogo} alt="Python" className="w-full h-full object-contain" />
                    </div>
                    <div className="font-bold text-xl mb-2 text-slate-800 dark:text-white">原生 Python</div>
                    <div className="text-lg font-medium text-slate-500">裸露的发动机</div>
                    <p className="text-sm text-slate-400 mt-2">可以直接装配件（库），但不同项目容易产生冲突。</p>
                </div>
                <div className="text-slate-300">
                    <ArrowRight size={48} className="hidden md:block" />
                    <ArrowRight size={48} className="rotate-90 md:hidden" />
                </div>
                <div className="flex-1 text-center max-w-xs">
                    <div className="w-24 h-24 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center border-4 border-green-500 mb-4 shadow-lg shadow-green-500/20 p-4">
                        <img src={anacondaLogo} alt="Anaconda" className="w-full h-full object-contain" />
                    </div>
                    <div className="font-bold text-xl mb-2 text-slate-800 dark:text-white">Conda 环境</div>
                    <div className="text-lg font-medium text-slate-500">专业的 4S 店</div>
                    <p className="text-sm text-slate-400 mt-2">提供<strong>虚拟环境 (Virtual Environment)</strong>，隔离不同项目，互不干扰。</p>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-2xl relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10">
                    <img src={anacondaLogo} alt="Anaconda" className="w-32 h-32" />
                </div>
                <h4 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                    <img src={anacondaLogo} className="w-8 h-8 object-contain" alt="Anaconda" />
                    Anaconda (巨无霸)
                </h4>
                <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-xs rounded-md font-bold">500MB+</span>
                    <span className="px-2 py-1 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-xs rounded-md font-bold">预装 1500+ 库</span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 relative z-10">
                    <strong>比喻：精装修豪宅</strong>。拎包入住，家具齐全，适合初学者，不想折腾安装包的人。
                </p>
                <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-bold bg-green-100 dark:bg-green-900/30 px-3 py-1.5 rounded-lg w-fit relative z-10">
                    <CheckCircle size={18} />
                    <span>本教程推荐</span>
                </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl relative overflow-hidden">
                 <div className="absolute top-4 right-4 opacity-10">
                    <img src={condaLogo} alt="Miniconda" className="w-32 h-32" />
                </div>
                <h4 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <img src={condaLogo} className="w-8 h-8 object-contain" alt="Miniconda" />
                    Miniconda (精简版)
                </h4>
                <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-md font-bold">50MB</span>
                    <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-md font-bold">仅基础环境</span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 relative z-10">
                    <strong>比喻：毛坯房</strong>。只给你四面墙，需要什么家具（库）自己买，适合进阶用户或服务器部署。
                </p>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold bg-slate-200 dark:bg-slate-800 px-3 py-1.5 rounded-lg w-fit relative z-10">
                    <CheckCircle size={18} />
                    <span>进阶推荐</span>
                </div>
            </div>
        </div>
    </section>
);

// --- 4. Platform: Jupyter vs IDE ---
export const EnvPlatform: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full ${isPresentation ? 'max-w-6xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg">
                <Monitor size={24} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">1.3 作战平台</h2>
        </div>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            代码写在哪里？这取决于你的开发阶段。
        </p>

        <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
                <div className="p-8 bg-orange-50 dark:bg-orange-900/10 border-b md:border-b-0 md:border-r border-orange-100 dark:border-orange-900/20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/10 p-2">
                             <img src={jupyterLogo} className="w-full h-full object-contain" alt="Jupyter" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Jupyter Notebook</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <div className="mt-1 bg-orange-100 dark:bg-orange-900/30 p-1 rounded text-orange-600 dark:text-orange-400">
                                <CheckCircle size={18} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg">所见即所得</h4>
                                <p className="text-slate-600 dark:text-slate-400">代码分块执行，运行一段代码，立刻就能在下方看到数据图表。</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="mt-1 bg-orange-100 dark:bg-orange-900/30 p-1 rounded text-orange-600 dark:text-orange-400">
                                <CheckCircle size={18} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg">探索式编程</h4>
                                <p className="text-slate-600 dark:text-slate-400">非常适合数据分析、实验和教学演示。</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-xl text-lg font-bold text-center shadow-lg shadow-orange-500/20">
                        数据分析入门首选 🌟
                    </div>
                </div>
                
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/10 p-2">
                             <img src={vscodeLogo} className="w-full h-full object-contain" alt="VS Code" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">VS Code</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <div className="mt-1 bg-slate-100 dark:bg-slate-800 p-1 rounded text-slate-500 dark:text-slate-400">
                                <CheckCircle size={18} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg">工程化部署</h4>
                                <p className="text-slate-600 dark:text-slate-400">适合开发大型项目、Web 应用，文件结构清晰。</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="mt-1 bg-slate-100 dark:bg-slate-800 p-1 rounded text-slate-500 dark:text-slate-400">
                                <CheckCircle size={18} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg">强大调试</h4>
                                <p className="text-slate-600 dark:text-slate-400">断点调试、智能代码补全体验更好。</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl text-lg font-bold text-center border border-slate-200 dark:border-slate-700">
                        进阶开发必备
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- 5. Weapons: Scikit-Learn vs PyTorch ---
export const EnvWeapons: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full ${isPresentation ? 'max-w-6xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                <Layers size={24} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">1.4 核心武器库</h2>
        </div>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            在机器学习阶段，我们暂时不需要动用“重型火炮”，一把瑞士军刀足矣。
        </p>

        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 border-2 border-purple-100 dark:border-purple-900/30 rounded-2xl p-8 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 px-4 py-2 bg-purple-100 dark:bg-purple-900/50 rounded-bl-2xl text-purple-700 dark:text-purple-300 font-bold text-sm">
                    本阶段重点
                </div>
                <div className="flex items-center gap-4 mb-4">
                     <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-xl p-2 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                        <img src={sklearnLogo} className="w-full h-full object-contain" alt="Scikit-Learn" />
                     </div>
                     <div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Scikit-Learn</h3>
                        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">传统机器学习的“瑞士军刀”</p>
                     </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                    它是 AI 界的“标准教科书”，封装了几乎所有经典的机器学习算法。API 设计统一且优雅。
                </p>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <span className="w-3 h-3 rounded-full bg-purple-500 shrink-0"></span>
                        <span className="text-slate-700 dark:text-slate-300"><strong>分类：</strong>垃圾邮件识别 (SVM, 决策树)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <span className="w-3 h-3 rounded-full bg-purple-500 shrink-0"></span>
                        <span className="text-slate-700 dark:text-slate-300"><strong>回归：</strong>房价预测 (线性回归, 随机森林)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <span className="w-3 h-3 rounded-full bg-purple-500 shrink-0"></span>
                        <span className="text-slate-700 dark:text-slate-300"><strong>聚类：</strong>用户分组 (K-Means)</span>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 opacity-80">
                <div className="flex items-center gap-4 mb-4">
                     <div className="flex -space-x-4">
                         <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full p-2 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center z-10">
                            <img src={pytorchLogo} className="w-full h-full object-contain" alt="PyTorch" />
                         </div>
                         <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full p-2 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                            <img src={tensorflowLogo} className="w-full h-full object-contain" alt="TensorFlow" />
                         </div>
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">PyTorch / TF</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">深度学习的“重型火炮”</p>
                     </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                    也就是大家常说的“AI 框架”。能搭建复杂的神经网络，处理非结构化数据。
                </p>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <span className="w-3 h-3 rounded-full bg-slate-400 shrink-0"></span>
                        <span className="text-slate-600 dark:text-slate-400"><strong>图像：</strong>人脸识别、医学影像诊断</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <span className="w-3 h-3 rounded-full bg-slate-400 shrink-0"></span>
                        <span className="text-slate-600 dark:text-slate-400"><strong>自然语言：</strong>ChatGPT, 机器翻译</span>
                    </div>
                </div>
                <div className="mt-6 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm text-slate-500">
                    后续进阶章节引入
                </div>
            </div>
        </div>
    </section>
);

// --- 6. Cloud: AutoDL & Colab ---
export const EnvCloud: React.FC<SectionProps> = ({ isPresentation }) => (
    <section className={`w-full ${isPresentation ? 'max-w-6xl mx-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-lg">
                <Cloud size={24} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">1.5 “云端”借力：算力平台推荐</h2>
        </div>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            如果你不想在本地配置环境，或者电脑配置较低，可以使用云端算力平台。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://www.autodl.com/" target="_blank" rel="noopener noreferrer" className="group flex flex-col p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-sky-500 hover:shadow-lg transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-sky-100 dark:bg-sky-900/30 rounded-xl text-sky-500 group-hover:scale-110 transition-transform flex items-center justify-center w-14 h-14">
                        <img src={autodlLogo} className="w-full h-full object-contain" alt="AutoDL" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white">AutoDL</h3>
                </div>
                <div className="flex-1">
                    <p className="text-base text-slate-500 dark:text-slate-400 mb-4">国内首选算力租赁平台。专为 AI 开发者设计。</p>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-4">
                        <li className="flex items-start gap-2">
                            <span className="text-sky-500 mt-1">•</span>
                            <span>服务器在国内，网速快</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-sky-500 mt-1">•</span>
                            <span>无需特殊网络环境</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-sky-500 mt-1">•</span>
                            <span>按小时计费，性价比高</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-bold px-3 py-1.5 bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 rounded-lg inline-block">
                        国内首选 🇨🇳
                    </div>
                </div>
            </a>

            <a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer" className="group flex flex-col p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-orange-500 hover:shadow-lg transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-orange-500 group-hover:scale-110 transition-transform flex items-center justify-center w-14 h-14">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" className="w-full h-full object-contain" alt="Colab" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white">Google Colab</h3>
                </div>
                <div className="flex-1">
                    <p className="text-base text-slate-500 dark:text-slate-400 mb-4">谷歌全家桶。免费的 Jupyter Notebook 环境。</p>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-4">
                        <li className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>赠送免费 GPU (甚至 TPU)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>与 Google Drive 打通</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-slate-400 mt-1">•</span>
                            <span className="text-slate-400">需科学上网，有使用限制</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-bold px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-lg inline-block">
                        免费算力 🆓
                    </div>
                </div>
            </a>

            <a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer" className="group flex flex-col p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all h-full cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-500 group-hover:scale-110 transition-transform flex items-center justify-center w-14 h-14">
                        <img src={kaggleLogo} className="w-full h-full object-contain" alt="Kaggle" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white">Kaggle</h3>
                </div>
                <div className="flex-1">
                    <p className="text-base text-slate-500 dark:text-slate-400 mb-4">全球最大的数据科学社区。在线跑数据。</p>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-4">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>海量公开数据集直接挂载</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>无需下载数据，云端运行</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>适合练手和比赛</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-bold px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg inline-block">
                        数据竞赛 🏆
                    </div>
                </div>
            </a>
        </div>
    </section>
);

// --- 7. Footer: Summary ---
export const EnvFooter: React.FC<SectionProps> = ({ onNext, isPresentation }) => (
    <div className={`p-8 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 rounded-3xl text-center ${isPresentation ? 'flex flex-col justify-center h-full max-w-5xl mx-auto' : ''}`}>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">本章小结：你的入门装备</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10 text-left">
            <div className="bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center p-2">
                    <img src={anacondaLogo} className="w-full h-full object-contain" alt="Anaconda" />
                </div>
                <div>
                    <div className="font-bold text-slate-800 dark:text-white">Anaconda</div>
                    <div className="text-sm text-slate-500">环境管家，一键安装</div>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center p-2">
                    <img src={jupyterLogo} className="w-full h-full object-contain" alt="Jupyter" />
                </div>
                <div>
                    <div className="font-bold text-slate-800 dark:text-white">Jupyter Notebook</div>
                    <div className="text-sm text-slate-500">探索式编程利器</div>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center p-2">
                    <img src={sklearnLogo} className="w-full h-full object-contain" alt="Scikit-Learn" />
                </div>
                <div>
                    <div className="font-bold text-slate-800 dark:text-white">Scikit-Learn</div>
                    <div className="text-sm text-slate-500">机器学习核心库</div>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center p-2 relative">
                    <div className="absolute top-1 left-1 w-6 h-6">
                        <img src={numpyLogo} className="w-full h-full object-contain" alt="NumPy" />
                    </div>
                    <div className="absolute bottom-1 right-1 w-6 h-6">
                        <img src={pandasLogo} className="w-full h-full object-contain" alt="Pandas" />
                    </div>
                </div>
                <div>
                    <div className="font-bold text-slate-800 dark:text-white">NumPy & Pandas</div>
                    <div className="text-sm text-slate-500">数据处理助手</div>
                </div>
            </div>
        </div>

        {onNext && !isPresentation && (
            <div className="mt-8">
                <button 
                    onClick={onNext}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
                >
                    <CheckCircle size={28} />
                    装备完毕，继续前进
                </button>
            </div>
        )}
    </div>
);


// --- Main Component ---
const EnvSetupLesson: React.FC<SectionProps> = ({ onNext }) => {
  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      <EnvHero onNext={onNext} />
      <EnvHardware />
      <EnvSoftware />
      <EnvPlatform />
      <EnvWeapons />
      <EnvCloud />
      <EnvFooter onNext={onNext} />
    </div>
  );
};

export default EnvSetupLesson;
