import React from 'react';
import './Typemeassurement.css';
import IconSvg from '../assets/icons/Typemeassurement--1841-8470.svg?react';

export interface TypemeassurementProps {
  className?: string;
}

/**
 * Typemeassurement
 *
 * Original name: Type=Meassurement
 * SVG file: Typemeassurement--1841-8470.svg
 */
export const Typemeassurement: React.FC<TypemeassurementProps> = ({
  className,
}) => {
  return <IconSvg className={`typemeassurement ${className || ''}`} />;
};
