import React from 'react';
import './Typerowswithtagselectedselected.css';
import IconSvg from '../assets/icons/Typerowswithtagselectedselected--3158-10505.svg?react';

export interface TyperowswithtagselectedselectedProps {
  className?: string;
}

/**
 * Typerowswithtagselectedselected
 *
 * Original name: Type=Rows with tag, Selected=Selected
 * SVG file: Typerowswithtagselectedselected--3158-10505.svg
 */
export const Typerowswithtagselectedselected: React.FC<
  TyperowswithtagselectedselectedProps
> = ({ className }) => {
  return (
    <IconSvg className={`typerowswithtagselectedselected ${className || ''}`} />
  );
};
