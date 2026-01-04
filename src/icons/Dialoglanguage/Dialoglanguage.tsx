import React from 'react';
import './Dialoglanguage.css';
import IconSvg from '../assets/icons/Dialoglanguage--5209-562.svg?react';

export interface DialoglanguageProps {
  className?: string;
}

/**
 * Dialoglanguage
 *
 * Original name: Dialog: Language
 * SVG file: Dialoglanguage--5209-562.svg
 */
export const Dialoglanguage: React.FC<DialoglanguageProps> = ({
  className,
}) => {
  return <IconSvg className={`dialoglanguage ${className || ''}`} />;
};
