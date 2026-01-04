import React from 'react';
import './Property1vehicletypeviewer.css';
import IconSvg from '../assets/icons/Property1vehicletypeviewer--3832-43635.svg?react';

export interface Property1vehicletypeviewerProps {
  className?: string;
}

/**
 * Property1vehicletypeviewer
 *
 * Original name: Property 1=Vehicle type viewer
 * SVG file: Property1vehicletypeviewer--3832-43635.svg
 */
export const Property1vehicletypeviewer: React.FC<
  Property1vehicletypeviewerProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1vehicletypeviewer ${className || ''}`} />
  );
};
