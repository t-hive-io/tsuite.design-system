import React from 'react';
import './Property1manualprocessarea.css';
import IconSvg from '../assets/icons/Property1manualprocessarea--5362-25176.svg?react';

export interface Property1manualprocessareaProps {
  className?: string;
}

/**
 * Property1manualprocessarea
 *
 * Original name: Property 1=Manual process area
 * SVG file: Property1manualprocessarea--5362-25176.svg
 */
export const Property1manualprocessarea: React.FC<
  Property1manualprocessareaProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1manualprocessarea ${className || ''}`} />
  );
};
