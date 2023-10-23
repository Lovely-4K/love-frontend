import { Meta, StoryObj } from '@storybook/react';
import CustomButton from './CustomButton';

const meta: Meta<typeof CustomButton> = {
  title: 'Components/Common/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Default: Story = {
  args: {
    buttonColor: '#000',
    size: 'medium',
    content: '버튼 테스트 ',
    contentColor: '#fff',
  },
};
