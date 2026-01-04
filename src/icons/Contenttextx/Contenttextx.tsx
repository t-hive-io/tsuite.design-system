import React from 'react';
import './Contenttextx.css';
import IconSvg from '../assets/icons/Contenttextx--1325-8164.svg?react';

export interface ContenttextxProps {
  className?: string;
}

/**
 * Contenttextx
 *
 * Original name: Content=Text + X
 * SVG file: Contenttextx--1325-8164.svg
 */
export const Contenttextx: React.FC<ContenttextxProps> = ({ className }) => {
  return <IconSvg className={`contenttextx ${className || ''}`} />;
};
