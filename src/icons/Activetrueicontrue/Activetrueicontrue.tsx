import React from 'react';
import './Activetrueicontrue.css';
import IconSvg from '../assets/icons/Activetrueicontrue--1125-9091.svg?react';

export interface ActivetrueicontrueProps {
  className?: string;
}

/**
 * Activetrueicontrue
 *
 * Original name: Active=True, Icon=True
 * SVG file: Activetrueicontrue--1125-9091.svg
 */
export const Activetrueicontrue: React.FC<ActivetrueicontrueProps> = ({
  className,
}) => {
  return <IconSvg className={`activetrueicontrue ${className || ''}`} />;
};
