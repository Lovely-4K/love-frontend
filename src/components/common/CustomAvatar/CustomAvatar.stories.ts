import { Meta, StoryObj } from '@storybook/react';
import CustomAvatar from './CustomAvatar';

const meta: Meta<typeof CustomAvatar> = {
  title: 'Components/Common/CustomAvatar',
  component: CustomAvatar,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CustomAvatar>;

export const Default: Story = {
  args: { size: 'extraLarge' },
};
