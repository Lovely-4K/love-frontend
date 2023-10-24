import type { Meta, StoryObj } from '@storybook/react';
import MapPositionButton from './MapPositionButton';

const meta: Meta<typeof MapPositionButton> = {
  title: 'Components/Common/MapPositionButton',
  component: MapPositionButton,

  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MapPositionButton>;

export const Default: Story = {
  args: {
    currentPosition: true,
  },
};
