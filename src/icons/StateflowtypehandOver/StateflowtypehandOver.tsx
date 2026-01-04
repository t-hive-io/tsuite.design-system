import React from 'react';
import './StateflowtypehandOver.css';
import IconSvg from '../assets/icons/StateflowtypehandOver--3945-32753.svg?react';

export interface StateflowtypehandOverProps {
  className?: string;
}

/**
 * StateflowtypehandOver
 *
 * Original name: State=Flow, Type=Hand-over
 * SVG file: StateflowtypehandOver--3945-32753.svg
 */
export const StateflowtypehandOver: React.FC<StateflowtypehandOverProps> = ({
  className,
}) => {
  return <IconSvg className={`stateflowtypehandover ${className || ''}`} />;
};
