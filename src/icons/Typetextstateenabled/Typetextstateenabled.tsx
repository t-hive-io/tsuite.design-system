import React from 'react';
import './Typetextstateenabled.css';
import IconSvg from '../assets/icons/Typetextstateenabled--1728-8335.svg?react';

export interface TypetextstateenabledProps {
  className?: string;
}

/**
 * Typetextstateenabled
 *
 * Original name: Type=text, State=Enabled
 * SVG file: Typetextstateenabled--1728-8335.svg
 */
export const Typetextstateenabled: React.FC<TypetextstateenabledProps> = ({
  className,
}) => {
  return <IconSvg className={`typetextstateenabled ${className || ''}`} />;
};
