import React from 'react';
import './Propertymessagecard2.css';
import IconSvg from '../assets/icons/Propertymessagecard2--1292-8255.svg?react';

export interface Propertymessagecard2Props {
  className?: string;
}

/**
 * Propertymessagecard2
 *
 * Original name: Property message card 2
 * SVG file: Propertymessagecard2--1292-8255.svg
 */
export const Propertymessagecard2: React.FC<Propertymessagecard2Props> = ({
  className,
}) => {
  return <IconSvg className={`propertymessagecard2 ${className || ''}`} />;
};
