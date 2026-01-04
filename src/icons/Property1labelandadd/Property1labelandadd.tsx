import React from 'react';
import './Property1labelandadd.css';
import IconSvg from '../assets/icons/Property1labelandadd--3833-49637.svg?react';

export interface Property1labelandaddProps {
  className?: string;
}

/**
 * Property1labelandadd
 *
 * Original name: Property 1=Label and Add
 * SVG file: Property1labelandadd--3833-49637.svg
 */
export const Property1labelandadd: React.FC<Property1labelandaddProps> = ({
  className,
}) => {
  return <IconSvg className={`property1labelandadd ${className || ''}`} />;
};
