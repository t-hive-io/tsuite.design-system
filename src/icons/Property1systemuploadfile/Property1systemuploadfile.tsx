import React from 'react';
import './Property1systemuploadfile.css';
import IconSvg from '../assets/icons/Property1systemuploadfile--3183-1572.svg?react';

export interface Property1systemuploadfileProps {
  className?: string;
}

/**
 * Property1systemuploadfile
 *
 * Original name: Property 1=System Upload file
 * SVG file: Property1systemuploadfile--3183-1572.svg
 */
export const Property1systemuploadfile: React.FC<
  Property1systemuploadfileProps
> = ({ className }) => {
  return <IconSvg className={`property1systemuploadfile ${className || ''}`} />;
};
