import React from 'react';
import './Accordionsub.css';
import IconSvg from '../assets/icons/Accordionsub--1084-6861.svg?react';

export interface AccordionsubProps {
  className?: string;
}

/**
 * Accordionsub
 *
 * Original name: Accordion sub
 * SVG file: Accordionsub--1084-6861.svg
 */
export const Accordionsub: React.FC<AccordionsubProps> = ({ className }) => {
  return <IconSvg className={`accordionsub ${className || ''}`} />;
};
