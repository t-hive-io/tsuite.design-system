import React from 'react';
import './Property1listview.css';
import IconSvg from '../assets/icons/Property1listview--3143-489.svg?react';

export interface Property1listviewProps {
  className?: string;
}

/**
 * Property1listview
 *
 * Original name: Property 1=List view
 * SVG file: Property1listview--3143-489.svg
 */
export const Property1listview: React.FC<Property1listviewProps> = ({
  className,
}) => {
  return <IconSvg className={`property1listview ${className || ''}`} />;
};
