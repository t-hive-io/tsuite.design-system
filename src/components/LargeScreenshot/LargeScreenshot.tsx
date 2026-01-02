import React from 'react';
import './LargeScreenshot.css';

export interface LargeScreenshotProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Large Screenshot
 * Maps to Figma component: "Large Screenshot"
 */
export const LargeScreenshot: React.FC<LargeScreenshotProps> = ({ className, children }) => {
  return (
    <div className={`largescreenshot ${className || ''}`}>
      {children || 'Large Screenshot'}
    </div>
  );
};
