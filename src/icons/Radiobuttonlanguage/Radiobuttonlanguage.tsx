import React from 'react';
import './Radiobuttonlanguage.css';
import IconSvg from '../assets/icons/Radiobuttonlanguage--3929-109639.svg?react';

export interface RadiobuttonlanguageProps {
  className?: string;
}

/**
 * Radiobuttonlanguage
 *
 * Original name: Radio button language
 * SVG file: Radiobuttonlanguage--3929-109639.svg
 */
export const Radiobuttonlanguage: React.FC<RadiobuttonlanguageProps> = ({
  className,
}) => {
  return <IconSvg className={`radiobuttonlanguage ${className || ''}`} />;
};
