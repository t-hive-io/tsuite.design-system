import React from 'react';
import './Breadcrumbs.css';
import IconSvg from '../assets/icons/Breadcrumbs--5257-22404.svg?react';

export interface BreadcrumbsProps {
  className?: string;
}

/**
 * Breadcrumbs
 *
 * Original name: Bread crumbs
 * SVG file: Breadcrumbs--5257-22404.svg
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className }) => {
  return <IconSvg className={`breadcrumbs ${className || ''}`} />;
};
