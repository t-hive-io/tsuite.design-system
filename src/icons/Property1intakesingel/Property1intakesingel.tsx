import React from 'react';
import './Property1intakesingel.css';
import IconSvg from '../assets/icons/Property1intakesingel--3799-58156.svg?react';

export interface Property1intakesingelProps {
  className?: string;
}

/**
 * Property1intakesingel
 *
 * Original name: Property 1=Intake Singel
 * SVG file: Property1intakesingel--3799-58156.svg
 */
export const Property1intakesingel: React.FC<Property1intakesingelProps> = ({
  className,
}) => {
  return <IconSvg className={`property1intakesingel ${className || ''}`} />;
};
