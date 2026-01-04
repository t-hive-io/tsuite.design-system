import React from 'react';
import './Property1lightBg.css';
import IconSvg from '../assets/icons/Property1lightBg--892-6638.svg?react';

export interface Property1lightBgProps {
  className?: string;
}

/**
 * Property1lightBg
 *
 * Original name: Property 1=Light_bg
 * SVG file: Property1lightBg--892-6638.svg
 */
export const Property1lightBg: React.FC<Property1lightBgProps> = ({
  className,
}) => {
  return <IconSvg className={`property1lightbg ${className || ''}`} />;
};
