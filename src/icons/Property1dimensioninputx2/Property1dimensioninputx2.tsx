import React from 'react';
import './Property1dimensioninputx2.css';
import IconSvg from '../assets/icons/Property1dimensioninputx2--3811-43380.svg?react';

export interface Property1dimensioninputx2Props {
  className?: string;
}

/**
 * Property1dimensioninputx2
 *
 * Original name: Property 1=Dimension Input x2
 * SVG file: Property1dimensioninputx2--3811-43380.svg
 */
export const Property1dimensioninputx2: React.FC<
  Property1dimensioninputx2Props
> = ({ className }) => {
  return <IconSvg className={`property1dimensioninputx2 ${className || ''}`} />;
};
