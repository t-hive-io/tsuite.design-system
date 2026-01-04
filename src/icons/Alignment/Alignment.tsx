import React from 'react';
import './Alignment.css';
import IconSvg from '../assets/icons/Alignment--3032-8148.svg?react';

export interface AlignmentProps {
  className?: string;
}

/**
 * Alignment
 *
 * Original name: Alignment
 * SVG file: Alignment--3032-8148.svg
 */
export const Alignment: React.FC<AlignmentProps> = ({ className }) => {
  return <IconSvg className={`alignment ${className || ''}`} />;
};
