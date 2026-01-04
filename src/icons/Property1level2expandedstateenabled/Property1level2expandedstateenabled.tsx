import React from 'react';
import './Property1level2expandedstateenabled.css';
import IconSvg from '../assets/icons/Property1level2expandedstateenabled--3811-47132.svg?react';

export interface Property1level2expandedstateenabledProps {
  className?: string;
}

/**
 * Property1level2expandedstateenabled
 *
 * Original name: Property 1=Level 2 expanded, State=Enabled
 * SVG file: Property1level2expandedstateenabled--3811-47132.svg
 */
export const Property1level2expandedstateenabled: React.FC<
  Property1level2expandedstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level2expandedstateenabled ${className || ''}`}
    />
  );
};
