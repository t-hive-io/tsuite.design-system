import React from 'react';
import './Property1load2collapsed.css';
import IconSvg from '../assets/icons/Property1load2collapsed--4324-36776.svg?react';

export interface Property1load2collapsedProps {
  className?: string;
}

/**
 * Property1load2collapsed
 *
 * Original name: Property 1=Load 2 collapsed
 * SVG file: Property1load2collapsed--4324-36776.svg
 */
export const Property1load2collapsed: React.FC<
  Property1load2collapsedProps
> = ({ className }) => {
  return <IconSvg className={`property1load2collapsed ${className || ''}`} />;
};
