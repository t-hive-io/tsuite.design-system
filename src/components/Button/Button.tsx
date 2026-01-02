import React from 'react';
import './Button.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'link';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
  active = false,
  icon = false,
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    active && 'btn--active',
    icon && 'btn--with-icon',
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="btn__icon">+</span>}
      {children}
    </button>
  );
};
