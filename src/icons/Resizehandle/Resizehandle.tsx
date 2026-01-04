import React from 'react';
import './Resizehandle.css';
import IconSvg from '../assets/icons/Resizehandle--1841-8473.svg?react';

export interface ResizehandleProps {
  className?: string;
}

/**
 * Resizehandle
 *
 * Original name: Resize handle
 * SVG file: Resizehandle--1841-8473.svg
 */
export const Resizehandle: React.FC<ResizehandleProps> = ({ className }) => {
  return <IconSvg className={`resizehandle ${className || ''}`} />;
};
