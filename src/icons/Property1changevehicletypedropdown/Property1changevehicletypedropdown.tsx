import React from 'react';
import './Property1changevehicletypedropdown.css';
import IconSvg from '../assets/icons/Property1changevehicletypedropdown--3832-43601.svg?react';

export interface Property1changevehicletypedropdownProps {
  className?: string;
}

/**
 * Property1changevehicletypedropdown
 *
 * Original name: Property 1=Changevehicle type dropdown
 * SVG file: Property1changevehicletypedropdown--3832-43601.svg
 */
export const Property1changevehicletypedropdown: React.FC<
  Property1changevehicletypedropdownProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1changevehicletypedropdown ${className || ''}`}
    />
  );
};
