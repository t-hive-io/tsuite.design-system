import React from 'react';
import './Areasections.css';
import IconSvg from '../assets/icons/Areasections--Stationposition.svg?react';

export interface AreasectionsProps {
  className?: string;
}

/**
 * Areasections
 *
 * Original name: Area sections/Station position
 * SVG file: Areasections--Stationposition.svg
 */
export const Areasections: React.FC<AreasectionsProps> = ({ className }) => {
  return <IconSvg className={`areasections ${className || ''}`} />;
};
