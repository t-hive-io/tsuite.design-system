import React from 'react';
import './Property1intakeareaAllcollapsed.css';
import IconSvg from '../assets/icons/Property1intakeareaAllcollapsed--3815-56547.svg?react';

export interface Property1intakeareaAllcollapsedProps {
  className?: string;
}

/**
 * Property1intakeareaAllcollapsed
 *
 * Original name: Property 1=Intake area - all collapsed
 * SVG file: Property1intakeareaAllcollapsed--3815-56547.svg
 */
export const Property1intakeareaAllcollapsed: React.FC<
  Property1intakeareaAllcollapsedProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1intakeareaallcollapsed ${className || ''}`} />
  );
};
