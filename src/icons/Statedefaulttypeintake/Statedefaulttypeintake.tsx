import React from 'react';
import './Statedefaulttypeintake.css';
import IconSvg from '../assets/icons/Statedefaulttypeintake--2133-10000.svg?react';

export interface StatedefaulttypeintakeProps {
  className?: string;
}

/**
 * Statedefaulttypeintake
 *
 * Original name: State=Default, Type=Intake
 * SVG file: Statedefaulttypeintake--2133-10000.svg
 */
export const Statedefaulttypeintake: React.FC<StatedefaulttypeintakeProps> = ({
  className,
}) => {
  return <IconSvg className={`statedefaulttypeintake ${className || ''}`} />;
};
