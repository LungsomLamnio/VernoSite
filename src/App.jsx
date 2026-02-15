import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    // min-h-screen and bg-slate-50 check layout and background utilities
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 antialiased">
      
      {/* Container with shadow and rounded corners to check elevation/border-radius */}
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-10 border border-gray-100 text-center transform transition-all hover:scale-105">
        
        {/* Animated brand-colored element to check colors and motion */}
        <div className="w-20 h-20 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-bounce">
          <span className="text-4xl text-[#FFB000]">V</span>
        </div>

        {/* Text utilities: black weight, tracking, and leading */}
        <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter leading-tight">
          Vernovate <span className="text-[#FFB000]">v4</span> Check
        </h1>

        <p className="text-gray-500 font-medium mb-10 leading-relaxed">
          If you see a <span className="text-[#FFB000] font-bold">Gold Button</span> and a 
          soft gray background, Tailwind v4 is correctly integrated into your Vite project.
        </p>

        {/* Button: Testing hover states and custom color hex codes */}
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="w-full bg-[#FFB000] hover:bg-yellow-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-yellow-500/30 transition-all active:scale-95"
        >
          Count is: {count}
        </button>

        <p className="mt-8 text-xs text-gray-400 uppercase tracking-[0.2em] font-bold">
          R&D Environment Ready
        </p>
      </div>

      {/* Testing position absolute and blur for mesh background effect */}
      <div className="fixed top-0 left-0 w-64 h-64 bg-yellow-200/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-100/20 blur-[120px] rounded-full -z-10"></div>
    </div>
  );
}

export default App;