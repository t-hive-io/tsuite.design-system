import React from 'react';
import './Typevaliconstatefocused.css';
import IconSvg from '../assets/icons/Typevaliconstatefocused--1728-8487.svg?react';

export interface TypevaliconstatefocusedProps {
  className?: string;
}

/**
 * Typevaliconstatefocused
 *
 * Original name: Type=val + icon, State=Focused
 * SVG file: Typevaliconstatefocused--1728-8487.svg
 */
export const Typevaliconstatefocused: React.FC<
  TypevaliconstatefocusedProps
> = ({ className }) => {
  return <IconSvg className={`typevaliconstatefocused ${className || ''}`} />;
};
