import React from 'react';
import './Property1enabeled1.css';
import IconSvg from '../assets/icons/Property1enabeled1--3832-44801.svg?react';

export interface Property1enabeled1Props {
  className?: string;
}

/**
 * Property1enabeled1
 *
 * Original name: Property 1=Enabeled 1
 * SVG file: Property1enabeled1--3832-44801.svg
 */
export const Property1enabeled1: React.FC<Property1enabeled1Props> = ({
  className,
}) => {
  return <IconSvg className={`property1enabeled1 ${className || ''}`} />;
};
