import { Meta, StoryObj } from '@storybook/react';
import DotTag from './DotTag';

const meta: Meta<typeof DotTag> = {
  title: 'Components/Common/DotTag',
  component: DotTag,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DotTag>;

export const Default: Story = {
  args: { size: 'md' },
};
