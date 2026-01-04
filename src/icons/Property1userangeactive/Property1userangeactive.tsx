import React from 'react';
import './Property1userangeactive.css';
import IconSvg from '../assets/icons/Property1userangeactive--5264-22952.svg?react';

export interface Property1userangeactiveProps {
  className?: string;
}

/**
 * Property1userangeactive
 *
 * Original name: Property 1=Use range active
 * SVG file: Property1userangeactive--5264-22952.svg
 */
export const Property1userangeactive: React.FC<
  Property1userangeactiveProps
> = ({ className }) => {
  return <IconSvg className={`property1userangeactive ${className || ''}`} />;
};
