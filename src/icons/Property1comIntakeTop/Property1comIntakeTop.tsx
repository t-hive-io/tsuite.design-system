import React from 'react';
import './Property1comIntakeTop.css';
import IconSvg from '../assets/icons/Property1comIntakeTop--2924-863.svg?react';

export interface Property1comIntakeTopProps {
  className?: string;
}

/**
 * Property1comIntakeTop
 *
 * Original name: Property 1=Com_Intake_top
 * SVG file: Property1comIntakeTop--2924-863.svg
 */
export const Property1comIntakeTop: React.FC<Property1comIntakeTopProps> = ({
  className,
}) => {
  return <IconSvg className={`property1comintaketop ${className || ''}`} />;
};
