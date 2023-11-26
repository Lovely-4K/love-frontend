import { PropsWithChildren, createContext, useState } from 'react';
import { Diarys, MapMarker } from '~/types';
import { MapCategory } from '~/pages/Diary/contexts/DiaryMapContext';
import useGetDiarys from '~/services/diary/useGetDiarys';

interface DiaryContextProps {
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  searchMode: boolean;
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>;
  sideBarToggle: boolean;
  setSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>;
  markers: MapMarker[];
  setMarkers: React.Dispatch<React.SetStateAction<MapMarker[]>>;
  selectCategory: string;
  setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
  selectSortMethod: string;
  setSelectSortMethod: React.Dispatch<React.SetStateAction<string>>;
  info: MapMarker | undefined;
  setInfo: React.Dispatch<React.SetStateAction<MapMarker | undefined>>;
  infoOpen: boolean;
  setInfoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  map: kakao.maps.Map | undefined;
  setMap: React.Dispatch<React.SetStateAction<kakao.maps.Map | undefined>>;
  diarys: Diarys;
  mapCategory: MapCategory;
  setMapCategory: React.Dispatch<React.SetStateAction<MapCategory>>;
}

const DiaryContext = createContext<DiaryContextProps | null>(null);

const DiaryProvider = ({ children }: PropsWithChildren) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchMode, setSearchMode] = useState(false);
  const [sideBarToggle, setSideBarToggle] = useState(true);
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const [selectCategory, setSelectCategory] = useState('');
  const [selectSortMethod, setSelectSortMethod] = useState('');
  const [info, setInfo] = useState<MapMarker>();
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [map, setMap] = useState<kakao.maps.Map>();
  const { data: diarys, isSuccess } = useGetDiarys();
  const [mapCategory, setMapCategory] = useState<MapCategory>('');

  if (!isSuccess) return;

  return (
    <DiaryContext.Provider
      value={{
        searchKeyword,
        setSearchKeyword,
        searchMode,
        setSearchMode,
        sideBarToggle,
        setSideBarToggle,
        markers,
        setMarkers,
        selectCategory,
        setSelectCategory,
        selectSortMethod,
        setSelectSortMethod,
        info,
        setInfo,
        infoOpen,
        setInfoOpen,
        map,
        setMap,
        diarys,
        mapCategory,
        setMapCategory,
      }}
    >
      {children}
    </DiaryContext.Provider>
  );
};

export { DiaryContext, DiaryProvider };
