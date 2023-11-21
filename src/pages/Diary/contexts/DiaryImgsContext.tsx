import { PropsWithChildren, createContext, useState } from 'react';

interface DiaryImgsContextProps {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const DiaryImgsContext = createContext({} as DiaryImgsContextProps);

const DiaryImgsProvider = ({ children }: PropsWithChildren) => {
  const [images, setImages] = useState<string[]>([]);

  return (
    <DiaryImgsContext.Provider value={{ images, setImages }}>
      {children}
    </DiaryImgsContext.Provider>
  );
};

export { DiaryImgsContext, DiaryImgsProvider };
