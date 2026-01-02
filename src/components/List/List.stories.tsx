import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from './List';
import figmaDocs from '../../figma-docs.json';

const meta: Meta<typeof List> = {
  title: 'Components/Tree view',
  component: List,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1522:9414',
    },
    docs: {
      description: {
        component: figmaDocs.List?.description || '',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'ListItem components to display in the tree',
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
  ),
};

export const WithSelection: Story = {
  render: () => (
    <List>
      <ListItem selected>Selected item</ListItem>
      <ListItem>Normal item</ListItem>
      <ListItem>Another item</ListItem>
    </List>
  ),
};

export const SecondLevel: Story = {
  render: () => (
    <List>
      <ListItem>Parent item</ListItem>
      <ListItem secondLevel>Child item 1</ListItem>
      <ListItem secondLevel selected>Child item 2 (selected)</ListItem>
      <ListItem secondLevel>Child item 3</ListItem>
      <ListItem>Another parent</ListItem>
    </List>
  ),
};

export const LockedItems: Story = {
  render: () => (
    <List>
      <ListItem>Normal item</ListItem>
      <ListItem locked>Locked item</ListItem>
      <ListItem>Another normal item</ListItem>
    </List>
  ),
};

export const ExpandedState: Story = {
  render: () => (
    <List>
      <ListItem expanded visible>Expanded & visible</ListItem>
      <ListItem secondLevel>Nested item 1</ListItem>
      <ListItem secondLevel>Nested item 2</ListItem>
      <ListItem>Collapsed parent</ListItem>
    </List>
  ),
};

export const AllStates: Story = {
  render: () => (
    <List>
      <ListItem>Default state</ListItem>
      <ListItem selected>Selected</ListItem>
      <ListItem hover>Hover state</ListItem>
      <ListItem locked>Locked</ListItem>
      <ListItem secondLevel>Second level</ListItem>
      <ListItem secondLevel selected>Second level selected</ListItem>
      <ListItem expanded>Expanded</ListItem>
    </List>
  ),
};

export const FileTree: Story = {
  render: () => (
    <List>
      <ListItem expanded visible>📁 src</ListItem>
      <ListItem secondLevel expanded visible>📁 components</ListItem>
      <ListItem secondLevel>📄 Button.tsx</ListItem>
      <ListItem secondLevel selected>📄 Input.tsx</ListItem>
      <ListItem secondLevel>📄 Switch.tsx</ListItem>
      <ListItem secondLevel>📁 assets</ListItem>
      <ListItem secondLevel>📄 App.tsx</ListItem>
      <ListItem>📁 public</ListItem>
      <ListItem locked>🔒 node_modules</ListItem>
    </List>
  ),
};
