import React from 'react';
import './Type2label2controls.css';
import IconSvg from '../assets/icons/Type2label2controls--1125-10043.svg?react';

export interface Type2label2controlsProps {
  className?: string;
}

/**
 * Type2label2controls
 *
 * Original name: Type=2 Label + 2 controls
 * SVG file: Type2label2controls--1125-10043.svg
 */
export const Type2label2controls: React.FC<Type2label2controlsProps> = ({
  className,
}) => {
  return <IconSvg className={`type2label2controls ${className || ''}`} />;
};
