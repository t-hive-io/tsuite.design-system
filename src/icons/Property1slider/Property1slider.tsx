import React from 'react';
import './Property1slider.css';
import IconSvg from '../assets/icons/Property1slider--3833-49802.svg?react';

export interface Property1sliderProps {
  className?: string;
}

/**
 * Property1slider
 *
 * Original name: Property 1=Slider
 * SVG file: Property1slider--3833-49802.svg
 */
export const Property1slider: React.FC<Property1sliderProps> = ({
  className,
}) => {
  return <IconSvg className={`property1slider ${className || ''}`} />;
};
