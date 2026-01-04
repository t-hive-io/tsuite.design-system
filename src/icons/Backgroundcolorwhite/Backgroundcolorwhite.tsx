import React from 'react';
import './Backgroundcolorwhite.css';
import IconSvg from '../assets/icons/Backgroundcolorwhite--3090-9182.svg?react';

export interface BackgroundcolorwhiteProps {
  className?: string;
}

/**
 * Backgroundcolorwhite
 *
 * Original name: Background Color=white
 * SVG file: Backgroundcolorwhite--3090-9182.svg
 */
export const Backgroundcolorwhite: React.FC<BackgroundcolorwhiteProps> = ({
  className,
}) => {
  return <IconSvg className={`backgroundcolorwhite ${className || ''}`} />;
};
