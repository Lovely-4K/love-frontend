import { HtmlHTMLAttributes } from 'react';
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

const CategoryButton = ({
  type,
  active,
  onClick,
  ...props
}: CategoryButtonProps) => {
  const activeStyle = active
    ? 'border-base-primary bg-base-primary fill-base-white stroke-base-white'
    : 'border-grey-300 bg-base-white fill-grey-300 stroke-grey-300';

  return (
    <button onClick={onClick} className="flex w-11 flex-col items-center">
      <button
        className={`flex h-[1.875rem] w-[1.875rem] items-center justify-center rounded-full border-[1px] ${activeStyle}`}
        {...props}
      >
        <CategoryIcon className="h-4 w-4" type={type} />
      </button>
      <div className="text-xs">{titles[type]}</div>
    </button>
  );
};

export default CategoryButton;
