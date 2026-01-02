import React from 'react';
import './Obstacle.css';

export interface ObstacleProps {
  className?: string;
  children?: React.ReactNode;
}

export const Obstacle: React.FC<ObstacleProps> = ({ className, children }) => {
  return (
    <div className={`obstacle ${className || ''}`}>
      {children || 'Obstacle Component'}
    </div>
  );
};
