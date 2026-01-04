import React from 'react';
import './Property1comStorageBottom.css';
import IconSvg from '../assets/icons/Property1comStorageBottom--2925-1503.svg?react';

export interface Property1comStorageBottomProps {
  className?: string;
}

/**
 * Property1comStorageBottom
 *
 * Original name: Property 1=Com_Storage_bottom
 * SVG file: Property1comStorageBottom--2925-1503.svg
 */
export const Property1comStorageBottom: React.FC<
  Property1comStorageBottomProps
> = ({ className }) => {
  return <IconSvg className={`property1comstoragebottom ${className || ''}`} />;
};
