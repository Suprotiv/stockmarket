import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  const handleStartSession = () => {
    // Play sound
    const audio = new Audio('/sound.mp3');
    audio.play().catch(err => console.log('Audio play failed:', err));

    // Navigate to session1
    navigate('/session1');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/10 via-primary/5 to-transparent animate-pulse-glow" />
        
        {/* Accent glow */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-accent/8 via-accent/3 to-transparent animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Icon and title */}
        <div className="flex items-center gap-3 animate-float">
          <div className="p-3 rounded-xl bg-green-500/20 border-2 border-green-500/40">
            <TrendingUp className="w-8 h-8 text-green-400" />
          </div>
        </div>
        {/* Main heading */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Idalia Stock Exchange
          </h1>
          <p className="text-muted-foreground text-lg">
            Predict real time stock market trends
          </p>
        </div>
        {/* Start Session Button */}
        <button 
          onClick={handleStartSession}
          className="group relative mt-4 px-16 py-5 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Button background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 via-green-500/25 to-green-600/30 border-2 border-green-500/50 rounded-2xl transition-all duration-300 group-hover:border-green-400/70 group-hover:from-green-500/40 group-hover:via-green-400/35 group-hover:to-green-500/40" />
          
          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-green-500/40 via-green-500/20 to-transparent rounded-l-2xl" />
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-green-500/20 via-green-400/20 to-green-500/20 rounded-2xl" />
          
          {/* Shimmer effect on hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.2), transparent)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s infinite',
            }}
          />
          
          {/* Button text */}
          <span className="relative z-10 text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300">
            Start Session
          </span>
        </button>
        {/* Subtle status indicator */}
        <div className="flex items-center gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-green-400/70">Ready to connect</span>
        </div>
      </div>
      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

export default Home;
