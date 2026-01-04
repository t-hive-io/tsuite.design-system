import React from 'react';
import './Statedefaulttypeprocess.css';
import IconSvg from '../assets/icons/Statedefaulttypeprocess--2133-9571.svg?react';

export interface StatedefaulttypeprocessProps {
  className?: string;
}

/**
 * Statedefaulttypeprocess
 *
 * Original name: State=Default, Type=Process
 * SVG file: Statedefaulttypeprocess--2133-9571.svg
 */
export const Statedefaulttypeprocess: React.FC<
  StatedefaulttypeprocessProps
> = ({ className }) => {
  return <IconSvg className={`statedefaulttypeprocess ${className || ''}`} />;
};
