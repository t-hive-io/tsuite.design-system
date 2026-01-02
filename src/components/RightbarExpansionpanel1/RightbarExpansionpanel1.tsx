import React from 'react';
import './RightbarExpansionpanel1.css';

export interface RightbarExpansionpanel1Props {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Right bar- Expansion panel - 1
 * Maps to Figma component: "Right bar- Expansion panel - 1"
 */
export const RightbarExpansionpanel1: React.FC<RightbarExpansionpanel1Props> = ({ className, children }) => {
  return (
    <div className={`rightbarexpansionpanel1 ${className || ''}`}>
      {children || 'Right bar- Expansion panel - 1'}
    </div>
  );
};
