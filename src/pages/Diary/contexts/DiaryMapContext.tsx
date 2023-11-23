import { PropsWithChildren, createContext, useState } from 'react';

interface DiaryMapContextProps {
  // map: kakao.maps.Map | undefined;
  // setMap: React.Dispatch<React.SetStateAction<kakao.maps.Map | undefined>>;
  mapCategory: 'CAFE' | 'FOOD' | 'ACCOMODATION' | 'CULTURE' | '';
  setMapCategory: React.Dispatch<
    React.SetStateAction<'CAFE' | 'FOOD' | 'ACCOMODATION' | 'CULTURE' | ''>
  >;
}

const DiaryMapContext = createContext<DiaryMapContextProps | null>(null);

const DiaryMapProvider = ({ children }: PropsWithChildren) => {
  // const [map, setMap] = useState<kakao.maps.Map>();
  const [mapCategory, setMapCategory] = useState<
    'CAFE' | 'FOOD' | 'ACCOMODATION' | 'CULTURE' | ''
  >('');

  return (
    <DiaryMapContext.Provider
      value={{
        // map,
        // setMap,
        mapCategory,
        setMapCategory,
      }}
    >
      {children}
    </DiaryMapContext.Provider>
  );
};

export { DiaryMapContext, DiaryMapProvider };
