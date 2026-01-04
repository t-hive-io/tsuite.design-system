import React from 'react';
import './Property1manualprocessareasection.css';
import IconSvg from '../assets/icons/Property1manualprocessareasection--5362-26854.svg?react';

export interface Property1manualprocessareasectionProps {
  className?: string;
}

/**
 * Property1manualprocessareasection
 *
 * Original name: Property 1=Manual process area section
 * SVG file: Property1manualprocessareasection--5362-26854.svg
 */
export const Property1manualprocessareasection: React.FC<
  Property1manualprocessareasectionProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1manualprocessareasection ${className || ''}`}
    />
  );
};
