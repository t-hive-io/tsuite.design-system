import React from 'react';
import './Labelbuttons.css';
import IconSvg from '../assets/icons/Labelbuttons--1506-9132.svg?react';

export interface LabelbuttonsProps {
  className?: string;
}

/**
 * Labelbuttons
 *
 * Original name: Label + buttons
 * SVG file: Labelbuttons--1506-9132.svg
 */
export const Labelbuttons: React.FC<LabelbuttonsProps> = ({ className }) => {
  return <IconSvg className={`labelbuttons ${className || ''}`} />;
};
