import React from 'react';
import './Statedisable.css';
import IconSvg from '../assets/icons/Statedisable--3838-102532.svg?react';

export interface StatedisableProps {
  className?: string;
}

/**
 * Statedisable
 *
 * Original name: State=Disable
 * SVG file: Statedisable--3838-102532.svg
 */
export const Statedisable: React.FC<StatedisableProps> = ({ className }) => {
  return <IconSvg className={`statedisable ${className || ''}`} />;
};
