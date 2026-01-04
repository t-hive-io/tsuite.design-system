import React from 'react';
import './Property1abcd.css';
import IconSvg from '../assets/icons/Property1abcd--3131-9503.svg?react';

export interface Property1abcdProps {
  className?: string;
}

/**
 * Property1abcd
 *
 * Original name: Property 1=ABCD
 * SVG file: Property1abcd--3131-9503.svg
 */
export const Property1abcd: React.FC<Property1abcdProps> = ({ className }) => {
  return <IconSvg className={`property1abcd ${className || ''}`} />;
};
