import React from 'react';
import './Layerlefticon.css';

export interface LayerlefticonProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Layer left icon
 * Maps to Figma component: "Layer left icon"
 */
export const Layerlefticon: React.FC<LayerlefticonProps> = ({ className, children }) => {
  return (
    <div className={`layerlefticon ${className || ''}`}>
      {children || 'Layer left icon'}
    </div>
  );
};
