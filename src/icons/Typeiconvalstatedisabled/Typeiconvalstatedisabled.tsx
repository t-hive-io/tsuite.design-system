import React from 'react';
import './Typeiconvalstatedisabled.css';
import IconSvg from '../assets/icons/Typeiconvalstatedisabled--3551-41703.svg?react';

export interface TypeiconvalstatedisabledProps {
  className?: string;
}

/**
 * Typeiconvalstatedisabled
 *
 * Original name: Type=icon + val, State=Disabled
 * SVG file: Typeiconvalstatedisabled--3551-41703.svg
 */
export const Typeiconvalstatedisabled: React.FC<
  TypeiconvalstatedisabledProps
> = ({ className }) => {
  return <IconSvg className={`typeiconvalstatedisabled ${className || ''}`} />;
};
