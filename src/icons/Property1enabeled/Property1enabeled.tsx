import React from 'react';
import './Property1enabeled.css';
import IconSvg from '../assets/icons/Property1enabeled--5168-45250.svg?react';

export interface Property1enabeledProps {
  className?: string;
}

/**
 * Property1enabeled
 *
 * Original name: Property 1=Enabeled
 * SVG file: Property1enabeled--5168-45250.svg
 */
export const Property1enabeled: React.FC<Property1enabeledProps> = ({
  className,
}) => {
  return <IconSvg className={`property1enabeled ${className || ''}`} />;
};
