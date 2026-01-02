/**
 * T-Suite Design System
 * Main entry point for component library
 */

// Components
export { Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';

export { Input } from './components/Input/Input';
export type { InputProps } from './components/Input/Input';

export { Card } from './components/Card/Card';
export type { CardProps } from './components/Card/Card';

// Foundation
export * from './foundation';

// Design Tokens
export * from './tokens/tokens';

// Styles (CSS variables)
import './styles/tokens.css';
