import React from 'react';
import './Property1intakeracking.css';
import IconSvg from '../assets/icons/Property1intakeracking--3799-62004.svg?react';

export interface Property1intakerackingProps {
  className?: string;
}

/**
 * Property1intakeracking
 *
 * Original name: Property 1=Intake Racking
 * SVG file: Property1intakeracking--3799-62004.svg
 */
export const Property1intakeracking: React.FC<Property1intakerackingProps> = ({
  className,
}) => {
  return <IconSvg className={`property1intakeracking ${className || ''}`} />;
};
