import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Course, Lesson } from '../types';
import { ArrowLeft, Activity, PlayCircle, Menu, ChevronRight, CheckCircle2, Circle, Sun, Moon, Layout, MessageSquare, X, PanelLeftClose, PanelLeftOpen, Sparkles, BookOpen, Lightbulb, HelpCircle, GraduationCap, LayoutGrid, Clock, Calendar, ChevronLeft, ArrowUp, AlertTriangle, Presentation } from 'lucide-react';
import ChatTutor from './ChatTutor';
import NeuralNetViz from './Visualizations/NeuralNetViz';
import LossChart from './Visualizations/LossChart';
import ConvolutionViz from './Visualizations/ConvolutionViz';
import IntroJourney, { 
    IntroHero, 
    IntroFooter, 
    IntroWhyAI_Slide1, 
    IntroWhyAI_Slide2, 
    IntroSkills_Slide1, 
    IntroSkills_Slide2, 
    IntroValley_Slide1, 
    IntroValley_Slide2
} from './lessons/IntroJourney';
import PresentationMode from './PresentationMode';
import { CustomCodeBlock, CustomBlockquote } from './MarkdownComponents';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { useTheme } from '../contexts/ThemeContext';

interface LearningViewProps {
  course: Course;
  onBack: () => void;
  onLessonComplete: (lessonId: string) => void;
  completedLessons: Set<string>;
}

const LearningView: React.FC<LearningViewProps> = ({ course, onBack, onLessonComplete, completedLessons }) => {
  const [activeLessonId, setActiveLessonId] = useState<string>(course.lessons[0].id);
  const [showChat, setShowChat] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  
  // Confirmation Dialog State
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [pendingAction, setPendingAction] = useState<'next' | 'finish' | null>(null);

  // Use state to track screen size for conditional logic
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [showSyllabus, setShowSyllabus] = useState(true);

  // State for text selection popover
  const [selection, setSelection] = useState<{x: number, y: number, text: string} | null>(null);
  const [aiTrigger, setAiTrigger] = useState<string | null>(null);
  
  // Scroll progress
  const [readingProgress, setReadingProgress] = useState(0);

  // Initialize and track screen size
  useEffect(() => {
    const handleResize = () => {
        const large = window.innerWidth >= 1024; // lg breakpoint
        setIsLargeScreen(large);
        if (large) setShowSyllabus(true);
        else setShowSyllabus(false);
    };
    
    // Initial check
    if (typeof window !== 'undefined') {
        const large = window.innerWidth >= 1024;
        setIsLargeScreen(large);
        setShowSyllabus(large); 
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { theme, toggleTheme } = useTheme();

  const activeLessonIndex = course.lessons.findIndex(l => l.id === activeLessonId);
  const activeLesson = course.lessons[activeLessonIndex] || course.lessons[0];

  const proceedToNextLesson = () => {
    onLessonComplete(activeLesson.id);
    if (activeLessonIndex < course.lessons.length - 1) {
        setActiveLessonId(course.lessons[activeLessonIndex + 1].id);
        const mainContent = document.getElementById('main-content-scroll');
        if(mainContent) mainContent.scrollTop = 0;
    }
  };
  
  const handlePrevLesson = () => {
    if (activeLessonIndex > 0) {
        setActiveLessonId(course.lessons[activeLessonIndex - 1].id);
        const mainContent = document.getElementById('main-content-scroll');
        if(mainContent) mainContent.scrollTop = 0;
    }
  };

  const finishCourse = () => {
    onLessonComplete(activeLesson.id);
    onBack();
  };

  // Completion Request Handler
  const requestCompletion = (action: 'next' | 'finish') => {
      // If already completed, proceed without confirmation
      if (completedLessons.has(activeLesson.id)) {
          if (action === 'next') proceedToNextLesson();
          else finishCourse();
          return;
      }
      
      setPendingAction(action);
      setShowConfirmDialog(true);
  };

  const handleConfirmAction = () => {
      if (pendingAction === 'next') proceedToNextLesson();
      else if (pendingAction === 'finish') finishCourse();
      
      setShowConfirmDialog(false);
      setPendingAction(null);
  };

  const toggleSyllabus = () => setShowSyllabus(!showSyllabus);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setReadingProgress(progress);
    setSelection(null);

    if (scrollTop > 400) {
        setShowScrollTop(true);
    } else {
        setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    const mainContent = document.getElementById('main-content-scroll');
    if(mainContent) {
        mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle text selection in the article
  const handleTextSelection = () => {
    const winSelection = window.getSelection();
    if (!winSelection || winSelection.isCollapsed) {
        setSelection(null);
        return;
    }

    const text = winSelection.toString().trim();
    if (text.length < 2) {
        setSelection(null);
        return;
    }

    // Ensure we are selecting inside the article
    const article = document.getElementById('lesson-article');
    if (article && !article.contains(winSelection.anchorNode)) {
        setSelection(null);
        return;
    }

    const range = winSelection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    
    // Calculate position to center above selection
    setSelection({
        x: rect.left + rect.width / 2,
        y: rect.top - 10, 
        text
    });
  };

  const handleAskAI = (type: 'explain' | 'example' | 'quiz' | 'simplify') => {
      if (selection) {
          const contextInfo = `当前正在学习章节：${activeLesson.title}\n章节简介：${activeLesson.description}`;
          let prompt = '';
          
          switch (type) {
              case 'explain':
                  prompt = `[上下文信息]\n${contextInfo}\n\n[用户请求]\n请结合上下文，详细解析以下概念，如同你在教一名大学生：\n\n"${selection.text}"`;
                  break;
              case 'example':
                  prompt = `[上下文信息]\n${contextInfo}\n\n[用户请求]\n请不要只讲理论，给我一个生动的、具体的例子（最好是现实生活中的类比或简单的代码片段）来解释以下内容：\n\n"${selection.text}"`;
                  break;
              case 'quiz':
                  prompt = `[上下文信息]\n${contextInfo}\n\n[用户请求]\n针对以下内容，请给我出一个选择题来测试我的理解，并在我回答后告诉我正确答案：\n\n"${selection.text}"`;
                  break;
              case 'simplify':
                  prompt = `[上下文信息]\n${contextInfo}\n\n[用户请求]\n这句话太难懂了。请用最通俗的大白话（像给5岁孩子讲故事一样）重新解释一遍：\n\n"${selection.text}"`;
                  break;
          }
          
          setAiTrigger(prompt);
          setShowChat(true);
          setSelection(null);
          window.getSelection()?.removeAllRanges();
      }
  };

  const renderVisualizer = (type: Lesson['visualizerType']) => {
    switch (type) {
      case 'neural-net':
        return <NeuralNetViz />;
      case 'loss-chart':
        return <LossChart />;
      case 'cnn-viz':
        return <ConvolutionViz />;
      default:
        return null;
    }
  };

  const showVisualizer = activeLesson.visualizerType && activeLesson.visualizerType !== 'none';

  // --- Slide Generation Logic for Presentation Mode ---
  const generatedSlides = useMemo(() => {
      if (!isPresentationMode) return [];

      if (activeLesson.id === 'ml-00-intro') {
          // Use specific slide components that are sized to fit without scrolling
          return [
              <IntroHero isPresentation={true} />,
              <IntroWhyAI_Slide1 />,
              <IntroWhyAI_Slide2 />,
              <IntroSkills_Slide1 />,
              <IntroSkills_Slide2 />,
              <IntroValley_Slide1 />,
              <IntroValley_Slide2 />,
              <IntroFooter isPresentation={true} />
          ];
      } else {
          // For standard markdown lessons, split by Level 2 headers (##)
          const chunks = activeLesson.content.split(/(?=^##\s)/m).filter(s => s.trim().length > 0);
          
          const slides = chunks.map((chunk, index) => (
             <div key={index} className="w-full max-w-6xl mx-auto">
                 <div className="prose prose-xl prose-invert max-w-none 
                    prose-headings:font-bold prose-headings:text-cyan-50
                    prose-h1:text-6xl prose-h1:mb-12 prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-cyan-300 prose-h1:to-white
                    prose-h2:text-4xl prose-h2:border-b prose-h2:border-slate-700 prose-h2:pb-6 prose-h2:mb-10 prose-h2:text-white
                    prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-2xl prose-p:mb-8
                    prose-li:text-2xl prose-li:text-slate-300 prose-li:marker:text-cyan-500
                    prose-code:text-pink-400 prose-code:bg-slate-900 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-transparent prose-pre:p-0 prose-pre:border-none prose-pre:shadow-none
                    prose-img:rounded-3xl prose-img:shadow-2xl prose-img:mx-auto prose-img:max-h-[50vh]
                    prose-blockquote:not-italic prose-blockquote:font-normal
                 ">
                    <ReactMarkdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                        components={{
                            code: CustomCodeBlock,
                            blockquote: CustomBlockquote,
                            a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4" {...props} />
                        }}
                    >
                        {chunk}
                    </ReactMarkdown>
                 </div>
             </div>
          ));

          // If there is a visualizer, add it as a final slide
          if (showVisualizer) {
              slides.push(
                  <div key="viz-slide" className="w-full h-full flex flex-col items-center justify-center p-4">
                      <div className="flex items-center gap-3 mb-8">
                          <div className="p-3 bg-cyan-500 rounded-lg shadow-lg shadow-cyan-500/30">
                                <Activity className="text-white w-8 h-8" />
                          </div>
                          <h2 className="text-4xl font-bold text-white">交互式演示</h2>
                      </div>
                      <div className="w-full max-w-5xl aspect-video bg-white dark:bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden relative">
                           {renderVisualizer(activeLesson.visualizerType)}
                      </div>
                  </div>
              );
          }
          return slides;
      }
  }, [activeLesson, isPresentationMode, showVisualizer]);

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-black transition-colors duration-300 font-sans overflow-hidden">
      
      {/* Presentation Mode Overlay */}
      {isPresentationMode && (
          <PresentationMode 
            key={activeLesson.id}
            slides={generatedSlides}
            title={activeLesson.title}
            onClose={() => setIsPresentationMode(false)}
            onNextLesson={activeLessonIndex < course.lessons.length - 1 ? () => requestCompletion('next') : () => requestCompletion('finish')}
            onPrevLesson={activeLessonIndex > 0 ? handlePrevLesson : undefined}
            hasNextLesson={activeLessonIndex < course.lessons.length - 1}
            hasPrevLesson={activeLessonIndex > 0}
          />
      )}

      {/* 1. Modern Top Navigation Bar */}
      <header className="h-16 flex items-center justify-between px-4 lg:px-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shrink-0 sticky top-0 z-30 transition-colors duration-300">
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={toggleSyllabus}
            className={`p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors ${showSyllabus && isLargeScreen ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white' : ''}`}
            title={showSyllabus ? "收起目录" : "展开目录"}
          >
            {showSyllabus ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
          </button>

          <button 
            onClick={onBack}
            className="group flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:shadow-sm hover:shadow-cyan-500/10 transition-all duration-300"
            title="返回仪表盘"
          >
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-slate-950 shadow-sm border border-slate-100 dark:border-slate-800 group-hover:scale-105 transition-transform">
              <LayoutGrid size={12} className="text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              主页
            </span>
          </button>
          
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
          
          <div className="flex flex-col">
             <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
               <span>Course</span>
               <ChevronRight size={12} />
               <span className="truncate max-w-[100px] sm:max-w-[150px]">{course.title}</span>
             </div>
             <h1 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate max-w-[150px] sm:max-w-md">
                {activeLesson.title}
             </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
           {/* PPT Mode Button */}
           <button
             onClick={() => setIsPresentationMode(true)}
             className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors font-medium text-xs border border-indigo-200 dark:border-indigo-800"
             title="演示模式"
           >
             <Presentation size={16} />
             <span>演示模式</span>
           </button>

           <button 
             onClick={() => setShowChat(!showChat)}
             className={`p-2 rounded-lg transition-colors xl:hidden ${showChat ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400' : 'text-slate-500'}`}
           >
             <MessageSquare size={20} />
           </button>

           <button 
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              title="切换主题"
           >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
           </button>
        </div>
      </header>

      {/* Reading Progress Bar */}
      <div className="h-0.5 w-full bg-slate-100 dark:bg-slate-900 shrink-0">
          <div className="h-full bg-cyan-500 transition-all duration-100 ease-out shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ width: `${readingProgress}%` }}></div>
      </div>

      {/* 2. Main Workspace */}
      <div className="flex-1 flex overflow-hidden relative w-full h-full">
        
        {/* Left Sidebar: Syllabus */}
        <nav className={`
            fixed inset-y-0 left-0 z-50 flex flex-col
            bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 
            transition-all duration-300 ease-in-out overflow-hidden
            ${!isLargeScreen ? (showSyllabus ? 'translate-x-0 shadow-2xl w-72' : '-translate-x-full w-72') : ''}
            ${isLargeScreen ? 'relative transform-none shadow-none z-0' : ''}
            ${isLargeScreen ? (showSyllabus ? 'w-72 opacity-100' : 'w-0 border-none opacity-0') : ''}
        `}>
           <div className="w-72 h-full flex flex-col min-w-[18rem]">
               {/* Header */}
               <div className="p-4 lg:p-6 pb-2 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                    <Layout size={18} className="text-cyan-600 dark:text-cyan-400" />
                    <span>课程大纲</span>
                  </div>
                  {!isLargeScreen && (
                      <button onClick={() => setShowSyllabus(false)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400">
                          <X size={18} />
                      </button>
                  )}
               </div>

               <div className="p-4 lg:p-6 pt-2 overflow-y-auto flex-1 custom-scrollbar">
                  <div className="space-y-1 relative mt-4">
                     <div className="absolute left-[15px] top-4 bottom-4 w-px bg-slate-200 dark:bg-slate-800 -z-10"></div>
                     {course.lessons.map((lesson, idx) => {
                        const isActive = lesson.id === activeLessonId;
                        const isCompleted = completedLessons.has(lesson.id);

                        return (
                          <button
                            key={lesson.id}
                            onClick={() => {
                                setActiveLessonId(lesson.id);
                                const mainContent = document.getElementById('main-content-scroll');
                                if (mainContent) mainContent.scrollTop = 0;
                                if (!isLargeScreen) setShowSyllabus(false);
                            }}
                            className={`w-full group relative flex items-start gap-4 p-3 rounded-xl transition-all duration-200 text-left border ${
                                isActive 
                                ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm z-10' 
                                : 'border-transparent hover:bg-slate-100 dark:hover:bg-slate-900'
                            }`}
                          >
                             <div className={`mt-0.5 shrink-0 transition-colors duration-300 ${
                                 isActive ? 'text-cyan-600 dark:text-cyan-400' : 
                                 isCompleted ? 'text-green-500 dark:text-green-400' : 'text-slate-300 dark:text-slate-700'
                             }`}>
                                 {isActive ? <Circle size={16} fill="currentColor" className="animate-pulse" /> : 
                                  isCompleted ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                             </div>
                             <div className="flex flex-col">
                                 <span className={`text-sm font-medium transition-colors ${
                                     isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-300'
                                 }`}>
                                     {lesson.title}
                                 </span>
                                 <span className="text-xs text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                                     {lesson.description}
                                 </span>
                             </div>
                          </button>
                        )
                     })}
                  </div>
               </div>
           </div>
        </nav>

        {/* Syllabus Overlay for Mobile */}
        {showSyllabus && !isLargeScreen && (
            <div 
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setShowSyllabus(false)}
            ></div>
        )}

        {/* Center: Content Area */}
        <div className="flex-1 relative flex flex-col min-w-0 overflow-hidden">
            <main 
                id="main-content-scroll"
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto scroll-smooth bg-slate-50 dark:bg-black relative"
            >
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                
                {/* Conditional Rendering for Rich Content vs Standard Markdown */}
                {activeLesson.id === 'ml-00-intro' ? (
                    <IntroJourney onNext={activeLessonIndex < course.lessons.length - 1 ? () => requestCompletion('next') : () => requestCompletion('finish')} />
                ) : (
                    <>
                        {/* Standard Hero Section */}
                        <div className="mb-12 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-bold tracking-wide uppercase mb-6">
                                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                                Chapter {activeLessonIndex + 1}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                                {activeLesson.title}
                            </h1>
                            <div className="flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-8">
                                <span className="flex items-center gap-2"><Clock size={16} className="text-cyan-500"/> {Math.max(1, Math.ceil(activeLesson.content.length / 500))} min read</span>
                                <span className="flex items-center gap-2"><Calendar size={16} className="text-cyan-500"/> Updated recently</span>
                                <span className="flex items-center gap-2"><CheckCircle2 size={16} className={completedLessons.has(activeLesson.id) ? "text-green-500" : "text-slate-400"}/> {completedLessons.has(activeLesson.id) ? 'Completed' : 'Not completed'}</span>
                            </div>
                        </div>

                        {/* Article Content */}
                        <article 
                            id="lesson-article"
                            onMouseUp={handleTextSelection}
                            className="min-h-[200px]"
                        >
                            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                                    prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-slate-100
                                    prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-slate-300
                                    prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                                    prose-img:rounded-2xl prose-img:shadow-xl
                                    prose-blockquote:rounded-lg
                                    prose-code:text-pink-500 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                                    mb-12
                            ">
                                <ReactMarkdown 
                                    remarkPlugins={[remarkMath]} 
                                    rehypePlugins={[rehypeKatex]}
                                    components={{
                                        h2: ({node, children, ...props}) => (
                                            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 pb-2 border-b border-slate-200 dark:border-slate-800" {...props}>
                                                {children}
                                            </h2>
                                        ),
                                        // Use custom code block renderer for copy functionality and quizzes
                                        code: CustomCodeBlock,
                                        // Use custom blockquote for alerts
                                        blockquote: CustomBlockquote
                                    }}
                                >
                                    {activeLesson.content}
                                </ReactMarkdown>
                            </div>
                        </article>
                    </>
                )}

                {/* Conditional Interactive Section */}
                {showVisualizer && (
                    <section className="my-16 animate-in slide-in-from-bottom-8 duration-700">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/30">
                                <Activity className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">交互实验室</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">动手调整参数，观察算法的实时反馈</p>
                            </div>
                        </div>
                        
                        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-2 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800 aspect-[16/10] md:aspect-[2/1]">
                                {renderVisualizer(activeLesson.visualizerType)}
                        </div>
                    </section>
                )}

                {/* Navigation Footer */}
                <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Prev Button */}
                        <button 
                            onClick={handlePrevLesson}
                            disabled={activeLessonIndex === 0}
                            className={`group p-6 text-left rounded-2xl border transition-all duration-300 ${
                                activeLessonIndex === 0 
                                ? 'opacity-0 pointer-events-none' 
                                : 'border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 bg-white dark:bg-slate-900/50'
                            }`}
                        >
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                <span>上一节</span>
                            </div>
                            <div className="font-bold text-slate-900 dark:text-white line-clamp-1">
                                {course.lessons[activeLessonIndex - 1]?.title}
                            </div>
                        </button>

                        {/* Next Button */}
                        <button 
                            onClick={activeLessonIndex < course.lessons.length - 1 ? () => requestCompletion('next') : () => requestCompletion('finish')}
                            className="group p-6 text-right rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 relative overflow-hidden"
                        >   
                            <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-cyan-50/10 dark:to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                            
                            <div className="flex items-center justify-end gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 relative z-10">
                                <span>{activeLessonIndex < course.lessons.length - 1 ? '下一节' : '完成课程'}</span>
                                {activeLessonIndex < course.lessons.length - 1 ? (
                                    <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                                ) : (
                                    <CheckCircle2 size={16} className="text-green-500" />
                                )}
                            </div>
                            <div className="font-bold text-slate-900 dark:text-white line-clamp-1 relative z-10">
                                {activeLessonIndex < course.lessons.length - 1 ? course.lessons[activeLessonIndex + 1].title : '恭喜，完结撒花！'}
                            </div>
                        </button>
                </div>
            </div>
            
            {/* Selection Menu Popover */}
            {selection && (
                    <div 
                        className="fixed z-50 -translate-x-1/2 -translate-y-full pb-3 animate-in fade-in zoom-in duration-200 flex flex-col items-center"
                        style={{ left: selection.x, top: selection.y }}
                    >
                        <div className="bg-slate-900 dark:bg-slate-800 text-white rounded-xl shadow-2xl p-1.5 flex items-center gap-1 border border-slate-700/50 backdrop-blur-md">
                            <button 
                                onClick={() => handleAskAI('explain')}
                                className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-xs font-medium min-w-[60px]"
                                title="深度解析"
                            >
                                <BookOpen size={16} className="text-cyan-400" />
                                <span>深度解析</span>
                            </button>
                            <div className="w-px h-8 bg-white/10"></div>
                            <button 
                                onClick={() => handleAskAI('example')}
                                className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-xs font-medium min-w-[60px]"
                                title="举个例子"
                            >
                                <Lightbulb size={16} className="text-yellow-400" />
                                <span>举个例子</span>
                            </button>
                            <div className="w-px h-8 bg-white/10"></div>
                            <button 
                                onClick={() => handleAskAI('quiz')}
                                className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-xs font-medium min-w-[60px]"
                                title="生成测验"
                            >
                                <GraduationCap size={16} className="text-pink-400" />
                                <span>生成测验</span>
                            </button>
                        </div>
                        {/* Arrow */}
                        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-slate-900 dark:border-t-slate-800 drop-shadow-sm"></div>
                    </div>
                )}
            </main>

            {/* Scroll To Top Button */}
            <button
                onClick={scrollToTop}
                className={`absolute bottom-6 right-6 z-20 p-3 rounded-full bg-cyan-600/90 hover:bg-cyan-500 text-white shadow-lg backdrop-blur-sm transition-all duration-300 transform border border-cyan-400/20 ${
                    showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
                }`}
                title="回到顶部"
            >
                <ArrowUp size={20} />
            </button>
        </div>

        {/* Confirmation Dialog Overlay */}
        {showConfirmDialog && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md border border-slate-200 dark:border-slate-800 overflow-hidden animate-in zoom-in-95 duration-200">
                    <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full">
                                {showVisualizer ? <Activity size={24} /> : <CheckCircle2 size={24} />}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                确认完成本节？
                            </h3>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            {showVisualizer 
                                ? "本节包含交互式实验室。建议您在继续之前，充分尝试不同的参数组合，观察算法的实时反馈。" 
                                : "您即将标记本节为完成并继续。如果您还没读完，可以随时回来复习。"}
                        </p>

                        <div className="flex gap-3">
                            <button 
                                onClick={() => setShowConfirmDialog(false)}
                                className="flex-1 py-3 px-4 rounded-xl font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                再看看
                            </button>
                            <button 
                                onClick={handleConfirmAction}
                                className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-600/20"
                            >
                                确认完成
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Right: AI Tutor */}
        <aside className={`${showChat ? 'translate-x-0' : 'translate-x-full'} fixed inset-y-0 right-0 z-40 w-full md:w-[400px] xl:relative xl:translate-x-0 transition-transform duration-300 shadow-2xl xl:shadow-none bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 h-full overflow-hidden`}>
            <div className="h-full flex flex-col w-full absolute inset-0">
                {/* Mobile Header for Chat */}
                <div className="xl:hidden p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-white dark:bg-slate-950 shrink-0">
                    <span className="font-bold text-slate-900 dark:text-white">AI 助教</span>
                    <button onClick={() => setShowChat(false)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400">
                        <ArrowLeft size={18} className="rotate-180" />
                    </button>
                </div>
                <div className="flex-1 overflow-hidden min-h-0 relative flex flex-col">
                    <ChatTutor 
                        externalTrigger={aiTrigger}
                        onTriggerHandled={() => setAiTrigger(null)}
                    />
                </div>
            </div>
        </aside>

        {/* Overlay for mobile chat */}
        {showChat && (
            <div 
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 xl:hidden"
                onClick={() => setShowChat(false)}
            ></div>
        )}

      </div>
    </div>
  );
};

export default LearningView;