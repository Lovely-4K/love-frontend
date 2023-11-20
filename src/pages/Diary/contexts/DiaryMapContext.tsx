import { PropsWithChildren, createContext, useState } from 'react';
import { MapMarker } from '~/types';

interface DiaryMapContextProps {
  markers: MapMarker[];
  setMarkers: React.Dispatch<React.SetStateAction<MapMarker[]>>;
  info: MapMarker | undefined;
  setInfo: React.Dispatch<React.SetStateAction<MapMarker | undefined>>;
  map: kakao.maps.Map | undefined;
  setMap: React.Dispatch<React.SetStateAction<kakao.maps.Map | undefined>>;
  infoOpen: boolean;
  setInfoOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DiaryMapContext = createContext({} as DiaryMapContextProps);

const DiaryMapProvider = ({ children }: PropsWithChildren) => {
  const [info, setInfo] = useState<MapMarker>();
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const [map, setMap] = useState<kakao.maps.Map>();
  const [infoOpen, setInfoOpen] = useState<boolean>(false);

  return (
    <DiaryMapContext.Provider
      value={{
        info,
        setInfo,
        markers,
        setMarkers,
        map,
        setMap,
        infoOpen,
        setInfoOpen,
      }}
    >
      {children}
    </DiaryMapContext.Provider>
  );
};

export { DiaryMapContext, DiaryMapProvider };
