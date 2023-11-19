import { PropsWithChildren, createContext, useState } from 'react';
import { MapMarker } from '~/types/map';

interface DiaryMapContextProps {
  markers: MapMarker[];
  setMarkers: React.Dispatch<React.SetStateAction<MapMarker[]>>;
  info: MapMarker | undefined;
  setInfo: React.Dispatch<React.SetStateAction<MapMarker | undefined>>;
  map: any;
  setMap: React.Dispatch<React.SetStateAction<any>>;
  infoOpen: boolean;
  setInfoOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DiaryMapContext = createContext({} as DiaryMapContextProps);

const DiaryMapProvider = ({ children }: PropsWithChildren) => {
  const [info, setInfo] = useState<MapMarker>();
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const [map, setMap] = useState<any>();
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
