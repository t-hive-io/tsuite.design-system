import React from 'react';
import './Property1comProcessBottom.css';
import IconSvg from '../assets/icons/Property1comProcessBottom--2925-1249.svg?react';

export interface Property1comProcessBottomProps {
  className?: string;
}

/**
 * Property1comProcessBottom
 *
 * Original name: Property 1=Com_Process_bottom
 * SVG file: Property1comProcessBottom--2925-1249.svg
 */
export const Property1comProcessBottom: React.FC<
  Property1comProcessBottomProps
> = ({ className }) => {
  return <IconSvg className={`property1comprocessbottom ${className || ''}`} />;
};
