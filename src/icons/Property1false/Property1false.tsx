import React from 'react';
import './Property1false.css';
import IconSvg from '../assets/icons/Property1false--1106-6756.svg?react';

export interface Property1falseProps {
  className?: string;
}

/**
 * Property1false
 *
 * Original name: Property 1=False
 * SVG file: Property1false--1106-6756.svg
 */
export const Property1false: React.FC<Property1falseProps> = ({
  className,
}) => {
  return <IconSvg className={`property1false ${className || ''}`} />;
};
