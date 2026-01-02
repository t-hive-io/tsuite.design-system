import React from 'react';
import './Orderprofilemodal.css';

export interface OrderprofilemodalProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Order profile modal
 * Maps to Figma component: "Order profile modal"
 */
export const Orderprofilemodal: React.FC<OrderprofilemodalProps> = ({ className, children }) => {
  return (
    <div className={`orderprofilemodal ${className || ''}`}>
      {children || 'Order profile modal'}
    </div>
  );
};
