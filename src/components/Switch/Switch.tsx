import React from 'react';
import './Switch.css';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  size = 'medium',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label className={`switch switch--${size} ${disabled ? 'switch--disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="switch__input"
      />
      <span className="switch__slider"></span>
      {label && <span className="switch__label">{label}</span>}
    </label>
  );
};
