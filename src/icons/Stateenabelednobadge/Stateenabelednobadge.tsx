import React from 'react';
import './Stateenabelednobadge.css';
import IconSvg from '../assets/icons/Stateenabelednobadge--4875-38398.svg?react';

export interface StateenabelednobadgeProps {
  className?: string;
}

/**
 * Stateenabelednobadge
 *
 * Original name: State=Enabeled no badge
 * SVG file: Stateenabelednobadge--4875-38398.svg
 */
export const Stateenabelednobadge: React.FC<StateenabelednobadgeProps> = ({
  className,
}) => {
  return <IconSvg className={`stateenabelednobadge ${className || ''}`} />;
};
