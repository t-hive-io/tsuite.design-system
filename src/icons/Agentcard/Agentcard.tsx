import React from 'react';
import './Agentcard.css';
import IconSvg from '../assets/icons/Agentcard--3023-8813.svg?react';

export interface AgentcardProps {
  className?: string;
}

/**
 * Agentcard
 *
 * Original name: Agent card
 * SVG file: Agentcard--3023-8813.svg
 */
export const Agentcard: React.FC<AgentcardProps> = ({ className }) => {
  return <IconSvg className={`agentcard ${className || ''}`} />;
};
