import React from 'react';
import './Sliderlist.css';

export interface SliderlistProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Slider list
 * Maps to Figma component: "Slider list"
 */
export const Sliderlist: React.FC<SliderlistProps> = ({ className, children }) => {
  return (
    <div className={`sliderlist ${className || ''}`}>
      {children || 'Slider list'}
    </div>
  );
};
