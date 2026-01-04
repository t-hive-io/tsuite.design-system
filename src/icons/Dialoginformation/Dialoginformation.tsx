import React from 'react';
import './Dialoginformation.css';
import IconSvg from '../assets/icons/Dialoginformation--1304-9521.svg?react';

export interface DialoginformationProps {
  className?: string;
}

/**
 * Dialoginformation
 *
 * Original name: Dialog: Information
 * SVG file: Dialoginformation--1304-9521.svg
 */
export const Dialoginformation: React.FC<DialoginformationProps> = ({
  className,
}) => {
  return <IconSvg className={`dialoginformation ${className || ''}`} />;
};
