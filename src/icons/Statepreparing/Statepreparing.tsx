import React from 'react';
import './Statepreparing.css';
import IconSvg from '../assets/icons/Statepreparing--1289-8307.svg?react';

export interface StatepreparingProps {
  className?: string;
}

/**
 * Statepreparing
 *
 * Original name: State=Preparing
 * SVG file: Statepreparing--1289-8307.svg
 */
export const Statepreparing: React.FC<StatepreparingProps> = ({
  className,
}) => {
  return <IconSvg className={`statepreparing ${className || ''}`} />;
};
