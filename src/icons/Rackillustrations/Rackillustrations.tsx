import React from 'react';
import './Rackillustrations.css';
import IconSvg from '../assets/icons/Rackillustrations--Group173.svg?react';

export interface RackillustrationsProps {
  className?: string;
}

/**
 * Rackillustrations
 *
 * Original name: Rack illustrations/Group 173
 * SVG file: Rackillustrations--Group173.svg
 */
export const Rackillustrations: React.FC<RackillustrationsProps> = ({
  className,
}) => {
  return <IconSvg className={`rackillustrations ${className || ''}`} />;
};
