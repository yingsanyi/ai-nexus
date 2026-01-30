import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import LearningView from './components/learning/LearningView';
import { Cpu, Sun, Moon } from 'lucide-react';
import { useTheme } from './contexts/ThemeContext';

const App: React.FC = () => {
    const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const handleLessonComplete = (lessonId: string) => {
        setCompletedLessons(prev => {
            const newSet = new Set(prev);
            newSet.add(lessonId);
            return newSet;
        });
    };

    const Header = () => (
        <header className="border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300 shrink-0">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <Cpu className="text-white w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        AI Nexus <span className="text-slate-500 dark:text-slate-600 font-light">| 智核</span>
                    </span>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">课程库</a>
                    <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">实验室</a>
                    <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">社区</a>
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors"
                        title="切换主题"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600"></div>
                </div>
            </div>
        </header>
    );

    return (
        <div className="fixed inset-0 h-[100dvh] w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 flex flex-col font-sans selection:bg-cyan-500/30 transition-colors duration-300 overflow-hidden">
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <main className="flex-1 relative w-full h-full overflow-hidden flex flex-col">
                            <Dashboard
                                onCourseSelect={(course) => navigate(`/course/${course.id}`)}
                                completedLessons={completedLessons}
                            />
                        </main>
                    </>
                } />
                <Route path="/course/:courseId" element={
                    <main className="flex-1 relative w-full h-full overflow-hidden flex flex-col">
                        <LearningView
                            onLessonComplete={handleLessonComplete}
                            completedLessons={completedLessons}
                        />
                    </main>
                } />
                 <Route path="/course/:courseId/lesson/:lessonId" element={
                    <main className="flex-1 relative w-full h-full overflow-hidden flex flex-col">
                        <LearningView
                            onLessonComplete={handleLessonComplete}
                            completedLessons={completedLessons}
                        />
                    </main>
                } />
            </Routes>
        </div>
    );
};

export default App;
