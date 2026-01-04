import React from 'react';
import './Typelinkbuttoniconnoiconstateenabled.css';
import IconSvg from '../assets/icons/Typelinkbuttoniconnoiconstateenabled--5497-25243.svg?react';

export interface TypelinkbuttoniconnoiconstateenabledProps {
  className?: string;
}

/**
 * Typelinkbuttoniconnoiconstateenabled
 *
 * Original name: Type=Link button, Icon=No icon, State=Enabled
 * SVG file: Typelinkbuttoniconnoiconstateenabled--5497-25243.svg
 */
export const Typelinkbuttoniconnoiconstateenabled: React.FC<
  TypelinkbuttoniconnoiconstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typelinkbuttoniconnoiconstateenabled ${className || ''}`}
    />
  );
};
