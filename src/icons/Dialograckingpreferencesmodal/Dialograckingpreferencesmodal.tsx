import React from 'react';
import './Dialograckingpreferencesmodal.css';
import IconSvg from '../assets/icons/Dialograckingpreferencesmodal--3376-20872.svg?react';

export interface DialograckingpreferencesmodalProps {
  className?: string;
}

/**
 * Dialograckingpreferencesmodal
 *
 * Original name: Dialog: Racking preferences modal
 * SVG file: Dialograckingpreferencesmodal--3376-20872.svg
 */
export const Dialograckingpreferencesmodal: React.FC<
  DialograckingpreferencesmodalProps
> = ({ className }) => {
  return (
    <IconSvg className={`dialograckingpreferencesmodal ${className || ''}`} />
  );
};
