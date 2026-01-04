import React from 'react';
import './Statedefaulttypemanualprocessarea.css';
import IconSvg from '../assets/icons/Statedefaulttypemanualprocessarea--5360-37523.svg?react';

export interface StatedefaulttypemanualprocessareaProps {
  className?: string;
}

/**
 * Statedefaulttypemanualprocessarea
 *
 * Original name: State=Default, Type=Manual process area
 * SVG file: Statedefaulttypemanualprocessarea--5360-37523.svg
 */
export const Statedefaulttypemanualprocessarea: React.FC<
  StatedefaulttypemanualprocessareaProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`statedefaulttypemanualprocessarea ${className || ''}`}
    />
  );
};
