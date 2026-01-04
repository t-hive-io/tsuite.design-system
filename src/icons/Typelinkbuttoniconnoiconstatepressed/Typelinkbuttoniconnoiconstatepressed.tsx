import React from 'react';
import './Typelinkbuttoniconnoiconstatepressed.css';
import IconSvg from '../assets/icons/Typelinkbuttoniconnoiconstatepressed--5497-30608.svg?react';

export interface TypelinkbuttoniconnoiconstatepressedProps {
  className?: string;
}

/**
 * Typelinkbuttoniconnoiconstatepressed
 *
 * Original name: Type=Link button, Icon=No icon, State=Pressed
 * SVG file: Typelinkbuttoniconnoiconstatepressed--5497-30608.svg
 */
export const Typelinkbuttoniconnoiconstatepressed: React.FC<
  TypelinkbuttoniconnoiconstatepressedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typelinkbuttoniconnoiconstatepressed ${className || ''}`}
    />
  );
};
