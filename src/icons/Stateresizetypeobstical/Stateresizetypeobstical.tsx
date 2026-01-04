import React from 'react';
import './Stateresizetypeobstical.css';
import IconSvg from '../assets/icons/Stateresizetypeobstical--2151-8429.svg?react';

export interface StateresizetypeobsticalProps {
  className?: string;
}

/**
 * Stateresizetypeobstical
 *
 * Original name: State=Resize, Type=Obstical
 * SVG file: Stateresizetypeobstical--2151-8429.svg
 */
export const Stateresizetypeobstical: React.FC<
  StateresizetypeobsticalProps
> = ({ className }) => {
  return <IconSvg className={`stateresizetypeobstical ${className || ''}`} />;
};
