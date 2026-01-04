import React from 'react';
import './Property1pressed.css';
import IconSvg from '../assets/icons/Property1pressed--4972-41322.svg?react';

export interface Property1pressedProps {
  className?: string;
}

/**
 * Property1pressed
 *
 * Original name: Property 1=Pressed
 * SVG file: Property1pressed--4972-41322.svg
 */
export const Property1pressed: React.FC<Property1pressedProps> = ({
  className,
}) => {
  return <IconSvg className={`property1pressed ${className || ''}`} />;
};
