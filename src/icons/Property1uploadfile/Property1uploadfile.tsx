import React from 'react';
import './Property1uploadfile.css';
import IconSvg from '../assets/icons/Property1uploadfile--2992-2817.svg?react';

export interface Property1uploadfileProps {
  className?: string;
}

/**
 * Property1uploadfile
 *
 * Original name: Property 1=Upload file
 * SVG file: Property1uploadfile--2992-2817.svg
 */
export const Property1uploadfile: React.FC<Property1uploadfileProps> = ({
  className,
}) => {
  return <IconSvg className={`property1uploadfile ${className || ''}`} />;
};
