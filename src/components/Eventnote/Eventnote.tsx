import React from 'react';
import './Eventnote.css';

export interface EventnoteProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * event_note
 * Maps to Figma component: "event_note"
 */
export const Eventnote: React.FC<EventnoteProps> = ({ className, children }) => {
  return (
    <div className={`eventnote ${className || ''}`}>
      {children || 'event_note'}
    </div>
  );
};
