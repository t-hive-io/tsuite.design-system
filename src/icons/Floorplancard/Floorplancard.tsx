import React from 'react';
import './Floorplancard.css';
import IconSvg from '../assets/icons/Floorplancard--1635-8316.svg?react';

export interface FloorplancardProps {
  className?: string;
}

/**
 * Floorplancard
 *
 * Original name: floorplan card
 * SVG file: Floorplancard--1635-8316.svg
 */
export const Floorplancard: React.FC<FloorplancardProps> = ({ className }) => {
  return <IconSvg className={`floorplancard ${className || ''}`} />;
};
