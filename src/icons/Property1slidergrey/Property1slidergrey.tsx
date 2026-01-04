import React from 'react';
import './Property1slidergrey.css';
import IconSvg from '../assets/icons/Property1slidergrey--3023-9457.svg?react';

export interface Property1slidergreyProps {
  className?: string;
}

/**
 * Property1slidergrey
 *
 * Original name: Property 1=Slider grey
 * SVG file: Property1slidergrey--3023-9457.svg
 */
export const Property1slidergrey: React.FC<Property1slidergreyProps> = ({
  className,
}) => {
  return <IconSvg className={`property1slidergrey ${className || ''}`} />;
};
