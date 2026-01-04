import React from 'react';
import './Statecommission.css';
import IconSvg from '../assets/icons/Statecommission--2687-144.svg?react';

export interface StatecommissionProps {
  className?: string;
}

/**
 * Statecommission
 *
 * Original name: State=Commission
 * SVG file: Statecommission--2687-144.svg
 */
export const Statecommission: React.FC<StatecommissionProps> = ({
  className,
}) => {
  return <IconSvg className={`statecommission ${className || ''}`} />;
};
