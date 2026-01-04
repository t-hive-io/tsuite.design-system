import React from 'react';
import './Typevalunitstateenabled.css';
import IconSvg from '../assets/icons/Typevalunitstateenabled--1728-8339.svg?react';

export interface TypevalunitstateenabledProps {
  className?: string;
}

/**
 * Typevalunitstateenabled
 *
 * Original name: Type=val + unit, State=Enabled
 * SVG file: Typevalunitstateenabled--1728-8339.svg
 */
export const Typevalunitstateenabled: React.FC<
  TypevalunitstateenabledProps
> = ({ className }) => {
  return <IconSvg className={`typevalunitstateenabled ${className || ''}`} />;
};
