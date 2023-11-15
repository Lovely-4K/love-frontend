import { PropsWithChildren, createContext, useState } from 'react';

interface MapMarker {
  position: {
    lat: number;
    lng: number;
  };
  content: any;
  address: any;
  phone: any;
}

interface DiaryMapContextProps {
  markers: MapMarker[];
  setMarkers: React.Dispatch<React.SetStateAction<MapMarker[]>>;
  info: MapMarker | undefined;
  setInfo: React.Dispatch<React.SetStateAction<MapMarker | undefined>>;
  map: any; // 여기서 map의 타입을 정확히 알고 있다면 해당 타입을 지정하세요.
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
