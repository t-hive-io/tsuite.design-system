import React from 'react';
import './Typeoutlinediconleftstatepressed.css';
import IconSvg from '../assets/icons/Typeoutlinediconleftstatepressed--3316-106159.svg?react';

export interface TypeoutlinediconleftstatepressedProps {
  className?: string;
}

/**
 * Typeoutlinediconleftstatepressed
 *
 * Original name: Type=Outlined, Icon=Left, State=Pressed
 * SVG file: Typeoutlinediconleftstatepressed--3316-106159.svg
 */
export const Typeoutlinediconleftstatepressed: React.FC<
  TypeoutlinediconleftstatepressedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeoutlinediconleftstatepressed ${className || ''}`}
    />
  );
};
