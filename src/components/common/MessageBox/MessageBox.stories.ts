import { Meta, StoryObj } from '@storybook/react';
import MessageBox from './MessageBox';

const meta: Meta<typeof MessageBox> = {
  title: 'Components/Common/MessageBox',
  component: MessageBox,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MessageBox>;

export const Default: Story = {
  args: { direction: 'right', text: '세미콜론 쓰기' },
};
