import React from 'react';
import './Property1compatibilityfix.css';
import IconSvg from '../assets/icons/Property1compatibilityfix--3832-43831.svg?react';

export interface Property1compatibilityfixProps {
  className?: string;
}

/**
 * Property1compatibilityfix
 *
 * Original name: Property 1=Compatibility fix
 * SVG file: Property1compatibilityfix--3832-43831.svg
 */
export const Property1compatibilityfix: React.FC<
  Property1compatibilityfixProps
> = ({ className }) => {
  return <IconSvg className={`property1compatibilityfix ${className || ''}`} />;
};
