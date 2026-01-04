import React from 'react';
import './Listsection.css';
import IconSvg from '../assets/icons/Listsection--3144-901.svg?react';

export interface ListsectionProps {
  className?: string;
}

/**
 * Listsection
 *
 * Original name: List section
 * SVG file: Listsection--3144-901.svg
 */
export const Listsection: React.FC<ListsectionProps> = ({ className }) => {
  return <IconSvg className={`listsection ${className || ''}`} />;
};
