import React from 'react';
import './Statesenabledbadgevisiblefalse.css';
import IconSvg from '../assets/icons/Statesenabledbadgevisiblefalse--1257-8855.svg?react';

export interface StatesenabledbadgevisiblefalseProps {
  className?: string;
}

/**
 * Statesenabledbadgevisiblefalse
 *
 * Original name: States=Enabled, Badge visible=False
 * SVG file: Statesenabledbadgevisiblefalse--1257-8855.svg
 */
export const Statesenabledbadgevisiblefalse: React.FC<
  StatesenabledbadgevisiblefalseProps
> = ({ className }) => {
  return (
    <IconSvg className={`statesenabledbadgevisiblefalse ${className || ''}`} />
  );
};
