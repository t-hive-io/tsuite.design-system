import React from 'react';
import './Typeprimaryiconleftstatepressed.css';
import IconSvg from '../assets/icons/Typeprimaryiconleftstatepressed--3316-106139.svg?react';

export interface TypeprimaryiconleftstatepressedProps {
  className?: string;
}

/**
 * Typeprimaryiconleftstatepressed
 *
 * Original name: Type=Primary, Icon=Left, State=Pressed
 * SVG file: Typeprimaryiconleftstatepressed--3316-106139.svg
 */
export const Typeprimaryiconleftstatepressed: React.FC<
  TypeprimaryiconleftstatepressedProps
> = ({ className }) => {
  return (
    <IconSvg className={`typeprimaryiconleftstatepressed ${className || ''}`} />
  );
};
