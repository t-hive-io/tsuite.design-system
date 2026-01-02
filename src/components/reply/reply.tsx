import React from 'react';
import './reply.css';

export interface replyProps {
  className?: string;
  children?: React.ReactNode;
}

export const reply: React.FC<replyProps> = ({ className, children }) => {
  return (
    <div className={`reply ${className || ''}`}>
      {children || 'reply Component'}
    </div>
  );
};
