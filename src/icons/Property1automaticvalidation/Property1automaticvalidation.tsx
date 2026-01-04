import React from 'react';
import './Property1automaticvalidation.css';
import IconSvg from '../assets/icons/Property1automaticvalidation--3102-7825.svg?react';

export interface Property1automaticvalidationProps {
  className?: string;
}

/**
 * Property1automaticvalidation
 *
 * Original name: Property 1=Automatic validation
 * SVG file: Property1automaticvalidation--3102-7825.svg
 */
export const Property1automaticvalidation: React.FC<
  Property1automaticvalidationProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1automaticvalidation ${className || ''}`} />
  );
};
