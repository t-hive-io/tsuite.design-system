import React from 'react';
import './Typelinkbuttoniconnoiconstatefocused.css';
import IconSvg from '../assets/icons/Typelinkbuttoniconnoiconstatefocused--5497-30606.svg?react';

export interface TypelinkbuttoniconnoiconstatefocusedProps {
  className?: string;
}

/**
 * Typelinkbuttoniconnoiconstatefocused
 *
 * Original name: Type=Link button, Icon=No icon, State=Focused
 * SVG file: Typelinkbuttoniconnoiconstatefocused--5497-30606.svg
 */
export const Typelinkbuttoniconnoiconstatefocused: React.FC<
  TypelinkbuttoniconnoiconstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typelinkbuttoniconnoiconstatefocused ${className || ''}`}
    />
  );
};
