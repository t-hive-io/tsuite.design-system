import React from 'react';
import './TopbarProfile.css';
import IconSvg from '../assets/icons/TopbarProfile--1031-9640.svg?react';

export interface TopbarProfileProps {
  className?: string;
}

/**
 * TopbarProfile
 *
 * Original name: Top bar - profile
 * SVG file: TopbarProfile--1031-9640.svg
 */
export const TopbarProfile: React.FC<TopbarProfileProps> = ({ className }) => {
  return <IconSvg className={`topbarprofile ${className || ''}`} />;
};
