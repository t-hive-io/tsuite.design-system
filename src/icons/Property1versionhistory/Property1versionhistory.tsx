import React from 'react';
import './Property1versionhistory.css';
import IconSvg from '../assets/icons/Property1versionhistory--3156-8769.svg?react';

export interface Property1versionhistoryProps {
  className?: string;
}

/**
 * Property1versionhistory
 *
 * Original name: Property 1=Version history
 * SVG file: Property1versionhistory--3156-8769.svg
 */
export const Property1versionhistory: React.FC<
  Property1versionhistoryProps
> = ({ className }) => {
  return <IconSvg className={`property1versionhistory ${className || ''}`} />;
};
