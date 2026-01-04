import React from 'react';
import './Toolrailmain.css';
import IconSvg from '../assets/icons/Toolrailmain--1081-6434.svg?react';

export interface ToolrailmainProps {
  className?: string;
}

/**
 * Toolrailmain
 *
 * Original name: Tool rail main
 * SVG file: Toolrailmain--1081-6434.svg
 */
export const Toolrailmain: React.FC<ToolrailmainProps> = ({ className }) => {
  return <IconSvg className={`toolrailmain ${className || ''}`} />;
};
