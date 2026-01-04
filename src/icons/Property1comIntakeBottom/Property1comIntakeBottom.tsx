import React from 'react';
import './Property1comIntakeBottom.css';
import IconSvg from '../assets/icons/Property1comIntakeBottom--2924-913.svg?react';

export interface Property1comIntakeBottomProps {
  className?: string;
}

/**
 * Property1comIntakeBottom
 *
 * Original name: Property 1=Com_Intake_bottom
 * SVG file: Property1comIntakeBottom--2924-913.svg
 */
export const Property1comIntakeBottom: React.FC<
  Property1comIntakeBottomProps
> = ({ className }) => {
  return <IconSvg className={`property1comintakebottom ${className || ''}`} />;
};
