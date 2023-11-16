import { PropsWithChildren, createContext, useState } from 'react';

interface MapMarker {
  position: {
    lat: number;
    lng: number;
  };
  content: string;
  address: string;
  phone: string;
}

interface DiaryMapContextProps {
  markers: MapMarker[];
  setMarkers: React.Dispatch<React.SetStateAction<MapMarker[]>>;
  info: MapMarker | undefined;
  setInfo: React.Dispatch<React.SetStateAction<MapMarker | undefined>>;
  map: any;
  setMap: React.Dispatch<React.SetStateAction<any>>;
}

const DiaryMapContext = createContext({} as DiaryMapContextProps);

const DiaryMapProvider = ({ children }: PropsWithChildren) => {
  const [info, setInfo] = useState<MapMarker>();
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const [map, setMap] = useState<any>();

  return (
    <DiaryMapContext.Provider
      value={{ info, setInfo, markers, setMarkers, map, setMap }}
    >
      {children}
    </DiaryMapContext.Provider>
  );
};

export { DiaryMapContext, DiaryMapProvider };
