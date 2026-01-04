import React from 'react';
import './Property1level2statehovered.css';
import IconSvg from '../assets/icons/Property1level2statehovered--3811-47246.svg?react';

export interface Property1level2statehoveredProps {
  className?: string;
}

/**
 * Property1level2statehovered
 *
 * Original name: Property 1=Level 2, State=Hovered
 * SVG file: Property1level2statehovered--3811-47246.svg
 */
export const Property1level2statehovered: React.FC<
  Property1level2statehoveredProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1level2statehovered ${className || ''}`} />
  );
};
