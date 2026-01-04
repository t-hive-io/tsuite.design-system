import React from 'react';
import './Property1reflectorid.css';
import IconSvg from '../assets/icons/Property1reflectorid--3837-51016.svg?react';

export interface Property1reflectoridProps {
  className?: string;
}

/**
 * Property1reflectorid
 *
 * Original name: Property 1=Reflector ID
 * SVG file: Property1reflectorid--3837-51016.svg
 */
export const Property1reflectorid: React.FC<Property1reflectoridProps> = ({
  className,
}) => {
  return <IconSvg className={`property1reflectorid ${className || ''}`} />;
};
