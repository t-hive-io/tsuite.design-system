import React from 'react';
import './Typelinkbuttoniconnoiconstatedisabled.css';
import IconSvg from '../assets/icons/Typelinkbuttoniconnoiconstatedisabled--5497-30610.svg?react';

export interface TypelinkbuttoniconnoiconstatedisabledProps {
  className?: string;
}

/**
 * Typelinkbuttoniconnoiconstatedisabled
 *
 * Original name: Type=Link button, Icon=No icon, State=Disabled
 * SVG file: Typelinkbuttoniconnoiconstatedisabled--5497-30610.svg
 */
export const Typelinkbuttoniconnoiconstatedisabled: React.FC<
  TypelinkbuttoniconnoiconstatedisabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typelinkbuttoniconnoiconstatedisabled ${className || ''}`}
    />
  );
};
