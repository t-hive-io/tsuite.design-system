import React from 'react';
import './Runsimulationcards.css';
import IconSvg from '../assets/icons/Runsimulationcards--3832-36758.svg?react';

export interface RunsimulationcardsProps {
  className?: string;
}

/**
 * Runsimulationcards
 *
 * Original name: Run simulation cards
 * SVG file: Runsimulationcards--3832-36758.svg
 */
export const Runsimulationcards: React.FC<RunsimulationcardsProps> = ({
  className,
}) => {
  return <IconSvg className={`runsimulationcards ${className || ''}`} />;
};
