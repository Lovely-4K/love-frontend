import type categoryType from './CategoryTypes';
import { HtmlHTMLAttributes } from 'react';
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
    case 'CAFE':
      return IconCafe;
    case 'FOOD':
      return IconRestaurant;
    case 'SLEEP':
      return IconHotel;
    case 'CULTURE':
      return IconActivity;
    case 'ETC':
      return IconEtc;
  }
};

export default CategoryIcon;
