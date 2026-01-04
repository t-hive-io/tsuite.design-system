import React from 'react';
import './Typevalunitstatedisabled.css';
import IconSvg from '../assets/icons/Typevalunitstatedisabled--3551-41679.svg?react';

export interface TypevalunitstatedisabledProps {
  className?: string;
}

/**
 * Typevalunitstatedisabled
 *
 * Original name: Type=val + unit, State=Disabled
 * SVG file: Typevalunitstatedisabled--3551-41679.svg
 */
export const Typevalunitstatedisabled: React.FC<
  TypevalunitstatedisabledProps
> = ({ className }) => {
  return <IconSvg className={`typevalunitstatedisabled ${className || ''}`} />;
};
