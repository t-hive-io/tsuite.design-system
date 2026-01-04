import React from 'react';
import './Property1layersviewer.css';
import IconSvg from '../assets/icons/Property1layersviewer--3832-40986.svg?react';

export interface Property1layersviewerProps {
  className?: string;
}

/**
 * Property1layersviewer
 *
 * Original name: Property 1=Layers: viewer
 * SVG file: Property1layersviewer--3832-40986.svg
 */
export const Property1layersviewer: React.FC<Property1layersviewerProps> = ({
  className,
}) => {
  return <IconSvg className={`property1layersviewer ${className || ''}`} />;
};
