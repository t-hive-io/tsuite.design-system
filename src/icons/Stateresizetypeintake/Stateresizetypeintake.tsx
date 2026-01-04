import React from 'react';
import './Stateresizetypeintake.css';
import IconSvg from '../assets/icons/Stateresizetypeintake--2133-10003.svg?react';

export interface StateresizetypeintakeProps {
  className?: string;
}

/**
 * Stateresizetypeintake
 *
 * Original name: State=Resize, Type=Intake
 * SVG file: Stateresizetypeintake--2133-10003.svg
 */
export const Stateresizetypeintake: React.FC<StateresizetypeintakeProps> = ({
  className,
}) => {
  return <IconSvg className={`stateresizetypeintake ${className || ''}`} />;
};
