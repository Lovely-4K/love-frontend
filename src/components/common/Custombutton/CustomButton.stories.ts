import { Meta, StoryObj } from '@storybook/react';
import CustomButton from './CustomButton';

const meta: Meta<typeof CustomButton> = {
  title: 'Components/Common/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {
    buttonColor: {
      control: { type: 'color' },
    },
    size: {
      control: {
        type: 'radio',
        options: ['extraLarge', 'large', 'medium', 'small'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Default: Story = {
  args: { buttonColor: '#eee', size: 'medium', content: '버튼 테스트 ' },
};
