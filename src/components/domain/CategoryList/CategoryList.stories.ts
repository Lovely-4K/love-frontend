import type { Meta, StoryObj } from '@storybook/react';
import CategoryList from './CategoryList';

const meta: Meta<typeof CategoryList> = {
  title: 'Components/Domain/CategoryList',
  component: CategoryList,

  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CategoryList>;

export const Default: Story = {};
