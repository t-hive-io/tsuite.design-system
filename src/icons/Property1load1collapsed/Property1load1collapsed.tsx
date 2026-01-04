import React from 'react';
import './Property1load1collapsed.css';
import IconSvg from '../assets/icons/Property1load1collapsed--4324-36918.svg?react';

export interface Property1load1collapsedProps {
  className?: string;
}

/**
 * Property1load1collapsed
 *
 * Original name: Property 1=Load 1 collapsed
 * SVG file: Property1load1collapsed--4324-36918.svg
 */
export const Property1load1collapsed: React.FC<
  Property1load1collapsedProps
> = ({ className }) => {
  return <IconSvg className={`property1load1collapsed ${className || ''}`} />;
};
