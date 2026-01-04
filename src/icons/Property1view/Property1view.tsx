import React from 'react';
import './Property1view.css';
import IconSvg from '../assets/icons/Property1view--3168-10774.svg?react';

export interface Property1viewProps {
  className?: string;
}

/**
 * Property1view
 *
 * Original name: Property 1=View
 * SVG file: Property1view--3168-10774.svg
 */
export const Property1view: React.FC<Property1viewProps> = ({ className }) => {
  return <IconSvg className={`property1view ${className || ''}`} />;
};
