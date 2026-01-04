import React from 'react';
import './Labelsizeregular.css';
import IconSvg from '../assets/icons/Labelsizeregular--1125-9808.svg?react';

export interface LabelsizeregularProps {
  className?: string;
}

/**
 * Labelsizeregular
 *
 * Original name: Label size=Regular
 * SVG file: Labelsizeregular--1125-9808.svg
 */
export const Labelsizeregular: React.FC<LabelsizeregularProps> = ({
  className,
}) => {
  return <IconSvg className={`labelsizeregular ${className || ''}`} />;
};
