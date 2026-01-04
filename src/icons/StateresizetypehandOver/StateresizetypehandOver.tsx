import React from 'react';
import './StateresizetypehandOver.css';
import IconSvg from '../assets/icons/StateresizetypehandOver--3945-32791.svg?react';

export interface StateresizetypehandOverProps {
  className?: string;
}

/**
 * StateresizetypehandOver
 *
 * Original name: State=Resize, Type=Hand-over
 * SVG file: StateresizetypehandOver--3945-32791.svg
 */
export const StateresizetypehandOver: React.FC<
  StateresizetypehandOverProps
> = ({ className }) => {
  return <IconSvg className={`stateresizetypehandover ${className || ''}`} />;
};
