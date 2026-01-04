import React from 'react';
import './Property1defaultd.css';
import IconSvg from '../assets/icons/Property1defaultd--1126-8194.svg?react';

export interface Property1defaultdProps {
  className?: string;
}

/**
 * Property1defaultd
 *
 * Original name: Property 1=Default D
 * SVG file: Property1defaultd--1126-8194.svg
 */
export const Property1defaultd: React.FC<Property1defaultdProps> = ({
  className,
}) => {
  return <IconSvg className={`property1defaultd ${className || ''}`} />;
};
