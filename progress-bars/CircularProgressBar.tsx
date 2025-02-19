import { useState, useEffect } from 'react';

export const CircularProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => (prev >= 100 ? 0 : prev + 1));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className="relative size-40">
        <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2"></circle>
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-blue-600"
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset={100 - percentage}
            strokeLinecap="round"
          ></circle>
        </svg>

        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span className="text-center text-2xl font-bold text-blue-600">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};
