import React from 'react';
import './Property1clearancebetween.css';
import IconSvg from '../assets/icons/Property1clearancebetween--4492-37740.svg?react';

export interface Property1clearancebetweenProps {
  className?: string;
}

/**
 * Property1clearancebetween
 *
 * Original name: Property 1=Clearance between
 * SVG file: Property1clearancebetween--4492-37740.svg
 */
export const Property1clearancebetween: React.FC<
  Property1clearancebetweenProps
> = ({ className }) => {
  return <IconSvg className={`property1clearancebetween ${className || ''}`} />;
};
