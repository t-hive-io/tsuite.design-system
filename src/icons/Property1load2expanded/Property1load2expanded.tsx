import React from 'react';
import './Property1load2expanded.css';
import IconSvg from '../assets/icons/Property1load2expanded--4324-36705.svg?react';

export interface Property1load2expandedProps {
  className?: string;
}

/**
 * Property1load2expanded
 *
 * Original name: Property 1=Load 2 expanded
 * SVG file: Property1load2expanded--4324-36705.svg
 */
export const Property1load2expanded: React.FC<Property1load2expandedProps> = ({
  className,
}) => {
  return <IconSvg className={`property1load2expanded ${className || ''}`} />;
};
