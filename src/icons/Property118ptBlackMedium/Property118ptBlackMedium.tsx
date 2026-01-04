import React from 'react';
import './Property118ptBlackMedium.css';
import IconSvg from '../assets/icons/Property118ptBlackMedium--4672-42042.svg?react';

export interface Property118ptBlackMediumProps {
  className?: string;
}

/**
 * Property118ptBlackMedium
 *
 * Original name: Property 1=18pt_black_medium
 * SVG file: Property118ptBlackMedium--4672-42042.svg
 */
export const Property118ptBlackMedium: React.FC<
  Property118ptBlackMediumProps
> = ({ className }) => {
  return <IconSvg className={`property118ptblackmedium ${className || ''}`} />;
};
