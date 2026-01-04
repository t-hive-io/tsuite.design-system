import React from 'react';
import './Property1intake.css';
import IconSvg from '../assets/icons/Property1intake--2995-1743.svg?react';

export interface Property1intakeProps {
  className?: string;
}

/**
 * Property1intake
 *
 * Original name: Property 1=Intake
 * SVG file: Property1intake--2995-1743.svg
 */
export const Property1intake: React.FC<Property1intakeProps> = ({
  className,
}) => {
  return <IconSvg className={`property1intake ${className || ''}`} />;
};
