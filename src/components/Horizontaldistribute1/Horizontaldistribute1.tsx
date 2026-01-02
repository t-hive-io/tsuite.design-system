import React from 'react';
import './Horizontaldistribute1.css';

export interface Horizontaldistribute1Props {
  className?: string;
  children?: React.ReactNode;
}

/**
 * horizontal_distribute 1
 * Maps to Figma component: "horizontal_distribute 1"
 */
export const Horizontaldistribute1: React.FC<Horizontaldistribute1Props> = ({ className, children }) => {
  return (
    <div className={`horizontaldistribute1 ${className || ''}`}>
      {children || 'horizontal_distribute 1'}
    </div>
  );
};
