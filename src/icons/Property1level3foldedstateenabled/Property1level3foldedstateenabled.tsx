import React from 'react';
import './Property1level3foldedstateenabled.css';
import IconSvg from '../assets/icons/Property1level3foldedstateenabled--3811-47126.svg?react';

export interface Property1level3foldedstateenabledProps {
  className?: string;
}

/**
 * Property1level3foldedstateenabled
 *
 * Original name: Property 1=Level 3 folded, State=Enabled
 * SVG file: Property1level3foldedstateenabled--3811-47126.svg
 */
export const Property1level3foldedstateenabled: React.FC<
  Property1level3foldedstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level3foldedstateenabled ${className || ''}`}
    />
  );
};
