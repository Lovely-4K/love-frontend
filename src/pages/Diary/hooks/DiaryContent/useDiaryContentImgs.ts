import { ChangeEvent, useContext } from 'react';
import { DiaryImgsContext } from '~/pages/Diary/contexts/DiaryImgsContext';

const useDiaryContentImgs = () => {
  const diaryImgContext = useContext(DiaryImgsContext);

  if (!diaryImgContext) {
    throw new Error('DiaryImgContext is null');
  }
  const { images, setImages } = diaryImgContext;

  const handleAddImages = (event: ChangeEvent<HTMLInputElement>) => {
    const imageLists = event.target.files!;
    let imageUrlLists = [...images];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }

    setImages(imageUrlLists);
  };

  const handleDeleteImage = (id: number) => {
    setImages(images.filter((_, index) => index !== id));
  };

  return { images, handleAddImages, handleDeleteImage };
};

export default useDiaryContentImgs;
