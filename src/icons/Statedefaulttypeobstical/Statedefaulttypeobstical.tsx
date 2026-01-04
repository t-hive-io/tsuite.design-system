import React from 'react';
import './Statedefaulttypeobstical.css';
import IconSvg from '../assets/icons/Statedefaulttypeobstical--2151-8413.svg?react';

export interface StatedefaulttypeobsticalProps {
  className?: string;
}

/**
 * Statedefaulttypeobstical
 *
 * Original name: State=Default, Type=Obstical
 * SVG file: Statedefaulttypeobstical--2151-8413.svg
 */
export const Statedefaulttypeobstical: React.FC<
  StatedefaulttypeobsticalProps
> = ({ className }) => {
  return <IconSvg className={`statedefaulttypeobstical ${className || ''}`} />;
};
