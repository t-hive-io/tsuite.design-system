import React from 'react';
import './Property1referenceimage.css';
import IconSvg from '../assets/icons/Property1referenceimage--3814-55563.svg?react';

export interface Property1referenceimageProps {
  className?: string;
}

/**
 * Property1referenceimage
 *
 * Original name: Property 1=Reference image
 * SVG file: Property1referenceimage--3814-55563.svg
 */
export const Property1referenceimage: React.FC<
  Property1referenceimageProps
> = ({ className }) => {
  return <IconSvg className={`property1referenceimage ${className || ''}`} />;
};
