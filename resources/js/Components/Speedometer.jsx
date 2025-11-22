export default function Speedometer({ score, maxScore }) {
  const percentage = (score / maxScore) * 100;
  const rotation = (percentage / 100) * 180 - 90;

  const getColor = () => {
    if (percentage >= 80) return '#22c55e';
    if (percentage >= 60) return '#3b82f6';
    if (percentage >= 40) return '#f59e0b';
    return '#ef4444';
  };

  const getLabel = () => {
    if (percentage >= 80) return 'Excellent';
    if (percentage >= 60) return 'Good';
    if (percentage >= 40) return 'Fair';
    return 'Need Improvement';
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative w-64 h-32 mx-auto">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <defs>
            <linearGradient
              id="gaugeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="33%" stopColor="#f59e0b" />
              <stop offset="66%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>

          <path
            d="M 20 90 A 80 80 0 0 1 180 90"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="20"
            strokeLinecap="round"
          />

          <path
            d="M 20 90 A 80 80 0 0 1 180 90"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (251.2 * percentage) / 100}
            className="transition-all duration-1000 ease-out"
          />

          <circle cx="100" cy="90" r="8" fill="#374151" />

          <line
            x1="100"
            y1="90"
            x2="100"
            y2="30"
            stroke="#374151"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${rotation} 100 90)`}
            className="transition-all duration-1000 ease-out"
          />

          <circle cx="100" cy="90" r="6" fill="#fff" />
        </svg>

        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-3xl font-bold" style={{ color: getColor() }}>
            {percentage.toFixed(0)}%
          </div>
          {/* <div className="text-sm text-gray-600 font-semibold">
            {getLabel()}
          </div> */}
        </div>
      </div>

      <div className="flex justify-center space-x-44 mt-4 text-xs text-gray-500 px-4">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
}
