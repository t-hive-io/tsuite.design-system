import React from 'react';
import './Typeprimaryiconleftstatehovered.css';
import IconSvg from '../assets/icons/Typeprimaryiconleftstatehovered--1551-9662.svg?react';

export interface TypeprimaryiconleftstatehoveredProps {
  className?: string;
}

/**
 * Typeprimaryiconleftstatehovered
 *
 * Original name: Type=Primary, Icon=Left, State=Hovered
 * SVG file: Typeprimaryiconleftstatehovered--1551-9662.svg
 */
export const Typeprimaryiconleftstatehovered: React.FC<
  TypeprimaryiconleftstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg className={`typeprimaryiconleftstatehovered ${className || ''}`} />
  );
};
