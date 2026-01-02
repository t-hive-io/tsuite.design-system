import React from 'react';
import './wifi.css';

export interface wifiProps {
  className?: string;
  children?: React.ReactNode;
}

export const wifi: React.FC<wifiProps> = ({ className, children }) => {
  return (
    <div className={`wifi ${className || ''}`}>
      {children || 'wifi Component'}
    </div>
  );
};
