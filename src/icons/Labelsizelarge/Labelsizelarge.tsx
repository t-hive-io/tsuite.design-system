import React from 'react';
import './Labelsizelarge.css';
import IconSvg from '../assets/icons/Labelsizelarge--1125-9810.svg?react';

export interface LabelsizelargeProps {
  className?: string;
}

/**
 * Labelsizelarge
 *
 * Original name: Label size=Large
 * SVG file: Labelsizelarge--1125-9810.svg
 */
export const Labelsizelarge: React.FC<LabelsizelargeProps> = ({
  className,
}) => {
  return <IconSvg className={`labelsizelarge ${className || ''}`} />;
};
