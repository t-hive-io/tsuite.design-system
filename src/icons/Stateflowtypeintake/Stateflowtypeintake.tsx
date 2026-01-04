import React from 'react';
import './Stateflowtypeintake.css';
import IconSvg from '../assets/icons/Stateflowtypeintake--2133-10012.svg?react';

export interface StateflowtypeintakeProps {
  className?: string;
}

/**
 * Stateflowtypeintake
 *
 * Original name: State=Flow, Type=Intake
 * SVG file: Stateflowtypeintake--2133-10012.svg
 */
export const Stateflowtypeintake: React.FC<StateflowtypeintakeProps> = ({
  className,
}) => {
  return <IconSvg className={`stateflowtypeintake ${className || ''}`} />;
};
