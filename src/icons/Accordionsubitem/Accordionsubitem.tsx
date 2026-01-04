import React from 'react';
import './Accordionsubitem.css';
import IconSvg from '../assets/icons/Accordionsubitem--1084-6857.svg?react';

export interface AccordionsubitemProps {
  className?: string;
}

/**
 * Accordionsubitem
 *
 * Original name: Accordion Subitem
 * SVG file: Accordionsubitem--1084-6857.svg
 */
export const Accordionsubitem: React.FC<AccordionsubitemProps> = ({
  className,
}) => {
  return <IconSvg className={`accordionsubitem ${className || ''}`} />;
};
