import React from 'react';
import './Typeiconvalstateenabled.css';
import IconSvg from '../assets/icons/Typeiconvalstateenabled--1728-8336.svg?react';

export interface TypeiconvalstateenabledProps {
  className?: string;
}

/**
 * Typeiconvalstateenabled
 *
 * Original name: Type=icon + val, State=Enabled
 * SVG file: Typeiconvalstateenabled--1728-8336.svg
 */
export const Typeiconvalstateenabled: React.FC<
  TypeiconvalstateenabledProps
> = ({ className }) => {
  return <IconSvg className={`typeiconvalstateenabled ${className || ''}`} />;
};
