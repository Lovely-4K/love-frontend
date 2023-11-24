import { Pictures } from '~/types';

export const changeImageType = (img: Pictures) => {
  const imgArray: string[] = [];

  if (img === undefined || img === null) return imgArray;

  Object.entries(img).forEach(([_, value]) => {
    if (value === null) return;

    imgArray.push(value);
  });

  return imgArray;
};
