import React from 'react';
import './Property1comParkingBottom.css';
import IconSvg from '../assets/icons/Property1comParkingBottom--2945-1160.svg?react';

export interface Property1comParkingBottomProps {
  className?: string;
}

/**
 * Property1comParkingBottom
 *
 * Original name: Property 1=Com_Parking_bottom
 * SVG file: Property1comParkingBottom--2945-1160.svg
 */
export const Property1comParkingBottom: React.FC<
  Property1comParkingBottomProps
> = ({ className }) => {
  return <IconSvg className={`property1comparkingbottom ${className || ''}`} />;
};
