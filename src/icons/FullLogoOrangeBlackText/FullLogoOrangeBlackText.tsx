import React from 'react';
import './FullLogoOrangeBlackText.css';
import IconSvg from '../assets/icons/FullLogoOrangeBlackText--322-27.svg?react';

export interface FullLogoOrangeBlackTextProps {
  className?: string;
}

/**
 * FullLogoOrangeBlackText
 *
 * Original name: Full-logo-orange-black-text
 * SVG file: FullLogoOrangeBlackText--322-27.svg
 */
export const FullLogoOrangeBlackText: React.FC<
  FullLogoOrangeBlackTextProps
> = ({ className }) => {
  return <IconSvg className={`fulllogoorangeblacktext ${className || ''}`} />;
};
