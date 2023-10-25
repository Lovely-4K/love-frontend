import type { Meta, StoryObj } from '@storybook/react';
import CategoryButton from './CategoryButton';

const meta: Meta<typeof CategoryButton> = {
  title: 'Components/Common/CategoryButton',
  component: CategoryButton,

  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CategoryButton>;

export const Default: Story = {
  args: {
    type: 'cafe',
  },
};
