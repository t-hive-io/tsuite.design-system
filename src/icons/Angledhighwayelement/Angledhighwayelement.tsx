import React from 'react';
import './Angledhighwayelement.css';
import IconSvg from '../assets/icons/Angledhighwayelement--3132-9509.svg?react';

export interface AngledhighwayelementProps {
  className?: string;
}

/**
 * Angledhighwayelement
 *
 * Original name: Angled highway element
 * SVG file: Angledhighwayelement--3132-9509.svg
 */
export const Angledhighwayelement: React.FC<AngledhighwayelementProps> = ({
  className,
}) => {
  return <IconSvg className={`angledhighwayelement ${className || ''}`} />;
};
