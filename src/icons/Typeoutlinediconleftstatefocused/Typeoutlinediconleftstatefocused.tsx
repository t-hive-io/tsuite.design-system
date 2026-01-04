import React from 'react';
import './Typeoutlinediconleftstatefocused.css';
import IconSvg from '../assets/icons/Typeoutlinediconleftstatefocused--3316-106149.svg?react';

export interface TypeoutlinediconleftstatefocusedProps {
  className?: string;
}

/**
 * Typeoutlinediconleftstatefocused
 *
 * Original name: Type=Outlined, Icon=Left, State=Focused
 * SVG file: Typeoutlinediconleftstatefocused--3316-106149.svg
 */
export const Typeoutlinediconleftstatefocused: React.FC<
  TypeoutlinediconleftstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeoutlinediconleftstatefocused ${className || ''}`}
    />
  );
};
