import React from 'react';
import './Property1fileuploaded.css';
import IconSvg from '../assets/icons/Property1fileuploaded--2992-2825.svg?react';

export interface Property1fileuploadedProps {
  className?: string;
}

/**
 * Property1fileuploaded
 *
 * Original name: Property 1=File uploaded
 * SVG file: Property1fileuploaded--2992-2825.svg
 */
export const Property1fileuploaded: React.FC<Property1fileuploadedProps> = ({
  className,
}) => {
  return <IconSvg className={`property1fileuploaded ${className || ''}`} />;
};
