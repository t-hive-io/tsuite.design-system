import React from 'react';
import './Taskalt.css';

export interface TaskaltProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * task_alt
 * Maps to Figma component: "task_alt"
 */
export const Taskalt: React.FC<TaskaltProps> = ({ className, children }) => {
  return (
    <div className={`taskalt ${className || ''}`}>
      {children || 'task_alt'}
    </div>
  );
};
