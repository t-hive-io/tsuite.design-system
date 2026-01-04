import React from 'react';
import './Property1dimensioniconlabelx1.css';
import IconSvg from '../assets/icons/Property1dimensioniconlabelx1--3811-43379.svg?react';

export interface Property1dimensioniconlabelx1Props {
  className?: string;
}

/**
 * Property1dimensioniconlabelx1
 *
 * Original name: Property 1=Dimension Icon label x1
 * SVG file: Property1dimensioniconlabelx1--3811-43379.svg
 */
export const Property1dimensioniconlabelx1: React.FC<
  Property1dimensioniconlabelx1Props
> = ({ className }) => {
  return (
    <IconSvg className={`property1dimensioniconlabelx1 ${className || ''}`} />
  );
};
