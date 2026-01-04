import React from 'react';
import './Unittest.css';
import IconSvg from '../assets/icons/Unittest--1217-8499.svg?react';

export interface UnittestProps {
  className?: string;
}

/**
 * Unittest
 *
 * Original name: unit test
 * SVG file: Unittest--1217-8499.svg
 */
export const Unittest: React.FC<UnittestProps> = ({ className }) => {
  return <IconSvg className={`unittest ${className || ''}`} />;
};
