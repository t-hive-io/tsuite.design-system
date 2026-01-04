import React from 'react';
import './Property1level1stateenabled.css';
import IconSvg from '../assets/icons/Property1level1stateenabled--3811-47124.svg?react';

export interface Property1level1stateenabledProps {
  className?: string;
}

/**
 * Property1level1stateenabled
 *
 * Original name: Property 1=Level 1, State=Enabled
 * SVG file: Property1level1stateenabled--3811-47124.svg
 */
export const Property1level1stateenabled: React.FC<
  Property1level1stateenabledProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1level1stateenabled ${className || ''}`} />
  );
};
