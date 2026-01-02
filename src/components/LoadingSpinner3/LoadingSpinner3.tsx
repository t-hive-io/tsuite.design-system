import React from 'react';
import './LoadingSpinner3.css';

export interface LoadingSpinner3Props {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Loading Spinner 3
 * Maps to Figma component: "Loading Spinner 3"
 */
export const LoadingSpinner3: React.FC<LoadingSpinner3Props> = ({ className, children }) => {
  return (
    <div className={`loadingspinner3 ${className || ''}`}>
      {children || 'Loading Spinner 3'}
    </div>
  );
};
