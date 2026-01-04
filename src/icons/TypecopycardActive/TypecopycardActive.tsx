import React from 'react';
import './TypecopycardActive.css';
import IconSvg from '../assets/icons/TypecopycardActive--1524-9912.svg?react';

export interface TypecopycardActiveProps {
  className?: string;
}

/**
 * TypecopycardActive
 *
 * Original name: Type=Copy Card - Active
 * SVG file: TypecopycardActive--1524-9912.svg
 */
export const TypecopycardActive: React.FC<TypecopycardActiveProps> = ({
  className,
}) => {
  return <IconSvg className={`typecopycardactive ${className || ''}`} />;
};
