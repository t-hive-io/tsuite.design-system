import React from 'react';
import './Stateflowtypeobstical.css';
import IconSvg from '../assets/icons/Stateflowtypeobstical--2151-8426.svg?react';

export interface StateflowtypeobsticalProps {
  className?: string;
}

/**
 * Stateflowtypeobstical
 *
 * Original name: State=Flow, Type=Obstical
 * SVG file: Stateflowtypeobstical--2151-8426.svg
 */
export const Stateflowtypeobstical: React.FC<StateflowtypeobsticalProps> = ({
  className,
}) => {
  return <IconSvg className={`stateflowtypeobstical ${className || ''}`} />;
};
