import React from 'react';
import './State1.css';
import IconSvg from '../assets/icons/State1--5246-36964.svg?react';

export interface State1Props {
  className?: string;
}

/**
 * State1
 *
 * Original name: State=+1
 * SVG file: State1--5246-36964.svg
 */
export const State1: React.FC<State1Props> = ({ className }) => {
  return <IconSvg className={`state1 ${className || ''}`} />;
};
