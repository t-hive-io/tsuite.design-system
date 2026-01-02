import React from 'react';
import './Pantoolalt.css';

export interface PantoolaltProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * pan_tool_alt
 * Maps to Figma component: "pan_tool_alt"
 */
export const Pantoolalt: React.FC<PantoolaltProps> = ({ className, children }) => {
  return (
    <div className={`pantoolalt ${className || ''}`}>
      {children || 'pan_tool_alt'}
    </div>
  );
};
