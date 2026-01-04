import React from 'react';
import './Property1selectedgroupareas.css';
import IconSvg from '../assets/icons/Property1selectedgroupareas--3032-9691.svg?react';

export interface Property1selectedgroupareasProps {
  className?: string;
}

/**
 * Property1selectedgroupareas
 *
 * Original name: Property 1=Selected group areas
 * SVG file: Property1selectedgroupareas--3032-9691.svg
 */
export const Property1selectedgroupareas: React.FC<
  Property1selectedgroupareasProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1selectedgroupareas ${className || ''}`} />
  );
};
