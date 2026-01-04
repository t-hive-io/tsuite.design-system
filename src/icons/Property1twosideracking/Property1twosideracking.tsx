import React from 'react';
import './Property1twosideracking.css';
import IconSvg from '../assets/icons/Property1twosideracking--5330-36689.svg?react';

export interface Property1twosiderackingProps {
  className?: string;
}

/**
 * Property1twosideracking
 *
 * Original name: Property 1=Two side racking
 * SVG file: Property1twosideracking--5330-36689.svg
 */
export const Property1twosideracking: React.FC<
  Property1twosiderackingProps
> = ({ className }) => {
  return <IconSvg className={`property1twosideracking ${className || ''}`} />;
};
