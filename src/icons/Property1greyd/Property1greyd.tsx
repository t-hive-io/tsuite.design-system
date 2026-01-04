import React from 'react';
import './Property1greyd.css';
import IconSvg from '../assets/icons/Property1greyd--1126-8223.svg?react';

export interface Property1greydProps {
  className?: string;
}

/**
 * Property1greyd
 *
 * Original name: Property 1=Grey D
 * SVG file: Property1greyd--1126-8223.svg
 */
export const Property1greyd: React.FC<Property1greydProps> = ({
  className,
}) => {
  return <IconSvg className={`property1greyd ${className || ''}`} />;
};
