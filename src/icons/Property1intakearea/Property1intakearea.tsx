import React from 'react';
import './Property1intakearea.css';
import IconSvg from '../assets/icons/Property1intakearea--3799-57982.svg?react';

export interface Property1intakeareaProps {
  className?: string;
}

/**
 * Property1intakearea
 *
 * Original name: Property 1=Intake area
 * SVG file: Property1intakearea--3799-57982.svg
 */
export const Property1intakearea: React.FC<Property1intakeareaProps> = ({
  className,
}) => {
  return <IconSvg className={`property1intakearea ${className || ''}`} />;
};
