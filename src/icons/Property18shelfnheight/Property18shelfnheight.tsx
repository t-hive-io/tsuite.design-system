import React from 'react';
import './Property18shelfnheight.css';
import IconSvg from '../assets/icons/Property18shelfnheight--4020-34787.svg?react';

export interface Property18shelfnheightProps {
  className?: string;
}

/**
 * Property18shelfnheight
 *
 * Original name: Property 1=8. Shelf n height
 * SVG file: Property18shelfnheight--4020-34787.svg
 */
export const Property18shelfnheight: React.FC<Property18shelfnheightProps> = ({
  className,
}) => {
  return <IconSvg className={`property18shelfnheight ${className || ''}`} />;
};
