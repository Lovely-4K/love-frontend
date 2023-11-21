import { HtmlHTMLAttributes } from 'react';
import { CircleButton } from '..';
import CategoryIcon from './CategoryIcon';
import categoryType from './CategoryTypes';

interface CategoryButtonProps extends HtmlHTMLAttributes<HTMLDivElement> {
  type: categoryType;
  active: boolean;
}

const titles: Record<categoryType, string> = {
  CAFE: '카페',
  FOOD: '음식점',
  ACCOMODATION: '숙박',
  CULTURE: '문화시설',
  ETC: '기타',
};

const CategoryButton = ({ type, active, onClick }: CategoryButtonProps) => {
  const icon = CategoryIcon({ type });

  return (
    <div onClick={onClick}>
      <CircleButton active={active} icon={icon} label={titles[type]} />
    </div>
  );
};

export default CategoryButton;
