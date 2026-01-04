import React from 'react';
import './Property1handOver.css';
import IconSvg from '../assets/icons/Property1handOver--3948-34934.svg?react';

export interface Property1handOverProps {
  className?: string;
}

/**
 * Property1handOver
 *
 * Original name: Property 1=Hand-over
 * SVG file: Property1handOver--3948-34934.svg
 */
export const Property1handOver: React.FC<Property1handOverProps> = ({
  className,
}) => {
  return <IconSvg className={`property1handover ${className || ''}`} />;
};
