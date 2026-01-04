import React from 'react';
import './Property1automaticvalidationsim.css';
import IconSvg from '../assets/icons/Property1automaticvalidationsim--3102-8368.svg?react';

export interface Property1automaticvalidationsimProps {
  className?: string;
}

/**
 * Property1automaticvalidationsim
 *
 * Original name: Property 1=Automatic validation sim
 * SVG file: Property1automaticvalidationsim--3102-8368.svg
 */
export const Property1automaticvalidationsim: React.FC<
  Property1automaticvalidationsimProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1automaticvalidationsim ${className || ''}`} />
  );
};
