import React from 'react';
import './Property1spacingarea.css';
import IconSvg from '../assets/icons/Property1spacingarea--3769-48379.svg?react';

export interface Property1spacingareaProps {
  className?: string;
}

/**
 * Property1spacingarea
 *
 * Original name: Property 1=Spacing: Area
 * SVG file: Property1spacingarea--3769-48379.svg
 */
export const Property1spacingarea: React.FC<Property1spacingareaProps> = ({
  className,
}) => {
  return <IconSvg className={`property1spacingarea ${className || ''}`} />;
};
