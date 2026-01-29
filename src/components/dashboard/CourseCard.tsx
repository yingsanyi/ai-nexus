import React from 'react';
import { Course } from '../../types';
import { BrainCircuit, Network, MessageSquareText, ChevronRight, Bot } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
  progress: number;
  completedCount: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick, progress, completedCount }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6 text-white" />;
      case 'Network': return <Network className="w-6 h-6 text-white" />;
      case 'MessageSquareText': return <MessageSquareText className="w-6 h-6 text-white" />;
      case 'Bot': return <Bot className="w-6 h-6 text-white" />;
      default: return <BrainCircuit className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div
      onClick={onClick}
      className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 cursor-pointer hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/5 dark:hover:shadow-cyan-900/10 hover:-translate-y-1 overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.color} opacity-5 dark:opacity-10 blur-3xl group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity`}></div>

      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${course.color} shadow-lg shadow-black/10 dark:shadow-black/40`}>
          {getIcon(course.icon)}
        </div>
        <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          {course.difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
        {course.title}
      </h3>

      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
        {course.description}
      </p>

      <div className="flex items-center text-cyan-600 dark:text-cyan-500 text-sm font-medium">
        <span>{progress > 0 ? '继续学习' : '开始学习'}</span>
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>

      {/* Progress Bar */}
      <div className="mt-5 space-y-2">
        <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
          <span>进度</span>
          <span>{Math.round(progress)}% ({completedCount}/{course.lessons.length})</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-out ${progress === 100 ? 'bg-green-500' : 'bg-cyan-500'}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;