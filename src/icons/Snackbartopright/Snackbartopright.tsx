import React from 'react';
import './Snackbartopright.css';
import IconSvg from '../assets/icons/Snackbartopright--3167-9364.svg?react';

export interface SnackbartoprightProps {
  className?: string;
}

/**
 * Snackbartopright
 *
 * Original name: Snackbar top right
 * SVG file: Snackbartopright--3167-9364.svg
 */
export const Snackbartopright: React.FC<SnackbartoprightProps> = ({
  className,
}) => {
  return <IconSvg className={`snackbartopright ${className || ''}`} />;
};
