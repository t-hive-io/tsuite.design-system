import React from 'react';
import './Property1marginleftright.css';
import IconSvg from '../assets/icons/Property1marginleftright--5311-73035.svg?react';

export interface Property1marginleftrightProps {
  className?: string;
}

/**
 * Property1marginleftright
 *
 * Original name: Property 1=Margin left right
 * SVG file: Property1marginleftright--5311-73035.svg
 */
export const Property1marginleftright: React.FC<
  Property1marginleftrightProps
> = ({ className }) => {
  return <IconSvg className={`property1marginleftright ${className || ''}`} />;
};
