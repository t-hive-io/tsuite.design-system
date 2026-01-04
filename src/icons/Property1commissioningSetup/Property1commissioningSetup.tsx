import React from 'react';
import './Property1commissioningSetup.css';
import IconSvg from '../assets/icons/Property1commissioningSetup--3833-49766.svg?react';

export interface Property1commissioningSetupProps {
  className?: string;
}

/**
 * Property1commissioningSetup
 *
 * Original name: Property 1=Commissioning - Setup
 * SVG file: Property1commissioningSetup--3833-49766.svg
 */
export const Property1commissioningSetup: React.FC<
  Property1commissioningSetupProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1commissioningsetup ${className || ''}`} />
  );
};
