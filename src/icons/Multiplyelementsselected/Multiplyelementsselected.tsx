import React from 'react';
import './Multiplyelementsselected.css';
import IconSvg from '../assets/icons/Multiplyelementsselected--3798-55349.svg?react';

export interface MultiplyelementsselectedProps {
  className?: string;
}

/**
 * Multiplyelementsselected
 *
 * Original name: Multiply elements selected
 * SVG file: Multiplyelementsselected--3798-55349.svg
 */
export const Multiplyelementsselected: React.FC<
  MultiplyelementsselectedProps
> = ({ className }) => {
  return <IconSvg className={`multiplyelementsselected ${className || ''}`} />;
};
