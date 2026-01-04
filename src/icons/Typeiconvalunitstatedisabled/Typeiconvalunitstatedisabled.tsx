import React from 'react';
import './Typeiconvalunitstatedisabled.css';
import IconSvg from '../assets/icons/Typeiconvalunitstatedisabled--3551-41684.svg?react';

export interface TypeiconvalunitstatedisabledProps {
  className?: string;
}

/**
 * Typeiconvalunitstatedisabled
 *
 * Original name: Type=icon + val + unit, State=Disabled
 * SVG file: Typeiconvalunitstatedisabled--3551-41684.svg
 */
export const Typeiconvalunitstatedisabled: React.FC<
  TypeiconvalunitstatedisabledProps
> = ({ className }) => {
  return (
    <IconSvg className={`typeiconvalunitstatedisabled ${className || ''}`} />
  );
};
