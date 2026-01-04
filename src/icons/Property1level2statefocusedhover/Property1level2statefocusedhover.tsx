import React from 'react';
import './Property1level2statefocusedhover.css';
import IconSvg from '../assets/icons/Property1level2statefocusedhover--4150-35198.svg?react';

export interface Property1level2statefocusedhoverProps {
  className?: string;
}

/**
 * Property1level2statefocusedhover
 *
 * Original name: Property 1=Level 2, State=Focused hover
 * SVG file: Property1level2statefocusedhover--4150-35198.svg
 */
export const Property1level2statefocusedhover: React.FC<
  Property1level2statefocusedhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level2statefocusedhover ${className || ''}`}
    />
  );
};
