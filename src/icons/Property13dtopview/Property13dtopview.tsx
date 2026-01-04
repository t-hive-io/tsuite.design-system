import React from 'react';
import './Property13dtopview.css';
import IconSvg from '../assets/icons/Property13dtopview--3182-677.svg?react';

export interface Property13dtopviewProps {
  className?: string;
}

/**
 * Property13dtopview
 *
 * Original name: Property 1=3D top view
 * SVG file: Property13dtopview--3182-677.svg
 */
export const Property13dtopview: React.FC<Property13dtopviewProps> = ({
  className,
}) => {
  return <IconSvg className={`property13dtopview ${className || ''}`} />;
};
