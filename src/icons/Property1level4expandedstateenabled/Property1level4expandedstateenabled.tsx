import React from 'react';
import './Property1level4expandedstateenabled.css';
import IconSvg from '../assets/icons/Property1level4expandedstateenabled--3811-47122.svg?react';

export interface Property1level4expandedstateenabledProps {
  className?: string;
}

/**
 * Property1level4expandedstateenabled
 *
 * Original name: Property 1=Level 4 expanded, State=Enabled
 * SVG file: Property1level4expandedstateenabled--3811-47122.svg
 */
export const Property1level4expandedstateenabled: React.FC<
  Property1level4expandedstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level4expandedstateenabled ${className || ''}`}
    />
  );
};
