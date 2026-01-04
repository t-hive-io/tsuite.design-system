import React from 'react';
import './Property1load1expanded.css';
import IconSvg from '../assets/icons/Property1load1expanded--4324-36847.svg?react';

export interface Property1load1expandedProps {
  className?: string;
}

/**
 * Property1load1expanded
 *
 * Original name: Property 1=Load 1 expanded
 * SVG file: Property1load1expanded--4324-36847.svg
 */
export const Property1load1expanded: React.FC<Property1load1expandedProps> = ({
  className,
}) => {
  return <IconSvg className={`property1load1expanded ${className || ''}`} />;
};
