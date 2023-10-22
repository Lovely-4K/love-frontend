import { Meta, StoryObj } from '@storybook/react';
import TemperatureBar from './TemperatureBar';

const meta: Meta<typeof TemperatureBar> = {
  title: 'Components/Common/TemperatureBar',
  component: TemperatureBar,
  tags: ['autodocs'],
  argTypes: {
    horizontal: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TemperatureBar>;

export const Default: Story = {
  args: { percent: 50 },
};
