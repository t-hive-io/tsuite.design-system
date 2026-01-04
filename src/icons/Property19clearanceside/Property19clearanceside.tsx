import React from 'react';
import './Property19clearanceside.css';
import IconSvg from '../assets/icons/Property19clearanceside--4020-34794.svg?react';

export interface Property19clearancesideProps {
  className?: string;
}

/**
 * Property19clearanceside
 *
 * Original name: Property 1=9. Clearance side
 * SVG file: Property19clearanceside--4020-34794.svg
 */
export const Property19clearanceside: React.FC<
  Property19clearancesideProps
> = ({ className }) => {
  return <IconSvg className={`property19clearanceside ${className || ''}`} />;
};
