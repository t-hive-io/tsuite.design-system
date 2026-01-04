import React from 'react';
import './Statescheduled.css';
import IconSvg from '../assets/icons/Statescheduled--1289-8309.svg?react';

export interface StatescheduledProps {
  className?: string;
}

/**
 * Statescheduled
 *
 * Original name: State=Scheduled
 * SVG file: Statescheduled--1289-8309.svg
 */
export const Statescheduled: React.FC<StatescheduledProps> = ({
  className,
}) => {
  return <IconSvg className={`statescheduled ${className || ''}`} />;
};
