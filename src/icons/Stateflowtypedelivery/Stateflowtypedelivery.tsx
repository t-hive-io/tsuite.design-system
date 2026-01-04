import React from 'react';
import './Stateflowtypedelivery.css';
import IconSvg from '../assets/icons/Stateflowtypedelivery--2133-9752.svg?react';

export interface StateflowtypedeliveryProps {
  className?: string;
}

/**
 * Stateflowtypedelivery
 *
 * Original name: State=Flow, Type=Delivery
 * SVG file: Stateflowtypedelivery--2133-9752.svg
 */
export const Stateflowtypedelivery: React.FC<StateflowtypedeliveryProps> = ({
  className,
}) => {
  return <IconSvg className={`stateflowtypedelivery ${className || ''}`} />;
};
