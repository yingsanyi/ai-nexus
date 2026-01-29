import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Play, Pause, SkipForward, Gauge, Network } from 'lucide-react';

const NeuralNetViz: React.FC = () => {
  const [activeSignals, setActiveSignals] = useState<number[]>([]);
  const { theme } = useTheme();

  // Interactive controls state
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(60); // 0-100
  const [complexity, setComplexity] = useState(4); // Hidden layer nodes count

  const fireSignal = useCallback(() => {
    setActiveSignals(prev => {
      const now = Date.now();
      const newSignals = [...prev, now];
      // Keep signals only for 2 seconds to avoid memory leak
      return newSignals.filter(t => now - t < 2000);
    });
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      // Map speed (0-100) to interval (2000ms - 200ms)
      // Higher speed = Lower interval
      const intervalMs = Math.max(200, 2000 - (speed * 18));
      interval = setInterval(fireSignal, intervalMs);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speed, fireSignal]);

  // Dynamic layers based on complexity
  const layers = useMemo(() => [3, complexity, complexity, 2], [complexity]);
  
  const layerGap = 150;
  const nodeGap = 50; 
  const startX = 50;
  const startY = 40;

  // Calculate node positions
  const nodes = useMemo(() => {
    const list: { x: number; y: number; layerIdx: number; nodeIdx: number }[] = [];
    layers.forEach((count, layerIdx) => {
      const layerHeight = count * nodeGap;
      const maxLayerHeight = Math.max(...layers) * nodeGap;
      const yOffset = (maxLayerHeight - layerHeight) / 2;

      for (let i = 0; i < count; i++) {
        list.push({
          x: startX + layerIdx * layerGap,
          y: startY + yOffset + i * nodeGap,
          layerIdx,
          nodeIdx: i
        });
      }
    });
    return list;
  }, [layers]);

  // Calculate links
  const links = useMemo(() => {
    const list: { x1: number; y1: number; x2: number; y2: number }[] = [];
    nodes.forEach(source => {
      nodes.forEach(target => {
        if (target.layerIdx === source.layerIdx + 1) {
          list.push({
            x1: source.x,
            y1: source.y,
            x2: target.x,
            y2: target.y
          });
        }
      });
    });
    return list;
  }, [nodes]);

  // Colors based on theme
  const colors = {
    bg: theme === 'dark' ? '#0f172a' : '#f8fafc',
    link: theme === 'dark' ? '#334155' : '#cbd5e1',
    nodeFill: theme === 'dark' ? '#1e293b' : '#ffffff', 
    nodeStrokeInput: '#10b981',   // emerald-500
    nodeStrokeOutput: '#f43f5e',  // rose-500
    nodeStrokeHidden: '#6366f1',  // indigo-500
    text: theme === 'dark' ? '#94a3b8' : '#64748b',
    signal: theme === 'dark' ? '#22d3ee' : '#06b6d4' // cyan-400 : cyan-500
  };

  return (
    <div className="w-full h-full min-h-[320px] flex flex-col rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Visualization Area */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute top-4 left-4 text-[10px] font-mono opacity-60 z-10" style={{ color: colors.text }}>
          STATUS: {isPlaying ? 'TRAINING' : 'IDLE'} <br/>
          TOPOLOGY: {layers.join('-')}
        </div>
        
        <svg width="100%" height="100%" viewBox="0 0 600 340" preserveAspectRatio="xMidYMid meet">
          {/* Links */}
          {links.map((link, i) => (
            <line
              key={`link-${i}`}
              x1={link.x1}
              y1={link.y1}
              x2={link.x2}
              y2={link.y2}
              stroke={colors.link}
              strokeWidth="1.5"
              opacity="0.4"
            />
          ))}

          {/* Active Signals (Animation) */}
          {activeSignals.map((signalId) => (
            links.map((link, i) => {
               // Pseudo-randomly select paths to animate based on signal ID to simulate sparse activation
               if ((signalId + i) % (Math.floor(links.length / complexity) + 1) !== 0) return null;
               
               // Animation duration based on speed
               const dur = Math.max(0.5, 2 - (speed / 60)) + 's';

               return (
                <circle key={`sig-${signalId}-${i}`} r="3" fill={colors.signal} filter="url(#glow)">
                  <animateMotion
                    dur={dur}
                    repeatCount="1"
                    path={`M${link.x1},${link.y1} L${link.x2},${link.y2}`}
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1"
                  />
                  <animate attributeName="opacity" values="0;1;0" dur={dur} repeatCount="1" />
                </circle>
               )
            })
          ))}

          {/* Definitions for Glow Effect */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Nodes */}
          {nodes.map((node, i) => (
            <g key={`node-${i}`}>
              {/* Outer Glow Ring (Static) */}
              <circle
                cx={node.x}
                cy={node.y}
                r="12"
                fill="none"
                stroke={node.layerIdx === 0 ? colors.nodeStrokeInput : node.layerIdx === layers.length - 1 ? colors.nodeStrokeOutput : colors.nodeStrokeHidden}
                strokeWidth="1"
                opacity="0.2"
              />
              
              {/* Core Node */}
              <circle
                cx={node.x}
                cy={node.y}
                r="6"
                fill={colors.nodeFill}
                stroke={node.layerIdx === 0 ? colors.nodeStrokeInput : node.layerIdx === layers.length - 1 ? colors.nodeStrokeOutput : colors.nodeStrokeHidden}
                strokeWidth="2"
                className="transition-all duration-300"
              />
              
              {/* Pulse effect when playing */}
              {isPlaying && (
                  <circle
                  cx={node.x}
                  cy={node.y}
                  r="14"
                  stroke={node.layerIdx === 0 ? colors.nodeStrokeInput : node.layerIdx === layers.length - 1 ? colors.nodeStrokeOutput : colors.nodeStrokeHidden}
                  strokeWidth="1"
                  fill="none"
                  className="animate-pulse-slow opacity-30"
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Controls Toolbar */}
      <div className="h-14 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center px-4 gap-4 sm:gap-6 shrink-0 z-20">
         {/* Playback Controls */}
         <div className="flex items-center gap-2">
             <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                title={isPlaying ? "暂停" : "播放"}
             >
                 {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
             </button>
             <button 
                onClick={fireSignal}
                disabled={isPlaying}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="单步执行"
             >
                 <SkipForward size={18} />
             </button>
         </div>

         <div className="w-px h-6 bg-slate-200 dark:bg-slate-700"></div>

         {/* Sliders */}
         <div className="flex-1 flex gap-4 sm:gap-8 overflow-hidden">
             
             {/* Speed Slider */}
             <div className="flex flex-col justify-center gap-1 min-w-[100px] flex-1">
                 <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                     <span className="flex items-center gap-1"><Gauge size={10} /> 速度</span>
                     <span>{speed}%</span>
                 </div>
                 <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={speed} 
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                 />
             </div>

             {/* Complexity Slider */}
             <div className="flex flex-col justify-center gap-1 min-w-[100px] flex-1">
                 <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                     <span className="flex items-center gap-1"><Network size={10} /> 深度</span>
                     <span>{complexity} 层</span>
                 </div>
                 <input 
                    type="range" 
                    min="2" 
                    max="6" 
                    step="1"
                    value={complexity} 
                    onChange={(e) => setComplexity(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                 />
             </div>
         </div>
      </div>
    </div>
  );
};

export default NeuralNetViz;