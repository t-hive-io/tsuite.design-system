import React from 'react';
import './Property1channelheight.css';
import IconSvg from '../assets/icons/Property1channelheight--3778-51870.svg?react';

export interface Property1channelheightProps {
  className?: string;
}

/**
 * Property1channelheight
 *
 * Original name: Property 1=Channel height
 * SVG file: Property1channelheight--3778-51870.svg
 */
export const Property1channelheight: React.FC<Property1channelheightProps> = ({
  className,
}) => {
  return <IconSvg className={`property1channelheight ${className || ''}`} />;
};
