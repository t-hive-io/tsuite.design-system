import React from 'react';
import './Property1level1foldedstateenabled.css';
import IconSvg from '../assets/icons/Property1level1foldedstateenabled--3811-47133.svg?react';

export interface Property1level1foldedstateenabledProps {
  className?: string;
}

/**
 * Property1level1foldedstateenabled
 *
 * Original name: Property 1=Level 1 folded, State=Enabled
 * SVG file: Property1level1foldedstateenabled--3811-47133.svg
 */
export const Property1level1foldedstateenabled: React.FC<
  Property1level1foldedstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level1foldedstateenabled ${className || ''}`}
    />
  );
};
