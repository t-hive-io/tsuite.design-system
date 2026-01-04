import React from 'react';
import './Property1shelfheightmvp.css';
import IconSvg from '../assets/icons/Property1shelfheightmvp--4459-37653.svg?react';

export interface Property1shelfheightmvpProps {
  className?: string;
}

/**
 * Property1shelfheightmvp
 *
 * Original name: Property 1=Shelf height MVP
 * SVG file: Property1shelfheightmvp--4459-37653.svg
 */
export const Property1shelfheightmvp: React.FC<
  Property1shelfheightmvpProps
> = ({ className }) => {
  return <IconSvg className={`property1shelfheightmvp ${className || ''}`} />;
};
