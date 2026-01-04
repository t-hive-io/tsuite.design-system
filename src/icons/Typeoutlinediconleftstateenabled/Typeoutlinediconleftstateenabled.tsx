import React from 'react';
import './Typeoutlinediconleftstateenabled.css';
import IconSvg from '../assets/icons/Typeoutlinediconleftstateenabled--1245-8198.svg?react';

export interface TypeoutlinediconleftstateenabledProps {
  className?: string;
}

/**
 * Typeoutlinediconleftstateenabled
 *
 * Original name: Type=Outlined, Icon=Left, State=Enabled
 * SVG file: Typeoutlinediconleftstateenabled--1245-8198.svg
 */
export const Typeoutlinediconleftstateenabled: React.FC<
  TypeoutlinediconleftstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeoutlinediconleftstateenabled ${className || ''}`}
    />
  );
};
