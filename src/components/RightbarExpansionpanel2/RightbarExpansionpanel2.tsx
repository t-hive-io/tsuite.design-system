import React from 'react';
import './RightbarExpansionpanel2.css';

export interface RightbarExpansionpanel2Props {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Right bar - Expansion panel - 2
 * Maps to Figma component: "Right bar - Expansion panel - 2"
 */
export const RightbarExpansionpanel2: React.FC<RightbarExpansionpanel2Props> = ({ className, children }) => {
  return (
    <div className={`rightbarexpansionpanel2 ${className || ''}`}>
      {children || 'Right bar - Expansion panel - 2'}
    </div>
  );
};
