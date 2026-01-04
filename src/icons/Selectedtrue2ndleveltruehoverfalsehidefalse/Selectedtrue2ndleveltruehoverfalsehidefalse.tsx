import React from 'react';
import './Selectedtrue2ndleveltruehoverfalsehidefalse.css';
import IconSvg from '../assets/icons/Selectedtrue2ndleveltruehoverfalsehidefalse--1522-9680.svg?react';

export interface Selectedtrue2ndleveltruehoverfalsehidefalseProps {
  className?: string;
}

/**
 * Selectedtrue2ndleveltruehoverfalsehidefalse
 *
 * Original name: Selected=True, 2nd level=True, Hover=False, Hide=False
 * SVG file: Selectedtrue2ndleveltruehoverfalsehidefalse--1522-9680.svg
 */
export const Selectedtrue2ndleveltruehoverfalsehidefalse: React.FC<
  Selectedtrue2ndleveltruehoverfalsehidefalseProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`selectedtrue2ndleveltruehoverfalsehidefalse ${
        className || ''
      }`}
    />
  );
};
