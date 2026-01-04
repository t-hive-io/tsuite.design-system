import React from 'react';
import './TyperightbarSegment.css';
import IconSvg from '../assets/icons/TyperightbarSegment--5311-80275.svg?react';

export interface TyperightbarSegmentProps {
  className?: string;
}

/**
 * TyperightbarSegment
 *
 * Original name: Type=Right bar - segment
 * SVG file: TyperightbarSegment--5311-80275.svg
 */
export const TyperightbarSegment: React.FC<TyperightbarSegmentProps> = ({
  className,
}) => {
  return <IconSvg className={`typerightbarsegment ${className || ''}`} />;
};
