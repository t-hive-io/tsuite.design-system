import React from 'react';
import './Typelabelcontrols.css';
import IconSvg from '../assets/icons/Typelabelcontrols--1125-9950.svg?react';

export interface TypelabelcontrolsProps {
  className?: string;
}

/**
 * Typelabelcontrols
 *
 * Original name: Type=Label + controls
 * SVG file: Typelabelcontrols--1125-9950.svg
 */
export const Typelabelcontrols: React.FC<TypelabelcontrolsProps> = ({
  className,
}) => {
  return <IconSvg className={`typelabelcontrols ${className || ''}`} />;
};
