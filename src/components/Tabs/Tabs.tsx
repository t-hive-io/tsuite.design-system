import React, { useState } from 'react';
import './Tabs.css';

export interface TabProps {
  label: string;
  value: string;
  selected?: boolean;
  onClick?: () => void;
}

export const Tab: React.FC<TabProps> = ({ label, selected = false, onClick }) => {
  return (
    <button
      className={`tab ${selected ? 'tab--selected' : ''}`}
      onClick={onClick}
      role="tab"
      aria-selected={selected}
    >
      {label}
    </button>
  );
};

export interface TabsProps {
  defaultValue?: string;
  children: React.ReactNode;
  onChange?: (value: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ 
  defaultValue, 
  children,
  onChange,
  className = '' 
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleTabClick = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <div className={`tabs ${className}`} role="tablist">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<TabProps>(child)) {
          return React.cloneElement(child, {
            selected: child.props.value === selectedValue,
            onClick: () => handleTabClick(child.props.value),
          });
        }
        return child;
      })}
    </div>
  );
};
