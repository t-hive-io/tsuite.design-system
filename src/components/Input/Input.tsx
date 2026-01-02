import React from 'react';
import './Input.css';

export interface InputProps {
  type?: 'text' | 'number' | 'icon+val' | 'val+unit' | 'val+icon';
  state?: 'enabled' | 'disabled' | 'error' | 'focused';
  value?: string;
  placeholder?: string;
  label?: string;
  icon?: string;
  unit?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  state = 'enabled',
  value = '',
  placeholder = '',
  label,
  icon,
  unit,
  onChange,
  className = '',
}) => {
  const classes = [
    'input-wrapper',
    `input--${state}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        {(type === 'icon+val' || type === 'val+icon') && icon && (
          <span className={`input-icon ${type === 'val+icon' ? 'input-icon--right' : ''}`}>
            {icon}
          </span>
        )}
        <input
          type={type === 'number' ? 'number' : 'text'}
          className="input-field"
          value={value}
          placeholder={placeholder}
          disabled={state === 'disabled'}
          onChange={(e) => onChange?.(e.target.value)}
        />
        {type === 'val+unit' && unit && (
          <span className="input-unit">{unit}</span>
        )}
      </div>
    </div>
  );
};
