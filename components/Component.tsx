
import React from 'react';
import { TechComponent } from '../types';

interface ComponentCardProps {
  component: TechComponent;
  onExplain: (comp: TechComponent) => void;
  onHover?: (isHovering: boolean) => void;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({ component, onExplain, onHover }) => {
  return (
    <div 
      className="group relative bg-white border-2 border-slate-100 rounded-xl p-5 mb-4 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={() => onExplain(component)}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-2xl">{component.icon}</span>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            window.open(component.url, '_blank');
          }}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-slate-50 rounded-lg"
          title="Visit Docs"
        >
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>
      
      <h3 className="font-bold text-slate-800 text-base leading-tight group-hover:text-indigo-600 transition-colors">
        {component.name}
      </h3>
      <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">
        {component.sub}
      </p>
      
      {component.badges && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {component.badges.map((badge, idx) => (
            <span 
              key={idx} 
              className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded-md text-[10px] font-bold text-slate-500 uppercase"
            >
              {badge.label}
            </span>
          ))}
        </div>
      )}

      <div className="mt-3 overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 ease-in-out">
        <p className="text-xs text-slate-500 leading-relaxed italic">
          {component.description}
        </p>
      </div>
    </div>
  );
};
