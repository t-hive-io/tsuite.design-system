import React from 'react';
import './UpDownadjuster.css';
import IconSvg from '../assets/icons/UpDownadjuster--1523-9724.svg?react';

export interface UpDownadjusterProps {
  className?: string;
}

/**
 * UpDownadjuster
 *
 * Original name: up-down adjuster
 * SVG file: UpDownadjuster--1523-9724.svg
 */
export const UpDownadjuster: React.FC<UpDownadjusterProps> = ({
  className,
}) => {
  return <IconSvg className={`updownadjuster ${className || ''}`} />;
};
