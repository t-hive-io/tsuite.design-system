import React from 'react';
import './Propertytab.css';
import IconSvg from '../assets/icons/Propertytab--3786-53473.svg?react';

export interface PropertytabProps {
  className?: string;
}

/**
 * Propertytab
 *
 * Original name: Property: Tab
 * SVG file: Propertytab--3786-53473.svg
 */
export const Propertytab: React.FC<PropertytabProps> = ({ className }) => {
  return <IconSvg className={`propertytab ${className || ''}`} />;
};
