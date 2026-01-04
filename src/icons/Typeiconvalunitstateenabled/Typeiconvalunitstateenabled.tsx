import React from 'react';
import './Typeiconvalunitstateenabled.css';
import IconSvg from '../assets/icons/Typeiconvalunitstateenabled--1728-8337.svg?react';

export interface TypeiconvalunitstateenabledProps {
  className?: string;
}

/**
 * Typeiconvalunitstateenabled
 *
 * Original name: Type=icon + val + unit, State=Enabled
 * SVG file: Typeiconvalunitstateenabled--1728-8337.svg
 */
export const Typeiconvalunitstateenabled: React.FC<
  TypeiconvalunitstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg className={`typeiconvalunitstateenabled ${className || ''}`} />
  );
};
