import React from 'react';
import './Donotdisturbon.css';

export interface DonotdisturbonProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * do_not_disturb_on
 * Maps to Figma component: "do_not_disturb_on"
 */
export const Donotdisturbon: React.FC<DonotdisturbonProps> = ({ className, children }) => {
  return (
    <div className={`donotdisturbon ${className || ''}`}>
      {children || 'do_not_disturb_on'}
    </div>
  );
};
