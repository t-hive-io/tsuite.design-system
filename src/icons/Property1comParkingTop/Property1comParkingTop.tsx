import React from 'react';
import './Property1comParkingTop.css';
import IconSvg from '../assets/icons/Property1comParkingTop--2945-1110.svg?react';

export interface Property1comParkingTopProps {
  className?: string;
}

/**
 * Property1comParkingTop
 *
 * Original name: Property 1=Com_Parking_top
 * SVG file: Property1comParkingTop--2945-1110.svg
 */
export const Property1comParkingTop: React.FC<Property1comParkingTopProps> = ({
  className,
}) => {
  return <IconSvg className={`property1comparkingtop ${className || ''}`} />;
};
