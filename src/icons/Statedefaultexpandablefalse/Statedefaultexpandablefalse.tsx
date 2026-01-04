import React from 'react';
import './Statedefaultexpandablefalse.css';
import IconSvg from '../assets/icons/Statedefaultexpandablefalse--1081-6442.svg?react';

export interface StatedefaultexpandablefalseProps {
  className?: string;
}

/**
 * Statedefaultexpandablefalse
 *
 * Original name: State=Default, Expandable=False
 * SVG file: Statedefaultexpandablefalse--1081-6442.svg
 */
export const Statedefaultexpandablefalse: React.FC<
  StatedefaultexpandablefalseProps
> = ({ className }) => {
  return (
    <IconSvg className={`statedefaultexpandablefalse ${className || ''}`} />
  );
};
