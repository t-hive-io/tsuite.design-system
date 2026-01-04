import React from 'react';
import './Textbuttonlinkwithdropdown.css';
import IconSvg from '../assets/icons/Textbuttonlinkwithdropdown--TextbuttonlinkanddropdownEnabled.svg?react';

export interface TextbuttonlinkwithdropdownProps {
  className?: string;
}

/**
 * Textbuttonlinkwithdropdown
 *
 * Original name: Text Button – Link with Dropdown/Text Button Link and Dropdown/Enabled
 * SVG file: Textbuttonlinkwithdropdown--TextbuttonlinkanddropdownEnabled.svg
 */
export const Textbuttonlinkwithdropdown: React.FC<
  TextbuttonlinkwithdropdownProps
> = ({ className }) => {
  return (
    <IconSvg className={`textbuttonlinkwithdropdown ${className || ''}`} />
  );
};
