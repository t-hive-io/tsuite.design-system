import React from 'react';
import './Typeprimaryiconleftstatefocused.css';
import IconSvg from '../assets/icons/Typeprimaryiconleftstatefocused--3316-106133.svg?react';

export interface TypeprimaryiconleftstatefocusedProps {
  className?: string;
}

/**
 * Typeprimaryiconleftstatefocused
 *
 * Original name: Type=Primary, Icon=Left, State=Focused
 * SVG file: Typeprimaryiconleftstatefocused--3316-106133.svg
 */
export const Typeprimaryiconleftstatefocused: React.FC<
  TypeprimaryiconleftstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg className={`typeprimaryiconleftstatefocused ${className || ''}`} />
  );
};
