import { CategoryButton } from '~/components/common';

const categories = ['cafe', 'food', 'sleep', 'culture', 'etc'] as const;

const CategoryList = () => {
  return (
    <ul className="flex w-full gap-5">
      {categories.map((category) => (
        <li key={category}>
          <CategoryButton type={category} active={false} />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
