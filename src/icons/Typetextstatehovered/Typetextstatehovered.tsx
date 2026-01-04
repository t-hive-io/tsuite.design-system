import React from 'react';
import './Typetextstatehovered.css';
import IconSvg from '../assets/icons/Typetextstatehovered--1728-8438.svg?react';

export interface TypetextstatehoveredProps {
  className?: string;
}

/**
 * Typetextstatehovered
 *
 * Original name: Type=text, State=Hovered
 * SVG file: Typetextstatehovered--1728-8438.svg
 */
export const Typetextstatehovered: React.FC<TypetextstatehoveredProps> = ({
  className,
}) => {
  return <IconSvg className={`typetextstatehovered ${className || ''}`} />;
};
