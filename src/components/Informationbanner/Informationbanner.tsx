import React from 'react';
import './Informationbanner.css';

export interface InformationbannerProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Information banner
 * Maps to Figma component: "Information banner"
 */
export const Informationbanner: React.FC<InformationbannerProps> = ({ className, children }) => {
  return (
    <div className={`informationbanner ${className || ''}`}>
      {children || 'Information banner'}
    </div>
  );
};
