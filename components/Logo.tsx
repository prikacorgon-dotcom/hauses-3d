
import React from 'react';

export const Logo: React.FC<{ className?: string, color?: string }> = ({ className = "w-10 h-10", color = "#4A3728" }) => {
  return (
    <svg 
      viewBox="0 0 400 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* House Outline based on the provided image style */}
      <path d="M40 160L180 80L360 160V320L180 340L40 320V160Z" stroke={color} strokeWidth="8" strokeLinejoin="round"/>
      
      {/* Roof Detail */}
      <path d="M30 170L180 80L370 170" stroke={color} strokeWidth="12" strokeLinecap="round"/>
      <path d="M180 80V340" stroke={color} strokeWidth="4" strokeOpacity="0.5"/>
      
      {/* Chimney */}
      <path d="M260 120V90H300V140" stroke={color} strokeWidth="8"/>
      
      {/* Left Wall Siding (Lines) */}
      <path d="M40 190H180M40 220H180M40 250H180M40 280H180M40 310H180" stroke={color} strokeWidth="2" strokeOpacity="0.4"/>
      
      {/* Windows Left */}
      <rect x="75" y="140" width="40" height="50" stroke={color} strokeWidth="6" transform="skewY(-10)" />
      <rect x="75" y="220" width="40" height="50" stroke={color} strokeWidth="6" transform="skewY(-10)" />
      
      {/* Windows Right */}
      <rect x="220" y="145" width="40" height="50" stroke={color} strokeWidth="6" transform="skewY(10)" />
      <rect x="290" y="165" width="40" height="50" stroke={color} strokeWidth="6" transform="skewY(10)" />
      <rect x="220" y="225" width="40" height="50" stroke={color} strokeWidth="6" transform="skewY(10)" />
      
      {/* Door */}
      <path d="M285 240V330H335V260L285 240Z" stroke={color} strokeWidth="6"/>
      <rect x="300" y="270" width="20" height="40" stroke={color} strokeWidth="3" />
      
      {/* Text Backdrop Panel */}
      <path d="M60 260H160V310H60V260Z" fill={color} fillOpacity="0.1" />
      
      {/* "HAUS 3D" Text Simulation within SVG for scaling consistency */}
      <text x="75" y="295" fill={color} style={{ font: 'bold 28px sans-serif' }}>HAUS</text>
      <text x="210" y="295" fill={color} style={{ font: 'bold 32px sans-serif' }}>3D</text>
    </svg>
  );
};
