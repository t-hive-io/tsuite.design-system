import React from 'react';
import './Floorplanuploadcard.css';
import IconSvg from '../assets/icons/Floorplanuploadcard--1286-8274.svg?react';

export interface FloorplanuploadcardProps {
  className?: string;
}

/**
 * Floorplanuploadcard
 *
 * Original name: Floorplan upload card
 * SVG file: Floorplanuploadcard--1286-8274.svg
 */
export const Floorplanuploadcard: React.FC<FloorplanuploadcardProps> = ({
  className,
}) => {
  return <IconSvg className={`floorplanuploadcard ${className || ''}`} />;
};
