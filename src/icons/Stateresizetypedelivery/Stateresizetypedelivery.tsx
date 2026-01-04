import React from 'react';
import './Stateresizetypedelivery.css';
import IconSvg from '../assets/icons/Stateresizetypedelivery--2133-9743.svg?react';

export interface StateresizetypedeliveryProps {
  className?: string;
}

/**
 * Stateresizetypedelivery
 *
 * Original name: State=Resize, Type=Delivery
 * SVG file: Stateresizetypedelivery--2133-9743.svg
 */
export const Stateresizetypedelivery: React.FC<
  StateresizetypedeliveryProps
> = ({ className }) => {
  return <IconSvg className={`stateresizetypedelivery ${className || ''}`} />;
};
