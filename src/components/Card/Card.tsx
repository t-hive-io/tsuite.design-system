import React from 'react';
import './Card.css';

export interface CardProps {
  /**
   * Card variant
   */
  variant?: 'default' | 'outlined' | 'elevated';
  /**
   * Card header content
   */
  header?: React.ReactNode;
  /**
   * Card body content
   */
  children: React.ReactNode;
  /**
   * Card footer content
   */
  footer?: React.ReactNode;
  /**
   * Full width card
   */
  fullWidth?: boolean;
  /**
   * Clickable card
   */
  onClick?: () => void;
  /**
   * Padding size
   */
  padding?: 'none' | 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for card layout
 */
export const Card = ({
  variant = 'default',
  header,
  children,
  footer,
  fullWidth = false,
  onClick,
  padding = 'medium',
}: CardProps) => {
  const classNames = [
    'tsuite-card',
    `tsuite-card--${variant}`,
    `tsuite-card--padding-${padding}`,
    fullWidth && 'tsuite-card--full-width',
    onClick && 'tsuite-card--clickable',
  ]
    .filter(Boolean)
    .join(' ');

  const CardElement = onClick ? 'button' : 'div';

  return (
    <CardElement className={classNames} onClick={onClick}>
      {header && <div className="tsuite-card__header">{header}</div>}
      <div className="tsuite-card__body">{children}</div>
      {footer && <div className="tsuite-card__footer">{footer}</div>}
    </CardElement>
  );
};
