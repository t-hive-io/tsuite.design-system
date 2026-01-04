import React from 'react';
import './Typelabelswitch.css';
import IconSvg from '../assets/icons/Typelabelswitch--1894-8831.svg?react';

export interface TypelabelswitchProps {
  className?: string;
}

/**
 * Typelabelswitch
 *
 * Original name: Type=Label + switch
 * SVG file: Typelabelswitch--1894-8831.svg
 */
export const Typelabelswitch: React.FC<TypelabelswitchProps> = ({
  className,
}) => {
  return <IconSvg className={`typelabelswitch ${className || ''}`} />;
};
