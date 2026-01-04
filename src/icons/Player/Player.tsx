import React from 'react';
import './Player.css';
import IconSvg from '../assets/icons/Player--1239-8177.svg?react';

export interface PlayerProps {
  className?: string;
}

/**
 * Player
 *
 * Original name: Player
 * SVG file: Player--1239-8177.svg
 */
export const Player: React.FC<PlayerProps> = ({ className }) => {
  return <IconSvg className={`player ${className || ''}`} />;
};
