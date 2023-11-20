import { PropsWithChildren, createContext, useState } from 'react';
import { MapMarker } from '~/types';

interface DiaryContextProps {
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  sideBarToggle: boolean;
  setSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>;
  markers: MapMarker[];
  setMarkers: React.Dispatch<React.SetStateAction<MapMarker[]>>;
}

const DiaryContext = createContext<DiaryContextProps | null>(null);

const DiaryProvider = ({ children }: PropsWithChildren) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sideBarToggle, setSideBarToggle] = useState(true);
  const [markers, setMarkers] = useState<MapMarker[]>([]);

  return (
    <DiaryContext.Provider
      value={{
        searchKeyword,
        setSearchKeyword,
        sideBarToggle,
        setSideBarToggle,
        markers,
        setMarkers,
      }}
    >
      {children}
    </DiaryContext.Provider>
  );
};

export { DiaryContext, DiaryProvider };
