import React from 'react';
import './Property1epal2.css';
import IconSvg from '../assets/icons/Property1epal2--2453-1533.svg?react';

export interface Property1epal2Props {
  className?: string;
}

/**
 * Property1epal2
 *
 * Original name: Property 1=EPAL_2
 * SVG file: Property1epal2--2453-1533.svg
 */
export const Property1epal2: React.FC<Property1epal2Props> = ({
  className,
}) => {
  return <IconSvg className={`property1epal2 ${className || ''}`} />;
};
