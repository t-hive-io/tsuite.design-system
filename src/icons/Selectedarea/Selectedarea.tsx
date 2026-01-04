import React from 'react';
import './Selectedarea.css';
import IconSvg from '../assets/icons/Selectedarea--3798-55300.svg?react';

export interface SelectedareaProps {
  className?: string;
}

/**
 * Selectedarea
 *
 * Original name: Selected area
 * SVG file: Selectedarea--3798-55300.svg
 */
export const Selectedarea: React.FC<SelectedareaProps> = ({ className }) => {
  return <IconSvg className={`selectedarea ${className || ''}`} />;
};
