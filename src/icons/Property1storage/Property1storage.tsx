import React from 'react';
import './Property1storage.css';
import IconSvg from '../assets/icons/Property1storage--3003-10599.svg?react';

export interface Property1storageProps {
  className?: string;
}

/**
 * Property1storage
 *
 * Original name: Property 1=Storage
 * SVG file: Property1storage--3003-10599.svg
 */
export const Property1storage: React.FC<Property1storageProps> = ({
  className,
}) => {
  return <IconSvg className={`property1storage ${className || ''}`} />;
};
