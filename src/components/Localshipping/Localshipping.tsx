import React from 'react';
import './Localshipping.css';

export interface LocalshippingProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * local_shipping
 * Maps to Figma component: "local_shipping"
 */
export const Localshipping: React.FC<LocalshippingProps> = ({ className, children }) => {
  return (
    <div className={`localshipping ${className || ''}`}>
      {children || 'local_shipping'}
    </div>
  );
};
