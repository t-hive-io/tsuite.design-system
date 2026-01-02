import React from 'react';
import './Layers.css';

export interface LayersProps {
  className?: string;
  children?: React.ReactNode;
}

export const Layers: React.FC<LayersProps> = ({ className, children }) => {
  return (
    <div className={`layers ${className || ''}`}>
      {children || 'Layers Component'}
    </div>
  );
};
