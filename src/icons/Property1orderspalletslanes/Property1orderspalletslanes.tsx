import React from 'react';
import './Property1orderspalletslanes.css';
import IconSvg from '../assets/icons/Property1orderspalletslanes--3798-55166.svg?react';

export interface Property1orderspalletslanesProps {
  className?: string;
}

/**
 * Property1orderspalletslanes
 *
 * Original name: Property 1=Orders Pallets Lanes
 * SVG file: Property1orderspalletslanes--3798-55166.svg
 */
export const Property1orderspalletslanes: React.FC<
  Property1orderspalletslanesProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1orderspalletslanes ${className || ''}`} />
  );
};
