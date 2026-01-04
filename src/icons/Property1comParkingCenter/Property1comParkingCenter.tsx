import React from 'react';
import './Property1comParkingCenter.css';
import IconSvg from '../assets/icons/Property1comParkingCenter--2945-1060.svg?react';

export interface Property1comParkingCenterProps {
  className?: string;
}

/**
 * Property1comParkingCenter
 *
 * Original name: Property 1=Com_Parking_center
 * SVG file: Property1comParkingCenter--2945-1060.svg
 */
export const Property1comParkingCenter: React.FC<
  Property1comParkingCenterProps
> = ({ className }) => {
  return <IconSvg className={`property1comparkingcenter ${className || ''}`} />;
};
