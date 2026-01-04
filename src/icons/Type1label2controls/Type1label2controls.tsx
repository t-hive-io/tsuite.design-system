import React from 'react';
import './Type1label2controls.css';
import IconSvg from '../assets/icons/Type1label2controls--1228-8691.svg?react';

export interface Type1label2controlsProps {
  className?: string;
}

/**
 * Type1label2controls
 *
 * Original name: Type=1 Label + 2 controls
 * SVG file: Type1label2controls--1228-8691.svg
 */
export const Type1label2controls: React.FC<Type1label2controlsProps> = ({
  className,
}) => {
  return <IconSvg className={`type1label2controls ${className || ''}`} />;
};
