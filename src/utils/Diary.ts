import { Pictures } from '~/types';

export const changeImageType = (pictures: Pictures) => {
  const picturesArray: string[] = [];

  if (pictures === undefined || pictures === null) return picturesArray;

  Object.entries(pictures).forEach(([_, value]) => {
    if (value === null) return;

    picturesArray.push(value);
  });

  return picturesArray;
};
