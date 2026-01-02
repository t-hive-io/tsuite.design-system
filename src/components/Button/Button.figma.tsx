import React from 'react';
import { figma } from '@figma/code-connect';
import { Button } from './Button';

/**
 * Figma Code Connect configuration for Button component
 * This file links the Figma component to the React implementation
 * and pulls documentation directly from Figma
 */

figma.connect(
  Button,
  'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1428-9176',
  {
    props: {
      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
        Outlined: 'outlined',
        Link: 'link',
      }),
      icon: figma.enum('Icon', {
        True: true,
        False: false,
      }),
      disabled: figma.enum('State', {
        Disabled: true,
        Default: false,
        Active: false,
        Hover: false,
      }),
      active: figma.enum('State', {
        Active: true,
        Default: false,
        Disabled: false,
        Hover: false,
      }),
      children: figma.string('Button text'),
    },
    example: (props) => <Button {...props} />,
  }
);
