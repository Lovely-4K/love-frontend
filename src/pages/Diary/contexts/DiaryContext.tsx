import { PropsWithChildren, createContext, useState } from 'react';
import { Diarys, MapMarker } from '~/types';
import categoryType from '~/components/common/CategoryButton/CategoryTypes';
import {
  DiaryMapProvider,
  MapCategory,
} from '~/pages/Diary/contexts/DiaryMapContext';
import useClickPreview from '~/pages/Diary/hooks/Diary/useClickPreview';
import useMapLocation from '~/pages/Diary/hooks/Diary/useCurrentLocation';
import useHandleMarker from '~/pages/Diary/hooks/Diary/useHandleMarker';
import useInfoToggle from '~/pages/Diary/hooks/Diary/useInfoToggle';
import useInputRef from '~/pages/Diary/hooks/Diary/useInputRef';
import useMapCategory from '~/pages/Diary/hooks/Diary/useMapCategory';
import useSideBar from '~/pages/Diary/hooks/Diary/useSideBar';
import useDiaryMap from '~/pages/Diary/hooks/DiaryMap/useDiaryMap';
import useGetDiarys from '~/services/diary/useGetDiarys';

export interface DiaryContextProps {
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  searchMode: boolean;
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>;
  sideBarToggle: boolean;
  setSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>;
  markers: MapMarker[];
  setMarkers: React.Dispatch<React.SetStateAction<MapMarker[]>>;
  selectCategory: categoryType | undefined;
  setSelectCategory: React.Dispatch<
    React.SetStateAction<categoryType | undefined>
  >;
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

  methods: {
    handleInfo: ReturnType<typeof useInfoToggle>;
    handleSideBar: ReturnType<typeof useSideBar>;
    handleMarkers: ReturnType<typeof useHandleMarker>;
    handleInput: ReturnType<typeof useInputRef>;
    handleMapCategories: ReturnType<typeof useMapCategory>;
    handleClickPreviews: ReturnType<typeof useClickPreview>;
    handleLocation: ReturnType<typeof useMapLocation>;
  };
}

const DiaryContext = createContext<DiaryContextProps | null>(null);

const DiaryProvider = ({ children }: PropsWithChildren) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchMode, setSearchMode] = useState(false);
  const [sideBarToggle, setSideBarToggle] = useState(true);
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const [selectCategory, setSelectCategory] = useState<
    categoryType | undefined
  >(undefined);
  const [selectSortMethod, setSelectSortMethod] = useState<string>('');
  const [info, setInfo] = useState<MapMarker>();
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [map, setMap] = useState<kakao.maps.Map>();
  const [mapCategory, setMapCategory] = useState<MapCategory>('');
  const { data: diarys, isSuccess } = useGetDiarys();

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
  const handleClickPreviews = useClickPreview({ map, handleInfo });
  const handleLocation = useMapLocation({ map });

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

        methods: {
          handleInfo,
          handleSideBar,
          handleMarkers,
          handleInput,
          handleMapCategories,
          handleClickPreviews,
          handleLocation,
        },
      }}
    >
      <DiaryMapProvider>{children}</DiaryMapProvider>
    </DiaryContext.Provider>
  );
};

export { DiaryContext, DiaryProvider };
