import React from 'react';
import './StatedefaulttypehandOver.css';
import IconSvg from '../assets/icons/StatedefaulttypehandOver--3945-32726.svg?react';

export interface StatedefaulttypehandOverProps {
  className?: string;
}

/**
 * StatedefaulttypehandOver
 *
 * Original name: State=Default, Type=Hand-over
 * SVG file: StatedefaulttypehandOver--3945-32726.svg
 */
export const StatedefaulttypehandOver: React.FC<
  StatedefaulttypehandOverProps
> = ({ className }) => {
  return <IconSvg className={`statedefaulttypehandover ${className || ''}`} />;
};
