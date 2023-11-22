import { PropsWithChildren, createContext, useState } from 'react';

interface DiaryImgsContextProps {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

interface DiaryImgsProviderProps extends PropsWithChildren {
  defaultImages?: string[];
}

const DiaryImgsContext = createContext<DiaryImgsContextProps | null>(null);

const DiaryImgsProvider = ({
  defaultImages = [],
  children,
}: DiaryImgsProviderProps) => {
  const [images, setImages] = useState<string[]>(defaultImages);

  return (
    <DiaryImgsContext.Provider value={{ images, setImages }}>
      {children}
    </DiaryImgsContext.Provider>
  );
};

export { DiaryImgsContext, DiaryImgsProvider };
