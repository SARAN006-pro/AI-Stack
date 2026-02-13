
import React, { useState } from 'react';
import { ARCHITECTURE_DATA } from './constants';
import { TechComponent, ChatMessage } from './types';
import { ComponentCard } from './components/Component';
import { getExplanation } from './geminiService';

const App: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<TechComponent | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [hoveredLayerIndex, setHoveredLayerIndex] = useState<number | null>(null);

  const handleExplain = async (comp: TechComponent) => {
    setSelectedComp(comp);
    setIsLoading(true);
    
    const layer = ARCHITECTURE_DATA.find(l => l.components.some(c => c.id === comp.id));
    const context = layer ? layer.title : "The Stack";
    
    const explanation = await getExplanation(comp.name, context);
    setIsLoading(false);
    
    setChatHistory([
      { role: 'user', content: `Tell me about ${comp.name}.` },
      { role: 'assistant', content: explanation }
    ]);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 overflow-x-hidden">
      {/* Hero Header */}
      <header className="relative bg-white pt-20 pb-16 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold mb-6 animate-bounce">
            🚀 2026 Tech Stack Standards
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
            AI-Native Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Architecture</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Master the high-performance stack used to build modern RAG applications. 
            Click any component to get an <span className="text-indigo-600 font-bold underline decoration-indigo-200 underline-offset-4">AI-powered explanation</span>.
          </p>
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-[1600px] mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start relative">
          {ARCHITECTURE_DATA.map((layer, index) => (
            <div 
              key={layer.id} 
              className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`rounded-2xl p-6 text-white bg-gradient-to-br ${layer.gradient} shadow-lg mb-8 relative overflow-hidden group`}>
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
                   <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                </div>
                <h2 className="text-xl font-extrabold uppercase tracking-widest">{layer.title}</h2>
                <div className="h-1 w-12 bg-white/40 mt-3 rounded-full"></div>
              </div>
              
              <div className="flex flex-col">
                {layer.components.map((comp) => (
                  <ComponentCard 
                    key={comp.id} 
                    component={comp} 
                    onExplain={handleExplain}
                    onHover={(isHovering: boolean) => setHoveredLayerIndex(isHovering ? index : null)}
                  />
                ))}
              </div>

              {/* Connector for visual flow */}
              {index < ARCHITECTURE_DATA.length - 1 && (
                <div 
                  className={`hidden lg:flex absolute translate-x-[290px] translate-y-[80px] pointer-events-none transition-all duration-700 ease-in-out
                    ${hoveredLayerIndex === index ? 'opacity-100 scale-110' : 'opacity-10'}`}
                >
                   <svg width="60" height="40" viewBox="0 0 60 40">
                      <path 
                        d="M0 20 L60 20 M50 10 L60 20 L50 30" 
                        stroke="currentColor" 
                        strokeWidth="4" 
                        fill="none" 
                        className={`transition-colors duration-500 ${hoveredLayerIndex === index ? 'text-indigo-500 animate-path-flow' : 'text-slate-400'}`} 
                      />
                   </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Concepts Legend */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <span className="p-2 bg-indigo-100 rounded-xl">💡</span>
            Key Architecture Concepts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="font-extrabold text-indigo-600 uppercase text-sm tracking-widest">RAG Architecture</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Retrieval Augmented Generation allows LLMs to answer questions using your specific, real-time proprietary data without retraining.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-extrabold text-emerald-600 uppercase text-sm tracking-widest">Vector Search</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Finding information based on mathematical "closeness" of meaning rather than simple keyword matching.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-extrabold text-rose-600 uppercase text-sm tracking-widest">Server Actions</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Eliminating the need for complex API endpoints by calling server-side logic directly from UI components with type safety.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-extrabold text-sky-600 uppercase text-sm tracking-widest">Semantic Embeddings</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Transforming raw text into high-dimensional vectors that represent human language concepts and relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating AI Explainer Sidebar */}
      {selectedComp && (
        <div className="fixed bottom-8 right-8 w-[400px] z-50 animate-in slide-in-from-right-10 duration-500">
          <div className="glass rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/50">
            <div className="p-5 bg-slate-900 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-xl">{selectedComp.icon}</span>
                <div>
                  <h4 className="font-black text-sm">{selectedComp.name}</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">AI Tutor Explainer</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedComp(null)}
                className="hover:bg-white/10 p-2 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 max-h-[400px] overflow-y-auto bg-white/80 scroll-hide">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-10 space-y-4">
                  <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm font-bold text-slate-500 animate-pulse">Thinking in tokens...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {chatHistory.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                        msg.role === 'user' 
                        ? 'bg-slate-100 text-slate-800 rounded-tr-none' 
                        : 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 rounded-tl-none'
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-slate-100">
                    <button 
                      onClick={() => window.open(selectedComp.url, '_blank')}
                      className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                    >
                      Read Official Documentation
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-12 text-slate-400 font-bold text-sm">
        <p>© 2026 AI Architecture Hub • Built for the future of web engineering</p>
      </footer>
    </div>
  );
};

export default App;
