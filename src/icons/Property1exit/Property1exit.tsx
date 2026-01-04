import React from 'react';
import './Property1exit.css';
import IconSvg from '../assets/icons/Property1exit--3786-54118.svg?react';

export interface Property1exitProps {
  className?: string;
}

/**
 * Property1exit
 *
 * Original name: Property 1=Exit
 * SVG file: Property1exit--3786-54118.svg
 */
export const Property1exit: React.FC<Property1exitProps> = ({ className }) => {
  return <IconSvg className={`property1exit ${className || ''}`} />;
};
