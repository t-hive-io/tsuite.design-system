import React from 'react';
import './Property1commissioningGate.css';
import IconSvg from '../assets/icons/Property1commissioningGate--3833-50695.svg?react';

export interface Property1commissioningGateProps {
  className?: string;
}

/**
 * Property1commissioningGate
 *
 * Original name: Property 1=Commissioning - Gate
 * SVG file: Property1commissioningGate--3833-50695.svg
 */
export const Property1commissioningGate: React.FC<
  Property1commissioningGateProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1commissioninggate ${className || ''}`} />
  );
};
