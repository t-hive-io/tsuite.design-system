import React from 'react';
import './Statuscompletestatehover.css';
import IconSvg from '../assets/icons/Statuscompletestatehover--1296-8113.svg?react';

export interface StatuscompletestatehoverProps {
  className?: string;
}

/**
 * Statuscompletestatehover
 *
 * Original name: Status=Complete, State=Hover
 * SVG file: Statuscompletestatehover--1296-8113.svg
 */
export const Statuscompletestatehover: React.FC<
  StatuscompletestatehoverProps
> = ({ className }) => {
  return <IconSvg className={`statuscompletestatehover ${className || ''}`} />;
};
