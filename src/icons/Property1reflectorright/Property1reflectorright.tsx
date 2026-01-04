import React from 'react';
import './Property1reflectorright.css';
import IconSvg from '../assets/icons/Property1reflectorright--3054-9776.svg?react';

export interface Property1reflectorrightProps {
  className?: string;
}

/**
 * Property1reflectorright
 *
 * Original name: Property 1=Reflector right
 * SVG file: Property1reflectorright--3054-9776.svg
 */
export const Property1reflectorright: React.FC<
  Property1reflectorrightProps
> = ({ className }) => {
  return <IconSvg className={`property1reflectorright ${className || ''}`} />;
};
