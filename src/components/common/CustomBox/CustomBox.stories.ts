import { Meta, StoryObj } from '@storybook/react';
import CustomBox from './CustomBox';

const meta: Meta<typeof CustomBox> = {
  title: 'Components/Common/CustomBox',
  component: CustomBox,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CustomBox>;

export const Default: Story = {
  args: { width: '100px', height: '100px' },
};
