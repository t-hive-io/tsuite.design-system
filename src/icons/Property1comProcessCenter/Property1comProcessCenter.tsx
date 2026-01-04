import React from 'react';
import './Property1comProcessCenter.css';
import IconSvg from '../assets/icons/Property1comProcessCenter--2925-1199.svg?react';

export interface Property1comProcessCenterProps {
  className?: string;
}

/**
 * Property1comProcessCenter
 *
 * Original name: Property 1=Com_Process_center
 * SVG file: Property1comProcessCenter--2925-1199.svg
 */
export const Property1comProcessCenter: React.FC<
  Property1comProcessCenterProps
> = ({ className }) => {
  return <IconSvg className={`property1comprocesscenter ${className || ''}`} />;
};
