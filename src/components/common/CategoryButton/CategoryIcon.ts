import { HtmlHTMLAttributes } from 'react';
import categoryType from './CategoryTypes';
import {
  IconActivity,
  IconCafe,
  IconEtc,
  IconHotel,
  IconRestaurant,
} from '~/assets/icons';

interface CategoryIconProps extends HtmlHTMLAttributes<SVGElement> {
  type: categoryType;
}

const CategoryIcon = ({ type }: CategoryIconProps) => {
  switch (type) {
    case 'cafe':
      return IconCafe;
    case 'food':
      return IconRestaurant;
    case 'sleep':
      return IconHotel;
    case 'culture':
      return IconActivity;
    case 'etc':
      return IconEtc;
  }
};

export default CategoryIcon;
