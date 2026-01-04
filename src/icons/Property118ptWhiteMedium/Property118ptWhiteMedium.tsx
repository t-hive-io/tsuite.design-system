import React from 'react';
import './Property118ptWhiteMedium.css';
import IconSvg from '../assets/icons/Property118ptWhiteMedium--4672-42078.svg?react';

export interface Property118ptWhiteMediumProps {
  className?: string;
}

/**
 * Property118ptWhiteMedium
 *
 * Original name: Property 1=18pt_white_medium
 * SVG file: Property118ptWhiteMedium--4672-42078.svg
 */
export const Property118ptWhiteMedium: React.FC<
  Property118ptWhiteMediumProps
> = ({ className }) => {
  return <IconSvg className={`property118ptwhitemedium ${className || ''}`} />;
};
