/**
 * T-Suite Design System
 * Main entry point for component library
 */

// Components
export { Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';

export { Input } from './components/Input/Input';
export type { InputProps } from './components/Input/Input';

export { Switch } from './components/Switch/Switch';
export type { SwitchProps } from './components/Switch/Switch';

export { Accordion } from './components/Accordion/Accordion';
export type { AccordionProps } from './components/Accordion/Accordion';

export { Tabs, Tab } from './components/Tabs/Tabs';
export type { TabsProps, TabProps } from './components/Tabs/Tabs';

export { List, ListItem } from './components/List/List';
export type { ListProps, ListItemProps } from './components/List/List';

export { Icon } from './components/Icon/Icon';
export type { IconProps } from './components/Icon/Icon';

export { Divider } from './components/Divider/Divider';
export type { DividerProps } from './components/Divider/Divider';

// Design Tokens
export * from './tokens/tokens';

// Styles (CSS variables)
import './styles/tokens.css';
