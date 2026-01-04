import React from 'react';
import './Labelsizesmall.css';
import IconSvg from '../assets/icons/Labelsizesmall--1125-8920.svg?react';

export interface LabelsizesmallProps {
  className?: string;
}

/**
 * Labelsizesmall
 *
 * Original name: Label size=Small
 * SVG file: Labelsizesmall--1125-8920.svg
 */
export const Labelsizesmall: React.FC<LabelsizesmallProps> = ({
  className,
}) => {
  return <IconSvg className={`labelsizesmall ${className || ''}`} />;
};
