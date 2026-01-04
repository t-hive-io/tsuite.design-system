import React from 'react';
import './Property1loadcarriertypeviewer.css';
import IconSvg from '../assets/icons/Property1loadcarriertypeviewer--3832-43684.svg?react';

export interface Property1loadcarriertypeviewerProps {
  className?: string;
}

/**
 * Property1loadcarriertypeviewer
 *
 * Original name: Property 1=Load carrier type viewer
 * SVG file: Property1loadcarriertypeviewer--3832-43684.svg
 */
export const Property1loadcarriertypeviewer: React.FC<
  Property1loadcarriertypeviewerProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1loadcarriertypeviewer ${className || ''}`} />
  );
};
