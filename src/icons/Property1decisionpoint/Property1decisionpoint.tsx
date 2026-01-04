import React from 'react';
import './Property1decisionpoint.css';
import IconSvg from '../assets/icons/Property1decisionpoint--5367-24597.svg?react';

export interface Property1decisionpointProps {
  className?: string;
}

/**
 * Property1decisionpoint
 *
 * Original name: Property 1=Decision point
 * SVG file: Property1decisionpoint--5367-24597.svg
 */
export const Property1decisionpoint: React.FC<Property1decisionpointProps> = ({
  className,
}) => {
  return <IconSvg className={`property1decisionpoint ${className || ''}`} />;
};
