import React from 'react';
import './Stateenabledtypeicontext.css';
import IconSvg from '../assets/icons/Stateenabledtypeicontext--1688-8237.svg?react';

export interface StateenabledtypeicontextProps {
  className?: string;
}

/**
 * Stateenabledtypeicontext
 *
 * Original name: State=Enabled, Type=Icon + text
 * SVG file: Stateenabledtypeicontext--1688-8237.svg
 */
export const Stateenabledtypeicontext: React.FC<
  StateenabledtypeicontextProps
> = ({ className }) => {
  return <IconSvg className={`stateenabledtypeicontext ${className || ''}`} />;
};
