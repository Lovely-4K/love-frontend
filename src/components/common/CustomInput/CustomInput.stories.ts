import { Meta, StoryObj } from '@storybook/react';
import CustomInput from './CustomInput';

const meta: Meta<typeof CustomInput> = {
  title: 'Components/Common/CustomInput',
  component: CustomInput,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['medium', 'large'],
    },
    type: {
      control: { type: 'radio' },
      options: ['outline', 'flushed', 'noneStyle'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomInput>;

export const Default: Story = {
  args: {
    size: 'large',
    placehodler: 'input 컴포넌트 테스트',
    type: 'outline',
  },
};
