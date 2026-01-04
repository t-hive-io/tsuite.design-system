import React from 'react';
import './Typeprimaryiconleftstatedisabled.css';
import IconSvg from '../assets/icons/Typeprimaryiconleftstatedisabled--1551-9677.svg?react';

export interface TypeprimaryiconleftstatedisabledProps {
  className?: string;
}

/**
 * Typeprimaryiconleftstatedisabled
 *
 * Original name: Type=Primary, Icon=Left, State=Disabled
 * SVG file: Typeprimaryiconleftstatedisabled--1551-9677.svg
 */
export const Typeprimaryiconleftstatedisabled: React.FC<
  TypeprimaryiconleftstatedisabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeprimaryiconleftstatedisabled ${className || ''}`}
    />
  );
};
