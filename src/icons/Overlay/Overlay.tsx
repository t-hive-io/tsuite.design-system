import React from 'react';
import './Overlay.css';
import IconSvg from '../assets/icons/Overlay--1297-9509.svg?react';

export interface OverlayProps {
  className?: string;
}

/**
 * Overlay
 *
 * Original name: Overlay
 * SVG file: Overlay--1297-9509.svg
 */
export const Overlay: React.FC<OverlayProps> = ({ className }) => {
  return <IconSvg className={`overlay ${className || ''}`} />;
};
