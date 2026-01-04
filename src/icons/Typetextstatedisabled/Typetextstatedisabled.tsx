import React from 'react';
import './Typetextstatedisabled.css';
import IconSvg from '../assets/icons/Typetextstatedisabled--3551-41697.svg?react';

export interface TypetextstatedisabledProps {
  className?: string;
}

/**
 * Typetextstatedisabled
 *
 * Original name: Type=text, State=Disabled
 * SVG file: Typetextstatedisabled--3551-41697.svg
 */
export const Typetextstatedisabled: React.FC<TypetextstatedisabledProps> = ({
  className,
}) => {
  return <IconSvg className={`typetextstatedisabled ${className || ''}`} />;
};
