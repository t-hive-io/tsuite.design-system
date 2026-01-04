import React from 'react';
import './Selectedtrue2ndleveltruehovertruehidefalse.css';
import IconSvg from '../assets/icons/Selectedtrue2ndleveltruehovertruehidefalse--1522-9685.svg?react';

export interface Selectedtrue2ndleveltruehovertruehidefalseProps {
  className?: string;
}

/**
 * Selectedtrue2ndleveltruehovertruehidefalse
 *
 * Original name: Selected=True, 2nd level=True, Hover=True, Hide=False
 * SVG file: Selectedtrue2ndleveltruehovertruehidefalse--1522-9685.svg
 */
export const Selectedtrue2ndleveltruehovertruehidefalse: React.FC<
  Selectedtrue2ndleveltruehovertruehidefalseProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`selectedtrue2ndleveltruehovertruehidefalse ${
        className || ''
      }`}
    />
  );
};
