import React from 'react';
import './Property1comIntakeCenter.css';
import IconSvg from '../assets/icons/Property1comIntakeCenter--2924-861.svg?react';

export interface Property1comIntakeCenterProps {
  className?: string;
}

/**
 * Property1comIntakeCenter
 *
 * Original name: Property 1=Com_Intake_center
 * SVG file: Property1comIntakeCenter--2924-861.svg
 */
export const Property1comIntakeCenter: React.FC<
  Property1comIntakeCenterProps
> = ({ className }) => {
  return <IconSvg className={`property1comintakecenter ${className || ''}`} />;
};
