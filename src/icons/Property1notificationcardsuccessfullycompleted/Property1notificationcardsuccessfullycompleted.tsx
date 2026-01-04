import React from 'react';
import './Property1notificationcardsuccessfullycompleted.css';
import IconSvg from '../assets/icons/Property1notificationcardsuccessfullycompleted--3837-52192.svg?react';

export interface Property1notificationcardsuccessfullycompletedProps {
  className?: string;
}

/**
 * Property1notificationcardsuccessfullycompleted
 *
 * Original name: Property 1=Notification card: Successfully completed
 * SVG file: Property1notificationcardsuccessfullycompleted--3837-52192.svg
 */
export const Property1notificationcardsuccessfullycompleted: React.FC<
  Property1notificationcardsuccessfullycompletedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1notificationcardsuccessfullycompleted ${
        className || ''
      }`}
    />
  );
};
