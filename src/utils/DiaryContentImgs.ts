import { Pictures } from '~/types';

export const changeImageType = (img: Pictures) => {
  const imgArray: string[] = [];

  Object.entries(img).forEach(([_, value]) => {
    if (value === null) return;

    imgArray.push(value);
  });

  return imgArray;
};
