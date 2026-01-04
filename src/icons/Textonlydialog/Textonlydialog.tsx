import React from 'react';
import './Textonlydialog.css';
import IconSvg from '../assets/icons/Textonlydialog--3097-8722.svg?react';

export interface TextonlydialogProps {
  className?: string;
}

/**
 * Textonlydialog
 *
 * Original name: Text only dialog
 * SVG file: Textonlydialog--3097-8722.svg
 */
export const Textonlydialog: React.FC<TextonlydialogProps> = ({
  className,
}) => {
  return <IconSvg className={`textonlydialog ${className || ''}`} />;
};
