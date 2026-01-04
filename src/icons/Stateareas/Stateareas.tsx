import React from 'react';
import './Stateareas.css';
import IconSvg from '../assets/icons/Stateareas--1081-6537.svg?react';

export interface StateareasProps {
  className?: string;
}

/**
 * Stateareas
 *
 * Original name: State=Areas
 * SVG file: Stateareas--1081-6537.svg
 */
export const Stateareas: React.FC<StateareasProps> = ({ className }) => {
  return <IconSvg className={`stateareas ${className || ''}`} />;
};
