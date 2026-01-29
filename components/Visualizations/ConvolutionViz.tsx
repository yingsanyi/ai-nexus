import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Play, Pause, RefreshCw } from 'lucide-react';

const ConvolutionViz: React.FC = () => {
  const { theme } = useTheme();
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // 5x5 Input
  const inputGrid = [
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1]
  ];

  // 3x3 Kernel (Edge detection-ish)
  const kernel = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
  ];

  // Output will be 3x3
  const outputSize = 3;
  const totalSteps = outputSize * outputSize;

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setStep((prev) => (prev + 1) % totalSteps);
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentX = step % outputSize;
  const currentY = Math.floor(step / outputSize);

  // Calculate convolution value for current step
  const calculateConv = (ox: number, oy: number) => {
    let sum = 0;
    for (let ky = 0; ky < 3; ky++) {
      for (let kx = 0; kx < 3; kx++) {
        sum += inputGrid[oy + ky][ox + kx] * kernel[ky][kx];
      }
    }
    return sum;
  };

  const Cell = ({ val, active, isKernel = false }: any) => (
    <div className={`
      w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg text-xs md:text-sm font-mono transition-all duration-300
      ${active 
        ? 'bg-cyan-500 text-white scale-110 shadow-lg shadow-cyan-500/50 z-10' 
        : isKernel 
          ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
          : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700'
      }
    `}>
      {val}
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-slate-950 rounded-xl overflow-hidden min-h-[320px]">
        <div className="flex-1 p-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
            
            {/* Input Grid */}
            <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Input (5x5)</span>
                <div className="grid grid-cols-5 gap-1 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    {inputGrid.map((row, y) => (
                        row.map((val, x) => {
                            const inWindow = x >= currentX && x < currentX + 3 && y >= currentY && y < currentY + 3;
                            return <Cell key={`${x}-${y}`} val={val} active={inWindow} />;
                        })
                    ))}
                </div>
            </div>

            {/* Operator */}
            <div className="text-slate-300 dark:text-slate-700 text-xl font-bold">×</div>

            {/* Kernel */}
            <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Kernel (3x3)</span>
                <div className="grid grid-cols-3 gap-1">
                    {kernel.map((row, y) => (
                        row.map((val, x) => (
                            <Cell key={`k-${x}-${y}`} val={val} isKernel={true} />
                        ))
                    ))}
                </div>
            </div>

            {/* Operator */}
            <div className="text-slate-300 dark:text-slate-700 text-xl font-bold">=</div>

            {/* Output */}
            <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Feature Map</span>
                <div className="grid grid-cols-3 gap-1 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                     {Array(3).fill(0).map((_, y) => (
                        Array(3).fill(0).map((_, x) => {
                             const idx = y * 3 + x;
                             const isCurrent = idx === step;
                             const isPast = idx < step;
                             const val = calculateConv(x, y);
                             
                             return (
                                 <div key={`out-${x}-${y}`} className={`
                                    w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg text-xs md:text-sm font-bold transition-all duration-300 border
                                    ${isCurrent 
                                        ? 'bg-green-500 text-white border-green-500 scale-110 shadow-lg shadow-green-500/50' 
                                        : isPast
                                            ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-900/50'
                                            : 'bg-transparent text-transparent border-slate-200 dark:border-slate-800'
                                    }
                                 `}>
                                     {isCurrent || isPast ? val : ''}
                                 </div>
                             );
                        })
                     ))}
                </div>
            </div>
        </div>

        {/* Controls */}
        <div className="h-14 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between px-6 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="flex items-center gap-2">
                <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors shadow-sm"
                >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button 
                    onClick={() => setStep(0)}
                    className="p-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors shadow-sm"
                >
                    <RefreshCw size={18} />
                </button>
            </div>
            <div className="text-[10px] md:text-xs font-mono text-slate-400">
                Step: {step + 1}/{totalSteps}
            </div>
        </div>
    </div>
  );
};

export default ConvolutionViz;