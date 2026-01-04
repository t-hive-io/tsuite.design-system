import React from 'react';
import './Typelinkbuttoniconnoiconstatehovered.css';
import IconSvg from '../assets/icons/Typelinkbuttoniconnoiconstatehovered--5497-30604.svg?react';

export interface TypelinkbuttoniconnoiconstatehoveredProps {
  className?: string;
}

/**
 * Typelinkbuttoniconnoiconstatehovered
 *
 * Original name: Type=Link button, Icon=No icon, State=Hovered
 * SVG file: Typelinkbuttoniconnoiconstatehovered--5497-30604.svg
 */
export const Typelinkbuttoniconnoiconstatehovered: React.FC<
  TypelinkbuttoniconnoiconstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typelinkbuttoniconnoiconstatehovered ${className || ''}`}
    />
  );
};
