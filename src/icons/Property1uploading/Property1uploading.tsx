import React from 'react';
import './Property1uploading.css';
import IconSvg from '../assets/icons/Property1uploading--3815-56290.svg?react';

export interface Property1uploadingProps {
  className?: string;
}

/**
 * Property1uploading
 *
 * Original name: Property 1=Uploading
 * SVG file: Property1uploading--3815-56290.svg
 */
export const Property1uploading: React.FC<Property1uploadingProps> = ({
  className,
}) => {
  return <IconSvg className={`property1uploading ${className || ''}`} />;
};
