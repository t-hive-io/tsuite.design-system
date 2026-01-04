import React from 'react';
import './Property1iconlabelx2.css';
import IconSvg from '../assets/icons/Property1iconlabelx2--3811-43350.svg?react';

export interface Property1iconlabelx2Props {
  className?: string;
}

/**
 * Property1iconlabelx2
 *
 * Original name: Property 1=Icon label x2
 * SVG file: Property1iconlabelx2--3811-43350.svg
 */
export const Property1iconlabelx2: React.FC<Property1iconlabelx2Props> = ({
  className,
}) => {
  return <IconSvg className={`property1iconlabelx2 ${className || ''}`} />;
};
