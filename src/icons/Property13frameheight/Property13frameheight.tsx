import React from 'react';
import './Property13frameheight.css';
import IconSvg from '../assets/icons/Property13frameheight--4020-34786.svg?react';

export interface Property13frameheightProps {
  className?: string;
}

/**
 * Property13frameheight
 *
 * Original name: Property 1=3. Frame height
 * SVG file: Property13frameheight--4020-34786.svg
 */
export const Property13frameheight: React.FC<Property13frameheightProps> = ({
  className,
}) => {
  return <IconSvg className={`property13frameheight ${className || ''}`} />;
};
