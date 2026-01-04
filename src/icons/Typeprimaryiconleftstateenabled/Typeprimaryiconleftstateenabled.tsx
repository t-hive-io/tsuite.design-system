import React from 'react';
import './Typeprimaryiconleftstateenabled.css';
import IconSvg from '../assets/icons/Typeprimaryiconleftstateenabled--1550-9591.svg?react';

export interface TypeprimaryiconleftstateenabledProps {
  className?: string;
}

/**
 * Typeprimaryiconleftstateenabled
 *
 * Original name: Type=Primary, Icon=Left, State=Enabled
 * SVG file: Typeprimaryiconleftstateenabled--1550-9591.svg
 */
export const Typeprimaryiconleftstateenabled: React.FC<
  TypeprimaryiconleftstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg className={`typeprimaryiconleftstateenabled ${className || ''}`} />
  );
};
