import React from 'react';
import './Stateflowtypestorage.css';
import IconSvg from '../assets/icons/Stateflowtypestorage--2133-10457.svg?react';

export interface StateflowtypestorageProps {
  className?: string;
}

/**
 * Stateflowtypestorage
 *
 * Original name: State=Flow, Type=Storage
 * SVG file: Stateflowtypestorage--2133-10457.svg
 */
export const Stateflowtypestorage: React.FC<StateflowtypestorageProps> = ({
  className,
}) => {
  return <IconSvg className={`stateflowtypestorage ${className || ''}`} />;
};
