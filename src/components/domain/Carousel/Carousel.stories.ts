import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Domain/Carousel',
  component: Carousel,

  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    pictures: [
      'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg',
      'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    ],
  },
};
