
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-baseline text-3xl font-bold">
        <span className="text-[#0A224E]">shopdigital</span>
        <span className="text-[#FF0000]">.ar</span>
      </div>
      <div className="flex flex-col items-center mt-2">
        <svg width="60" height="40" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5C35 5 25 20 25 20C25 20 15 5 0 5C0 25 25 45 50 55C75 45 100 25 100 5C85 5 75 20 75 20C75 20 65 5 50 5Z" fill="#22C55E" />
          <path d="M50 5C50 5 60 25 50 45C40 25 50 5 50 5Z" fill="#15803D" />
        </svg>
        <span className="text-[10px] uppercase font-semibold text-[#0A224E] tracking-widest mt-1">Esteban Echeverría</span>
      </div>
    </div>
  );
};

export default Logo;
