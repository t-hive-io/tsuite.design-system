import React from 'react';
import './Property111clearancetop.css';
import IconSvg from '../assets/icons/Property111clearancetop--4020-34797.svg?react';

export interface Property111clearancetopProps {
  className?: string;
}

/**
 * Property111clearancetop
 *
 * Original name: Property 1=11. Clearance top
 * SVG file: Property111clearancetop--4020-34797.svg
 */
export const Property111clearancetop: React.FC<
  Property111clearancetopProps
> = ({ className }) => {
  return <IconSvg className={`property111clearancetop ${className || ''}`} />;
};
