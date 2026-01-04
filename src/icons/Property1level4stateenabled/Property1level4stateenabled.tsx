import React from 'react';
import './Property1level4stateenabled.css';
import IconSvg from '../assets/icons/Property1level4stateenabled--3811-47131.svg?react';

export interface Property1level4stateenabledProps {
  className?: string;
}

/**
 * Property1level4stateenabled
 *
 * Original name: Property 1=Level 4, State=Enabled
 * SVG file: Property1level4stateenabled--3811-47131.svg
 */
export const Property1level4stateenabled: React.FC<
  Property1level4stateenabledProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1level4stateenabled ${className || ''}`} />
  );
};
