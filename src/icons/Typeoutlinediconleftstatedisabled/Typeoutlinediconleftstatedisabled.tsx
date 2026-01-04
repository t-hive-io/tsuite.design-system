import React from 'react';
import './Typeoutlinediconleftstatedisabled.css';
import IconSvg from '../assets/icons/Typeoutlinediconleftstatedisabled--1550-9755.svg?react';

export interface TypeoutlinediconleftstatedisabledProps {
  className?: string;
}

/**
 * Typeoutlinediconleftstatedisabled
 *
 * Original name: Type=Outlined, Icon=Left, State=Disabled
 * SVG file: Typeoutlinediconleftstatedisabled--1550-9755.svg
 */
export const Typeoutlinediconleftstatedisabled: React.FC<
  TypeoutlinediconleftstatedisabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeoutlinediconleftstatedisabled ${className || ''}`}
    />
  );
};
