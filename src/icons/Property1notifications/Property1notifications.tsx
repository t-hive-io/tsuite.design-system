import React from 'react';
import './Property1notifications.css';
import IconSvg from '../assets/icons/Property1notifications--3837-52288.svg?react';

export interface Property1notificationsProps {
  className?: string;
}

/**
 * Property1notifications
 *
 * Original name: Property 1=Notifications
 * SVG file: Property1notifications--3837-52288.svg
 */
export const Property1notifications: React.FC<Property1notificationsProps> = ({
  className,
}) => {
  return <IconSvg className={`property1notifications ${className || ''}`} />;
};
