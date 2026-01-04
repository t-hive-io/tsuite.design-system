import React from 'react';
import './Table.css';
import IconSvg from '../assets/icons/Table--1523-9289.svg?react';

export interface TableProps {
  className?: string;
}

/**
 * Table
 *
 * Original name: Table
 * SVG file: Table--1523-9289.svg
 */
export const Table: React.FC<TableProps> = ({ className }) => {
  return <IconSvg className={`table ${className || ''}`} />;
};
