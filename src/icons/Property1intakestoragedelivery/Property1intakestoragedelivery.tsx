import React from 'react';
import './Property1intakestoragedelivery.css';
import IconSvg from '../assets/icons/Property1intakestoragedelivery--2995-2288.svg?react';

export interface Property1intakestoragedeliveryProps {
  className?: string;
}

/**
 * Property1intakestoragedelivery
 *
 * Original name: Property 1=Intake Storage Delivery
 * SVG file: Property1intakestoragedelivery--2995-2288.svg
 */
export const Property1intakestoragedelivery: React.FC<
  Property1intakestoragedeliveryProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1intakestoragedelivery ${className || ''}`} />
  );
};
