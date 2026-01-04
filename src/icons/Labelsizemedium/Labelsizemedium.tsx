import React from 'react';
import './Labelsizemedium.css';
import IconSvg from '../assets/icons/Labelsizemedium--1635-8251.svg?react';

export interface LabelsizemediumProps {
  className?: string;
}

/**
 * Labelsizemedium
 *
 * Original name: Label size=Medium
 * SVG file: Labelsizemedium--1635-8251.svg
 */
export const Labelsizemedium: React.FC<LabelsizemediumProps> = ({
  className,
}) => {
  return <IconSvg className={`labelsizemedium ${className || ''}`} />;
};
