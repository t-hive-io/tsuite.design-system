import React from 'react';
import './List.css';

export interface ListItemProps {
  children: React.ReactNode;
  selected?: boolean;
  secondLevel?: boolean;
  locked?: boolean;
  hover?: boolean;
  hide?: boolean;
  expanded?: boolean;
  visible?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  selected = false,
  secondLevel = false,
  locked = false,
  hover = false,
  hide = false,
  expanded = false,
  visible = true,
  onClick,
  className = '',
}) => {
  if (hide || !visible) return null;

  const classes = [
    'list-item',
    selected && 'list-item--selected',
    secondLevel && 'list-item--second-level',
    locked && 'list-item--locked',
    hover && 'list-item--hover',
    expanded && 'list-item--expanded',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={locked ? undefined : onClick}>
      {children}
    </div>
  );
};

export interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export const List: React.FC<ListProps> = ({ children, className = '' }) => {
  return <div className={`list ${className}`}>{children}</div>;
};
