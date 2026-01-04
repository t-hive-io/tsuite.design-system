import React from 'react';
import './Property1level2stateenabled.css';
import IconSvg from '../assets/icons/Property1level2stateenabled--3811-47128.svg?react';

export interface Property1level2stateenabledProps {
  className?: string;
}

/**
 * Property1level2stateenabled
 *
 * Original name: Property 1=Level 2, State=Enabled
 * SVG file: Property1level2stateenabled--3811-47128.svg
 */
export const Property1level2stateenabled: React.FC<
  Property1level2stateenabledProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1level2stateenabled ${className || ''}`} />
  );
};
