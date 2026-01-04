import React from 'react';
import './Property1level3expandedstateenabled.css';
import IconSvg from '../assets/icons/Property1level3expandedstateenabled--3811-47125.svg?react';

export interface Property1level3expandedstateenabledProps {
  className?: string;
}

/**
 * Property1level3expandedstateenabled
 *
 * Original name: Property 1=Level 3 expanded, State=Enabled
 * SVG file: Property1level3expandedstateenabled--3811-47125.svg
 */
export const Property1level3expandedstateenabled: React.FC<
  Property1level3expandedstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level3expandedstateenabled ${className || ''}`}
    />
  );
};
