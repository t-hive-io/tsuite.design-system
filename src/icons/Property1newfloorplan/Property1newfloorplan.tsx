import React from 'react';
import './Property1newfloorplan.css';
import IconSvg from '../assets/icons/Property1newfloorplan--3142-9600.svg?react';

export interface Property1newfloorplanProps {
  className?: string;
}

/**
 * Property1newfloorplan
 *
 * Original name: Property 1=New floorplan
 * SVG file: Property1newfloorplan--3142-9600.svg
 */
export const Property1newfloorplan: React.FC<Property1newfloorplanProps> = ({
  className,
}) => {
  return <IconSvg className={`property1newfloorplan ${className || ''}`} />;
};
