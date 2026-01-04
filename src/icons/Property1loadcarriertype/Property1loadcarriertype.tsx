import React from 'react';
import './Property1loadcarriertype.css';
import IconSvg from '../assets/icons/Property1loadcarriertype--3814-55464.svg?react';

export interface Property1loadcarriertypeProps {
  className?: string;
}

/**
 * Property1loadcarriertype
 *
 * Original name: Property 1=Load carrier type
 * SVG file: Property1loadcarriertype--3814-55464.svg
 */
export const Property1loadcarriertype: React.FC<
  Property1loadcarriertypeProps
> = ({ className }) => {
  return <IconSvg className={`property1loadcarriertype ${className || ''}`} />;
};
