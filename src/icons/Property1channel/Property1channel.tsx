import React from 'react';
import './Property1channel.css';
import IconSvg from '../assets/icons/Property1channel--3778-52094.svg?react';

export interface Property1channelProps {
  className?: string;
}

/**
 * Property1channel
 *
 * Original name: Property 1=Channel
 * SVG file: Property1channel--3778-52094.svg
 */
export const Property1channel: React.FC<Property1channelProps> = ({
  className,
}) => {
  return <IconSvg className={`property1channel ${className || ''}`} />;
};
