import React from 'react';
import './Property1intakeas.css';
import IconSvg from '../assets/icons/Property1intakeas--Rs.svg?react';

export interface Property1intakeasProps {
  className?: string;
}

/**
 * Property1intakeas
 *
 * Original name: Property 1=Intake AS/RS
 * SVG file: Property1intakeas--Rs.svg
 */
export const Property1intakeas: React.FC<Property1intakeasProps> = ({
  className,
}) => {
  return <IconSvg className={`property1intakeas ${className || ''}`} />;
};
