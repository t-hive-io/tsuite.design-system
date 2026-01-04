import React from 'react';
import './Property1visualizationagents.css';
import IconSvg from '../assets/icons/Property1visualizationagents--3023-8635.svg?react';

export interface Property1visualizationagentsProps {
  className?: string;
}

/**
 * Property1visualizationagents
 *
 * Original name: Property 1=Visualization Agents
 * SVG file: Property1visualizationagents--3023-8635.svg
 */
export const Property1visualizationagents: React.FC<
  Property1visualizationagentsProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1visualizationagents ${className || ''}`} />
  );
};
