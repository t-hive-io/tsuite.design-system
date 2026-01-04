import React from 'react';
import './Labelsizeimagesmall.css';
import IconSvg from '../assets/icons/Labelsizeimagesmall--1551-9378.svg?react';

export interface LabelsizeimagesmallProps {
  className?: string;
}

/**
 * Labelsizeimagesmall
 *
 * Original name: Label size=Image + Small
 * SVG file: Labelsizeimagesmall--1551-9378.svg
 */
export const Labelsizeimagesmall: React.FC<LabelsizeimagesmallProps> = ({
  className,
}) => {
  return <IconSvg className={`labelsizeimagesmall ${className || ''}`} />;
};
