import React from 'react';
import './Property1sliderblue.css';
import IconSvg from '../assets/icons/Property1sliderblue--3023-9462.svg?react';

export interface Property1sliderblueProps {
  className?: string;
}

/**
 * Property1sliderblue
 *
 * Original name: Property 1=Slider blue
 * SVG file: Property1sliderblue--3023-9462.svg
 */
export const Property1sliderblue: React.FC<Property1sliderblueProps> = ({
  className,
}) => {
  return <IconSvg className={`property1sliderblue ${className || ''}`} />;
};
