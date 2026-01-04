import React from 'react';
import './Property1blued.css';
import IconSvg from '../assets/icons/Property1blued--1126-8220.svg?react';

export interface Property1bluedProps {
  className?: string;
}

/**
 * Property1blued
 *
 * Original name: Property 1=Blue D
 * SVG file: Property1blued--1126-8220.svg
 */
export const Property1blued: React.FC<Property1bluedProps> = ({
  className,
}) => {
  return <IconSvg className={`property1blued ${className || ''}`} />;
};
