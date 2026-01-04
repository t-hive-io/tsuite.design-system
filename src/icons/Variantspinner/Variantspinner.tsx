import React from 'react';
import './Variantspinner.css';
import IconSvg from '../assets/icons/Variantspinner--2704-580.svg?react';

export interface VariantspinnerProps {
  className?: string;
}

/**
 * Variantspinner
 *
 * Original name: Variant=Spinner
 * SVG file: Variantspinner--2704-580.svg
 */
export const Variantspinner: React.FC<VariantspinnerProps> = ({
  className,
}) => {
  return <IconSvg className={`variantspinner ${className || ''}`} />;
};
