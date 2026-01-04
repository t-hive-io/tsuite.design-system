import React from 'react';
import './PanClosedhand.css';
import IconSvg from '../assets/icons/PanClosedhand--1091-6753.svg?react';

export interface PanClosedhandProps {
  className?: string;
}

/**
 * PanClosedhand
 *
 * Original name: pan - closedhand
 * SVG file: PanClosedhand--1091-6753.svg
 */
export const PanClosedhand: React.FC<PanClosedhandProps> = ({ className }) => {
  return <IconSvg className={`panclosedhand ${className || ''}`} />;
};
