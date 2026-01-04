import React from 'react';
import './Selectedtrue2ndlevelfalsehovertruehidefalse.css';
import IconSvg from '../assets/icons/Selectedtrue2ndlevelfalsehovertruehidefalse--1522-9531.svg?react';

export interface Selectedtrue2ndlevelfalsehovertruehidefalseProps {
  className?: string;
}

/**
 * Selectedtrue2ndlevelfalsehovertruehidefalse
 *
 * Original name: Selected=True, 2nd level=False, Hover=True, Hide=False
 * SVG file: Selectedtrue2ndlevelfalsehovertruehidefalse--1522-9531.svg
 */
export const Selectedtrue2ndlevelfalsehovertruehidefalse: React.FC<
  Selectedtrue2ndlevelfalsehovertruehidefalseProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`selectedtrue2ndlevelfalsehovertruehidefalse ${
        className || ''
      }`}
    />
  );
};
