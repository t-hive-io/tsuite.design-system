import React from 'react';
import './Stateactiveexpandablefalse.css';
import IconSvg from '../assets/icons/Stateactiveexpandablefalse--1081-6452.svg?react';

export interface StateactiveexpandablefalseProps {
  className?: string;
}

/**
 * Stateactiveexpandablefalse
 *
 * Original name: State=Active, Expandable=False
 * SVG file: Stateactiveexpandablefalse--1081-6452.svg
 */
export const Stateactiveexpandablefalse: React.FC<
  StateactiveexpandablefalseProps
> = ({ className }) => {
  return (
    <IconSvg className={`stateactiveexpandablefalse ${className || ''}`} />
  );
};
