import React from 'react';
import './Calendaraddon.css';

export interface CalendaraddonProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * calendar_add_on
 * Maps to Figma component: "calendar_add_on"
 */
export const Calendaraddon: React.FC<CalendaraddonProps> = ({ className, children }) => {
  return (
    <div className={`calendaraddon ${className || ''}`}>
      {children || 'calendar_add_on'}
    </div>
  );
};
