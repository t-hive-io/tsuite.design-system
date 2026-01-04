import React from 'react';
import './Property1margintopbottom.css';
import IconSvg from '../assets/icons/Property1margintopbottom--5311-73036.svg?react';

export interface Property1margintopbottomProps {
  className?: string;
}

/**
 * Property1margintopbottom
 *
 * Original name: Property 1=Margin top bottom
 * SVG file: Property1margintopbottom--5311-73036.svg
 */
export const Property1margintopbottom: React.FC<
  Property1margintopbottomProps
> = ({ className }) => {
  return <IconSvg className={`property1margintopbottom ${className || ''}`} />;
};
