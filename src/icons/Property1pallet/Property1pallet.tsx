import React from 'react';
import './Property1pallet.css';
import IconSvg from '../assets/icons/Property1pallet--3769-48376.svg?react';

export interface Property1palletProps {
  className?: string;
}

/**
 * Property1pallet
 *
 * Original name: Property 1=Pallet
 * SVG file: Property1pallet--3769-48376.svg
 */
export const Property1pallet: React.FC<Property1palletProps> = ({
  className,
}) => {
  return <IconSvg className={`property1pallet ${className || ''}`} />;
};
