import React from 'react';
import './Statesenabledbadgevisibletrue.css';
import IconSvg from '../assets/icons/Statesenabledbadgevisibletrue--1257-8857.svg?react';

export interface StatesenabledbadgevisibletrueProps {
  className?: string;
}

/**
 * Statesenabledbadgevisibletrue
 *
 * Original name: States=Enabled, Badge visible=True
 * SVG file: Statesenabledbadgevisibletrue--1257-8857.svg
 */
export const Statesenabledbadgevisibletrue: React.FC<
  StatesenabledbadgevisibletrueProps
> = ({ className }) => {
  return (
    <IconSvg className={`statesenabledbadgevisibletrue ${className || ''}`} />
  );
};
