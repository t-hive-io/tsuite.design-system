import React from 'react';
import './Typevaliconstatedisabled.css';
import IconSvg from '../assets/icons/Typevaliconstatedisabled--3551-41692.svg?react';

export interface TypevaliconstatedisabledProps {
  className?: string;
}

/**
 * Typevaliconstatedisabled
 *
 * Original name: Type=val + icon, State=Disabled
 * SVG file: Typevaliconstatedisabled--3551-41692.svg
 */
export const Typevaliconstatedisabled: React.FC<
  TypevaliconstatedisabledProps
> = ({ className }) => {
  return <IconSvg className={`typevaliconstatedisabled ${className || ''}`} />;
};
