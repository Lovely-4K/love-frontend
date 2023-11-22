import type categoryType from './CategoryTypes';
import { HtmlHTMLAttributes } from 'react';
import { CircleButton } from '..';
import CategoryIcon from './CategoryIcon';

interface CategoryButtonProps extends HtmlHTMLAttributes<HTMLDivElement> {
  type: categoryType;
  active: boolean;
  handleClickButton: (categoryType: categoryType) => void;
}

const titles: Record<categoryType, string> = {
  CAFE: '카페',
  FOOD: '음식점',
  SLEEP: '숙박',
  CULTURE: '문화시설',
  ETC: '기타',
};

const CategoryButton = ({
  type,
  active,
  handleClickButton,
}: CategoryButtonProps) => {
  const icon = CategoryIcon({ type });

  return (
    <div onClick={() => handleClickButton(type)}>
      <CircleButton active={active} icon={icon} label={titles[type]} />
    </div>
  );
};

export default CategoryButton;
