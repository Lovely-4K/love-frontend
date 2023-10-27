import type { Meta, StoryObj } from '@storybook/react';
import MapCurPosButton from './MapCurPosButton';

const meta: Meta<typeof MapCurPosButton> = {
  title: 'Components/Common/MapCurPosButton',
  component: MapCurPosButton,

  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MapCurPosButton>;

export const Default: Story = {
  args: {
    currentPosition: true,
  },
};
