import React from 'react';
import './Property1orderprofile.css';
import IconSvg from '../assets/icons/Property1orderprofile--3003-11668.svg?react';

export interface Property1orderprofileProps {
  className?: string;
}

/**
 * Property1orderprofile
 *
 * Original name: Property 1=Order profile
 * SVG file: Property1orderprofile--3003-11668.svg
 */
export const Property1orderprofile: React.FC<Property1orderprofileProps> = ({
  className,
}) => {
  return <IconSvg className={`property1orderprofile ${className || ''}`} />;
};
