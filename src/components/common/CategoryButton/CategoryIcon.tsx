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

const CategoryIcon = ({ type, ...props }: CategoryIconProps) => {
  switch (type) {
    case 'cafe':
      return <IconCafe {...props} />;
    case 'food':
      return <IconRestaurant {...props} />;
    case 'sleep':
      return <IconHotel {...props} />;
    case 'culture':
      return <IconActivity {...props} />;
    case 'etc':
      return <IconEtc {...props} />;
  }
};

export default CategoryIcon;
