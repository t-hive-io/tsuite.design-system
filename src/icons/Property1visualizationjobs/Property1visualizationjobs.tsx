import React from 'react';
import './Property1visualizationjobs.css';
import IconSvg from '../assets/icons/Property1visualizationjobs--3023-7869.svg?react';

export interface Property1visualizationjobsProps {
  className?: string;
}

/**
 * Property1visualizationjobs
 *
 * Original name: Property 1=Visualization Jobs
 * SVG file: Property1visualizationjobs--3023-7869.svg
 */
export const Property1visualizationjobs: React.FC<
  Property1visualizationjobsProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1visualizationjobs ${className || ''}`} />
  );
};
