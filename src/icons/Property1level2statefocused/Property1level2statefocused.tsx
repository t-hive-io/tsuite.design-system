import React from 'react';
import './Property1level2statefocused.css';
import IconSvg from '../assets/icons/Property1level2statefocused--3811-47426.svg?react';

export interface Property1level2statefocusedProps {
  className?: string;
}

/**
 * Property1level2statefocused
 *
 * Original name: Property 1=Level 2, State=Focused
 * SVG file: Property1level2statefocused--3811-47426.svg
 */
export const Property1level2statefocused: React.FC<
  Property1level2statefocusedProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1level2statefocused ${className || ''}`} />
  );
};
