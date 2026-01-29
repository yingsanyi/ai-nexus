import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, ArrowRight } from 'lucide-react';

interface PresentationModeProps {
  slides: React.ReactNode[];
  title: string;
  onClose: () => void;
  onNextLesson?: () => void;
  onPrevLesson?: () => void;
  hasNextLesson?: boolean;
  hasPrevLesson?: boolean;
}

const PresentationMode: React.FC<PresentationModeProps> = ({ 
  slides, 
  title, 
  onClose,
  onNextLesson,
  onPrevLesson,
  hasNextLesson,
  hasPrevLesson
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(c => c + 1);
    } else if (hasNextLesson && onNextLesson) {
      onNextLesson();
      // The component will remount when lesson changes (due to key), resetting slide to 0
    }
  }, [currentSlide, totalSlides, hasNextLesson, onNextLesson]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(c => c - 1);
    } else if (hasPrevLesson && onPrevLesson) {
      onPrevLesson();
      // The component will remount when lesson changes (due to key), resetting slide to 0
    }
  }, [currentSlide, hasPrevLesson, onPrevLesson]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ': // Space
        case 'Enter':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          e.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          if (isFullscreen) {
             document.exitFullscreen();
          } else {
             onClose();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, onClose, isFullscreen]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Sync fullscreen state listener
  useEffect(() => {
    const handleFsChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 text-slate-100 flex flex-col transition-all duration-300 font-sans">
      
      {/* Header / Toolbar */}
      <div className="h-16 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-sm border-b border-slate-800 shrink-0 z-20">
        <div className="flex flex-col">
            <h2 className="font-bold text-lg truncate max-w-md">{title}</h2>
            <div className="text-xs text-slate-400 font-mono">
                SLIDE {currentSlide + 1} / {totalSlides}
            </div>
        </div>
        
        <div className="flex items-center gap-2">
            <button 
                onClick={toggleFullscreen}
                className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                title="全屏 (F11)"
            >
                {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
            <div className="w-px h-6 bg-slate-800 mx-2"></div>
            <button 
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-sm font-bold transition-all"
            >
                <X size={18} />
                <span className="hidden sm:inline">退出演示</span>
            </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-slate-900">
         <div 
            className="h-full bg-cyan-500 transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
         ></div>
      </div>

      {/* Main Slide Content */}
      <div className="flex-1 overflow-hidden relative flex items-center justify-center p-8 md:p-16 bg-gradient-to-br from-slate-950 to-slate-900">
          
          {/* 
             Wrapper with 'dark' class ensures custom components (Quizzes, CodeBlocks) 
             render in their dark mode variants.
          */}
          <div className="dark w-full h-full flex flex-col justify-center animate-in fade-in zoom-in-95 duration-500" key={currentSlide}>
               {/* Directly render the react node slide */}
               {slides[currentSlide]}
          </div>

      </div>

      {/* Footer Controls */}
      <div className="h-20 flex items-center justify-center gap-8 pb-6 shrink-0 z-20">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0 && !hasPrevLesson}
            className="p-4 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 active:scale-95"
            title={currentSlide === 0 && hasPrevLesson ? "上一章" : "上一页"}
          >
             <ChevronLeft size={24} />
          </button>
          
          <div className="text-slate-500 font-mono text-sm tracking-widest hidden sm:block">
              NAVIGATE
          </div>

          <button 
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1 && !hasNextLesson}
            className={`p-4 rounded-full text-white disabled:opacity-30 disabled:bg-slate-800 disabled:cursor-not-allowed transition-all hover:scale-110 active:scale-95 shadow-lg shadow-cyan-900/50 ${
                currentSlide === totalSlides - 1 && hasNextLesson 
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500' 
                : 'bg-cyan-600 hover:bg-cyan-500'
            }`}
            title={currentSlide === totalSlides - 1 && hasNextLesson ? "下一章" : "下一页"}
          >
             {currentSlide === totalSlides - 1 && hasNextLesson ? <ArrowRight size={24} /> : <ChevronRight size={24} />}
          </button>
      </div>

    </div>
  );
};

export default PresentationMode;