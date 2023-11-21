import { PropsWithChildren, createContext, useState } from 'react';
import { MapMarker } from '~/types';

interface DiaryMapContextProps {
  info: MapMarker | undefined;
  setInfo: React.Dispatch<React.SetStateAction<MapMarker | undefined>>;
  map: kakao.maps.Map | undefined;
  setMap: React.Dispatch<React.SetStateAction<kakao.maps.Map | undefined>>;
  infoOpen: boolean;
  setInfoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mapCategory: 'CAFE' | 'FOOD' | 'ACCOMODATION' | 'CULTURE' | '';
  setMapCategory: React.Dispatch<
    React.SetStateAction<'CAFE' | 'FOOD' | 'ACCOMODATION' | 'CULTURE' | ''>
  >;
}

const DiaryMapContext = createContext<DiaryMapContextProps | null>(null);

const DiaryMapProvider = ({ children }: PropsWithChildren) => {
  const [info, setInfo] = useState<MapMarker>();
  const [map, setMap] = useState<kakao.maps.Map>();
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [mapCategory, setMapCategory] = useState<
    'CAFE' | 'FOOD' | 'ACCOMODATION' | 'CULTURE' | ''
  >('');

  return (
    <DiaryMapContext.Provider
      value={{
        info,
        setInfo,
        map,
        setMap,
        infoOpen,
        setInfoOpen,
        mapCategory,
        setMapCategory,
      }}
    >
      {children}
    </DiaryMapContext.Provider>
  );
};

export { DiaryMapContext, DiaryMapProvider };
