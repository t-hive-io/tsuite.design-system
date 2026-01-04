import React from 'react';
import './Property1level1expndedstateenabled.css';
import IconSvg from '../assets/icons/Property1level1expndedstateenabled--3811-47130.svg?react';

export interface Property1level1expndedstateenabledProps {
  className?: string;
}

/**
 * Property1level1expndedstateenabled
 *
 * Original name: Property 1=Level 1 expnded, State=Enabled
 * SVG file: Property1level1expndedstateenabled--3811-47130.svg
 */
export const Property1level1expndedstateenabled: React.FC<
  Property1level1expndedstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level1expndedstateenabled ${className || ''}`}
    />
  );
};
