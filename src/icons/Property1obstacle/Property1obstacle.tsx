import React from 'react';
import './Property1obstacle.css';
import IconSvg from '../assets/icons/Property1obstacle--3003-10451.svg?react';

export interface Property1obstacleProps {
  className?: string;
}

/**
 * Property1obstacle
 *
 * Original name: Property 1=Obstacle
 * SVG file: Property1obstacle--3003-10451.svg
 */
export const Property1obstacle: React.FC<Property1obstacleProps> = ({
  className,
}) => {
  return <IconSvg className={`property1obstacle ${className || ''}`} />;
};
