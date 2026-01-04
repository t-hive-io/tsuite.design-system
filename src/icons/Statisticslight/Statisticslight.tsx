import React from 'react';
import './Statisticslight.css';
import IconSvg from '../assets/icons/Statisticslight--3017-7624.svg?react';

export interface StatisticslightProps {
  className?: string;
}

/**
 * Statisticslight
 *
 * Original name: Statistics light
 * SVG file: Statisticslight--3017-7624.svg
 */
export const Statisticslight: React.FC<StatisticslightProps> = ({
  className,
}) => {
  return <IconSvg className={`statisticslight ${className || ''}`} />;
};
