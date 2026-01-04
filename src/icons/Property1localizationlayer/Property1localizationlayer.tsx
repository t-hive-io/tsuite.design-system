import React from 'react';
import './Property1localizationlayer.css';
import IconSvg from '../assets/icons/Property1localizationlayer--3833-49638.svg?react';

export interface Property1localizationlayerProps {
  className?: string;
}

/**
 * Property1localizationlayer
 *
 * Original name: Property 1=Localization layer
 * SVG file: Property1localizationlayer--3833-49638.svg
 */
export const Property1localizationlayer: React.FC<
  Property1localizationlayerProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1localizationlayer ${className || ''}`} />
  );
};
