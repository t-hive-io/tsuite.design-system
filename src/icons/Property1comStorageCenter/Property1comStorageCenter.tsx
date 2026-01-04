import React from 'react';
import './Property1comStorageCenter.css';
import IconSvg from '../assets/icons/Property1comStorageCenter--2925-1353.svg?react';

export interface Property1comStorageCenterProps {
  className?: string;
}

/**
 * Property1comStorageCenter
 *
 * Original name: Property 1=Com_Storage_center
 * SVG file: Property1comStorageCenter--2925-1353.svg
 */
export const Property1comStorageCenter: React.FC<
  Property1comStorageCenterProps
> = ({ className }) => {
  return <IconSvg className={`property1comstoragecenter ${className || ''}`} />;
};
