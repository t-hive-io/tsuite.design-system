import React from 'react';
import './Property1focused.css';
import IconSvg from '../assets/icons/Property1focused--3786-53777.svg?react';

export interface Property1focusedProps {
  className?: string;
}

/**
 * Property1focused
 *
 * Original name: Property 1=Focused
 * SVG file: Property1focused--3786-53777.svg
 */
export const Property1focused: React.FC<Property1focusedProps> = ({
  className,
}) => {
  return <IconSvg className={`property1focused ${className || ''}`} />;
};
