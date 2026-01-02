import React from 'react';
import './Stackedlinechart.css';

export interface StackedlinechartProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * stacked_line_chart
 * Maps to Figma component: "stacked_line_chart"
 */
export const Stackedlinechart: React.FC<StackedlinechartProps> = ({ className, children }) => {
  return (
    <div className={`stackedlinechart ${className || ''}`}>
      {children || 'stacked_line_chart'}
    </div>
  );
};
