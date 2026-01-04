import React from 'react';
import './Property1level3statefocusedhover.css';
import IconSvg from '../assets/icons/Property1level3statefocusedhover--4150-35234.svg?react';

export interface Property1level3statefocusedhoverProps {
  className?: string;
}

/**
 * Property1level3statefocusedhover
 *
 * Original name: Property 1=Level 3, State=Focused hover
 * SVG file: Property1level3statefocusedhover--4150-35234.svg
 */
export const Property1level3statefocusedhover: React.FC<
  Property1level3statefocusedhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level3statefocusedhover ${className || ''}`}
    />
  );
};
