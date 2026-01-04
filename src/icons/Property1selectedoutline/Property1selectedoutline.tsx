import React from 'react';
import './Property1selectedoutline.css';
import IconSvg from '../assets/icons/Property1selectedoutline--3093-2938.svg?react';

export interface Property1selectedoutlineProps {
  className?: string;
}

/**
 * Property1selectedoutline
 *
 * Original name: Property 1=Selected outline
 * SVG file: Property1selectedoutline--3093-2938.svg
 */
export const Property1selectedoutline: React.FC<
  Property1selectedoutlineProps
> = ({ className }) => {
  return <IconSvg className={`property1selectedoutline ${className || ''}`} />;
};
