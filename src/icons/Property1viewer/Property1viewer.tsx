import React from 'react';
import './Property1viewer.css';
import IconSvg from '../assets/icons/Property1viewer--3832-44906.svg?react';

export interface Property1viewerProps {
  className?: string;
}

/**
 * Property1viewer
 *
 * Original name: Property 1=Viewer
 * SVG file: Property1viewer--3832-44906.svg
 */
export const Property1viewer: React.FC<Property1viewerProps> = ({
  className,
}) => {
  return <IconSvg className={`property1viewer ${className || ''}`} />;
};
