import React, { useState, useEffect } from 'react';
import './Icon.css';

export interface IconProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  state?: 'enabled' | 'disabled';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'medium',
  state = 'enabled',
  className = '' 
}) => {
  const [svgContent, setSvgContent] = useState<string>('');
  
  useEffect(() => {
    // Dynamically import SVG
    const loadSvg = async () => {
      try {
        const response = await fetch(`/icons/${name}.svg`);
        if (response.ok) {
          const text = await response.text();
          setSvgContent(text);
        } else {
          console.warn(`Icon "${name}" not found`);
        }
      } catch (error) {
        console.warn(`Failed to load icon "${name}":`, error);
      }
    };
    
    loadSvg();
  }, [name]);
  
  return (
    <span 
      className={`icon icon--${size} icon--${state} ${className}`}
      data-icon={name}
      aria-label={name}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};
