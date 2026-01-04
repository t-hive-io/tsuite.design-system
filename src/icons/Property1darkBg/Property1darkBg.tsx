import React from 'react';
import './Property1darkBg.css';
import IconSvg from '../assets/icons/Property1darkBg--4672-41981.svg?react';

export interface Property1darkBgProps {
  className?: string;
}

/**
 * Property1darkBg
 *
 * Original name: Property 1=Dark_bg
 * SVG file: Property1darkBg--4672-41981.svg
 */
export const Property1darkBg: React.FC<Property1darkBgProps> = ({
  className,
}) => {
  return <IconSvg className={`property1darkbg ${className || ''}`} />;
};
