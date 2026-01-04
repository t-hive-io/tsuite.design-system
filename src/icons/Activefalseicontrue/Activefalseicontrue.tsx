import React from 'react';
import './Activefalseicontrue.css';
import IconSvg from '../assets/icons/Activefalseicontrue--1125-9090.svg?react';

export interface ActivefalseicontrueProps {
  className?: string;
}

/**
 * Activefalseicontrue
 *
 * Original name: Active=False, Icon=True
 * SVG file: Activefalseicontrue--1125-9090.svg
 */
export const Activefalseicontrue: React.FC<ActivefalseicontrueProps> = ({
  className,
}) => {
  return <IconSvg className={`activefalseicontrue ${className || ''}`} />;
};
