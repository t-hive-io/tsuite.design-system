import React from 'react';
import './balance.css';

export interface balanceProps {
  className?: string;
  children?: React.ReactNode;
}

export const balance: React.FC<balanceProps> = ({ className, children }) => {
  return (
    <div className={`balance ${className || ''}`}>
      {children || 'balance Component'}
    </div>
  );
};
