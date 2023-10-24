import type { Meta, StoryObj } from '@storybook/react';
import MapFilterButton from './MapFilterButton';

const meta: Meta<typeof MapFilterButton> = {
  title: 'Components/Common/MapFilterButton',
  component: MapFilterButton,

  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MapFilterButton>;

export const Default: Story = {
  args: {
    type: 'all',
  },
};
