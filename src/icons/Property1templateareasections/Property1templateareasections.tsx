import React from 'react';
import './Property1templateareasections.css';
import IconSvg from '../assets/icons/Property1templateareasections--4346-41924.svg?react';

export interface Property1templateareasectionsProps {
  className?: string;
}

/**
 * Property1templateareasections
 *
 * Original name: Property 1=Template area sections
 * SVG file: Property1templateareasections--4346-41924.svg
 */
export const Property1templateareasections: React.FC<
  Property1templateareasectionsProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1templateareasections ${className || ''}`} />
  );
};
