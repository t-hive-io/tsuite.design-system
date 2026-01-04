import React from 'react';
import './Property1userangedeactive.css';
import IconSvg from '../assets/icons/Property1userangedeactive--5264-22953.svg?react';

export interface Property1userangedeactiveProps {
  className?: string;
}

/**
 * Property1userangedeactive
 *
 * Original name: Property 1=Use range deactive
 * SVG file: Property1userangedeactive--5264-22953.svg
 */
export const Property1userangedeactive: React.FC<
  Property1userangedeactiveProps
> = ({ className }) => {
  return <IconSvg className={`property1userangedeactive ${className || ''}`} />;
};
