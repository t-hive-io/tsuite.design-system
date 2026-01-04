import React from 'react';
import './Property1enabled.css';
import IconSvg from '../assets/icons/Property1enabled--1065-6375.svg?react';

export interface Property1enabledProps {
  className?: string;
}

/**
 * Property1enabled
 *
 * Original name: Property 1=Enabled
 * SVG file: Property1enabled--1065-6375.svg
 */
export const Property1enabled: React.FC<Property1enabledProps> = ({
  className,
}) => {
  return <IconSvg className={`property1enabled ${className || ''}`} />;
};
