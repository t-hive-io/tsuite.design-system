import React from 'react';
import './PropertyMessagecard.css';
import IconSvg from '../assets/icons/PropertyMessagecard--1106-6747.svg?react';

export interface PropertyMessagecardProps {
  className?: string;
}

/**
 * PropertyMessagecard
 *
 * Original name: Property - Message card
 * SVG file: PropertyMessagecard--1106-6747.svg
 */
export const PropertyMessagecard: React.FC<PropertyMessagecardProps> = ({
  className,
}) => {
  return <IconSvg className={`propertymessagecard ${className || ''}`} />;
};
