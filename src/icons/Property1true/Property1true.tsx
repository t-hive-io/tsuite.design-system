import React from 'react';
import './Property1true.css';
import IconSvg from '../assets/icons/Property1true--1106-6751.svg?react';

export interface Property1trueProps {
  className?: string;
}

/**
 * Property1true
 *
 * Original name: Property 1=True
 * SVG file: Property1true--1106-6751.svg
 */
export const Property1true: React.FC<Property1trueProps> = ({ className }) => {
  return <IconSvg className={`property1true ${className || ''}`} />;
};
