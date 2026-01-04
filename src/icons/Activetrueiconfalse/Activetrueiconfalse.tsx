import React from 'react';
import './Activetrueiconfalse.css';
import IconSvg from '../assets/icons/Activetrueiconfalse--1125-8912.svg?react';

export interface ActivetrueiconfalseProps {
  className?: string;
}

/**
 * Activetrueiconfalse
 *
 * Original name: Active=True, Icon=False
 * SVG file: Activetrueiconfalse--1125-8912.svg
 */
export const Activetrueiconfalse: React.FC<ActivetrueiconfalseProps> = ({
  className,
}) => {
  return <IconSvg className={`activetrueiconfalse ${className || ''}`} />;
};
