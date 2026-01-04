import React from 'react';
import './Property1simulationdraft.css';
import IconSvg from '../assets/icons/Property1simulationdraft--3005-11222.svg?react';

export interface Property1simulationdraftProps {
  className?: string;
}

/**
 * Property1simulationdraft
 *
 * Original name: Property 1=Simulation draft
 * SVG file: Property1simulationdraft--3005-11222.svg
 */
export const Property1simulationdraft: React.FC<
  Property1simulationdraftProps
> = ({ className }) => {
  return <IconSvg className={`property1simulationdraft ${className || ''}`} />;
};
