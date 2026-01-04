import React from 'react';
import './Createnewfloorplanpage.css';
import IconSvg from '../assets/icons/Createnewfloorplanpage--3147-1124.svg?react';

export interface CreatenewfloorplanpageProps {
  className?: string;
}

/**
 * Createnewfloorplanpage
 *
 * Original name: Create new floorplan page
 * SVG file: Createnewfloorplanpage--3147-1124.svg
 */
export const Createnewfloorplanpage: React.FC<CreatenewfloorplanpageProps> = ({
  className,
}) => {
  return <IconSvg className={`createnewfloorplanpage ${className || ''}`} />;
};
