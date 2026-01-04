import React from 'react';
import './Variantdigitaltwin.css';
import IconSvg from '../assets/icons/Variantdigitaltwin--1031-9656.svg?react';

export interface VariantdigitaltwinProps {
  className?: string;
}

/**
 * Variantdigitaltwin
 *
 * Original name: Variant=Digital twin
 * SVG file: Variantdigitaltwin--1031-9656.svg
 */
export const Variantdigitaltwin: React.FC<VariantdigitaltwinProps> = ({
  className,
}) => {
  return <IconSvg className={`variantdigitaltwin ${className || ''}`} />;
};
