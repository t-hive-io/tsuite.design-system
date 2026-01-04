import React from 'react';
import './Errorfeedback.css';
import IconSvg from '../assets/icons/Errorfeedback--3128-8512.svg?react';

export interface ErrorfeedbackProps {
  className?: string;
}

/**
 * Errorfeedback
 *
 * Original name: Error feedback
 * SVG file: Errorfeedback--3128-8512.svg
 */
export const Errorfeedback: React.FC<ErrorfeedbackProps> = ({ className }) => {
  return <IconSvg className={`errorfeedback ${className || ''}`} />;
};
