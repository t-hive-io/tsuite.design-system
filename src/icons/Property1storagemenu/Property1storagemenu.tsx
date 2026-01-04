import React from 'react';
import './Property1storagemenu.css';
import IconSvg from '../assets/icons/Property1storagemenu--5338-19517.svg?react';

export interface Property1storagemenuProps {
  className?: string;
}

/**
 * Property1storagemenu
 *
 * Original name: Property 1=Storage menu
 * SVG file: Property1storagemenu--5338-19517.svg
 */
export const Property1storagemenu: React.FC<Property1storagemenuProps> = ({
  className,
}) => {
  return <IconSvg className={`property1storagemenu ${className || ''}`} />;
};
