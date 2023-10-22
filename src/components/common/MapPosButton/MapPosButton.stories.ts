import { Meta, StoryObj } from '@storybook/react';
import MapPosButton from './MapPosButton';

const meta: Meta<typeof MapPosButton> = {
  title: 'Components/Common/MapPosButton',
  component: MapPosButton,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MapPosButton>;

export const Default: Story = {
  args: { active: false },
};
