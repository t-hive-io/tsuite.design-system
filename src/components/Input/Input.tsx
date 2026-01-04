import React from 'react';
import './Input.css';

export interface InputProps {
  /**
   * Input type
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  /**
   * Input size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Input label
   */
  label?: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Input value
   */
  value?: string;
  /**
   * Is input disabled?
   */
  disabled?: boolean;
  /**
   * Is input required?
   */
  required?: boolean;
  /**
   * Error message
   */
  error?: string;
  /**
   * Helper text
   */
  helperText?: string;
  /**
   * Full width input
   */
  fullWidth?: boolean;
  /**
   * Icon to display before input
   */
  iconLeft?: React.ReactNode;
  /**
   * Icon to display after input
   */
  iconRight?: React.ReactNode;
  /**
   * Change handler
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Blur handler
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /**
   * Focus handler
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

/**
 * Primary UI component for user text input
 */
export const Input = ({
  type = 'text',
  size = 'medium',
  label,
  placeholder,
  value,
  disabled = false,
  required = false,
  error,
  helperText,
  fullWidth = false,
  iconLeft,
  iconRight,
  onChange,
  onBlur,
  onFocus,
}: InputProps) => {
  const containerClassName = [
    'tsuite-input-container',
    fullWidth && 'tsuite-input-container--full-width',
  ]
    .filter(Boolean)
    .join(' ');

  const wrapperClassName = [
    'tsuite-input-wrapper',
    `tsuite-input-wrapper--${size}`,
    error && 'tsuite-input-wrapper--error',
    disabled && 'tsuite-input-wrapper--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassName}>
      {label && (
        <label className="tsuite-input-label">
          {label}
          {required && <span className="tsuite-input-label__required">*</span>}
        </label>
      )}
      <div className={wrapperClassName}>
        {iconLeft && (
          <span className="tsuite-input__icon-left">{iconLeft}</span>
        )}
        <input
          type={type}
          className="tsuite-input"
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {iconRight && (
          <span className="tsuite-input__icon-right">{iconRight}</span>
        )}
      </div>
      {(error || helperText) && (
        <div className={error ? 'tsuite-input-error' : 'tsuite-input-helper'}>
          {error || helperText}
        </div>
      )}
    </div>
  );
};
