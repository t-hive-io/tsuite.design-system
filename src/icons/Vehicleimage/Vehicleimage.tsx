import React from 'react';
import './Vehicleimage.css';
import IconSvg from '../assets/icons/Vehicleimage--Afg8afbr30.svg?react';

export interface VehicleimageProps {
  className?: string;
}

/**
 * Vehicleimage
 *
 * Original name: Vehicle image/AFG_8AFBR30
 * SVG file: Vehicleimage--Afg8afbr30.svg
 */
export const Vehicleimage: React.FC<VehicleimageProps> = ({ className }) => {
  return <IconSvg className={`vehicleimage ${className || ''}`} />;
};
