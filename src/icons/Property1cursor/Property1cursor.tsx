import React from 'react';
import './Property1cursor.css';
import IconSvg from '../assets/icons/Property1cursor--3168-10776.svg?react';

export interface Property1cursorProps {
  className?: string;
}

/**
 * Property1cursor
 *
 * Original name: Property 1=Cursor
 * SVG file: Property1cursor--3168-10776.svg
 */
export const Property1cursor: React.FC<Property1cursorProps> = ({
  className,
}) => {
  return <IconSvg className={`property1cursor ${className || ''}`} />;
};
