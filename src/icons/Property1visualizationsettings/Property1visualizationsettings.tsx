import React from 'react';
import './Property1visualizationsettings.css';
import IconSvg from '../assets/icons/Property1visualizationsettings--3023-8944.svg?react';

export interface Property1visualizationsettingsProps {
  className?: string;
}

/**
 * Property1visualizationsettings
 *
 * Original name: Property 1=Visualization Settings
 * SVG file: Property1visualizationsettings--3023-8944.svg
 */
export const Property1visualizationsettings: React.FC<
  Property1visualizationsettingsProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1visualizationsettings ${className || ''}`} />
  );
};
