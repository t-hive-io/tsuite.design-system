import React from 'react';
import './Typenumberstateenabled.css';
import IconSvg from '../assets/icons/Typenumberstateenabled--1728-8360.svg?react';

export interface TypenumberstateenabledProps {
  className?: string;
}

/**
 * Typenumberstateenabled
 *
 * Original name: Type=number, State=Enabled
 * SVG file: Typenumberstateenabled--1728-8360.svg
 */
export const Typenumberstateenabled: React.FC<TypenumberstateenabledProps> = ({
  className,
}) => {
  return <IconSvg className={`typenumberstateenabled ${className || ''}`} />;
};
