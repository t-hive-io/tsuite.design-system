import React from 'react';
import './Property13dviewbar.css';
import IconSvg from '../assets/icons/Property13dviewbar--3074-2891.svg?react';

export interface Property13dviewbarProps {
  className?: string;
}

/**
 * Property13dviewbar
 *
 * Original name: Property 1=3D view bar
 * SVG file: Property13dviewbar--3074-2891.svg
 */
export const Property13dviewbar: React.FC<Property13dviewbarProps> = ({
  className,
}) => {
  return <IconSvg className={`property13dviewbar ${className || ''}`} />;
};
