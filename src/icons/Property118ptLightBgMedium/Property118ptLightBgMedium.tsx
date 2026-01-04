import React from 'react';
import './Property118ptLightBgMedium.css';
import IconSvg from '../assets/icons/Property118ptLightBgMedium--4672-38269.svg?react';

export interface Property118ptLightBgMediumProps {
  className?: string;
}

/**
 * Property118ptLightBgMedium
 *
 * Original name: Property 1=18pt_light_bg_medium
 * SVG file: Property118ptLightBgMedium--4672-38269.svg
 */
export const Property118ptLightBgMedium: React.FC<
  Property118ptLightBgMediumProps
> = ({ className }) => {
  return (
    <IconSvg className={`property118ptlightbgmedium ${className || ''}`} />
  );
};
