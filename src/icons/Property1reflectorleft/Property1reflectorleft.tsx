import React from 'react';
import './Property1reflectorleft.css';
import IconSvg from '../assets/icons/Property1reflectorleft--3054-9775.svg?react';

export interface Property1reflectorleftProps {
  className?: string;
}

/**
 * Property1reflectorleft
 *
 * Original name: Property 1=Reflector left
 * SVG file: Property1reflectorleft--3054-9775.svg
 */
export const Property1reflectorleft: React.FC<Property1reflectorleftProps> = ({
  className,
}) => {
  return <IconSvg className={`property1reflectorleft ${className || ''}`} />;
};
