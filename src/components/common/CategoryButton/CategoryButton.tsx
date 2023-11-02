import { HtmlHTMLAttributes } from 'react';
import { CircleButton } from '..';
import CategoryIcon from './CategoryIcon';
import categoryType from './CategoryTypes';

interface CategoryButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  type: categoryType;
  active: boolean;
}

const titles: Record<categoryType, string> = {
  cafe: '카페',
  food: '음식점',
  sleep: '숙박',
  culture: '문화시설',
  etc: '기타',
};

const CategoryButton = ({ type, active, onClick }: CategoryButtonProps) => {
  const icon = CategoryIcon({ type });

  return (
    <button onClick={onClick}>
      <CircleButton active={active} icon={icon} label={titles[type]} />
    </button>
  );
};

export default CategoryButton;
