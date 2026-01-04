import React from 'react';
import './Property1disabled.css';
import IconSvg from '../assets/icons/Property1disabled--3929-109627.svg?react';

export interface Property1disabledProps {
  className?: string;
}

/**
 * Property1disabled
 *
 * Original name: Property 1=Disabled
 * SVG file: Property1disabled--3929-109627.svg
 */
export const Property1disabled: React.FC<Property1disabledProps> = ({
  className,
}) => {
  return <IconSvg className={`property1disabled ${className || ''}`} />;
};
