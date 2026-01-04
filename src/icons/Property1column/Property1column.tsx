import React from 'react';
import './Property1column.css';
import IconSvg from '../assets/icons/Property1column--5246-38435.svg?react';

export interface Property1columnProps {
  className?: string;
}

/**
 * Property1column
 *
 * Original name: Property 1=Column
 * SVG file: Property1column--5246-38435.svg
 */
export const Property1column: React.FC<Property1columnProps> = ({
  className,
}) => {
  return <IconSvg className={`property1column ${className || ''}`} />;
};
