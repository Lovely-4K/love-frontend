import { Meta, StoryObj } from '@storybook/react';
import CustomImage from './CustomImage';

const meta: Meta<typeof CustomImage> = {
  title: 'Components/Common/CustomImage',
  component: CustomImage,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CustomImage>;

export const Default: Story = {
  args: { type: 'rectangle', src: 'https://via.placeholder.com/150' },
};
