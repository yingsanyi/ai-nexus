import React from 'react';
import { Course } from '../types';
import CourseCard from './CourseCard';
import { COURSES } from '../constants';
import { Sparkles } from 'lucide-react';

interface DashboardProps {
  onCourseSelect: (course: Course) => void;
  completedLessons: Set<string>;
}

const Dashboard: React.FC<DashboardProps> = ({ onCourseSelect, completedLessons }) => {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-24 relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-500/5 to-transparent -z-10 pointer-events-none"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="mb-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-medium mb-3">
              <Sparkles size={12} className="text-cyan-500" />
              <span>AI 驱动的下一代学习体验</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-800 to-slate-900 dark:from-white dark:via-cyan-200 dark:to-white mb-3 pb-2 tracking-tight">
            深度解析人工智能<br className="hidden md:block"/>核心算法
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            融合交互式可视化与前沿理论，从机器学习基础到大语言模型与具身智能，系统构建你的 AI 技术栈。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map(course => {
            const completedCount = course.lessons.filter(l => completedLessons.has(l.id)).length;
            const totalCount = course.lessons.length;
            const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

            return (
              <CourseCard 
                key={course.id} 
                course={course} 
                onClick={() => onCourseSelect(course)} 
                progress={progress}
                completedCount={completedCount}
              />
            );
          })}
        </div>
        
        <div className="mt-12 p-8 md:p-10 rounded-3xl bg-slate-900 dark:bg-slate-800 relative overflow-hidden shadow-2xl">
           {/* Abstract grid background */}
           <div className="absolute inset-0 opacity-20 pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
           </div>
           
           <div className="absolute top-0 right-0 p-40 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none"></div>

           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">每日梯度挑战</h2>
                <p className="text-slate-300 max-w-md">完成今日的 Loss Function 微调任务，赢取 GPU 算力积分，解锁更多高级模型可视化。</p>
              </div>
              <button className="px-8 py-4 bg-white text-slate-900 hover:bg-cyan-50 rounded-xl font-bold transition-all shadow-lg hover:scale-105 active:scale-95">
                立即开始挑战
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;