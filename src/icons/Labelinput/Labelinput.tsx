import React from 'react';
import './Labelinput.css';
import IconSvg from '../assets/icons/Labelinput--1461-10362.svg?react';

export interface LabelinputProps {
  className?: string;
}

/**
 * Labelinput
 *
 * Original name: label + input
 * SVG file: Labelinput--1461-10362.svg
 */
export const Labelinput: React.FC<LabelinputProps> = ({ className }) => {
  return <IconSvg className={`labelinput ${className || ''}`} />;
};
