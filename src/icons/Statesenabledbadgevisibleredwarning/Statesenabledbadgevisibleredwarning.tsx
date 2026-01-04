import React from 'react';
import './Statesenabledbadgevisibleredwarning.css';
import IconSvg from '../assets/icons/Statesenabledbadgevisibleredwarning--4731-40962.svg?react';

export interface StatesenabledbadgevisibleredwarningProps {
  className?: string;
}

/**
 * Statesenabledbadgevisibleredwarning
 *
 * Original name: States=Enabled, Badge visible=Red warning
 * SVG file: Statesenabledbadgevisibleredwarning--4731-40962.svg
 */
export const Statesenabledbadgevisibleredwarning: React.FC<
  StatesenabledbadgevisibleredwarningProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`statesenabledbadgevisibleredwarning ${className || ''}`}
    />
  );
};
