import React from 'react';
import './Statestestbadgevisibleredwarning.css';
import IconSvg from '../assets/icons/Statestestbadgevisibleredwarning--4731-40951.svg?react';

export interface StatestestbadgevisibleredwarningProps {
  className?: string;
}

/**
 * Statestestbadgevisibleredwarning
 *
 * Original name: States=Test, Badge visible=Red warning
 * SVG file: Statestestbadgevisibleredwarning--4731-40951.svg
 */
export const Statestestbadgevisibleredwarning: React.FC<
  StatestestbadgevisibleredwarningProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`statestestbadgevisibleredwarning ${className || ''}`}
    />
  );
};
