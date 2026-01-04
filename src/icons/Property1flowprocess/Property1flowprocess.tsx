import React from 'react';
import './Property1flowprocess.css';
import IconSvg from '../assets/icons/Property1flowprocess--3019-11225.svg?react';

export interface Property1flowprocessProps {
  className?: string;
}

/**
 * Property1flowprocess
 *
 * Original name: Property 1=Flow process
 * SVG file: Property1flowprocess--3019-11225.svg
 */
export const Property1flowprocess: React.FC<Property1flowprocessProps> = ({
  className,
}) => {
  return <IconSvg className={`property1flowprocess ${className || ''}`} />;
};
