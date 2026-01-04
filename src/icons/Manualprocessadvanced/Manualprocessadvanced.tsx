import React from 'react';
import './Manualprocessadvanced.css';
import IconSvg from '../assets/icons/Manualprocessadvanced--5362-3192.svg?react';

export interface ManualprocessadvancedProps {
  className?: string;
}

/**
 * Manualprocessadvanced
 *
 * Original name: Manual process advanced
 * SVG file: Manualprocessadvanced--5362-3192.svg
 */
export const Manualprocessadvanced: React.FC<ManualprocessadvancedProps> = ({
  className,
}) => {
  return <IconSvg className={`manualprocessadvanced ${className || ''}`} />;
};
