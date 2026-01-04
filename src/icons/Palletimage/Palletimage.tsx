import React from 'react';
import './Palletimage.css';
import IconSvg from '../assets/icons/Palletimage--Epal1.svg?react';

export interface PalletimageProps {
  className?: string;
}

/**
 * Palletimage
 *
 * Original name: Pallet image / EPAL_1
 * SVG file: Palletimage--Epal1.svg
 */
export const Palletimage: React.FC<PalletimageProps> = ({ className }) => {
  return <IconSvg className={`palletimage ${className || ''}`} />;
};
