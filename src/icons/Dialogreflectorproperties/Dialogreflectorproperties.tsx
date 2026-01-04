import React from 'react';
import './Dialogreflectorproperties.css';
import IconSvg from '../assets/icons/Dialogreflectorproperties--2769-993.svg?react';

export interface DialogreflectorpropertiesProps {
  className?: string;
}

/**
 * Dialogreflectorproperties
 *
 * Original name: Dialog: Reflector properties
 * SVG file: Dialogreflectorproperties--2769-993.svg
 */
export const Dialogreflectorproperties: React.FC<
  DialogreflectorpropertiesProps
> = ({ className }) => {
  return <IconSvg className={`dialogreflectorproperties ${className || ''}`} />;
};
