import React from 'react';
import './Stateflowtypeprocess.css';
import IconSvg from '../assets/icons/Stateflowtypeprocess--2132-8889.svg?react';

export interface StateflowtypeprocessProps {
  className?: string;
}

/**
 * Stateflowtypeprocess
 *
 * Original name: State=Flow, Type=Process
 * SVG file: Stateflowtypeprocess--2132-8889.svg
 */
export const Stateflowtypeprocess: React.FC<StateflowtypeprocessProps> = ({
  className,
}) => {
  return <IconSvg className={`stateflowtypeprocess ${className || ''}`} />;
};
