import React from 'react';
import './Property1level1expndedstatefocusedhover.css';
import IconSvg from '../assets/icons/Property1level1expndedstatefocusedhover--4150-35162.svg?react';

export interface Property1level1expndedstatefocusedhoverProps {
  className?: string;
}

/**
 * Property1level1expndedstatefocusedhover
 *
 * Original name: Property 1=Level 1 expnded, State=Focused hover
 * SVG file: Property1level1expndedstatefocusedhover--4150-35162.svg
 */
export const Property1level1expndedstatefocusedhover: React.FC<
  Property1level1expndedstatefocusedhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level1expndedstatefocusedhover ${className || ''}`}
    />
  );
};
