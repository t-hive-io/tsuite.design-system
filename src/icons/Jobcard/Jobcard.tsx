import React from 'react';
import './Jobcard.css';
import IconSvg from '../assets/icons/Jobcard--3023-8554.svg?react';

export interface JobcardProps {
  className?: string;
}

/**
 * Jobcard
 *
 * Original name: Job card
 * SVG file: Jobcard--3023-8554.svg
 */
export const Jobcard: React.FC<JobcardProps> = ({ className }) => {
  return <IconSvg className={`jobcard ${className || ''}`} />;
};
