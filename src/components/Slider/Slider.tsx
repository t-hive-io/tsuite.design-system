import React from 'react';
import './Slider.css';

export interface SliderProps {
  className?: string;
  children?: React.ReactNode;
}

export const Slider: React.FC<SliderProps> = ({ className, children }) => {
  return (
    <div className={`slider ${className || ''}`}>
      {children || 'Slider Component'}
    </div>
  );
};
