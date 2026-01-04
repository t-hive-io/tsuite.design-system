import React from 'react';
import './Property1manualoperationmenu.css';
import IconSvg from '../assets/icons/Property1manualoperationmenu--5338-19518.svg?react';

export interface Property1manualoperationmenuProps {
  className?: string;
}

/**
 * Property1manualoperationmenu
 *
 * Original name: Property 1=Manual operation menu
 * SVG file: Property1manualoperationmenu--5338-19518.svg
 */
export const Property1manualoperationmenu: React.FC<
  Property1manualoperationmenuProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1manualoperationmenu ${className || ''}`} />
  );
};
