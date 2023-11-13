import { ChangeEvent, PropsWithChildren, createContext, useState } from 'react';

interface DiaryImgsContextProps {
  showImages: string[];
  setShowImages: React.Dispatch<React.SetStateAction<string[]>>;
  handleAddImages: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDeleteImage: (id: number) => void;
}

const DiaryImgsContext = createContext({} as DiaryImgsContextProps);

const DiaryImgsProvider = ({ children }: PropsWithChildren) => {
  const [showImages, setShowImages] = useState<string[]>([]);

  const handleAddImages = (event: ChangeEvent<HTMLInputElement>) => {
    const imageLists = event.target.files!;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }

    setShowImages(imageUrlLists);
  };

  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <DiaryImgsContext.Provider
      value={{ showImages, setShowImages, handleAddImages, handleDeleteImage }}
    >
      {children}
    </DiaryImgsContext.Provider>
  );
};

export { DiaryImgsContext, DiaryImgsProvider };
