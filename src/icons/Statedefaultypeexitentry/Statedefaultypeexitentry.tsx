import React from 'react';
import './Statedefaultypeexitentry.css';
import IconSvg from '../assets/icons/Statedefaultypeexitentry--5302-32167.svg?react';

export interface StatedefaultypeexitentryProps {
  className?: string;
}

/**
 * Statedefaultypeexitentry
 *
 * Original name: State=Defaul, Type=Exit Entry
 * SVG file: Statedefaultypeexitentry--5302-32167.svg
 */
export const Statedefaultypeexitentry: React.FC<
  StatedefaultypeexitentryProps
> = ({ className }) => {
  return <IconSvg className={`statedefaultypeexitentry ${className || ''}`} />;
};
