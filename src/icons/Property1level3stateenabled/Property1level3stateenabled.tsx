import React from 'react';
import './Property1level3stateenabled.css';
import IconSvg from '../assets/icons/Property1level3stateenabled--3811-47123.svg?react';

export interface Property1level3stateenabledProps {
  className?: string;
}

/**
 * Property1level3stateenabled
 *
 * Original name: Property 1=Level 3, State=Enabled
 * SVG file: Property1level3stateenabled--3811-47123.svg
 */
export const Property1level3stateenabled: React.FC<
  Property1level3stateenabledProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1level3stateenabled ${className || ''}`} />
  );
};
