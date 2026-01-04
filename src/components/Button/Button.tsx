import React from 'react';
import './Button.css';

export interface ButtonProps {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'outlined' | 'text';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Is button disabled?
   */
  disabled?: boolean;
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Full width button
   */
  fullWidth?: boolean;
  /**
   * Icon to display before text
   */
  iconLeft?: React.ReactNode;
  /**
   * Icon to display after text
   */
  iconRight?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
  type = 'button',
  fullWidth = false,
  iconLeft,
  iconRight,
}: ButtonProps) => {
  const classNames = [
    'tsuite-button',
    `tsuite-button--${variant}`,
    `tsuite-button--${size}`,
    fullWidth && 'tsuite-button--full-width',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
    >
      {iconLeft && <span className="tsuite-button__icon-left">{iconLeft}</span>}
      <span className="tsuite-button__text">{children}</span>
      {iconRight && (
        <span className="tsuite-button__icon-right">{iconRight}</span>
      )}
    </button>
  );
};
