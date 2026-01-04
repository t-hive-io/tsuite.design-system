import React from 'react';
import './Statewallandobstacle.css';
import IconSvg from '../assets/icons/Statewallandobstacle--1081-6540.svg?react';

export interface StatewallandobstacleProps {
  className?: string;
}

/**
 * Statewallandobstacle
 *
 * Original name: State=Wall and obstacle
 * SVG file: Statewallandobstacle--1081-6540.svg
 */
export const Statewallandobstacle: React.FC<StatewallandobstacleProps> = ({
  className,
}) => {
  return <IconSvg className={`statewallandobstacle ${className || ''}`} />;
};
