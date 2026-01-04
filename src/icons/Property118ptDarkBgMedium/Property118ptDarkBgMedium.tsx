import React from 'react';
import './Property118ptDarkBgMedium.css';
import IconSvg from '../assets/icons/Property118ptDarkBgMedium--4672-38267.svg?react';

export interface Property118ptDarkBgMediumProps {
  className?: string;
}

/**
 * Property118ptDarkBgMedium
 *
 * Original name: Property 1=18pt_dark_bg_medium
 * SVG file: Property118ptDarkBgMedium--4672-38267.svg
 */
export const Property118ptDarkBgMedium: React.FC<
  Property118ptDarkBgMediumProps
> = ({ className }) => {
  return <IconSvg className={`property118ptdarkbgmedium ${className || ''}`} />;
};
