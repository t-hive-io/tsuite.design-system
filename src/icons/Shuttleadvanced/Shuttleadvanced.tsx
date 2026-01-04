import React from 'react';
import './Shuttleadvanced.css';
import IconSvg from '../assets/icons/Shuttleadvanced--5341-20537.svg?react';

export interface ShuttleadvancedProps {
  className?: string;
}

/**
 * Shuttleadvanced
 *
 * Original name: Shuttle advanced
 * SVG file: Shuttleadvanced--5341-20537.svg
 */
export const Shuttleadvanced: React.FC<ShuttleadvancedProps> = ({
  className,
}) => {
  return <IconSvg className={`shuttleadvanced ${className || ''}`} />;
};
