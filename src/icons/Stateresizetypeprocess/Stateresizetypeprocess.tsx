import React from 'react';
import './Stateresizetypeprocess.css';
import IconSvg from '../assets/icons/Stateresizetypeprocess--2133-9092.svg?react';

export interface StateresizetypeprocessProps {
  className?: string;
}

/**
 * Stateresizetypeprocess
 *
 * Original name: State=Resize, Type=Process
 * SVG file: Stateresizetypeprocess--2133-9092.svg
 */
export const Stateresizetypeprocess: React.FC<StateresizetypeprocessProps> = ({
  className,
}) => {
  return <IconSvg className={`stateresizetypeprocess ${className || ''}`} />;
};
