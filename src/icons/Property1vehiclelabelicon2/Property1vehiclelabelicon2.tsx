import React from 'react';
import './Property1vehiclelabelicon2.css';
import IconSvg from '../assets/icons/Property1vehiclelabelicon2--3814-55118.svg?react';

export interface Property1vehiclelabelicon2Props {
  className?: string;
}

/**
 * Property1vehiclelabelicon2
 *
 * Original name: Property 1=Vehicle label icon 2
 * SVG file: Property1vehiclelabelicon2--3814-55118.svg
 */
export const Property1vehiclelabelicon2: React.FC<
  Property1vehiclelabelicon2Props
> = ({ className }) => {
  return (
    <IconSvg className={`property1vehiclelabelicon2 ${className || ''}`} />
  );
};
