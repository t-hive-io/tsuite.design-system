import React from 'react';
import './Statedefaulttypesmall.css';
import IconSvg from '../assets/icons/Statedefaulttypesmall--4406-38597.svg?react';

export interface StatedefaulttypesmallProps {
  className?: string;
}

/**
 * Statedefaulttypesmall
 *
 * Original name: State=Default, Type=Small
 * SVG file: Statedefaulttypesmall--4406-38597.svg
 */
export const Statedefaulttypesmall: React.FC<StatedefaulttypesmallProps> = ({
  className,
}) => {
  return <IconSvg className={`statedefaulttypesmall ${className || ''}`} />;
};
