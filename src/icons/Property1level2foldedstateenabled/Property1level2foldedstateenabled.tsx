import React from 'react';
import './Property1level2foldedstateenabled.css';
import IconSvg from '../assets/icons/Property1level2foldedstateenabled--3811-47129.svg?react';

export interface Property1level2foldedstateenabledProps {
  className?: string;
}

/**
 * Property1level2foldedstateenabled
 *
 * Original name: Property 1=Level 2 folded, State=Enabled
 * SVG file: Property1level2foldedstateenabled--3811-47129.svg
 */
export const Property1level2foldedstateenabled: React.FC<
  Property1level2foldedstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level2foldedstateenabled ${className || ''}`}
    />
  );
};
