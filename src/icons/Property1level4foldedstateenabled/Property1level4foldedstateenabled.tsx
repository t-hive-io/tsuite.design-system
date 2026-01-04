import React from 'react';
import './Property1level4foldedstateenabled.css';
import IconSvg from '../assets/icons/Property1level4foldedstateenabled--3811-47127.svg?react';

export interface Property1level4foldedstateenabledProps {
  className?: string;
}

/**
 * Property1level4foldedstateenabled
 *
 * Original name: Property 1=Level 4 folded, State=Enabled
 * SVG file: Property1level4foldedstateenabled--3811-47127.svg
 */
export const Property1level4foldedstateenabled: React.FC<
  Property1level4foldedstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level4foldedstateenabled ${className || ''}`}
    />
  );
};
