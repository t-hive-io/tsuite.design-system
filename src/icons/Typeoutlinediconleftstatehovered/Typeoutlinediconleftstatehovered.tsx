import React from 'react';
import './Typeoutlinediconleftstatehovered.css';
import IconSvg from '../assets/icons/Typeoutlinediconleftstatehovered--1551-9632.svg?react';

export interface TypeoutlinediconleftstatehoveredProps {
  className?: string;
}

/**
 * Typeoutlinediconleftstatehovered
 *
 * Original name: Type=Outlined, Icon=Left, State=Hovered
 * SVG file: Typeoutlinediconleftstatehovered--1551-9632.svg
 */
export const Typeoutlinediconleftstatehovered: React.FC<
  TypeoutlinediconleftstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeoutlinediconleftstatehovered ${className || ''}`}
    />
  );
};
