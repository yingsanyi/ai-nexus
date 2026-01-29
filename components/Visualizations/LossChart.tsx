import React, { useState, useEffect, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import { Play, Pause, RotateCcw, Zap, TrendingDown } from 'lucide-react';

interface DataPoint {
  epoch: number;
  loss: number;
  accuracy: number;
}

const LossChart: React.FC = () => {
  const { theme } = useTheme();

  // Simulation State
  const [isTraining, setIsTraining] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [data, setData] = useState<DataPoint[]>([{ epoch: 0, loss: 0.95, accuracy: 0.15 }]);
  const [learningRate, setLearningRate] = useState(0.01);
  const maxEpochs = 50;

  // Colors
  const colors = {
    bg: theme === 'dark' ? '#0f172a' : '#f8fafc',
    grid: theme === 'dark' ? '#1e293b' : '#e2e8f0',
    axis: theme === 'dark' ? '#64748b' : '#94a3b8',
    text: theme === 'dark' ? '#f1f5f9' : '#1e293b',
    tooltipBg: theme === 'dark' ? '#0f172a' : '#ffffff',
    tooltipBorder: theme === 'dark' ? '#334155' : '#cbd5e1',
  };

  // Calculate dynamic Y-axis domain
  const yDomain = useMemo(() => {
    if (data.length === 0) return [0, 1];
    
    // Find the maximum value in the dataset
    const maxVal = Math.max(...data.flatMap(d => [d.loss, d.accuracy]));
    
    // Default to [0, 1], but expand if values exceed 1
    // Add 10% padding to the top for better visibility
    const upperLimit = Math.max(1, Number((maxVal * 1.1).toFixed(2)));
    
    return [0, upperLimit];
  }, [data]);

  // Reset Logic
  const handleReset = () => {
    setIsTraining(false);
    setEpoch(0);
    setData([{ epoch: 0, loss: 0.95, accuracy: 0.15 }]);
  };

  // Simulation Loop
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isTraining && epoch < maxEpochs) {
      interval = setInterval(() => {
        setEpoch(currentEpoch => {
          const nextEpoch = currentEpoch + 1;
          
          setData(currentData => {
            const lastPoint = currentData[currentData.length - 1];
            
            // Simulation Logic:
            // Loss decays exponentially roughly based on learning rate.
            // Learning rate of 0.01 is "normal". Too high (0.1) might oscillate or decay fast. Too low (0.001) decays slow.
            
            // Base decay factor (smaller is faster decay)
            const decayRate = learningRate * 10; 
            
            // Add some noise based on LR
            const noise = (Math.random() - 0.5) * (learningRate * 2);
            
            // Calculate new loss relative to previous
            // loss[t] = loss[t-1] - (loss[t-1] * decayRate) + noise
            let newLoss = lastPoint.loss - (lastPoint.loss * decayRate * 0.5) + noise;
            
            // Clamp loss - only lower bound to allow spikes to demonstrate Y-axis scaling
            newLoss = Math.max(0.01, newLoss);
            
            // Accuracy is inversely proportional to loss, roughly
            let newAcc = 1 - Math.min(1, newLoss) + (Math.random() * 0.05);
            newAcc = Math.max(0.1, Math.min(0.99, newAcc));

            return [...currentData, { epoch: nextEpoch, loss: newLoss, accuracy: newAcc }];
          });

          return nextEpoch;
        });
      }, 500); // Update every 500ms
    } else if (epoch >= maxEpochs) {
      setIsTraining(false);
    }

    return () => clearInterval(interval);
  }, [isTraining, epoch, learningRate]);

  return (
    <div className="w-full h-full min-h-[320px] flex flex-col rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Chart Area */}
      <div className="flex-1 p-2 md:p-4 min-h-[200px]">
        <div className="flex justify-between items-center mb-2 px-2">
           <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-pink-500 font-bold">EPOCH: {epoch}/{maxEpochs}</span>
              {isTraining && <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>}
           </div>
           
           <div className="flex gap-4 text-xs font-medium">
            <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300"><span className="w-2 h-2 rounded-full bg-pink-500"></span> Loss</span>
            <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300"><span className="w-2 h-2 rounded-full bg-cyan-500"></span> Acc</span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="90%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
            <XAxis 
              dataKey="epoch" 
              stroke={colors.axis} 
              fontSize={10} 
              tickCount={10}
              domain={[0, maxEpochs]}
              type="number"
            />
            <YAxis 
              stroke={colors.axis} 
              fontSize={10} 
              domain={yDomain} 
              tickFormatter={(value) => value.toFixed(1)}
              allowDataOverflow={false}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: colors.tooltipBg, borderColor: colors.tooltipBorder, color: colors.text, fontSize: '12px', borderRadius: '8px' }}
              labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
              animationDuration={100}
              formatter={(value: number) => [value.toFixed(4), undefined]}
            />
            <Line 
                type="monotone" 
                dataKey="loss" 
                stroke="#ec4899" 
                strokeWidth={2} 
                dot={false} 
                activeDot={{ r: 4 }} 
                isAnimationActive={false} // Disable recharts animation for smooth real-time updates
            />
            <Line 
                type="monotone" 
                dataKey="accuracy" 
                stroke="#06b6d4" 
                strokeWidth={2} 
                dot={false} 
                activeDot={{ r: 4 }} 
                isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Controls Toolbar */}
      <div className="h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center px-4 gap-4 sm:gap-6 shrink-0 z-20">
         
         {/* Buttons */}
         <div className="flex items-center gap-2">
            <button 
                onClick={() => epoch < maxEpochs && setIsTraining(!isTraining)}
                disabled={epoch >= maxEpochs}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-xs transition-all ${
                    isTraining 
                    ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' 
                    : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
                {isTraining ? <Pause size={14} /> : <Play size={14} />}
                <span className="hidden sm:inline">{isTraining ? '暂停' : epoch === 0 ? '开始训练' : '继续'}</span>
            </button>

            <button
                onClick={handleReset}
                className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                title="重置"
            >
                <RotateCcw size={16} />
            </button>
         </div>

         <div className="w-px h-6 bg-slate-200 dark:bg-slate-700"></div>

         {/* Learning Rate Slider */}
         <div className="flex-1 flex flex-col justify-center gap-1 max-w-xs">
             <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                 <span className="flex items-center gap-1"><Zap size={10} /> 学习率 (Learning Rate)</span>
                 <span className="font-mono text-cyan-600 dark:text-cyan-400">{learningRate.toFixed(3)}</span>
             </div>
             <input 
                type="range" 
                min="0.001" 
                max="0.1" 
                step="0.001"
                value={learningRate} 
                onChange={(e) => setLearningRate(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
             />
             <div className="flex justify-between text-[9px] text-slate-400">
                 <span>Slow (0.001)</span>
                 <span>Fast (0.1)</span>
             </div>
         </div>

      </div>
    </div>
  );
};

export default LossChart;