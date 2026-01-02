import React, { useState } from 'react';
import './Accordion.css';

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultExpanded = false,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`accordion ${className}`}>
      <button
        className={`accordion-header ${isExpanded ? 'accordion-header--expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">{isExpanded ? '−' : '+'}</span>
      </button>
      {isExpanded && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};
