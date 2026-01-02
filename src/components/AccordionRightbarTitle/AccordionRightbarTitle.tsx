import React from 'react';
import './AccordionRightbarTitle.css';

export interface AccordionRightbarTitleProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Accordion: Right bar - Title
 * Maps to Figma component: "Accordion: Right bar - Title"
 */
export const AccordionRightbarTitle: React.FC<AccordionRightbarTitleProps> = ({ className, children }) => {
  return (
    <div className={`accordionrightbartitle ${className || ''}`}>
      {children || 'Accordion: Right bar - Title'}
    </div>
  );
};
