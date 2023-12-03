import { PropsWithChildren, createContext, useState } from 'react';
import { DiaryContent, MapMarker } from '~/types';
import categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { DiaryMapProvider } from '~/pages/Diary/contexts/DiaryMapContext';
import useClickPreview from '~/pages/Diary/hooks/Diary/useClickPreview';
import useMapLocation from '~/pages/Diary/hooks/Diary/useCurrentLocation';
import useHandleMarker from '~/pages/Diary/hooks/Diary/useHandleMarker';
import useInfoToggle from '~/pages/Diary/hooks/Diary/useInfoToggle';
import useInputRef from '~/pages/Diary/hooks/Diary/useInputRef';
import useMapCategory from '~/pages/Diary/hooks/Diary/useMapCategory';
import useSearch from '~/pages/Diary/hooks/Diary/useMapLocation';
import useSideBar from '~/pages/Diary/hooks/Diary/useSideBar';

export interface DiaryContextProps {
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  searchMode: boolean;
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>;
  sideBarToggle: boolean;
  setSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>;
  markers: MapMarker[];
  setMarkers: React.Dispatch<React.SetStateAction<MapMarker[]>>;
  diaryMarkers: MapMarker[];
  setDiaryMarkers: React.Dispatch<React.SetStateAction<MapMarker[]>>;
  info: MapMarker | undefined;
  setInfo: React.Dispatch<React.SetStateAction<MapMarker | undefined>>;
  infoOpen: boolean;
  setInfoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  map: kakao.maps.Map | undefined;
  setMap: React.Dispatch<React.SetStateAction<kakao.maps.Map | undefined>>;
  rootDiarys: DiaryContent[];
  setRootDiarys: React.Dispatch<React.SetStateAction<DiaryContent[]>>;
  mapCategory: categoryType | undefined;
  setMapCategory: React.Dispatch<
    React.SetStateAction<categoryType | undefined>
  >;

  methods: {
    handleInfo: ReturnType<typeof useInfoToggle>;
    handleSideBar: ReturnType<typeof useSideBar>;
    handleMarkers: ReturnType<typeof useHandleMarker>;
    handleInput: ReturnType<typeof useInputRef>;
    handleMapCategories: ReturnType<typeof useMapCategory>;
    handleClickPreviews: ReturnType<typeof useClickPreview>;
    handleLocation: ReturnType<typeof useMapLocation>;
    handleSearch: ReturnType<typeof useSearch>;
  };
}

const DiaryContext = createContext<DiaryContextProps | null>(null);

const DiaryProvider = ({ children }: PropsWithChildren) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchMode, setSearchMode] = useState(false);
  const [sideBarToggle, setSideBarToggle] = useState(true);
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const [diaryMarkers, setDiaryMarkers] = useState<MapMarker[]>([]);

  const [info, setInfo] = useState<MapMarker>();
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [map, setMap] = useState<kakao.maps.Map>();
  const [mapCategory, setMapCategory] = useState<categoryType | undefined>(
    undefined,
  );
  const [rootDiarys, setRootDiarys] = useState<DiaryContent[]>([]);

  const handleInfo = useInfoToggle({ infoOpen, setInfoOpen, setInfo });
  const handleSideBar = useSideBar({ sideBarToggle, setSideBarToggle });
  const handleMarkers = useHandleMarker({
    handleInfo,
    handleSideBar,
    setMarkers,
  });
  const handleInput = useInputRef({
    setSearchKeyword,
    searchMode,
    setSearchMode,
    mapCategory,
  });
  const handleMapCategories = useMapCategory({
    setMapCategory,
    searchKeyword,
    handleInfo,
    handleInput,
    handleMarkers,
    map,
    mapCategory,
  });
  const handleLocation = useMapLocation({ map });
  const handleClickPreviews = useClickPreview({
    map,
    info,
    handleInfo,
    handleMapCategories,
    handleMarkers,
    handleInput,
    handleLocation,
  });
  const handleSearch = useSearch({
    map,
    searchKeyword,
    handleInput,
    handleMapCategories,
    handleLocation,
    handleMarkers,
    handleInfo,
  });

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
        diaryMarkers,
        setDiaryMarkers,
        info,
        setInfo,
        infoOpen,
        setInfoOpen,
        map,
        setMap,
        rootDiarys,
        setRootDiarys,
        mapCategory,
        setMapCategory,

        methods: {
          handleInfo,
          handleSideBar,
          handleMarkers,
          handleInput,
          handleMapCategories,
          handleClickPreviews,
          handleLocation,
          handleSearch,
        },
      }}
    >
      <DiaryMapProvider>{children}</DiaryMapProvider>
    </DiaryContext.Provider>
  );
};

export { DiaryContext, DiaryProvider };
