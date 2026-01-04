import React from 'react';
import './Property1comStorageTop.css';
import IconSvg from '../assets/icons/Property1comStorageTop--2925-1553.svg?react';

export interface Property1comStorageTopProps {
  className?: string;
}

/**
 * Property1comStorageTop
 *
 * Original name: Property 1=Com_Storage_top
 * SVG file: Property1comStorageTop--2925-1553.svg
 */
export const Property1comStorageTop: React.FC<Property1comStorageTopProps> = ({
  className,
}) => {
  return <IconSvg className={`property1comstoragetop ${className || ''}`} />;
};
