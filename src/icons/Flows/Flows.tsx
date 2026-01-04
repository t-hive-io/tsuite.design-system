import React from 'react';
import './Flows.css';
import IconSvg from '../assets/icons/Flows--3799-60896.svg?react';

export interface FlowsProps {
  className?: string;
}

/**
 * Flows
 *
 * Original name: Flows
 * SVG file: Flows--3799-60896.svg
 */
export const Flows: React.FC<FlowsProps> = ({ className }) => {
  return <IconSvg className={`flows ${className || ''}`} />;
};
