type CanWidgetProps = {
  level: number;
  canState: string;
  power: number;
  animate?: boolean;
};

export function CanWidget({ level, canState, power, animate }: CanWidgetProps) {
  return (
    <div className="card-premium">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-neutral-400">Your Can</p>
        <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium text-white">
          Level {level}
        </span>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-32 rounded-2xl bg-gradient-to-b from-white/20 to-white/5 border border-white/10 overflow-hidden">
          <div 
            className="absolute bottom-0 left-0 right-0 bg-white/20 transition-all duration-500"
            style={{ height: `${power}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-white/80">{level}</span>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <p className="text-lg font-medium text-white">{canState}</p>
          <div>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-neutral-400">Power</span>
              <span className="text-white font-medium">{power}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div 
                className="h-full bg-white/30 rounded-full transition-all duration-500"
                style={{ width: `${power}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}