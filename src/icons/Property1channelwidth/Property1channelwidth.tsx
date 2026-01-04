import React from 'react';
import './Property1channelwidth.css';
import IconSvg from '../assets/icons/Property1channelwidth--3778-51871.svg?react';

export interface Property1channelwidthProps {
  className?: string;
}

/**
 * Property1channelwidth
 *
 * Original name: Property 1=Channel width
 * SVG file: Property1channelwidth--3778-51871.svg
 */
export const Property1channelwidth: React.FC<Property1channelwidthProps> = ({
  className,
}) => {
  return <IconSvg className={`property1channelwidth ${className || ''}`} />;
};
