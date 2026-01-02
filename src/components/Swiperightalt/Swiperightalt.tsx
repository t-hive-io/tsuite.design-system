import React from 'react';
import './Swiperightalt.css';

export interface SwiperightaltProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * swipe_right_alt
 * Maps to Figma component: "swipe_right_alt"
 */
export const Swiperightalt: React.FC<SwiperightaltProps> = ({ className, children }) => {
  return (
    <div className={`swiperightalt ${className || ''}`}>
      {children || 'swipe_right_alt'}
    </div>
  );
};
