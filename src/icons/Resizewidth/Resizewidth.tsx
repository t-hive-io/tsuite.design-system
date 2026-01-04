import React from 'react';
import './Resizewidth.css';
import IconSvg from '../assets/icons/Resizewidth--Hight.svg?react';

export interface ResizewidthProps {
  className?: string;
}

/**
 * Resizewidth
 *
 * Original name: resize width/hight
 * SVG file: Resizewidth--Hight.svg
 */
export const Resizewidth: React.FC<ResizewidthProps> = ({ className }) => {
  return <IconSvg className={`resizewidth ${className || ''}`} />;
};
